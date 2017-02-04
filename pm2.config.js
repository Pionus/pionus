module.exports = {
    apps: {
        name: 'pionus',
        script: './index.js',
        watch: true,
        interpreter_args: '--harmony',
        env: {
            NODE_ENV: 'development'
        },
        log_date_format: 'YY-MM-DD HH:mm Z',
        error_file: './logs/err.log',
        out_file: './logs/out.log',
    },
};
