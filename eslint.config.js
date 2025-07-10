// eslint.config.js
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
    // 忽略文件
    {
        ignores: ['dist/**', 'node_modules/**'],
    },

    // JS/TS/Vue 文件配置
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                jsxPragma: 'React',
            },
        },
        plugins: {
            js,
            vue,
            '@typescript-eslint': tseslint.plugin,
            prettier: prettierPlugin,
        },
        rules: {
            // JavaScript base rules
            'no-var': 'error',
            'no-multiple-empty-lines': ['warn', { max: 1 }],
            'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-unexpected-multiline': 'error',
            'no-useless-escape': 'off',

            // TypeScript
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/prefer-ts-expect-error': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/semi': 'off',

            // Vue
            'vue/multi-word-component-names': 'off',
            // 'vue/script-setup-uses-vars': 'error', // ❌ 注释或删除
            'vue/no-mutating-props': 'off',
            'vue/attribute-hyphenation': 'off',

            // Prettier
            'prettier/prettier': 'warn',
        },
    },

    // TypeScript 推荐配置
    ...tseslint.configs.recommended,

    // Vue 默认 essential 配置（必须开启）
    vue.configs['flat/essential'],

    // Prettier 配置
    {
        rules: {
            ...prettierConfig.rules,
        },
    },
])