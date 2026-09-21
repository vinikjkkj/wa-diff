__d(
  "WAWebNetworkGetResponseIfOnline",
  ["WAWebNullFunc", "WAWebXHR"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.data,
        n = e.method,
        r = n === void 0 ? "GET" : n,
        a = e.responseType,
        i = e.signal,
        l = e.url;
      return o("WAWebXHR")
        .request(l, r, t, i, a)
        .then(function (e) {
          return e.status && e.status < 12e3 ? e : null;
        })
        .catch(o("WAWebNullFunc").returnNull);
    }
    l.default = e;
  },
  98,
);
