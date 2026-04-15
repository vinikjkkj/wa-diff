__d(
  "WAWebABPropSearchModel",
  [
    "WAWebABPropsCache",
    "WAWebABPropsConfigs",
    "WAWebFuzzyStreaks",
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
          this.allABProps = o("WAWebABPropsCache")
            .getAllABPropConfigs()
            .map(function (e) {
              var t,
                n = o("WAWebABPropsCache").getABPropConfigNameFromCode(
                  e.configCode,
                );
              return {
                code: e.configCode,
                name: n,
                type: o("WAWebABPropsConfigs").ABPropConfigs[n][1],
                value:
                  (t = e.overriddenConfigValue) != null ? t : e.configValue,
                originalValue: e.configValue,
                overridden: e.overriddenConfigValue != null,
              };
            })
            .sort(function (e, t) {
              return e.name.localeCompare(t.name);
            });
        }),
        (n.queryFn = function (t) {
          var e = o("WAWebSearchUtils").normalizeString(t),
            n = new Map(),
            r = o("WAWebSearchUtils").filterPaginate(
              this.allABProps,
              function (t) {
                if (e === "") return !0;
                var r = o("WAWebFuzzyStreaks").fuzzyStreaks(e, t.name),
                  a = r.foundError,
                  i = r.score;
                return (n.set(t.name, i), a === !1 && i > 0);
              },
            ),
            a = r.results;
          return (
            a.sort(function (e, t) {
              var r, o;
              return (
                ((r = n.get(t.name)) != null ? r : 0) -
                ((o = n.get(e.name)) != null ? o : 0)
              );
            }),
            {
              results: a.map(function (e) {
                return { id: e.name, type: "ab-prop", data: e };
              }),
              type: "ab-prop",
            }
          );
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    l.ABPropSearch = e;
  },
  98,
);
