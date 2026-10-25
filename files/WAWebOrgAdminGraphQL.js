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
    "WAWebOrgAdminGraphQLGroupQuery.graphql",
    "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
    "WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
    "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
    "WAWebOrgAdminGraphQLOrgsQuery.graphql",
    "WAWebOrgAdminGraphQLRemoveMemberMutation.graphql",
    "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
    "WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql",
    "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
    "WAWebOrgAdminGraphQLUpdateOrgMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
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
      I = e !== void 0 ? e : (e = n("WAWebOrgAdminGraphQLOrgsQuery.graphql")),
      T =
        s !== void 0
          ? s
          : (s = n("WAWebOrgAdminGraphQLUpdateOrgMutation.graphql")),
      D =
        u !== void 0
          ? u
          : (u = n("WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql")),
      x =
        c !== void 0
          ? c
          : (c = n("WAWebOrgAdminGraphQLRemoveMemberMutation.graphql")),
      $ =
        d !== void 0
          ? d
          : (d = n("WAWebOrgAdminGraphQLAdminRosterQuery.graphql")),
      P =
        m !== void 0
          ? m
          : (m = n(
              "WAWebOrgAdminGraphQLApplyAdminRosterChangesMutation.graphql",
            )),
      N =
        p !== void 0
          ? p
          : (p = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      M =
        _ !== void 0
          ? _
          : (_ = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      w =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql")),
      A =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLDirectoryPageQuery.graphql")),
      F =
        h !== void 0
          ? h
          : (h = n("WAWebOrgAdminGraphQLMemberSearchQuery.graphql")),
      O = y !== void 0 ? y : (y = n("WAWebOrgAdminGraphQLGroupQuery.graphql")),
      B =
        C !== void 0
          ? C
          : (C = n("WAWebOrgAdminGraphQLAddGroupMutation.graphql")),
      W =
        b !== void 0
          ? b
          : (b = n("WAWebOrgAdminGraphQLAddChannelMutation.graphql")),
      q =
        v !== void 0
          ? v
          : (v = n("WAWebOrgAdminGraphQLInviteMembersMutation.graphql")),
      U =
        S !== void 0
          ? S
          : (S = n(
              "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
            )),
      V =
        R !== void 0
          ? R
          : (R = n(
              "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
            )),
      H = { environmentType: "whatsapp_web" },
      G = 5e3,
      z = 25;
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              I,
              {},
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw Oe(null);
          var n = t.orgs.flatMap(qe);
          if (n.length !== t.orgs.length) throw Fe("xwa_org_list", Pe);
          return (we("xwa_org_list", "orgs=" + n.length), n);
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_name: t.memberTagName,
              member_tag_options: t.memberTagOptions,
              org_id: e,
              secondary_member_tag_name: t.secondaryMemberTagName,
            },
            r = yield o("WAWebRelayClient").commitMutation(T, { input: n }, H),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw Oe(a == null ? void 0 : a.error_reason);
          var l = Ue(i);
          if (l == null || l.id !== e) throw Oe(Pe);
          return (we("xwa_org_update", "id=" + l.id), l);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              $,
              { orgID: e },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
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
          var s = Ve(i, a.org_info),
            u = i.version;
          if (s == null || !ze(u)) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return babelHelpers.extends({}, s, { version: u });
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t, n, r) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("WAWebRelayClient").commitMutation(
                P,
                {
                  input: {
                    adds: n.map(Ke),
                    changes: a.map(Qe),
                    expected_version: t,
                    org_id: e,
                  },
                },
                H,
              ),
              s = l == null ? void 0 : l.xwa_org_admin_roster_apply_changes;
            if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
            if (s.status === "SUCCESS")
              return { status: "success", version: s.version };
            var u =
              (i = s.error_reason) != null ? i : "NOT_FOUND_OR_UNAVAILABLE";
            if (u === "STALE_ROSTER_VERSION") return { status: "stale" };
            if (!je(u)) throw r("err")(u);
            return {
              errorReason: u,
              invalidChange: Xe(s.invalid_change),
              status: "validation_error",
            };
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield re(e, t),
            o =
              (n == null ? void 0 : n.status) === "stale" ? yield re(e, t) : n;
          if (o != null && o.status !== "success")
            throw r("err")(
              o.status === "stale" ? "STALE_ROSTER_VERSION" : o.errorReason,
            );
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield Y(e),
            o = n.version;
          if (n.isTruncated || o == null)
            throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          var a = new Set(t),
            i = n.entries.flatMap(function (e) {
              return a.has(e.id) ? [{ entry: e, type: "remove" }] : [];
            });
          return i.length === 0 ? null : yield Z(e, o, [], i);
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e, t, n) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a,
              i = yield o("WAWebRelayClient").commitMutation(
                D,
                { input: { member_lid: t, org_id: e, role: n } },
                H,
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
          },
        )),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("WAWebRelayClient").commitMutation(
              x,
              { input: { member_lid: t, org_id: e } },
              H,
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
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n, r) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                F,
                { after: r, first: z, memberTag: n, orgID: e, query: t.trim() },
                babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
              ),
              c = u == null ? void 0 : u.xwa_org_member_search;
            if (c == null) throw Fe("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              we(
                "xwa_org_member_search",
                "count=" + ((a = c.count) != null ? a : 0),
              ),
              {
                count: (i = c.count) != null ? i : 0,
                endCursor:
                  (l = d == null ? void 0 : d.end_cursor) != null ? l : null,
                hasNextPage:
                  (s = d == null ? void 0 : d.has_next_page) != null ? s : !1,
                members: c.nodes.flatMap(function (e) {
                  var t = e.member;
                  return t == null
                    ? []
                    : tt(
                        t.lid,
                        t.display_name,
                        t.role,
                        t.username,
                        t.member_tag,
                        t.phone_number,
                      );
                }),
              }
            );
          },
        )),
        ce.apply(this, arguments)
      );
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              M,
              { orgID: e },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_channels) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Oe(r == null ? void 0 : r.error_reason);
          return (
            we("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return Ye(
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
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o("WAWebRelayClient").fetchQuery(
              w,
              { channelID: t, orgID: e },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get,
            l =
              i == null || (n = i.org_info) == null
                ? void 0
                : n.managed_channel;
          if (l == null) throw Oe(i == null ? void 0 : i.error_reason);
          we("xwa_org_get.managed_channel", "id=" + t);
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
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r, a;
          if (t != null && t > G)
            return { memberCount: t, status: "roster_too_large" };
          var i = yield o("WAWebRelayClient").fetchQuery(
              A,
              { first: G, orgID: e },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            l = i == null ? void 0 : i.xwa_org_get;
          if (l == null || l.status !== "SUCCESS")
            throw Oe(l == null ? void 0 : l.error_reason);
          var s = (n = l.org_info) == null ? void 0 : n.members;
          if (s == null) throw Oe(Ne);
          var u = s.page_info;
          if (u == null || u.has_next_page == null) throw Fe("xwa_org_get", Pe);
          var c = s.count;
          if (c == null || (u.has_next_page && c <= G))
            throw Fe("xwa_org_get", Pe);
          if (c > G) return { memberCount: c, status: "roster_too_large" };
          var d = s.nodes.flatMap(function (e) {
              return tt(
                e.lid,
                e.display_name,
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
            throw Fe("xwa_org_get", Pe);
          return {
            memberCount: c,
            memberUpdatedTsUsec:
              (r =
                (a = l.org_info) == null
                  ? void 0
                  : a.org_member_updated_ts_usec) != null
                ? r
                : null,
            members: d,
            status: "success",
          };
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              N,
              { orgID: e },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_groups) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Oe(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return Ze(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return nt(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (we("xwa_org_get.managed_groups", "groups=" + i.length), i);
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e, t) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            s = yield o("WAWebRelayClient").fetchQuery(
              O,
              { orgID: e, gid: t },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            u = s == null ? void 0 : s.xwa_org_get,
            c =
              u == null || (n = u.org_info) == null ? void 0 : n.managed_group;
          if (c == null) throw Oe(u == null ? void 0 : u.error_reason);
          var d = et(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return nt(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw Oe(null);
          return (
            we("xwa_org_get.managed_group", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
        })),
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              B,
              { orgID: e, gid: t },
              H,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw Oe(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw Oe(null);
          var i = et(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw Oe(null);
          return (we("xwa_org_managed_group_add", "gid=" + i.gid), i);
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e, t) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebRelayClient").commitMutation(
              W,
              { channelID: t, orgID: e },
              H,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw Oe(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw Oe(null);
          var l = Je(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
            i.follower_count,
            i.creation_timestamp_s,
          );
          if (l == null) throw Oe(null);
          return (we("xwa_org_managed_channel_add", "id=" + l.id), l);
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              q,
              { orgID: e, emails: t },
              H,
            ),
            r = n == null ? void 0 : n.xwa_org_invite_members;
          if ((r == null ? void 0 : r.status) === "SUCCESS")
            return (
              we("xwa_org_invite_members", "emails=" + t.length),
              "success"
            );
          if ((r == null ? void 0 : r.error_reason) === "INVALID_EMAIL_BATCH")
            return (
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] xwa_org_invite_members rejected the email batch",
                  ])),
              ),
              "invalid_email_batch"
            );
          throw Oe(r == null ? void 0 : r.error_reason);
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRelayClient").commitMutation(
                U,
                { gid: t, orgID: e, rosterEntryIDs: n },
                H,
              ),
              a =
                r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
            if ((a == null ? void 0 : a.status) !== "SUCCESS")
              throw Fe(
                "xwa_org_managed_group_send_email_invites",
                a == null ? void 0 : a.error_reason,
              );
            return (
              we(
                "xwa_org_managed_group_send_email_invites",
                "emails=" + n.length,
              ),
              n.filter(function (e, t) {
                var n;
                return (
                  ((n = a.results[t]) == null ? void 0 : n.status) !== "SENT"
                );
              })
            );
          },
        )),
        Te.apply(this, arguments)
      );
    }
    function De(e, t) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              V,
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
              H,
            ),
            r = n == null ? void 0 : n.xwa_org_bulk_group_request_submit,
            a = r == null ? void 0 : r.request_id,
            i = r == null ? void 0 : r.error_reason;
          if ((r == null ? void 0 : r.status) === "SUCCESS") {
            if (a == null) throw Oe(Pe);
            return (
              we("xwa_org_bulk_group_request_submit", "id=" + a),
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
                (l = r == null ? void 0 : r.invalid_group_index) != null
                  ? l
                  : null,
              status: "validation_error",
            };
          }
          throw Oe(i);
        })),
        xe.apply(this, arguments)
      );
    }
    var $e = "NOT_FOUND_OR_UNAVAILABLE",
      Pe = "MALFORMED_SUCCESS_RESPONSE",
      Ne = "MISSING_MEMBERS_CONNECTION",
      Me = new WeakSet();
    function we(e, t) {
      o("WALogger").LOG(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      );
    }
    function Ae(e, t) {
      var n = t != null ? t : $e;
      return (
        o("WALogger")
          .ERROR(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
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
    function Fe(e, t) {
      return Be(Ae(e, t));
    }
    function Oe(e) {
      return Be(e != null ? e : $e);
    }
    function Be(e) {
      var t = r("err")(e);
      return (Me.add(t), t);
    }
    function We(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && Me.has(e)
          ? e.message
          : "non_server_error";
    }
    function qe(e) {
      var t = Ue(e);
      return t == null ? [] : [t];
    }
    function Ue(e) {
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
    function Ve(e, t) {
      var n = e.entries;
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        if (o == null) return null;
        var a = Ge(
          o.id,
          o.name,
          o.member_tag,
          o.email_address,
          o.phone_number,
          o.member_lid,
          o.secondary_member_tag,
        );
        if (a == null) return null;
        r.push(a);
      }
      var i = e.is_truncated,
        l = e.total_count;
      return typeof i != "boolean" || (l != null && typeof l != "number")
        ? null
        : babelHelpers.extends({}, He(t), {
            entries: r,
            isTruncated: i,
            totalCount: l != null ? l : i ? null : r.length,
          });
    }
    function He(e) {
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
    function Ge(e, t, n, r, o, a, i) {
      return typeof e != "string" ||
        typeof t != "string" ||
        ![n, r, o, a, i].every(ze)
        ? null
        : {
            emailAddress: r,
            id: e,
            memberLID: a,
            memberTag: n,
            name: t,
            phoneNumber: o,
            secondaryMemberTag: i,
          };
    }
    function ze(e) {
      return e == null || typeof e == "string";
    }
    function je(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES" ||
        e === "DUPLICATE_EMAIL"
      );
    }
    function Ke(e) {
      var t, n;
      return {
        email_address: (t = e.emailAddress) != null ? t : "",
        member_tag: e.memberTag,
        name: e.name,
        phone_number: (n = e.phoneNumber) != null ? n : "",
        secondary_member_tag: e.secondaryMemberTag,
      };
    }
    function Qe(e) {
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
    function Xe(e) {
      var t = e == null ? void 0 : e.index,
        n = e == null ? void 0 : e.kind;
      return t == null || n == null ? null : { index: t, kind: n };
    }
    function Ye(e, t, n, r, o, a, i) {
      var l = Je(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function Je(e, t, n, r, o, a, i) {
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
    function Ze(e, t, n, r, o, a) {
      var i = et(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function et(e, t, n, r, o, a) {
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
    function tt(e, t, n, r, o, a) {
      return e == null || e === "" || t == null || n == null
        ? []
        : [
            {
              lid: e,
              displayName: t,
              memberTag: o,
              phoneNumber: a,
              role: n,
              username: r,
            },
          ];
    }
    function nt(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = G),
      (l.loadOrgAdminOrgs = j),
      (l.updateOrgAdminSettings = Q),
      (l.loadOrgAdminRoster = Y),
      (l.applyOrgAdminRosterChanges = Z),
      (l.removeOrgAdminRosterEntries = te),
      (l.setOrgAdminMemberRole = ae),
      (l.removeOrgAdminMember = le),
      (l.loadOrgAdminMemberSearchPage = ue),
      (l.loadOrgAdminChannels = de),
      (l.loadOrgAdminChannelAdmins = pe),
      (l.loadOrgAdminDirectory = fe),
      (l.loadOrgAdminManagedGroups = he),
      (l.loadOrgAdminGroup = Ce),
      (l.addOrgManagedGroup = ve),
      (l.addOrgManagedChannel = Re),
      (l.inviteOrgMembers = Ee),
      (l.sendOrgManagedGroupEmailInvites = Ie),
      (l.submitOrgBulkGroupRequest = De),
      (l.getOrgAdminServerFailureReason = We));
  },
  98,
);
