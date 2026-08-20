__d(
  "WebBloksAnchorTagExtensionHandlerUtils",
  ["WebBloksUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        r,
        a;
      if (t[0] !== e) {
        a = Symbol.for("react.early_return_sentinel");
        e: {
          var i = o("WebBloksUtils").findExtension(
            e.get("extensions"),
            "bk.components.AnchorTagExtension",
          );
          if (!i) {
            a = null;
            break e;
          }
          ((n = i.get("href")), (r = i.get("prefer_native_navigation")));
        }
        ((t[0] = e), (t[1] = n), (t[2] = r), (t[3] = a));
      } else ((n = t[1]), (r = t[2]), (a = t[3]));
      if (a !== Symbol.for("react.early_return_sentinel")) return a;
      var l = r,
        s;
      return (
        t[4] !== n || t[5] !== l
          ? ((s = { href: n, tabIndex: 0, preferNativeNavigation: l }),
            (t[4] = n),
            (t[5] = l),
            (t[6] = s))
          : (s = t[6]),
        s
      );
    }
    l.useWebBloksAnchorTagExtensionProps = e;
  },
  98,
);
