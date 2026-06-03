__d(
  "WAWebMexFetchAllSubgroupsJob",
  [
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchAllSubgroupsJobQuery.graphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebMexFetchAllSubgroupsJobQuery.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i = {
              group_id: e.toString(),
              query_context: n,
              sub_group_hint_id: t == null ? void 0 : t.toString(),
            },
            l = yield o("WAWebMexClient").fetchQuery(s, i),
            u =
              (r = l.xwa2_group_query_by_id) == null
                ? void 0
                : r.default_sub_group;
          if (u == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing announcement group in response",
            );
          var c = [d(e, u, !0)],
            m =
              (a = l.xwa2_group_query_by_id) == null ||
              (a = a.sub_groups) == null
                ? void 0
                : a.edges;
          if (m == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "missing edges in response",
            );
          return (
            m.forEach(function (t) {
              var n = t != null ? t : {},
                r = n.node;
              if (r == null)
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  500,
                  "null node in sub_group_suggestions",
                );
              c.push(d(e, r));
            }),
            c
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      var r, a, i, l;
      n === void 0 && (n = !1);
      var s = t.id,
        u = t.membership_approval_requests,
        c = t.properties,
        d = t.subject,
        m = d.creation_time,
        p = d.value;
      return {
        id: o("WAWebWidFactory").createWid(s),
        parentGroupId: e,
        subject: p,
        subjectTime: o("WATimeUtils").castToUnixTime(Number(m)),
        defaultSubgroup: n,
        generalSubgroup:
          (r = c == null ? void 0 : c.general_chat) != null ? r : !1,
        hiddenSubgroup:
          (a = c == null ? void 0 : c.hidden_group) != null ? a : !1,
        membershipApprovalMode:
          (i = c == null ? void 0 : c.membership_approval_mode_enabled) != null
            ? i
            : !1,
        membershipApprovalRequest:
          ((l = u == null ? void 0 : u.total_count) != null ? l : 0) > 0,
      };
    }
    l.mexFetchAllSubgroups = u;
  },
  98,
);
