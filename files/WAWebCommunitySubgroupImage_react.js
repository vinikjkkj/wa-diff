__d(
  "WAWebCommunitySubgroupImage.react",
  [
    "WAWebDetailImage.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebActiveSelection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          position: "x1n2onr6",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        subgroupImage: { position: "x10l6tqk", $$css: !0 },
        borderWhite: {
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1y9zq84",
          borderInlineEndColor: "xt9xd2u",
          borderBottomColor: "x3tsejo",
          borderInlineStartColor: "x1ahzpo1",
          $$css: !0,
        },
        borderWhiteActive: {
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xif0l9a",
          borderInlineEndColor: "x1gsefj9",
          borderBottomColor: "x6hs5rg",
          borderInlineStartColor: "x1gy22y6",
          $$css: !0,
        },
        borderWhiteHover: {
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1y55ic2",
          borderInlineEndColor: "x1urg34u",
          borderBottomColor: "xee4sfp",
          borderInlineStartColor: "x1xm068e",
          $$css: !0,
        },
      },
      d = {
        container: { width: "x15jighw", height: "x112a4uq", $$css: !0 },
        subgroupImage: {
          insetInlineStart: "x9p6ekw",
          left: null,
          right: null,
          top: "xuivejd",
          $$css: !0,
        },
      },
      m = {
        container: { width: "x187nhsf", height: "xn3w4p2", $$css: !0 },
        subgroupImage: {
          insetInlineStart: "x1r4y97",
          left: null,
          right: null,
          top: "x1tk7jg1",
          $$css: !0,
        },
      },
      p = {
        container: { width: "x100vrsf", height: "x1vqgdyp", $$css: !0 },
        subgroupImage: {
          insetInlineStart: "x1r4y97",
          left: null,
          right: null,
          top: "x1tk7jg1",
          $$css: !0,
        },
      },
      _ = {
        container: { width: "x1guw455", height: "x16wdlz0", $$css: !0 },
        subgroupImage: {
          insetInlineStart: "x1r4y97",
          left: null,
          right: null,
          top: "x1tk7jg1",
          $$css: !0,
        },
      };
    function f(e, t) {
      return e ? c.borderWhiteActive : t ? c.borderWhiteHover : c.borderWhite;
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.chat,
        i = t.isHovered,
        l = t.parentGroupChat,
        s = t.selection,
        g = t.size,
        h;
      n[0] !== a.id
        ? ((h = a.id.toString()), (n[0] = a.id), (n[1] = h))
        : (h = n[1]);
      var y = r("useWAWebActiveSelection")(s, h),
        C = y[1],
        b,
        v;
      e: switch (g) {
        case 38: {
          ((b = 26), (v = _));
          break e;
        }
        case 40: {
          ((b = 26), (v = p));
          break e;
        }
        case 44: {
          ((b = 28), (v = m));
          break e;
        }
        case 49:
        default:
          ((b = 31), (v = d));
      }
      var S;
      n[2] !== v.container
        ? ((S = (e || (e = r("stylex"))).props([c.container, v.container])),
          (n[2] = v.container),
          (n[3] = S))
        : (S = n[3]);
      var R;
      n[4] !== b || n[5] !== l.id
        ? ((R = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
            id: l.id,
            size: b,
          })),
          (n[4] = b),
          (n[5] = l.id),
          (n[6] = R))
        : (R = n[6]);
      var L;
      n[7] !== v.subgroupImage
        ? ((L = (e || (e = r("stylex"))).props(
            c.subgroupImage,
            v.subgroupImage,
          )),
          (n[7] = v.subgroupImage),
          (n[8] = L))
        : (L = n[8]);
      var E = a.id,
        k = b,
        I = C || i === !0,
        T = i === !0,
        D;
      n[9] !== C || n[10] !== T
        ? ((D = f(C, T)), (n[9] = C), (n[10] = T), (n[11] = D))
        : (D = n[11]);
      var x;
      n[12] !== a.id || n[13] !== b || n[14] !== I || n[15] !== D
        ? ((x = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: E,
            size: k,
            ephemeralIcon: "chat-list",
            isHoveredOrActive: I,
            xstyle: D,
          })),
          (n[12] = a.id),
          (n[13] = b),
          (n[14] = I),
          (n[15] = D),
          (n[16] = x))
        : (x = n[16]);
      var $;
      n[17] !== L || n[18] !== x
        ? (($ = u.jsx("div", babelHelpers.extends({}, L, { children: x }))),
          (n[17] = L),
          (n[18] = x),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      return (
        n[20] !== S || n[21] !== $ || n[22] !== R
          ? ((P = u.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, S, {
                children: [R, $],
              }),
            )),
            (n[20] = S),
            (n[21] = $),
            (n[22] = R),
            (n[23] = P))
          : (P = n[23]),
        P
      );
    }
    l.default = g;
  },
  98,
);
