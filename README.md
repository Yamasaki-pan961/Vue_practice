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
## `v-if`, `v-else`, `v-else-if`
`else`や`else-if`は`if`タグの直下にある必要がある
表示切替が少ないやつ向き
```html
<p v-if="ok">OK=true</p>
<p v-else-if="Maybe">maybe</p>
<p v-else>OK=false</p>
```
## `<template>`
`<div>`を使わずにグループ化できる<br>
DOMテンプレート要素にならない

## `v-show`
`else`や`template`は使えない<br>
表示切替が多いやつ向き<br>
`css`の`display="none"`を使っている
```html
<p v-show="ok" style="color:seagreen">OK</p>
```
## `v-for`
`in`でも`of`でも使える<br>
繰り返しに使える<br>
`v-for`は最小限の変更で済むようにふるまう<br>
```html
<ul>
    <li v-for="i in agree">{{i}}</li>
</ul>
```
```js
new Vue({
    el:'#app'
    ,data:{
        agree:　['こんにちは','Hello','カムサハムニダ']
    }
})
```
### 定数回繰り返す
```html
<ul>
    <li v-for="n in 5">{{n}}<hr></li>
</ul>
```
### インデックス番号を表示
```html
<li v-for="(aisatu,i) in agree">({{i}}){{aisatu}}</li>
```
### オブジェクトの表示
オブジェクトの第三引数はインデックス
```html
<ul>
    <li v-for="(information,i,n) in object">{{n}}({{i}}){{information}}</li>
</ul>
```
```js
new Vue({
    el:'#app'
    ,data:{
        object:{
            country:'Japan',
            age:19,
            firstname:'Atsushi',
            filename:'Yamasaki'
        }
    }
})
```

### `v-for`と`template`の応用
`template`を使うと切れ目を意識しなくてもよい
```html
<ul>
    <template v-for="(aisatu,i) in agree">
        <li>({{i}}){{aisatu}}</li>
        <hr>
    </template>
</ul>
```
### `key`属性をつける
変更が最小限で良い挙動しないから付けましょう
```html
<div v-for="(aisatu,i) of agree" v-bind:key="aisatu">
    <input type="text" v-bind:placeholder="aisatu">
    <hr>
</div>
```
#### Objectを追加する
```js
Vue.set(this.object.id, this.object.n , this.greeting[this.object.n % 3]);
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

# インスタンス操作
外からVueインスタンスにプロパティを追加するとリアクティブにならない（動的にならずVueの恩恵を受けられない）<br>
```js
vm.message='かわったよ'
vm.name =　'やまさき'
```

## VueインスタンスからVueインスタンス

```js
var vm = new Vue({
    el:'#app1'
    ,data:{
        message:'unko'
    }
})
new Vue({
    el:'#app2'
    ,data:{
        message:'tinko'
    }
    ,methods:{
        changeMessage: function(){
            vm.message = 'インスタンス2から変更した'
        }
    }
}) 
```

## `$data`
`$data`で外から`data`プロパティにアクセスする<br>
```js
var data = {
    message: 'Hello'
    ,name:'Atsushi'
}
var vm=new Vue({
    el:'#app',
    data:data
})
console.log(data===vm.$data);
console.log(vm);
```

## `$mount('')`
`el`プロパティを後付けする
```js
vm.$mount('#app1')
```
インスタンスの最後に`$mount`を付ける
```js
new Vue({
    data:{
        name:'atsushi'
    },
    template:'<h1>{{name}}</h1>'
}).$mount('#app2')
```

# `template`プロパティ
中身がHTML要素となる
```js
new Vue({
    el:'#app2'
    ,data:{
        name:'atsushi'
    }
    ,template:'<h1>{{name}}</h1>'
})
```

# 仮想DOM
`document` : ブラウザが用意する変数<br>
中にはHTMLに関するオブジェクトDOMが入っている<br>
`DOM` : Document object model 

## `render`関数
```js
render:function(なんでも){
    return なんでも('h1','こんにちは');
    //仮想DOMのために仮想NODEを返している
}
```
VueJSは仮想DOMを通してDOMを書き換えている

JavaScript
```js
document.createElement('div');
//実際にDOMを作っている
```

## 仮想`DOM`の必要性
ブラウザが持つ`DOM`にアクセスするのは時間がかかる

部分的に`DOM`を変更するに必要なことは<br>
現在の`DOM`と変更後の`DOM`を比べ、その差が変更するべき箇所である。<br>
JSにその二つのDOMを仮想的に持たせることによって、DOMへのアクセスを最小限にする

# VueCLI
ファイルの分割をできる。<br>
最終的なコードの軽量化。<br>
Babel（ESfileのバージョンを合わせる)、TypeScript、ESLintなどのプラグインできる<br>
`HMR`(Hot Module Replacement)<br>
.vue TS SCSS pug ES6 などの使用

node.jsをインストールした状態で
```cmd
npm install -g @vue/cli
```
vueCLI を使いたいディレクトリで
```cmd
vue create [なまえ小文字だけ？]
```
### Publicフォルダー
不変なファイルを入れておく

### srcフォルダー
中身を結合して一つのJSを作る。

### `.vue`ファイル
はシングルファイルコンポ―ネント<br>
## シングルファイルコンポ―ネントの構成
<ul>
    <li>テンプレート</li>
    <li>スクリプト</li>
    <li>スタイル</li>
</ul>
.vueファイルはコンポーネントのオブジェクト（内容）を表している<br>
.vueファイルはコンポーネントの書き方を変えただけ<br>
`import`するとオブジェクトをもってる。

# VueCLIを本番用でビルドする
```cmd
npm run build //package.jsonに定義されているコマンドを呼び出す
```
distフォルダが出来上がる

# distフォルダ（最適化されてる）
publicフォルダ内はそのままコピーされるがsrcフォルダはまとめられ。<br>
nodeモジュールのプラグイン---> chunk-vendors.~~~.js<br>
srcフォルダの中身---> `app.???.js`<br>
cssもミニファイ化（1行で表示される）<br>

distフォルダをサーバーにおいておくとクライアントにdistフォルダが送信され、ブラウザーが勝手にやってくれる（静的）

# VueCLIでの実践開発
コンポーネントを使いVueインスタンスを再利用する。<br>
Vueインスタンスは普通一回きりしか適応できない。<br>
コンポーネントのなかではデータは関数で定義する。<br>
コンポーネントが持つデータは同じコンポーネントで共有される。<br>
動的なデータは共有されるとまずいので、初期値をreturnで書く<br>

コンポーネント内の`template`はタグを入れ子にしなくてはならない
```js
template:'<p>こんにちは</p><hr>' //ダメ

template:'<div><p>こんにちは</p><hr></div>
```

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
objet形式　変数名:型名
```js
export default{
    props:{
        number:Number
    }
}
```
型をつけることをバリデーションという
<br>
いろんな型
```js
export default{
    props:{
        number:{
            type:Number,//型の宣言
            required:true,//この変数に値が必ず必要か
            default:10//値がなかった時の値を設定する。
            //defaultとrequiredは共存できない
        }
    }
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