__d(
  "WAWebForwardedAiBotMessageInfoHeader.react",
  [
    "fbt",
    "WAWebForwardedInfoHeaderLink.react",
    "react",
    "useWAWebForwardedAiBotMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.msg,
        a = o(
          "useWAWebForwardedAiBotMessageClickHandler",
        ).useForwardedAiBotMessageClickHandler(n);
      if (a == null) return null;
      var i = (t = n.forwardedAiBotMessageInfo) == null ? void 0 : t.botName,
        l = i != null ? i : s._(/*BTDS*/ "View AI chat");
      return u.jsx(r("WAWebForwardedInfoHeaderLink.react"), {
        onClick: a,
        testId: "forwarded-ai-bot-info",
        children: l,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
