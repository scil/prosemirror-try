
# code from: 
https://prosemirror.net/examples/basic/
in this example, we use the basic schema and extend it with lists.

# get started
```
yarn
npm run build-by-webpack
npm run start
```

# debug in WebStrom

1. env prepare
   1. make new chrome profile: Google-profile-dev-2
   2. add new Web Browsers in WebStrom
2. two ways:
   - 让WebStorm自己创建一个服务器 -> Project view -> `public/index.html` -> context menu: `Debug 'index.html'`
   - 自己启动一个服务器 `npm run start` -> WebStorm -> create new JavaScript debug with `http://localhost:5000/` 