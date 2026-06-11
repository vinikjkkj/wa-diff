__d(
  "GHLTypenameRestore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = window.Env != null ? window.Env.q9k7m2x : null;
      if (!(n == null || !Array.isArray(n)))
        for (var r = 0; r < n.length; r++) {
          var o = n[r];
          if (Array.isArray(o) && o.length === 2) {
            if (t != null && t.indexOf(o[0]) === -1) continue;
            l(e, o[0], o[1]);
          }
        }
    }
    function l(e, t, n) {
      if (!(e == null || typeof e != "object"))
        for (var r = [e]; r.length > 0; ) {
          var o = r.pop();
          if (!(o == null || typeof o != "object")) {
            if (Array.isArray(o)) {
              for (var a = 0; a < o.length; a++) {
                var i = o[a];
                i != null && typeof i == "object" && r.push(i);
              }
              continue;
            }
            o.__typename === t && (o.__typename = n);
            for (var l = Object.keys(o), s = 0; s < l.length; s++) {
              var u = o[l[s]];
              u != null && typeof u == "object" && r.push(u);
            }
          }
        }
    }
    ((i.restoreAllTypenames = e), (i.restoreTypenameValues = l));
  },
  66,
);
