__d(
  "WAWebMetaConfigSearchModel",
  [
    "MetaConfigMap",
    "WAWebFuzzyStreaks",
    "WAWebMetaConfigDebugOverrides",
    "WAWebSearchModel",
    "WAWebSearchUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.preloadData = function () {
          var e = r("MetaConfigMap").getAll_DO_NOT_USE();
          this.allConfigs = Object.keys(e)
            .map(function (t) {
              var n,
                r = e[t],
                a = r.value,
                i,
                l,
                s = t.split(":");
              s.length >= 3
                ? ((l = s[0]), (i = s.slice(1).join(":")))
                : ((i = t),
                  typeof a == "boolean"
                    ? (l = "bool")
                    : typeof a == "number"
                      ? (l = "number")
                      : (l = "string"));
              var u = o("WAWebMetaConfigDebugOverrides").isOverridden(t);
              return {
                key: t,
                displayName: i,
                type: l,
                value: a,
                originalValue: u
                  ? (n = o("WAWebMetaConfigDebugOverrides").getOriginalValue(
                      t,
                    )) == null
                    ? void 0
                    : n.value
                  : a,
                overridden: u,
              };
            })
            .sort(function (e, t) {
              return e.displayName.localeCompare(t.displayName);
            });
        }),
        (n.queryFn = function (t) {
          var e = o("WAWebSearchUtils").normalizeString(t),
            n = new Map(),
            r = o("WAWebSearchUtils").filterPaginate(
              this.allConfigs,
              function (t) {
                if (e === "") return !0;
                var r = o("WAWebFuzzyStreaks").fuzzyStreaks(e, t.displayName),
                  a = r.foundError,
                  i = r.score;
                return (n.set(t.key, i), a === !1 && i > 0);
              },
            ),
            a = r.results;
          return (
            a.sort(function (e, t) {
              var r, o;
              return (
                ((r = n.get(t.key)) != null ? r : 0) -
                ((o = n.get(e.key)) != null ? o : 0)
              );
            }),
            {
              results: a.map(function (e) {
                return { id: e.key, type: "meta-config", data: e };
              }),
              type: "meta-config",
            }
          );
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    l.MetaConfigSearch = e;
  },
  98,
);
