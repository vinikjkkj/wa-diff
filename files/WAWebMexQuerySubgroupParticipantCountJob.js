__d(
  "WAWebMexQuerySubgroupParticipantCountJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexQuerySubgroupParticipantCountJobQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexQuerySubgroupParticipantCountJobQuery.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = {
              input: {
                group_jid: e.toString(),
                query_context: n,
                sub_group_jid_hint: t == null ? void 0 : t.toString(),
              },
            },
            i = yield o("WAWebMexClient").fetchQuery(s, a),
            l = [],
            u =
              (r = i.xwa2_group_query_by_id) == null ||
              (r = r.sub_groups) == null
                ? void 0
                : r.edges;
          if (u == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing edges in response of WAWebMexQuerySubgroupParticipantCountJob",
            );
          return (
            u.forEach(function (e) {
              var t = e != null ? e : {},
                n = t.node;
              if (n == null)
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  500,
                  "null node in WAWebMexQuerySubgroupParticipantCountJob",
                );
              l.push({
                id: o("WAWebWidFactory").createWid(n.id),
                participantCount: n.total_participants_count,
              });
            }),
            l
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.mexQuerySubgroupParticipantCountJob = u;
  },
  98,
);
