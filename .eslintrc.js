module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:mocha/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        project: './tsconfig.json'
    },
    plugins: ['prettier','@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        'no-underscore-dangle': 'error',
        'consistent-return': 'error',
        'class-methods-use-this': 'error',
        'prefer-destructuring': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': 'error',
        'import/no-cycle': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-exclusive-tests': 'error',
        '@typescript-eslint/lines-between-class-members': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/naming-convention':[
            'error',{
                alphabetize: {
                    order: 'asc',
                    caseInsentitive: false
                },
                groups: [
                    ['builtin', 'external'],
                    ['internal', 'parrent', 'sibling']
                ],
                'newlines-between': 'always'
            }
        ] 
    },
    ignorePatterns: ['**/*.js', '**/*.d.ts'],
    overrides: [
        {
            files: ['*.ts'],
            excludedFiles: ['*.{test,spec,steps}.ts'],
            extends: ['plugin:security/recommended']
        }
    ]
}