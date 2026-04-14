__d(
  "WAWebCommunitySubgroupImage.react",
  ["WAWebDetailImage.react", "react", "stylex", "useWAWebActiveSelection"],
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
      var n = t.chat,
        a = t.isHovered,
        i = t.parentGroupChat,
        l = t.selection,
        s = t.size,
        g = r("useWAWebActiveSelection")(l, n.id.toString()),
        h = g[1],
        y = 32,
        C;
      switch (s) {
        case 38:
          ((y = 26), (C = _));
          break;
        case 40:
          ((y = 26), (C = p));
          break;
        case 44:
          ((y = 28), (C = m));
          break;
        case 49:
        default:
          ((y = 31), (C = d));
      }
      return u.jsxs(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props([c.container, C.container]),
          {
            children: [
              u.jsx(o("WAWebDetailImage.react").DetailImage, {
                shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                id: i.id,
                size: y,
              }),
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(c.subgroupImage, C.subgroupImage),
                  {
                    children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: n.id,
                      size: y,
                      ephemeralIcon: "chat-list",
                      isHoveredOrActive: h || a === !0,
                      xstyle: f(h, a === !0),
                    }),
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
