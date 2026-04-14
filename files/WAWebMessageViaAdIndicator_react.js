__d(
  "WAWebMessageViaAdIndicator.react",
  [
    "fbt",
    "WAWebAdAttributionUtils",
    "WAWebChatMsgIcon.react",
    "WAWebClassnames",
    "WAWebMessageTopIndicatorText.react",
    "WAWebStateUtils",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: { display: "x1rg5ohu", color: "xhslqc4", $$css: !0 },
        container: { height: "xhvdbge", lineHeight: "x17fgdl5", $$css: !0 },
        marginVert4: {
          marginTop: "xav9cv8",
          marginBottom: "x4tpdpg",
          $$css: !0,
        },
        marginEnd4: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        marginStart8: { marginInlineStart: "x150mmf0", $$css: !0 },
      };
    function m(t) {
      var n = t.className,
        a = t.xstyle,
        i = o("WAWebStateUtils").unproxy(t.msg);
      if (!o("WAWebAdAttributionUtils").shouldShowAdAttribution(i)) return null;
      var l = { x: 3, y: 2, width: 25, height: 25 };
      return c.jsxs("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (e || (e = r("stylex")))(
            d.container,
            d.marginVert4,
            d.marginEnd4,
            d.marginStart8,
            a,
          ),
          n,
        ),
        children: [
          c.jsx(o("WAWebChatMsgIcon.react").ChatMsgIcon, {
            xstyle: d.icon,
            height: 16,
            width: 16,
            viewBox: l,
          }),
          c.jsx(r("WAWebMessageTopIndicatorText.react"), {
            children: s._(/*BTDS*/ "Message via ad"),
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
