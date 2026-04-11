__d(
  "useTimeout",
  [
    "clearTimeout",
    "react",
    "setTimeout",
    "useEffectOnce",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useState;
    function m(t, n) {
      n === void 0 && (n = !0);
      var o = (e || (e = r("useUnsafeRef_DEPRECATED")))(null),
        a = d(n),
        i = a[0],
        l = a[1],
        s = c(function () {
          (l(!1), r("clearTimeout")(o.current));
        }, []),
        u = c(
          function () {
            (l(!0),
              (o.current = r("setTimeout")(function () {
                l(!1);
              }, t)));
          },
          [t],
        ),
        m = c(
          function () {
            (r("clearTimeout")(o.current), u());
          },
          [u],
        );
      return (
        r("useEffectOnce")(function () {
          return (n && u(), s);
        }),
        { pending: i, clear: s, restart: m }
      );
    }
    l.default = m;
  },
  98,
);
