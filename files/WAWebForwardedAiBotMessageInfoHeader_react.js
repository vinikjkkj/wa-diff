__d(
  "WAWebForwardedAiBotMessageInfoHeader.react",
  [
    "fbt",
    "WAWebForwardedInfoHeaderLink.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardedAiBotMessageClickHandler",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(5),
        a = e.msg,
        i = o(
          "useWAWebForwardedAiBotMessageClickHandler",
        ).useForwardedAiBotMessageClickHandler(a);
      if (i == null) return null;
      var l = (t = a.forwardedAiBotMessageInfo) == null ? void 0 : t.botName,
        c;
      n[0] !== l
        ? ((c = l != null ? l : s._(/*BTDS*/ "View AI chat")),
          (n[0] = l),
          (n[1] = c))
        : (c = n[1]);
      var d = c,
        m;
      return (
        n[2] !== i || n[3] !== d
          ? ((m = u.jsx(r("WAWebForwardedInfoHeaderLink.react"), {
              onClick: i,
              testId: "forwarded-ai-bot-info",
              children: d,
            })),
            (n[2] = i),
            (n[3] = d),
            (n[4] = m))
          : (m = n[4]),
        m
      );
    }
    l.default = c;
  },
  226,
);
