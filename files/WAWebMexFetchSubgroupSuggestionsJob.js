__d(
  "WAWebMexFetchSubgroupSuggestionsJob",
  [
    "Promise",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchSubgroupSuggestionsJobQuery.graphql",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchSubgroupSuggestionsJobQuery.graphql"));
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = {
            group_id: e.toString(),
            query_context: r,
            sub_group_hint_id: t.toString(),
          };
          try {
            var i,
              l = yield o("WAWebMexClient").fetchQuery(u, a),
              c =
                (i = l.xwa2_group_query_by_id) == null ||
                (i = i.sub_group_suggestions) == null
                  ? void 0
                  : i.edges;
            if (c == null)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "missing edges in response",
              );
            var d = c.map(function (t) {
              var n = t.node;
              if (n != null) return m(e, n);
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                500,
                "null node in sub_group_suggestions",
              );
            });
            return d;
          } catch (e) {
            return e instanceof o("WAWebBackendErrors").ServerStatusCodeError
              ? (s || (s = n("Promise"))).reject(e)
              : (s || (s = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(e.code),
                    e.message,
                  ),
                );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
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
    l.mexFetchSubgroupSuggestions = c;
  },
  98,
);
