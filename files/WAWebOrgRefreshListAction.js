__d(
  "WAWebOrgRefreshListAction",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
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
      g = M(),
      h = new Set();
    function y() {
      return (_ != null || (_ = E()), _);
    }
    function C(e) {
      var t = e.bypassCooldown;
      if (f != null) return f;
      if (!t && o("WAWebOrgCollection").OrgCollection.length > 0 && P())
        return (c || (c = n("Promise"))).resolve({ status: "skipped" });
      var r = I().finally(function () {
        f === r && (f = null);
      });
      return ((f = r), r);
    }
    function b() {
      return g.promise;
    }
    function v() {
      return f == null
        ? (c || (c = n("Promise"))).resolve()
        : f.then(r("WAWebNoop"));
    }
    function S() {
      return p;
    }
    function R(e) {
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function L() {
      ((p = d),
        (_ = null),
        (f = null),
        (g = M()),
        h.forEach(function (e) {
          return e();
        }));
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          p.status === "idle" && N({ status: "loading" });
          try {
            var e = yield o("WAWebOrgListSyncJob").loadStoredOrgs();
            (o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              e.length > 0 && g.resolve(),
              p.status === "loading" &&
                f == null &&
                N({ error: null, status: "ready" }));
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
                N({ error: t, status: "error" }));
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N({
            error: null,
            status:
              o("WAWebOrgCollection").OrgCollection.length === 0
                ? "loading"
                : "refreshing",
          });
          try {
            var e = yield D(yield o("WAWebOrgListSyncJob").syncOrgList());
            return (
              o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              $(),
              N({
                liveOrgIds: new Set(
                  e.map(function (e) {
                    return e.orgId;
                  }),
                ),
                status: "ready",
              }),
              g.resolve(),
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
              N({ error: t, status: "error" }),
              { error: t, status: "failed" }
            );
          }
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
        x.apply(this, arguments)
      );
    }
    function $() {
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
    function P() {
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
    function N(e) {
      ((p = babelHelpers.extends({}, p, e)),
        h.forEach(function (e) {
          return e();
        }));
    }
    function M() {
      var e = r("WAWebNoop"),
        t = new (c || (c = n("Promise")))(function (t) {
          e = t;
        });
      return { promise: t, resolve: e };
    }
    ((l.restoreCachedOrgList = y),
      (l.refreshOrgList = C),
      (l.whenOrgListReady = b),
      (l.whenOrgListRefreshSettles = v),
      (l.getOrgListState = S),
      (l.subscribeToOrgListState = R),
      (l.resetOrgListAction = L));
  },
  98,
);
