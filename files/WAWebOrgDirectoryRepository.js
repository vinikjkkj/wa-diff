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
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "Organization roster exceeds the supported member limit",
              ) || this),
            (n.name = "OrgDirectoryTooLargeError"),
            (n.memberCount = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      _ = (m || (m = n("Promise"))).resolve(),
      f = null,
      g = null,
      h = new Map(),
      y = new Map();
    function C() {
      return o(
        "WAWebOrgDirectoryRepositoryState",
      ).getOrgDirectoryRepositorySnapshot();
    }
    function b(e) {
      return o(
        "WAWebOrgDirectoryRepositoryState",
      ).subscribeToOrgDirectoryRepository(e);
    }
    function v() {
      if (g != null) return g;
      if (f != null) return f;
      if (J()) return (m || (m = n("Promise"))).resolve();
      o(
        "WAWebOrgDirectoryRepositoryState",
      ).updateOrgDirectoryRepositorySnapshot({
        organizationsError: null,
        organizationsStatus: "loading",
      });
      var e = K(X).finally(function () {
        f === e && (f = null);
      });
      return ((f = e), e);
    }
    function S() {
      if (g != null) return g;
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
      var e = K(Z).finally(function () {
        g === e && (g = null);
      });
      return ((g = e), e);
    }
    function R(e) {
      var t = y.get(e);
      if (t != null) return t;
      var n = h.get(e);
      if (n != null) return n;
      fe(e, { error: null, status: "loading" });
      var r = K(function () {
        return ue(e);
      }).finally(function () {
        h.get(e) === r && h.delete(e);
      });
      return (h.set(e, r), r);
    }
    function L(e) {
      var t = y.get(e);
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
        fe(e, { error: null, status: a ? "refreshing" : "loading" });
      }
      var i = K(function () {
        return te(e);
      }).finally(function () {
        y.get(e) === i && y.delete(e);
      });
      return (y.set(e, i), i);
    }
    function E(e, t) {
      if ((t === void 0 && (t = !1), e === ""))
        return (m || (m = n("Promise"))).resolve(
          j(r("err")("Missing organization ID"), !1),
        );
      var o = y.get(e);
      return o != null
        ? o.then(function () {
            return z(e);
          })
        : k(e, t);
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            !t &&
            ((n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : n.directoryIsComplete) === !0
          ) {
            var r, a;
            if (
              (yield R(e),
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
          return (yield L(e), z(e));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield x(e);
          $(e, t);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return o("WAWebDBOrg").replaceOrgMembershipsForLids(e);
    }
    function $(e, t) {
      (e.forEach(function (e, t) {
        o("WAWebOrgContactCollection").OrgContactCollection.removeByLid(t);
      }),
        o("WAWebOrgContactCollection").OrgContactCollection.addRows(t));
    }
    function P(e, t) {
      return o("WAWebOrgAffiliationResolver").resolveOrgAffiliations(
        e,
        {
          persistMemberships: x,
          prepareJoinedOrganizations: H,
          publishMemberships: $,
          runOperation: K,
        },
        t,
      );
    }
    function N(e, t) {
      return Q(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebOrgAdminGraphQL").updateOrgAdminSettings(e, t);
          return (
            yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrg(n),
            M(n),
            n
          );
        }),
      );
    }
    function M(e) {
      (e.isMemberDirectoryEnabled ||
        o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(e.id),
        o("WAWebOrgCollection").OrgCollection.get(e.id) != null &&
          o("WAWebOrgCollection").OrgCollection.addRows([le(e)]));
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
    function w(e, t, n) {
      return Q(function () {
        return A(e, t, n);
      });
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                O(e, i),
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
            : re(e);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      var n = o("WAWebOrgCollection").OrgCollection.get(e);
      n == null ||
        t == null ||
        (n.memberCount !== t &&
          n.set({ directoryIsComplete: !1, memberCount: t }));
    }
    function B(e, t) {
      return Q(function () {
        return W(e, t);
      });
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              U(e, l != null, a),
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
            : re(e);
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
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
    function V() {
      ((_ = (m || (m = n("Promise"))).resolve()),
        (f = null),
        (g = null),
        (h = new Map()),
        (y = new Map()),
        o("WAWebOrgAffiliationResolver").resetOrgAffiliationResolver(),
        o("WAWebOrgCollection").OrgCollection.reset(),
        o("WAWebOrgContactCollection").OrgContactCollection.reset(),
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).resetOrgDirectoryRepositorySnapshot());
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (
            yield v(),
            o(
              "WAWebOrgDirectoryRepositoryState",
            ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs == null &&
              (yield S()),
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
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
        return a instanceof p
          ? { memberCount: a.memberCount, status: "roster_too_large" }
          : j(a, !0);
      var i = o("WAWebOrgDirectoryRepositoryState")
        .getOrgDirectoryRepositorySnapshot()
        .memberDirectoryEnabledByOrgID.get(e);
      return j(
        r("err")(
          i === !1 ? "MEMBER_DIRECTORY_DISABLED" : "INCOMPLETE_DIRECTORY",
        ),
        i !== !1,
      );
    }
    function j(e, t) {
      return { error: e, retryable: t, status: "failed" };
    }
    function K(e) {
      var t = _.then(e, e);
      return (
        (_ = t.then(
          function () {},
          function () {},
        )),
        t
      );
    }
    function Q(e) {
      return ((f = null), (g = null), (h = new Map()), (y = new Map()), K(e));
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebDBOrg").getOrgs();
            if (J()) return;
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
            if (J()) return;
            o(
              "WAWebOrgDirectoryRepositoryState",
            ).updateOrgDirectoryRepositorySnapshot({
              organizationsError: r("getErrorSafe")(e),
              organizationsStatus: "error",
            });
          }
        })),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return (
        o(
          "WAWebOrgDirectoryRepositoryState",
        ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs != null
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebOrgAdminGraphQL").loadOrgAdminOrgs();
            (yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrgs(e),
              ae(e));
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
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebOrgDirectoryRepositoryState")
              .getOrgDirectoryRepositorySnapshot()
              .memberDirectoryEnabledByOrgID.get(e) !== !0
          ) {
            fe(e, { error: null, status: "ready" });
            return;
          }
          try {
            var t,
              n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminDirectory(
                e,
                null,
              );
            if (n.status === "roster_too_large") throw new p(n.memberCount);
            var a = n.memberCount,
              i = n.members,
              l = i.flatMap(function (t) {
                return pe(e, t);
              });
            if (l.length !== i.length) throw r("err")("INCOMPLETE_DIRECTORY");
            (yield o("WAWebDBOrg").replaceCompleteOrgRoster(e, l, a, !0),
              de(e, l),
              o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
                e,
              ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(l),
              (t = o("WAWebOrgCollection").OrgCollection.get(e)) == null ||
                t.set({ directoryIsComplete: !0, memberCount: a }),
              fe(e, { error: null, status: "ready" }));
          } catch (t) {
            var s = r("getErrorSafe")(t);
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] public member directory refresh failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(t),
              )
              .catching(s)
              .sendLogs("org-admin-directory-refresh-failed"),
              fe(e, { error: s, status: "error" }));
          }
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebOrgDirectoryRepositoryState")
            .getOrgDirectoryRepositorySnapshot()
            .memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !0
            : (yield te(e), z(e).status === "success");
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
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
      var r = e.map(le);
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
          orderedOrgIDs: ie(
            e.map(function (e) {
              return e.id;
            }),
          ),
          organizations: t.OrgCollection.toArray(),
          organizationsError: null,
          organizationsStatus: "ready",
        }));
    }
    function ie(e) {
      var t = o(
        "WAWebOrgDirectoryRepositoryState",
      ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs;
      return t != null && r("shallowArrayEqual")(t, e) ? t : e;
    }
    function le(e) {
      var t = o("WAWebOrgCollection").OrgCollection.get(e.id),
        n = {
          name: e.name,
          orgId: e.id,
          viewerRole: o("WAWebSchemaOrg").OrgMemberRole.cast(e.viewerRole),
        };
      (e.description != null && (n.description = e.description),
        se(n, e),
        e.memberCount != null && (n.memberCount = e.memberCount),
        e.memberTagOptions != null &&
          (n.memberTagOptions = e.memberTagOptions));
      var r = t == null ? void 0 : t.directoryIsComplete;
      if (r != null) {
        var a = t == null ? void 0 : t.memberCount,
          i = n.memberCount != null && n.memberCount !== a,
          l =
            o("WAWebOrgDirectoryRepositoryState")
              .getOrgDirectoryRepositorySnapshot()
              .memberDirectoryEnabledByOrgID.get(e.id) !==
            e.isMemberDirectoryEnabled;
        n.directoryIsComplete = i || l ? !1 : r;
      }
      return n;
    }
    function se(e, t) {
      (t.iconHandle != null && (e.iconHandle = t.iconHandle),
        t.iconURI != null && (e.iconThumbUrl = t.iconURI),
        t.iconLargeURI != null && (e.iconFullUrl = t.iconLargeURI));
    }
    function ue(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n,
              a = o("WAWebOrgCollection").OrgCollection.get(e);
            if ((a == null ? void 0 : a.directoryIsComplete) !== !0) {
              me(e, { error: null, status: "ready" });
              return;
            }
            var i = yield o("WAWebOrgAdminOrgCache").readCachedOrgRoster(e);
            if (
              ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                ? void 0
                : t.directoryIsComplete) !== !0
            ) {
              me(e, { error: null, status: "ready" });
              return;
            }
            var l = i.flatMap(function (t) {
                return pe(e, t);
              }),
              s =
                (n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                  ? void 0
                  : n.memberCount;
            if (l.length !== i.length || (s != null && l.length !== s))
              throw r("err")("INCOMPLETE_CACHED_DIRECTORY");
            (de(e, l),
              o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
                e,
              ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(
                l.sort(_e),
              ),
              me(e, { error: null, status: "ready" }));
          } catch (t) {
            me(e, { error: r("getErrorSafe")(t), status: "error" });
          }
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
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
    function me(e, t) {
      var n;
      ((n = o("WAWebOrgDirectoryRepositoryState")
        .getOrgDirectoryRepositorySnapshot()
        .directoryStateByOrgID.get(e)) == null
        ? void 0
        : n.status) !== "error" && fe(e, t);
    }
    function pe(t, n) {
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
    function _e(e, t) {
      var n = e.memberName.localeCompare(t.memberName);
      return n !== 0 ? n : e.lid.localeCompare(t.lid);
    }
    function fe(e, t) {
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
    ((l.getOrgDirectoryRepositorySnapshot = C),
      (l.subscribeToOrgDirectoryRepository = b),
      (l.restoreCachedOrganizations = v),
      (l.refreshOrganizations = S),
      (l.restoreCachedOrgDirectory = R),
      (l.refreshOrgDirectory = L),
      (l.ensureFullRoster = E),
      (l.applyOrgMembershipsForLids = T),
      (l.resolveOrgAffiliations = P),
      (l.saveOrganizationSettings = N),
      (l.updateOrganizationMemberRole = w),
      (l.removeOrganizationMember = B),
      (l.resetOrgDirectoryRepository = V));
  },
  98,
);
