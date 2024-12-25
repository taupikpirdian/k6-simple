.PHONY: run-get-api-check

run-get-api-check:
	@export BASE_URL=$$(grep BASE_URL .env | cut -d '=' -f2) && \
	k6 run --insecure-skip-tls-verify src/getApiCheck.js