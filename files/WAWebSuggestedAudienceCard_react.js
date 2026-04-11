__d(
  "WAWebSuggestedAudienceCard.react",
  [
    "WAWebFlex.react",
    "WDSFocusStateStyles",
    "WDSIconIcChevronRight.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useCallback,
      d = {
        card: {
          backgroundColor: "xjbqb8w x1ubxc9n",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          cursor: "x1ypdohk",
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        iconWrapper: {
          backgroundColor: "x1h3rtpe",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          height: "x10kmny3",
          width: "xuy0it7",
          $$css: !0,
        },
        row: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(26),
        a = t.card,
        i = t.onPress,
        l = t.xstyle,
        s;
      n[0] !== a || n[1] !== i
        ? ((s = function () {
            i(a);
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = s))
        : (s = n[2]);
      var c = s,
        m = r("useWAWebStaticButtonA11y")(c),
        p = m[0],
        _ = m[1],
        f = a.icon,
        g;
      n[3] !== l
        ? ((g = (e || (e = r("stylex")))(
            d.card,
            d.row,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            l,
          )),
          (n[3] = l),
          (n[4] = g))
        : (g = n[4]);
      var h = "suggested-audience-card-" + a.id,
        y;
      n[5] !== f
        ? ((y = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            shrink: 0,
            xstyle: d.iconWrapper,
            children: u.jsx(f, {}),
          })),
          (n[5] = f),
          (n[6] = y))
        : (y = n[6]);
      var C;
      n[7] !== a ? ((C = a.title()), (n[7] = a), (n[8] = C)) : (C = n[8]);
      var b;
      n[9] !== C
        ? ((b = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: C,
          })),
          (n[9] = C),
          (n[10] = b))
        : (b = n[10]);
      var v;
      n[11] !== a
        ? ((v = a.description()), (n[11] = a), (n[12] = v))
        : (v = n[12]);
      var S;
      n[13] !== v
        ? ((S = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            maxLines: 1,
            children: v,
          })),
          (n[13] = v),
          (n[14] = S))
        : (S = n[14]);
      var R;
      n[15] !== b || n[16] !== S
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            children: [b, S],
          })),
          (n[15] = b),
          (n[16] = S),
          (n[17] = R))
        : (R = n[17]);
      var L;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(r("WDSIconIcChevronRight.react"), {
            colorName: "contentDeemphasized",
          })),
          (n[18] = L))
        : (L = n[18]);
      var E;
      return (
        n[19] !== _ ||
        n[20] !== p ||
        n[21] !== g ||
        n[22] !== h ||
        n[23] !== y ||
        n[24] !== R
          ? ((E = u.jsxs(
              "div",
              babelHelpers.extends(
                { ref: p, className: g, "data-testid": void 0 },
                _,
                { children: [y, R, L] },
              ),
            )),
            (n[19] = _),
            (n[20] = p),
            (n[21] = g),
            (n[22] = h),
            (n[23] = y),
            (n[24] = R),
            (n[25] = E))
          : (E = n[25]),
        E
      );
    }
    l.default = m;
  },
  98,
);
