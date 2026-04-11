__d(
  "oz-player/networks/OzFetchRequestImplementation",
  [
    "oz-player/networks/FetchWithTimeout",
    "oz-player/utils/processFetchResponse",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l, s) {
      var u = n ? n.networkTimeoutMs : null,
        c = r("oz-player/networks/FetchWithTimeout")(e, t, u);
      return c.then(function (e) {
        var t = e.headers,
          n = e.ok,
          a = e.status;
        return o != null && !n && typeof e.text == "function"
          ? e.text().then(function (r) {
              return {
                ok: n,
                status: a,
                headers: t,
                body: r,
                arrayBuffer: function () {
                  return e.arrayBuffer();
                },
              };
            })
          : r("oz-player/utils/processFetchResponse")(e);
      });
    }
    var s = e,
      u = s;
    l.default = u;
  },
  98,
);
