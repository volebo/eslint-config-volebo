import $fs     from 'node:fs'
import $path   from 'node:path'
import nycCfg  from '../nyc.config.cjs'

// './.c8rc.json'
const targetFile = process.argv?.[2]

const jsonStr = JSON.stringify(nycCfg, null, 2)

if (targetFile) {
	$fs.writeFile($path.join(process.cwd(), targetFile), jsonStr, { encoding: 'utf8' }, (err, __data) => {
		if (err) {
			// eslint-disable-next-line no-console
			console.error(err)
		}
	})
} else {
	// eslint-disable-next-line no-console
	console.log(jsonStr)
}
