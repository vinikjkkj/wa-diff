__d(
  "WAWebCellFrameV2.react",
  ["WAWebFlex.react", "WAWebFlexItem.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        middleContainer: {
          flex: "x12lumcd",
          alignItems: "x1qjc9v5",
          justifyContent: "xl56j7k",
          boxSizing: "x9f619",
          $$css: !0,
        },
        primaryContainer: { alignItems: "x6s0dn4", $$css: !0 },
        grow: { flexGrow: "x1iyjqo2", $$css: !0 },
        stretch: { alignItems: "x1qjc9v5", $$css: !0 },
        borderBox: { boxSizing: "x9f619", $$css: !0 },
        ellipsis: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        primaryRight: { paddingInlineStart: "xmzvs34", $$css: !0 },
        secondaryRight: { paddingInlineStart: "xmzvs34", $$css: !0 },
        primary: { lineHeight: "xggjnk3", $$css: !0 },
      },
      c = {
        container: { minHeight: "x1ba4aug", $$css: !0 },
        detailLeft: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          minWidth: "xnei2rj",
          $$css: !0,
        },
        middleContainer: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        middleContainerNoDetailLeft: {
          paddingInlineStart: "xmzvs34",
          $$css: !0,
        },
        middleContainerNoDetailRight: {
          paddingInlineEnd: "xf159sx",
          $$css: !0,
        },
        detailRight: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xmzvs34",
          paddingInlineEnd: "xf159sx",
          minWidth: "xnei2rj",
          $$css: !0,
        },
      },
      d = {
        container: { minHeight: "x879a55", $$css: !0 },
        containerRefreshed: {
          minHeight: "x879a55",
          marginLeft: "x16ydxro",
          marginRight: "xyo1k6t",
          marginInlineStart: null,
          marginInlineEnd: null,
          $$css: !0,
        },
        detailLeft: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          minWidth: "x1fns5xo",
          $$css: !0,
        },
        detailLeftRefreshed: {
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "xe2zdcy",
          paddingInlineEnd: "x1pic42t",
          minWidth: "x1fns5xo",
          $$css: !0,
        },
        middleContainer: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        middleContainerRefreshed: {
          paddingTop: "xz9dl7a",
          paddingBottom: "xsag5q8",
          $$css: !0,
        },
        middleContainerNoDetailLeft: {
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
        middleContainerNoDetailRight: {
          paddingInlineEnd: "xv54qhq",
          $$css: !0,
        },
        middleContainerNoDetailRightRefreshed: {
          paddingInlineEnd: "x2vl965",
          $$css: !0,
        },
        detailRight: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          minWidth: "x1fns5xo",
          $$css: !0,
        },
      },
      m = {
        container: { minHeight: "x1qafhyn", $$css: !0 },
        detailLeft: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          minWidth: "x900493",
          $$css: !0,
        },
        middleContainer: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        middleContainerNoDetailLeft: {
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
        middleContainerNoDetailRight: {
          paddingInlineEnd: "xv54qhq",
          $$css: !0,
        },
        detailRight: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          minWidth: "x900493",
          $$css: !0,
        },
      };
    function p(e) {
      var t,
        n,
        a,
        i,
        l,
        p,
        _,
        f,
        g,
        h,
        y = e.containerXStyle,
        C = e.detailLeftXStyle,
        b = e.detailRightXStyle,
        v = e.isRefresh,
        S = e.middleContainerXStyle,
        R = e.primaryRightXStyle,
        L = e.primaryXStyle,
        E = e.secondaryRightXStyle,
        k = e.secondaryXStyle,
        I = e.alignDetailRight,
        T = I === void 0 ? "center" : I,
        D = e.alignPrimary,
        x = D === void 0 ? "center" : D,
        $ = e.detailLeft,
        P = e.detailRight,
        N = e.detailTop,
        M = e.detailTopRight,
        w = e.justifyDetailRight,
        A = w === void 0 ? "center" : w,
        F = e.primary,
        O = e.primaryRight,
        B = e.secondary,
        W = e.secondaryRight,
        q = e.size,
        U;
      switch (q) {
        case "large":
          U = m;
          break;
        case "medium":
          U = d;
          break;
        case "small":
          U = c;
          break;
        default:
          break;
      }
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: [
          u.borderBox,
          u.grow,
          u.stretch,
          v === !0
            ? (t = U) == null
              ? void 0
              : t.containerRefreshed
            : (n = U) == null
              ? void 0
              : n.container,
          y,
        ].flat(),
        children: [
          !!$ &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              xstyle: [
                v === !0
                  ? (a = U) == null
                    ? void 0
                    : a.detailLeftRefreshed
                  : (i = U) == null
                    ? void 0
                    : i.detailLeft,
                C,
              ],
              justify: "center",
              align: "center",
              children: $,
            }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: [
              u.middleContainer,
              $ == null &&
                ((l = U) == null ? void 0 : l.middleContainerNoDetailLeft),
              P == null &&
                (v === !0
                  ? (p = U) == null
                    ? void 0
                    : p.middleContainerNoDetailRightRefreshed
                  : (_ = U) == null
                    ? void 0
                    : _.middleContainerNoDetailRight),
              v === !0
                ? (f = U) == null
                  ? void 0
                  : f.middleContainerRefreshed
                : (g = U) == null
                  ? void 0
                  : g.middleContainer,
              S,
            ],
            children: [
              !!N &&
                s.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: u.primaryContainer,
                  children: [
                    s.jsx(r("WAWebFlexItem.react"), {
                      grow: 1,
                      xstyle: [u.ellipsis, u.borderBox, L],
                      children: N,
                    }),
                    !!M &&
                      s.jsx(r("WAWebFlexItem.react"), {
                        shrink: 0,
                        xstyle: [u.primaryRight, u.ellipsis, u.borderBox, R],
                        children: M,
                      }),
                  ],
                }),
              s.jsxs(o("WAWebFlex.react").FlexRow, {
                align: x,
                children: [
                  s.jsx(r("WAWebFlexItem.react"), {
                    grow: 1,
                    xstyle: [u.ellipsis, u.borderBox, u.primary, L],
                    children: F,
                  }),
                  !!O &&
                    s.jsx(r("WAWebFlexItem.react"), {
                      shrink: 0,
                      xstyle: [u.primaryRight, u.ellipsis, u.borderBox, R],
                      children: O,
                    }),
                ],
              }),
              !!B &&
                s.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    s.jsx(r("WAWebFlexItem.react"), {
                      grow: 1,
                      xstyle: [u.ellipsis, u.borderBox, k],
                      children: B,
                    }),
                    !!W &&
                      s.jsx(r("WAWebFlexItem.react"), {
                        shrink: 0,
                        xstyle: [u.secondaryRight, u.ellipsis, u.borderBox, E],
                        children: W,
                      }),
                  ],
                }),
            ],
          }),
          !!P &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              justify: A,
              align: T,
              xstyle: [(h = U) == null ? void 0 : h.detailRight, b],
              children: P,
            }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
