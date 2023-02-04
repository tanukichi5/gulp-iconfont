# gulpで自作アイコン（svg）をアイコンフォントに変換

普段使用しているgulpでアイコンフォントを作成する機能を抽出したリポジトリです。  
astroも入っていますが、これは**アイコンフォントの表示確認をするため**に入れてるだけです。  
基本的に**gulpとscssが動く環境であれば使える**はずです！


- node v18.14.0
- npm v9.3.1
- gulp v4.0.2
- astro v2.0.6


## 環境構築（初回のみ）

```
npm i
```


## 開発環境立ち上げ（astro）


```
npm run dev
```


## アイコンフォントの作成&使い方

まず以下のコマンドでアイコンフォントを作成するgulpがWatch状態になります。  

```
npm run iconfont
```

ディテクトリ構成

```
src
└ iconfont
　 ├ svg // アイコンフォント化したいsvgを格納
　 ├ templates // scssやプレビューファイルを作成するためのテンプレートを格納
　 └ sample.html // アイコンフォントのプレビュー用HTML
```

### アイコンフォントを作成

アイコンフォントのgulpを起動した状態で`svg`ディレクトリに**アイコンフォント化したいsvgを入れる**だけ。  
`sample.html`にアイコンフォントが追加されていれば成功です！

### アイコンフォントをプレビューで確認

`sample.html`をブラウザで開くだけ。  

プレビューには主に以下の内容が記載されています
- 使い方
- アイコンの見た目
- アイコン名
- アイコンのunicode

### アイコンフォントの使い方

**■reactコンポーネントの場合（.tsx、.jsx）**  
```
import IconFont from '@/components/common/IconFont'; //インポート
<IconFont icon=''アイコン名'' className={任意のclass名を設定設定できる} />
例)
<IconFont icon=''arrow-left'' />
```

**■htmlに直書きの場合（.html）**  
```
<span class="iconfont iconfont-[アイコン名]"></span>
例)
<span class="iconfont iconfont-arrow-left"></span>
```

**■cssで疑似要素に指定する場合（.scss、.css）**
```
&::after {
  font-family: "iconfont";
  content: '#{getIconfontUnicode([アイコン名])}';
  display: block;
}
例)
&::after {
  font-family: "iconfont";
  content: '#{getIconfontUnicode(arrow-left)}';
  display: block;
}
```
