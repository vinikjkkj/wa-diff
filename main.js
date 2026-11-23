const fs = require('node:fs/promises')
const os = require('node:os')
const path = require('node:path')
const { execSync, spawn } = require('node:child_process')
const { ARCHIVE_URL_ENV, fetchArchive, loadCanonicalBundles } = require('@vinikjkkj/wa-fetcher')

const BUNDLES_PATH = path.resolve(__dirname, 'bundles.json')
const EXPORT_DIR = path.resolve(__dirname, 'files')
const DUMP_DIR = path.join(os.tmpdir(), 'wa-diff-dump')
const MODULE_FILTER = /^(?!use[A-Z])(?!.*(?:[Rr][Ee][Aa][Cc][Tt]|[Ss][Tt][Yy][Ll][Ee][Xx])).+$/
const SAFE_NAME = /^[\w[\]-]+/
const WRITE_CONCURRENCY = 64

function runCommand(command, args, name, options = {}) {
    console.log(`Running: ${command} ${args.join(' ')}`)

    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd: __dirname,
            stdio: 'inherit',
            shell: false,
            ...options
        })

        child.on('error', (error) => {
            if (error && error.code === 'ENOENT') {
                reject(new Error(`Command not found for ${name}: ${command}`))
                return
            }

            reject(error)
        })

        child.on('exit', (code) => {
            if (code === 0) {
                resolve()
                return
            }

            reject(new Error(`${name} finished with exit code ${code}`))
        })
    })
}

function resolveFromProject(request) {
    return require.resolve(request, { paths: [__dirname] })
}

function resolvePackageBin(packageName, binName = packageName) {
    const packageJsonPath = resolveFromProject(`${packageName}/package.json`)
    const packageDir = path.dirname(packageJsonPath)
    const packageJson = require(packageJsonPath)
    const { bin } = packageJson

    if (typeof bin === 'string') {
        return path.resolve(packageDir, bin)
    }

    if (bin && typeof bin === 'object') {
        const explicitBin = bin[binName]
        const firstBin = Object.values(bin)[0]
        const selectedBin = explicitBin || firstBin

        if (typeof selectedBin === 'string') {
            return path.resolve(packageDir, selectedBin)
        }
    }

    throw new Error(`Unable to resolve bin "${binName}" from package "${packageName}"`)
}

// The archive ships several transpile variants of most modules.
// loadCanonicalBundles keeps one copy per module, picked by content, so the
// same module always lands in the same file with the same variant.
// File names follow what `wa-export --flat` produced, so paths stay stable.
async function exportModules(rawDir, outDir) {
    const modules = loadCanonicalBundles(rawDir).filter((b) => b.url.startsWith('module:'))
    const usedNames = new Map()
    const files = []

    for (const { url, text } of modules) {
        const name = url.slice('module:'.length)
        if (!SAFE_NAME.test(name) || !MODULE_FILTER.test(name)) continue

        const base = name.replace(/[^\w\-[\]]+/g, '_')
        const seen = usedNames.get(base) || 0
        usedNames.set(base, seen + 1)
        const fileName = seen === 0 ? `${base}.js` : `${base}_${seen + 1}.js`
        files.push({ fileName, content: `${text};` })
    }

    await fs.mkdir(outDir, { recursive: true })
    for (let i = 0; i < files.length; i += WRITE_CONCURRENCY) {
        await Promise.all(
            files
                .slice(i, i + WRITE_CONCURRENCY)
                .map((f) => fs.writeFile(path.join(outDir, f.fileName), f.content, 'utf8'))
        )
    }

    return files.length
}

async function runPrettier() {
    const prettierScript = resolvePackageBin('prettier', 'prettier')

    let changedFiles
    try {
        changedFiles = execSync('git diff --name-only HEAD -- files/', {
            cwd: __dirname,
            encoding: 'utf8'
        })
            .trim()
            .split('\n')
            .filter(Boolean)
    } catch {
        changedFiles = []
    }

    const untrackedFiles = (() => {
        try {
            return execSync('git ls-files --others --exclude-standard -- files/', {
                cwd: __dirname,
                encoding: 'utf8'
            })
                .trim()
                .split('\n')
                .filter(Boolean)
        } catch {
            return []
        }
    })()

    const files = [...new Set([...changedFiles, ...untrackedFiles])]

    if (files.length === 0) {
        console.log('No changed files to format.')
        return
    }

    console.log(`Formatting ${files.length} changed files (instead of all).`)
    return runCommand(
        process.execPath,
        [prettierScript, '--write', '--ignore-unknown', ...files],
        'prettier'
    )
}

async function main() {
    if (!process.env[ARCHIVE_URL_ENV]) {
        throw new Error(`${ARCHIVE_URL_ENV} is not set`)
    }

    await fs.rm(DUMP_DIR, { recursive: true, force: true })
    try {
        const dump = await fetchArchive({ out: DUMP_DIR, onLog: (msg) => console.log(msg) })
        console.log(`WA version: ${dump.waVersion}`)
        console.log(`Archive bundles kept: ${dump.bundles.length}`)

        if (dump.bundles.length === 0) {
            throw new Error('Archive had no WA bundles')
        }

        const bundles = {
            waVersion: dump.waVersion,
            revision: dump.revision,
            bundles: dump.bundles.map((b) => b.file)
        }
        await fs.writeFile(BUNDLES_PATH, `${JSON.stringify(bundles, null, 4)}\n`, 'utf8')

        const count = await exportModules(dump.paths.raw, EXPORT_DIR)
        console.log(`Exported ${count} modules to: ${EXPORT_DIR}`)
    } finally {
        await fs.rm(DUMP_DIR, { recursive: true, force: true })
    }

    await runPrettier()
    console.log(`Prettier finished for: ${EXPORT_DIR}`)
}

if (require.main === module) {
    main().catch((error) => {
        console.error('Error while updating bundles:', error)
        process.exitCode = 1
    })
}

module.exports = { exportModules }
