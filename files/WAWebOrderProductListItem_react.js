__d(
  "WAWebOrderProductListItem.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebOrderItemGetters",
    "WAWebProductCatalogProductThumb.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "isNonZeroNumber",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(37),
        a = t.onClick,
        i = t.product,
        l;
      n[0] !== i.name
        ? ((l = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: i.name,
            ellipsify: !0,
            titlify: !0,
          })),
          (n[0] = i.name),
          (n[1] = l))
        : (l = n[1]);
      var u = l,
        d;
      n[2] !== i
        ? ((d = o("WAWebOrderItemGetters").getMediaData(i)),
          (n[2] = i),
          (n[3] = d))
        : (d = n[3]);
      var p;
      n[4] !== d
        ? ((p = c.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
            mediaData: d,
            theme: "list",
          })),
          (n[4] = d),
          (n[5] = p))
        : (p = n[5]);
      var _ = p,
        f;
      n[6] !== i.quantity
        ? ((f = s._(/*BTDS*/ "Quantity {item-quantity}", [
            s._param("item-quantity", i.quantity),
          ])),
          (n[6] = i.quantity),
          (n[7] = f))
        : (f = n[7]);
      var g = f,
        h = null;
      if (i.quantity) {
        var y;
        n[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (e || (e = r("stylex")))(
              o("WAWebUISpacing").uiMargin.vert0,
              o("WAWebUISpacing").uiMargin.start0,
              o("WAWebUISpacing").uiMargin.end6,
            )),
            (n[8] = y))
          : (y = n[8]);
        var C;
        (n[9] !== g
          ? ((C = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              className: y,
              children: g,
            })),
            (n[9] = g),
            (n[10] = C))
          : (C = n[10]),
          (h = C));
      }
      var b = null;
      if (o("isNonZeroNumber").isNonZeroNumber(i.price)) {
        var v;
        n[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (e || (e = r("stylex")))(
              o("WAWebUISpacing").uiMargin.vert0,
              o("WAWebUISpacing").uiMargin.start0,
              o("WAWebUISpacing").uiMargin.end6,
            )),
            (n[11] = v))
          : (v = n[11]);
        var S;
        n[12] !== i.currency || n[13] !== i.price
          ? ((S = o("WAWebCurrencyUtils").formatAmount1000(
              i.currency,
              i.price,
            )),
            (n[12] = i.currency),
            (n[13] = i.price),
            (n[14] = S))
          : (S = n[14]);
        var R;
        (n[15] !== S
          ? ((R = c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              className: v,
              children: S,
            })),
            (n[15] = S),
            (n[16] = R))
          : (R = n[16]),
          (b = R));
      }
      var L = null;
      if (b != null) {
        var E;
        (n[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = c.jsx(
              "span",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.vert0,
                  o("WAWebUISpacing").uiMargin.start0,
                  o("WAWebUISpacing").uiMargin.end6,
                ),
                { children: "\u2022" },
              ),
            )),
            (n[17] = E))
          : (E = n[17]),
          (L = E));
      }
      var k;
      if (n[18] !== i.properties) {
        var I, T;
        ((k =
          (I = (T = i.properties) == null ? void 0 : T.map(m)) != null
            ? I
            : []),
          (n[18] = i.properties),
          (n[19] = k));
      } else k = n[19];
      var D = k,
        x;
      n[20] !== b || n[21] !== h || n[22] !== L
        ? ((x = c.jsxs(o("WAWebFlex.react").FlexRow, { children: [b, L, h] })),
          (n[20] = b),
          (n[21] = h),
          (n[22] = L),
          (n[23] = x))
        : (x = n[23]);
      var $;
      n[24] !== D
        ? (($ =
            D.length > 0 &&
            c.jsx(o("WAWebFlex.react").FlexColumn, { children: D })),
          (n[24] = D),
          (n[25] = $))
        : ($ = n[25]);
      var P;
      n[26] !== x || n[27] !== $
        ? ((P = c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [x, $] })),
          (n[26] = x),
          (n[27] = $),
          (n[28] = P))
        : (P = n[28]);
      var N = P,
        M;
      n[29] !== i.id
        ? ((M = i.id.toString()), (n[29] = i.id), (n[30] = M))
        : (M = n[30]);
      var w;
      return (
        n[31] !== a || n[32] !== N || n[33] !== u || n[34] !== _ || n[35] !== M
          ? ((w = c.jsx(
              r("WAWebCellFrame.react"),
              {
                image: _,
                customImage: !0,
                primary: u,
                secondary: N,
                theme: "order-product",
                onClick: a,
              },
              M,
            )),
            (n[31] = a),
            (n[32] = N),
            (n[33] = u),
            (n[34] = _),
            (n[35] = M),
            (n[36] = w))
          : (w = n[36]),
        w
      );
    }
    function m(e) {
      var t = e[0],
        n = e[1];
      return c.jsx(
        o("WAWebFlex.react").FlexRow,
        {
          children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            children: s._(/*BTDS*/ "{propertyName}: {propertyValue}", [
              s._param("propertyName", t),
              s._param("propertyValue", n),
            ]),
          }),
        },
        t + "-" + n,
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
