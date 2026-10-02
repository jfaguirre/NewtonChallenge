import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: new URL('./index.html', import.meta.url).pathname,
                trayectoria: new URL('./trayectoria.html', import.meta.url).pathname,
                aceleracion: new URL('./aceleracion.html', import.meta.url).pathname,
                aceleracion: new URL('./ascensor.html', import.meta.url).pathname,
                aceleracion: new URL('./movimiento-uniforme.html', import.meta.url).pathname,
            },
        },
    },
})