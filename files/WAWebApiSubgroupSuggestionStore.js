__d(
  "WAWebApiSubgroupSuggestionStore",
  ["WABatcher", "WAWebSchemaSubgroupSuggestionV2", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = 3e3;
    function s(e) {
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
    function u(e, t) {
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
    function c(e) {
      var t = e.newOwner,
        n = e.oldOwner,
        r = e.parentGroupId,
        a = e.subgroupSuggestions,
        i = async function () {
          var e = await Promise.all(
              a.map(async function (e) {
                var t = await o("WAWebSchemaSubgroupSuggestionV2")
                  .getSubgroupSuggestionTable()
                  .get([r.toString(), e.toString(), n.toString()]);
                return t;
              }),
            ),
            i = e.filter(Boolean),
            l = i.map(function (e) {
              return babelHelpers.extends({}, e, {
                owner: t,
                parentGroupId: o("WAWebWidFactory").createWid(e.parentGroupId),
                id: o("WAWebWidFactory").createWid(e.id),
              });
            });
          (await d(
            i.map(function (e) {
              var t = e.id;
              return {
                parentGroupId: r,
                id: o("WAWebWidFactory").createWid(t),
                owner: n,
              };
            }),
          ),
            await u(r, l));
        };
      return i();
    }
    function d(e) {
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
    var m = o("WABatcher").batch({ delayMs: e }, async function (e) {
      var t = e.reduce(function (e, t) {
        return (e.push.apply(e, t.suggestionsRowKeys), e);
      }, []);
      return (await d(t), []);
    });
    function p(e) {
      var t = e.isOffline,
        n = e.subgroupSuggestions;
      return t === !0 ? m({ suggestionsRowKeys: n }) : d(n);
    }
    ((l.getSubgroupSuggestions = s),
      (l.addSubgroupSuggestions = u),
      (l.updateOwnerInSubgroupSuggestions = c),
      (l.removeSubgroupSuggestions = d),
      (l.removeSubgroupSuggestionsWithOfflineOption = p));
  },
  98,
);
