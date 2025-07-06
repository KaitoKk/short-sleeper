# Firefox版 Short Sleeper インストール手順

## 方法1: 開発者モードでのインストール（推奨）

1. Firefoxを開いて `about:debugging` にアクセス
2. 「このFirefox」をクリック
3. 「一時的なアドオンを読み込む」をクリック
4. `manifest_firefox.json` ファイルを選択

## 方法2: .xpiファイルでのインストール

### .xpiファイルの作成
1. 以下のファイルを1つのフォルダにまとめる：
   - `manifest_firefox.json` → `manifest.json` にリネーム
   - `content.js`
   - `README.md`

2. フォルダ全体をZIP形式で圧縮

3. 拡張子を `.zip` から `.xpi` に変更

### インストール
1. Firefoxで `about:addons` にアクセス
2. 歯車アイコン → 「ファイルからアドオンをインストール」
3. 作成した `.xpi` ファイルを選択

## 対応ブラウザ

- Firefox 42.0以降
- Firefox ESR
- その他Gecko系ブラウザ

## 注意事項

- Firefox版では署名が必要な場合があります
- 開発者モードでのインストールは一時的で、Firefoxを再起動すると無効になります
- 永続的に使用したい場合は、Firefox Add-onsでの公開を検討してください