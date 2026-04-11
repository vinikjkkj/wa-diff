__d(
  "shallowArrayEqual",
  ["isNullish"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e === t) return !0;
      if (r("isNullish")(e) || r("isNullish")(t) || e.length !== t.length)
        return !1;
      for (var n = 0, o = e.length; n < o; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    l.default = e;
  },
  98,
);
