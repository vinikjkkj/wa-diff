__d(
  "WAWebOrgAdminGraphQL",
  [
    "WALogger",
    "WAWebGraphQLServerError",
    "WAWebOrgAdminGraphQLAddChannelMutation.graphql",
    "WAWebOrgAdminGraphQLAddGroupMutation.graphql",
    "WAWebOrgAdminGraphQLAdminRosterQuery.graphql",
    "WAWebOrgAdminGraphQLDirectoryPageQuery.graphql",
    "WAWebOrgAdminGraphQLGroupQuery.graphql",
    "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
    "WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
    "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
    "WAWebOrgAdminGraphQLOrgsQuery.graphql",
    "WAWebOrgAdminGraphQLRemoveMemberMutation.graphql",
    "WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql",
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
          : (m = n("WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql")),
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
          if (t == null) throw Me(null);
          var n = t.orgs.flatMap(Fe);
          return ($e("xwa_org_list", "orgs=" + n.length), n);
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
              member_tag_options: t.memberTagOptions,
              org_id: e,
            },
            r = yield o("WAWebRelayClient").commitMutation(T, { input: n }, H),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw Me(a == null ? void 0 : a.error_reason);
          var l = Oe(i);
          if (l == null || l.id !== e) throw Me(Te);
          return ($e("xwa_org_update", "id=" + l.id), l);
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
          var s = Be(i);
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return s;
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i = t.map(function (e) {
              return {
                email_address: e.emailAddress,
                member_tag: e.memberTag,
                name: e.name,
                phone_number: e.phoneNumber,
              };
            }),
            l = yield o("WAWebRelayClient").commitMutation(
              P,
              { input: { entries: i, org_id: e } },
              H,
            ),
            s = l == null ? void 0 : l.xwa_org_admin_roster_replace;
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          if (s.status !== "SUCCESS") {
            var u,
              c = (u = s.error_reason) != null ? u : "NOT_FOUND_OR_UNAVAILABLE";
            if (qe(c)) {
              var d;
              return {
                errorReason: c,
                invalidRowNumber: (d = s.invalid_row_number) != null ? d : null,
                status: "validation_error",
              };
            }
            throw r("err")(c);
          }
          var m = (n = s.org) == null ? void 0 : n.admin_roster;
          if (m == null) return { status: "success_needs_refresh" };
          var p = Be(m);
          return p == null
            ? { status: "success_needs_refresh" }
            : babelHelpers.extends({}, p, {
                status: "success",
                totalCount: (a = p.totalCount) != null ? a : t.length,
              });
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        ne.apply(this, arguments)
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        oe.apply(this, arguments)
      );
    }
    function ae(e, t, n, r) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
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
            if (c == null) throw Ne("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              $e(
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
                    : ze(
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
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          if (a == null) throw Me(r == null ? void 0 : r.error_reason);
          return (
            $e("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return Ue(
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
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          if (l == null) throw Me(i == null ? void 0 : i.error_reason);
          $e("xwa_org_get.managed_channel", "id=" + t);
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
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (t != null && t > G)
            return { memberCount: t, status: "roster_too_large" };
          var r = yield o("WAWebRelayClient").fetchQuery(
              A,
              { first: G, orgID: e },
              babelHelpers.extends({}, H, { fetchPolicy: "network-only" }),
            ),
            a = r == null ? void 0 : r.xwa_org_get;
          if (a == null || a.status !== "SUCCESS")
            throw Me(a == null ? void 0 : a.error_reason);
          var i = (n = a.org_info) == null ? void 0 : n.members;
          if (i == null) throw Me(De);
          var l = i.page_info;
          if (l == null || l.has_next_page == null) throw Ne("xwa_org_get", Te);
          var s = i.count;
          if (s == null || (l.has_next_page && s <= G))
            throw Ne("xwa_org_get", Te);
          if (s > G) return { memberCount: s, status: "roster_too_large" };
          var u = i.nodes.flatMap(function (e) {
              return ze(
                e.lid,
                e.display_name,
                e.role,
                e.username,
                e.member_tag,
                e.phone_number,
              );
            }),
            c = new Set(
              u.map(function (e) {
                return e.lid;
              }),
            ).size;
          if (u.length !== i.nodes.length || c !== u.length || u.length !== s)
            throw Ne("xwa_org_get", Te);
          return { memberCount: s, members: u, status: "success" };
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          if (a == null) throw Me(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return He(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return je(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return ($e("xwa_org_get.managed_groups", "groups=" + i.length), i);
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
          if (c == null) throw Me(u == null ? void 0 : u.error_reason);
          var d = Ge(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return je(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw Me(null);
          return (
            $e("xwa_org_get.managed_group", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e, t) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              B,
              { orgID: e, gid: t },
              H,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw Me(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw Me(null);
          var i = Ge(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw Me(null);
          return ($e("xwa_org_managed_group_add", "gid=" + i.gid), i);
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
            r = yield o("WAWebRelayClient").commitMutation(
              W,
              { channelID: t, orgID: e },
              H,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw Me(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw Me(null);
          var l = Ve(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
            i.follower_count,
            i.creation_timestamp_s,
          );
          if (l == null) throw Me(null);
          return ($e("xwa_org_managed_channel_add", "id=" + l.id), l);
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
              q,
              { orgID: e, emails: t },
              H,
            ),
            r = n == null ? void 0 : n.xwa_org_invite_members;
          if ((r == null ? void 0 : r.status) === "SUCCESS")
            return (
              $e("xwa_org_invite_members", "emails=" + t.length),
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
          throw Me(r == null ? void 0 : r.error_reason);
        })),
        Se.apply(this, arguments)
      );
    }
    function Re(e, t, n) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRelayClient").commitMutation(
                U,
                { gid: t, orgID: e, rosterEntryIDs: n },
                H,
              ),
              a =
                r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
            if ((a == null ? void 0 : a.status) !== "SUCCESS")
              throw Ne(
                "xwa_org_managed_group_send_email_invites",
                a == null ? void 0 : a.error_reason,
              );
            $e(
              "xwa_org_managed_group_send_email_invites",
              "emails=" + n.length,
            );
          },
        )),
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
            if (a == null) throw Me(Te);
            return (
              $e("xwa_org_bulk_group_request_submit", "id=" + a),
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
          throw Me(i);
        })),
        ke.apply(this, arguments)
      );
    }
    var Ie = "NOT_FOUND_OR_UNAVAILABLE",
      Te = "MALFORMED_SUCCESS_RESPONSE",
      De = "MISSING_MEMBERS_CONNECTION",
      xe = new WeakSet();
    function $e(e, t) {
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
    function Pe(e, t) {
      var n = t != null ? t : Ie;
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
    function Ne(e, t) {
      return we(Pe(e, t));
    }
    function Me(e) {
      return we(e != null ? e : Ie);
    }
    function we(e) {
      var t = r("err")(e);
      return (xe.add(t), t);
    }
    function Ae(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && xe.has(e)
          ? e.message
          : "non_server_error";
    }
    function Fe(e) {
      var t = Oe(e);
      return t == null ? [] : [t];
    }
    function Oe(e) {
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
    function Be(e) {
      var t = e.entries;
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t) {
        if (r == null) return null;
        var o = We(
          r.id,
          r.name,
          r.member_tag,
          r.email_address,
          r.phone_number,
          r.member_lid,
        );
        if (o == null) return null;
        n.push(o);
      }
      var a = e.is_truncated,
        i = e.total_count;
      return typeof a != "boolean" || (i != null && typeof i != "number")
        ? null
        : {
            entries: n,
            isTruncated: a,
            totalCount: i != null ? i : a ? null : n.length,
          };
    }
    function We(e, t, n, r, o, a) {
      return typeof e != "string" ||
        typeof t != "string" ||
        (n != null && typeof n != "string") ||
        (r != null && typeof r != "string") ||
        (o != null && typeof o != "string") ||
        (a != null && typeof a != "string")
        ? null
        : {
            emailAddress: r,
            id: e,
            memberLID: a,
            memberTag: n,
            name: t,
            phoneNumber: o,
          };
    }
    function qe(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES"
      );
    }
    function Ue(e, t, n, r, o, a, i) {
      var l = Ve(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function Ve(e, t, n, r, o, a, i) {
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
    function He(e, t, n, r, o, a) {
      var i = Ge(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function Ge(e, t, n, r, o, a) {
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
    function ze(e, t, n, r, o, a) {
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
    function je(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = G),
      (l.loadOrgAdminOrgs = j),
      (l.updateOrgAdminSettings = Q),
      (l.loadOrgAdminRoster = Y),
      (l.replaceOrgAdminRoster = Z),
      (l.setOrgAdminMemberRole = te),
      (l.removeOrgAdminMember = re),
      (l.loadOrgAdminMemberSearchPage = ae),
      (l.loadOrgAdminChannels = le),
      (l.loadOrgAdminChannelAdmins = ue),
      (l.loadOrgAdminDirectory = de),
      (l.loadOrgAdminManagedGroups = pe),
      (l.loadOrgAdminGroup = fe),
      (l.addOrgManagedGroup = he),
      (l.addOrgManagedChannel = Ce),
      (l.inviteOrgMembers = ve),
      (l.sendOrgManagedGroupEmailInvites = Re),
      (l.submitOrgBulkGroupRequest = Ee),
      (l.getOrgAdminServerFailureReason = Ae));
  },
  98,
);
