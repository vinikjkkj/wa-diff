__d(
  "WAWebGroupABPropSearchModel",
  [
    "WAWebFuzzyStreaks",
    "WAWebGroupABPropsCache",
    "WAWebGroupABPropsConfigs",
    "WAWebSearchModel",
    "WAWebSearchUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.updateGroupJid = function (t) {
          var e = o("WAWebWidFactory").createWid(t);
          ((this.groupJid = o("WAWebWidToJid").widToGroupJid(e)),
            this.preloadData());
        }),
        (n.preloadData = function () {
          if (this.groupJid == null) {
            this.allABProps = [];
            return;
          }
          var e = this.groupJid,
            t = new Map();
          for (var n of o(
            "WAWebGroupABPropsCache",
          ).getAllGroupABPropConfigsForGroup(e))
            t.set(n.configCode, n);
          var r = [];
          for (var a of Object.keys(
            o("WAWebGroupABPropsConfigs").ABPropConfigs,
          )) {
            var i,
              l,
              s,
              u = o("WAWebGroupABPropsConfigs").ABPropConfigs[a],
              c = u[0],
              d = u[1],
              m = u[2],
              p = t.get(c);
            r.push({
              code: c,
              name: a,
              type: d,
              value:
                p != null &&
                (i =
                  (l = p.overriddenConfigValue) != null ? l : p.configValue) !=
                  null
                  ? i
                  : m,
              originalValue:
                (s = p == null ? void 0 : p.configValue) != null ? s : m,
              overridden:
                (p == null ? void 0 : p.overriddenConfigValue) != null,
            });
          }
          this.allABProps = r.sort(function (e, t) {
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
                return { id: e.name, type: "group-ab-prop", data: e };
              }),
              type: "group-ab-prop",
            }
          );
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    l.GroupABPropSearch = e;
  },
  98,
);
