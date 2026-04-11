__d(
  "WAWebVoipRaiseHandButton.react",
  [
    "fbt",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WDSButton.react",
    "WDSIconIcBackHand.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["iconXstyle"],
      u,
      c = u || (u = o("react")),
      d = 1e3,
      m = "\u270B",
      p = {
        raisedHandEmoji: {
          fontSize: "xngnso2",
          lineHeight: "xo5v014",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        mirrorBackHand: {
          display: "x1lliihq",
          transform: "xpk2tj9",
          $$css: !0,
        },
        raiseHandActiveButton: {
          minWidth: "x900493",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          $$css: !0,
        },
        raiseHandActiveBackground: { backgroundColor: "x1od0jb8", $$css: !0 },
      },
      _ = {
        button: {
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(8),
        a,
        i;
      n[0] !== t
        ? ((a = t.iconXstyle),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] !== a
        ? ((l = [p.mirrorBackHand, a]), (n[3] = a), (n[4] = l))
        : (l = n[4]);
      var s;
      return (
        n[5] !== i || n[6] !== l
          ? ((s = c.jsx(
              r("WDSIconIcBackHand.react"),
              babelHelpers.extends({}, i, { iconXstyle: l }),
            )),
            (n[5] = i),
            (n[6] = l),
            (n[7] = s))
          : (s = n[7]),
        s
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.isRaised,
        r = n === void 0 ? !1 : n;
      if (r) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = c.jsxs("span", {
                className: "x1n2onr6 x3nfvp2 x6s0dn4 xl56j7k",
                children: [
                  c.jsx(f, {}),
                  c.jsx("span", {
                    className:
                      "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xpzfx1k x47corl",
                  }),
                ],
              })),
              (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      var i;
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = c.jsx(f, {})), (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.isDisabled,
        a = e.isSelfHandRaised,
        i = e.onRaiseHandToggle,
        l = e.tooltipAnchorRef,
        u = e.tooltipOwnerDocument,
        g = n === void 0 ? !1 : n,
        h = a === void 0 ? !1 : a,
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(m)),
          (t[0] = y))
        : (y = t[0]);
      var C = y,
        b;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Lower hand")), (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Raise hand")), (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L =
            C != null
              ? s._(/*BTDS*/ "{emoji}", [
                  s._param(
                    "emoji",
                    c.jsx(r("WAWebEmoji.react"), {
                      emoji: C,
                      xstyle: p.raisedHandEmoji,
                    }),
                  ),
                ])
              : null),
          (t[3] = L))
        : (L = t[3]);
      var E = L,
        k = h ? v : R,
        I;
      t[4] !== k || t[5] !== g || t[6] !== i
        ? ((I = c.jsx(r("WDSButton.react"), {
            testid: void 0,
            "aria-label": k,
            "aria-pressed": !1,
            disabled: g,
            onPress: i,
            Icon: f,
            size: "medium",
            variant: "borderless",
            xstyle: _.button,
          })),
          (t[4] = k),
          (t[5] = g),
          (t[6] = i),
          (t[7] = I))
        : (I = t[7]);
      var T = I,
        D;
      t[8] !== k || t[9] !== T || t[10] !== g || t[11] !== i
        ? ((D =
            E != null
              ? c.jsx(r("WDSButton.react"), {
                  type: "media",
                  testid: void 0,
                  "aria-label": k,
                  "aria-pressed": !0,
                  disabled: g,
                  onPress: i,
                  label: E,
                  size: "medium",
                  variant: "borderless",
                  xstyle: [
                    _.button,
                    p.raiseHandActiveButton,
                    p.raiseHandActiveBackground,
                  ],
                })
              : T),
          (t[8] = k),
          (t[9] = T),
          (t[10] = g),
          (t[11] = i),
          (t[12] = D))
        : (D = t[12]);
      var x = D,
        $ = h ? x : T,
        P;
      return (
        t[13] !== k || t[14] !== $ || t[15] !== l || t[16] !== u
          ? ((P = c.jsx(r("WDSTooltip.react"), {
              label: k,
              ownerAnchorRef: l,
              ownerDocument: u,
              delayTooltipMs: d,
              children: $,
            })),
            (t[13] = k),
            (t[14] = $),
            (t[15] = l),
            (t[16] = u),
            (t[17] = P))
          : (P = t[17]),
        P
      );
    }
    ((l.CALL_CONTROL_TOOLTIP_DELAY_MS = d),
      (l.RaiseHandIcon = g),
      (l.WAWebVoipRaiseHandButton = h));
  },
  226,
);
