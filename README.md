# Angular Universal on AWS Lambda
Angular Universal を AWS Lambda で動かすコードを置いているリポジトリ。
まだプロトタイプ。

## About

今のところ公式の[Angular Universal - ts - GUIDE](https://angular.io/docs/ts/latest/guide/universal.html)のページのものを Angular CLI の `ng new` から作り、Lambdaで動かせる状態。
（一応AOT だけも Universal だけもできる）


コマンド（[package.json](https://github.com/mya-ake/angular-universal-on-lambda/blob/master/package.json)参照）は、Angular CLI の機能を使うものとそうでないものがある。

Angular CLI の機能を使うものはコマンドに `:cli` が含まれる。（LambdaのコマンドはCLI使っているがコマンドに `:cli` は入っていない）

※公式の Universal ページにあるものは Angular CLI を使わないコマンドになっている。


### Lambda へのデプロイ

AWS Lmabda へのデプロイは [Serverless Framework](https://serverless.com/) を利用している。

下記コマンドでデプロイできる（AWSのCredentialの設定は別途必要）

```
$ yarn deploy:lambda
```



## Angular Version

v4.0.0

