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
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              $,
              {},
              babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
            ),
            t = e == null ? void 0 : e.xwa_org_list;
          if (t == null) throw Je(null);
          var n = t.orgs.flatMap(tt);
          if (n.length !== t.orgs.length) throw Ye("xwa_org_list", ze);
          return (Qe("xwa_org_list", "orgs=" + n.length), n);
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
          var n = {
              description: t.description,
              icon_blob: t.iconBlob,
              member_tag_name: t.memberTagName,
              member_tag_options: t.memberTagOptions,
              org_id: e,
              secondary_member_tag_name: t.secondaryMemberTagName,
            },
            r = yield o("WAWebRelayClient").commitMutation(P, { input: n }, Y),
            a = r == null ? void 0 : r.xwa_org_update,
            i = a == null ? void 0 : a.org;
          if (a == null || a.status !== "SUCCESS" || i == null)
            throw Je(a == null ? void 0 : a.error_reason);
          var l = nt(i);
          if (l == null || l.id !== e) throw Je(ze);
          return (Qe("xwa_org_update", "", "id=" + l.id), l);
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
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
          var s = rt(i, a.org_info),
            u = i.version;
          if (s == null || !it(u)) throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          return babelHelpers.extends({}, s, { version: u });
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t, n, r) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l = yield o("WAWebRelayClient").commitMutation(
                F,
                {
                  input: {
                    adds: n.map(st),
                    changes: a.map(ut),
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
            var u =
              (i = s.error_reason) != null ? i : "NOT_FOUND_OR_UNAVAILABLE";
            if (u === "STALE_ROSTER_VERSION") return { status: "stale" };
            if (!lt(u)) throw r("err")(u);
            return {
              errorReason: u,
              invalidChange: ct(s.invalid_change),
              status: "validation_error",
            };
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield de(e, t),
            o =
              (n == null ? void 0 : n.status) === "stale" ? yield de(e, t) : n;
          if (o != null && o.status !== "success")
            throw r("err")(
              o.status === "stale" ? "STALE_ROSTER_VERSION" : o.errorReason,
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
          var n = yield ae(e),
            o = n.version;
          if (n.isTruncated || o == null)
            throw r("err")("NOT_FOUND_OR_UNAVAILABLE");
          var a = new Set(t),
            i = n.entries.flatMap(function (e) {
              return a.has(e.id) ? [{ entry: e, type: "remove" }] : [];
            });
          return i.length === 0 ? null : yield le(e, o, [], i);
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t, n) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a,
              i = yield o("WAWebRelayClient").commitMutation(
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
          },
        )),
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
            a = yield o("WAWebRelayClient").commitMutation(
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
          var t = yield o("WAWebRelayClient").commitMutation(
              M,
              { orgID: e },
              Y,
            ),
            n = t == null ? void 0 : t.xwa_org_leave;
          if (n == null || n.status !== "SUCCESS")
            throw Ye("xwa_org_leave", n == null ? void 0 : n.error_reason);
          Qe("xwa_org_leave", "", "id=" + e);
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e, t, n, r) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = yield o("WAWebRelayClient").fetchQuery(
                H,
                {
                  after: r,
                  first: ee,
                  memberTag: n,
                  orgID: e,
                  query: t.trim(),
                },
                babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
              ),
              c = u == null ? void 0 : u.xwa_org_member_search;
            if (c == null) throw Ye("xwa_org_member_search", null);
            var d = c.page_info;
            return (
              Qe(
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
                    : ft(
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
          if (a == null) throw Je(r == null ? void 0 : r.error_reason);
          return (
            Qe("xwa_org_get.managed_channels", "channels=" + a.length),
            a.flatMap(function (e) {
              var t;
              return dt(
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
              W,
              { channelID: t, orgID: e },
              babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
            ),
            i = a == null ? void 0 : a.xwa_org_get,
            l =
              i == null || (n = i.org_info) == null
                ? void 0
                : n.managed_channel;
          if (l == null) throw Je(i == null ? void 0 : i.error_reason);
          Qe("xwa_org_get.managed_channel", "", "id=" + t);
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
        Le.apply(this, arguments)
      );
    }
    function Ee(e) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
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
          if (a == null) throw Je(r == null ? void 0 : r.error_reason);
          return (
            Qe("xwa_org_get.managed_events", "events=" + a.length),
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
        ke.apply(this, arguments)
      );
    }
    function Ie(e) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i = yield o("WAWebRelayClient").fetchQuery(
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
          var n, r, a;
          if (t != null && t > Z)
            return { memberCount: t, status: "roster_too_large" };
          var i = yield o("WAWebRelayClient").fetchQuery(
              V,
              { first: Z, orgID: e },
              babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
            ),
            l = i == null ? void 0 : i.xwa_org_get;
          if (l == null || l.status !== "SUCCESS")
            throw Je(l == null ? void 0 : l.error_reason);
          var s = (n = l.org_info) == null ? void 0 : n.members;
          if (s == null) throw Je(je);
          var u = s.page_info;
          if (u == null || u.has_next_page == null) throw Ye("xwa_org_get", ze);
          var c = s.count;
          if (c == null || (u.has_next_page && c <= Z))
            throw Ye("xwa_org_get", ze);
          if (c > Z) return { memberCount: c, status: "roster_too_large" };
          var d = s.nodes.flatMap(function (e) {
              return ft(
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
            throw Ye("xwa_org_get", ze);
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
        xe.apply(this, arguments)
      );
    }
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebRelayClient").fetchQuery(
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
          if (a == null) throw Je(r == null ? void 0 : r.error_reason);
          var i = a.flatMap(function (e) {
            var t;
            return pt(
              e.gid,
              e.subject,
              e.creation_timestamp_s,
              e.participant_count,
              ((t = e.participants) != null ? t : []).flatMap(function (e) {
                return gt(e.lid, e.role);
              }),
              e.roster_partial,
            );
          });
          return (Qe("xwa_org_get.managed_groups", "groups=" + i.length), i);
        })),
        Pe.apply(this, arguments)
      );
    }
    function Ne(e, t) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i,
            l,
            s = yield o("WAWebRelayClient").fetchQuery(
              G,
              { orgID: e, gid: t },
              babelHelpers.extends({}, Y, { fetchPolicy: "network-only" }),
            ),
            u = s == null ? void 0 : s.xwa_org_get,
            c =
              u == null || (n = u.org_info) == null ? void 0 : n.managed_group;
          if (c == null) throw Je(u == null ? void 0 : u.error_reason);
          var d = _t(
            c.gid,
            c.subject,
            c.creation_timestamp_s,
            c.participant_count,
            ((r = c.participants) != null ? r : []).flatMap(function (e) {
              return gt(e.lid, e.role);
            }),
            c.roster_partial,
          );
          if (d == null) throw Je(null);
          return (
            Qe("xwa_org_get.managed_group", "", "gid=" + d.gid),
            babelHelpers.extends({}, d, {
              description: (a = c.description) != null ? a : null,
              pictureURI:
                (i = (l = c.picture) == null ? void 0 : l.uri) != null
                  ? i
                  : null,
            })
          );
        })),
        Me.apply(this, arguments)
      );
    }
    function we(e, t) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
              z,
              { orgID: e, gid: t },
              Y,
            ),
            r = n == null ? void 0 : n.xwa_org_managed_group_add;
          if (r == null || r.status !== "SUCCESS")
            throw Je(r == null ? void 0 : r.error_reason);
          var a = r.group;
          if (a == null) throw Je(null);
          var i = _t(
            a.gid,
            a.subject,
            a.creation_timestamp_s,
            a.participant_count,
          );
          if (i == null) throw Je(null);
          return (Qe("xwa_org_managed_group_add", "", "gid=" + i.gid), i);
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e, t) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("WAWebRelayClient").commitMutation(
              j,
              { channelID: t, orgID: e },
              Y,
            ),
            a = r == null ? void 0 : r.xwa_org_managed_channel_add;
          if (a == null || a.status !== "SUCCESS")
            throw Je(a == null ? void 0 : a.error_reason);
          var i = a.channel;
          if (i == null) throw Je(null);
          var l = mt(
            i.id,
            i.name,
            i.description,
            i.invite_code,
            (n = i.picture) == null ? void 0 : n.uri,
            i.follower_count,
            i.creation_timestamp_s,
          );
          if (l == null) throw Je(null);
          return (Qe("xwa_org_managed_channel_add", "", "id=" + l.id), l);
        })),
        Oe.apply(this, arguments)
      );
    }
    function Be(e, t, n) {
      return We.apply(this, arguments);
    }
    function We() {
      return (
        (We = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            n === void 0 && (n = !1);
            var r = yield o("WAWebRelayClient").commitMutation(
                K,
                { orgID: e, resend: n, rosterEntryIDs: t },
                Y,
              ),
              a = r == null ? void 0 : r.xwa_org_invite_members;
            if ((a == null ? void 0 : a.status) === "SUCCESS")
              return (
                Qe("xwa_org_invite_members", "entries=" + t.length),
                "success"
              );
            if ((a == null ? void 0 : a.error_reason) === "INVALID_EMAIL_BATCH")
              return (
                o("WALogger").WARN(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] xwa_org_invite_members rejected the email batch",
                    ])),
                ),
                "invalid_email_batch"
              );
            if (
              (a == null ? void 0 : a.error_reason) === "STALE_ROSTER_VERSION"
            )
              return (
                o("WALogger").WARN(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] xwa_org_invite_members refused a stale roster",
                    ])),
                ),
                "stale_roster"
              );
            throw Je(a == null ? void 0 : a.error_reason);
          },
        )),
        We.apply(this, arguments)
      );
    }
    function qe(e, t, n) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield o("WAWebRelayClient").commitMutation(
                Q,
                { gid: t, orgID: e, rosterEntryIDs: n, utmCampaign: J },
                Y,
              ),
              a =
                r == null ? void 0 : r.xwa_org_managed_group_send_email_invites;
            if ((a == null ? void 0 : a.status) !== "SUCCESS")
              throw Ye(
                "xwa_org_managed_group_send_email_invites",
                a == null ? void 0 : a.error_reason,
              );
            return (
              Qe(
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
        Ue.apply(this, arguments)
      );
    }
    function Ve(e, t) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").commitMutation(
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
            if (a == null) throw Je(ze);
            return (
              Qe("xwa_org_bulk_group_request_submit", "id=" + a),
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
          throw Je(i);
        })),
        He.apply(this, arguments)
      );
    }
    var Ge = "NOT_FOUND_OR_UNAVAILABLE",
      ze = "MALFORMED_SUCCESS_RESPONSE",
      je = "MISSING_MEMBERS_CONNECTION",
      Ke = new WeakSet();
    function Qe(e, t, n) {
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "[org-admin] ",
            " ok ",
            "",
          ])),
        e,
        t,
      ),
        n != null);
    }
    function Xe(e, t) {
      var n = t != null ? t : Ge;
      return (
        o("WALogger")
          .ERROR(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ye(e, t) {
      return Ze(Xe(e, t));
    }
    function Je(e) {
      return Ze(e != null ? e : Ge);
    }
    function Ze(e) {
      var t = r("err")(e);
      return (Ke.add(t), t);
    }
    function et(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        : e instanceof Error && Ke.has(e)
          ? e.message
          : "non_server_error";
    }
    function tt(e) {
      var t = nt(e);
      return t == null ? [] : [t];
    }
    function nt(e) {
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
    function rt(e, t) {
      var n = e.entries;
      if (!Array.isArray(n)) return null;
      var r = [];
      for (var o of n) {
        if (o == null) return null;
        var a = at(
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
        : babelHelpers.extends({}, ot(t), {
            entries: r,
            isTruncated: i,
            totalCount: l != null ? l : i ? null : r.length,
          });
    }
    function ot(e) {
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
    function at(e, t, n, r, o, a, i, l, s, u) {
      return typeof e != "string" ||
        typeof t != "string" ||
        ![n, r, o, a, i, l].every(it) ||
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
    function it(e) {
      return e == null || typeof e == "string";
    }
    function lt(e) {
      return (
        e === "INVALID_ROSTER_ENTRY" ||
        e === "DUPLICATE_ROSTER_CONTACT" ||
        e === "INVALID_MEMBER_TAG" ||
        e === "TOO_MANY_ROSTER_ENTRIES" ||
        e === "DUPLICATE_EMAIL"
      );
    }
    function st(e) {
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
    function ut(e) {
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
    function ct(e) {
      var t = e == null ? void 0 : e.index,
        n = e == null ? void 0 : e.kind;
      return t == null || n == null ? null : { index: t, kind: n };
    }
    function dt(e, t, n, r, o, a, i) {
      var l = mt(e, t, n, r, o, a, i);
      return l == null ? [] : [l];
    }
    function mt(e, t, n, r, o, a, i) {
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
    function pt(e, t, n, r, o, a) {
      var i = _t(e, t, n, r, o, a);
      return i == null ? [] : [i];
    }
    function _t(e, t, n, r, o, a) {
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
    function ft(e, t, n, r, a, i, l) {
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
    function gt(e, t) {
      return e == null || t == null ? [] : [{ lid: e, role: t }];
    }
    ((l.MAX_ORG_DIRECTORY_MEMBERS = Z),
      (l.loadOrgAdminOrgs = te),
      (l.updateOrgAdminSettings = re),
      (l.loadOrgAdminRoster = ae),
      (l.applyOrgAdminRosterChanges = le),
      (l.removeOrgAdminRosterEntries = ue),
      (l.setOrgAdminMemberRole = pe),
      (l.removeOrgAdminMember = fe),
      (l.leaveOrg = he),
      (l.loadOrgAdminMemberSearchPage = Ce),
      (l.loadOrgAdminChannels = ve),
      (l.loadOrgAdminChannelAdmins = Re),
      (l.loadOrgAdminEvents = Ee),
      (l.loadOrgAdminEventRsvpCounts = Ie),
      (l.loadOrgAdminDirectory = De),
      (l.loadOrgAdminManagedGroups = $e),
      (l.loadOrgAdminGroup = Ne),
      (l.addOrgManagedGroup = we),
      (l.addOrgManagedChannel = Fe),
      (l.inviteOrgMembers = Be),
      (l.sendOrgManagedGroupEmailInvites = qe),
      (l.submitOrgBulkGroupRequest = Ve),
      (l.getOrgAdminServerFailureReason = et));
  },
  98,
);
