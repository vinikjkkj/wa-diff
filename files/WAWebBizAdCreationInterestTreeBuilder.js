__d(
  "WAWebBizAdCreationInterestTreeBuilder",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = { children: [], node: null, pathName: "__ROOT__" };
      return (
        e.forEach(function (e) {
          var n,
            r = e.id,
            o = e.name,
            a = e.path,
            i = e.raw_name,
            l = e.target_type,
            s = t;
          (a.forEach(function (e) {
            var t, n;
            if (s != null) {
              var r = ((t = s.children) != null ? t : []).map(function (e) {
                return e.pathName;
              });
              if (!r.includes(e)) {
                var o;
                ((o = s) == null ? void 0 : o.children) != null &&
                  s.children.push({ children: [], node: null, pathName: e });
              }
              s =
                ((n = s) == null ? void 0 : n.children) != null
                  ? s.children.find(function (t) {
                      return t.pathName === e;
                    })
                  : null;
            }
          }),
            (n = s) == null ||
              n.children.push({
                children: [],
                node: { id: r, name: o, path: a, raw_name: i, target_type: l },
                pathName: r === "" ? o : null,
              }));
        }),
        t
      );
    }
    i.buildInterestTree = e;
  },
  66,
);
