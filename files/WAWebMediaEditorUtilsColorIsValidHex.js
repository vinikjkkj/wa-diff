__d(
  "WAWebMediaEditorUtilsColorIsValidHex",
  ["WAWebMediaEditorUtilsColorCleanHex"],
  function (t, n, r, o, a, i, l) {
    var e = /^[0-9A-F]{3}$/i,
      s = /^[0-9A-F]{6}$/i;
    function u(t) {
      if (!t) return !1;
      var n = o("WAWebMediaEditorUtilsColorCleanHex").cleanHex(t);
      return n.length === 3 ? e.test(n) : n.length === 6 ? s.test(n) : !1;
    }
    l.isValidHex = u;
  },
  98,
);
