# Veu
Vue を学びます
Vue.js <https://jp.vuejs.org/index.html>
CDN:HTMLに直接読み込むとVue.jsが使える

ウェブでHTMLのコードを書く<https://jsfiddle.net/>

vue.jsをダウンロードしそれをHTMLから呼び出すことによってローカルでVueが使える

v-once 一度だけ表示する

v-html ディレクデブはクロススクリプティングという脆弱性を生む。スクリプトタグなどを埋め込めるため悪用される。

v-bind　属性値の内容を変数で指定できる。コロンで省略できる。

v-onでつかえるイベント一覧
<https://developer.mozilla.org/ja/docs/Web/Events>

VueAPI
<https://jp.vuejs.org/v2/api/>

# 仮想DOM

document:ブラウザが用意する変数　中にはHTMLに関するオブジェクトDOMが入っている
DOM:Document object model 
```
render:function(なんでも){
    return なんでも('h1','こんにちは');
    //仮想DOMのために仮想NODEを返している
}
```
VueJSは仮想DOMを通してDOMを書き換えている

JavaScriptで
document.createElement('div');
//実際にDOMを作っている

## 仮想DOMの必要性
ブラウザが持つDOMにアクセスするのは時間がかかる

部分的にDOMを変更するに必要なことは<br>
現在のDOMと変更後のDOMを比べ、その差が変更するべき箇所である。<br>
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
 vue create [なまえ小文字だけ？]

Publicフォルダーは不変なファイルを入れておく
srcフォルダーの中身を結合して一つのJSを作る。

.vueファイルはシングルファイルコンポ―ネント
シングルファイルコンポ―ネントの構成
・テンプレート
・スクリプト
・スタイル
.vueファイルはコンポーネントのオブジェクト（内容）を表している
.vueファイルはコンポーネントの書き方を変えただけ
`import`するとオブジェクトをもってる。

VueCLIを本番用でビルドする
npm run build //package.jsonに定義されているコマンドを呼び出す
distフォルダが出来上がる

# distフォルダ（最適化されてる）
publicフォルダ内はそのままコピーされるがsrcフォルダはまとめられ。<br>
nodeモジュールのプラグイン---> chunk-vendors.~~~.js<br>
srcフォルダの中身---> `app.???.js`<br>
cssもミニファイ化（1行で表示される）<br>

distフォルダをサーバーにおいておくとクライアントにdistフォルダが送信され、ブラウザーが勝手にやってくれる（静的）

# VueCLIでの実践開発
コンポーネントを使いVueインスタンスを再利用する。
Vueインスタンスは普通一回きりしか適応できない。
コンポーネントのなかではデータは関数で定義する。
コンポーネントが持つデータは同じコンポーネントで共有される。
動的なデータは共有されるとまずいので、初期値をreturnで書く

コンポーネント内の`template`はタグを入れ子にしなくてはならない
~~~
template:'<p>こんにちは</p><hr>' //ダメ

template:'<div><p>こんにちは</p><hr></div>
~~~

グローバルコンポーネント--> すべてのインスタンスで使えるコンポーネント

ローカルコンポーネント-->　インスタンスで指定して使うコンポーネント

`main.js`で`.vue`ファイルをインポートしグローバル登録する
```js
import Like_show form './Like_show.vue'

Vue.component('Like_show',Like_show);
```
ローカル登録
```js
import LikeHeader form './LikeHeader.vue'
export default{
    components:{
        LikeHeader
    }
}
```
# VueCLI動作確認
`npm run serve`でサーバーを起動して確認する<br>
HTMLファイルを直接プレビューしても動かない

# コンポーネントの命名規則
ケバブケース　ハイフンで区切る `like-header`<br>
パスカルケース　大文字で区切る `LikeHeader` <br>
キャメルケース　小文字->大文字 `likeHeader` <br>
統一しようね

DOMテンプレート（`public/index.html`とか）はケバブケースに書かなくてはならない。<br>
ブラウザーが大文字小文字を見分けできない<br>
ブラウザーはjsよりhtmlを先に読み込むため

# コンポーネントの`<style>`
すべての`<div>`に適応される
```css
<style>
	div{
		border:1px solid red;
	}
</style>
```
コンポーネント内のみに適応する
```css
<style scoped>
    div{
        border:1px solid red;
    }
</style>
```

# コンポーネント間のデータの受け渡し
### 親-->子<br>
子側
```js
export default {
  props:["number"]
}   
```
親側（静的）
```html
<Like_show number="10"></Like_show>
```
親側（動的）
```html
<Like_show v-bind:number="number"></Like_show>
```