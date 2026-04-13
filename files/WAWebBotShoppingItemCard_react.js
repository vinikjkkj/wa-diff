__d(
  "WAWebBotShoppingItemCard.react",
  [
    "WAWebBotCardImageUtils",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 212,
      c = 220;
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.price;
      if (!r("isStringNotNullAndNotWhitespaceOnly")(n)) return null;
      var a;
      return (
        t[0] !== n
          ? ((a = s.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: n,
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.brand,
        a = e.imageUrl,
        i = e.price,
        l = e.productUrl,
        c = e.salePrice,
        m = e.title,
        p;
      t[0] !== a
        ? ((p = { imageUrl: a, width: u, height: u }), (t[0] = a), (t[1] = p))
        : (p = t[1]);
      var _ = o("WAWebBotCardImageUtils").useResizedImage(p),
        f;
      t[2] !== l
        ? ((f = function () {
            r("isStringNotNullAndNotWhitespaceOnly")(l) &&
              o("WAWebExternalLink.react").openExternalLink(l);
          }),
          (t[2] = l),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h;
      t[4] !== g
        ? ((h = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), g());
          }),
          (t[4] = g),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className:
              "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1ypdohk x78zum5 xdt5ytf x6ikm8r x10wlt62 x1tiyuxx x1uc92m x181vq82 xscbp6u x8a3fw1 x1hl2dhg x16grhtn",
          }),
          (t[6] = y))
        : (y = t[6]);
      var C;
      t[7] !== _ || t[8] !== m
        ? ((C =
            _ != null &&
            s.jsx(r("WAWebImg.react"), {
              alt: m != null ? m : "",
              src: o("WAWebBotCardImageUtils").toJpegDataUrl(_),
              className:
                "xbrszos xea3l6g x18isctg x2q3nzr xs3hcls xl1xv1r xh8yej3",
            })),
          (t[7] = _),
          (t[8] = m),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x78zum5 xdt5ytf x1nzty39 x12w63v0" }),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== n
        ? ((v =
            r("isStringNotNullAndNotWhitespaceOnly")(n) &&
            s.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: n,
            })),
          (t[11] = n),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== m
        ? ((S =
            r("isStringNotNullAndNotWhitespaceOnly")(m) &&
            s.jsx("div", {
              className: "x13m54ha x1moqkgt",
              children: s.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                maxLines: 1,
                children: m,
              }),
            })),
          (t[13] = m),
          (t[14] = S))
        : (S = t[14]);
      var R = c != null ? c : i,
        L;
      t[15] !== R
        ? ((L = s.jsx(d, { price: R })), (t[15] = R), (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] !== v || t[18] !== S || t[19] !== L
        ? ((E = s.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [v, S, L] }),
          )),
          (t[17] = v),
          (t[18] = S),
          (t[19] = L),
          (t[20] = E))
        : (E = t[20]);
      var k;
      return (
        t[21] !== g || t[22] !== E || t[23] !== h || t[24] !== C
          ? ((k = s.jsxs(
              "div",
              babelHelpers.extends(
                { onClick: g, onKeyDown: h, role: "link", tabIndex: 0 },
                y,
                { children: [C, E] },
              ),
            )),
            (t[21] = g),
            (t[22] = E),
            (t[23] = h),
            (t[24] = C),
            (t[25] = k))
          : (k = t[25]),
        k
      );
    }
    l.default = m;
  },
  98,
);
