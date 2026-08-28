__d(
  "WebBloksAnchorTagExtensionHandlerUtils",
  ["WebBloksConstants", "WebBloksUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WebBloksUtils").cast("\u4244"),
      s = "#",
      u = "$";
    function c(t) {
      var n = o("react-compiler-runtime").c(7),
        r,
        a,
        i;
      if (n[0] !== t) {
        i = Symbol.for("react.early_return_sentinel");
        e: {
          var l = o("WebBloksUtils").findExtension(
            t.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
            e,
          );
          if (!l) {
            i = null;
            break e;
          }
          ((r = l.get(s)), (a = l.get(u)));
        }
        ((n[0] = t), (n[1] = r), (n[2] = a), (n[3] = i));
      } else ((r = n[1]), (a = n[2]), (i = n[3]));
      if (i !== Symbol.for("react.early_return_sentinel")) return i;
      var c = a,
        d;
      return (
        n[4] !== r || n[5] !== c
          ? ((d = { href: r, tabIndex: 0, preferNativeNavigation: c }),
            (n[4] = r),
            (n[5] = c),
            (n[6] = d))
          : (d = n[6]),
        d
      );
    }
    l.useWebBloksAnchorTagExtensionProps = c;
  },
  98,
);
