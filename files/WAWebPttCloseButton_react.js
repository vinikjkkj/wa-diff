__d(
  "WAWebPttCloseButton.react",
  ["fbt", "WDSIconIcClose.react", "WDSMenuBarItem.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.disabled,
        i = a === void 0 ? !1 : a,
        l = o.onConfirm,
        u = o.tabOrder,
        d = o.theme,
        m = d === "out-of-chat-playback",
        p = function (t) {
          t != null && l(t);
        },
        _ = s._(/*BTDS*/ "Close");
      return c.jsx(
        "div",
        babelHelpers.extends(
          { "aria-label": _ },
          {
            0: { className: "x1kky2od xmix8c7" },
            2: {
              className:
                "x1n7h9c3 x1s1d1n7 xpcyujq xvijh9v x78zum5 xl56j7k x6s0dn4 xh4mkqi",
            },
            1: { className: "x1kky2od xmix8c7 x5z6fxw" },
            3: {
              className:
                "x1n7h9c3 x1s1d1n7 xpcyujq xvijh9v x78zum5 xl56j7k x6s0dn4 xh4mkqi x5z6fxw",
            },
          }[(!!m << 1) | (!!(m && !i) << 0)],
          {
            children: c.jsx(r("WDSMenuBarItem.react"), {
              ref: n,
              testid: void 0,
              onClick: p,
              tabOrder: u,
              disabled: i,
              title: _,
              icon: r("WDSIconIcClose.react"),
            }),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
