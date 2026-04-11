__d(
  "WAWebContactShortName",
  ["WALogger", "WAWebAlphaRegex", "WAWebNonEmptyString"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (t == null) return null;
      var n = t.split(/\s/),
        a = n[0];
      return r("WAWebAlphaRegex").exec(a)
        ? o("WAWebNonEmptyString").asMaybeNonEmptyString(a)
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[short-name] unable to get short name for contact",
              ])),
          ),
          null);
    }
    l.getShortName = s;
  },
  98,
);
