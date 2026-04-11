__d(
  "BaseInlinePressable.react",
  ["CometPressable.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = [
        "ariaLabel",
        "children",
        "color",
        "cursorDisabled",
        "expanding",
        "linkProps",
        "onPress",
        "xstyle",
      ],
      u,
      c = u || (u = o("react")),
      d = {
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
        disabled: { textDecoration: "x1hl2dhg", $$css: !0 },
        disabledColor: { color: "x1dntmbh", $$css: !0 },
        disabledLink: { opacity: "xbyyjgo", $$css: !0 },
        expanding: { display: "x3nfvp2", $$css: !0 },
        link: { ":hover_textDecoration": "xt0b8zv", $$css: !0 },
        linkColor: { color: "x1fey0fg", $$css: !0 },
        root: {
          display: "xt0psk2",
          position: "x1n2onr6",
          userSelect: "x87ps6o",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, m, p, _, f, g, h, y;
      if (n[3] !== a) {
        var C = a;
        ((l = C.ariaLabel),
          (u = C.children),
          (g = C.color),
          (m = C.cursorDisabled),
          (h = C.expanding),
          (p = C.linkProps),
          (_ = C.onPress),
          (y = C.xstyle),
          (f = babelHelpers.objectWithoutPropertiesLoose(C, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = m),
          (n[7] = p),
          (n[8] = _),
          (n[9] = f),
          (n[10] = g),
          (n[11] = h),
          (n[12] = y));
      } else
        ((l = n[4]),
          (u = n[5]),
          (m = n[6]),
          (p = n[7]),
          (_ = n[8]),
          (f = n[9]),
          (g = n[10]),
          (h = n[11]),
          (y = n[12]));
      var b = g === void 0 ? "blue" : g,
        v = h === void 0 ? !1 : h,
        S = m === !0 && d.defaultCursor,
        R = v && d.expanding,
        L;
      n[13] !== S || n[14] !== R || n[15] !== y
        ? ((L = [d.root, S, R, y]),
          (n[13] = S),
          (n[14] = R),
          (n[15] = y),
          (n[16] = L))
        : (L = n[16]);
      var E = L,
        k = b !== "inherit" && (p != null || _ != null),
        I;
      n[17] !== E || n[18] !== k
        ? ((I = function (t) {
            var e = t.disabled,
              n = t.hovered;
            return [
              E,
              k && d.linkColor,
              n && !e && d.link,
              e && d.disabled,
              e && !k && d.disabledColor,
              e && k && d.disabledLink,
            ];
          }),
          (n[17] = E),
          (n[18] = k),
          (n[19] = I))
        : (I = n[19]);
      var T;
      return (
        n[20] !== l ||
        n[21] !== u ||
        n[22] !== p ||
        n[23] !== _ ||
        n[24] !== f ||
        n[25] !== i ||
        n[26] !== I
          ? ((T = c.jsx(
              r("CometPressable.react"),
              babelHelpers.extends(
                {
                  "aria-label": l,
                  linkProps: p,
                  onPress: _,
                  overlayDisabled: !0,
                },
                f,
                { ref: i, xstyle: I, children: u },
              ),
            )),
            (n[20] = l),
            (n[21] = u),
            (n[22] = p),
            (n[23] = _),
            (n[24] = f),
            (n[25] = i),
            (n[26] = I),
            (n[27] = T))
          : (T = n[27]),
        T
      );
    }
    l.default = m;
  },
  98,
);
