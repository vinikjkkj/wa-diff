__d(
  "ModuleDependencies",
  ["__debug"],
  function (t, n, r, o, a, i) {
    function e(t, r, o) {
      var a = n("__debug").modulesMap[o],
        i = n("__debug").deps;
      if (!r[o]) {
        if (((r[o] = !0), !a)) {
          i[o] && (t[o] = !0);
          return;
        }
        if (!a.dependencies || !a.dependencies.length) {
          a.waiting && (t[o] = !0);
          return;
        }
        a.dependencies.forEach(function (n) {
          e(t, r, n);
        });
      }
    }
    function l(t) {
      var n = {};
      e(n, {}, t);
      var r = Object.keys(n);
      return (r.sort(), r);
    }
    function s() {
      var t = { loading: {}, missing: [] },
        r = {},
        o = n("__debug").getModules(),
        a = n("__debug").deps;
      for (var i in o) {
        var l = o[i];
        if (l.waiting) {
          var s = {};
          (e(s, {}, l.id),
            delete s[l.id],
            (t.loading[l.id] = Object.keys(s)),
            t.loading[l.id].sort(),
            t.loading[l.id].forEach(function (e) {
              !(e in o) && a[e] && (r[e] = 1);
            }));
        }
      }
      return ((t.missing = Object.keys(r)), t.missing.sort(), t);
    }
    var u = { getMissing: l, getNotLoadedModules: s };
    a.exports = u;
  },
  null,
);
