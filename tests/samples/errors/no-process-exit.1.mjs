const server = {}

server.listen({ port: 80, host: '0.0.0.0' }, (err, address) => {
	if (err) {
		server.log.error(err)
		server.log.error(address)
		process.exit(1)
	}
})
