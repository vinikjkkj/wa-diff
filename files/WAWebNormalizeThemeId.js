__d(
  "WAWebNormalizeThemeId",
  ["WAWebChatThemeEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    for (var s of o("WAWebChatThemeEnums").Theme.members()) {
      var u = s,
        c = u.replace(/-/g, "");
      c !== u && e.set(c, u);
    }
    function d(t) {
      var n,
        r = t,
        o = "",
        a = t.indexOf("@");
      a !== -1
        ? ((r = t.slice(0, a)), (o = t.slice(a)))
        : t.endsWith("Tonal")
          ? ((r = t.slice(0, -5)), (o = "@Tonal"))
          : t.endsWith("Minimal") && ((r = t.slice(0, -7)), (o = "@Minimal"));
      var i = (n = e.get(r)) != null ? n : r;
      return i + o;
    }
    l.default = d;
  },
  98,
);
