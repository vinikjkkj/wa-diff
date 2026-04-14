__d(
  "WAWebMessageForwardedIndicator.react",
  [
    "WAWebClassnames",
    "WAWebForwardRefreshedIcon.react",
    "WAWebForwardUtils",
    "WAWebForwardedAiBotMessageInfoHeader.react",
    "WAWebForwardedNewsletterMessageInfoHeader.react",
    "WAWebMessageForwardedIndicatorSearchTheWeb.react",
    "WAWebMessageTopIndicatorText.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          display: "x1rg5ohu",
          verticalAlign: "x16dsc37",
          color: "xhslqc4",
          $$css: !0,
        },
        container: { marginInlineStart: "xe9ewy2", $$css: !0 },
      };
    function d(t) {
      var n,
        a = t.className,
        i = t.msg,
        l = t.xstyle;
      o("useWAWebMsgValues").useMsgValues(t.msg.id, [
        (n = o("WAWebMsgGetters")).getIsFrequentlyForwarded,
        n.getIsForwarded,
        n.getForwardingScore,
        n.getNumTimesForwarded,
        n.getType,
      ]);
      var s = o("WAWebMsgSelectors").showForwarded(i);
      if (!s) return null;
      var d = u.jsx(o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon, {
        directional: !0,
        width: 16,
        height: 16,
        xstyle: c.icon,
      });
      return u.jsxs("div", {
        "data-testid": void 0,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          (e || (e = r("stylex")))(c.container, l),
          a,
        ),
        children: [
          d,
          u.jsx(r("WAWebMessageTopIndicatorText.react"), {
            children: o("WAWebForwardUtils").getForwardedIndicatorText(i),
          }),
          u.jsx(r("WAWebMessageForwardedIndicatorSearchTheWeb.react"), {
            msg: i,
          }),
          u.jsx(r("WAWebForwardedNewsletterMessageInfoHeader.react"), {
            msg: t.msg,
          }),
          u.jsx(r("WAWebForwardedAiBotMessageInfoHeader.react"), {
            msg: t.msg,
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
