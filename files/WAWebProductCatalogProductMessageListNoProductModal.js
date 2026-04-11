__d(
  "WAWebProductCatalogProductMessageListNoProductModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onConfirm;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: t,
        tsNavigationData: { surface: "unknown", viewName: "no-product" },
        okText: r("WAWebFbtCommon")("OK"),
        children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: s._(/*BTDS*/ "Items in this message are no longer available"),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
