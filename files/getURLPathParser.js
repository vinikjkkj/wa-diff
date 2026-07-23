__d(
  "getURLPathParser",
  ["FBLogger", "PHPQuerySerializer", "routeBuilderUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "[A-Za-z0-9._~-]",
      u = "%[0-9A-Fa-f]{2}",
      c = "[!$&'()*+,;=]",
      d = "(?:" + s + "|" + u + "|" + c + "|[:@])",
      m = "/(" + d + "+)",
      p = "(?:" + m + ")?",
      _ = "/((?:" + d + "+/){0,}(?:" + d + "+))",
      f = "(?:" + _ + ")?",
      g = function (n) {
        var t = o("routeBuilderUtils").getPathParts(n),
          a = [],
          i = [];
        t.forEach(function (e, o) {
          if (e.isToken) {
            var l = e.catchAll,
              s = e.optional,
              u = e.token;
            if (l && o !== t.length - 1)
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "Wildcards can only be in the last path component: %s",
                n,
              );
            (i.push(u),
              s && l ? a.push(f) : l ? a.push(_) : s ? a.push(p) : a.push(m));
          } else a.push("/" + e.part);
        });
        var l = new RegExp("^" + a.join("") + "/?$");
        return {
          getParams: function (n) {
            var t = l.exec(n.getPath());
            return i.reduce(function (n, o, a) {
              var i,
                l = t == null ? void 0 : t[a + 1];
              return Object.assign(
                n,
                ((i = {}),
                (i[o] =
                  l != null
                    ? (e || (e = r("PHPQuerySerializer"))).decodeComponent(l)
                    : l),
                i),
              );
            }, {});
          },
          regex: l,
          test: function (t) {
            return l.test(t.getPath());
          },
          validateTokenArray: function (t) {
            return i.every(function (e) {
              return t.includes(e);
            });
          },
        };
      },
      h = g;
    l.default = h;
  },
  98,
);
