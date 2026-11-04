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
      T = e !== void 0 ? e : (e = n("WAWebOrgAdminGraphQLOrgsQuery.graphql")),
      D =
        s !== void 0
          ? s
          : (s = n("WAWebOrgAdminGraphQLUpdateOrgMutation.graphql")),
      x =
        u !== void 0
          ? u
          : (u = n("WAWebOrgAdminGraphQLSetMemberRoleMutation.graphql")),
      $ =
        c !== void 0
          ? c
          : (c = n("WAWebOrgAdminGraphQLRemoveMemberMutation.graphql")),
      P =
        d !== void 0
          ? d
          : (d = n("WAWebOrgAdminGraphQLAdminRosterQuery.graphql")),
      N =
        m !== void 0
          ? m
          : (m = n(
              "WAWebOrgAdminGraphQLApplyAdminRosterChangesMutation.graphql",
            )),
      M =
        p !== void 0
          ? p
          : (p = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      w =
        _ !== void 0
          ? _
          : (_ = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      A =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql")),
      F =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLManagedEventsQuery.graphql")),
      O =
        h !== void 0
          ? h
          : (h = n("WAWebOrgAdminGraphQLDirectoryPageQuery.graphql")),
      B =
        y !== void 0
          ? y
          : (y = n("WAWebOrgAdminGraphQLMemberSearchQuery.graphql")),
      W = C !== void 0 ? C : (C = n("WAWebOrgAdminGraphQLGroupQuery.graphql")),
      q =
        b !== void 0
          ? b
          : (b = n("WAWebOrgAdminGraphQLAddGroupMutation.graphql")),
      U =
        v !== void 0
          ? v
          : (v = n("WAWebOrgAdminGraphQLAddChannelMutation.graphql")),
      V =
        S !== void 0
          ? S
          : (S = n("WAWebOrgAdminGraphQLInviteMembersMutation.graphql")),
      H =
        R !== void 0
          ? R
          : (R = n(
              "WAWebOrgAdminGraphQLSendManagedGroupEmailInvitesMutation.graphql",
            )),
      G =
        L !== void 0
          ? L
          : (L = n(
              "WAWebOrgAdminGraphQLSubmitBulkGroupRequestMutation.graphql",
            )),
      z = { environmentType: "whatsapp_web" },
      j = "web_org_group_email_invite",
      K = 5e3,
      Q = 25;
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              T,
              {},
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw Ve(null);
          var n = t.orgs.flatMap(ze);
          if (n.length !== t.orgs.length) throw Ue("xwa_org_list", Fe);
          return (We("xwa_org_list", "orgs=" + n.length), n);
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_name: t.memberTagName,
              member_tag_options: t.memberTagOptions,
              org_id: e,
              secondary_member_tag_name: t.secondaryMemberTagName,
            },
            r = yield o("WAWebRelayClient").commitMutation(D, { input: n }, z),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw Ve(a == null ? void 0 : a.error_reason);
          var l = je(i);
          if (l == null || l.id !== e) throw Ve(Fe);
          return (We("xwa_org_update", "", "id=" + l.id), l);
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              P,
              { orgID: e },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
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
          var s = Ke(i, a.org_info),
            u = i.version;
          if (s == null || !Ye(u)) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return babelHelpers.extends({}, s, { version: u });
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t, n, r) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("WAWebRelayClient").commitMutation(
                N,
                {
                  input: {
                    adds: n.map(Ze),
                    changes: a.map(et),
                    expected_version: t,
                    org_id: e,
                  },
                },
                z,
              ),
              s = l == null ? void 0 : l.xwa_org_admin_roster_apply_changes;
            if (s == null) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
            if (s.status === "SUCCESS")
              return {
                addedEntryIDs: s.added_entry_ids,
                status: "success",
                version: s.version,
              };
            var u =
              (i = s.error_reason) != null ? i : "NOT_FOUND_OR_UNAVAILABLE";
            if (u === "STALE_ROSTER_VERSION") return { status: "stale" };
            if (!Je(u)) throw r("err")(u);
            return {
              errorReason: u,
              invalidChange: tt(s.invalid_change),
              status: "validation_error",
            };
          },
        )),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield ie(e, t),
            o =
              (n == null ? void 0 : n.status) === "stale" ? yield ie(e, t) : n;
          if (o != null && o.status !== "success")
            throw r("err")(
              o.status === "stale" ? "STALE_ROSTER_VERSION" : o.errorReason,
            );
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield ee(e),
            o = n.version;
          if (n.isTruncated || o == null)
            throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          var a = new Set(t),
            i = n.entries.flatMap(function (e) {
              return a.has(e.id) ? [{ entry: e, type: "remove" }] : [];
            });
          return i.length === 0 ? null : yield ne(e, o, [], i);
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t, n) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a,
              i = yield o("WAWebRelayClient").commitMutation(
                x,
                { input: { member_lid: t, org_id: e, role: n } },
                z,
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
        ue.apply(this, arguments)
      );
    }
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("WAWebRelayClient").commitMutation(
              $,
              { input: { member_lid: t, org_id: e } },
              z,
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
        de.apply(this, arguments)
      );
    }
    function me(e, t, n, r) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                B,
                { after: r, first: Q, memberTag: n, orgID: e, query: t.trim() },
                babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
              ),
              c = u == null ? void 0 : u.xwa_org_member_search;
            if (c == null) throw Ue("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              We(
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
                    : it(
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
          },
        )),
        pe.apply(this, arguments)
      );
    }
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              w,
              { orgID: e },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_channels) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Ve(r == null ? void 0 : r.error_reason);
          return (
            We("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return nt(
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
        fe.apply(this, arguments)
      );
    }
    function ge(e, t) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o("WAWebRelayClient").fetchQuery(
              A,
              { channelID: t, orgID: e },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get,
            l =
              i == null || (n = i.org_info) == null
                ? void 0
                : n.managed_channel;
          if (l == null) throw Ve(i == null ? void 0 : i.error_reason);
          We("xwa_org_get.managed_channel", "", "id=" + t);
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
        he.apply(this, arguments)
      );
    }
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              F,
              { orgID: e },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_events) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Ve(r == null ? void 0 : r.error_reason);
          return (
            We("xwa_org_get.managed_events", "events=" + a.length),
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
        })),
        Ce.apply(this, arguments)
      );
    }
    function be(e, t) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r, a;
          if (t != null && t > K)
            return { memberCount: t, status: "roster_too_large" };
          var i = yield o("WAWebRelayClient").fetchQuery(
              O,
              { first: K, orgID: e },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            l = i == null ? void 0 : i.xwa_org_get;
          if (l == null || l.status !== "SUCCESS")
            throw Ve(l == null ? void 0 : l.error_reason);
          var s = (n = l.org_info) == null ? void 0 : n.members;
          if (s == null) throw Ve(Oe);
          var u = s.page_info;
          if (u == null || u.has_next_page == null) throw Ue("xwa_org_get", Fe);
          var c = s.count;
          if (c == null || (u.has_next_page && c <= K))
            throw Ue("xwa_org_get", Fe);
          if (c > K) return { memberCount: c, status: "roster_too_large" };
          var d = s.nodes.flatMap(function (e) {
              return it(
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
            throw Ue("xwa_org_get", Fe);
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
        ve.apply(this, arguments)
      );
    }
    function Se(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              M,
              { orgID: e },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            r = n == null ? void 0 : n.xwa_org_get,
            a =
              r == null ||
              (t = r.org_info) == null ||
              (t = t.managed_groups) == null
                ? void 0
                : t.nodes;
          if (a == null) throw Ve(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return ot(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return lt(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (We("xwa_org_get.managed_groups", "groups=" + i.length), i);
        })),
        Re.apply(this, arguments)
      );
    }
    function Le(e, t) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            s = yield o("WAWebRelayClient").fetchQuery(
              W,
              { orgID: e, gid: t },
              babelHelpers.extends({}, z, { fetchPolicy: "network-only" }),
            ),
            u = s == null ? void 0 : s.xwa_org_get,
            c =
              u == null || (n = u.org_info) == null ? void 0 : n.managed_group;
          if (c == null) throw Ve(u == null ? void 0 : u.error_reason);
          var d = at(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return lt(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw Ve(null);
          return (
            We("xwa_org_get.managed_group", "", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke(e, t) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              q,
              { orgID: e, gid: t },
              z,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw Ve(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw Ve(null);
          var i = at(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw Ve(null);
          return (We("xwa_org_managed_group_add", "", "gid=" + i.gid), i);
        })),
        Ie.apply(this, arguments)
      );
    }
    function Te(e, t) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebRelayClient").commitMutation(
              U,
              { channelID: t, orgID: e },
              z,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw Ve(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw Ve(null);
          var l = rt(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
            i.follower_count,
            i.creation_timestamp_s,
          );
          if (l == null) throw Ve(null);
          return (We("xwa_org_managed_channel_add", "", "id=" + l.id), l);
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e, t, n) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            n === void 0 && (n = !1);
            var r = yield o("WAWebRelayClient").commitMutation(
                V,
                { orgID: e, resend: n, rosterEntryIDs: t },
                z,
              ),
              a = r == null ? void 0 : r.xwa_org_invite_members;
            if ((a == null ? void 0 : a.status) === "SUCCESS")
              return (
                We("xwa_org_invite_members", "entries=" + t.length),
                "success"
              );
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
            throw Ve(a == null ? void 0 : a.error_reason);
          },
        )),
        $e.apply(this, arguments)
      );
    }
    function Pe(e, t, n) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRelayClient").commitMutation(
                H,
                { gid: t, orgID: e, rosterEntryIDs: n, utmCampaign: j },
                z,
              ),
              a =
                r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
            if ((a == null ? void 0 : a.status) !== "SUCCESS")
              throw Ue(
                "xwa_org_managed_group_send_email_invites",
                a == null ? void 0 : a.error_reason,
              );
            return (
              We(
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
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              G,
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
              z,
            ),
            r = n == null ? void 0 : n.xwa_org_bulk_group_request_submit,
            a = r == null ? void 0 : r.request_id,
            i = r == null ? void 0 : r.error_reason;
          if ((r == null ? void 0 : r.status) === "SUCCESS") {
            if (a == null) throw Ve(Fe);
            return (
              We("xwa_org_bulk_group_request_submit", "id=" + a),
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
          throw Ve(i);
        })),
        we.apply(this, arguments)
      );
    }
    var Ae = "NOT_FOUND_OR_UNAVAILABLE",
      Fe = "MALFORMED_SUCCESS_RESPONSE",
      Oe = "MISSING_MEMBERS_CONNECTION",
      Be = new WeakSet();
    function We(e, t, n) {
      (o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      ),
        n != null);
    }
    function qe(e, t) {
      var n = t != null ? t : Ae;
      return (
        o("WALogger")
          .ERROR(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ue(e, t) {
      return He(qe(e, t));
    }
    function Ve(e) {
      return He(e != null ? e : Ae);
    }
    function He(e) {
      var t = r("err")(e);
      return (Be.add(t), t);
    }
    function Ge(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && Be.has(e)
          ? e.message
          : "non_server_error";
    }
    function ze(e) {
      var t = je(e);
      return t == null ? [] : [t];
    }
    function je(e) {
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
    function Ke(e, t) {
      var n = e.entries;
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        if (o == null) return null;
        var a = Xe(
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
        : babelHelpers.extends({}, Qe(t), {
            entries: r,
            isTruncated: i,
            totalCount: l != null ? l : i ? null : r.length,
          });
    }
    function Qe(e) {
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
    function Xe(e, t, n, r, o, a, i, l, s, u) {
      return typeof e != "string" ||
        typeof t != "string" ||
        ![n, r, o, a, i, l].every(Ye) ||
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
    function Ye(e) {
      return e == null || typeof e == "string";
    }
    function Je(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES" ||
        e === "DUPLICATE_EMAIL"
      );
    }
    function Ze(e) {
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
    function et(e) {
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
    function tt(e) {
      var t = e == null ? void 0 : e.index,
        n = e == null ? void 0 : e.kind;
      return t == null || n == null ? null : { index: t, kind: n };
    }
    function nt(e, t, n, r, o, a, i) {
      var l = rt(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function rt(e, t, n, r, o, a, i) {
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
    function ot(e, t, n, r, o, a) {
      var i = at(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function at(e, t, n, r, o, a) {
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
    function it(e, t, n, r, a, i, l) {
      return e == null || e === "" || t == null || r == null
        ? []
        : [
            {
              displayName: o("WAWebOrgMemberDisplayName").getOrgMemberFullName(
                t === e ? "" : t,
                n,
              ),
              lid: e,
              memberTag: i,
              phoneNumber: l,
              role: r,
              username: a,
            },
          ];
    }
    function lt(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = K),
      (l.loadOrgAdminOrgs = X),
      (l.updateOrgAdminSettings = J),
      (l.loadOrgAdminRoster = ee),
      (l.applyOrgAdminRosterChanges = ne),
      (l.removeOrgAdminRosterEntries = oe),
      (l.setOrgAdminMemberRole = se),
      (l.removeOrgAdminMember = ce),
      (l.loadOrgAdminMemberSearchPage = me),
      (l.loadOrgAdminChannels = _e),
      (l.loadOrgAdminChannelAdmins = ge),
      (l.loadOrgAdminEvents = ye),
      (l.loadOrgAdminDirectory = be),
      (l.loadOrgAdminManagedGroups = Se),
      (l.loadOrgAdminGroup = Le),
      (l.addOrgManagedGroup = ke),
      (l.addOrgManagedChannel = Te),
      (l.inviteOrgMembers = xe),
      (l.sendOrgManagedGroupEmailInvites = Pe),
      (l.submitOrgBulkGroupRequest = Me),
      (l.getOrgAdminServerFailureReason = Ge));
  },
  98,
);
