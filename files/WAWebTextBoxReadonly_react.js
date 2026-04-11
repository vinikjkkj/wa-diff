__d(
  "WAWebTextBoxReadonly.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSColorStyles.stylex",
    "WDSFontTokenStyles",
    "nullthrows",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState,
      m = {
        container: {
          height: "x1vqgdyp",
          width: "xh8yej3",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          cursor: "x1ed109x",
          $$css: !0,
        },
        containerFocused: {
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        inputContainer: { width: "xh8yej3", $$css: !0 },
        input: {
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          backgroundColor: "xjbqb8w",
          width: "xh8yej3",
          color: "xhslqc4",
          caretColor: "xbuiw85",
          cursor: "x1ed109x",
          textAlign: "x1yc453h",
          textWrap: "xebhuq6",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          ":focus_outline": "x1uvtmcs",
          $$css: !0,
        },
        addOnAfterContainer: { minWidth: "xnei2rj", $$css: !0 },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.addOnAfter,
        a = e.ariaLabel,
        i = e.inputContainerXstyle,
        l = e.text,
        u = e.xstyle,
        p = d(!1),
        _ = p[0],
        f = p[1],
        g = c(null),
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            if ((f(!0), g.current)) {
              var e;
              (e = window.getSelection()) == null ||
                e.selectAllChildren(r("nullthrows")(g.current));
            }
          }),
          (t[0] = h))
        : (h = t[0]);
      var y = h,
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            if ((f(!1), g.current)) {
              var e;
              (e = window.getSelection()) == null || e.removeAllRanges();
            }
          }),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v = _ && m.containerFocused,
        S;
      t[2] !== v || t[3] !== u
        ? ((S = [
            m.container,
            o("WDSColorStyles.stylex").WDSBackgroundColorStyles
              .surfaceHighlight,
            v,
            u,
          ]),
          (t[2] = v),
          (t[3] = u),
          (t[4] = S))
        : (S = t[4]);
      var R;
      t[5] !== i
        ? ((R = [m.inputContainer, o("WAWebUISpacing").uiPadding.horiz20, i]),
          (t[5] = i),
          (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [
            m.input,
            o("WAWebUISpacing").uiPadding.all0,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
          ]),
          (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] !== l ? ((E = l.toString()), (t[8] = l), (t[9] = E)) : (E = t[9]);
      var k;
      t[10] !== E || t[11] !== l
        ? ((k = s.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
            plainText: E,
            selectable: !0,
            children: l,
          })),
          (t[10] = E),
          (t[11] = l),
          (t[12] = k))
        : (k = t[12]);
      var I;
      t[13] !== a || t[14] !== k
        ? ((I = s.jsx(r("WAWebUnstyledButton.react"), {
            ref: g,
            xstyle: L,
            "aria-label": a,
            onFocus: y,
            onBlur: b,
            children: k,
          })),
          (t[13] = a),
          (t[14] = k),
          (t[15] = I))
        : (I = t[15]);
      var T;
      t[16] !== R || t[17] !== I
        ? ((T = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: R,
            children: I,
          })),
          (t[16] = R),
          (t[17] = I),
          (t[18] = T))
        : (T = t[18]);
      var D;
      t[19] !== n
        ? ((D =
            n != null
              ? s.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    m.addOnAfterContainer,
                    o("WAWebUISpacing").uiPadding.all8,
                  ],
                  children: n,
                })
              : null),
          (t[19] = n),
          (t[20] = D))
        : (D = t[20]);
      var x;
      return (
        t[21] !== T || t[22] !== D || t[23] !== S
          ? ((x = s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: S,
              align: "center",
              children: [T, D],
            })),
            (t[21] = T),
            (t[22] = D),
            (t[23] = S),
            (t[24] = x))
          : (x = t[24]),
        x
      );
    }
    l.default = p;
  },
  98,
);
