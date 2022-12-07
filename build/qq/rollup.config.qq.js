import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import path from 'path'

const pathResolve = p => path.join(__dirname, p)

function changePath () {
    return {
        name: 'changePath',
        transform: function transform (code, id) {
            code = code.replace(/\@Storage/g, pathResolve('../../src/ProgramDiff/qq/storage'))
                .replace(/\@Device/g, pathResolve('../../src/ProgramDiff/qq/device'))
                .replace(/\@Fetch/g, pathResolve('../../src/ProgramDiff/qq/fetch'))
                .replace(/\@Router/g, pathResolve('../../src/ProgramDiff/qq/router'))
                .replace(/\$ANS/g, 'QQ')
                .replace(/\$LIB/g, 'QQMini')
                .replace(/\$LibVERSION/, '4.3.0')
            return {
                code: code,
                id: id
            }
        }
    }
}
export default [{
    input: './src/main.js',
    output: [{
        file: './Demo/util/sdk/AnalysysAgent_QQ_SDK.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [uglify({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './Demo/util/sdk/AnalysysAgent_QQ_SDK.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [terser({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './SDK/QQ/AnalysysAgent_QQ_SDK.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [uglify({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './SDK/QQ/AnalysysAgent_QQ_SDK.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [terser({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_QQ_SDK.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [terser({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_QQ_SDK.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [uglify({
            'mangle': {
                toplevel: true
            }
        })]
    }],
    cache: false,
    plugins: [
        changePath(),
        replace({
            $ans: 'qq',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**',
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        })
    ],
    sourceMap: true
}, {
    input: './src/main_custom.js',
    output: [{
        file: './Demo/util/sdk/AnalysysAgent_QQ_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [uglify({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './Demo/util/sdk/AnalysysAgent_QQ_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [terser({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './SDK/QQ/AnalysysAgent_QQ_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [uglify({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './SDK/QQ/AnalysysAgent_QQ_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [terser({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_QQ_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [uglify({
            'mangle': {
                toplevel: true
            }
        })]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_QQ_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [terser({
            'mangle': {
                toplevel: true
            }
        })]
    }],
    cache: false,
    plugins: [
        changePath(),
        replace({
            $ans: 'qq',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**',
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        })
    ],
    sourceMap: true
}]
