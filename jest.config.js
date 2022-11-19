module.exports = {
    preset: "@vue/cli-plugin-unit-jest",  //用作 Jest 配置基础的预设。预设应该指向一个 npm 模块
    collectCoverage: true,  // 是否显示覆盖率报告
    collectCoverageFrom: [// 告诉 jest 哪些文件需要经过单元测试测试
        // '/tests/unit/example.spec.js'
        "**/src/components/*.{js,jsx,vue}",
        "**/views/*.{js,jsx,vue}",
        "**/components/*.{js,jsx,vue}",
        "!**/node_modules/**"
    ], //可以用一个 通配模式 的数组来指出仅哪些文件需要收集覆盖率信息
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    setupFiles: ["<rootDir>/tests/index.js"], // 运行某些代码以配置或设置测试环境的模块的路径列表

}