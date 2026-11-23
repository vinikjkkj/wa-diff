__d(
  "webBloksFetchJson",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "for (;;);",
      s = e.length,
      u = "content-type",
      c = "application/x-javascript; charset=utf-8";
    async function d(e, t, n) {
      var r = new URLSearchParams();
      for (var a in t) {
        var i = t[a];
        i != null && r.append(a, String(i));
      }
      var l;
      try {
        l = await window.fetch(e.toString(), {
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
      var m = await l.text(),
        p = m.substr(s),
        _ = JSON.parse(p);
      if (_ != null && _.redirect)
        throw new (o("WebBloksErrors").WebBloksNetworkError)(
          "Unexpected redirect: " + _.redirect,
        );
      return _;
    }
    l.default = d;
  },
  98,
);
