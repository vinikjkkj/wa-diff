__d(
  "WAWebChatInfoActionButton.react",
  ["WAWebRound.react", "WAWebUnstyledButton.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useState,
      p = {
        button: { textAlign: "x2b8uid", $$css: !0 },
        label: {
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          fontSize: "x1nxh6w3",
          marginTop: "x1gslohp",
          color: "x1v5yvga",
          $$css: !0,
        },
        disabled: { opacity: "xyd83as", $$css: !0 },
        tealColor: { color: "x1v5yvga", $$css: !0 },
      };
    function _(t) {
      var n = t.Icon,
        a = t.ariaLabel,
        i = t.disabled,
        l = t.iconHeight,
        s = t.iconWidth,
        c = t.label,
        d = t.onClick,
        m = t.ref,
        _ = t.testid,
        g = t.xstyle,
        h = f(),
        y = h.isHovered,
        C = h.onMouseEnter,
        b = h.onMouseLeave,
        v = i === !0,
        S = u.jsx(n, {
          iconXstyle: p.tealColor,
          directional: !0,
          height: l,
          width: s,
        });
      return u.jsx(
        "div",
        babelHelpers.extends(
          { ref: m },
          (e || (e = r("stylex"))).props(p.button, v && p.disabled, g),
          {
            children: u.jsxs(r("WAWebUnstyledButton.react"), {
              "aria-label": a != null ? a : c,
              disabled: i,
              onClick: d,
              onMouseEnter: C,
              onMouseLeave: b,
              testid: void 0,
              xstyle: p.label,
              children: [
                u.jsx(o("WAWebRound.react").Round, {
                  disabled: i,
                  hideBackground: v || !y,
                  inverted: !0,
                  children: S,
                }),
                c,
              ],
            }),
          },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      var e = m(!1),
        t = e[0],
        n = e[1],
        r = d(function () {
          n(!0);
        }, []),
        o = d(function () {
          n(!1);
        }, []);
      return { isHovered: t, onMouseEnter: r, onMouseLeave: o };
    }
    l.default = _;
  },
  98,
);
