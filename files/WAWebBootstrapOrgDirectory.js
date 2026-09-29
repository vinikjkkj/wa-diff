__d(
  "WAWebBootstrapOrgDirectory",
  ["Promise", "WAWebOrgDirectoryRepository", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null,
      u = null,
      c = 0;
    function d(t) {
      if (s === t && u != null) return u;
      c++;
      var r = c;
      s = t;
      var o = (e || (e = n("Promise")))
        .resolve()
        .then(function () {
          return p(t, r);
        })
        .finally(function () {
          s === t && u === o && (u = null);
        });
      return ((u = o), o);
    }
    function m() {
      (c++, (s = null), (u = null));
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            t === c &&
            (yield o("WAWebOrgDirectoryRepository").restoreCachedOrganizations(
              e,
            ),
            t === c)
          ) {
            var r =
              (n = o(
                "WAWebOrgDirectoryRepository",
              ).getOrgDirectoryRepositorySnapshot().organizations[0]) == null
                ? void 0
                : n.id;
            if (
              (yield o("WAWebOrgDirectoryRepository").refreshOrganizations(e),
              t === c)
            ) {
              var a = o(
                  "WAWebOrgDirectoryRepository",
                ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs,
                i = a == null ? r : a[0];
              if (i != null) {
                if (
                  (yield o(
                    "WAWebOrgDirectoryRepository",
                  ).restoreCachedOrgDirectory(e, i),
                  t !== c)
                )
                  return;
                yield o("WAWebOrgDirectoryRepository").refreshOrgDirectory(
                  e,
                  i,
                );
              }
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.bootstrapOrgDirectory = d), (l.resetOrgDirectoryBootstrap = m));
  },
  98,
);
