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
      p = new Set(),
      _ = (m || (m = n("Promise"))).resolve(),
      f = null,
      g = null,
      h = new Map(),
      y = new Map(),
      C = he();
    function b() {
      return C;
    }
    function v(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function S() {
      if (g != null) return g;
      if (f != null) return f;
      if (Z()) return (m || (m = n("Promise"))).resolve();
      fe({ organizationsError: null, organizationsStatus: "loading" });
      var e = Q(Y).finally(function () {
        f === e && (f = null);
      });
      return ((f = e), e);
    }
    function R() {
      if (g != null) return g;
      fe({
        organizationsError: null,
        organizationsStatus:
          C.organizations.length === 0 ? "loading" : "refreshing",
      });
      var e = Q(ee).finally(function () {
        g === e && (g = null);
      });
      return ((g = e), e);
    }
    function L(e) {
      var t = y.get(e);
      if (t != null) return t;
      var n = h.get(e);
      if (n != null) return n;
      _e(e, { error: null, status: "loading" });
      var r = Q(function () {
        return se(e);
      }).finally(function () {
        h.get(e) === r && h.delete(e);
      });
      return (h.set(e, r), r);
    }
    function E(e) {
      var t = y.get(e);
      if (t != null) return t;
      if (C.memberDirectoryEnabledByOrgID.get(e) === !0) {
        var n,
          r,
          a =
            o("WAWebOrgContactCollection").OrgContactCollection.getByOrgId(e)
              .length > 0 ||
            (((n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : n.directoryIsComplete) === !0 &&
              ((r = C.directoryStateByOrgID.get(e)) == null
                ? void 0
                : r.status) === "ready");
        _e(e, { error: null, status: a ? "refreshing" : "loading" });
      }
      var i = Q(function () {
        return ne(e);
      }).finally(function () {
        y.get(e) === i && y.delete(e);
      });
      return (y.set(e, i), i);
    }
    function k(e, t) {
      if ((t === void 0 && (t = !1), e === ""))
        return (m || (m = n("Promise"))).resolve(
          K(r("err")("Missing organization ID"), !1),
        );
      var o = y.get(e);
      return o != null
        ? o.then(function () {
            return j(e);
          })
        : I(e, t);
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            !t &&
            ((n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
              ? void 0
              : n.directoryIsComplete) === !0
          ) {
            var r, a;
            if (
              (yield L(e),
              ((r = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                ? void 0
                : r.directoryIsComplete) === !0 &&
                ((a = C.directoryStateByOrgID.get(e)) == null
                  ? void 0
                  : a.status) === "ready")
            )
              return { status: "success" };
          }
          return (yield E(e), j(e));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield $(e);
          P(e, t);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return o("WAWebDBOrg").replaceOrgMembershipsForLids(e);
    }
    function P(e, t) {
      (e.forEach(function (e, t) {
        o("WAWebOrgContactCollection").OrgContactCollection.removeByLid(t);
      }),
        o("WAWebOrgContactCollection").OrgContactCollection.addRows(t));
    }
    function N(e, t) {
      return o("WAWebOrgAffiliationResolver").resolveOrgAffiliations(
        e,
        {
          persistMemberships: $,
          prepareJoinedOrganizations: G,
          publishMemberships: P,
          runOperation: Q,
        },
        t,
      );
    }
    function M(e, t) {
      return X(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n = yield o("WAWebOrgAdminGraphQL").updateOrgAdminSettings(e, t);
          return (
            yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrg(n),
            w(n),
            n
          );
        }),
      );
    }
    function w(e) {
      (e.isMemberDirectoryEnabled ||
        o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(e.id),
        o("WAWebOrgCollection").OrgCollection.get(e.id) != null &&
          o("WAWebOrgCollection").OrgCollection.addRows([le(e)]));
      var t = new Map(C.memberDirectoryEnabledByOrgID);
      (t.set(e.id, e.isMemberDirectoryEnabled),
        fe({
          memberDirectoryEnabledByOrgID: t,
          organizations: o("WAWebOrgCollection").OrgCollection.toArray(),
        }));
    }
    function A(e, t, n) {
      return X(function () {
        return F(e, t, n);
      });
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                B(e, i),
                (c = o(
                  "WAWebOrgContactCollection",
                ).OrgContactCollection.getByOrgIdAndLid(e, t)) == null ||
                  c.set({ role: l }),
                fe({
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
          return !u && C.memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !1
            : oe(e);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      var n = o("WAWebOrgCollection").OrgCollection.get(e);
      n == null ||
        t == null ||
        (n.memberCount !== t &&
          n.set({ directoryIsComplete: !1, memberCount: t }));
    }
    function W(e, t) {
      return X(function () {
        return q(e, t);
      });
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              V(e, l != null, a),
              fe({
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
          return !i && C.memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !1
            : oe(e);
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t, n) {
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
    function H() {
      ((_ = (m || (m = n("Promise"))).resolve()),
        (f = null),
        (g = null),
        (h = new Map()),
        (y = new Map()),
        o("WAWebOrgAffiliationResolver").resetOrgAffiliationResolver(),
        o("WAWebOrgCollection").OrgCollection.reset(),
        o("WAWebOrgContactCollection").OrgContactCollection.reset(),
        (C = he()),
        ge());
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (
            yield S(),
            C.orderedOrgIDs == null && (yield R()),
            ((e = C.orderedOrgIDs) == null ? void 0 : e.length) === 0
              ? "empty"
              : C.orderedOrgIDs != null || C.organizations.length > 0
                ? "eligible"
                : "unknown"
          );
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      var t,
        n = C.directoryStateByOrgID.get(e),
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
          : K(a, !0);
      var i = C.memberDirectoryEnabledByOrgID.get(e);
      return K(
        r("err")(
          i === !1 ? "MEMBER_DIRECTORY_DISABLED" : "INCOMPLETE_DIRECTORY",
        ),
        i !== !1,
      );
    }
    function K(e, t) {
      return { error: e, retryable: t, status: "failed" };
    }
    function Q(e) {
      var t = _.then(e, e);
      return (
        (_ = t.then(
          function () {},
          function () {},
        )),
        t
      );
    }
    function X(e) {
      return ((f = null), (g = null), (h = new Map()), (y = new Map()), Q(e));
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebDBOrg").getOrgs();
            if (Z()) return;
            (o("WAWebOrgCollection").OrgCollection.reset(),
              o("WAWebOrgCollection").OrgCollection.addRows(e),
              fe({
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
            if (Z()) return;
            fe({
              organizationsError: r("getErrorSafe")(e),
              organizationsStatus: "error",
            });
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return C.orderedOrgIDs != null;
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebOrgAdminGraphQL").loadOrgAdminOrgs();
            (yield o("WAWebOrgAdminOrgCache").writeCachedOrgAdminOrgs(e),
              ie(e));
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
              fe({ organizationsError: t, organizationsStatus: "error" }));
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
          if (C.memberDirectoryEnabledByOrgID.get(e) !== !0) {
            _e(e, { error: null, status: "ready" });
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
                return me(e, t);
              });
            if (u.length !== i.length) throw r("err")("INCOMPLETE_DIRECTORY");
            (yield o("WAWebDBOrg").replaceCompleteOrgRoster(e, u, s, !0),
              ce(e, u),
              o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
                e,
              ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(u),
              (t = o("WAWebOrgCollection").OrgCollection.get(e)) == null ||
                t.set({ directoryIsComplete: !0, memberCount: s }),
              _e(e, { error: null, status: "ready" }));
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
              _e(e, { error: c, status: "error" }));
          }
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return C.memberDirectoryEnabledByOrgID.get(e) !== !0
            ? !0
            : (yield ne(e), j(e).status === "success");
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
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
        fe({
          memberDirectoryEnabledByOrgID: new Map(
            e.map(function (e) {
              return [e.id, e.isMemberDirectoryEnabled];
            }),
          ),
          orderedOrgIDs: e.map(function (e) {
            return e.id;
          }),
          organizations: t.OrgCollection.toArray(),
          organizationsError: null,
          organizationsStatus: "ready",
        }));
    }
    function le(e) {
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
            C.memberDirectoryEnabledByOrgID.get(e.id) !==
            e.isMemberDirectoryEnabled;
        a.directoryIsComplete = s || u ? !1 : i;
      }
      return a;
    }
    function se(e) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              n,
              a = o("WAWebOrgCollection").OrgCollection.get(e);
            if ((a == null ? void 0 : a.directoryIsComplete) !== !0) {
              de(e, { error: null, status: "ready" });
              return;
            }
            var i = yield o("WAWebOrgAdminOrgCache").readCachedOrgRoster(e);
            if (
              ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                ? void 0
                : t.directoryIsComplete) !== !0
            ) {
              de(e, { error: null, status: "ready" });
              return;
            }
            var l = i.flatMap(function (t) {
                return me(e, t);
              }),
              s =
                (n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                  ? void 0
                  : n.memberCount;
            if (l.length !== i.length || (s != null && l.length !== s))
              throw r("err")("INCOMPLETE_CACHED_DIRECTORY");
            (ce(e, l),
              o("WAWebOrgContactCollection").OrgContactCollection.removeByOrgId(
                e,
              ),
              o("WAWebOrgContactCollection").OrgContactCollection.addRows(
                l.sort(pe),
              ),
              de(e, { error: null, status: "ready" }));
          } catch (t) {
            de(e, { error: r("getErrorSafe")(t), status: "error" });
          }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e, t) {
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
    function de(e, t) {
      var n;
      ((n = C.directoryStateByOrgID.get(e)) == null ? void 0 : n.status) !==
        "error" && _e(e, t);
    }
    function me(t, n) {
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
          memberName: n.displayName,
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
    function pe(e, t) {
      var n = e.memberName.localeCompare(t.memberName);
      return n !== 0 ? n : e.lid.localeCompare(t.lid);
    }
    function _e(e, t) {
      var n = new Map(C.directoryStateByOrgID);
      (n.set(e, t), fe({ directoryStateByOrgID: n }));
    }
    function fe(e) {
      ((C = babelHelpers.extends({}, C, e)), ge());
    }
    function ge() {
      p.forEach(function (e) {
        return e();
      });
    }
    function he() {
      return {
        directoryStateByOrgID: new Map(),
        memberDirectoryEnabledByOrgID: new Map(),
        organizations: [],
        organizationsError: null,
        organizationsStatus: "idle",
        orderedOrgIDs: null,
      };
    }
    ((l.getOrgDirectoryRepositorySnapshot = b),
      (l.subscribeToOrgDirectoryRepository = v),
      (l.restoreCachedOrganizations = S),
      (l.refreshOrganizations = R),
      (l.restoreCachedOrgDirectory = L),
      (l.refreshOrgDirectory = E),
      (l.ensureFullRoster = k),
      (l.applyOrgMembershipsForLids = D),
      (l.resolveOrgAffiliations = N),
      (l.saveOrganizationSettings = M),
      (l.updateOrganizationMemberRole = A),
      (l.removeOrganizationMember = W),
      (l.resetOrgDirectoryRepository = H));
  },
  98,
);
