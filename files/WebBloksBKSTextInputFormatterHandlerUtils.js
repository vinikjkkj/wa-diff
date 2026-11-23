__d(
  "WebBloksBKSTextInputFormatterHandlerUtils",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "bk.components.BKSTextInputFormatter",
      s = o("WebBloksModel").defineWebBloksAttributeKey("$");
    function u(t) {
      var n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.executeCatch,
        a = o("WebBloksUtils").findExtension(
          t.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
          e,
        );
      return function (e) {
        var t = a == null ? void 0 : a.getExpression(s);
        if (a != null && t != null) {
          var n = r(a, t, [e]);
          if (typeof n == "string") return n;
        }
        return e;
      };
    }
    l.useBKSTextInputFormatter = u;
  },
  98,
);
