__d(
  "WAWebEmojiCompile",
  ["WATrie", "escapeRegex", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WATrie").fromForwardsStrings(
        e
          .sort(function (e, t) {
            return t.length - e.length;
          })
          .map(function (e) {
            return "" + e + u;
          }),
      );
      return s(null, t, null, 0);
    }
    function s(e, t, n, o, a) {
      var i = [],
        l = !1,
        d = a;
      if (d == null && !r("isStringNullOrEmpty")(e))
        if (o === 1) {
          var m = c.has(e);
          m && (d = !0);
        } else !r("isStringNullOrEmpty")(n) && o === 2 && (d = c.has(n + e));
      t.getChildren().forEach(function (t) {
        if (t.prefix === u) {
          l = !0;
          return;
        }
        i.push(s(t.prefix, t.node, e, o + 1, d));
      });
      var p =
          e === String.fromCodePoint(65039) && n != null && d !== !0
            ? String.fromCodePoint(65039) + "?"
            : r("escapeRegex")(e || ""),
        _ = i.length === 0 ? "" : "(?:" + i.join("|") + ")";
      return (_ && l && (_ += "?"), "" + p + _);
    }
    var u = "\n",
      c = new Set([
        String.fromCodePoint(169),
        String.fromCodePoint(174),
        String.fromCodePoint(8482),
        String.fromCodePoint(9823),
        String.fromCodePoint(9854),
        String.fromCodePoint(12336),
      ]);
    l.default = e;
  },
  98,
);
