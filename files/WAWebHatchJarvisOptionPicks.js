__d(
  "WAWebHatchJarvisOptionPicks",
  ["WALogger", "WAWebLocalStorage", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "hatch-jarvis-option-picks",
      u = 500;
    function c(e) {
      var t, n;
      return (t =
        (n = p().find(function (t) {
          var n = t[0];
          return n === e;
        })) == null
          ? void 0
          : n[1]) != null
        ? t
        : null;
    }
    function d(t, n) {
      var a = []
        .concat(
          p().filter(function (e) {
            var n = e[0];
            return n !== t;
          }),
          [[t, n]],
        )
        .slice(-u);
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(s, JSON.stringify(a));
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-jarvis] saving an option pick failed",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    function m(e, t, n) {
      return e + "|" + (t != null ? t : n.join("\n"));
    }
    function p() {
      var e;
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(s);
        e = t != null ? JSON.parse(t) : null;
      } catch (e) {
        return [];
      }
      if (!Array.isArray(e)) return [];
      var n = [];
      for (var o of e)
        Array.isArray(o) &&
          typeof o[0] == "string" &&
          typeof o[1] == "string" &&
          n.push([o[0], o[1]]);
      return n;
    }
    ((l.getHatchJarvisOptionPick = c),
      (l.saveHatchJarvisOptionPick = d),
      (l.getHatchJarvisOptionCardKey = m));
  },
  98,
);
