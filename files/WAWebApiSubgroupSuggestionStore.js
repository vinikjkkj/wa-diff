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
    function c(e, t, n, r) {
      var a = async function () {
        var a = await Promise.all(
            t.map(async function (t) {
              var r = await o("WAWebSchemaSubgroupSuggestionV2")
                .getSubgroupSuggestionTable()
                .get([e.toString(), t.toString(), n.toString()]);
              return r;
            }),
          ),
          i = a.filter(Boolean),
          l = i.map(function (e) {
            return babelHelpers.extends({}, e, {
              owner: r,
              parentGroupId: o("WAWebWidFactory").createWid(e.parentGroupId),
              id: o("WAWebWidFactory").createWid(e.id),
            });
          });
        (await d(
          i.map(function (t) {
            var r = t.id;
            return {
              parentGroupId: e,
              id: o("WAWebWidFactory").createWid(r),
              owner: n,
            };
          }),
        ),
          await u(e, l));
      };
      return a();
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
    function m(e) {
      return o("WAWebSchemaSubgroupSuggestionV2")
        .getSubgroupSuggestionTable()
        .bulkRemoveByIndex(["parentGroupId"], [e.toString()]);
    }
    var p = o("WABatcher").batch({ delayMs: e }, async function (e) {
      var t = e.reduce(function (e, t) {
        return (e.push.apply(e, t.suggestionsRowKeys), e);
      }, []);
      return (await d(t), []);
    });
    function _(e) {
      var t = e.isOffline,
        n = e.subgroupSuggestions;
      return t === !0 ? p({ suggestionsRowKeys: n }) : d(n);
    }
    ((l.getSubgroupSuggestions = s),
      (l.addSubgroupSuggestions = u),
      (l.updateOwnerInSubgroupSuggestions = c),
      (l.removeSubgroupSuggestions = d),
      (l.removeAllSubgroupSuggestions = m),
      (l.removeSubgroupSuggestionsWithOfflineOption = _));
  },
  98,
);
