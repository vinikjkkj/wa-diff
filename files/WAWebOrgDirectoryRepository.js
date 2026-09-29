__d(
  "WAWebOrgDirectoryRepository",
  [
    "Promise",
    "WALogger",
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgAdminOrgCache",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebSchemaOrg",
    "WAWebUsernameTypes",
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
      f = 3,
      g = new Set(),
      h = null,
      y = 0,
      C = 0,
      b = null,
      v = null,
      S = 0,
      R = new Map(),
      L = new Map(),
      E = new Map(),
      k = new Map(),
      I = new Map(),
      T = fe(null);
    function D() {
      return T;
    }
    function x(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function $(e) {
      if ((ce(e), b != null)) return b;
      if (G()) return (_ || (_ = n("Promise"))).resolve();
      pe({ organizationsError: null, organizationsStatus: "loading" });
      var t = y,
        r = C,
        o = (_ || (_ = n("Promise")))
          .resolve()
          .then(function () {
            return V(t, r);
          })
          .finally(function () {
            b === o && (b = null);
          });
      return ((b = o), o);
    }
    function P(e) {
      if ((ce(e), v != null)) return v;
      (C++,
        pe({
          organizationsError: null,
          organizationsStatus:
            T.organizations.length === 0 ? "loading" : "refreshing",
        }));
      var t = y,
        r = S,
        o = (_ || (_ = n("Promise")))
          .resolve()
          .then(function () {
            return z(t, r);
          })
          .finally(function () {
            v === o && (v = null);
          });
      return ((v = o), o);
    }
    function N(e, t) {
      ce(e);
      var r = k.get(t);
      if (r != null) return r;
      me(t, { error: null, status: "loading" });
      var o = y,
        a = (_ || (_ = n("Promise")))
          .resolve()
          .then(function () {
            return se(o, t);
          })
          .finally(function () {
            k.get(t) === a && k.delete(t);
          });
      return (k.set(t, a), a);
    }
    function M(e, t) {
      var r, a;
      if ((ce(e), T.memberDirectoryEnabledByOrgID.get(t) !== !0))
        return (_ || (_ = n("Promise"))).resolve();
      var i = I.get(t);
      if (i != null) return i;
      var l =
        o("WAWebOrgContactCollection").OrgContactCollection.getByOrgId(t)
          .length > 0 ||
        (((r = o("WAWebOrgCollection").OrgCollection.get(t)) == null
          ? void 0
          : r.directoryIsComplete) === !0 &&
          ((a = T.directoryStateByOrgID.get(t)) == null ? void 0 : a.status) ===
            "ready");
      me(t, { error: null, status: l ? "refreshing" : "loading" });
      var s = y,
        u = Y(t),
        c = K(s, u, t);
      return (I.set(t, c), c);
    }
    function w(e, t) {
      if (T.accountKey !== e) return (_ || (_ = n("Promise"))).resolve();
      (S++,
        R.set(t.id, { mutationEpoch: S, organization: t }),
        o("WAWebOrgCollection").OrgCollection.get(t.id) != null &&
          o("WAWebOrgCollection").OrgCollection.addRows([le(t)]));
      var r = new Map(T.memberDirectoryEnabledByOrgID);
      return (
        r.set(t.id, t.isMemberDirectoryEnabled),
        pe({
          memberDirectoryEnabledByOrgID: r,
          organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
        }),
        o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrg(t)
      );
    }
    function A(e, t, n, r, o) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l;
            if (T.accountKey !== e) return "stale";
            var s = o("WAWebSchemaOrg").OrgMemberRole.cast(a);
            if (s == null) return "needs_refresh";
            var c = y,
              d = X(t),
              m = !1;
            try {
              m = yield o("WAWebDBOrg").updateOrgMemberRole(t, n, s, i);
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[org-directory] member role reconciliation failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("org-directory-member-role-reconciliation-failed"),
                J(c, e) ? "needs_refresh" : "stale"
              );
            }
            if (!J(c, e)) return "stale";
            var p = O(t, i),
              _ = o(
                "WAWebOrgContactCollection",
              ).OrgContactCollection.getByOrgIdAndLid(t, n);
            if (
              (_ == null || _.set({ role: s }),
              T.memberDirectoryEnabledByOrgID.get(t) !== !0)
            )
              return (
                pe({
                  organizations:
                    o("WAWebOrgCollection").OrgCollection.toArray(),
                }),
                p ? "complete" : "needs_refresh"
              );
            var f = m && p && _ != null && !d,
              g =
                (l = T.directoryStateByOrgID.get(t)) == null
                  ? void 0
                  : l.status;
            return (
              f &&
                !I.has(t) &&
                g !== "error" &&
                me(t, { error: null, status: "ready" }),
              pe({
                organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
              }),
              f ? "complete" : "needs_refresh"
            );
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      var n = o("WAWebOrgCollection").OrgCollection.get(e);
      return n == null || t == null
        ? !1
        : n.memberCount === t
          ? !0
          : (n.set({ directoryIsComplete: !1, memberCount: t }), !1);
    }
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i;
            if (T.accountKey !== e) return "stale";
            var l = y,
              s = X(t),
              u = !1;
            try {
              u = yield o("WAWebDBOrg").removeOrgMember(t, n, a);
            } catch (t) {
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[org-directory] member removal reconciliation failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs(
                    "org-directory-member-removal-reconciliation-failed",
                  ),
                J(l, e) ? "needs_refresh" : "stale"
              );
            }
            if (!J(l, e)) return "stale";
            var d = o(
              "WAWebOrgContactCollection",
            ).OrgContactCollection.getByOrgIdAndLid(t, n);
            d != null &&
              o("WAWebOrgContactCollection").OrgContactCollection.remove(d);
            var m = q(t, d != null, a),
              p = u && m && !s,
              _ =
                (i = T.directoryStateByOrgID.get(t)) == null
                  ? void 0
                  : i.status;
            return (
              p &&
                !I.has(t) &&
                _ !== "error" &&
                me(t, { error: null, status: "ready" }),
              pe({
                organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
              }),
              p ? "complete" : "needs_refresh"
            );
          },
        )),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      var r = o("WAWebOrgCollection").OrgCollection.get(e);
      if (r == null || n == null) return !1;
      var a =
        t && r.memberCount != null ? Math.max(0, r.memberCount - 1) : null;
      return n === a
        ? (r.set({ memberCount: n }), !0)
        : (r.set({ directoryIsComplete: !1, memberCount: n }), !1);
    }
    function U() {
      (y++,
        (C = 0),
        (h = null),
        (b = null),
        (v = null),
        (S = 0),
        (R = new Map()),
        (L = new Map()),
        (E = new Map()),
        (k = new Map()),
        (I = new Map()),
        o("WAWebOrgCollection").OrgCollection.reset(),
        o("WAWebOrgContactCollection").OrgContactCollection.reset(),
        (T = fe(null)),
        _e());
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("WAWebDBOrg").getOrgs();
            if (e !== y || G()) return;
            (o("WAWebOrgCollection").OrgCollection.reset(),
              o("WAWebOrgCollection").OrgCollection.addRows(n),
              pe(
                babelHelpers.extends(
                  {
                    memberDirectoryEnabledByOrgID: new Map(
                      n.flatMap(function (e) {
                        return e.isMemberDirectoryEnabled == null
                          ? []
                          : [[e.orgId, e.isMemberDirectoryEnabled]];
                      }),
                    ),
                    organizations:
                      o("WAWebOrgCollection").OrgCollection.toArray(),
                  },
                  t === C
                    ? { organizationsError: null, organizationsStatus: "ready" }
                    : {},
                ),
              ));
          } catch (n) {
            if (e !== y || G() || t !== C) return;
            pe({
              organizationsError: r("getErrorSafe")(n),
              organizationsStatus: "error",
            });
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G() {
      return T.orderedOrgIDs != null;
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminOrgs();
            if (e !== y) return;
            (ie(ae(n, t), t),
              t === S &&
                (yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrgs(
                  n,
                  function () {
                    return e === y && t === S;
                  },
                )));
          } catch (t) {
            var a = r("getErrorSafe")(t);
            if (
              (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] organizations load failed: ",
                      "",
                    ])),
                  o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(t),
                )
                .catching(a)
                .sendLogs("org-admin-orgs-load-failed"),
              e !== y)
            )
              return;
            (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] organizations load failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(t),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("org-admin-orgs-load-failed"),
              pe({ organizationsError: a, organizationsStatus: "error" }));
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t, n) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a,
              i = yield te(n),
              l = i.memberCount,
              s = i.members,
              u = i.receivedMemberCount;
            if (!Z(e, t, n)) return;
            var c = s.flatMap(function (e) {
                return de(n, e);
              }),
              d = ee(c, u);
            if (
              (yield o("WAWebDBOrg").replaceCompleteOrgRoster(n, c, l, d),
              !Z(e, t, n))
            )
              return;
            (o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
              n,
            ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(c),
              (a = o("WAWebOrgCollection").OrgCollection.get(n)) == null ||
                a.set({ directoryIsComplete: d, memberCount: l }),
              me(n, { error: null, status: "ready" }));
          } catch (a) {
            if (!Z(e, t, n)) return;
            var m = r("getErrorSafe")(a);
            (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] public member directory refresh failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(a),
              )
              .catching(m)
              .sendLogs("org-admin-directory-refresh-failed"),
              me(n, { error: m, status: "error" }));
          } finally {
            Z(e, t, n) && I.delete(n);
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return (S++, L.set(e, S), E.set(e, Y(e) + 1), I.delete(e));
    }
    function Y(e) {
      var t;
      return (t = E.get(e)) != null ? t : 0;
    }
    function J(e, t) {
      return e === y && T.accountKey === t;
    }
    function Z(e, t, n) {
      return e === y && t === Y(n);
    }
    function ee(t, n) {
      return t.length >= n
        ? !0
        : (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-directory] dropped ",
                  " of ",
                  " members",
                ])),
              n - t.length,
              n,
            )
            .sendLogs("org-directory-dropped-members"),
          !1);
    }
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          var n = yield re(e),
            o = Array.from(
              new Map(
                n.members.map(function (e) {
                  return [e.lid, e];
                }),
              ).values(),
            ),
            a = n.receivedMemberCount - n.members.length,
            i = o.length + a;
          if (n.count == null || (!n.countChanged && i === n.count)) {
            var l;
            return {
              memberCount: (l = n.count) != null ? l : i,
              members: o,
              receivedMemberCount: i,
            };
          }
          if (t >= f) throw r("err")("INCOMPLETE_DIRECTORY");
          return yield te(e, t + 1);
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e, t, n, r) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i;
            (t === void 0 &&
              (t = {
                count: null,
                countChanged: !1,
                hasLoadedPage: !1,
                members: [],
                receivedMemberCount: 0,
              }),
              n === void 0 && (n = null),
              a === void 0 && (a = new Set()));
            var l = yield o("WAWebOrgAdminGraphQL").loadOrgAdminDirectoryPage(
              e,
              n,
            );
            if (
              ((i = t.members).push.apply(i, l.members),
              (t.receivedMemberCount += l.receivedMemberCount),
              t.hasLoadedPage && l.count !== t.count
                ? (t.countChanged = !0)
                : t.hasLoadedPage ||
                  ((t.count = l.count), (t.hasLoadedPage = !0)),
              !l.hasNextPage)
            )
              return t;
            var s = l.endCursor;
            if (s == null || s === n || a.has(s))
              throw r("err")("STALLED_DIRECTORY_CURSOR");
            if (
              (a.add(s),
              a.size >= o("WAWebOrgAdminGraphQL").ORG_DIRECTORY_SYNC_PAGE_LIMIT)
            )
              throw r("err")("DIRECTORY_PAGE_LIMIT_EXCEEDED");
            return yield re(e, t, s, a);
          },
        )),
        oe.apply(this, arguments)
      );
    }
    function ae(e, t) {
      return e.map(function (e) {
        var n = R.get(e.id);
        return n != null && n.mutationEpoch > t ? n.organization : e;
      });
    }
    function ie(e, t) {
      var n,
        r = new Set(
          e.map(function (e) {
            return e.id;
          }),
        );
      ((n = o("WAWebOrgCollection")).OrgCollection.getModelsArray().forEach(
        function (e) {
          r.has(e.id) ||
            o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
              e.id,
            );
        },
      ),
        e.forEach(function (e) {
          e.isMemberDirectoryEnabled ||
            o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
              e.id,
            );
        }));
      var a = e.map(function (e) {
        var n;
        return le(e, ((n = L.get(e.id)) != null ? n : 0) > t);
      });
      (n.OrgCollection.reset(),
        n.OrgCollection.addRows(a),
        pe({
          memberDirectoryEnabledByOrgID: new Map(
            e.map(function (e) {
              return [e.id, e.isMemberDirectoryEnabled];
            }),
          ),
          orderedOrgIDs: e.map(function (e) {
            return e.id;
          }),
          organizations: n.OrgCollection.toArray(),
          organizationsError: null,
          organizationsStatus: "ready",
        }));
    }
    function le(e, t) {
      var n, r;
      t === void 0 && (t = !1);
      var a = o("WAWebOrgCollection").OrgCollection.get(e.id),
        i = {
          name: e.name,
          orgId: e.id,
          viewerRole:
            (n =
              (r = o("WAWebSchemaOrg").OrgMemberRole.cast(e.viewerRole)) != null
                ? r
                : a == null
                  ? void 0
                  : a.viewerRole) != null
              ? n
              : o("WAWebSchemaOrg").OrgMemberRole.Member,
        };
      (e.description != null && (i.description = e.description),
        e.iconURI != null &&
          ((i.iconFullUrl = e.iconURI), (i.iconThumbUrl = e.iconURI)),
        t && (a == null ? void 0 : a.memberCount) != null
          ? (i.memberCount = a.memberCount)
          : e.memberCount != null && (i.memberCount = e.memberCount),
        e.memberTagOptions != null &&
          (i.memberTagOptions = e.memberTagOptions));
      var l = a == null ? void 0 : a.directoryIsComplete;
      if (l != null) {
        var s = a == null ? void 0 : a.memberCount,
          u = i.memberCount != null && i.memberCount !== s,
          c =
            T.memberDirectoryEnabledByOrgID.get(e.id) !==
            e.isMemberDirectoryEnabled;
        i.directoryIsComplete = u || c ? !1 : l;
      }
      return i;
    }
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n;
            if (e !== y) return;
            var a = b;
            if ((a != null && (yield a), e !== y)) return;
            var i = o("WAWebOrgCollection").OrgCollection.get(t);
            if ((i == null ? void 0 : i.directoryIsComplete) !== !0) {
              me(t, { error: null, status: "ready" });
              return;
            }
            var l = yield o("WAWebOrgAdminOrgCache").readCachedOrgRoster(t);
            if (e !== y) return;
            if (
              ((n = o("WAWebOrgCollection").OrgCollection.get(t)) == null
                ? void 0
                : n.directoryIsComplete) !== !0
            ) {
              me(t, { error: null, status: "ready" });
              return;
            }
            (o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
              t,
            ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(
                l.flatMap(function (e) {
                  return de(t, e);
                }),
              ),
              me(t, { error: null, status: "ready" }));
          } catch (n) {
            if (e !== y) return;
            me(t, { error: r("getErrorSafe")(n), status: "error" });
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      h !== e && (U(), (h = e), (T = fe(e)), _e());
    }
    function de(e, t) {
      var n,
        r = o("WAWebSchemaOrg").OrgMemberRole.cast(t.role);
      if (r == null)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-directory] unsupported member role: ",
                  "",
                ])),
              t.role,
            )
            .sendLogs("org-directory-unsupported-role"),
          []
        );
      var a = {
          lid: t.lid,
          memberName: t.displayName,
          memberTag: (n = t.memberTag) != null ? n : "",
          orgId: e,
          role: r,
        },
        i = o("WAWebUsernameTypes").asMaybeUsername(t.username);
      return (
        i != null && (a.username = i),
        t.phoneNumber != null && (a.phoneNumber = t.phoneNumber),
        [a]
      );
    }
    function me(e, t) {
      var n = new Map(T.directoryStateByOrgID);
      (n.set(e, t), pe({ directoryStateByOrgID: n }));
    }
    function pe(e) {
      ((T = babelHelpers.extends({}, T, e)), _e());
    }
    function _e() {
      g.forEach(function (e) {
        return e();
      });
    }
    function fe(e) {
      return {
        accountKey: e,
        directoryStateByOrgID: new Map(),
        memberDirectoryEnabledByOrgID: new Map(),
        organizations: [],
        organizationsError: null,
        organizationsStatus: "idle",
        orderedOrgIDs: null,
      };
    }
    ((l.getOrgDirectoryRepositorySnapshot = D),
      (l.subscribeToOrgDirectoryRepository = x),
      (l.restoreCachedOrganizations = $),
      (l.refreshOrganizations = P),
      (l.restoreCachedOrgDirectory = N),
      (l.refreshOrgDirectory = M),
      (l.reconcileOrganizationSettings = w),
      (l.reconcileOrgMemberRole = A),
      (l.reconcileOrgMemberRemoval = B),
      (l.resetOrgDirectoryRepository = U));
  },
  98,
);
