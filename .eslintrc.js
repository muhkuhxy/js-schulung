module.exports = {
   root: true,
   env: {
      node: true
   },
   extends: [
      'plugin:vue/essential',
      'laxarjs'
   ],
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'max-len': [ 'error', { code: 120 } ],
      'space-in-parens': [ 'error', 'always' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'always' ]
   },
   parserOptions: {
      parser: 'babel-eslint'
   },
   overrides: [
      {
         files: [
            '**/__tests__/*.{j,t}s?(x)'
         ],
         env: {
            jest: true
         }
      }
   ]
};
