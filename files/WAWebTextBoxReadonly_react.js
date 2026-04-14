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
      var t = e.addOnAfter,
        n = e.ariaLabel,
        a = e.inputContainerXstyle,
        i = e.text,
        l = e.xstyle,
        u = d(!1),
        p = u[0],
        _ = u[1],
        f = c(null),
        g = function () {
          if ((_(!0), f.current)) {
            var e;
            (e = window.getSelection()) == null ||
              e.selectAllChildren(r("nullthrows")(f.current));
          }
        },
        h = function () {
          if ((_(!1), f.current)) {
            var e;
            (e = window.getSelection()) == null || e.removeAllRanges();
          }
        };
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: [
          m.container,
          o("WDSColorStyles.stylex").WDSBackgroundColorStyles.surfaceHighlight,
          p && m.containerFocused,
          l,
        ],
        align: "center",
        children: [
          s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: [
              m.inputContainer,
              o("WAWebUISpacing").uiPadding.horiz20,
              a,
            ],
            children: s.jsx(r("WAWebUnstyledButton.react"), {
              ref: f,
              xstyle: [
                m.input,
                o("WAWebUISpacing").uiPadding.all0,
                o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
              ],
              "aria-label": n,
              onFocus: g,
              onBlur: h,
              children: s.jsx(
                o("WAWebCopyPasteSelectable.react").SelectableSpan,
                { plainText: i.toString(), selectable: !0, children: i },
              ),
            }),
          }),
          t != null
            ? s.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: [
                  m.addOnAfterContainer,
                  o("WAWebUISpacing").uiPadding.all8,
                ],
                children: t,
              })
            : null,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
