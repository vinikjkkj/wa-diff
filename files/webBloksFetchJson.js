__d(
  "webBloksFetchJson",
  ["WebBloksErrors", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "for (;;);",
      s = e.length,
      u = "content-type",
      c = "application/x-javascript; charset=utf-8";
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = new URLSearchParams();
          for (var a in t) {
            var i = t[a];
            i != null && r.append(a, String(i));
          }
          var l;
          try {
            l = yield window.fetch(e.toString(), {
              method: "post",
              body: r,
              credentials: "same-origin",
              headers: n != null ? n : void 0,
            });
          } catch (e) {
            throw new (o("WebBloksErrors").WebBloksNetworkError)(
              "Network error",
              e,
            );
          }
          var d = l.headers.get(u);
          if (l.status !== 200)
            throw l.status >= 500
              ? new (o("WebBloksErrors").WebBloksError)(
                  "Status: " + l.status + " " + l.statusText,
                )
              : new (o("WebBloksErrors").WebBloksNetworkError)(
                  "Status: " + l.status + " " + l.statusText,
                );
          if (d != null && d !== "" && d !== c)
            throw new (o("WebBloksErrors").WebBloksNetworkError)(
              "Unexpected content-type: " + d,
            );
          var m = yield l.text(),
            p = m.substr(s),
            _ = JSON.parse(p);
          if (_ != null && _.redirect)
            throw new (o("WebBloksErrors").WebBloksNetworkError)(
              "Unexpected redirect: " + _.redirect,
            );
          return _;
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
