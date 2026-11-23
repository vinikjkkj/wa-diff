__d(
  "WAWebOrgAdminGraphQL",
  [
    "WALogger",
    "WAWebGraphQLServerError",
    "WAWebOrgAdminGraphQLAddChannelMutation.graphql",
    "WAWebOrgAdminGraphQLAddGroupMutation.graphql",
    "WAWebOrgAdminGraphQLAdminRosterQuery.graphql",
    "WAWebOrgAdminGraphQLApplyAdminRosterChangesMutation.graphql",
    "WAWebOrgAdminGraphQLDirectoryPageQuery.graphql",
    "WAWebOrgAdminGraphQLEventRsvpCountsQuery.graphql",
    "WAWebOrgAdminGraphQLGroupQuery.graphql",
    "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
    "WAWebOrgAdminGraphQLLeaveMutation.graphql",
    "WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedEventsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
    "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
    "WAWebOrgAdminGraphQLOrgsQuery.graphql",
    "WAWebOrgAdminGraphQLRemoveMemberMutation.graphql",
    "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
    "WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql",
    "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
    "WAWebOrgAdminGraphQLUpdateOrgMutation.graphql",
    "WAWebOrgMemberDisplayName",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $ = e !== void 0 ? e : (e = n("WAWebOrgAdminGraphQLOrgsQuery.graphql")),
      P =
        s !== void 0
          ? s
          : (s = n("WAWebOrgAdminGraphQLUpdateOrgMutation.graphql")),
      N =
        u !== void 0
          ? u
          : (u = n("WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql")),
      M =
        c !== void 0 ? c : (c = n("WAWebOrgAdminGraphQLLeaveMutation.graphql")),
      w =
        d !== void 0
          ? d
          : (d = n("WAWebOrgAdminGraphQLRemoveMemberMutation.graphql")),
      A =
        m !== void 0
          ? m
          : (m = n("WAWebOrgAdminGraphQLAdminRosterQuery.graphql")),
      F =
        p !== void 0
          ? p
          : (p = n(
              "WAWebOrgAdminGraphQLApplyAdminRosterChangesMutation.graphql",
            )),
      O =
        _ !== void 0
          ? _
          : (_ = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      B =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      W =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql")),
      q =
        h !== void 0
          ? h
          : (h = n("WAWebOrgAdminGraphQLManagedEventsQuery.graphql")),
      U =
        y !== void 0
          ? y
          : (y = n("WAWebOrgAdminGraphQLEventRsvpCountsQuery.graphql")),
      V =
        C !== void 0
          ? C
          : (C = n("WAWebOrgAdminGraphQLDirectoryPageQuery.graphql")),
      H =
        b !== void 0
          ? b
          : (b = n("WAWebOrgAdminGraphQLMemberSearchQuery.graphql")),
      G = v !== void 0 ? v : (v = n("WAWebOrgAdminGraphQLGroupQuery.graphql")),
      z =
        S !== void 0
          ? S
          : (S = n("WAWebOrgAdminGraphQLAddGroupMutation.graphql")),
      j =
        R !== void 0
          ? R
          : (R = n("WAWebOrgAdminGraphQLAddChannelMutation.graphql")),
      K =
        L !== void 0
          ? L
          : (L = n("WAWebOrgAdminGraphQLInviteMembersMutation.graphql")),
      Q =
        E !== void 0
          ? E
          : (E = n(
              "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
            )),
      X =
        k !== void 0
          ? k
          : (k = n(
              "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
            )),
      Y = { environmentType: "whatsapp_web" },
      J = "web_org_group_email_invite",
      Z = 5e3,
      ee = 25;
    async function te() {
      var e = await o("WAWebRelayClient").fetchQuery(
          $,
          {},
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        t = e == null ? void 0 : e.xwa_org_list;
      if (t == null) throw xe(null);
      var n = t.orgs.flatMap(Ne);
      if (n.length !== t.orgs.length) throw De("xwa_org_list", Le);
      return (Ie("xwa_org_list", "orgs=" + n.length), n);
    }
    async function ne(e, t) {
      var n = {
          description: t.description,
          icon_blob: t.iconBlob,
          member_tag_name: t.memberTagName,
          member_tag_options: t.memberTagOptions,
          org_id: e,
          secondary_member_tag_name: t.secondaryMemberTagName,
        },
        r = await o("WAWebRelayClient").commitMutation(P, { input: n }, Y),
        a = r == null ? void 0 : r.xwa_org_update,
        i = a == null ? void 0 : a.org;
      if (a == null || a.status !== "SUCCESS" || i == null)
        throw xe(a == null ? void 0 : a.error_reason);
      var l = Me(i);
      if (l == null || l.id !== e) throw xe(Le);
      return (Ie("xwa_org_update", "", "id=" + l.id), l);
    }
    async function re(e) {
      var t,
        n = await o("WAWebRelayClient").fetchQuery(
          A,
          { orgID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        a = n == null ? void 0 : n.xwa_org_get,
        i = a == null || (t = a.org_info) == null ? void 0 : t.admin_roster;
      if (a == null || a.status !== "SUCCESS" || i == null) {
        var l;
        throw r("err")(
          (l = a == null ? void 0 : a.error_reason) != null
            ? l
            : "NOT_FOUND_OR_UNAVAILABLE",
        );
      }
      var s = we(i, a.org_info),
        u = i.version;
      if (s == null || !Oe(u)) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
      return babelHelpers.extends({}, s, { version: u });
    }
    async function oe(e, t, n, a) {
      var i,
        l = await o("WAWebRelayClient").commitMutation(
          F,
          {
            input: {
              adds: n.map(We),
              changes: a.map(qe),
              expected_version: t,
              org_id: e,
            },
          },
          Y,
        ),
        s = l == null ? void 0 : l.xwa_org_admin_roster_apply_changes;
      if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
      if (s.status === "SUCCESS")
        return {
          addedEntryIDs: s.added_entry_ids,
          status: "success",
          version: s.version,
        };
      var u = (i = s.error_reason) != null ? i : "NOT_FOUND_OR_UNAVAILABLE";
      if (u === "STALE_ROSTER_VERSION") return { status: "stale" };
      if (!Be(u)) throw r("err")(u);
      return {
        errorReason: u,
        invalidChange: Ue(s.invalid_change),
        status: "validation_error",
      };
    }
    async function ae(e, t) {
      var n = await ie(e, t),
        o = (n == null ? void 0 : n.status) === "stale" ? await ie(e, t) : n;
      if (o != null && o.status !== "success")
        throw r("err")(
          o.status === "stale" ? "STALE_ROSTER_VERSION" : o.errorReason,
        );
    }
    async function ie(e, t) {
      var n = await re(e),
        o = n.version;
      if (n.isTruncated || o == null)
        throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
      var a = new Set(t),
        i = n.entries.flatMap(function (e) {
          return a.has(e.id) ? [{ entry: e, type: "remove" }] : [];
        });
      return i.length === 0 ? null : await oe(e, o, [], i);
    }
    async function le(e, t, n) {
      var a,
        i = await o("WAWebRelayClient").commitMutation(
          N,
          { input: { member_lid: t, org_id: e, role: n } },
          Y,
        ),
        l = i == null ? void 0 : i.xwa_org_member_set_role;
      if (l == null || l.status !== "SUCCESS") {
        var s;
        throw r("err")(
          (s = l == null ? void 0 : l.error_reason) != null
            ? s
            : "NOT_FOUND_OR_UNAVAILABLE",
        );
      }
      var u = l.org,
        c =
          u != null && u.id === e
            ? (a = u.members) == null
              ? void 0
              : a.count
            : null;
      return c != null
        ? { memberCount: c, status: "success" }
        : { status: "success_needs_refresh" };
    }
    async function se(e, t) {
      var n,
        a = await o("WAWebRelayClient").commitMutation(
          w,
          { input: { member_lid: t, org_id: e } },
          Y,
        ),
        i = a == null ? void 0 : a.xwa_org_member_remove;
      if (i == null || i.status !== "SUCCESS") {
        var l;
        throw r("err")(
          (l = i == null ? void 0 : i.error_reason) != null
            ? l
            : "NOT_FOUND_OR_UNAVAILABLE",
        );
      }
      var s = i.org,
        u =
          s != null && s.id === e
            ? (n = s.members) == null
              ? void 0
              : n.count
            : null;
      return u != null
        ? { memberCount: u, status: "success" }
        : { status: "success_needs_refresh" };
    }
    async function ue(e) {
      var t = await o("WAWebRelayClient").commitMutation(M, { orgID: e }, Y),
        n = t == null ? void 0 : t.xwa_org_leave;
      if (n == null || n.status !== "SUCCESS")
        throw De("xwa_org_leave", n == null ? void 0 : n.error_reason);
      Ie("xwa_org_leave", "", "id=" + e);
    }
    async function ce(e, t, n, r) {
      var a,
        i,
        l,
        s,
        u = await o("WAWebRelayClient").fetchQuery(
          H,
          { after: r, first: ee, memberTag: n, orgID: e, query: t.trim() },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        c = u == null ? void 0 : u.xwa_org_member_search;
      if (c == null) throw De("xwa_org_member_search", null);
      var d = c.page_info;
      return (
        Ie("xwa_org_member_search", "count=" + ((a = c.count) != null ? a : 0)),
        {
          count: (i = c.count) != null ? i : 0,
          endCursor: (l = d == null ? void 0 : d.end_cursor) != null ? l : null,
          hasNextPage:
            (s = d == null ? void 0 : d.has_next_page) != null ? s : !1,
          members: c.nodes.flatMap(function (e) {
            var t = e.member;
            return t == null
              ? []
              : je(
                  t.lid,
                  t.display_name,
                  t.display_last_name,
                  t.role,
                  t.username,
                  t.member_tag,
                  t.phone_number,
                );
          }),
        }
      );
    }
    async function de(e) {
      var t,
        n = await o("WAWebRelayClient").fetchQuery(
          B,
          { orgID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        r = n == null ? void 0 : n.xwa_org_get,
        a =
          r == null ||
          (t = r.org_info) == null ||
          (t = t.managed_channels) == null
            ? void 0
            : t.nodes;
      if (a == null) throw xe(r == null ? void 0 : r.error_reason);
      return (
        Ie("xwa_org_get.managed_channels", "channels=" + a.length),
        a.flatMap(function (e) {
          var t;
          return Ve(
            e.id,
            e.name,
            e.description,
            e.invite_code,
            (t = e.picture) == null ? void 0 : t.uri,
            e.follower_count,
            e.creation_timestamp_s,
          );
        })
      );
    }
    async function me(e, t) {
      var n,
        r,
        a = await o("WAWebRelayClient").fetchQuery(
          W,
          { channelID: t, orgID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        i = a == null ? void 0 : a.xwa_org_get,
        l = i == null || (n = i.org_info) == null ? void 0 : n.managed_channel;
      if (l == null) throw xe(i == null ? void 0 : i.error_reason);
      Ie("xwa_org_get.managed_channel", "", "id=" + t);
      var s = l.admins;
      return s == null
        ? null
        : {
            members: s.members.flatMap(function (e) {
              var t = e.lid,
                n = e.role;
              return t == null || n == null ? [] : [{ lid: t, role: n }];
            }),
            outsideOrganizationCount:
              (r = s.outside_organization_count) != null ? r : 0,
          };
    }
    async function pe(e) {
      var t,
        n = await o("WAWebRelayClient").fetchQuery(
          q,
          { orgID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        r = n == null ? void 0 : n.xwa_org_get,
        a =
          r == null ||
          (t = r.org_info) == null ||
          (t = t.managed_events) == null
            ? void 0
            : t.nodes;
      if (a == null) throw xe(r == null ? void 0 : r.error_reason);
      return (
        Ie("xwa_org_get.managed_events", "events=" + a.length),
        a.flatMap(function (e) {
          var t = e.end_timestamp_s,
            n = e.id,
            r = e.name,
            o = e.start_timestamp_s,
            a = e.status;
          return n == null || r == null || a == null || o == null
            ? []
            : [
                {
                  endTsSec: t != null ? t : null,
                  id: n,
                  name: r,
                  startTsSec: o,
                  status: a,
                },
              ];
        })
      );
    }
    async function _e(e) {
      var t,
        n,
        r,
        a,
        i = await o("WAWebRelayClient").fetchQuery(
          U,
          { eventID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        l =
          i == null ||
          (t = i.xwa_event_get) == null ||
          (t = t.privacy_aware_invitation) == null
            ? void 0
            : t.count_by_rsvp_status;
      return l == null
        ? null
        : {
            going: (n = l.going) != null ? n : 0,
            maybe: (r = l.maybe) != null ? r : 0,
            noResponse: (a = l.no_response) != null ? a : 0,
          };
    }
    async function fe(e, t) {
      var n, r, a;
      if (t != null && t > Z)
        return { memberCount: t, status: "roster_too_large" };
      var i = await o("WAWebRelayClient").fetchQuery(
          V,
          { first: Z, orgID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        l = i == null ? void 0 : i.xwa_org_get;
      if (l == null || l.status !== "SUCCESS")
        throw xe(l == null ? void 0 : l.error_reason);
      var s = (n = l.org_info) == null ? void 0 : n.members;
      if (s == null) throw xe(Ee);
      var u = s.page_info;
      if (u == null || u.has_next_page == null) throw De("xwa_org_get", Le);
      var c = s.count;
      if (c == null || (u.has_next_page && c <= Z)) throw De("xwa_org_get", Le);
      if (c > Z) return { memberCount: c, status: "roster_too_large" };
      var d = s.nodes.flatMap(function (e) {
          return je(
            e.lid,
            e.display_name,
            e.display_last_name,
            e.role,
            e.username,
            e.member_tag,
            e.phone_number,
          );
        }),
        m = new Set(
          d.map(function (e) {
            return e.lid;
          }),
        ).size;
      if (d.length !== s.nodes.length || m !== d.length || d.length !== c)
        throw De("xwa_org_get", Le);
      return {
        memberCount: c,
        memberUpdatedTsUsec:
          (r =
            (a = l.org_info) == null ? void 0 : a.org_member_updated_ts_usec) !=
          null
            ? r
            : null,
        members: d,
        status: "success",
      };
    }
    async function ge(e) {
      var t,
        n = await o("WAWebRelayClient").fetchQuery(
          O,
          { orgID: e },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        r = n == null ? void 0 : n.xwa_org_get,
        a =
          r == null ||
          (t = r.org_info) == null ||
          (t = t.managed_groups) == null
            ? void 0
            : t.nodes;
      if (a == null) throw xe(r == null ? void 0 : r.error_reason);
      var i = a.flatMap(function (e) {
        var t;
        return Ge(
          e.gid,
          e.subject,
          e.creation_timestamp_s,
          e.participant_count,
          ((t = e.participants) != null ? t : []).flatMap(function (e) {
            return Ke(e.lid, e.role);
          }),
          e.roster_partial,
        );
      });
      return (Ie("xwa_org_get.managed_groups", "groups=" + i.length), i);
    }
    async function he(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = await o("WAWebRelayClient").fetchQuery(
          G,
          { orgID: e, gid: t },
          babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
        ),
        u = s == null ? void 0 : s.xwa_org_get,
        c = u == null || (n = u.org_info) == null ? void 0 : n.managed_group;
      if (c == null) throw xe(u == null ? void 0 : u.error_reason);
      var d = ze(
        c.gid,
        c.subject,
        c.creation_timestamp_s,
        c.participant_count,
        ((r = c.participants) != null ? r : []).flatMap(function (e) {
          return Ke(e.lid, e.role);
        }),
        c.roster_partial,
      );
      if (d == null) throw xe(null);
      return (
        Ie("xwa_org_get.managed_group", "", "gid=" + d.gid),
        babelHelpers.extends({}, d, {
          description: (a = c.description) != null ? a : null,
          pictureURI:
            (i = (l = c.picture) == null ? void 0 : l.uri) != null ? i : null,
        })
      );
    }
    async function ye(e, t) {
      var n = await o("WAWebRelayClient").commitMutation(
          z,
          { orgID: e, gid: t },
          Y,
        ),
        r = n == null ? void 0 : n.xwa_org_managed_group_add;
      if (r == null || r.status !== "SUCCESS")
        throw xe(r == null ? void 0 : r.error_reason);
      var a = r.group;
      if (a == null) throw xe(null);
      var i = ze(a.gid, a.subject, a.creation_timestamp_s, a.participant_count);
      if (i == null) throw xe(null);
      return (Ie("xwa_org_managed_group_add", "", "gid=" + i.gid), i);
    }
    async function Ce(e, t) {
      var n,
        r = await o("WAWebRelayClient").commitMutation(
          j,
          { channelID: t, orgID: e },
          Y,
        ),
        a = r == null ? void 0 : r.xwa_org_managed_channel_add;
      if (a == null || a.status !== "SUCCESS")
        throw xe(a == null ? void 0 : a.error_reason);
      var i = a.channel;
      if (i == null) throw xe(null);
      var l = He(
        i.id,
        i.name,
        i.description,
        i.invite_code,
        (n = i.picture) == null ? void 0 : n.uri,
        i.follower_count,
        i.creation_timestamp_s,
      );
      if (l == null) throw xe(null);
      return (Ie("xwa_org_managed_channel_add", "", "id=" + l.id), l);
    }
    async function be(e, t, n) {
      n === void 0 && (n = !1);
      var r = await o("WAWebRelayClient").commitMutation(
          K,
          { orgID: e, resend: n, rosterEntryIDs: t },
          Y,
        ),
        a = r == null ? void 0 : r.xwa_org_invite_members;
      if ((a == null ? void 0 : a.status) === "SUCCESS")
        return (Ie("xwa_org_invite_members", "entries=" + t.length), "success");
      if ((a == null ? void 0 : a.error_reason) === "INVALID_EMAIL_BATCH")
        return (
          o("WALogger").WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] xwa_org_invite_members rejected the email batch",
              ])),
          ),
          "invalid_email_batch"
        );
      if ((a == null ? void 0 : a.error_reason) === "STALE_ROSTER_VERSION")
        return (
          o("WALogger").WARN(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] xwa_org_invite_members refused a stale roster",
              ])),
          ),
          "stale_roster"
        );
      throw xe(a == null ? void 0 : a.error_reason);
    }
    async function ve(e, t, n) {
      var r = await o("WAWebRelayClient").commitMutation(
          Q,
          { gid: t, orgID: e, rosterEntryIDs: n, utmCampaign: J },
          Y,
        ),
        a = r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
      if ((a == null ? void 0 : a.status) !== "SUCCESS")
        throw De(
          "xwa_org_managed_group_send_email_invites",
          a == null ? void 0 : a.error_reason,
        );
      return (
        Ie("xwa_org_managed_group_send_email_invites", "emails=" + n.length),
        n.filter(function (e, t) {
          var n;
          return ((n = a.results[t]) == null ? void 0 : n.status) !== "SENT";
        })
      );
    }
    async function Se(e, t) {
      var n = await o("WAWebRelayClient").commitMutation(
          X,
          {
            createGroupsPlan: t.groups.map(function (e) {
              return {
                announcement: e.announcement,
                locked: e.locked,
                member_add_mode: e.memberAddMode,
                membership_approval: e.membershipApproval,
                participant_roster_entry_ids: e.participantRosterEntryIDs,
                subject: e.subject,
              };
            }),
            operation: t.operation,
            orgID: e,
          },
          Y,
        ),
        r = n == null ? void 0 : n.xwa_org_bulk_group_request_submit,
        a = r == null ? void 0 : r.request_id,
        i = r == null ? void 0 : r.error_reason;
      if ((r == null ? void 0 : r.status) === "SUCCESS") {
        if (a == null) throw xe(Le);
        return (
          Ie("xwa_org_bulk_group_request_submit", "id=" + a),
          { requestID: a, status: "accepted" }
        );
      }
      if (i === "BULK_GROUP_REQUEST_ALREADY_ACTIVE" && a != null)
        return { requestID: a, status: "already_active" };
      if (i === "INVALID_BULK_GROUP_PLAN" || i === "INVALID_ROSTER_ENTRY") {
        var l;
        return {
          errorReason: i,
          invalidGroupNumber:
            (l = r == null ? void 0 : r.invalid_group_index) != null ? l : null,
          status: "validation_error",
        };
      }
      throw xe(i);
    }
    var Re = "NOT_FOUND_OR_UNAVAILABLE",
      Le = "MALFORMED_SUCCESS_RESPONSE",
      Ee = "MISSING_MEMBERS_CONNECTION",
      ke = new WeakSet();
    function Ie(e, t, n) {
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      ),
        n != null);
    }
    function Te(e, t) {
      var n = t != null ? t : Re;
      return (
        o("WALogger")
          .ERROR(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] ",
                " failed: ",
                "",
              ])),
            e,
            n,
          )
          .sendLogs("org-admin-request-failed"),
        n
      );
    }
    function De(e, t) {
      return $e(Te(e, t));
    }
    function xe(e) {
      return $e(e != null ? e : Re);
    }
    function $e(e) {
      var t = r("err")(e);
      return (ke.add(t), t);
    }
    function Pe(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && ke.has(e)
          ? e.message
          : "non_server_error";
    }
    function Ne(e) {
      var t = Me(e);
      return t == null ? [] : [t];
    }
    function Me(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = e.id,
        _ = e.name;
      return p == null || _ == null
        ? null
        : {
            description: (t = e.description) != null ? t : null,
            iconHandle:
              (n = (r = e.icon_small) == null ? void 0 : r.handle) != null
                ? n
                : null,
            iconLargeURI:
              (o = (a = e.icon_large) == null ? void 0 : a.uri) != null
                ? o
                : null,
            iconURI:
              (i = (l = e.icon_small) == null ? void 0 : l.uri) != null
                ? i
                : null,
            id: p,
            isMemberDirectoryEnabled: e.is_member_directory_enabled === !0,
            memberCount: (s = e.members) == null ? void 0 : s.count,
            memberTagOptions: (u = e.member_tag_options) != null ? u : [],
            memberUpdatedTsUsec:
              (c = e.org_member_updated_ts_usec) != null ? c : null,
            name: _,
            orgUpdatedTsUsec: (d = e.org_updated_ts_usec) != null ? d : null,
            viewerRole: (m = e.viewer_role) != null ? m : null,
          };
    }
    function we(e, t) {
      var n = e.entries;
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        if (o == null) return null;
        var a = Fe(
          o.id,
          o.name,
          o.last_name,
          o.member_tag,
          o.email_address,
          o.phone_number,
          o.member_lid,
          o.secondary_member_tag,
          o.status,
          o.invite_expiry,
        );
        if (a == null) return null;
        r.push(a);
      }
      var i = e.is_truncated,
        l = e.total_count;
      return typeof i != "boolean" || (l != null && typeof l != "number")
        ? null
        : babelHelpers.extends({}, Ae(t), {
            entries: r,
            isTruncated: i,
            totalCount: l != null ? l : i ? null : r.length,
          });
    }
    function Ae(e) {
      var t, n;
      return {
        memberTagName:
          (t = e == null ? void 0 : e.member_tag_name) != null ? t : null,
        secondaryMemberTagName:
          (n = e == null ? void 0 : e.secondary_member_tag_name) != null
            ? n
            : null,
      };
    }
    function Fe(e, t, n, r, o, a, i, l, s, u) {
      return typeof e != "string" ||
        typeof t != "string" ||
        ![n, r, o, a, i, l].every(Oe) ||
        (u != null && typeof u != "number")
        ? null
        : {
            emailAddress: o,
            id: e,
            inviteExpiry: u,
            lastName: n,
            memberLID: i,
            memberTag: r,
            name: t,
            phoneNumber: a,
            secondaryMemberTag: l,
            status: s,
          };
    }
    function Oe(e) {
      return e == null || typeof e == "string";
    }
    function Be(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES" ||
        e === "DUPLICATE_EMAIL"
      );
    }
    function We(e) {
      var t, n;
      return {
        email_address: (t = e.emailAddress) != null ? t : "",
        last_name: e.lastName,
        member_tag: e.memberTag,
        name: e.name,
        phone_number: (n = e.phoneNumber) != null ? n : "",
        secondary_member_tag: e.secondaryMemberTag,
      };
    }
    function qe(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "remove" &&
          "entry" in e
        ) {
          var t,
            n = e.entry;
          return {
            entry_id: n.id,
            remove: { email_address: (t = n.emailAddress) != null ? t : "" },
          };
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "update" &&
          "update" in e
        ) {
          var r = e.update;
          return {
            entry_id: r.id,
            update: {
              last_name: r.lastName,
              member_tag: r.memberTag,
              name: r.name,
              phone_number: r.phoneNumber,
              secondary_member_tag: r.secondaryMemberTag,
            },
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function Ue(e) {
      var t = e == null ? void 0 : e.index,
        n = e == null ? void 0 : e.kind;
      return t == null || n == null ? null : { index: t, kind: n };
    }
    function Ve(e, t, n, r, o, a, i) {
      var l = He(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function He(e, t, n, r, o, a, i) {
      return e == null || t == null
        ? null
        : {
            creationTimestampS: i != null ? i : null,
            description: n != null ? n : null,
            followerCount: a != null ? a : null,
            id: e,
            inviteCode: r != null ? r : null,
            name: t,
            pictureURI: o != null ? o : null,
          };
    }
    function Ge(e, t, n, r, o, a) {
      var i = ze(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function ze(e, t, n, r, o, a) {
      if (e == null || t == null || n == null || r == null) return null;
      var i = {
        gid: e,
        subject: t,
        creationTimestampS: n,
        participantCount: r,
      };
      if (o == null)
        return a === void 0
          ? i
          : babelHelpers.extends({}, i, { rosterPartial: a });
      var l = babelHelpers.extends({}, i, { participants: o });
      return a === void 0
        ? l
        : babelHelpers.extends({}, l, { rosterPartial: a });
    }
    function je(e, t, n, r, a, i, l) {
      if (e == null || e === "" || t == null || r == null) return [];
      var s = t === e ? "" : t;
      return [
        {
          displayName: o("WAWebOrgMemberDisplayName").getOrgMemberFullName(
            s,
            n,
          ),
          firstName: s,
          lastName: n != null ? n : null,
          lid: e,
          memberTag: i,
          phoneNumber: l,
          role: r,
          username: a,
        },
      ];
    }
    function Ke(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = Z),
      (l.loadOrgAdminOrgs = te),
      (l.updateOrgAdminSettings = ne),
      (l.loadOrgAdminRoster = re),
      (l.applyOrgAdminRosterChanges = oe),
      (l.removeOrgAdminRosterEntries = ae),
      (l.setOrgAdminMemberRole = le),
      (l.removeOrgAdminMember = se),
      (l.leaveOrg = ue),
      (l.loadOrgAdminMemberSearchPage = ce),
      (l.loadOrgAdminChannels = de),
      (l.loadOrgAdminChannelAdmins = me),
      (l.loadOrgAdminEvents = pe),
      (l.loadOrgAdminEventRsvpCounts = _e),
      (l.loadOrgAdminDirectory = fe),
      (l.loadOrgAdminManagedGroups = ge),
      (l.loadOrgAdminGroup = he),
      (l.addOrgManagedGroup = ye),
      (l.addOrgManagedChannel = Ce),
      (l.inviteOrgMembers = be),
      (l.sendOrgManagedGroupEmailInvites = ve),
      (l.submitOrgBulkGroupRequest = Se),
      (l.getOrgAdminServerFailureReason = Pe));
  },
  98,
);
