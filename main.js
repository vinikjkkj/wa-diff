const fs = require('node:fs/promises')
const path = require('node:path')
const { execSync, spawn } = require('node:child_process')
const { discoverBundleUrls } = require('@vinikjkkj/wa-fetcher')

const OUTPUT_PATH = path.resolve(__dirname, 'urls.json')
const EXPORT_DIR = path.resolve(__dirname, 'files')
const WORKERS = '50'
const MODULE_FILTER = '/^(?!use[A-Z])(?!.*(?:[Rr][Ee][Aa][Cc][Tt]|[Ss][Tt][Yy][Ll][Ee][Xx])).+$/'

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

function runWaExport() {
    const waExportScript = resolvePackageBin('wa-modules-loader', 'wa-export')

    const args = [
        OUTPUT_PATH,
        EXPORT_DIR,
        '--workers',
        WORKERS,
        '--flat',
        '--module-filter',
        MODULE_FILTER
    ]

    return runCommand(process.execPath, [waExportScript, ...args], 'wa-export')
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
    const { waVersion, urls } = await discoverBundleUrls()

    await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(urls, null, 4)}\n`, 'utf8')

    console.log(`WA version: ${waVersion ?? 'unknown'}`)
    console.log(`Total URLs found: ${urls.length}`)
    console.log(`Saved file: ${OUTPUT_PATH}`)

    if (urls.length === 0) {
        console.log('No URLs found.')
        return
    }

    await runWaExport()
    console.log(`Export finished at: ${EXPORT_DIR}`)
    await runPrettier()
    console.log(`Prettier finished for: ${EXPORT_DIR}`)

    console.log('First 10 URLs:')
    urls.slice(0, 10).forEach((url) => console.log(url))
}

main().catch((error) => {
    console.error('Error while running URL collection:', error)
    process.exitCode = 1
})
