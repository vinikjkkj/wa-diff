__d(
  "WAWebDrawerItem.react",
  [
    "fbt",
    "WAWebCopyPasteSelectable.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "react",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.children,
        n = e.dataTab,
        a = e.disabled,
        i = e.disableKeydownHandling,
        l = e.icon,
        c = e.isLastItem,
        d = e.onClick,
        m = e.onDisabledClick,
        p = e.tabIndex,
        _ = p === void 0 ? 0 : p,
        f = e.testid,
        g = e.theme,
        h = g === void 0 ? "default" : g,
        y = e.title,
        C = {
          0: "xso031l x1q0q8m5 x120ee7l x1g2khh7 xdpxx8g",
          4: "xso031l x1q0q8m5 x120ee7l x1g2khh7 x1hr2gdg",
          2: "xso031l x1q0q8m5 x120ee7l x1g2khh7 xdpxx8g x6s0dn4 x78zum5",
          6: "xso031l x1q0q8m5 x120ee7l x1g2khh7 x1hr2gdg x6s0dn4 x78zum5",
          1: "xso031l x120ee7l x1g2khh7 xdpxx8g x1sy0etr",
          5: "xso031l x120ee7l x1g2khh7 x1hr2gdg x1sy0etr",
          3: "xso031l x120ee7l x1g2khh7 xdpxx8g x6s0dn4 x78zum5 x1sy0etr",
          7: "xso031l x120ee7l x1g2khh7 x1hr2gdg x6s0dn4 x78zum5 x1sy0etr",
        }[
          (!!r("WAWebL10N").isRTL() << 2) |
            ((l != null) << 1) |
            ((c === !0) << 0)
        ],
        b = { 0: "", 1: "x98rzlu" }[(l != null) << 0],
        v = { 0: "", 1: "xhslqc4 x1okw0bk" }[(l != null) << 0],
        S = r("useWAWebIsKeyboardUser")(),
        R = S.isKeyboardUser,
        L = a === !0 ? m : d,
        E = L != null,
        k =
          a === !0
            ? { "aria-label": s._(/*BTDS*/ "Disabled drawer item") }
            : {};
      return u.jsx(
        "div",
        babelHelpers.extends(
          { tabIndex: E ? _ : null, "data-tab": n },
          {
            0: { className: "x1fc57z9 xisnujt xyinxu5" },
            2: { className: "x1fc57z9 xisnujt xyinxu5 x1jsj9aw" },
            1: { className: "x1fc57z9 xisnujt xyinxu5 xbyyjgo" },
            3: { className: "x1fc57z9 xisnujt xyinxu5 x1jsj9aw xbyyjgo" },
          }[(!!R << 1) | ((a === !0) << 0)],
          {
            onClick: L,
            role: E ? "button" : "",
            onKeyDown: function (t) {
              i === !0 || !r("WAWebKeyboardIsKeyActivation")(t) || !L || L();
            },
          },
          k,
          {
            "data-testid": void 0,
            children: u.jsxs("div", {
              className: C,
              children: [
                u.jsxs("div", {
                  className: b,
                  dir: "auto",
                  children: [
                    u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                      className: "x14ug900 x6prxxf",
                      selectable: !0,
                      children: y,
                    }),
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        {
                          0: { className: "x1v5yvga x1f6kntn xd4r4e8" },
                          1: { className: "x1f6kntn xd4r4e8 x16zc8z2" },
                        }[(h === "privacy") << 0],
                        { children: t },
                      ),
                    ),
                  ],
                }),
                u.jsx("div", { className: v, children: l }),
              ],
            }),
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
