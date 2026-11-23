__d(
  "MAIBAAudienceDetailedTargetingUtils",
  [
    "AdsFlexibleTargetingUtils",
    "AdsUnifiedBrowseTreeDataSource",
    "AdsUnifiedFlexibleValidationDataSource",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState;
    function m(e) {
      return (e == null ? void 0 : e.flexible_spec) != null
        ? o("AdsFlexibleTargetingUtils").convertFlexibleSpecToEntries(
            e.flexible_spec,
          )
        : [];
    }
    function p(e, t) {
      var n = new Set();
      return e.flatMap(function (e) {
        var r,
          o = e.type + "." + e.id;
        if (n.has(o)) return [];
        n.add(o);
        var a =
            t == null || (r = t.getMetadataLocal([o])[0]) == null
              ? void 0
              : r.name,
          i = a != null ? a : e.name;
        return i == null || String(i) === ""
          ? []
          : [{ id: e.id, name: String(i), type: e.type }];
      });
    }
    function _(e) {
      return p(m(e));
    }
    function f(e, t) {
      var n = c(
        function () {
          return m(t);
        },
        [t],
      );
      return g(e, n);
    }
    function g(e, t) {
      var n = c(
          function () {
            return p(t);
          },
          [t],
        ),
        o = d(null),
        a = o[0],
        i = o[1];
      return (
        u(
          function () {
            if (!(e == null || e === "" || t.length === 0)) {
              var n = !0,
                o = r("AdsUnifiedFlexibleValidationDataSource").getInstance(e),
                a = function () {
                  n && i({ accountID: e, entries: t, options: p(t, o) });
                };
              return (
                r("AdsUnifiedBrowseTreeDataSource")
                  .getInstance(e)
                  .getTreeData(function (e) {
                    n && (o.setBrowseTree(e), a(), o.search(t, a));
                  }),
                function () {
                  n = !1;
                }
              );
            }
          },
          [e, t],
        ),
        a != null && a.accountID === e && a.entries === t ? a.options : n
      );
    }
    ((l.extractDetailedTargetingOptions = _),
      (l.useMAIBAAudienceDetailedTargetingOptions = f),
      (l.useMAIBAAudienceDetailedTargetingOptionsForEntries = g));
  },
  98,
);
