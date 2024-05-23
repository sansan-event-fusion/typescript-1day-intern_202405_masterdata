## TypeScript ビジネスデータ基盤開発 1Day Internship

TypeScript ビジネスデータ基盤開発 1Day Internship で使用するリポジトリです。

## 構成

- local 環境に、node の実行環境を用意して、application を動かします。
- docker 環境に、database として postgres と、web client として pgweb を用意します。

## 環境構築

0. node の実行環境がない場合は、構築してください (v18.20.2 と v20.10.0 で動作確認をしています)

1. 以下のコマンドを実行し、コードをクローンする。

```
git clone git@github.com:sansan-event-fusion/typescript-1day-intern_202405_masterdata.git
```

3. リポジトリのディレクトリに移動し、`yarn install` を実行する。

```
cd typescript-1day-intern_202405_masterdata
yarn install
```

3. 以下のコマンドを実行し、コンテナをビルドして起動する

```
docker compose -f docker-compose.yml up -d
```

4. `http://localhost:8080` にブラウザからアクセスし、pgweb の画面が閲覧できることを確認する。

※ 閲覧できない場合は pgweb コンテナが立ち上がっていない可能性があるので、以下のコマンドを何回か試してみてください。

```
docker compose -f docker-compose.yml restart
```

6. 以下のコマンドを実行し、prisma で DB 操作できるようにする。

```
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

7. 以下のコマンドを実行し、アプリを起動。エラーなく正常終了することを確認する。

```
yarn start
```

8. 完了！
