__d(
  "WAWebOrgDirectoryRepository",
  [
    "Promise",
    "WALogger",
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgAdminOrgCache",
    "WAWebOrgAffiliationResolver",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgDirectoryRepositoryState",
    "WAWebSchemaOrg",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (m || (m = n("Promise"))).resolve(),
      _ = null,
      f = null,
      g = new Map(),
      h = new Map();
    function y() {
      return o(
        "WAWebOrgDirectoryRepositoryState",
      ).getOrgDirectoryRepositorySnapshot();
    }
    function C(e) {
      return o(
        "WAWebOrgDirectoryRepositoryState",
      ).subscribeToOrgDirectoryRepository(e);
    }
    function b() {
      if (f != null) return f;
      if (_ != null) return _;
      if (Y()) return (m || (m = n("Promise"))).resolve();
      o(
        "WAWebOrgDirectoryRepositoryState",
      ).updateOrgDirectoryRepositorySnapshot({
        organizationsError: null,
        organizationsStatus: "loading",
      });
      var e = j(Q).finally(function () {
        _ === e && (_ = null);
      });
      return ((_ = e), e);
    }
    function v() {
      if (f != null) return f;
      o(
        "WAWebOrgDirectoryRepositoryState",
      ).updateOrgDirectoryRepositorySnapshot({
        organizationsError: null,
        organizationsStatus:
          o(
            "WAWebOrgDirectoryRepositoryState",
          ).getOrgDirectoryRepositorySnapshot().organizations.length === 0
            ? "loading"
            : "refreshing",
      });
      var e = j(J).finally(function () {
        f === e && (f = null);
      });
      return ((f = e), e);
    }
    function S(e) {
      var t = h.get(e);
      if (t != null) return t;
      var n = g.get(e);
      if (n != null) return n;
      pe(e, { error: null, status: "loading" });
      var r = j(function () {
        return le(e);
      }).finally(function () {
        g.get(e) === r && g.delete(e);
      });
      return (g.set(e, r), r);
    }
    function R(e) {
      var t = h.get(e);
      if (t != null) return t;
      if (
        o("WAWebOrgDirectoryRepositoryState")
          .getOrgDirectoryRepositorySnapshot()
          .memberDirectoryEnabledByOrgID.get(e) === !0
      ) {
        var n,
          r,
          a =
            o("WAWebOrgContactCollection").OrgContactCollection.getByOrgId(e)
              .length > 0 ||
            (((n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : n.directoryIsComplete) === !0 &&
              ((r = o("WAWebOrgDirectoryRepositoryState")
                .getOrgDirectoryRepositorySnapshot()
                .directoryStateByOrgID.get(e)) == null
                ? void 0
                : r.status) === "ready");
        pe(e, { error: null, status: a ? "refreshing" : "loading" });
      }
      var i = j(function () {
        return ee(e);
      }).finally(function () {
        h.get(e) === i && h.delete(e);
      });
      return (h.set(e, i), i);
    }
    function L(e, t) {
      if ((t === void 0 && (t = !1), e === ""))
        return (m || (m = n("Promise"))).resolve(
          z(r("err")("Missing organization ID"), !1),
        );
      var o = h.get(e);
      return o != null
        ? o.then(function () {
            return G(e);
          })
        : E(e, t);
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            !t &&
            ((n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : n.directoryIsComplete) === !0
          ) {
            var r, a;
            if (
              (yield S(e),
              ((r = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                ? void 0
                : r.directoryIsComplete) === !0 &&
                ((a = o("WAWebOrgDirectoryRepositoryState")
                  .getOrgDirectoryRepositorySnapshot()
                  .directoryStateByOrgID.get(e)) == null
                  ? void 0
                  : a.status) === "ready")
            )
              return { status: "success" };
          }
          return (yield R(e), G(e));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield D(e);
          x(e, t);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return o("WAWebDBOrg").replaceOrgMembershipsForLids(e);
    }
    function x(e, t) {
      (e.forEach(function (e, t) {
        o("WAWebOrgContactCollection").OrgContactCollection.removeByLid(t);
      }),
        o("WAWebOrgContactCollection").OrgContactCollection.addRows(t));
    }
    function $(e, t) {
      return o("WAWebOrgAffiliationResolver").resolveOrgAffiliations(
        e,
        {
          persistMemberships: D,
          prepareJoinedOrganizations: V,
          publishMemberships: x,
          runOperation: j,
        },
        t,
      );
    }
    function P(e, t) {
      return K(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebOrgAdminGraphQL").updateOrgAdminSettings(e, t);
          return (
            yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrg(n),
            N(n),
            n
          );
        }),
      );
    }
    function N(e) {
      (e.isMemberDirectoryEnabled ||
        o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(e.id),
        o("WAWebOrgCollection").OrgCollection.get(e.id) != null &&
          o("WAWebOrgCollection").OrgCollection.addRows([ie(e)]));
      var t = new Map(
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).getOrgDirectoryRepositorySnapshot().memberDirectoryEnabledByOrgID,
      );
      (t.set(e.id, e.isMemberDirectoryEnabled),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).updateOrgDirectoryRepositorySnapshot({
          memberDirectoryEnabledByOrgID: t,
          organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
        }));
    }
    function M(e, t, n) {
      return K(function () {
        return w(e, t, n);
      });
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o("WAWebOrgAdminGraphQL").setOrgAdminMemberRole(
              e,
              t,
              n,
            ),
            i = a.status === "success" ? a.memberCount : null,
            l = o("WAWebSchemaOrg").OrgMemberRole.cast(n),
            u = !0;
          try {
            if (l != null) {
              var c;
              (yield o("WAWebDBOrg").updateOrgMemberRole(e, t, l, i),
                F(e, i),
                (c = o(
                  "WAWebOrgContactCollection",
                ).OrgContactCollection.getByOrgIdAndLid(e, t)) == null ||
                  c.set({ role: l }),
                o(
                  "WAWebOrgDirectoryRepositoryState",
                ).updateOrgDirectoryRepositorySnapshot({
                  organizations:
                    o("WAWebOrgCollection").OrgCollection.toArray(),
                }));
            }
          } catch (e) {
            ((u = !1),
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] member role reconciliation failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-directory-member-role-reconciliation-failed"));
          }
          return !u &&
            o("WAWebOrgDirectoryRepositoryState")
              .getOrgDirectoryRepositorySnapshot()
              .memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !1
            : ne(e);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      var n = o("WAWebOrgCollection").OrgCollection.get(e);
      n == null ||
        t == null ||
        (n.memberCount !== t &&
          n.set({ directoryIsComplete: !1, memberCount: t }));
    }
    function O(e, t) {
      return K(function () {
        return B(e, t);
      });
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminGraphQL").removeOrgAdminMember(e, t),
            a = n.status === "success" ? n.memberCount : null,
            i = !0;
          try {
            (yield o("WAWebDBOrg").removeOrgMember(e, t, a),
              o(
                "WAWebOrgAffiliationResolver",
              ).invalidateResolvedOrgAffiliations([t]));
            var l = o(
              "WAWebOrgContactCollection",
            ).OrgContactCollection.getByOrgIdAndLid(e, t);
            (l != null &&
              o("WAWebOrgContactCollection").OrgContactCollection.remove(l),
              q(e, l != null, a),
              o(
                "WAWebOrgDirectoryRepositoryState",
              ).updateOrgDirectoryRepositorySnapshot({
                organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
              }));
          } catch (e) {
            ((i = !1),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] member removal reconciliation failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs(
                  "org-directory-member-removal-reconciliation-failed",
                ));
          }
          return !i &&
            o("WAWebOrgDirectoryRepositoryState")
              .getOrgDirectoryRepositorySnapshot()
              .memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !1
            : ne(e);
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      var r = o("WAWebOrgCollection").OrgCollection.get(e);
      if (!(r == null || n == null)) {
        var a =
          t && r.memberCount != null ? Math.max(0, r.memberCount - 1) : null;
        if (n === a) {
          r.set({ memberCount: n });
          return;
        }
        r.set({ directoryIsComplete: !1, memberCount: n });
      }
    }
    function U() {
      ((p = (m || (m = n("Promise"))).resolve()),
        (_ = null),
        (f = null),
        (g = new Map()),
        (h = new Map()),
        o("WAWebOrgAffiliationResolver").resetOrgAffiliationResolver(),
        o("WAWebOrgCollection").OrgCollection.reset(),
        o("WAWebOrgContactCollection").OrgContactCollection.reset(),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).resetOrgDirectoryRepositorySnapshot());
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (
            yield b(),
            o(
              "WAWebOrgDirectoryRepositoryState",
            ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs == null &&
              (yield v()),
            ((e = o(
              "WAWebOrgDirectoryRepositoryState",
            ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs) == null
              ? void 0
              : e.length) === 0
              ? "empty"
              : o(
                    "WAWebOrgDirectoryRepositoryState",
                  ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs != null ||
                  o(
                    "WAWebOrgDirectoryRepositoryState",
                  ).getOrgDirectoryRepositorySnapshot().organizations.length > 0
                ? "eligible"
                : "unknown"
          );
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      var t,
        n = o("WAWebOrgDirectoryRepositoryState")
          .getOrgDirectoryRepositorySnapshot()
          .directoryStateByOrgID.get(e),
        a = n == null ? void 0 : n.error;
      if (
        (n == null ? void 0 : n.status) === "ready" &&
        ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
          ? void 0
          : t.directoryIsComplete) === !0
      )
        return { status: "success" };
      if ((n == null ? void 0 : n.status) === "error" && a != null)
        return a instanceof
          o("WAWebOrgAdminGraphQL").OrgAdminRosterTooLargeError
          ? { memberCount: a.memberCount, status: "roster_too_large" }
          : z(a, !0);
      var i = o("WAWebOrgDirectoryRepositoryState")
        .getOrgDirectoryRepositorySnapshot()
        .memberDirectoryEnabledByOrgID.get(e);
      return z(
        r("err")(
          i === !1 ? "MEMBER_DIRECTORY_DISABLED" : "INCOMPLETE_DIRECTORY",
        ),
        i !== !1,
      );
    }
    function z(e, t) {
      return { error: e, retryable: t, status: "failed" };
    }
    function j(e) {
      var t = p.then(e, e);
      return (
        (p = t.then(
          function () {},
          function () {},
        )),
        t
      );
    }
    function K(e) {
      return ((_ = null), (f = null), (g = new Map()), (h = new Map()), j(e));
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebDBOrg").getOrgs();
            if (Y()) return;
            (o("WAWebOrgCollection").OrgCollection.reset(),
              o("WAWebOrgCollection").OrgCollection.addRows(e),
              o(
                "WAWebOrgDirectoryRepositoryState",
              ).updateOrgDirectoryRepositorySnapshot({
                memberDirectoryEnabledByOrgID: new Map(
                  e.flatMap(function (e) {
                    return e.isMemberDirectoryEnabled == null
                      ? []
                      : [[e.orgId, e.isMemberDirectoryEnabled]];
                  }),
                ),
                organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
                organizationsError: null,
                organizationsStatus: "ready",
              }));
          } catch (e) {
            if (Y()) return;
            o(
              "WAWebOrgDirectoryRepositoryState",
            ).updateOrgDirectoryRepositorySnapshot({
              organizationsError: r("getErrorSafe")(e),
              organizationsStatus: "error",
            });
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y() {
      return (
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs != null
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebOrgAdminGraphQL").loadOrgAdminOrgs();
            (yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrgs(e),
              oe(e));
          } catch (e) {
            var t = r("getErrorSafe")(e);
            (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] organizations load failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(e),
              )
              .catching(t)
              .sendLogs("org-admin-orgs-load-failed"),
              o(
                "WAWebOrgDirectoryRepositoryState",
              ).updateOrgDirectoryRepositorySnapshot({
                organizationsError: t,
                organizationsStatus: "error",
              }));
          }
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
          if (
            o("WAWebOrgDirectoryRepositoryState")
              .getOrgDirectoryRepositorySnapshot()
              .memberDirectoryEnabledByOrgID.get(e) !== !0
          ) {
            pe(e, { error: null, status: "ready" });
            return;
          }
          try {
            var t,
              n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminDirectoryPage(
                e,
                null,
              ),
              a = n.count,
              i = n.members,
              l = n.receivedMemberCount;
            if (a == null || i.length !== l || i.length !== a)
              throw r("err")("INCOMPLETE_DIRECTORY");
            var s = a,
              u = i.flatMap(function (t) {
                return de(e, t);
              });
            if (u.length !== i.length) throw r("err")("INCOMPLETE_DIRECTORY");
            (yield o("WAWebDBOrg").replaceCompleteOrgRoster(e, u, s, !0),
              ue(e, u),
              o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
                e,
              ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(u),
              (t = o("WAWebOrgCollection").OrgCollection.get(e)) == null ||
                t.set({ directoryIsComplete: !0, memberCount: s }),
              pe(e, { error: null, status: "ready" }));
          } catch (t) {
            var c = r("getErrorSafe")(t);
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] public member directory refresh failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(t),
              )
              .catching(c)
              .sendLogs("org-admin-directory-refresh-failed"),
              pe(e, { error: c, status: "error" }));
          }
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
          return o("WAWebOrgDirectoryRepositoryState")
            .getOrgDirectoryRepositorySnapshot()
            .memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !0
            : (yield ee(e), G(e).status === "success");
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      var t,
        n = new Set(
          e.map(function (e) {
            return e.id;
          }),
        );
      ((t = o("WAWebOrgCollection")).OrgCollection.getModelsArray().forEach(
        function (e) {
          n.has(e.id) ||
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
      var r = e.map(ie);
      (t.OrgCollection.reset(),
        t.OrgCollection.addRows(r),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).updateOrgDirectoryRepositorySnapshot({
          memberDirectoryEnabledByOrgID: new Map(
            e.map(function (e) {
              return [e.id, e.isMemberDirectoryEnabled];
            }),
          ),
          orderedOrgIDs: ae(
            e.map(function (e) {
              return e.id;
            }),
          ),
          organizations: t.OrgCollection.toArray(),
          organizationsError: null,
          organizationsStatus: "ready",
        }));
    }
    function ae(e) {
      var t = o(
        "WAWebOrgDirectoryRepositoryState",
      ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs;
      return t != null && r("shallowArrayEqual")(t, e) ? t : e;
    }
    function ie(e) {
      var t,
        n,
        r = o("WAWebOrgCollection").OrgCollection.get(e.id),
        a = {
          name: e.name,
          orgId: e.id,
          viewerRole:
            (t =
              (n = o("WAWebSchemaOrg").OrgMemberRole.cast(e.viewerRole)) != null
                ? n
                : r == null
                  ? void 0
                  : r.viewerRole) != null
              ? t
              : o("WAWebSchemaOrg").OrgMemberRole.Member,
        };
      (e.description != null && (a.description = e.description),
        e.iconURI != null &&
          ((a.iconFullUrl = e.iconURI), (a.iconThumbUrl = e.iconURI)),
        e.memberCount != null && (a.memberCount = e.memberCount),
        e.memberTagOptions != null &&
          (a.memberTagOptions = e.memberTagOptions));
      var i = r == null ? void 0 : r.directoryIsComplete;
      if (i != null) {
        var l = r == null ? void 0 : r.memberCount,
          s = a.memberCount != null && a.memberCount !== l,
          u =
            o("WAWebOrgDirectoryRepositoryState")
              .getOrgDirectoryRepositorySnapshot()
              .memberDirectoryEnabledByOrgID.get(e.id) !==
            e.isMemberDirectoryEnabled;
        a.directoryIsComplete = s || u ? !1 : i;
      }
      return a;
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n,
              a = o("WAWebOrgCollection").OrgCollection.get(e);
            if ((a == null ? void 0 : a.directoryIsComplete) !== !0) {
              ce(e, { error: null, status: "ready" });
              return;
            }
            var i = yield o("WAWebOrgAdminOrgCache").readCachedOrgRoster(e);
            if (
              ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                ? void 0
                : t.directoryIsComplete) !== !0
            ) {
              ce(e, { error: null, status: "ready" });
              return;
            }
            var l = i.flatMap(function (t) {
                return de(e, t);
              }),
              s =
                (n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                  ? void 0
                  : n.memberCount;
            if (l.length !== i.length || (s != null && l.length !== s))
              throw r("err")("INCOMPLETE_CACHED_DIRECTORY");
            (ue(e, l),
              o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
                e,
              ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(
                l.sort(me),
              ),
              ce(e, { error: null, status: "ready" }));
          } catch (t) {
            ce(e, { error: r("getErrorSafe")(t), status: "error" });
          }
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.lid;
        }),
      );
      (o("WAWebOrgContactCollection")
        .OrgContactCollection.getByOrgId(e)
        .forEach(function (e) {
          var t = e.lid;
          return n.add(t);
        }),
        o("WAWebOrgAffiliationResolver").invalidateResolvedOrgAffiliations(
          Array.from(n),
        ));
    }
    function ce(e, t) {
      var n;
      ((n = o("WAWebOrgDirectoryRepositoryState")
        .getOrgDirectoryRepositorySnapshot()
        .directoryStateByOrgID.get(e)) == null
        ? void 0
        : n.status) !== "error" && pe(e, t);
    }
    function de(t, n) {
      var r,
        a = o("WAWebSchemaOrg").OrgMemberRole.cast(n.role);
      if (a == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-directory] unsupported member role: ",
                  "",
                ])),
              n.role,
            )
            .sendLogs("org-directory-unsupported-role"),
          []
        );
      var i = {
          lid: n.lid,
          memberName:
            n.memberName == null || n.memberName === ""
              ? n.displayName
              : n.memberName,
          memberTag: (r = n.memberTag) != null ? r : "",
          orgId: t,
          role: a,
        },
        l = o("WAWebUsernameTypes").asMaybeUsername(n.username);
      return (
        l != null && (i.username = l),
        n.phoneNumber != null && (i.phoneNumber = n.phoneNumber),
        [i]
      );
    }
    function me(e, t) {
      var n = e.memberName.localeCompare(t.memberName);
      return n !== 0 ? n : e.lid.localeCompare(t.lid);
    }
    function pe(e, t) {
      var n = new Map(
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).getOrgDirectoryRepositorySnapshot().directoryStateByOrgID,
      );
      (n.set(e, t),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).updateOrgDirectoryRepositorySnapshot({ directoryStateByOrgID: n }));
    }
    ((l.getOrgDirectoryRepositorySnapshot = y),
      (l.subscribeToOrgDirectoryRepository = C),
      (l.restoreCachedOrganizations = b),
      (l.refreshOrganizations = v),
      (l.restoreCachedOrgDirectory = S),
      (l.refreshOrgDirectory = R),
      (l.ensureFullRoster = L),
      (l.applyOrgMembershipsForLids = I),
      (l.resolveOrgAffiliations = $),
      (l.saveOrganizationSettings = P),
      (l.updateOrganizationMemberRole = M),
      (l.removeOrganizationMember = O),
      (l.resetOrgDirectoryRepository = U));
  },
  98,
);
