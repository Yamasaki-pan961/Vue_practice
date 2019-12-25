# Veu
Vue を学びます
Vue.js https://jp.vuejs.org/index.html
CDN:HTMLに直接読み込むとVue.jsが使える

ウェブでHTMLのコードを書くhttps://jsfiddle.net/

vue.jsをダウンロードしそれをHTMLから呼び出すことによってローカルでVueが使える

v-once 一度だけ表示する

v-html ディレクデブはクロススクリプティングという脆弱性を生む。スクリプトタグなどを埋め込めるため悪用される。

v-bind　属性値の内容を変数で指定できる。コロンで省略できる。

v-onでつかえるイベント一覧
https://developer.mozilla.org/ja/docs/Web/Events

VueAPI
https://jp.vuejs.org/v2/api/

# 仮想DOM

document:ブラウザが用意する変数　中にはHTMLに関するオブジェクトDOMが入っている
DOM:Document object model 

render:function(なんでも){
    return なんでも('h1','こんにちは');
    //仮想DOMのために仮想NODEを返している
}
VueJSは仮想DOMを通してDOMを書き換えている

JavaScriptで
document.createElement('div');
//実際にDOMを作っている

仮想DOMの必要性
ブラウザが持つDOMにアクセスするのは時間がかかる
部分的にDOMを変更するに必要なことは
現在のDOMと変更後のDOMを比べ、その差が変更するべき箇所である。
JSにその二つのDOMを仮想的に持たせることによって、DOMへのアクセスを最小限にする

# VueCLI
ファイルの分割をできる。
最終的なコードの軽量化。
Babel（ESfileのバージョンを合わせる)、TypeScript、ESLintなどのプラグインできる
HMR(Hot Module Replacement)
 .vue TS SCSS pug ES6 などの使用

 node.jsをインストールした状態で
 npm install -g @vue/cli

 vueCLI を使いたいディレクトリで
 vue create [なまえ]
 