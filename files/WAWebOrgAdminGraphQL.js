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
    "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
    "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
    "WAWebOrgAdminGraphQLOrgsQuery.graphql",
    "WAWebOrgAdminGraphQLRemoveMemberMutation.graphql",
    "WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql",
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
      E = e !== void 0 ? e : (e = n("WAWebOrgAdminGraphQLOrgsQuery.graphql")),
      k =
        s !== void 0
          ? s
          : (s = n("WAWebOrgAdminGraphQLUpdateOrgMutation.graphql")),
      I =
        u !== void 0
          ? u
          : (u = n("WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql")),
      T =
        c !== void 0
          ? c
          : (c = n("WAWebOrgAdminGraphQLRemoveMemberMutation.graphql")),
      D =
        d !== void 0
          ? d
          : (d = n("WAWebOrgAdminGraphQLAdminRosterQuery.graphql")),
      x =
        m !== void 0
          ? m
          : (m = n("WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql")),
      $ =
        p !== void 0
          ? p
          : (p = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      P =
        _ !== void 0
          ? _
          : (_ = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      N =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLDirectoryPageQuery.graphql")),
      M =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLMemberSearchQuery.graphql")),
      w = h !== void 0 ? h : (h = n("WAWebOrgAdminGraphQLGroupQuery.graphql")),
      A =
        y !== void 0
          ? y
          : (y = n("WAWebOrgAdminGraphQLAddGroupMutation.graphql")),
      F =
        C !== void 0
          ? C
          : (C = n("WAWebOrgAdminGraphQLAddChannelMutation.graphql")),
      O =
        b !== void 0
          ? b
          : (b = n("WAWebOrgAdminGraphQLInviteMembersMutation.graphql")),
      B =
        v !== void 0
          ? v
          : (v = n(
              "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
            )),
      W = { environmentType: "whatsapp_web" },
      q = 5e3,
      U = 25;
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              E,
              {},
              babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw ke(null);
          var n = t.orgs.flatMap(De);
          return (Re("xwa_org_list", "orgs=" + n.length), n);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_options: t.memberTagOptions,
              org_id: e,
            },
            r = yield o("WAWebRelayClient").commitMutation(k, { input: n }, W),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw ke(a == null ? void 0 : a.error_reason);
          var l = xe(i);
          if (l == null || l.id !== e) throw ke(be);
          return (Re("xwa_org_update", "id=" + l.id), l);
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              D,
              { orgID: e },
              babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
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
          var s = $e(i);
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return s;
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
              x,
              { input: { entries: i, org_id: e } },
              W,
            ),
            s = l == null ? void 0 : l.xwa_org_admin_roster_replace;
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          if (s.status !== "SUCCESS") {
            var u,
              c = (u = s.error_reason) != null ? u : "NOT_FOUND_OR_UNAVAILABLE";
            if (Ne(c)) {
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
          var p = $e(m);
          return p == null
            ? { status: "success_needs_refresh" }
            : babelHelpers.extends({}, p, {
                status: "success",
                totalCount: (a = p.totalCount) != null ? a : t.length,
              });
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = yield o("WAWebRelayClient").commitMutation(
              I,
              { input: { member_lid: t, org_id: e, role: n } },
              W,
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
            a = yield o("WAWebRelayClient").commitMutation(
              T,
              { input: { member_lid: t, org_id: e } },
              W,
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
        ee.apply(this, arguments)
      );
    }
    function te(e, t, n, r) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                M,
                { after: r, first: U, memberTag: n, orgID: e, query: t.trim() },
                babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
              ),
              c = u == null ? void 0 : u.xwa_org_member_search;
            if (c == null) throw Ee("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              Re(
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
                    : Oe(
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
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              P,
              { orgID: e },
              babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_channels) == null
                ? void 0
                : t.nodes;
          if (a == null) throw ke(r == null ? void 0 : r.error_reason);
          return (
            Re("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return Me(
                e.id,
                e.name,
                e.description,
                e.invite_code,
                (t = e.picture) == null ? void 0 : t.uri,
              );
            })
          );
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
          var n;
          if (t != null && t > q)
            return { memberCount: t, status: "roster_too_large" };
          var r = yield o("WAWebRelayClient").fetchQuery(
              N,
              { first: q, orgID: e },
              babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
            ),
            a = r == null ? void 0 : r.xwa_org_get;
          if (a == null || a.status !== "SUCCESS")
            throw ke(a == null ? void 0 : a.error_reason);
          var i = (n = a.org_info) == null ? void 0 : n.members;
          if (i == null) throw ke(ve);
          var l = i.page_info;
          if (l == null || l.has_next_page == null) throw Ee("xwa_org_get", be);
          var s = i.count;
          if (s == null || (l.has_next_page && s <= q))
            throw Ee("xwa_org_get", be);
          if (s > q) return { memberCount: s, status: "roster_too_large" };
          var u = i.nodes.flatMap(function (e) {
              return Oe(
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
            throw Ee("xwa_org_get", be);
          return { memberCount: s, members: u, status: "success" };
        })),
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
              $,
              { orgID: e },
              babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_groups) == null
                ? void 0
                : t.nodes;
          if (a == null) throw ke(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return Ae(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return Be(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (Re("xwa_org_get.managed_groups", "groups=" + i.length), i);
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
            a,
            i,
            l,
            s = yield o("WAWebRelayClient").fetchQuery(
              w,
              { orgID: e, gid: t },
              babelHelpers.extends({}, W, { fetchPolicy: "network-only" }),
            ),
            u = s == null ? void 0 : s.xwa_org_get,
            c =
              u == null || (n = u.org_info) == null ? void 0 : n.managed_group;
          if (c == null) throw ke(u == null ? void 0 : u.error_reason);
          var d = Fe(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return Be(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw ke(null);
          return (
            Re("xwa_org_get.managed_group", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
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
          var n = yield o("WAWebRelayClient").commitMutation(
              A,
              { orgID: e, gid: t },
              W,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw ke(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw ke(null);
          var i = Fe(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw ke(null);
          return (Re("xwa_org_managed_group_add", "gid=" + i.gid), i);
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
            r = yield o("WAWebRelayClient").commitMutation(
              F,
              { channelID: t, orgID: e },
              W,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw ke(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw ke(null);
          var l = we(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
          );
          if (l == null) throw ke(null);
          return (Re("xwa_org_managed_channel_add", "id=" + l.id), l);
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
          var n = yield o("WAWebRelayClient").commitMutation(
              O,
              { orgID: e, emails: t },
              W,
            ),
            r = n == null ? void 0 : n.xwa_org_invite_members;
          if ((r == null ? void 0 : r.status) === "SUCCESS")
            return (
              Re("xwa_org_invite_members", "emails=" + t.length),
              "success"
            );
          if ((r == null ? void 0 : r.error_reason) === "INVALID_EMAIL_BATCH")
            return (
              o("WALogger").WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] xwa_org_invite_members rejected the email batch",
                  ])),
              ),
              "invalid_email_batch"
            );
          throw ke(r == null ? void 0 : r.error_reason);
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
              W,
            ),
            r = n == null ? void 0 : n.xwa_org_bulk_group_request_submit,
            a = r == null ? void 0 : r.request_id,
            i = r == null ? void 0 : r.error_reason;
          if ((r == null ? void 0 : r.status) === "SUCCESS") {
            if (a == null) throw ke(be);
            return (
              Re("xwa_org_bulk_group_request_submit", "id=" + a),
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
          throw ke(i);
        })),
        ye.apply(this, arguments)
      );
    }
    var Ce = "NOT_FOUND_OR_UNAVAILABLE",
      be = "MALFORMED_SUCCESS_RESPONSE",
      ve = "MISSING_MEMBERS_CONNECTION",
      Se = new WeakSet();
    function Re(e, t) {
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      );
    }
    function Le(e, t) {
      var n = t != null ? t : Ce;
      return (
        o("WALogger")
          .ERROR(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ee(e, t) {
      return Ie(Le(e, t));
    }
    function ke(e) {
      return Ie(e != null ? e : Ce);
    }
    function Ie(e) {
      var t = r("err")(e);
      return (Se.add(t), t);
    }
    function Te(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && Se.has(e)
          ? e.message
          : "non_server_error";
    }
    function De(e) {
      var t = xe(e);
      return t == null ? [] : [t];
    }
    function xe(e) {
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
    function $e(e) {
      var t = e.entries;
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t) {
        if (r == null) return null;
        var o = Pe(
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
    function Pe(e, t, n, r, o, a) {
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
    function Ne(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES"
      );
    }
    function Me(e, t, n, r, o) {
      var a = we(e, t, n, r, o);
      return a == null ? [] : [a];
    }
    function we(e, t, n, r, o) {
      return e == null || t == null
        ? null
        : {
            description: n != null ? n : null,
            id: e,
            inviteCode: r != null ? r : null,
            name: t,
            pictureURI: o != null ? o : null,
          };
    }
    function Ae(e, t, n, r, o, a) {
      var i = Fe(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function Fe(e, t, n, r, o, a) {
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
    function Oe(e, t, n, r, o, a) {
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
    function Be(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = q),
      (l.loadOrgAdminOrgs = V),
      (l.updateOrgAdminSettings = G),
      (l.loadOrgAdminRoster = j),
      (l.replaceOrgAdminRoster = Q),
      (l.setOrgAdminMemberRole = Y),
      (l.removeOrgAdminMember = Z),
      (l.loadOrgAdminMemberSearchPage = te),
      (l.loadOrgAdminChannels = re),
      (l.loadOrgAdminDirectory = ae),
      (l.loadOrgAdminManagedGroups = le),
      (l.loadOrgAdminGroup = ue),
      (l.addOrgManagedGroup = de),
      (l.addOrgManagedChannel = pe),
      (l.inviteOrgMembers = fe),
      (l.submitOrgBulkGroupRequest = he),
      (l.getOrgAdminServerFailureReason = Te));
  },
  98,
);
