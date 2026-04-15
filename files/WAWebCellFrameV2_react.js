__d(
  "WAWebCellFrameV2.react",
  ["WAWebFlex.react", "WAWebFlexItem.react", "react", "react-compiler-runtime"],
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
        y = o("react-compiler-runtime").c(52),
        C = e.containerXStyle,
        b = e.detailLeftXStyle,
        v = e.detailRightXStyle,
        S = e.isRefresh,
        R = e.middleContainerXStyle,
        L = e.primaryRightXStyle,
        E = e.primaryXStyle,
        k = e.secondaryRightXStyle,
        I = e.secondaryXStyle,
        T = e.alignDetailRight,
        D = e.alignPrimary,
        x = e.detailLeft,
        $ = e.detailRight,
        P = e.detailTop,
        N = e.detailTopRight,
        M = e.justifyDetailRight,
        w = e.primary,
        A = e.primaryRight,
        F = e.secondary,
        O = e.secondaryRight,
        B = e.size,
        W = T === void 0 ? "center" : T,
        q = D === void 0 ? "center" : D,
        U = M === void 0 ? "center" : M,
        V;
      e: switch (B) {
        case "large": {
          V = m;
          break e;
        }
        case "medium": {
          V = d;
          break e;
        }
        case "small": {
          V = c;
          break e;
        }
        default:
      }
      var H =
          S === !0
            ? (t = V) == null
              ? void 0
              : t.containerRefreshed
            : (n = V) == null
              ? void 0
              : n.container,
        G;
      y[0] !== C || y[1] !== H
        ? ((G = [u.borderBox, u.grow, u.stretch, H, C].flat()),
          (y[0] = C),
          (y[1] = H),
          (y[2] = G))
        : (G = y[2]);
      var z;
      if (
        y[3] !== x ||
        y[4] !== b ||
        y[5] !== S ||
        y[6] !== ((a = V) == null ? void 0 : a.detailLeft) ||
        y[7] !== ((i = V) == null ? void 0 : i.detailLeftRefreshed)
      ) {
        var j, K, Q, X;
        ((z =
          !!x &&
          s.jsx(o("WAWebFlex.react").FlexRow, {
            shrink: 0,
            xstyle: [
              S === !0
                ? (j = V) == null
                  ? void 0
                  : j.detailLeftRefreshed
                : (K = V) == null
                  ? void 0
                  : K.detailLeft,
              b,
            ],
            justify: "center",
            align: "center",
            children: x,
          })),
          (y[3] = x),
          (y[4] = b),
          (y[5] = S),
          (y[6] = (Q = V) == null ? void 0 : Q.detailLeft),
          (y[7] = (X = V) == null ? void 0 : X.detailLeftRefreshed),
          (y[8] = z));
      } else z = y[8];
      var Y =
          x == null &&
          ((l = V) == null ? void 0 : l.middleContainerNoDetailLeft),
        J =
          $ == null &&
          (S === !0
            ? (p = V) == null
              ? void 0
              : p.middleContainerNoDetailRightRefreshed
            : (_ = V) == null
              ? void 0
              : _.middleContainerNoDetailRight),
        Z =
          S === !0
            ? (f = V) == null
              ? void 0
              : f.middleContainerRefreshed
            : (g = V) == null
              ? void 0
              : g.middleContainer,
        ee;
      y[9] !== R || y[10] !== Y || y[11] !== J || y[12] !== Z
        ? ((ee = [u.middleContainer, Y, J, Z, R]),
          (y[9] = R),
          (y[10] = Y),
          (y[11] = J),
          (y[12] = Z),
          (y[13] = ee))
        : (ee = y[13]);
      var te;
      y[14] !== P || y[15] !== N || y[16] !== L || y[17] !== E
        ? ((te =
            !!P &&
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: u.primaryContainer,
              children: [
                s.jsx(r("WAWebFlexItem.react"), {
                  grow: 1,
                  xstyle: [u.ellipsis, u.borderBox, E],
                  children: P,
                }),
                !!N &&
                  s.jsx(r("WAWebFlexItem.react"), {
                    shrink: 0,
                    xstyle: [u.primaryRight, u.ellipsis, u.borderBox, L],
                    children: N,
                  }),
              ],
            })),
          (y[14] = P),
          (y[15] = N),
          (y[16] = L),
          (y[17] = E),
          (y[18] = te))
        : (te = y[18]);
      var ne;
      y[19] !== E
        ? ((ne = [u.ellipsis, u.borderBox, u.primary, E]),
          (y[19] = E),
          (y[20] = ne))
        : (ne = y[20]);
      var re;
      y[21] !== w || y[22] !== ne
        ? ((re = s.jsx(r("WAWebFlexItem.react"), {
            grow: 1,
            xstyle: ne,
            children: w,
          })),
          (y[21] = w),
          (y[22] = ne),
          (y[23] = re))
        : (re = y[23]);
      var oe;
      y[24] !== A || y[25] !== L
        ? ((oe =
            !!A &&
            s.jsx(r("WAWebFlexItem.react"), {
              shrink: 0,
              xstyle: [u.primaryRight, u.ellipsis, u.borderBox, L],
              children: A,
            })),
          (y[24] = A),
          (y[25] = L),
          (y[26] = oe))
        : (oe = y[26]);
      var ae;
      y[27] !== q || y[28] !== re || y[29] !== oe
        ? ((ae = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: q,
            children: [re, oe],
          })),
          (y[27] = q),
          (y[28] = re),
          (y[29] = oe),
          (y[30] = ae))
        : (ae = y[30]);
      var ie;
      y[31] !== F || y[32] !== O || y[33] !== k || y[34] !== I
        ? ((ie =
            !!F &&
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                s.jsx(r("WAWebFlexItem.react"), {
                  grow: 1,
                  xstyle: [u.ellipsis, u.borderBox, I],
                  children: F,
                }),
                !!O &&
                  s.jsx(r("WAWebFlexItem.react"), {
                    shrink: 0,
                    xstyle: [u.secondaryRight, u.ellipsis, u.borderBox, k],
                    children: O,
                  }),
              ],
            })),
          (y[31] = F),
          (y[32] = O),
          (y[33] = k),
          (y[34] = I),
          (y[35] = ie))
        : (ie = y[35]);
      var le;
      y[36] !== ee || y[37] !== te || y[38] !== ae || y[39] !== ie
        ? ((le = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            shrink: 1,
            basis: "auto",
            xstyle: ee,
            children: [te, ae, ie],
          })),
          (y[36] = ee),
          (y[37] = te),
          (y[38] = ae),
          (y[39] = ie),
          (y[40] = le))
        : (le = y[40]);
      var se;
      if (
        y[41] !== W ||
        y[42] !== $ ||
        y[43] !== v ||
        y[44] !== U ||
        y[45] !== ((h = V) == null ? void 0 : h.detailRight)
      ) {
        var ue, ce;
        ((se =
          !!$ &&
          s.jsx(o("WAWebFlex.react").FlexRow, {
            shrink: 0,
            justify: U,
            align: W,
            xstyle: [(ue = V) == null ? void 0 : ue.detailRight, v],
            children: $,
          })),
          (y[41] = W),
          (y[42] = $),
          (y[43] = v),
          (y[44] = U),
          (y[45] = (ce = V) == null ? void 0 : ce.detailRight),
          (y[46] = se));
      } else se = y[46];
      var de;
      return (
        y[47] !== le || y[48] !== se || y[49] !== G || y[50] !== z
          ? ((de = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: G,
              children: [z, le, se],
            })),
            (y[47] = le),
            (y[48] = se),
            (y[49] = G),
            (y[50] = z),
            (y[51] = de))
          : (de = y[51]),
        de
      );
    }
    l.default = p;
  },
  98,
);
