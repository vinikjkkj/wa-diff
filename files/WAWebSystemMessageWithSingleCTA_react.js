__d(
  "WAWebSystemMessageWithSingleCTA.react",
  [
    "fbt",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgType",
    "WAWebWamEnumSystemMessageCategoryType",
    "WDSFontTokenStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        container: { color: "xhslqc4", $$css: !0 },
        ctaTextHovered: {
          textDecoration: "x1bvjpef",
          cursor: "x1ypdohk",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.bodyText,
        i = t.className,
        l = t.ctaText,
        u = t.ctaXstyle,
        p = t.icon,
        _ = t.isBodyTextClickable,
        f = t.onClick,
        g = t.onclickRef,
        h = t.role,
        y = t.testid,
        C = t.xstyle,
        b = _ === void 0 ? !1 : _,
        v = d(!1),
        S = v[0],
        R = v[1],
        L = h != null ? h : f ? "button" : void 0,
        E;
      n[0] !== f
        ? ((E = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) &&
              (t.stopPropagation(), t.preventDefault(), f == null || f(t));
          }),
          (n[0] = f),
          (n[1] = E))
        : (E = n[1]);
      var k = E,
        I;
      n[2] !== u || n[3] !== S
        ? ((I = (e || (e = r("stylex"))).props(
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized,
            S && m.ctaTextHovered,
            u,
          )),
          (n[2] = u),
          (n[3] = S),
          (n[4] = I))
        : (I = n[4]);
      var T;
      n[5] !== k || n[6] !== b || n[7] !== f || n[8] !== L
        ? ((T =
            b === !0
              ? babelHelpers.extends(
                  { role: L },
                  L === "link" ? { tabIndex: 0 } : {},
                  {
                    onClick: f,
                    onKeyDown: k,
                    onMouseEnter: function () {
                      return R(!0);
                    },
                    onMouseLeave: function () {
                      return R(!1);
                    },
                  },
                )
              : {}),
          (n[5] = k),
          (n[6] = b),
          (n[7] = f),
          (n[8] = L),
          (n[9] = T))
        : (T = n[9]);
      var D;
      n[10] !== l || n[11] !== I || n[12] !== T
        ? ((D = c.jsx("span", babelHelpers.extends({}, I, T, { children: l }))),
          (n[10] = l),
          (n[11] = I),
          (n[12] = T),
          (n[13] = D))
        : (D = n[13]);
      var x = D,
        $;
      n[14] !== C
        ? (($ = (e || (e = r("stylex"))).props(
            m.container,
            o("WDSFontTokenStyles").WDSFontTokenStyles.Body3,
            C,
          )),
          (n[14] = C),
          (n[15] = $))
        : ($ = n[15]);
      var P;
      n[16] !== a || n[17] !== p || n[18] !== x
        ? ((P = s._(
            /*BTDS*/ "{system-message-icon}{system-message-body}. {system-message-cta}",
            [
              s._param("system-message-icon", p),
              s._param("system-message-body", a),
              s._param("system-message-cta", x),
            ],
          )),
          (n[16] = a),
          (n[17] = p),
          (n[18] = x),
          (n[19] = P))
        : (P = n[19]);
      var N;
      n[20] !== $ || n[21] !== P || n[22] !== y
        ? ((N = c.jsx(
            "span",
            babelHelpers.extends({ "data-testid": void 0 }, $, { children: P }),
          )),
          (n[20] = $),
          (n[21] = P),
          (n[22] = y),
          (n[23] = N))
        : (N = n[23]);
      var M = N,
        w;
      n[24] !== b || n[25] !== f || n[26] !== L
        ? ((w =
            b === !0
              ? babelHelpers.extends({}, L === "link" ? { tabIndex: 0 } : {})
              : babelHelpers.extends(
                  { role: L },
                  L === "link" ? { tabIndex: 0 } : {},
                  {
                    onClick: f,
                    onMouseEnter: function () {
                      return R(!0);
                    },
                    onMouseLeave: function () {
                      return R(!1);
                    },
                  },
                )),
          (n[24] = b),
          (n[25] = f),
          (n[26] = L),
          (n[27] = w))
        : (w = n[27]);
      var A = w,
        F = i != null ? i : void 0,
        O;
      return (
        n[28] !== A || n[29] !== g || n[30] !== M || n[31] !== F
          ? ((O = c.jsx(
              "div",
              babelHelpers.extends({ ref: g, className: F }, A, {
                children: M,
              }),
            )),
            (n[28] = A),
            (n[29] = g),
            (n[30] = M),
            (n[31] = F),
            (n[32] = O))
          : (O = n[32]),
        O
      );
    }
    function _(e) {
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
          return o("WAWebWamEnumSystemMessageCategoryType")
            .SYSTEM_MESSAGE_CATEGORY_TYPE.PRIVACY;
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return o("WAWebWamEnumSystemMessageCategoryType")
            .SYSTEM_MESSAGE_CATEGORY_TYPE.GROUPS;
      }
    }
    ((l.SystemMessageWithSingleCTA = p), (l.getSystemMessageCategoryType = _));
  },
  226,
);
