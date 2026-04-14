__d(
  "WAWebOrderDetailProductListItem",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebOrderIcons",
    "WAWebText_DONOTUSE.react",
    "isNonZeroNumber",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t;
      r("vulture")("d1Z1aam-u0-7sR6ZXliwL4Rcvw8=");
      var n = e.product,
        a = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: n.name,
          ellipsify: !0,
          titlify: !0,
        }),
        i = u.jsx(o("WAWebOrderIcons").OrderItemIcon, {
          useCustomIcon: !n.mediaData,
          mediaData: (t = n.mediaData) != null ? t : null,
        }),
        l = null;
      if (n.quantity) {
        var c = s._(/*BTDS*/ "Qty {quantity}", [
          s._param("quantity", n.quantity.toString()),
        ]);
        l = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: c });
      }
      var d = null;
      o("isNonZeroNumber").isNonZeroNumber(n.price)
        ? (d = o("WAWebCurrencyUtils").formatAmount1000(n.currency, n.price))
        : (d = s._(/*BTDS*/ "Ask for price"));
      var m = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: d });
      return u.jsx(r("WAWebCellFrame.react"), {
        image: i,
        customImage: !0,
        primary: a,
        secondary: l,
        detail: m,
        theme: "media",
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
