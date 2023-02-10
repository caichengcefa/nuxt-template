// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import path from 'node:path';
const resolve = (dir: string) => path.join(__dirname, dir);

export default defineNuxtConfig({
	components: [
		{
			// path: '~/components/',
			pathPrefix: false
		}
	],
	typescript: {
		typeCheck: true
	},
	// css: ['ant-design-vue/dist/antd.css'],
	// modules: ['./modules/antd'],
	imports: {
		dirs: ['stores']
	},
	modules: ['@pinia/nuxt'],
	vite: {
		server: {
			proxy: {
				'/api': {
					target: 'http://127.0.0.1:8888/',
					changeOrigin: true
				}
			}
		},
		plugins: [
			Components({
				resolvers: [AntDesignVueResolver({ importStyle: 'less' })]
			}),
			createSvgIconsPlugin({
				// Specify the icon folder to be cached
				iconDirs: [resolve('assets/svg')],
				// Specify symbolId format
				symbolId: 'icon-[name]'
			})
		],
		css: {
			preprocessorOptions: {
				less: {
					additionalData: `
            @import "@/style/var.less";
            @import "@/style/mixin.less";
          `,
					modifyVars: {
						'primary-color': ' #1676E4', // 全局主色
						'error-color': '#D91020', // 错误色
						'warning-color': '#FFCA0C', // 警告色
						'success-color': '#18C71E', // 成功色

						'heading-color': '#B2BACB', // 标题色
						'text-color': '#424242', // 主文本色
						'text-color-secondary': 'rgba(51, 51, 51, 0.45)', // 次文本色

						'body-background': '#F5F5F5',
						'border-radius-base': '4px', // 组件/浮层圆角
						'border-color-base': '#E4E4E4' // 边框色
					},
					javascriptEnabled: true
				}
			}
		}
	}
});
