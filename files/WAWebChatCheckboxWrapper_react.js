__d(
  "WAWebChatCheckboxWrapper.react",
  [
    "WAWebCheckBox.react",
    "WAWebKeyboardIsKeyActivation",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(32),
        n = e.checkboxAriaLabel,
        a = e.children,
        i = e.initialSelection,
        l = e.model,
        u = e.multiSelection,
        p = e.onArrowKeyLeftRight,
        _ = e.onSelect,
        f = e.ref,
        g = e.role,
        h = e.selectableState,
        y = e.theme,
        C = g === void 0 ? "none" : g,
        b;
      t[0] !== i || t[1] !== l || t[2] !== u
        ? ((b = function () {
            switch (i) {
              case 0:
                return !1;
              case 1:
              case 2:
                return !0;
              default:
                return u.isSelected(l);
            }
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = u),
          (t[3] = b))
        : (b = t[3]);
      var v = m(b),
        S = v[0],
        R = v[1],
        L;
      t[4] !== i
        ? ((L = function () {
            return i === 2;
          }),
          (t[4] = i),
          (t[5] = L))
        : (L = t[5]);
      var E = m(L),
        k = E[0],
        I = E[1],
        T;
      t[6] !== l.id
        ? ((T = l.id.toString()), (t[6] = l.id), (t[7] = T))
        : (T = t[7]);
      var D = T,
        x = m(D),
        $ = x[0],
        P = x[1];
      $ !== D && (P(D), R(u.isSelected(l)));
      var N;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function (t) {
            R(t);
          }),
          (t[8] = N))
        : (N = t[8]);
      var M = N,
        w;
      t[9] !== l || t[10] !== _ || t[11] !== S
        ? ((w = function (t) {
            if (!(t != null && t.isDefaultPrevented())) {
              t && t.stopPropagation();
              var e;
              (S ? (R(!1), I(!1), (e = !1)) : (e = !0),
                _ == null || _(l, e, !1));
            }
          }),
          (t[9] = l),
          (t[10] = _),
          (t[11] = S),
          (t[12] = w))
        : (w = t[12]);
      var A = w,
        F = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) &&
            (t.stopPropagation(), t.preventDefault(), U == null || U());
        };
      o("useWAWebListener").useListener(u, $, M);
      var O;
      t[13] !== h.isSelectable
        ? ((O = function () {
            return h.isSelectable;
          }),
          (t[13] = h.isSelectable),
          (t[14] = O))
        : (O = t[14]);
      var B = r("useWAWebEventTargetValue")(h, "all", O),
        W = {};
      if ((B && y && (W.theme = y), B && (W.noContext = !0), a == null))
        return null;
      var q = c.toArray(a)[0],
        U =
          y === "label-selection" || y === "label-selection-redesigned"
            ? A
            : null,
        V = B ? "button" : C,
        H;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x1n2onr6" }), (t[15] = H))
        : (H = t[15]);
      var G = 0,
        z = U,
        j;
      t[16] !== n ||
      t[17] !== A ||
      t[18] !== B ||
      t[19] !== p ||
      t[20] !== k ||
      t[21] !== S ||
      t[22] !== y
        ? ((j =
            B &&
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
                    onChange: A,
                    ariaLabel: n,
                    onArrowKeyLeftRight: p,
                    checked: S,
                    theme:
                      S && k
                        ? o("WAWebCheckBox.react").CheckboxTheme.PARTIAL
                        : void 0,
                  }),
                },
              ),
            )),
          (t[16] = n),
          (t[17] = A),
          (t[18] = B),
          (t[19] = p),
          (t[20] = k),
          (t[21] = S),
          (t[22] = y),
          (t[23] = j))
        : (j = t[23]);
      var K = d(q, W),
        Q;
      return (
        t[24] !== F ||
        t[25] !== f ||
        t[26] !== z ||
        t[27] !== j ||
        t[28] !== K ||
        t[29] !== V ||
        t[30] !== H
          ? ((Q = s.jsxs(
              "div",
              babelHelpers.extends({ ref: f, role: V }, H, {
                onKeyPress: F,
                tabIndex: G,
                onClick: z,
                children: [j, K],
              }),
            )),
            (t[24] = F),
            (t[25] = f),
            (t[26] = z),
            (t[27] = j),
            (t[28] = K),
            (t[29] = V),
            (t[30] = H),
            (t[31] = Q))
          : (Q = t[31]),
        Q
      );
    }
    l.default = p;
  },
  98,
);
