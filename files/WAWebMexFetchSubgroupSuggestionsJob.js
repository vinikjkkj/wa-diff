__d(
  "WAWebMexFetchSubgroupSuggestionsJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchSubgroupSuggestionsJobQuery.graphql",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchSubgroupSuggestionsJobQuery.graphql"));
    async function u(e, t, n) {
      var r = {
        group_id: e.toString(),
        query_context: n,
        sub_group_hint_id: t.toString(),
      };
      try {
        var a,
          i = await o("WAWebMexClient").fetchQuery(s, r),
          l =
            (a = i.xwa2_group_query_by_id) == null ||
            (a = a.sub_group_suggestions) == null
              ? void 0
              : a.edges;
        if (l == null)
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "missing edges in response",
          );
        var u = l.map(function (t) {
          var n = t.node;
          if (n != null) return c(e, n);
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "null node in sub_group_suggestions",
          );
        });
        return u;
      } catch (e) {
        return e instanceof o("WAWebBackendErrors").ServerStatusCodeError
          ? Promise.reject(e)
          : Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(e.code),
                e.message,
              ),
            );
      }
    }
    function c(e, t) {
      var n, a, i, l, s, u;
      if (t.is_existing_group == null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing is_existing_group in response",
        );
      if (((u = t.is_existing_group), t.id == null))
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing id in response",
        );
      if (
        ((l = new (r("WAWebWid"))(t.id, {
          intentionallyUsePrivateConstructor: !0,
        })),
        t.creator.id == null)
      )
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          500,
          "missing creator.id in response",
        );
      return (
        (s = new (r("WAWebWid"))(t.creator.id, {
          intentionallyUsePrivateConstructor: !0,
        })),
        {
          id: l,
          parentGroupId: e,
          subject:
            (n = (a = t.subject) == null ? void 0 : a.value) != null ? n : "",
          desc: (i = t.description) == null ? void 0 : i.value,
          owner: s,
          t: parseInt(t.creation_time, 10),
          isExistingGroup: u,
          participantCount: t.total_participants_count,
          hiddenSubgroup: t.hidden_group,
        }
      );
    }
    l.mexFetchSubgroupSuggestions = u;
  },
  98,
);
