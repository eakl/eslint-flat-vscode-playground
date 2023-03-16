import jsPlugin from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import svelteParser from 'svelte-eslint-parser'
import sveltePlugin from 'eslint-plugin-svelte'


// https://www.npmjs.com/package/@eslint/js
const jsConfig = {
  files: ['playground/**/*.{js,cjs,mjs}'],
  rules: {
    ...jsPlugin.configs.rules,
    indent: ['error', 2],
    semi: ['error', 'always']
  }
}

// https://www.npmjs.com/package/eslint-plugin-react
const jsxConfig = {
  files: ['playground/**/*.jsx'],
  plugins: {
    react: reactPlugin
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      }
    }
  },
  rules: {
    ...jsPlugin.configs.rules,
    indent: ['error', 4],
    semi: ['error', 'always']
  }
}

// https://typescript-eslint.io/linting/configs
const tsConfig = {
  files: ['playground/**/*.ts'],
  languageOptions: {
    parser: tsParser
  },
  plugins: {
    '@typescript-eslint': tsPlugin
  },
  rules: {
    ...tsPlugin.configs['recommended'].rules,
    indent: ['error', 2],
    semi: ['error', 'always']
  }
}

const tsxConfig = {
  files: ['playground/**/*.tsx'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      }
    }
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
    react: reactPlugin
  },
  rules: {
    ...tsPlugin.configs['recommended'].rules,
    indent: ['error', 2],
    semi: ['error', 'always']
  }
}

// https://ota-meshi.github.io/eslint-plugin-svelte/user-guide/
const svelteJs = {
  files: ['playground/**/*.svelte'],
  languageOptions: {
    parser: svelteParser,
  },
  plugins: {
    svelte: sveltePlugin
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always']
  }
}

// https://ota-meshi.github.io/eslint-plugin-svelte/user-guide/
const svelteTs = {
  files: ['playground/**/*.svelte'],
  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tsParser
    }
  },
  plugins: {
    svelte: sveltePlugin
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always']
  }
}

export default {
  jsConfig,
  jsxConfig,
  tsConfig,
  tsxConfig,
  svelteJs,
  svelteTs
}
