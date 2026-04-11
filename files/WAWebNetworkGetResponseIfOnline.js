__d(
  "WAWebNetworkGetResponseIfOnline",
  ["WAWebNullFunc", "WAWebXHR"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i) {
      return (
        t === void 0 && (t = "GET"),
        r("WAWebXHR")
          .request(e, t, n, i, a)
          .then(function (e) {
            return e.status && e.status < 12e3 ? e : null;
          })
          .catch(o("WAWebNullFunc").returnNull)
      );
    }
    l.default = e;
  },
  98,
);
