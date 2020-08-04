# schnellstart.konfiapp.de
KonfiApp Quick-Start guides & FAQ
> Built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation
```
$ yarn
```
### Local Development
```
$ yarn start
```
### Build
```
yarn build
```
## 🐳 Deploy
### Volume mounted with Docker-Compose (recommended)
```
docker-compose up --build --force-recreate -d
```
### Self-contained Docker image
```
docker build . -t konfiapp_schnellstart:latest
```

## Contributing
The origin repository can be found at https://gitlab.com/konfiapp/schnellstart.konfiapp.de