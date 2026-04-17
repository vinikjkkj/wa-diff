__d(
  "EmoticonRenderer",
  ["EmoticonsList"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["LIKE", "PACMAN", "FACE_WITH_COLON_THREE"];
    function s(t) {
      for (
        var n = [],
          r = new RegExp(o("EmoticonsList").regexp),
          a = 0,
          i = t.match(r);
        i !== null;
      ) {
        var l = i[1],
          s = i[2].split(""),
          u = o("EmoticonsList").emotes[i[2]],
          c = o("EmoticonsList").emoji[u];
        (n.push({
          chars: s,
          isCustom: e.includes(c),
          key: c,
          offset: a + i.index + l.length,
        }),
          (a += i.index + i[0].length),
          (i = t.slice(a).match(r)));
      }
      return n;
    }
    function u(e, t, n) {
      var r = s(e),
        o = [],
        a = 0;
      return (
        r.forEach(function (r) {
          var i = r.offset;
          (i > a && o.push(e.substr(a, i - a)),
            r.isCustom ? o.push(n(r.key, r.chars)) : o.push(t(r.key)),
            (a = i + r.chars.length));
        }),
        o.push(e.substr(a, e.length - a)),
        o
      );
    }
    ((l.parse = s), (l.render = u));
  },
  98,
);
