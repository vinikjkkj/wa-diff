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
      s = 3e3;
    function u(e) {
      return o("WAWebSchemaSubgroupSuggestionV2")
        .getSubgroupSuggestionTable()
        .equals(["parentGroupId"], e.toString())
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
    }
    function c(e, t) {
      var n = t.map(function (t) {
        var n = t.desc,
          r = t.hiddenSubgroup,
          o = t.id,
          a = t.isExistingGroup,
          i = t.owner,
          l = t.participantCount,
          s = t.subject,
          u = t.t;
        return {
          id: o.toString(),
          parentGroupId: e.toString(),
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
        .bulkCreateOrReplace(n);
    }
    function d(t, r, a, i) {
      var l = (function () {
        var l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var l = yield (e || (e = n("Promise"))).all(
              r.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = yield o("WAWebSchemaSubgroupSuggestionV2")
                        .getSubgroupSuggestionTable()
                        .get([t.toString(), e.toString(), a.toString()]);
                      return n;
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            s = l.filter(Boolean),
            u = s.map(function (e) {
              return babelHelpers.extends({}, e, {
                owner: i,
                parentGroupId: o("WAWebWidFactory").createWid(e.parentGroupId),
                id: o("WAWebWidFactory").createWid(e.id),
              });
            });
          (yield m(
            s.map(function (e) {
              var n = e.id;
              return {
                parentGroupId: t,
                id: o("WAWebWidFactory").createWid(n),
                owner: a,
              };
            }),
          ),
            yield c(t, u));
        });
        return function () {
          return l.apply(this, arguments);
        };
      })();
      return l();
    }
    function m(e) {
      return o("WAWebSchemaSubgroupSuggestionV2")
        .getSubgroupSuggestionTable()
        .bulkRemove(
          e.map(function (e) {
            var t = e.id,
              n = e.owner,
              r = e.parentGroupId;
            return [r.toString(), t.toString(), n.toString()];
          }),
        );
    }
    function p(e) {
      return o("WAWebSchemaSubgroupSuggestionV2")
        .getSubgroupSuggestionTable()
        .bulkRemoveByIndex(["parentGroupId"], [e.toString()]);
    }
    var _ = o("WABatcher").batch(
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
