# YouTube Shorts Blocker

YouTubeのショート動画を非表示にするChrome拡張機能です。

## 機能

- **ホームページ**: Shortsセクションと個別Shorts動画を非表示
- **サイドバー**: Shortsリンクを非表示（拡張・縮小状態両方対応）
- **動画視聴ページ**: 右側のおすすめ動画リスト内のShortsセクションを非表示
- **検索ページ**: Shortsセクションを非表示
- **ナビゲーション**: Shortsタブを非表示

## インストール方法

1. Chrome設定を開く（`chrome://settings/`）
2. 左メニューから「拡張機能」を選択（または `chrome://extensions/` にアクセス）
3. 右上の「開発者モード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. このフォルダを選択

## ファイル構成

- `manifest.json`: 拡張機能の設定ファイル
- `content.js`: YouTubeページでショート動画を非表示にするスクリプト
- `README.md`: このファイル

## 対応ブラウザ

- Google Chrome（Manifest V3対応）
- その他Chromium系ブラウザ（Arc、Edge等）

## 技術仕様

- **Manifest Version**: 3
- **Permissions**: activeTab（現在のタブでのみ動作）
- **対応言語**: 日本語・英語のYouTubeインターフェース

## 注意事項

- YouTubeの仕様変更により動作しなくなる場合があります
- 拡張機能を無効化することで元の表示に戻せます
- 動的に読み込まれるコンテンツにも対応（MutationObserver使用）