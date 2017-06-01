# Angular Universal on AWS Lambda
Angular Universal を AWS Lambda で動かすコードを置くリポジトリの予定地

## About

今のところ公式の[Angular Universal - ts - GUIDE](https://angular.io/docs/ts/latest/guide/universal.html)のページのものを Angular CLI の `ng new` から作り、Lambdaで動かせる状態。

ただし、API Gateway のステージが URL に含まれるため、パスを調整する必用があるため、まだまだ調整が必要である。


AWS Lmabda へのデプロイは [Serverless Framework](https://serverless.com/) を利用している。



## Angular Version

v4.0.0

