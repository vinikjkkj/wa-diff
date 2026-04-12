__d(
  "WAWebBotShoppingItemCard.react",
  [
    "WAWebBotCardImageUtils",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 212,
      c = 220;
    function d(e) {
      var t = e.price;
      return r("isStringNotNullAndNotWhitespaceOnly")(t)
        ? s.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            maxLines: 1,
            children: t,
          })
        : null;
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.brand,
        n = e.imageUrl,
        a = e.price,
        i = e.productUrl,
        l = e.salePrice,
        c = e.title,
        m = o("WAWebBotCardImageUtils").useResizedImage({
          imageUrl: n,
          width: u,
          height: u,
        }),
        p = function () {
          r("isStringNotNullAndNotWhitespaceOnly")(i) &&
            o("WAWebExternalLink.react").openExternalLink(i);
        };
      return s.jsxs("div", {
        onClick: p,
        onKeyDown: function (t) {
          (t.key === "Enter" || t.key === " ") && (t.preventDefault(), p());
        },
        role: "link",
        tabIndex: 0,
        className:
          "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1ypdohk x78zum5 xdt5ytf x6ikm8r x10wlt62 x1tiyuxx x1uc92m x181vq82 xscbp6u x8a3fw1 x1hl2dhg x16grhtn",
        children: [
          m != null &&
            s.jsx(r("WAWebImg.react"), {
              alt: c != null ? c : "",
              src: o("WAWebBotCardImageUtils").toJpegDataUrl(m),
              className:
                "xbrszos xea3l6g x18isctg x2q3nzr xs3hcls xl1xv1r xh8yej3",
            }),
          s.jsxs("div", {
            className: "x78zum5 xdt5ytf x1nzty39 x12w63v0",
            children: [
              r("isStringNotNullAndNotWhitespaceOnly")(t) &&
                s.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  maxLines: 1,
                  children: t,
                }),
              r("isStringNotNullAndNotWhitespaceOnly")(c) &&
                s.jsx("div", {
                  className: "x13m54ha x1moqkgt",
                  children: s.jsx(r("WDSText.react"), {
                    type: "Body1Emphasized",
                    colorName: "contentDefault",
                    maxLines: 1,
                    children: c,
                  }),
                }),
              s.jsx(d, { price: l != null ? l : a }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
