__d(
  "WAWebBusinessProfileIconSection.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebStylesEnv",
    "WAWebUISpacing",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        disabled: { color: "xhslqc4", $$css: !0 },
        editPencil: { color: "xhslqc4", $$css: !0 },
        fontSmoothing: {
          "-moz-osx-font-smoothing": "xlh3980",
          "-webkit-font-smoothing": "xvmahel",
          $$css: !0,
        },
        sectionEmptyText: { color: "xhslqc4", fontSize: "x1lkfr7t", $$css: !0 },
        sectionMain: {
          flexBasis: "x1t1x2f9",
          flexGrow: "x1iyjqo2",
          lineHeight: "x37zpob",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        sectionPrimaryIcon: {
          color: "xhslqc4",
          flexShrink: "x2lah0s",
          width: "xvy4d1p",
          $$css: !0,
        },
        sectionPrimaryIconSvg: {
          height: "xxk0z11",
          width: "xvy4d1p",
          $$css: !0,
        },
      },
      d = n("$InternalEnum")({
        SmallMargin: "small-margin",
        NoMargin: "no-margin",
        NoMarginSmallGutter: "no-margin-small-gutter",
      });
    function m(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.Icon,
        a = e.content,
        i = e.disabled,
        l = e.editPencilXstyle,
        m = e.emptyText,
        p = e.fieldName,
        _ = e.onEdit,
        f = e.svgXstyle,
        g = e.testid,
        h = e.theme,
        y = e.type,
        C = e.xstyle,
        b = y === void 0 ? "field" : y,
        v;
      t[0] !== l || t[1] !== p || t[2] !== _ || t[3] !== g
        ? ((v = _
            ? u.jsx("div", {
                "data-testid": void 0,
                children: u.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                  xstyle: [c.editPencil, l],
                  onPress: _,
                  variant: "borderless",
                  directional: !0,
                  "aria-label": s._(/*BTDS*/ "Click to edit {fieldName}", [
                    s._param("fieldName", p),
                  ]),
                }),
              })
            : void 0),
          (t[0] = l),
          (t[1] = p),
          (t[2] = _),
          (t[3] = g),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R = m != null && !a,
        L = R ? m : a,
        E;
      t[5] !== n || t[6] !== f
        ? ((E = n
            ? u.jsx(n, { iconXstyle: [c.sectionPrimaryIconSvg, f] })
            : null),
          (t[5] = n),
          (t[6] = f),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I = h === d.SmallMargin && o("WAWebUISpacing").uiMargin.top16,
        T =
          (h === d.NoMargin || h === d.NoMarginSmallGutter) &&
          o("WAWebUISpacing").uiMargin.top0,
        D;
      t[8] !== I || t[9] !== T
        ? ((D = [o("WAWebUISpacing").uiMargin.top32, I, T]),
          (t[8] = I),
          (t[9] = T),
          (t[10] = D))
        : (D = t[10]);
      var x = g != null ? g + "-icon" : void 0,
        $ = b === "field" && o("WAWebUISpacing").uiMargin.top6,
        P = h === d.NoMarginSmallGutter && o("WAWebUISpacing").uiMargin.end7,
        N;
      t[11] !== $ || t[12] !== P || t[13] !== C
        ? ((N = [
            c.sectionPrimaryIcon,
            o("WAWebUISpacing").uiMargin.end28,
            $,
            P,
            C,
          ]),
          (t[11] = $),
          (t[12] = P),
          (t[13] = C),
          (t[14] = N))
        : (N = t[14]);
      var M;
      t[15] !== k || t[16] !== N || t[17] !== x
        ? ((M = u.jsx(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            xstyle: N,
            children: k,
          })),
          (t[15] = k),
          (t[16] = N),
          (t[17] = x),
          (t[18] = M))
        : (M = t[18]);
      var w = g != null ? g + "-content" : void 0,
        A = b === "container" && o("WAWebUISpacing").uiMargin.top4,
        F = R && c.sectionEmptyText,
        O = R && o("WAWebStylesEnv").isOSMac && c.fontSmoothing,
        B = i === !0 && c.disabled,
        W;
      t[19] !== A || t[20] !== F || t[21] !== O || t[22] !== B
        ? ((W = [
            c.sectionMain,
            o("WAWebUISpacing").uiPadding.end2,
            A,
            F,
            O,
            B,
          ]),
          (t[19] = A),
          (t[20] = F),
          (t[21] = O),
          (t[22] = B),
          (t[23] = W))
        : (W = t[23]);
      var q;
      t[24] !== L || t[25] !== w || t[26] !== W
        ? ((q = u.jsx(o("WAWebFlex.react").FlexItem, {
            testid: void 0,
            xstyle: W,
            children: L,
          })),
          (t[24] = L),
          (t[25] = w),
          (t[26] = W),
          (t[27] = q))
        : (q = t[27]);
      var U;
      return (
        t[28] !== S || t[29] !== M || t[30] !== q || t[31] !== D
          ? ((U = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: D,
              children: [M, q, S],
            })),
            (t[28] = S),
            (t[29] = M),
            (t[30] = q),
            (t[31] = D),
            (t[32] = U))
          : (U = t[32]),
        U
      );
    }
    ((l.IconSectionTheme = d), (l.IconSection = m));
  },
  226,
);
