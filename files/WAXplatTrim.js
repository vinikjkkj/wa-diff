__d(
  "WAXplatTrim",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
        "\0",
        "	",
        "\n",
        "\v",
        "\f",
        "\r",
        " ",
        "\x85",
        "\xA0",
        "\u1680",
        "\u2000",
        "\u2001",
        "\u2002",
        "\u2003",
        "\u2004",
        "\u2005",
        "\u2006",
        "\u2007",
        "\u2008",
        "\u2009",
        "\u200A",
        "\u200B",
        "\u2028",
        "\u2029",
        "\u202F",
        "\u205F",
        "\u3000",
      ]),
      l = function (t) {
        return c(t, !0, !0);
      },
      s = function (t) {
        return c(t, !0, !1);
      },
      u = function (t) {
        return c(t, !1, !0);
      };
    function c(t, n, r) {
      var o = 0,
        a = t.length;
      if (n) for (; o < a && e.has(t.charAt(o)); ) o++;
      if (r)
        for (var i = n ? o : -1; a - 1 > i && e.has(t.charAt(a - 1)); ) a--;
      return o === a ? "" : o === 0 && a === t.length ? t : t.slice(o, a);
    }
    ((i.trim = l), (i.trimStart = s), (i.trimEnd = u));
  },
  66,
);
