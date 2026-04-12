__d(
  "WAWebChatCheckboxWrapper.react",
  [
    "WAWebCheckBox.react",
    "WAWebKeyboardIsKeyActivation",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.Children,
      d = u.cloneElement,
      m = u.useState;
    function p(e) {
      var t = e.checkboxAriaLabel,
        n = e.children,
        a = e.initialSelection,
        i = e.model,
        l = e.multiSelection,
        u = e.onArrowKeyLeftRight,
        p = e.onSelect,
        _ = e.ref,
        f = e.role,
        g = f === void 0 ? "none" : f,
        h = e.selectableState,
        y = e.theme,
        C = m(function () {
          switch (a) {
            case 0:
              return !1;
            case 1:
            case 2:
              return !0;
            default:
              return l.isSelected(i);
          }
        }),
        b = C[0],
        v = C[1],
        S = m(function () {
          return a === 2;
        }),
        R = S[0],
        L = S[1],
        E = i.id.toString(),
        k = m(E),
        I = k[0],
        T = k[1];
      I !== E && (T(E), v(l.isSelected(i)));
      var D = function (t) {
          v(t);
        },
        x = function (t) {
          if (!(t != null && t.isDefaultPrevented())) {
            t && t.stopPropagation();
            var e;
            (b ? (v(!1), L(!1), (e = !1)) : (e = !0), p == null || p(i, e, !1));
          }
        },
        $ = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) &&
            (t.stopPropagation(), t.preventDefault(), w == null || w());
        };
      o("useWAWebListener").useListener(l, I, D);
      var P = r("useWAWebEventTargetValue")(h, "all", function () {
          return h.isSelectable;
        }),
        N = {};
      if ((P && y && (N.theme = y), P && (N.noContext = !0), n == null))
        return null;
      var M = c.toArray(n)[0],
        w =
          y === "label-selection" || y === "label-selection-redesigned"
            ? x
            : null;
      return s.jsxs("div", {
        ref: _,
        role: P ? "button" : g,
        className: "x1n2onr6",
        onKeyPress: $,
        tabIndex: 0,
        onClick: w,
        children: [
          P &&
            s.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x10l6tqk x1pe450p x16uhe5s x78zum5 x6s0dn4 x1pju0fl x5yr21d",
                  },
                  2: {
                    className:
                      "x10l6tqk x16uhe5s x78zum5 x6s0dn4 x5yr21d x145d82y xlgexem x14atkfc",
                  },
                  1: {
                    className:
                      "x10l6tqk x1pe450p x16uhe5s x78zum5 x6s0dn4 x1pju0fl x5yr21d xdg88n9",
                  },
                  3: {
                    className:
                      "x10l6tqk x16uhe5s x78zum5 x6s0dn4 x5yr21d xlgexem x14atkfc xdg88n9",
                  },
                }[
                  ((y === "label-selection" ||
                    y === "label-selection-redesigned") <<
                    1) |
                    ((y === "label-selection-redesigned") << 0)
                ],
                {
                  tabIndex: -1,
                  children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
                    onChange: x,
                    ariaLabel: t,
                    onArrowKeyLeftRight: u,
                    checked: b,
                    theme:
                      b && R
                        ? o("WAWebCheckBox.react").CheckboxTheme.PARTIAL
                        : void 0,
                  }),
                },
              ),
            ),
          d(M, N),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
