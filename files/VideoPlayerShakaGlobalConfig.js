__d(
  "VideoPlayerShakaGlobalConfig",
  ["VideoPlayerContextSensitiveConfigResolver"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("VideoPlayerContextSensitiveConfigResolver"))(),
      s = {},
      u = function (t) {
        s = t;
      },
      c = function (n, r) {
        if (s && typeof s[n] == "boolean") return s[n];
        var t = e.getValue(n);
        return t != null && typeof t == "boolean" ? t : r;
      },
      d = function (n, r) {
        if (s && typeof s[n] == "number") return s[n];
        var t = e.getValue(n);
        return t != null && typeof t == "number" ? t : r;
      },
      m = function (n, r) {
        if (s && typeof s[n] == "string") return s[n];
        var t = e.getValue(n);
        return t != null && typeof t == "string" ? t : r;
      };
    ((l.setGlobalOverrideConfig = u),
      (l.getBool = c),
      (l.getNumber = d),
      (l.getString = m));
  },
  98,
);
