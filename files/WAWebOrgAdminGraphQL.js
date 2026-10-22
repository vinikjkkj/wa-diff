__d(
  "WAWebOrgAdminGraphQL",
  [
    "WALogger",
    "WAWebGraphQLServerError",
    "WAWebOrgAdminGraphQLAddChannelMutation.graphql",
    "WAWebOrgAdminGraphQLAddGroupMutation.graphql",
    "WAWebOrgAdminGraphQLAdminRosterQuery.graphql",
    "WAWebOrgAdminGraphQLAppendAdminRosterMutation.graphql",
    "WAWebOrgAdminGraphQLDirectoryPageQuery.graphql",
    "WAWebOrgAdminGraphQLGroupQuery.graphql",
    "WAWebOrgAdminGraphQLInviteMembersMutation.graphql",
    "WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
    "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
    "WAWebOrgAdminGraphQLOrgsQuery.graphql",
    "WAWebOrgAdminGraphQLRemoveAdminRosterEntriesMutation.graphql",
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
      I,
      T,
      D = e !== void 0 ? e : (e = n("WAWebOrgAdminGraphQLOrgsQuery.graphql")),
      x =
        s !== void 0
          ? s
          : (s = n("WAWebOrgAdminGraphQLUpdateOrgMutation.graphql")),
      $ =
        u !== void 0
          ? u
          : (u = n("WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql")),
      P =
        c !== void 0
          ? c
          : (c = n("WAWebOrgAdminGraphQLRemoveMemberMutation.graphql")),
      N =
        d !== void 0
          ? d
          : (d = n("WAWebOrgAdminGraphQLAdminRosterQuery.graphql")),
      M =
        m !== void 0
          ? m
          : (m = n("WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql")),
      w =
        p !== void 0
          ? p
          : (p = n("WAWebOrgAdminGraphQLAppendAdminRosterMutation.graphql")),
      A =
        _ !== void 0
          ? _
          : (_ = n(
              "WAWebOrgAdminGraphQLRemoveAdminRosterEntriesMutation.graphql",
            )),
      F =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      O =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      B =
        h !== void 0
          ? h
          : (h = n("WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql")),
      W =
        y !== void 0
          ? y
          : (y = n("WAWebOrgAdminGraphQLDirectoryPageQuery.graphql")),
      q =
        C !== void 0
          ? C
          : (C = n("WAWebOrgAdminGraphQLMemberSearchQuery.graphql")),
      U = b !== void 0 ? b : (b = n("WAWebOrgAdminGraphQLGroupQuery.graphql")),
      V =
        v !== void 0
          ? v
          : (v = n("WAWebOrgAdminGraphQLAddGroupMutation.graphql")),
      H =
        S !== void 0
          ? S
          : (S = n("WAWebOrgAdminGraphQLAddChannelMutation.graphql")),
      G =
        R !== void 0
          ? R
          : (R = n("WAWebOrgAdminGraphQLInviteMembersMutation.graphql")),
      z =
        L !== void 0
          ? L
          : (L = n(
              "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
            )),
      j =
        E !== void 0
          ? E
          : (E = n(
              "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
            )),
      K = { environmentType: "whatsapp_web" },
      Q = 5e3,
      X = 25;
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              D,
              {},
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw Ue(null);
          var n = t.orgs.flatMap(Ge);
          if (n.length !== t.orgs.length) throw qe("xwa_org_list", Ae);
          return (Be("xwa_org_list", "orgs=" + n.length), n);
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
          var n = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_options: t.memberTagOptions,
              org_id: e,
            },
            r = yield o("WAWebRelayClient").commitMutation(x, { input: n }, K),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw Ue(a == null ? void 0 : a.error_reason);
          var l = ze(i);
          if (l == null || l.id !== e) throw Ue(Ae);
          return (Be("xwa_org_update", "id=" + l.id), l);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              N,
              { orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
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
          var s = je(i);
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return s;
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
              M,
              { input: { entries: i, org_id: e } },
              K,
            ),
            s = l == null ? void 0 : l.xwa_org_admin_roster_replace;
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          if (s.status !== "SUCCESS") {
            var u,
              c = (u = s.error_reason) != null ? u : "NOT_FOUND_OR_UNAVAILABLE";
            if (Qe(c)) {
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
          var p = je(m);
          return p == null
            ? { status: "success_needs_refresh" }
            : babelHelpers.extends({}, p, {
                status: "success",
                totalCount: (a = p.totalCount) != null ? a : t.length,
              });
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              w,
              { input: { entries: i, org_id: e } },
              K,
            ),
            s = l == null ? void 0 : l.xwa_org_admin_roster_append;
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          if (s.status === "SUCCESS") return { status: "success" };
          var u = (n = s.error_reason) != null ? n : "NOT_FOUND_OR_UNAVAILABLE";
          if (!Qe(u)) throw r("err")(u);
          return {
            errorReason: u,
            invalidRowNumber: (a = s.invalid_row_number) != null ? a : null,
            status: "validation_error",
          };
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              A,
              { input: { entry_ids: t, org_id: e } },
              K,
            ),
            a = n == null ? void 0 : n.xwa_org_admin_roster_remove;
          if (a == null || a.status !== "SUCCESS") {
            var i;
            throw r("err")(
              (i = a == null ? void 0 : a.error_reason) != null
                ? i
                : "NOT_FOUND_OR_UNAVAILABLE",
            );
          }
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a,
              i = yield o("WAWebRelayClient").commitMutation(
                $,
                { input: { member_lid: t, org_id: e, role: n } },
                K,
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
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("WAWebRelayClient").commitMutation(
              P,
              { input: { member_lid: t, org_id: e } },
              K,
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
        me.apply(this, arguments)
      );
    }
    function pe(e, t, n, r) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                q,
                { after: r, first: X, memberTag: n, orgID: e, query: t.trim() },
                babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
              ),
              c = u == null ? void 0 : u.xwa_org_member_search;
            if (c == null) throw qe("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              Be(
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
                    : et(
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
        _e.apply(this, arguments)
      );
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              O,
              { orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_channels) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Ue(r == null ? void 0 : r.error_reason);
          return (
            Be("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return Xe(
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
        ge.apply(this, arguments)
      );
    }
    function he(e, t) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o("WAWebRelayClient").fetchQuery(
              B,
              { channelID: t, orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get,
            l =
              i == null || (n = i.org_info) == null
                ? void 0
                : n.managed_channel;
          if (l == null) throw Ue(i == null ? void 0 : i.error_reason);
          Be("xwa_org_get.managed_channel", "id=" + t);
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
        ye.apply(this, arguments)
      );
    }
    function Ce(e, t) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r, a;
          if (t != null && t > Q)
            return { memberCount: t, status: "roster_too_large" };
          var i = yield o("WAWebRelayClient").fetchQuery(
              W,
              { first: Q, orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            l = i == null ? void 0 : i.xwa_org_get;
          if (l == null || l.status !== "SUCCESS")
            throw Ue(l == null ? void 0 : l.error_reason);
          var s = (n = l.org_info) == null ? void 0 : n.members;
          if (s == null) throw Ue(Fe);
          var u = s.page_info;
          if (u == null || u.has_next_page == null) throw qe("xwa_org_get", Ae);
          var c = s.count;
          if (c == null || (u.has_next_page && c <= Q))
            throw qe("xwa_org_get", Ae);
          if (c > Q) return { memberCount: c, status: "roster_too_large" };
          var d = s.nodes.flatMap(function (e) {
              return et(
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
            throw qe("xwa_org_get", Ae);
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
        be.apply(this, arguments)
      );
    }
    function ve(e) {
      return Se.apply(this, arguments);
    }
    function Se() {
      return (
        (Se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              F,
              { orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_groups) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Ue(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return Je(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return tt(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (Be("xwa_org_get.managed_groups", "groups=" + i.length), i);
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
            r,
            a,
            i,
            l,
            s = yield o("WAWebRelayClient").fetchQuery(
              U,
              { orgID: e, gid: t },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            u = s == null ? void 0 : s.xwa_org_get,
            c =
              u == null || (n = u.org_info) == null ? void 0 : n.managed_group;
          if (c == null) throw Ue(u == null ? void 0 : u.error_reason);
          var d = Ze(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return tt(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw Ue(null);
          return (
            Be("xwa_org_get.managed_group", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
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
              V,
              { orgID: e, gid: t },
              K,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw Ue(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw Ue(null);
          var i = Ze(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw Ue(null);
          return (Be("xwa_org_managed_group_add", "gid=" + i.gid), i);
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebRelayClient").commitMutation(
              H,
              { channelID: t, orgID: e },
              K,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw Ue(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw Ue(null);
          var l = Ye(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
            i.follower_count,
            i.creation_timestamp_s,
          );
          if (l == null) throw Ue(null);
          return (Be("xwa_org_managed_channel_add", "id=" + l.id), l);
        })),
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
              G,
              { orgID: e, emails: t },
              K,
            ),
            r = n == null ? void 0 : n.xwa_org_invite_members;
          if ((r == null ? void 0 : r.status) === "SUCCESS")
            return (
              Be("xwa_org_invite_members", "emails=" + t.length),
              "success"
            );
          if ((r == null ? void 0 : r.error_reason) === "INVALID_EMAIL_BATCH")
            return (
              o("WALogger").WARN(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] xwa_org_invite_members rejected the email batch",
                  ])),
              ),
              "invalid_email_batch"
            );
          throw Ue(r == null ? void 0 : r.error_reason);
        })),
        xe.apply(this, arguments)
      );
    }
    function $e(e, t, n) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRelayClient").commitMutation(
                z,
                { gid: t, orgID: e, rosterEntryIDs: n },
                K,
              ),
              a =
                r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
            if ((a == null ? void 0 : a.status) !== "SUCCESS")
              throw qe(
                "xwa_org_managed_group_send_email_invites",
                a == null ? void 0 : a.error_reason,
              );
            return (
              Be(
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
        Pe.apply(this, arguments)
      );
    }
    function Ne(e, t) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              j,
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
              K,
            ),
            r = n == null ? void 0 : n.xwa_org_bulk_group_request_submit,
            a = r == null ? void 0 : r.request_id,
            i = r == null ? void 0 : r.error_reason;
          if ((r == null ? void 0 : r.status) === "SUCCESS") {
            if (a == null) throw Ue(Ae);
            return (
              Be("xwa_org_bulk_group_request_submit", "id=" + a),
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
          throw Ue(i);
        })),
        Me.apply(this, arguments)
      );
    }
    var we = "NOT_FOUND_OR_UNAVAILABLE",
      Ae = "MALFORMED_SUCCESS_RESPONSE",
      Fe = "MISSING_MEMBERS_CONNECTION",
      Oe = new WeakSet();
    function Be(e, t) {
      o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      );
    }
    function We(e, t) {
      var n = t != null ? t : we;
      return (
        o("WALogger")
          .ERROR(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
    function qe(e, t) {
      return Ve(We(e, t));
    }
    function Ue(e) {
      return Ve(e != null ? e : we);
    }
    function Ve(e) {
      var t = r("err")(e);
      return (Oe.add(t), t);
    }
    function He(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && Oe.has(e)
          ? e.message
          : "non_server_error";
    }
    function Ge(e) {
      var t = ze(e);
      return t == null ? [] : [t];
    }
    function ze(e) {
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
    function je(e) {
      var t = e.entries;
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t) {
        if (r == null) return null;
        var o = Ke(
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
    function Ke(e, t, n, r, o, a) {
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
    function Qe(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES"
      );
    }
    function Xe(e, t, n, r, o, a, i) {
      var l = Ye(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function Ye(e, t, n, r, o, a, i) {
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
    function Je(e, t, n, r, o, a) {
      var i = Ze(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function Ze(e, t, n, r, o, a) {
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
    function et(e, t, n, r, o, a) {
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
    function tt(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = Q),
      (l.loadOrgAdminOrgs = Y),
      (l.updateOrgAdminSettings = Z),
      (l.loadOrgAdminRoster = te),
      (l.replaceOrgAdminRoster = re),
      (l.appendOrgAdminRoster = ae),
      (l.removeOrgAdminRosterEntries = le),
      (l.setOrgAdminMemberRole = ue),
      (l.removeOrgAdminMember = de),
      (l.loadOrgAdminMemberSearchPage = pe),
      (l.loadOrgAdminChannels = fe),
      (l.loadOrgAdminChannelAdmins = he),
      (l.loadOrgAdminDirectory = Ce),
      (l.loadOrgAdminManagedGroups = ve),
      (l.loadOrgAdminGroup = Re),
      (l.addOrgManagedGroup = Ee),
      (l.addOrgManagedChannel = Ie),
      (l.inviteOrgMembers = De),
      (l.sendOrgManagedGroupEmailInvites = $e),
      (l.submitOrgBulkGroupRequest = Ne),
      (l.getOrgAdminServerFailureReason = He));
  },
  98,
);
