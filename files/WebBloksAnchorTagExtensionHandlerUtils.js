__d(
  "WebBloksAnchorTagExtensionHandlerUtils",
  ["WebBloksUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(6),
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
        u = l.prefer_native_navigation,
        c;
      return (
        t[3] !== s || t[4] !== u
          ? ((c = { href: s, tabIndex: 0, preferNativeNavigation: u }),
            (t[3] = s),
            (t[4] = u),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.useWebBloksAnchorTagExtensionProps = e;
  },
  98,
);
