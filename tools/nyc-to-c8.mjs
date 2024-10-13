import $fs     from 'node:fs'
import $path   from 'node:path'
import nycCfg  from '../nyc.config.cjs'

// './.c8rc.json'
const targetFile = process.argv?.[2]

const jsonStr = JSON.stringify(nycCfg, null, 2)

if (targetFile) {
	$fs.writeFile($path.join(process.cwd(), targetFile), jsonStr, { encoding: 'utf-8' }, (err, data) => {
		if (err) {
			console.error(err)
		}
	})
} else {
	console.log(jsonStr)
}
