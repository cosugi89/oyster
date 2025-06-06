# Docker起動・停止方法
## 起動
```
docker compose up -d --build
```

## 停止
```
docker compose down -v 
```

# アプリ起動方法
## パターン１：開発時
* Dockerを起動した状態で、Maven　＋　npm start　で起動する
### Maven
#### ⚪️プロファイルなしの場合
```
mvn spring-boot:run
```

#### ⚪️プロファイルあり（dev）の場合
```
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

### npm start
```
npm start
```

## パターン２：本番に近い仮想環境
* Dockerを起動　⇒　内部でフロントエンド・バックエンドのソースを自動ビルド

### 構成イメージ
ロードバランサ(lb)   
　　　↓↑   
webサーバー2台(webserver1,webserver2)　　　　　　　　　　　　　　　←ここにフロントエンド資材を配置   
　　　↓↑   
アプリケーションサーバー2台(application1,application2)　　　 　　　　　←ここにバックエンド資材を配置   
　　　↓↑   
MySQL、Redis等のミドルウェア

# ブラウザからの確認方法
## パターン１：開発時
```
http://localhost:3000
```
## パターン２：本番に近い仮想環境
```
https://localhost
```

# その他注意事項
## crtファイルについて
* 下記コマンドから作成可能
```
mkdir -p ./webserver/certs
openssl req -x509 -nodes -days 365 \
  -newkey rsa:2048 \
  -keyout ./webserver/certs/server.key \
  -out ./webserver/certs/server.crt \
  -subj "/C=JP/ST=Tokyo/L=Shibuya/O=Example/OU=Dev/CN=localhost"
```