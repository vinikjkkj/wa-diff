__d(
  "WAWebMexFetchLinkedGroupInfoJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchLinkedGroupInfoJobQuery.graphql",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "SUSPENDED",
      c = 500,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchLinkedGroupInfoJobQuery.graphql"));
    async function m(e) {
      var t = e.anyJoinedSubgroupId,
        n = e.subgroupId,
        r = await o("WAWebMexClient").fetchQuery(d, {
          group_jid: o("WAWebWidToJid").widToGroupJid(n),
          sub_group_jid_hint:
            t != null ? o("WAWebWidToJid").widToGroupJid(t) : null,
          include_username: o(
            "WAWebUsernameGatingUtils",
          ).usernameDisplayedEnabled(),
        }),
        a = r.xwa2_group_query_by_id;
      if (a == null)
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][GROUP] linked group info has no group",
                ])),
            )
            .tags("GQL", "MEX")
            .sendLogs("mex-group-linked-info-no-group"),
          new (o("WAWebBackendErrors").ServerStatusCodeError)(c)
        );
      return p(a);
    }
    function p(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p = e.creator,
        f = e.description,
        g = e.properties,
        h = e.subject;
      return {
        id: o("WAWebWidFactory").createWid(e.id),
        owner:
          (p == null ? void 0 : p.id) != null
            ? o("WAWebWidFactory").createWid(p.id)
            : void 0,
        creatorPn:
          (p == null ? void 0 : p.pn) != null
            ? o("WAWebWidFactory").createWid(p.pn)
            : void 0,
        creatorUsername:
          p == null || (t = p.username_info) == null ? void 0 : t.username,
        creation: Number(e.creation_time),
        subject: (n = h == null ? void 0 : h.value) != null ? n : void 0,
        subjectTime:
          (h == null ? void 0 : h.creation_time) != null
            ? Number(h.creation_time)
            : null,
        subjectOwner:
          (h == null || (r = h.creator) == null ? void 0 : r.id) != null
            ? o("WAWebWidFactory").createWid(h.creator.id)
            : void 0,
        subjectOwnerPn:
          (h == null || (a = h.creator) == null ? void 0 : a.pn) != null
            ? o("WAWebWidFactory").createWid(h.creator.pn)
            : void 0,
        subjectOwnerUsername:
          h == null || (i = h.creator) == null || (i = i.username_info) == null
            ? void 0
            : i.username,
        desc: (l = f == null ? void 0 : f.value) != null ? l : void 0,
        descId: (s = f == null ? void 0 : f.id) != null ? s : void 0,
        descOwner:
          (f == null || (c = f.creator) == null ? void 0 : c.id) != null
            ? o("WAWebWidFactory").createWid(f.creator.id)
            : void 0,
        descOwnerPn:
          (f == null || (d = f.creator) == null ? void 0 : d.pn) != null
            ? o("WAWebWidFactory").createWid(f.creator.pn)
            : void 0,
        descOwnerUsername:
          f == null || (m = f.creator) == null || (m = m.username_info) == null
            ? void 0
            : m.username,
        descTime:
          (f == null ? void 0 : f.creation_time) != null
            ? Number(f.creation_time)
            : void 0,
        participants: _(e.participants.edges),
        size: e.total_participants_count,
        adminRequestRequired:
          (g == null ? void 0 : g.admin_request_required) === !0,
        membershipApprovalRequest: e.membership_approval_request === !0,
        membershipApprovalMode:
          (g == null ? void 0 : g.membership_approval_mode_enabled) === !0,
        suspended: e.state === u,
        hiddenSubgroup: (g == null ? void 0 : g.hidden_group) === !0,
      };
    }
    function _(e) {
      return e.map(function (e) {
        var t,
          n,
          r = e.join_time,
          a = e.node,
          i = e.role;
        if (a.id == null)
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            c,
            "missing id in linked group participant",
          );
        return {
          id: o("WAWebWidFactory").createWid(a.id),
          lid: a.lid != null ? o("WAWebWidFactory").createWid(a.lid) : void 0,
          phoneNumber:
            a.pn != null ? o("WAWebWidFactory").createWid(a.pn) : void 0,
          displayName: (t = a.display_name) != null ? t : void 0,
          username: (n = a.username_info) == null ? void 0 : n.username,
          isAdmin: i === "ADMIN_MEMBER" || i === "SUPERADMIN_MEMBER",
          isSuperAdmin: i === "SUPERADMIN_MEMBER",
          joinTime: r != null ? r : void 0,
        };
      });
    }
    l.mexFetchLinkedGroupInfoJob = m;
  },
  98,
);
