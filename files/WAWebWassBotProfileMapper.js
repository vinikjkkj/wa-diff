__d(
  "WAWebWassBotProfileMapper",
  ["WAWebBotProduct"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null || e === ""
        ? null
        : e === "THIRD_PARTY"
          ? o("WAWebBotProduct").BotProduct.THIRD_PARTY.valueOf()
          : e === "MANUS"
            ? o("WAWebBotProduct").BotProduct.MANUS.valueOf()
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
              name: u(t.name),
              product: e(t.product),
              profilePicThumbUrl: u(t.profile_pic_thumb_url),
              profilePicFullUrl: u(t.profile_pic_full_url),
            },
          };
    }
    function u(e) {
      return e != null && e !== "" ? e : null;
    }
    ((l.mapWassProductToBotProduct = e),
      (l.toWassBotProfileResult = s),
      (l.emptyToNull = u));
  },
  98,
);
