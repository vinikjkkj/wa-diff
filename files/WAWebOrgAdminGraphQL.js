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
    "WAWebOrgAdminGraphQLManagedChannelsQuery.graphql",
    "WAWebOrgAdminGraphQLManagedGroupsQuery.graphql",
    "WAWebOrgAdminGraphQLMemberSearchQuery.graphql",
    "WAWebOrgAdminGraphQLOrgsQuery.graphql",
    "WAWebOrgAdminGraphQLRemoveMemberMutation.graphql",
    "WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql",
    "WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql",
    "WAWebOrgAdminGraphQLUpdateOrgMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      k = e !== void 0 ? e : (e = n("WAWebOrgAdminGraphQLOrgsQuery.graphql")),
      I =
        s !== void 0
          ? s
          : (s = n("WAWebOrgAdminGraphQLUpdateOrgMutation.graphql")),
      T =
        u !== void 0
          ? u
          : (u = n("WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql")),
      D =
        c !== void 0
          ? c
          : (c = n("WAWebOrgAdminGraphQLRemoveMemberMutation.graphql")),
      x =
        d !== void 0
          ? d
          : (d = n("WAWebOrgAdminGraphQLAdminRosterQuery.graphql")),
      $ =
        m !== void 0
          ? m
          : (m = n("WAWebOrgAdminGraphQLReplaceAdminRosterMutation.graphql")),
      P =
        p !== void 0
          ? p
          : (p = n("WAWebOrgAdminGraphQLAppendAdminRosterMutation.graphql")),
      N =
        _ !== void 0
          ? _
          : (_ = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      M =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      w =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLDirectoryPageQuery.graphql")),
      A =
        h !== void 0
          ? h
          : (h = n("WAWebOrgAdminGraphQLMemberSearchQuery.graphql")),
      F = y !== void 0 ? y : (y = n("WAWebOrgAdminGraphQLGroupQuery.graphql")),
      O =
        C !== void 0
          ? C
          : (C = n("WAWebOrgAdminGraphQLAddGroupMutation.graphql")),
      B =
        b !== void 0
          ? b
          : (b = n("WAWebOrgAdminGraphQLAddChannelMutation.graphql")),
      W =
        v !== void 0
          ? v
          : (v = n("WAWebOrgAdminGraphQLInviteMembersMutation.graphql")),
      q = { environmentType: "whatsapp_web" },
      U = 120,
      V = 1e4,
      H = Math.ceil(V / U),
      G = 25,
      z = 100,
      j = new Set([
        "NOT_A_MEMBER",
        "NOT_AUTHORIZED",
        "ORG_NOT_FOUND",
        "ORG_SUSPENDED",
      ]);
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              k,
              {},
              babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw Oe(null);
          var n = t.orgs.flatMap(function (e) {
            var t;
            return qe(
              e.id,
              e.name,
              e.description,
              (t = e.icon) == null ? void 0 : t.uri,
              e.member_count,
              e.member_tag_options,
              e.is_member_directory_enabled,
              e.viewer_role,
            );
          });
          return (we("xwa_org_list", "orgs=" + n.length), n);
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_options: t.memberTagOptions,
              org_id: e,
            },
            a = yield o("WAWebRelayClient").commitMutation(I, { input: r }, q),
            i = a == null ? void 0 : a.xwa_org_update,
            l = i == null ? void 0 : i.org;
          if (i == null || i.status !== "SUCCESS" || l == null)
            throw Oe(i == null ? void 0 : i.error_reason);
          var s = Ue(
            l.id,
            l.name,
            l.description,
            (n = l.icon) == null ? void 0 : n.uri,
            l.member_count,
            l.member_tag_options,
            l.is_member_directory_enabled,
            l.viewer_role,
          );
          if (s == null || s.id !== e) throw Oe(Pe);
          return (we("xwa_org_update", "id=" + s.id), s);
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              x,
              { orgID: e },
              babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
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
          var s = Ve(i);
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return s;
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              $,
              { input: { entries: i, org_id: e } },
              q,
            ),
            s = l == null ? void 0 : l.xwa_org_admin_roster_replace;
          if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          if (s.status !== "SUCCESS") {
            var u,
              c = (u = s.error_reason) != null ? u : "NOT_FOUND_OR_UNAVAILABLE";
            if (Ge(c)) {
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
          if (m.is_truncated == null)
            return { status: "success_needs_refresh" };
          var p = Ve(m);
          return p == null
            ? { status: "success_needs_refresh" }
            : babelHelpers.extends({}, p, {
                status: "success",
                totalCount: (a = p.totalCount) != null ? a : t.length,
              });
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = t.map(function (e, t) {
              return { entry: e, originalIndex: t };
            });
            return yield oe(
              e,
              r,
              t.length,
              0,
              {
                addedCount: 0,
                rosterTotalCount: 0,
                serverDeduplicatedCount: 0,
              },
              n,
            );
          },
        )),
        re.apply(this, arguments)
      );
    }
    function oe(e, t, n, r, o, a) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a) {
            var i, l;
            if (r >= t.length)
              return {
                addedCount: o.addedCount,
                deduplicatedCount: o.serverDeduplicatedCount + n - t.length,
                rosterTotalCount: o.rosterTotalCount,
                status: "success",
              };
            var s = t.slice(r, r + z),
              u = yield ie(
                e,
                s.map(function (e) {
                  return e.entry;
                }),
              ),
              c =
                (i =
                  (l = t[r + s.length]) == null ? void 0 : l.originalIndex) !=
                null
                  ? i
                  : n;
            if (u.status === "validation_error") {
              var d,
                m =
                  u.invalidRowNumber == null
                    ? null
                    : (d = s[u.invalidRowNumber - 1]) != null
                      ? d
                      : null;
              return babelHelpers.extends(
                {
                  addedCount: o.addedCount,
                  deduplicatedCount:
                    o.serverDeduplicatedCount + s[0].originalIndex - r,
                },
                u,
                {
                  invalidRowNumber: m == null ? null : m.originalIndex + 1,
                  processedCount: s[0].originalIndex,
                  rosterTotalCount: r === 0 ? null : o.rosterTotalCount,
                },
              );
            }
            var p = {
              addedCount: o.addedCount + u.addedCount,
              rosterTotalCount: u.rosterTotalCount,
              serverDeduplicatedCount:
                o.serverDeduplicatedCount + u.deduplicatedCount,
            };
            return (
              a == null ||
                a({
                  addedCount: p.addedCount,
                  deduplicatedCount:
                    p.serverDeduplicatedCount + c - (r + s.length),
                  processedCount: c,
                  rosterTotalCount: p.rosterTotalCount,
                  totalCount: n,
                }),
              yield oe(e, t, n, r + s.length, p, a)
            );
          },
        )),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield ue(e, t);
          } catch (n) {
            if (!t.every(se) || (n instanceof Error && j.has(n.message)))
              throw n;
            return (
              o("WALogger")
                .WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] roster append batch failed; retrying once",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("org-admin-roster-append-batch-retry"),
              yield ue(e, t)
            );
          }
        })),
        le.apply(this, arguments)
      );
    }
    function se(e) {
      var t,
        n,
        r = (t = e.emailAddress) == null ? void 0 : t.trim(),
        o = (n = e.phoneNumber) == null ? void 0 : n.trim();
      return (r != null && r !== "") || (o != null && o !== "");
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.map(function (e) {
              return {
                email_address: e.emailAddress,
                member_tag: e.memberTag,
                name: e.name,
                phone_number: e.phoneNumber,
              };
            }),
            a = yield o("WAWebRelayClient").commitMutation(
              P,
              { input: { entries: n, org_id: e } },
              q,
            ),
            i = a == null ? void 0 : a.xwa_org_admin_roster_append;
          if (i == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          if (i.status !== "SUCCESS") {
            var l,
              s = (l = i.error_reason) != null ? l : "NOT_FOUND_OR_UNAVAILABLE";
            if (Ge(s)) {
              var u;
              return {
                errorReason: s,
                invalidRowNumber: (u = i.invalid_row_number) != null ? u : null,
                status: "validation_error",
              };
            }
            throw r("err")(s);
          }
          if (
            i.added_count == null ||
            i.deduplicated_count == null ||
            i.total_count == null
          )
            throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return {
            addedCount: i.added_count,
            deduplicatedCount: i.deduplicated_count,
            rosterTotalCount: i.total_count,
            status: "success",
          };
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t, n) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a = yield o("WAWebRelayClient").commitMutation(
                T,
                { input: { member_lid: t, org_id: e, role: n } },
                q,
              ),
              i = a == null ? void 0 : a.xwa_org_member_set_role;
            if (i == null || i.status !== "SUCCESS") {
              var l;
              throw r("err")(
                (l = i == null ? void 0 : i.error_reason) != null
                  ? l
                  : "NOT_FOUND_OR_UNAVAILABLE",
              );
            }
            var s = i.org;
            return s != null && s.id === e && s.member_count != null
              ? { memberCount: s.member_count, status: "success" }
              : { status: "success_needs_refresh" };
          },
        )),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              D,
              { input: { member_lid: t, org_id: e } },
              q,
            ),
            a = n == null ? void 0 : n.xwa_org_member_remove;
          if (a == null || a.status !== "SUCCESS") {
            var i;
            throw r("err")(
              (i = a == null ? void 0 : a.error_reason) != null
                ? i
                : "NOT_FOUND_OR_UNAVAILABLE",
            );
          }
          var l = a.org;
          return l != null && l.id === e && l.member_count != null
            ? { memberCount: l.member_count, status: "success" }
            : { status: "success_needs_refresh" };
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t, n, r) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                A,
                { after: r, first: G, memberTag: n, orgID: e, query: t.trim() },
                babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
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
                    : Xe(
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
              M,
              { orgID: e },
              babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
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
              return ze(
                e.id,
                e.name,
                e.description,
                e.invite_code,
                (t = e.picture) == null ? void 0 : t.uri,
              );
            })
          );
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
            a = yield o("WAWebRelayClient").fetchQuery(
              w,
              { after: t, first: U, orgID: e },
              babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get;
          if (i == null || i.status !== "SUCCESS")
            throw Oe(i == null ? void 0 : i.error_reason);
          var l = (n = i.org_info) == null ? void 0 : n.members;
          if (l == null) throw Oe(Ne);
          var s = l.page_info;
          if (
            s == null ||
            s.has_next_page == null ||
            (s.has_next_page && s.end_cursor == null)
          )
            throw Fe("xwa_org_get", Pe);
          return {
            count: l.count,
            endCursor: (r = s.end_cursor) != null ? r : null,
            hasNextPage: s.has_next_page,
            members: l.nodes.flatMap(function (e) {
              return Xe(
                e.lid,
                e.display_name,
                e.role,
                e.username,
                e.member_tag,
                e.phone_number,
              );
            }),
            receivedMemberCount: l.nodes.length,
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
              N,
              { orgID: e },
              babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
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
            return Ke(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return Ye(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (we("xwa_org_get.managed_groups", "groups=" + i.length), i);
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
            a = yield o("WAWebRelayClient").fetchQuery(
              F,
              { orgID: e, gid: t },
              babelHelpers.extends({}, q, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get,
            l =
              i == null || (n = i.org_info) == null ? void 0 : n.managed_group;
          if (l == null) throw Oe(i == null ? void 0 : i.error_reason);
          var s = Qe(
            l.gid,
            l.subject,
            l.creation_timestamp_s,
            l.participant_count,
            ((r = l.participants) != null ? r : []).flatMap(function (e) {
              return Ye(e.lid, e.role);
            }),
            l.roster_partial,
          );
          if (s == null) throw Oe(null);
          return (we("xwa_org_get.managed_group", "gid=" + s.gid), s);
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
              O,
              { orgID: e, gid: t },
              q,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw Oe(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw Oe(null);
          var i = Qe(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw Oe(null);
          return (we("xwa_org_managed_group_add", "gid=" + i.gid), i);
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
              B,
              { channelID: t, orgID: e },
              q,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw Oe(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw Oe(null);
          var l = je(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
          );
          if (l == null) throw Oe(null);
          return (we("xwa_org_managed_channel_add", "id=" + l.id), l);
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
              W,
              { orgID: e, emails: t },
              q,
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
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] xwa_org_invite_members rejected the email batch",
                  ])),
              ),
              "invalid_email_batch"
            );
          throw Oe(r == null ? void 0 : r.error_reason);
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
    function Ae(e, t) {
      var n = t != null ? t : $e;
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
    function qe(e, t, n, r, o, a, i, l) {
      var s = Ue(e, t, n, r, o, a, i, l);
      return s == null ? [] : [s];
    }
    function Ue(e, t, n, r, o, a, i, l) {
      return e == null || t == null
        ? null
        : {
            description: n != null ? n : null,
            iconURI: r != null ? r : null,
            id: e,
            isMemberDirectoryEnabled: i === !0,
            memberCount: o,
            memberTagOptions: a != null ? a : [],
            name: t,
            viewerRole: l != null ? l : null,
          };
    }
    function Ve(e) {
      var t = e.entries;
      if (!Array.isArray(t)) return null;
      var n = [];
      for (var r of t) {
        if (r == null) return null;
        var o = He(r.id, r.name, r.member_tag, r.email_address, r.phone_number);
        if (o == null) return null;
        n.push(o);
      }
      var a = e.is_truncated,
        i = e.total_count;
      if (
        (a != null && typeof a != "boolean") ||
        (i != null && typeof i != "number")
      )
        return null;
      var l = a != null ? a : !0;
      return {
        entries: n,
        isTruncated: l,
        totalCount: i != null ? i : l ? null : n.length,
      };
    }
    function He(e, t, n, r, o) {
      return typeof e != "string" ||
        typeof t != "string" ||
        (n != null && typeof n != "string") ||
        (r != null && typeof r != "string") ||
        (o != null && typeof o != "string")
        ? null
        : { emailAddress: r, id: e, memberTag: n, name: t, phoneNumber: o };
    }
    function Ge(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES"
      );
    }
    function ze(e, t, n, r, o) {
      var a = je(e, t, n, r, o);
      return a == null ? [] : [a];
    }
    function je(e, t, n, r, o) {
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
    function Ke(e, t, n, r, o, a) {
      var i = Qe(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function Qe(e, t, n, r, o, a) {
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
    function Xe(e, t, n, r, o, a) {
      return e == null || t == null || n == null
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
    function Ye(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.ORG_DIRECTORY_SYNC_PAGE_LIMIT = H),
      (l.ORG_ADMIN_ROSTER_APPEND_BATCH_SIZE = z),
      (l.loadOrgAdminOrgs = K),
      (l.updateOrgAdminSettings = X),
      (l.loadOrgAdminRoster = J),
      (l.replaceOrgAdminRoster = ee),
      (l.appendOrgAdminRoster = ne),
      (l.setOrgAdminMemberRole = de),
      (l.removeOrgAdminMember = pe),
      (l.loadOrgAdminMemberSearchPage = fe),
      (l.loadOrgAdminChannels = he),
      (l.loadOrgAdminDirectoryPage = Ce),
      (l.loadOrgAdminManagedGroups = ve),
      (l.loadOrgAdminGroup = Re),
      (l.addOrgManagedGroup = Ee),
      (l.addOrgManagedChannel = Ie),
      (l.inviteOrgMembers = De),
      (l.getOrgAdminServerFailureReason = We));
  },
  98,
);
