__d(
  "WAWebBotSupportState",
  ["$InternalEnum", "WAWebBotProduct"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "UNRESOLVED",
      "DELETED",
      "DEPRECATED",
      "UNSUPPORTED",
      "SUPPORTED",
    ]);
    function s(t, n) {
      if (t == null) return { kind: e.UNRESOLVED };
      if (t.isDeprecated === !0) return { kind: e.DEPRECATED };
      if (t.product == null || t.product === "") return { kind: e.DEPRECATED };
      var r = o("WAWebBotProduct").botProductFromServerValue(t.product);
      return r == null
        ? { kind: e.UNSUPPORTED, rawProduct: t.product }
        : n(r)
          ? t.isDeleted === !0
            ? { kind: e.DELETED }
            : { kind: e.SUPPORTED, product: r }
          : { kind: e.UNSUPPORTED, rawProduct: t.product };
    }
    ((l.BotSupportStateKind = e), (l.evaluateBotSupport = s));
  },
  98,
);
