__d(
  "WAWebMentionsCap",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2e3;
    function u(t, n) {
      return t.length <= s
        ? t
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "capMentions: dropping ",
                " ",
                " over the cap",
              ])),
            t.length - s,
            n,
          ),
          t.slice(0, s));
    }
    ((l.MAX_MENTIONS_PER_MSG = s), (l.capMentions = u));
  },
  98,
);
