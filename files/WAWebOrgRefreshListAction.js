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
    "WAWebOrgLazyActions",
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
      h = [
        "Failed to fetch",
        "Load failed",
        "NetworkError when attempting to fetch resource.",
        "The network connection was lost.",
      ],
      y = f,
      C = null,
      b = null,
      v = null,
      S = H(),
      R = new Set();
    function L() {
      return (C != null || (C = $()), C);
    }
    function E(t) {
      var r = t.bypassCooldown;
      if (b != null) return b;
      if (!o("WAWebCanonicalUtils").isCanonicalPresent())
        return (F(), (_ || (_ = n("Promise"))).resolve({ status: "skipped" }));
      if (!r && o("WAWebOrgCollection").OrgCollection.length > 0 && U())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-list] refresh skipped within the cooldown",
              ])),
          ),
          (_ || (_ = n("Promise"))).resolve({ status: "skipped" })
        );
      var a = N().finally(function () {
        b === a && (b = null);
      });
      return ((b = a), a);
    }
    function k() {
      return S.promise;
    }
    function I() {
      return b == null
        ? (_ || (_ = n("Promise"))).resolve()
        : b.then(r("WAWebNoop"));
    }
    function T() {
      return y;
    }
    function D(e) {
      return (
        R.add(e),
        function () {
          R.delete(e);
        }
      );
    }
    function x() {
      ((y = f),
        (C = null),
        (b = null),
        (v = null),
        (S = H()),
        R.forEach(function (e) {
          return e();
        }));
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          y.status === "idle" && V({ status: "loading" });
          try {
            var e = yield o("WAWebOrgListSyncJob").loadStoredOrgs();
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] restored cached orgs=",
                  "",
                ])),
              e.length,
            ),
              o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              e.length > 0 && S.resolve(),
              y.status === "loading" &&
                b == null &&
                V({ error: null, status: "ready" }));
          } catch (e) {
            var t = r("getErrorSafe")(e);
            (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-list] cached org list read failed",
                  ])),
              )
              .catching(t)
              .sendLogs("org-list-cache-read-failed"),
              y.status === "loading" &&
                b == null &&
                V({ error: t, status: "error" }));
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          V({
            error: null,
            status:
              o("WAWebOrgCollection").OrgCollection.length === 0
                ? "loading"
                : "refreshing",
          });
          try {
            var e = yield O(yield o("WAWebOrgListSyncJob").syncOrgList());
            return (
              W(e),
              o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
              q(),
              V({
                liveOrgIds: new Set(
                  e.map(function (e) {
                    return e.orgId;
                  }),
                ),
                status: "ready",
              }),
              S.resolve(),
              { rows: e, status: "refreshed" }
            );
          } catch (e) {
            var t = r("getErrorSafe")(e);
            return (
              w(e, t),
              V({ error: t, status: "error" }),
              { error: t, status: "failed" }
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      var n = o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] organizations load failed: ",
                "",
              ])),
            o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(e),
          )
          .catching(t),
        r = A(t) ? n.tags("non-sad") : n;
      r.sendLogs("org-admin-orgs-load-failed");
    }
    function A(e) {
      return (
        e.name === "TypeError" &&
        h.some(function (t) {
          return e.message.includes(t);
        })
      );
    }
    function F() {
      if (!(v != null || !o("WAWebCanonicalGating").isCanonicalEnabled())) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[org-list] refresh waits for canonical credentials",
            ])),
        );
        var e = o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(function () {
            v === e && ((v = null), E({ bypassCooldown: !0 }));
          });
        v = e;
      }
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
            .filter(function (e) {
              return !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(e);
            })
            .map(function (e) {
              return e.orgId;
            });
          if (t.length === 0) return e;
          var n = t.flatMap(function (e) {
            var t, n;
            return (t =
              (n = o("WAWebOrgCollection").OrgCollection.get(e)) == null
                ? void 0
                : n.members.map(function (e) {
                    return e.id;
                  })) != null
              ? t
              : [];
          });
          (t.forEach(function (e) {
            return o("WAWebOrgBridgeApi").removeOrgContacts({ orgId: e });
          }),
            n.length > 0 &&
              o("WAWebOrgLazyActions")
                .loadOrgRequestContactAction()
                .then(
                  function (e) {
                    return e.uncheckOrgContacts(n);
                  },
                  function () {},
                ));
          var r = new Map(
            (yield o("WAWebOrgListSyncJob").clearHiddenOrgDirectories(t)).map(
              function (e) {
                return [e.orgId, e];
              },
            ),
          );
          return e.map(function (e) {
            var t;
            return (t = r.get(e.orgId)) != null ? t : e;
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      var t = e.filter(function (e) {
          return o("WAWebOrgViewerRoleUtils").canViewerAdministerOrg(e);
        }).length,
        n = e.filter(function (e) {
          return !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(e);
        }).length;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function q() {
      o("WAWebUserPrefsOrgs")
        .setOrgListFetchedTs(Date.now())
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] could not store the org list fetch time",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-list-stamp-write-failed");
        });
    }
    function U() {
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
    function V(e) {
      ((y = babelHelpers.extends({}, y, e)),
        R.forEach(function (e) {
          return e();
        }));
    }
    function H() {
      var e = r("WAWebNoop"),
        t = new (_ || (_ = n("Promise")))(function (t) {
          e = t;
        });
      return { promise: t, resolve: e };
    }
    ((l.restoreCachedOrgList = L),
      (l.refreshOrgList = E),
      (l.whenOrgListReady = k),
      (l.whenOrgListRefreshSettles = I),
      (l.getOrgListState = T),
      (l.subscribeToOrgListState = D),
      (l.resetOrgListAction = x));
  },
  98,
);
