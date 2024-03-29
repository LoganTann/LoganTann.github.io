"use strict";
// @ts-check
/**
 * @typedef {{
 *  PageInfo: Record<string, number>,
 *  Items: ArticleMetaItem[],
 * }} LibraryBody
 */
/**
 * @typedef {{
 *  Id: string,
 *  LinkId: string,
 *  Name: string,
 *  Title: string,
 *  PublishedDtm: string,
 * }} ArticleMetaItem
 */
/**
 * @typedef {{
 *  LinkId: string,
 *  Body: string,
 * }} ArticleItemBody
 */

const dateFormatter = new Intl.DateTimeFormat('fr-BE', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
});
const defaultImage = 'https://placehold.co/600x400';

/**
 * @author LoganTann
 */
async function main() {
    const articles = await fetchArticles();
    await addArticleCards(articles);
    await Promise.allSettled(
        articles.map(article => hydrateCardImage(article))
    );
}
document.addEventListener('DOMContentLoaded', main);

/**
 * @return {Promise<ArticleMetaItem[]>} List of articles, sorted by date
 */
async function fetchArticles() {
    const request = await fetch('https://testapi.io/api/aghp0/library');
    /** @type {LibraryBody} */
    const response = await request.json();
    return response.Items
            .sort((a, b) => b.PublishedDtm.localeCompare(a.PublishedDtm));
}

/**
 * @param {ArticleMetaItem[]} articles list of article to create cards for
 */
async function addArticleCards(articles) {
    const container = document.getElementById('articlesList');
    if (!container) {
        throw new Error('No articlesList found');
    }
    container.innerHTML = '';
    for (const article of articles) {
        const card = articleToCard(article);
        container.appendChild(card);
    }
}

/**
 * @param {ArticleMetaItem} article Article structure to convert to a card
 * @return {HTMLElement} Card element ready to be inserted into the DOM
 */
function articleToCard(article) {
    const dateCreated = new Date(article.PublishedDtm);
    const card = document.createElement('a');
    card.className = 'card';
    card.href = `#/article/${article.LinkId}`;
    card.dataset.articleUuid = article.Id;
    card.innerHTML = `
        <div class="card--image">
            <img src="./img/skeleton.svg" alt="Article preview image">
        </div>
        <div class="card--body">
            <h5 class="card--body__title">${sanitizeHTML(article.Title)}</h5>
            <p class="card--body__content">${sanitizeHTML(article.Name)}</p>
        </div>
        <div class="card--date">${dateFormatter.format(dateCreated)}</div>
    `;
    return card;
}

/**
 * @param {ArticleMetaItem} article list of articles to fetch image and hydrate the cards with
 */
async function hydrateCardImage(article) {
    /** @type {HTMLImageElement | null} */
    const cardImageElement = document.querySelector(
        `[data-article-uuid="${article.Id}"] .card--image img`
    );
    if (!cardImageElement) {
        return;
    }

    const request = await fetch(`https://testapi.io/api/aghp0/library/${article.LinkId}`);
    /** @type {ArticleItemBody} */
    const response = await request.json();
    cardImageElement.src = getImageUrl(response);
}

/**
 * @param {ArticleItemBody} article Article structure to extract the preview image from
 * @return {string} Direct URL link to the preview image
 */
function getImageUrl(article) {
    const parsedHtmlBody = document.createElement('div', {});
    parsedHtmlBody.innerHTML = article.Body;
    const previewImage = parsedHtmlBody.querySelector("#previewImage")?.textContent;
    return previewImage ? `https://myhealthpartner.be/${previewImage}` : defaultImage;
}

/**
 * @param {string} unsafeHTML 
 * @returns {string} Sanitized HTML
 */
function sanitizeHTML(unsafeHTML) {
    return unsafeHTML
        .replace(/&/g, "&amp;") 
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}