__d(
  "WAWebWassBotProfileMapper",
  ["WAWebBotProduct"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null || e === ""
        ? null
        : e === "THIRD_PARTY"
          ? o("WAWebBotProduct").BotProduct.THIRD_PARTY.valueOf()
          : e;
    }
    function s(t) {
      var n;
      return t == null
        ? { type: "deleted" }
        : {
            type: "exists",
            value: {
              isDeprecated: (n = t.is_deprecated) != null ? n : null,
              product: e(t.product),
            },
          };
    }
    ((l.mapWassProductToBotProduct = e), (l.toWassBotProfileResult = s));
  },
  98,
);
