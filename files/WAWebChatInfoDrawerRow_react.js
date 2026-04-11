__d(
  "WAWebChatInfoDrawerRow.react",
  [
    "WAWebChatInfoDrawerBlock.react",
    "WAWebChevronIcon.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["icon", "secondaryTitle", "side", "spaced", "title", "xstyle"],
      s = [
        "containerXstyle",
        "icon",
        "secondaryTitle",
        "side",
        "title",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        iconContainer: {
          marginInlineEnd: "x1xegmmw",
          width: "x100vrsf",
          height: "xxk0z11",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        iconContainerRefreshed: {
          width: "x100vrsf",
          height: "x16wdlz0",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          color: "xhslqc4",
          $$css: !0,
        },
        contentRefreshed: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minWidth: "xeuugli",
          overflowWrap: "x1mzt3pk",
          $$css: !0,
        },
        drawerSide: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          width: "x14qfxbe",
          $$css: !0,
        },
        drawerSideRefreshed: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        hoverStateRefreshed: {
          borderStartStartRadius: "x7zqoo0",
          borderStartEndRadius: "xt1g1te",
          borderEndEndRadius: "x1iz9ej4",
          borderEndStartRadius: "x1ga13z8",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.title,
        r;
      return (
        t[0] !== n
          ? ((r = d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
              children: n,
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.testid,
        r = e.title,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = d.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
              testid: void 0,
              children: r,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.hasSecondaryTitle,
        a = e.isRefresh,
        i;
      t[0] !== r || t[1] !== a
        ? ((i =
            a === !0
              ? [
                  m.iconContainerRefreshed,
                  r === !0 && o("WAWebUISpacing").uiPadding.top5,
                  o("WAWebUISpacing").uiMargin.end14,
                ]
              : m.iconContainer),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n || t[4] !== i
          ? ((l = d.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: i,
              children: n,
            })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i,
        l,
        s,
        c,
        m,
        p;
      n[0] !== t
        ? ((i = t.icon),
          (l = t.secondaryTitle),
          (s = t.side),
          (c = t.spaced),
          (m = t.title),
          (p = t.xstyle),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = m),
          (n[7] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (m = n[6]),
          (p = n[7]));
      var _ = c === void 0 ? !1 : c,
        f;
      n[8] !== i || n[9] !== s || n[10] !== m
        ? ((f = y({ icon: i, title: m, rightSide: s })),
          (n[8] = i),
          (n[9] = s),
          (n[10] = m),
          (n[11] = f))
        : (f = n[11]);
      var g = f,
        h;
      n[12] !== _
        ? ((h = (u || (u = r("stylex"))).props(
            _ && o("WAWebUISpacing").uiMargin.horiz30,
          )),
          (n[12] = _),
          (n[13] = h))
        : (h = n[13]);
      var C;
      n[14] !== g
        ? ((C = { 0: {}, 1: { className: "x19wmrak x2pibh5" } }[
            (g != null) << 0
          ]),
          (n[14] = g),
          (n[15] = C))
        : (C = n[15]);
      var b;
      n[16] !== l || n[17] !== C
        ? ((b = d.jsx("div", babelHelpers.extends({}, C, { children: l }))),
          (n[16] = l),
          (n[17] = C),
          (n[18] = b))
        : (b = n[18]);
      var v;
      n[19] !== g || n[20] !== h || n[21] !== b
        ? ((v = d.jsxs(
            "div",
            babelHelpers.extends({}, h, { children: [g, b] }),
          )),
          (n[19] = g),
          (n[20] = h),
          (n[21] = b),
          (n[22] = v))
        : (v = n[22]);
      var S;
      return (
        n[23] !== a || n[24] !== v || n[25] !== p
          ? ((S = d.jsx(
              r("WAWebChatInfoDrawerBlock.react"),
              babelHelpers.extends({ xstyle: p }, a, {
                multiline: !0,
                children: v,
              }),
            )),
            (n[23] = a),
            (n[24] = v),
            (n[25] = p),
            (n[26] = S))
          : (S = n[26]),
        S
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(38),
        n,
        a,
        i,
        l,
        c,
        p,
        _;
      t[0] !== e
        ? ((n = e.containerXstyle),
          (i = e.icon),
          (l = e.secondaryTitle),
          (c = e.side),
          (p = e.title),
          (_ = e.xstyle),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = c),
          (t[6] = p),
          (t[7] = _))
        : ((n = t[1]),
          (a = t[2]),
          (i = t[3]),
          (l = t[4]),
          (c = t[5]),
          (p = t[6]),
          (_ = t[7]));
      var g = a.onClick != null,
        h;
      t[8] !== n || t[9] !== g
        ? ((h = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiMargin.horiz10,
            g && m.hoverStateRefreshed,
            n,
          )),
          (t[8] = n),
          (t[9] = g),
          (t[10] = h))
        : (h = t[10]);
      var y;
      t[11] !== i || t[12] !== l
        ? ((y =
            i != null
              ? d.jsx(f, {
                  hasSecondaryTitle: l != null,
                  isRefresh: !0,
                  children: i,
                })
              : null),
          (t[11] = i),
          (t[12] = l),
          (t[13] = y))
        : (y = t[13]);
      var C;
      t[14] !== l
        ? ((C = (u || (u = r("stylex")))([
            m.contentRefreshed,
            l == null && [
              o("WAWebUISpacing").uiPadding.top8,
              o("WAWebUISpacing").uiPadding.bottom10,
            ],
          ])),
          (t[14] = l),
          (t[15] = C))
        : (C = t[15]);
      var b;
      t[16] !== C || t[17] !== p
        ? ((b = d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            className: C,
            grow: 1,
            children: p,
          })),
          (t[16] = C),
          (t[17] = p),
          (t[18] = b))
        : (b = t[18]);
      var v;
      t[19] !== l
        ? ((v = d.jsx(o("WAWebFlex.react").FlexRow, { children: l })),
          (t[19] = l),
          (t[20] = v))
        : (v = t[20]);
      var S;
      t[21] !== b || t[22] !== v
        ? ((S = d.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            children: [b, v],
          })),
          (t[21] = b),
          (t[22] = v),
          (t[23] = S))
        : (S = t[23]);
      var R;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [m.drawerSideRefreshed, o("WAWebUISpacing").uiMargin.start14]),
          (t[24] = R))
        : (R = t[24]);
      var L;
      t[25] !== c
        ? ((L = d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: R,
            children: c,
          })),
          (t[25] = c),
          (t[26] = L))
        : (L = t[26]);
      var E;
      t[27] !== y || t[28] !== S || t[29] !== L
        ? ((E = d.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "stretch",
            children: [y, S, L],
          })),
          (t[27] = y),
          (t[28] = S),
          (t[29] = L),
          (t[30] = E))
        : (E = t[30]);
      var k;
      t[31] !== h || t[32] !== E
        ? ((k = d.jsx("div", babelHelpers.extends({}, h, { children: E }))),
          (t[31] = h),
          (t[32] = E),
          (t[33] = k))
        : (k = t[33]);
      var I;
      return (
        t[34] !== a || t[35] !== k || t[36] !== _
          ? ((I = d.jsx(
              r("WAWebChatInfoDrawerBlock.react"),
              babelHelpers.extends(
                { isRefresh: !0, multiline: !0, xstyle: _ },
                a,
                { children: k },
              ),
            )),
            (t[34] = a),
            (t[35] = k),
            (t[36] = _),
            (t[37] = I))
          : (I = t[37]),
        I
      );
    }
    function y(e) {
      var t = e.icon,
        n = e.rightSide,
        r = e.title;
      if (t == null && r == null && n == null) return null;
      var a = n != null ? n : "";
      a === "chevron" &&
        (a = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
          iconXstyle: m.secondaryColor,
          directional: !0,
          height: 21,
        }));
      var i = t != null ? d.jsx(f, { children: t }) : null;
      return d.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "start",
        children: [
          i,
          d.jsx("div", {
            className: "x1iyjqo2 xs83m0k xeuugli x1mzt3pk x1u7k74",
            children: r,
          }),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: m.drawerSide,
            children: a,
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.DrawerRowTitleRefreshed = p),
      (l.DrawerRowSecondaryTitleRefreshed = _),
      (l.ChatInfoDrawerRow = g),
      (l.ChatInfoDrawerRowRefreshed = h));
  },
  98,
);
