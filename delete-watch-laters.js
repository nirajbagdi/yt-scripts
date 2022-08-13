'use strict';

const listContainer = document.querySelector('#contents.ytd-playlist-video-list-renderer');
let timer = null;
let isDone = false;
let i = 0;

const deleteWatchLaterVideos = async () => {
    const videoItems = listContainer?.querySelectorAll('ytd-playlist-video-renderer');

    // Don't run if no items exists
    if (!videoItems.length) {
        console.log('Deleted videos successfully');
        isDone = true;
        clearInterval(timer);
        return;
    }

    const [videoItem] = videoItems;
    const videoTitle = videoItem.querySelector('#video-title').textContent.trim();

    // Clicking the menu button
    await videoItem.querySelector('#menu button').click();

    // Clicking the delete option
    const videoOptions = document.querySelectorAll('ytd-popup-container ytd-menu-service-item-renderer');
    await videoOptions[3].click();

    console.log(`Deleted "${videoTitle}"`);
};

const startDeleting = () => {
    if (isDone) return;
    if (timer) clearInterval(timer);
    timer = setInterval(async () => await deleteWatchLaterVideos(), 700);
};
