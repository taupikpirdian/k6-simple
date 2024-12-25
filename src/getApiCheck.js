import http from 'k6/http';

const baseUrl = __ENV.BASE_URL || 'http://localhost:8081';
const duration = __ENV.DURATION || '30s';
const vus = __ENV.VUS || 10;

export const options = {
  duration: duration,
  vus: vus,
};

export default function () {
    const url = baseUrl + '/api/check';
    const params = {};
    http.get(url, params);
}