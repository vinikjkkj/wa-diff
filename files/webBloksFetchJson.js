__d(
  "webBloksFetchJson",
  ["WebBloksErrors", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "for (;;);",
      s = e.length,
      u = "content-type",
      c = "application/x-javascript; charset=utf-8";
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new URLSearchParams();
          for (var r in t) {
            var a = t[r];
            a != null && n.append(r, String(a));
          }
          var i;
          try {
            i = yield window.fetch(e.toString(), {
              method: "post",
              body: n,
              credentials: "same-origin",
            });
          } catch (e) {
            throw new (o("WebBloksErrors").WebBloksNetworkError)(
              "Network error",
              e,
            );
          }
          var l = i.headers.get(u);
          if (i.status !== 200)
            throw i.status >= 500
              ? new (o("WebBloksErrors").WebBloksError)(
                  "Status: " + i.status + " " + i.statusText,
                )
              : new (o("WebBloksErrors").WebBloksNetworkError)(
                  "Status: " + i.status + " " + i.statusText,
                );
          if (l != null && l !== "" && l !== c)
            throw new (o("WebBloksErrors").WebBloksNetworkError)(
              "Unexpected content-type: " + l,
            );
          var d = yield i.text(),
            m = d.substr(s),
            p = JSON.parse(m);
          if (p != null && p.redirect)
            throw new (o("WebBloksErrors").WebBloksNetworkError)(
              "Unexpected redirect: " + p.redirect,
            );
          return p;
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
