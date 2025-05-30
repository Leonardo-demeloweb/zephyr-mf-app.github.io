````md
# Zephyr MF App

Micro frontend architecture using **React 18**, **Webpack Module Federation**, and **Rspack**.

## 📦 Install

Run the following in both apps (`host-app` and `dashboard-remote`):

```bash
rm -rf node_modules package-lock.json .rspack-cache
npm install
```
````

## ▶️ Start in development

In two separate terminals:

```bash
# Terminal 1
cd remote
npm start
```

```bash
# Terminal 2
cd host
npm start
```

## 🌐 Access

- Remote app: [http://localhost:8081](http://localhost:8081)
- Host app: [http://localhost:8080](http://localhost:8080) (loads the remote Widget component)

## 🧩 Module Federation setup

Both apps share React as a singleton:

```ts
shared: {
  react: { singleton: true, eager: true, requiredVersion: "^18.2.0" },
  "react-dom": { singleton: true, eager: true, requiredVersion: "^18.2.0" }
}
```

### `remote` exposes:

```ts
exposes: {
  "./Widget": "./src/components/Widget.tsx"
}
```

### `host` consumes:

```tsx
const RemoteWidget = React.lazy(() => import('remote/Widget'));
```

## 🏗️ Build for production

```bash
npm run build
```

Final output will be available in the `dist/` directory.

---

> Requirements: Node 18+, React 18.2, Rspack, Zephyr Plugin

Zephyr Cloud link of the application deployed

```
```
