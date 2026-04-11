__d(
  "WAWebApiSubgroupSuggestionStore",
  [
    "Promise",
    "WABatcher",
    "WAWebSchemaSubgroupSuggestionV2",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e3,
      u = function (t) {
        return o("WAWebSchemaSubgroupSuggestionV2")
          .getSubgroupSuggestionTable()
          .equals(["parentGroupId"], t.toString())
          .then(function (e) {
            return e.map(function (e) {
              var t = e.desc,
                n = e.hiddenSubgroup,
                r = e.id,
                a = e.isExistingGroup,
                i = e.owner,
                l = e.parentGroupId,
                s = e.participantCount,
                u = e.subject,
                c = e.t;
              return {
                id: o("WAWebWidFactory").createWid(r),
                parentGroupId: o("WAWebWidFactory").createWid(l),
                subject: u,
                desc: t,
                owner: o("WAWebWidFactory").createWid(i),
                t: c,
                isExistingGroup: a,
                participantCount: s,
                hiddenSubgroup: n,
              };
            });
          });
      },
      c = function (t, n) {
        var e = n.map(function (e) {
          var n = e.desc,
            r = e.hiddenSubgroup,
            o = e.id,
            a = e.isExistingGroup,
            i = e.owner,
            l = e.participantCount,
            s = e.subject,
            u = e.t;
          return {
            id: o.toString(),
            parentGroupId: t.toString(),
            subject: s,
            desc: n,
            owner: i.toString(),
            t: u,
            isExistingGroup: a,
            participantCount: l,
            hiddenSubgroup: r,
          };
        });
        return o("WAWebSchemaSubgroupSuggestionV2")
          .getSubgroupSuggestionTable()
          .bulkCreateOrReplace(e);
      },
      d = function (r, a, i, l) {
        var t = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield (e || (e = n("Promise"))).all(
                a.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield o("WAWebSchemaSubgroupSuggestionV2")
                          .getSubgroupSuggestionTable()
                          .get([r.toString(), e.toString(), i.toString()]);
                        return t;
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              s = t.filter(Boolean),
              u = s.map(function (e) {
                return babelHelpers.extends({}, e, {
                  owner: l,
                  parentGroupId: o("WAWebWidFactory").createWid(
                    e.parentGroupId,
                  ),
                  id: o("WAWebWidFactory").createWid(e.id),
                });
              });
            (yield m(
              s.map(function (e) {
                var t = e.id;
                return {
                  parentGroupId: r,
                  id: o("WAWebWidFactory").createWid(t),
                  owner: i,
                };
              }),
            ),
              yield c(r, u));
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        return t();
      },
      m = function (t) {
        return o("WAWebSchemaSubgroupSuggestionV2")
          .getSubgroupSuggestionTable()
          .bulkRemove(
            t.map(function (e) {
              var t = e.id,
                n = e.owner,
                r = e.parentGroupId;
              return [r.toString(), t.toString(), n.toString()];
            }),
          );
      },
      p = function (t) {
        return o("WAWebSchemaSubgroupSuggestionV2")
          .getSubgroupSuggestionTable()
          .bulkRemoveByIndex(["parentGroupId"], [t.toString()]);
      },
      _ = o("WABatcher").batch(
        { delayMs: s },
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.reduce(function (e, t) {
              return (e.push.apply(e, t.suggestionsRowKeys), e);
            }, []);
            return (yield m(t), []);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    function f(e) {
      var t = e.isOffline,
        n = e.subgroupSuggestions;
      return t === !0 ? _({ suggestionsRowKeys: n }) : m(n);
    }
    ((l.getSubgroupSuggestions = u),
      (l.addSubgroupSuggestions = c),
      (l.updateOwnerInSubgroupSuggestions = d),
      (l.removeSubgroupSuggestions = m),
      (l.removeAllSubgroupSuggestions = p),
      (l.removeSubgroupSuggestionsWithOfflineOption = f));
  },
  98,
);
