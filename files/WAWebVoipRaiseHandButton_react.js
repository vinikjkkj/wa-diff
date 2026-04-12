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
      var n = t.iconXstyle,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsx(
        r("WDSIconIcBackHand.react"),
        babelHelpers.extends({}, o, { iconXstyle: [p.mirrorBackHand, n] }),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.isRaised,
        n = t === void 0 ? !1 : t;
      return n
        ? c.jsxs("span", {
            className: "x1n2onr6 x3nfvp2 x6s0dn4 xl56j7k",
            children: [
              c.jsx(f, {}),
              c.jsx("span", {
                className:
                  "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xpzfx1k x47corl",
              }),
            ],
          })
        : c.jsx(f, {});
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.isDisabled,
        n = t === void 0 ? !1 : t,
        a = e.isSelfHandRaised,
        i = a === void 0 ? !1 : a,
        l = e.onRaiseHandToggle,
        u = e.tooltipAnchorRef,
        g = e.tooltipOwnerDocument,
        h = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(m),
        y = s._(/*BTDS*/ "Lower hand"),
        C = s._(/*BTDS*/ "Raise hand"),
        b =
          h != null
            ? s._(/*BTDS*/ "{emoji}", [
                s._param(
                  "emoji",
                  c.jsx(r("WAWebEmoji.react"), {
                    emoji: h,
                    xstyle: p.raisedHandEmoji,
                  }),
                ),
              ])
            : null,
        v = i ? y : C,
        S = c.jsx(r("WDSButton.react"), {
          testid: void 0,
          "aria-label": v,
          "aria-pressed": !1,
          disabled: n,
          onPress: l,
          Icon: f,
          size: "medium",
          variant: "borderless",
          xstyle: _.button,
        }),
        R =
          b != null
            ? c.jsx(r("WDSButton.react"), {
                type: "media",
                testid: void 0,
                "aria-label": v,
                "aria-pressed": !0,
                disabled: n,
                onPress: l,
                label: b,
                size: "medium",
                variant: "borderless",
                xstyle: [
                  _.button,
                  p.raiseHandActiveButton,
                  p.raiseHandActiveBackground,
                ],
              })
            : S;
      return c.jsx(r("WDSTooltip.react"), {
        label: v,
        ownerAnchorRef: u,
        ownerDocument: g,
        delayTooltipMs: d,
        children: i ? R : S,
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.CALL_CONTROL_TOOLTIP_DELAY_MS = d),
      (l.RaiseHandIcon = g),
      (l.WAWebVoipRaiseHandButton = h));
  },
  226,
);
