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
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(20);
      r("vulture")("d1Z1aam-u0-7sR6ZXliwL4Rcvw8=");
      var a = e.product,
        i;
      n[0] !== a.name
        ? ((i = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: a.name,
            ellipsify: !0,
            titlify: !0,
          })),
          (n[0] = a.name),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        c = !a.mediaData,
        d = (t = a.mediaData) != null ? t : null,
        m;
      n[2] !== c || n[3] !== d
        ? ((m = u.jsx(o("WAWebOrderIcons").OrderItemIcon, {
            useCustomIcon: c,
            mediaData: d,
          })),
          (n[2] = c),
          (n[3] = d),
          (n[4] = m))
        : (m = n[4]);
      var p = m,
        _ = null;
      if (a.quantity) {
        var f;
        n[5] !== a.quantity
          ? ((f = s._(/*BTDS*/ "Qty {quantity}", [
              s._param("quantity", a.quantity.toString()),
            ])),
            (n[5] = a.quantity),
            (n[6] = f))
          : (f = n[6]);
        var g = f,
          h;
        (n[7] !== g
          ? ((h = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              children: g,
            })),
            (n[7] = g),
            (n[8] = h))
          : (h = n[8]),
          (_ = h));
      }
      var y;
      if (o("isNonZeroNumber").isNonZeroNumber(a.price)) {
        var C;
        (n[9] !== a.currency || n[10] !== a.price
          ? ((C = o("WAWebCurrencyUtils").formatAmount1000(
              a.currency,
              a.price,
            )),
            (n[9] = a.currency),
            (n[10] = a.price),
            (n[11] = C))
          : (C = n[11]),
          (y = C));
      } else {
        var b;
        (n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = s._(/*BTDS*/ "Ask for price")), (n[12] = b))
          : (b = n[12]),
          (y = b));
      }
      var v;
      n[13] !== y
        ? ((v = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: y })),
          (n[13] = y),
          (n[14] = v))
        : (v = n[14]);
      var S = v,
        R;
      return (
        n[15] !== S || n[16] !== l || n[17] !== p || n[18] !== _
          ? ((R = u.jsx(r("WAWebCellFrame.react"), {
              image: p,
              customImage: !0,
              primary: l,
              secondary: _,
              detail: S,
              theme: "media",
            })),
            (n[15] = S),
            (n[16] = l),
            (n[17] = p),
            (n[18] = _),
            (n[19] = R))
          : (R = n[19]),
        R
      );
    }
    l.default = c;
  },
  226,
);
