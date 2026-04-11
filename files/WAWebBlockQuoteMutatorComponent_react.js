__d(
  "WAWebBlockQuoteMutatorComponent.react",
  [
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        quote: {
          display: "x1rg5ohu",
          position: "x1n2onr6",
          width: "xh8yej3",
          color: "xhslqc4",
          $$css: !0,
        },
        quotedColor: {
          color: "x15rks2t",
          borderTopColor: "x1b4hy2t",
          borderInlineEndColor: "x1273586",
          borderBottomColor: "x1tnzt7h",
          borderInlineStartColor: "x1mi4oqr",
          $$css: !0,
        },
        marginVert4: {
          marginTop: "xav9cv8",
          marginBottom: "x4tpdpg",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(31),
        a = t.children,
        i = t.inline,
        l = t.quoted,
        s = t.selectable,
        d = t.text,
        m = a === void 0 ? "" : a,
        p = i === void 0 ? !1 : i,
        _ = l === void 0 ? !1 : l,
        f;
      n[0] !== d
        ? ((f = o("WABidi").dir(d)), (n[0] = d), (n[1] = f))
        : (f = n[1]);
      var g = f,
        h;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = r("WAWebL10N").isRTL()), (n[2] = h))
        : (h = n[2]);
      var y = (g === "rtl") !== h;
      if (p) {
        var C;
        n[3] !== y || n[4] !== _
          ? ((C = {
              0: "xt0psk2 x14atkfc xhslqc4 xct1zlm x1t7ytsu x19mw7rs x7phf20 xaso8d8",
              2: "xt0psk2 x14atkfc x15rks2t x1b4hy2t x1273586 x1tnzt7h xct1zlm x1t7ytsu x19mw7rs x7phf20 xaso8d8",
              1: "xt0psk2 x14atkfc xct1zlm x1t7ytsu x7phf20 xaso8d8 xhslqc4 x1if355w x18b5jzi xp93uhy x1p8j9ns x1gabggj",
              3: "xt0psk2 x14atkfc xct1zlm x1t7ytsu x7phf20 xaso8d8 x15rks2t x1b4hy2t x1tnzt7h x1mi4oqr x1if355w x18b5jzi xp93uhy x1p8j9ns x1gabggj",
            }[(!!_ << 1) | (!!y << 0)]),
            (n[3] = y),
            (n[4] = _),
            (n[5] = C))
          : (C = n[5]);
        var b;
        return (
          n[6] !== m || n[7] !== s || n[8] !== C || n[9] !== g
            ? ((b = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
                dir: g,
                selectable: s,
                prePlainText: "> ",
                className: C,
                children: m,
              })),
              (n[6] = m),
              (n[7] = s),
              (n[8] = C),
              (n[9] = g),
              (n[10] = b))
            : (b = n[10]),
          b
        );
      }
      var v;
      n[11] !== _
        ? ((v = (e || (e = r("stylex")))([
            c.quote,
            _ && c.quotedColor,
            !_ && c.marginVert4,
          ])),
          (n[11] = _),
          (n[12] = v))
        : (v = n[12]);
      var S;
      n[13] !== y || n[14] !== _
        ? ((S = {
            0: {
              className:
                "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x1xkn691 x4oqio7",
            },
            2: {
              className:
                "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy x1518k6t xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtijo5x",
            },
            1: {
              className:
                "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtwfq29",
            },
            3: {
              className:
                "x10l6tqk x1o0tod x13vifvy x5yr21d x1g8rjiy xkqq1k2 x91jh78 x1xkn691 x4oqio7 xtijo5x xtwfq29",
            },
          }[(!!y << 1) | (!!_ << 0)]),
          (n[13] = y),
          (n[14] = _),
          (n[15] = S))
        : (S = n[15]);
      var R;
      n[16] !== S
        ? ((R = u.jsx("div", babelHelpers.extends({}, S))),
          (n[16] = S),
          (n[17] = R))
        : (R = n[17]);
      var L;
      n[18] !== y
        ? ((L = {
            0: { className: "x1rg5ohu x1gx403c xj0a0fe xeaf4i8" },
            1: { className: "x1rg5ohu xj0a0fe xeaf4i8 x1c1uobl x1q3ajuy" },
          }[!!y << 0]),
          (n[18] = y),
          (n[19] = L))
        : (L = n[19]);
      var E;
      n[20] !== m
        ? ((E = o("WAWebFormatComponentUtils").removeFirstLeadingSpace(m)),
          (n[20] = m),
          (n[21] = E))
        : (E = n[21]);
      var k;
      n[22] !== E || n[23] !== L
        ? ((k = u.jsx("div", babelHelpers.extends({}, L, { children: E }))),
          (n[22] = E),
          (n[23] = L),
          (n[24] = k))
        : (k = n[24]);
      var I;
      return (
        n[25] !== s || n[26] !== k || n[27] !== v || n[28] !== R || n[29] !== g
          ? ((I = u.jsxs(
              o("WAWebCopyPasteSelectable.react").SelectableBlockQuote,
              {
                dir: g,
                selectable: s,
                prePlainText: "> ",
                className: v,
                children: [R, k],
              },
            )),
            (n[25] = s),
            (n[26] = k),
            (n[27] = v),
            (n[28] = R),
            (n[29] = g),
            (n[30] = I))
          : (I = n[30]),
        I
      );
    }
    l.default = d;
  },
  98,
);
