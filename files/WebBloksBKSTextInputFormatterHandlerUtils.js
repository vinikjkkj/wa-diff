__d(
  "WebBloksBKSTextInputFormatterHandlerUtils",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksUtils",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksUtils").cast("\u35C8"),
      s = "$";
    function u(t) {
      var n = o("react-compiler-runtime").c(5),
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.executeCatch,
        i;
      n[0] !== t
        ? ((i = o("WebBloksUtils").findExtension(
            t.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
            e,
          )),
          (n[0] = t),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        u;
      return (
        n[2] !== a || n[3] !== l
          ? ((u = function (t) {
              var e = l == null ? void 0 : l.getExpression(s);
              if (l != null && e != null) {
                var n = a(l, e, [t]);
                if (typeof n == "string") return n;
              }
              return t;
            }),
            (n[2] = a),
            (n[3] = l),
            (n[4] = u))
          : (u = n[4]),
        u
      );
    }
    l.useBKSTextInputFormatter = u;
  },
  98,
);
