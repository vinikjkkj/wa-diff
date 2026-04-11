__d(
  "WebBloksAnchorTagExtensionHandlerUtils",
  ["WebBloksUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n,
        r;
      if (t[0] !== e) {
        r = Symbol.for("react.early_return_sentinel");
        e: {
          var a = e.getValues(),
            i = o("WebBloksUtils").findExtension(
              a.extensions,
              "bk.components.AnchorTagExtension",
            );
          if (!i) {
            r = null;
            break e;
          }
          n = i.getValues();
        }
        ((t[0] = e), (t[1] = n), (t[2] = r));
      } else ((n = t[1]), (r = t[2]));
      if (r !== Symbol.for("react.early_return_sentinel")) return r;
      var l = n,
        s = l.href,
        u;
      return (
        t[3] !== s
          ? ((u = { href: s, tabIndex: 0 }), (t[3] = s), (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.useWebBloksAnchorTagExtensionProps = e;
  },
  98,
);
