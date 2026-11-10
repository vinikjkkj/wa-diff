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
          : (m = n(
              "WAWebOrgAdminGraphQLApplyAdminRosterChangesMutation.graphql",
            )),
      w =
        p !== void 0
          ? p
          : (p = n("WAWebOrgAdminGraphQLManagedGroupsQuery.graphql")),
      A =
        _ !== void 0
          ? _
          : (_ = n("WAWebOrgAdminGraphQLManagedChannelsQuery.graphql")),
      F =
        f !== void 0
          ? f
          : (f = n("WAWebOrgAdminGraphQLManagedChannelAdminsQuery.graphql")),
      O =
        g !== void 0
          ? g
          : (g = n("WAWebOrgAdminGraphQLManagedEventsQuery.graphql")),
      B =
        h !== void 0
          ? h
          : (h = n("WAWebOrgAdminGraphQLEventRsvpCountsQuery.graphql")),
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
      Q = "web_org_group_email_invite",
      X = 5e3,
      Y = 25;
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              D,
              {},
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw je(null);
          var n = t.orgs.flatMap(Xe);
          if (n.length !== t.orgs.length) throw ze("xwa_org_list", qe);
          return (He("xwa_org_list", "orgs=" + n.length), n);
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
          var n = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_name: t.memberTagName,
              member_tag_options: t.memberTagOptions,
              org_id: e,
              secondary_member_tag_name: t.secondaryMemberTagName,
            },
            r = yield o("WAWebRelayClient").commitMutation(x, { input: n }, K),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw je(a == null ? void 0 : a.error_reason);
          var l = Ye(i);
          if (l == null || l.id !== e) throw je(qe);
          return (He("xwa_org_update", "", "id=" + l.id), l);
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = Je(i, a.org_info),
            u = i.version;
          if (s == null || !tt(u)) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return babelHelpers.extends({}, s, { version: u });
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t, n, r) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("WAWebRelayClient").commitMutation(
                M,
                {
                  input: {
                    adds: n.map(rt),
                    changes: a.map(ot),
                    expected_version: t,
                    org_id: e,
                  },
                },
                K,
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
            if (!nt(u)) throw r("err")(u);
            return {
              errorReason: u,
              invalidChange: at(s.invalid_change),
              status: "validation_error",
            };
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
          var n = yield se(e, t),
            o =
              (n == null ? void 0 : n.status) === "stale" ? yield se(e, t) : n;
          if (o != null && o.status !== "success")
            throw r("err")(
              o.status === "stale" ? "STALE_ROSTER_VERSION" : o.errorReason,
            );
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield ne(e),
            o = n.version;
          if (n.isTruncated || o == null)
            throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          var a = new Set(t),
            i = n.entries.flatMap(function (e) {
              return a.has(e.id) ? [{ entry: e, type: "remove" }] : [];
            });
          return i.length === 0 ? null : yield oe(e, o, [], i);
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e, t, n) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        de.apply(this, arguments)
      );
    }
    function me(e, t) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        pe.apply(this, arguments)
      );
    }
    function _e(e, t, n, r) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                q,
                { after: r, first: Y, memberTag: n, orgID: e, query: t.trim() },
                babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
              ),
              c = u == null ? void 0 : u.xwa_org_member_search;
            if (c == null) throw ze("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              He(
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
                    : ct(
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
        fe.apply(this, arguments)
      );
    }
    function ge(e) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              A,
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
          if (a == null) throw je(r == null ? void 0 : r.error_reason);
          return (
            He("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return it(
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
        he.apply(this, arguments)
      );
    }
    function ye(e, t) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o("WAWebRelayClient").fetchQuery(
              F,
              { channelID: t, orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get,
            l =
              i == null || (n = i.org_info) == null
                ? void 0
                : n.managed_channel;
          if (l == null) throw je(i == null ? void 0 : i.error_reason);
          He("xwa_org_get.managed_channel", "", "id=" + t);
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
        Ce.apply(this, arguments)
      );
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              (t = t.managed_events) == null
                ? void 0
                : t.nodes;
          if (a == null) throw je(r == null ? void 0 : r.error_reason);
          return (
            He("xwa_org_get.managed_events", "events=" + a.length),
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
            n,
            r,
            a,
            i = yield o("WAWebRelayClient").fetchQuery(
              B,
              { eventID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
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
          var n, r, a;
          if (t != null && t > X)
            return { memberCount: t, status: "roster_too_large" };
          var i = yield o("WAWebRelayClient").fetchQuery(
              W,
              { first: X, orgID: e },
              babelHelpers.extends({}, K, { fetchPolicy: "network-only" }),
            ),
            l = i == null ? void 0 : i.xwa_org_get;
          if (l == null || l.status !== "SUCCESS")
            throw je(l == null ? void 0 : l.error_reason);
          var s = (n = l.org_info) == null ? void 0 : n.members;
          if (s == null) throw je(Ue);
          var u = s.page_info;
          if (u == null || u.has_next_page == null) throw ze("xwa_org_get", qe);
          var c = s.count;
          if (c == null || (u.has_next_page && c <= X))
            throw ze("xwa_org_get", qe);
          if (c > X) return { memberCount: c, status: "roster_too_large" };
          var d = s.nodes.flatMap(function (e) {
              return ct(
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
            throw ze("xwa_org_get", qe);
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
        Ee.apply(this, arguments)
      );
    }
    function ke(e) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
              w,
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
          if (a == null) throw je(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return st(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return dt(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (He("xwa_org_get.managed_groups", "groups=" + i.length), i);
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
          if (c == null) throw je(u == null ? void 0 : u.error_reason);
          var d = ut(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return dt(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw je(null);
          return (
            He("xwa_org_get.managed_group", "", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e, t) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              V,
              { orgID: e, gid: t },
              K,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw je(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw je(null);
          var i = ut(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw je(null);
          return (He("xwa_org_managed_group_add", "", "gid=" + i.gid), i);
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe(e, t) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebRelayClient").commitMutation(
              H,
              { channelID: t, orgID: e },
              K,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw je(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw je(null);
          var l = lt(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
            i.follower_count,
            i.creation_timestamp_s,
          );
          if (l == null) throw je(null);
          return (He("xwa_org_managed_channel_add", "", "id=" + l.id), l);
        })),
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t, n) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            n === void 0 && (n = !1);
            var r = yield o("WAWebRelayClient").commitMutation(
                G,
                { orgID: e, resend: n, rosterEntryIDs: t },
                K,
              ),
              a = r == null ? void 0 : r.xwa_org_invite_members;
            if ((a == null ? void 0 : a.status) === "SUCCESS")
              return (
                He("xwa_org_invite_members", "entries=" + t.length),
                "success"
              );
            if ((a == null ? void 0 : a.error_reason) === "INVALID_EMAIL_BATCH")
              return (
                o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] xwa_org_invite_members rejected the email batch",
                    ])),
                ),
                "invalid_email_batch"
              );
            throw je(a == null ? void 0 : a.error_reason);
          },
        )),
        we.apply(this, arguments)
      );
    }
    function Ae(e, t, n) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRelayClient").commitMutation(
                z,
                { gid: t, orgID: e, rosterEntryIDs: n, utmCampaign: Q },
                K,
              ),
              a =
                r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
            if ((a == null ? void 0 : a.status) !== "SUCCESS")
              throw ze(
                "xwa_org_managed_group_send_email_invites",
                a == null ? void 0 : a.error_reason,
              );
            return (
              He(
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
        Fe.apply(this, arguments)
      );
    }
    function Oe(e, t) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            if (a == null) throw je(qe);
            return (
              He("xwa_org_bulk_group_request_submit", "id=" + a),
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
          throw je(i);
        })),
        Be.apply(this, arguments)
      );
    }
    var We = "NOT_FOUND_OR_UNAVAILABLE",
      qe = "MALFORMED_SUCCESS_RESPONSE",
      Ue = "MISSING_MEMBERS_CONNECTION",
      Ve = new WeakSet();
    function He(e, t, n) {
      (o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      ),
        n != null);
    }
    function Ge(e, t) {
      var n = t != null ? t : We;
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
    function ze(e, t) {
      return Ke(Ge(e, t));
    }
    function je(e) {
      return Ke(e != null ? e : We);
    }
    function Ke(e) {
      var t = r("err")(e);
      return (Ve.add(t), t);
    }
    function Qe(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && Ve.has(e)
          ? e.message
          : "non_server_error";
    }
    function Xe(e) {
      var t = Ye(e);
      return t == null ? [] : [t];
    }
    function Ye(e) {
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
    function Je(e, t) {
      var n = e.entries;
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        if (o == null) return null;
        var a = et(
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
        : babelHelpers.extends({}, Ze(t), {
            entries: r,
            isTruncated: i,
            totalCount: l != null ? l : i ? null : r.length,
          });
    }
    function Ze(e) {
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
    function et(e, t, n, r, o, a, i, l, s, u) {
      return typeof e != "string" ||
        typeof t != "string" ||
        ![n, r, o, a, i, l].every(tt) ||
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
    function tt(e) {
      return e == null || typeof e == "string";
    }
    function nt(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES" ||
        e === "DUPLICATE_EMAIL"
      );
    }
    function rt(e) {
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
    function ot(e) {
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
    function at(e) {
      var t = e == null ? void 0 : e.index,
        n = e == null ? void 0 : e.kind;
      return t == null || n == null ? null : { index: t, kind: n };
    }
    function it(e, t, n, r, o, a, i) {
      var l = lt(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function lt(e, t, n, r, o, a, i) {
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
    function st(e, t, n, r, o, a) {
      var i = ut(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function ut(e, t, n, r, o, a) {
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
    function ct(e, t, n, r, a, i, l) {
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
    function dt(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = X),
      (l.loadOrgAdminOrgs = J),
      (l.updateOrgAdminSettings = ee),
      (l.loadOrgAdminRoster = ne),
      (l.applyOrgAdminRosterChanges = oe),
      (l.removeOrgAdminRosterEntries = ie),
      (l.setOrgAdminMemberRole = ce),
      (l.removeOrgAdminMember = me),
      (l.loadOrgAdminMemberSearchPage = _e),
      (l.loadOrgAdminChannels = ge),
      (l.loadOrgAdminChannelAdmins = ye),
      (l.loadOrgAdminEvents = be),
      (l.loadOrgAdminEventRsvpCounts = Se),
      (l.loadOrgAdminDirectory = Le),
      (l.loadOrgAdminManagedGroups = ke),
      (l.loadOrgAdminGroup = Te),
      (l.addOrgManagedGroup = xe),
      (l.addOrgManagedChannel = Pe),
      (l.inviteOrgMembers = Me),
      (l.sendOrgManagedGroupEmailInvites = Ae),
      (l.submitOrgBulkGroupRequest = Oe),
      (l.getOrgAdminServerFailureReason = Qe));
  },
  98,
);
