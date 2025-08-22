import Fastify from 'fastify';

const server = Fastify({
  logger: {
    serializers: {
      req: req => ({
        method: req.method,
        url: req.url,
      }),
    },
    transport: {
      target: 'pino-pretty',
      level: 'warn',
      options: {
        colorize: true,
        singleLine: true,
        translateTime: 'SYS:HH:MM:ss',
        ignore: 'pid,host,reqId,responseTime',
      },
    },
  },
});

server.get('/', async () => {
  return { status: 'ok', environment: 'development' };
});

try {
  server.listen({ port: 3000, host: '0.0.0.0' });
  server.log.info(`Server listening on http://localhost:3000`);
}
catch (err) {
  server.log.error(err);
}
