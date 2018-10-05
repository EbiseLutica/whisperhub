# WhisperHub

日本語 ・ [English](README.md)

### 仮面をかぶってつぶやこう。匿名型マイクロブログサービス 🎭

WhisperHub は、TypeScriptで書かれた、オープンソースのマイクロブログサービスです。とはいえ、これはただのマイクロブログではありません。

## 匿名ユーザー

WhisperHub 上では、ユーザーは自分の名前を名乗る必要がありません。すべての投稿は、ユーザー名を含めずに表示されます。2ちゃんねるなどに近いです。

詳細情報は[Wiki](https://wiki.citringo.net/doku.php?id=whisperhub)に書かれています。

## 必要なもの

- node
- npm または yarn
- mongodb

## ビルド方法

``` shell
git clone https://github.com/xeltica/whisperhub
cd whisperhub

# 依存しているすべてのライブラリをダウンロード
npm i
# サーバーを起動
npm run serve
# ...またはStoryBookを起動
npm run books

# もしyarnを使いたければ
yarn
yarn serve
yarn books
```

## コントリビューション

バグ報告や機能向上、新たな機能の依頼などは [Issues](/xeltica/whisperhub/issues) から

プルリクエストを送るなら [Pull Requests](/xeltica/whisperhub/pulls) から

## LICENSE

[MIT LICENSE](LICENSE)です。あなたは自己責任でインスタンスを建てることができますが、私の著作権表記を**消してはいけません。**
