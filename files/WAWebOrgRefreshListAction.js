__d(
  "WAWebOrgRefreshListAction",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebNoop",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgListSyncJob",
    "WAWebOrgViewerRoleUtils",
    "WAWebUserPrefsOrgs",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { error: null, liveOrgIds: null, status: "idle" },
      m = 1e3,
      p = d,
      _ = null,
      f = null,
      g = null,
      h = A(),
      y = new Set();
    function C() {
      return (_ != null || (_ = k()), _);
    }
    function b(e) {
      var t = e.bypassCooldown;
      if (f != null) return f;
      if (!o("WAWebCanonicalUtils").isCanonicalPresent())
        return (x(), (c || (c = n("Promise"))).resolve({ status: "skipped" }));
      if (!t && o("WAWebOrgCollection").OrgCollection.length > 0 && M())
        return (c || (c = n("Promise"))).resolve({ status: "skipped" });
      var r = T().finally(function () {
        f === r && (f = null);
      });
      return ((f = r), r);
    }
    function v() {
      return h.promise;
    }
    function S() {
      return f == null
        ? (c || (c = n("Promise"))).resolve()
        : f.then(r("WAWebNoop"));
    }
    function R() {
      return p;
    }
    function L(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function E() {
      ((p = d),
        (_ = null),
        (f = null),
        (g = null),
        (h = A()),
        y.forEach(function (e) {
          return e();
        }));
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          p.status === "idle" && w({ status: "loading" });
          try {
            var e = yield o("WAWebOrgListSyncJob").loadStoredOrgs();
            (o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              e.length > 0 && h.resolve(),
              p.status === "loading" &&
                f == null &&
                w({ error: null, status: "ready" }));
          } catch (e) {
            var t = r("getErrorSafe")(e);
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-list] cached org list read failed",
                  ])),
              )
              .catching(t)
              .sendLogs("org-list-cache-read-failed"),
              p.status === "loading" &&
                f == null &&
                w({ error: t, status: "error" }));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          w({
            error: null,
            status:
              o("WAWebOrgCollection").OrgCollection.length === 0
                ? "loading"
                : "refreshing",
          });
          try {
            var e = yield $(yield o("WAWebOrgListSyncJob").syncOrgList());
            return (
              o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              N(),
              w({
                liveOrgIds: new Set(
                  e.map(function (e) {
                    return e.orgId;
                  }),
                ),
                status: "ready",
              }),
              h.resolve(),
              { rows: e, status: "refreshed" }
            );
          } catch (e) {
            var t = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] organizations load failed: ",
                      "",
                    ])),
                  o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(e),
                )
                .catching(t)
                .sendLogs("org-admin-orgs-load-failed"),
              w({ error: t, status: "error" }),
              { error: t, status: "failed" }
            );
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      if (!(g != null || !o("WAWebCanonicalGating").isCanonicalEnabled())) {
        var e = o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(function () {
            g === e && ((g = null), b({ bypassCooldown: !0 }));
          });
        g = e;
      }
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
            .filter(function (e) {
              return !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(e);
            })
            .map(function (e) {
              return e.orgId;
            });
          if (t.length === 0) return e;
          t.forEach(function (e) {
            return o("WAWebOrgBridgeApi").removeOrgContacts({ orgId: e });
          });
          var n = new Map(
            (yield o("WAWebOrgListSyncJob").clearHiddenOrgDirectories(t)).map(
              function (e) {
                return [e.orgId, e];
              },
            ),
          );
          return e.map(function (e) {
            var t;
            return (t = n.get(e.orgId)) != null ? t : e;
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      o("WAWebUserPrefsOrgs")
        .setOrgListFetchedTs(Date.now())
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] could not store the org list fetch time",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-list-stamp-write-failed");
        });
    }
    function M() {
      var e = o("WAWebUserPrefsOrgs").getOrgListFetchedTs();
      if (e == null) return !1;
      var t = Date.now() - e;
      return (
        t >= 0 &&
        t <
          o("WAWebABProps").getABPropConfigValue(
            "whatsapp_orgs_fetch_cooldown_secs",
          ) *
            m
      );
    }
    function w(e) {
      ((p = babelHelpers.extends({}, p, e)),
        y.forEach(function (e) {
          return e();
        }));
    }
    function A() {
      var e = r("WAWebNoop"),
        t = new (c || (c = n("Promise")))(function (t) {
          e = t;
        });
      return { promise: t, resolve: e };
    }
    ((l.restoreCachedOrgList = C),
      (l.refreshOrgList = b),
      (l.whenOrgListReady = v),
      (l.whenOrgListRefreshSettles = S),
      (l.getOrgListState = R),
      (l.subscribeToOrgListState = L),
      (l.resetOrgListAction = E));
  },
  98,
);
