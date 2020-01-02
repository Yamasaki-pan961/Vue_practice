# Veu
Vue を学びます

# 準備
Vue.js <https://jp.vuejs.org/index.html><br>
CDN:HTMLに直接読み込むとVue.jsが使える<br>
vue.jsをダウンロードしそれをHTMLから呼び出すことによってローカルでVueが使える

ウェブでHTMLのコードを書く<https://jsfiddle.net/>

# ディレクデブ
Vueで使える便利機能

## `{{}}`
変数内のデータを表示したりできる。
```html
<div id="app">
    <p>{{message}}</p>
    <p>{{number + 6}}</p>
    <p>{{OK ? 'Yes' : 'No'}}</p>
    <p>{{Hello()}}</p>
</div>
```
```js
new Vue({
    el:'#app',
    data:{
        message:'Hello World',
        number:4,
        OK:true
    },
    methods:{
        Hello:function(){
            return 'HELLO!';
        }
    }
})
```
## `v-on`
イベント発生時にいろいろできる。
```html
<button v-on:click="reverseMessage">メッセージ反転</button>
<button @click="reverseMessage">メッセージ反転</button>
```
イベント一覧
<https://developer.mozilla.org/ja/docs/Web/Events>

## `v-once`
一度だけ表示する（変数の値が変わっても変わらない）
```html
<p v-once>{{number}}</p>
```

## `v-html`
HTMLタグを埋め込む<br>
ディレクデブはクロススクリプティングという脆弱性を生む。<br>
スクリプトタグなどを埋め込めるため悪用される。
```html
<div v-html="title"></div>
```
```js
new Vue({
    el:'#app',
    data:{
        title:'<h1>タイトル名<h1>'
    }
})
```

## `v-bind`
属性値の内容を変数で指定できる
```html
<a v-bind:href="url1">Google</a>
<a :href="url2">Yahoo</a>
```
```js
new Vue({
    el:'#app',
    data:{
        url1: "https://www.google.co.jp/",
        url2: "https://www.yahoo.co.jp/",
    }
```
## `v-model`
双方向データ干渉を行う
```html
<input type="text" v-model="message">
<h1>{{message}}</h1>
```
```js
new Vue({
    el:'#app',
    data:{
        message:null
    }
})
```

# VueAPI(修飾子)
<https://jp.vuejs.org/v2/api/>

## イベント情報の取得
マウスのの座標を取得する<br>
HTML側ではイベント引数は省略される
```html
<p v-on:mousemove='MousePoint'>マウスを載せて</p>
```

```js
new Vue({
    el:'#app',
    data:{
        x:0,
        y:0
    },
    methods:{
        MousePoint:function(event){
            this.x=event.clientX;
            this.y=event.clientY;
        }
    }
})
```
複数の引数の場合は省略されない<br>
イベントの引数は`$event`
```html
<p v-on:mousemove='MousePoint($event,6)'>マウスを載せて</p>
```
```js
new Vue({
    el:'#app',
    data:{
        x:0,
        y:0
    },
    methods:{
        MousePoint: function(event , n){
            this.x = event.clientX *n;
            this.y = event.clientY*n;
        }
    }
})
```
## 部分的な`v-on`
`.stop`や`.stopPropagation()`を使う
```html
<p v-on:mousemove="MousePoint">マウスを載せて<span v-on:mousemove.stop="">[ここに載せても無駄です]</span></p>
```

## デフォルトの挙動をさせない
`.prevent`や`.preventDefault`
```html
<a v-on:click.prevent href="https://www.youtube.com/?gl=JP&hl=ja">YouTube</a>
```

## キーボードに反応させる
つなげれる修飾子もあればできないやつもある。
```html
<input type="text" v-on:keydown.space.enter="myAlert">
```
# `computed`プロパティ
動的な変数に対しての処理を行う<br>
変数に変更があったときのみ更新処理が行われる<br>
関数として書く必要がある<br>
`methods`は描画するたびに実行される
```html
<p>{{number}}回クリックされている。</p>
<button v-on:click='number++'>カウントアップ</button>
<p>{{Text1}}</p>
```
```js
new Vue({
    el:'#app',
    data:{
        number:0
    },
    computed:{
        Text1:function(){
            return this.number > 3 ? '３よりうえ':'３いか';
        }
    }
})
```
# `watch`プロパティ
非同期処理ができる<br>
`this.`が使えんから別の文字に当てよう（ようわからん）
```html
<p>{{number}}回クリックされている。</p>
<button v-on:click='number++'>カウントアップ</button>
<p>{{TextComputed}}</p>
```
```js
new Vue({
    el:'#app',
    data:{
        number:0
    },
    watch:{
        number:function(){
            var that=this;
            setTimeout(function()[
                that.number=0;
            ],3000)
        }
    }
})
```
# 動的な`class`
記号を含む変数名は`''`で囲む<br>
オブジェクトでもクラスを指定できる<br>
配列でも行ける
```html
<h1 :class="{red:isActive, 'bg-blue': !isActive}">HELLO!</h1>
<h1 :class="classObject">Object</h1>
<h1 :class="[color, bg]">Array</h1>
<button v-on:click="isActive = !isActive">切り替え</button>
```
```js
new Vue({
    el:'#app',
    data:{
        isActive:true,
        color:'red',
        bg:'bg-blue'
    },
    computed:{
        classObject:function(){
            return{
                red:this.isActive,
                'bg-blue':!this.isActive
            }
        }
    }
})
```
```css
.red{
    color:red;
}

.bg-blue{
    background-color:blue;
}
```
## 複数のスタイル属性
配列を使いましょう
```html
<h1 :style="[styleObject,baseObject]"> HELLO!</h1>
```
```js
new Vue({
    el:'#app',
    data:{
        styleObject:{
            color:'red',
            'background-color':'blue'
        },
        baseObject:{
            'fontSize':'60px'
        }
    }
})
```
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

.vueファイルは基本キャメルケース`totalNumber`<br>
`<template>`内の属性名はケバブケース`total-number`<br>
で書きましょう