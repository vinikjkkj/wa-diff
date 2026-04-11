const fs = require('node:fs/promises')
const path = require('node:path')
const { spawn } = require('node:child_process')
const puppeteer = require('puppeteer-real-browser')

const WHATSAPP_URL = 'https://web.whatsapp.com/'
const FETCH_SCRIPT_PATH = path.resolve(__dirname, 'fetch.js')
const OUTPUT_PATH = path.resolve(__dirname, 'urls.json')
const EXPORT_DIR = path.resolve(__dirname, 'files')
const WORKERS = '50'

const MAX_WAIT_MS = 5 * 60 * 1000
const POLL_INTERVAL_MS = 2000

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function runCommand(command, args, name, options = {}) {
    console.log(`Executando: ${command} ${args.join(' ')}`)

    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd: __dirname,
            stdio: 'inherit',
            shell: false,
            ...options
        })

        child.on('error', (error) => {
            if (error && error.code === 'ENOENT') {
                reject(new Error(`Comando nao encontrado para ${name}: ${command}`))
                return
            }

            reject(error)
        })

        child.on('exit', (code) => {
            if (code === 0) {
                resolve()
                return
            }

            reject(new Error(`${name} finalizou com codigo ${code}`))
        })
    })
}

function resolveFromProject(request) {
    return require.resolve(request, { paths: [__dirname] })
}

function runWaExport() {
    const waExportScript = resolveFromProject('wa-modules-loader/dist/export/index.js')

    const args = [OUTPUT_PATH, EXPORT_DIR, '--workers', WORKERS, '--flat']

    return runCommand(process.execPath, [waExportScript, ...args], 'wa-export')
}

function runPrettier() {
    const prettierScript = resolveFromProject('prettier/bin/prettier.cjs')

    return runCommand(
        process.execPath,
        [prettierScript, '--write', EXPORT_DIR, '--ignore-unknown'],
        'prettier'
    )
}

async function runFetchScript(page, fetchScript) {
    return page.evaluate((scriptCode) => {
        try {
            const result = (0, eval)(scriptCode)
            if (!Array.isArray(result)) return []

            return result.filter((url) => typeof url === 'string')
        } catch {
            return []
        }
    }, fetchScript)
}

async function waitForUrls(page, fetchScript) {
    const startedAt = Date.now()

    while (Date.now() - startedAt < MAX_WAIT_MS) {
        const urls = await runFetchScript(page, fetchScript)
        if (urls.length > 0) return urls

        const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000)
        console.log(`[${elapsedSeconds}s] aguardando WhatsApp carregar/login...`)
        await sleep(POLL_INTERVAL_MS)
    }

    return []
}

async function main() {
    const fetchScript = await fs.readFile(FETCH_SCRIPT_PATH, 'utf8')

    const { browser } = await puppeteer.connect({
        headless: true
    })

    try {
        const page = await browser.newPage()
        page.setDefaultNavigationTimeout(120000)

        await page.goto(WHATSAPP_URL, { waitUntil: 'domcontentloaded' })
        await sleep(3000)

        const urls = [...new Set(await waitForUrls(page, fetchScript))].sort()

        await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(urls, null, 4)}\n`, 'utf8')

        console.log(`Total de URLs encontradas: ${urls.length}`)
        console.log(`Arquivo salvo em: ${OUTPUT_PATH}`)

        if (urls.length === 0) {
            console.log(
                'Nenhuma URL encontrada. Se o QR code estiver na tela, faça login no WhatsApp Web e rode novamente.'
            )
            return
        }

        await runWaExport()
        console.log(`Exportacao finalizada em: ${EXPORT_DIR}`)
        await runPrettier()
        console.log(`Prettier finalizado em: ${EXPORT_DIR}`)

        console.log('Primeiras 10 URLs:')
        urls.slice(0, 10).forEach((url) => console.log(url))
    } finally {
        await browser.close()
    }
}

main().catch((error) => {
    console.error('Erro ao executar coleta de URLs:', error)
    process.exitCode = 1
})
