__d(
  "WebBloksTextInputHelpers",
  ["WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (
        var n = new RegExp("(?:\\r\\n?|\\n)", "gm"), r, o = 0, a = 0;
        a < t;
        a++
      ) {
        if (((r = n.exec(e)), !r)) return e;
        o = r.index;
      }
      if (r == null) return e;
      var i = e.slice(0, o + r[0].length),
        l = e.slice(o + r[0].length);
      return ((l = l.replace(n, "")), i + l);
    }
    var s = { number: "numeric" };
    function u(e) {
      if (e == null) return {};
      for (var t of Object.entries(s)) {
        var n = t[0],
          r = t[1];
        if (e === n) return { type: "text", inputMode: r };
      }
      switch (e) {
        case "phone":
          return { type: "tel" };
        case "passcode":
          return { type: "password", inputMode: "numeric" };
        default:
          return { type: o("WebBloksUtils").toHyphen(e) };
      }
    }
    ((l.removeLineBreaks = e),
      (l.WEBBLOKS_TEXT_INPUT_TYPES_WITH_INPUT_MODES = s),
      (l.getInputTypeProps = u));
  },
  98,
);
