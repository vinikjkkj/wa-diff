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
      d,
      m,
      p,
      _,
      f = { error: null, liveOrgIds: null, status: "idle" },
      g = 1e3,
      h = f,
      y = null,
      C = null,
      b = null,
      v = q(),
      S = new Set();
    function R() {
      return (y != null || (y = x()), y);
    }
    function L(t) {
      var r = t.bypassCooldown;
      if (C != null) return C;
      if (!o("WAWebCanonicalUtils").isCanonicalPresent())
        return (M(), (_ || (_ = n("Promise"))).resolve({ status: "skipped" }));
      if (!r && o("WAWebOrgCollection").OrgCollection.length > 0 && B())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-list] refresh skipped within the cooldown",
              ])),
          ),
          (_ || (_ = n("Promise"))).resolve({ status: "skipped" })
        );
      var a = P().finally(function () {
        C === a && (C = null);
      });
      return ((C = a), a);
    }
    function E() {
      return v.promise;
    }
    function k() {
      return C == null
        ? (_ || (_ = n("Promise"))).resolve()
        : C.then(r("WAWebNoop"));
    }
    function I() {
      return h;
    }
    function T(e) {
      return (
        S.add(e),
        function () {
          S.delete(e);
        }
      );
    }
    function D() {
      ((h = f),
        (y = null),
        (C = null),
        (b = null),
        (v = q()),
        S.forEach(function (e) {
          return e();
        }));
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          h.status === "idle" && W({ status: "loading" });
          try {
            var e = yield o("WAWebOrgListSyncJob").loadStoredOrgs();
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] restored cached orgs=",
                  "",
                ])),
              e.length,
            ),
              o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              e.length > 0 && v.resolve(),
              h.status === "loading" &&
                C == null &&
                W({ error: null, status: "ready" }));
          } catch (e) {
            var t = r("getErrorSafe")(e);
            (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-list] cached org list read failed",
                  ])),
              )
              .catching(t)
              .sendLogs("org-list-cache-read-failed"),
              h.status === "loading" &&
                C == null &&
                W({ error: t, status: "error" }));
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          W({
            error: null,
            status:
              o("WAWebOrgCollection").OrgCollection.length === 0
                ? "loading"
                : "refreshing",
          });
          try {
            var e = yield w(yield o("WAWebOrgListSyncJob").syncOrgList());
            return (
              F(e),
              o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              O(),
              W({
                liveOrgIds: new Set(
                  e.map(function (e) {
                    return e.orgId;
                  }),
                ),
                status: "ready",
              }),
              v.resolve(),
              { rows: e, status: "refreshed" }
            );
          } catch (e) {
            var t = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] organizations load failed: ",
                      "",
                    ])),
                  o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(e),
                )
                .catching(t)
                .sendLogs("org-admin-orgs-load-failed"),
              W({ error: t, status: "error" }),
              { error: t, status: "failed" }
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      if (!(b != null || !o("WAWebCanonicalGating").isCanonicalEnabled())) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[org-list] refresh waits for canonical credentials",
            ])),
        );
        var e = o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(function () {
            b === e && ((b = null), L({ bypassCooldown: !0 }));
          });
        b = e;
      }
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = e.filter(function (e) {
          return o("WAWebOrgViewerRoleUtils").canViewerAdministerOrg(e);
        }).length,
        n = e.filter(function (e) {
          return !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(e);
        }).length;
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[org-list] refreshed orgs=",
            " administered=",
            " hidden_directories=",
            "",
          ])),
        e.length,
        t,
        n,
      );
    }
    function O() {
      o("WAWebUserPrefsOrgs")
        .setOrgListFetchedTs(Date.now())
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] could not store the org list fetch time",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-list-stamp-write-failed");
        });
    }
    function B() {
      var e = o("WAWebUserPrefsOrgs").getOrgListFetchedTs();
      if (e == null) return !1;
      var t = Date.now() - e;
      return (
        t >= 0 &&
        t <
          o("WAWebABProps").getABPropConfigValue(
            "whatsapp_orgs_fetch_cooldown_secs",
          ) *
            g
      );
    }
    function W(e) {
      ((h = babelHelpers.extends({}, h, e)),
        S.forEach(function (e) {
          return e();
        }));
    }
    function q() {
      var e = r("WAWebNoop"),
        t = new (_ || (_ = n("Promise")))(function (t) {
          e = t;
        });
      return { promise: t, resolve: e };
    }
    ((l.restoreCachedOrgList = R),
      (l.refreshOrgList = L),
      (l.whenOrgListReady = E),
      (l.whenOrgListRefreshSettles = k),
      (l.getOrgListState = I),
      (l.subscribeToOrgListState = T),
      (l.resetOrgListAction = D));
  },
  98,
);
