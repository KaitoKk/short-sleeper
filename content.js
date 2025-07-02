(function() {
  'use strict';

  function hideShorts() {
    // ホームページのShortsセクションを非表示
    const shortsShelf = document.querySelector('ytd-rich-shelf-renderer[is-shorts]');
    if (shortsShelf) {
      shortsShelf.style.display = 'none';
    }

    // ホームページのShorts動画を個別に非表示
    const shortsVideos = document.querySelectorAll('ytd-rich-item-renderer:has(ytd-reel-item-renderer)');
    shortsVideos.forEach(video => {
      video.style.display = 'none';
    });

    // Shortsタブを非表示
    const shortsTab = document.querySelector('yt-tab-shape[tab-title="Shorts"], paper-tab:has([aria-label*="Shorts"])');
    if (shortsTab) {
      shortsTab.style.display = 'none';
    }

    // サイドバーのShortsリンクを非表示
    const sidebarShorts = document.querySelector('ytd-guide-entry-renderer:has([title="ショート"])');
    if (sidebarShorts) {
      sidebarShorts.style.display = 'none';
    }

    // 英語版のShortsリンクも非表示
    const sidebarShortsEn = document.querySelector('ytd-guide-entry-renderer:has([title="Shorts"])');
    if (sidebarShortsEn) {
      sidebarShortsEn.style.display = 'none';
    }

    // ミニサイドバーのShortsリンクを非表示（日本語）
    const miniSidebarShorts = document.querySelector('ytd-mini-guide-entry-renderer[aria-label="ショート"]');
    if (miniSidebarShorts) {
      miniSidebarShorts.style.display = 'none';
    }

    // ミニサイドバーのShortsリンクを非表示（英語）
    const miniSidebarShortsEn = document.querySelector('ytd-mini-guide-entry-renderer[aria-label="Shorts"]');
    if (miniSidebarShortsEn) {
      miniSidebarShortsEn.style.display = 'none';
    }
  }

  // 初回実行
  hideShorts();

  // ページの動的変更を監視
  const observer = new MutationObserver(function(mutations) {
    let shouldCheck = false;
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldCheck = true;
      }
    });
    
    if (shouldCheck) {
      setTimeout(hideShorts, 100);
    }
  });

  // 監視開始
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // URLの変更も監視（YouTubeはSPAなため）
  let currentUrl = location.href;
  setInterval(() => {
    if (location.href !== currentUrl) {
      currentUrl = location.href;
      setTimeout(hideShorts, 500);
    }
  }, 1000);

})();