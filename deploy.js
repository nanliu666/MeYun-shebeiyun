/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const pkgJson = require('./package.json')
const compressing = require('compressing')

const resolvePath = (...arg) => path.resolve(__dirname, ...arg)

async function main () {
  const oldVerNums = pkgJson.version.split('.').map(Number)
  const newVerNums = oldVerNums.map((v, i) => i === oldVerNums.length - 1 ? v + 1 : v)

  const CubeModule = {
    name: "设备云",
    identifier: "com.meicloud.meiEngineCloud",
    build: newVerNums[newVerNums.length-1],
    version: newVerNums.join('.')
  }

  pkgJson.version = CubeModule.version

  fs.writeFileSync(resolvePath('package.json'), JSON.stringify(pkgJson, null, 2))
  fs.writeFileSync(resolvePath('dist/CubeModule.json'), JSON.stringify(CubeModule, null, 2))

  // await compressing.zip.compressDir(resolvePath('dist'), resolvePath('dist.zip'))

  const zipStream = new compressing.zip.Stream()
  fs.readdirSync(resolvePath('dist')).forEach(p => {
    zipStream.addEntry(resolvePath('dist', p))
  })
  zipStream
    .pipe(fs.createWriteStream(resolvePath('dist.zip')))
    .on('finish', () => fs.rmSync(resolvePath('dist'), { recursive: true }))
}


main()
  .then(() => console.log('    Done! dist.zip is ready for deploy.\n'))
  .catch(e => console.error(e.stack))