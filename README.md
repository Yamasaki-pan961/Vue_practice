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

document:ブラウザが用意する変数　中にはHTMLに関するオブジェクトDOMが入っている
DOM:Document object model 

仮想DOM
render:function(なんでも){
    return なんでも('h1','こんにちは');
    //仮想DOMのために仮想NODEを返している
}

JavaScriptで
document.createElement('div');
//実際にDOMを作っている