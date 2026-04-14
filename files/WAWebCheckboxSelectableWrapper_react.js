__d(
  "WAWebCheckboxSelectableWrapper.react",
  [
    "WAWebCheckBox.react",
    "WAWebContactModel",
    "WAWebKeyboardHotKeys.react",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "react",
    "useWAWebActiveSelection",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        checkboxSelectableWrapper: {
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.children,
        n = e.disabled,
        a = e.active,
        i = e.selections,
        l = e.model,
        d = e.checked,
        m = e.checkboxTheme,
        p = e.onClick,
        _ = p === void 0 ? r("WAWebNoop") : p,
        f = e.wrapperTestid,
        g = e.checkboxAriaLabel,
        h = r("useWAWebActiveSelection")(a, l.id.toString()),
        y = h[0],
        C = u(function () {
          return i.isSelected(l) || !!d;
        }),
        b = C[0],
        v = C[1],
        S = u(
          o(
            "WAWebReachoutTimelockUtils",
          ).isUserReachoutTimelockedAndVisible() &&
            l instanceof r("WAWebContactModel") &&
            !l.canSendMsgWhileTimelocked,
        ),
        R = S[0],
        L = S[1],
        E = function (t) {
          t !== b && v(t);
        },
        k = function (t) {
          (t.preventDefault(), _(t));
        },
        I = { enter: k, space: k };
      return (
        o("useWAWebListener").useListener(i, l.id.toString(), E),
        o("useWAWebListener").useListener(
          l,
          "change:canSendMsgWhileTimelocked",
          function () {
            L(
              o(
                "WAWebReachoutTimelockUtils",
              ).isUserReachoutTimelockedAndVisible() &&
                l instanceof r("WAWebContactModel") &&
                !l.canSendMsgWhileTimelocked,
            );
          },
        ),
        s.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          component: "div",
          handlers: I,
          ref: y,
          xstyle: c.checkboxSelectableWrapper,
          onClick: R ? r("WAWebNoop") : k,
          "data-testid": void 0,
          role: "checkbox",
          "aria-checked": b,
          tabIndex: -1,
          children: [
            s.jsx("div", {
              className:
                "x10l6tqk x1pe450p x11uqc5h x78zum5 x6s0dn4 x5yr21d x47corl",
              "data-testid": void 0,
              children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
                onChange: r("WAWebNoop"),
                ariaLabel: g,
                checked: b,
                disabled: n === !0 || R,
                tabIndex: -1,
                theme: m,
              }),
            }),
            t,
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
