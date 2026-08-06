__d(
  "WAWebBotProfileDebugUtils",
  ["WAWebBotProduct"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.product !== void 0 && (n.product = t.product),
        t.isDeprecated !== void 0 && (n.isDeprecated = t.isDeprecated),
        t.isDeleted !== void 0 && (n.isDeleted = t.isDeleted),
        n
      );
    }
    function s(e, t) {
      var n,
        r,
        a,
        i = (n = e == null ? void 0 : e.product) != null ? n : null,
        l = o("WAWebBotProduct").botProductFromServerValue(i);
      return {
        isDeleted: (r = e == null ? void 0 : e.isDeleted) != null ? r : null,
        isDeprecated:
          (a = e == null ? void 0 : e.isDeprecated) != null ? a : null,
        knownProduct: l != null ? l.valueOf() : null,
        product: i,
        supportStateKind: t.kind,
      };
    }
    ((l.mergeProfileOverride = e), (l.formatProfileDebug = s));
  },
  98,
);
