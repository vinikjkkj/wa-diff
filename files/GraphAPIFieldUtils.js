__d(
  "GraphAPIFieldUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return t.length === 0 ? "" + e : e + "{" + t.join(",") + "}";
    }
    function l(e) {
      var t = e.match(/(\w+){(.+)}/);
      if (t === null) return { field: e };
      for (
        var n = t[0], r = t[1], o = t[2], a = [], i = 0, s = "", u = 0;
        u < o.length;
        ++u
      ) {
        var c = o.charAt(u);
        if (c === "," && i === 0) {
          (a.push(s), (s = ""));
          continue;
        }
        ((s += c), c === "{" ? (i += 1) : c === "}" && (i -= 1));
      }
      s.length > 0 && a.push(s);
      var d = new Set(a.map(l));
      return { field: r, subFields: d };
    }
    function s(e, t) {
      var n = Object.keys(t)
        .map(function (e) {
          var n = t[e];
          if (n != null) {
            var r = typeof n == "string" ? n : JSON.stringify(n);
            return "." + e + "(" + (r != null ? r : "undefined") + ")";
          }
        })
        .join("");
      return "" + e + n;
    }
    ((i.getFieldWithSubfields = e),
      (i.parseField = l),
      (i.getFieldWithParameterizedSubfields = s));
  },
  66,
);
