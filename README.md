# CLI Toolbox

```bash
yarn global add @nappr/cli-toolbox
```

#### Convert HEX <-> RGB || RGB <-> HEX

```bash
rgb '#FFF'
rgb 'rgb(255,0,255)'
rgb rgba\(255,0,255,1\)
```

#### Convert XML <-> JSON file

> Simple wrapper to [xml2json](https://www.npmjs.com/package/xml2json) lib

```bash
xml2json input.file.json <output.file.xml>
```

#### Convert JPG <-> PNG file

> Using [sharp](https://www.npmjs.com/package/sharp) lib

```bash
jpg2png inputfile.jpg [outputfile.png]
```
