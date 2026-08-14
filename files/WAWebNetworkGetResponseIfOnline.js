__d(
  "WAWebNetworkGetResponseIfOnline",
  ["WAWebNullFunc", "WAWebXHR"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.data,
        n = e.method,
        a = n === void 0 ? "GET" : n,
        i = e.responseType,
        l = e.signal,
        s = e.url;
      return r("WAWebXHR")
        .request(s, a, t, l, i)
        .then(function (e) {
          return e.status && e.status < 12e3 ? e : null;
        })
        .catch(o("WAWebNullFunc").returnNull);
    }
    l.default = e;
  },
  98,
);
