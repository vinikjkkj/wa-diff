__d(
  "WebBloksBKSTextInputFormatterHandlerUtils",
  ["WebBloksComponentContext", "WebBloksUtils", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(5),
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.executeCatch,
        a;
      t[0] !== e.extensions
        ? ((a = o("WebBloksUtils").findExtension(
            e.extensions,
            "bk.components.BKSTextInputFormatter",
          )),
          (t[0] = e.extensions),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== r || t[3] !== i
          ? ((l = function (t) {
              var e = i == null ? void 0 : i.getExpression("format_text");
              if (i != null && e != null) {
                var n = r(i, e, [t]);
                if (typeof n == "string") return n;
              }
              return t;
            }),
            (t[2] = r),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.useBKSTextInputFormatter = e;
  },
  98,
);
