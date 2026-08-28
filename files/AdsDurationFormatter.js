__d(
  "AdsDurationFormatter",
  ["DateConsts", "padNumber"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = Math.floor(e / (t = o("DateConsts")).SEC_PER_HOUR),
        a = Math.floor((e % t.SEC_PER_HOUR) / t.SEC_PER_MIN),
        i = Math.floor(e % t.SEC_PER_MIN),
        l = r("padNumber")(n, 2),
        u = r("padNumber")(a, 2),
        c = r("padNumber")(i, 2),
        d = s(e, 2),
        m = "";
      return (
        l !== "00" && (m += l + ":"),
        (m += u + ":" + c),
        (m += d != null ? "." + d : ""),
        m
      );
    }
    function s(e, t) {
      var n = e.toString(),
        r = n.indexOf(".");
      if (r === -1) return null;
      for (var o = n.substr(r + 1, t); o.length < t; ) o += "0";
      return o;
    }
    ((l.formatDuration = e), (l.getDecimalString = s));
  },
  98,
);
