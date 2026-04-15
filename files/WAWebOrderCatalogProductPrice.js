__d(
  "WAWebOrderCatalogProductPrice",
  [
    "fbt",
    "$InternalEnum",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebOrderDetailAmountInput",
    "WAWebOrderDetailSharedStyles",
    "WAWebStopEvent",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum").Mirrored([
        "Readonly",
        "EditableBlank",
        "EditableFilled",
        "Editing",
      ]);
    function m(t) {
      var n = o("react-compiler-runtime").c(40),
        a = t.currency,
        i = t.onPriceChange,
        l = t.onPriceStageChange,
        u = t.orderItem,
        m = t.price,
        p = t.priceStage;
      switch (p) {
        case d.Editing: {
          var _;
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end3,
              )),
              (n[0] = _))
            : (_ = n[0]);
          var f;
          n[1] !== a
            ? ((f = o("WAWebCurrencyUtils").formatAmount1000ToParts(a, 0)),
              (n[1] = a),
              (n[2] = f))
            : (f = n[2]);
          var g;
          n[3] !== f.symbol
            ? ((g = c.jsx(
                "span",
                babelHelpers.extends({}, _, { children: f.symbol }),
              )),
              (n[3] = f.symbol),
              (n[4] = g))
            : (g = n[4]);
          var h = m != null ? String(m / 1e3) : "",
            y;
          n[5] !== a || n[6] !== i || n[7] !== l
            ? ((y = function (t) {
                (l(d.EditableFilled),
                  i(o("WAWebCurrencyUtils").valueFromString(a, t)));
              }),
              (n[5] = a),
              (n[6] = i),
              (n[7] = l),
              (n[8] = y))
            : (y = n[8]);
          var C;
          n[9] !== l || n[10] !== m
            ? ((C = function () {
                l(m == null ? d.EditableBlank : d.EditableFilled);
              }),
              (n[9] = l),
              (n[10] = m),
              (n[11] = C))
            : (C = n[11]);
          var b;
          n[12] !== a || n[13] !== h || n[14] !== y || n[15] !== C
            ? ((b = c.jsx(r("WAWebOrderDetailAmountInput"), {
                currency: a,
                value: h,
                onSave: y,
                onCancel: C,
              })),
              (n[12] = a),
              (n[13] = h),
              (n[14] = y),
              (n[15] = C),
              (n[16] = b))
            : (b = n[16]);
          var v;
          return (
            n[17] !== g || n[18] !== b
              ? ((v = c.jsx("div", {
                  role: "textbox",
                  onClick: o("WAWebStopEvent").stopPropagation,
                  "data-testid": void 0,
                  children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    children: [g, b],
                  }),
                })),
                (n[17] = g),
                (n[18] = b),
                (n[19] = v))
              : (v = n[19]),
            v
          );
        }
        case d.EditableFilled: {
          var S;
          n[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = (e || (e = r("stylex"))).props(
                r("WAWebOrderDetailSharedStyles").clickableText,
              )),
              (n[20] = S))
            : (S = n[20]);
          var R;
          n[21] !== l
            ? ((R = function (t) {
                (l(d.Editing), t.stopPropagation());
              }),
              (n[21] = l),
              (n[22] = R))
            : (R = n[22]);
          var L = Number(m),
            E;
          n[23] !== a || n[24] !== L
            ? ((E = o("WAWebCurrencyUtils").formatAmount1000(a, L)),
              (n[23] = a),
              (n[24] = L),
              (n[25] = E))
            : (E = n[25]);
          var k;
          return (
            n[26] !== R || n[27] !== E
              ? ((k = c.jsx(
                  "div",
                  babelHelpers.extends({ role: "button" }, S, {
                    onClick: R,
                    "data-testid": void 0,
                    children: E,
                  }),
                )),
                (n[26] = R),
                (n[27] = E),
                (n[28] = k))
              : (k = n[28]),
            k
          );
        }
        case d.EditableBlank: {
          var I;
          n[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = (e || (e = r("stylex"))).props(
                r("WAWebOrderDetailSharedStyles").clickableText,
              )),
              (n[29] = I))
            : (I = n[29]);
          var T;
          n[30] !== l
            ? ((T = function (t) {
                (l(d.Editing), t.stopPropagation());
              }),
              (n[30] = l),
              (n[31] = T))
            : (T = n[31]);
          var D;
          n[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = s._(/*BTDS*/ "Enter price")), (n[32] = D))
            : (D = n[32]);
          var x;
          return (
            n[33] !== T
              ? ((x = c.jsx(
                  "span",
                  babelHelpers.extends({ role: "button" }, I, {
                    onClick: T,
                    "data-testid": void 0,
                    children: D,
                  }),
                )),
                (n[33] = T),
                (n[34] = x))
              : (x = n[34]),
            x
          );
        }
        default: {
          var $;
          n[35] !== a || n[36] !== u.price
            ? (($ = o("WAWebCurrencyUtils").formatAmount1000(a, u.price)),
              (n[35] = a),
              (n[36] = u.price),
              (n[37] = $))
            : ($ = n[37]);
          var P;
          return (
            n[38] !== $
              ? ((P = c.jsx("div", { "data-testid": void 0, children: $ })),
                (n[38] = $),
                (n[39] = P))
              : (P = n[39]),
            P
          );
        }
      }
    }
    ((l.PriceStage = d), (l.CatalogProductPrice = m));
  },
  226,
);
