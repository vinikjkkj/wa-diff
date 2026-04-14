__d(
  "WAWebRow.react",
  ["WDSFocusStateStyles", "react", "stylex", "useWAWebStaticButtonA11y"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { clickable: { cursor: "x1ypdohk", $$css: !0 } };
    function d(t) {
      var n = t["aria-label"],
        a = t.children,
        i = t.ellipsify,
        l = i === void 0 ? !1 : i,
        s = t.onClick,
        d = t.side,
        m = t.testid,
        p = t.xstyle,
        _ = (e || (e = r("stylex")))(
          s && c.clickable,
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          p,
        ),
        f = {
          0: "x12lumcd x6ikm8r x10wlt62",
          1: "x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
        }[!!l << 0],
        g =
          d != null
            ? u.jsx("div", { className: "x1okw0bk x1hm9lzh", children: d })
            : null,
        h,
        y = r("useWAWebStaticButtonA11y")(s),
        C = y[0],
        b = y[1];
      return (
        s != null && (h = babelHelpers.extends({ ref: C }, b)),
        u.jsx(
          "div",
          babelHelpers.extends(
            { className: _, "aria-label": n, "data-testid": void 0 },
            h,
            {
              children: u.jsxs("div", {
                className: "x78zum5 x6s0dn4",
                children: [u.jsx("div", { className: f, children: a }), g],
              }),
            },
          ),
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
