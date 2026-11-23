__d(
  "WAWebOrgRefreshListAction",
  [
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
      _ = { error: null, liveOrgIds: null, status: "idle" },
      f = 1e3,
      g = [
        "Failed to fetch",
        "Load failed",
        "NetworkError when attempting to fetch resource.",
        "The network connection was lost.",
      ],
      h = _,
      y = null,
      C = null,
      b = null,
      v = W(),
      S = new Set();
    function R() {
      return (y != null || (y = x()), y);
    }
    function L(t) {
      var n = t.bypassCooldown;
      if (C != null) return C;
      if (!o("WAWebCanonicalUtils").isCanonicalPresent())
        return (M(), Promise.resolve({ status: "skipped" }));
      if (!n && o("WAWebOrgCollection").OrgCollection.length > 0 && O())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-list] refresh skipped within the cooldown",
              ])),
          ),
          Promise.resolve({ status: "skipped" })
        );
      var r = $().finally(function () {
        C === r && (C = null);
      });
      return ((C = r), r);
    }
    function E() {
      return v.promise;
    }
    function k() {
      return C == null ? Promise.resolve() : C.then(r("WAWebNoop"));
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
      ((h = _),
        (y = null),
        (C = null),
        (b = null),
        (v = W()),
        S.forEach(function (e) {
          return e();
        }));
    }
    async function x() {
      h.status === "idle" && B({ status: "loading" });
      try {
        var e = await o("WAWebOrgListSyncJob").loadStoredOrgs();
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[org-list] restored cached orgs=",
              "",
            ])),
          e.length,
        ),
          o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
          e.length > 0 && v.resolve(),
          h.status === "loading" &&
            C == null &&
            B({ error: null, status: "ready" }));
      } catch (e) {
        var t = r("getErrorSafe")(e);
        (o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[org-list] cached org list read failed",
              ])),
          )
          .catching(t)
          .sendLogs("org-list-cache-read-failed"),
          h.status === "loading" &&
            C == null &&
            B({ error: t, status: "error" }));
      }
    }
    async function $() {
      B({
        error: null,
        status:
          o("WAWebOrgCollection").OrgCollection.length === 0
            ? "loading"
            : "refreshing",
      });
      try {
        var e = await w(await o("WAWebOrgListSyncJob").syncOrgList());
        return (
          A(e),
          o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !0, rows: e }),
          F(),
          B({
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
          P(e, t),
          B({ error: t, status: "error" }),
          { error: t, status: "failed" }
        );
      }
    }
    function P(e, t) {
      var n = o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] organizations load failed: ",
                "",
              ])),
            o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(e),
          )
          .catching(t),
        r = N(t) ? n.tags("non-sad") : n;
      r.sendLogs("org-admin-orgs-load-failed");
    }
    function N(e) {
      return (
        e.name === "TypeError" &&
        g.some(function (t) {
          return e.message.includes(t);
        })
      );
    }
    function M() {
      if (!(b != null || !o("WAWebCanonicalGating").isCanonicalEnabled())) {
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
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
    async function w(e) {
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
        (await o("WAWebOrgListSyncJob").clearHiddenOrgDirectories(t)).map(
          function (e) {
            return [e.orgId, e];
          },
        ),
      );
      return e.map(function (e) {
        var t;
        return (t = r.get(e.orgId)) != null ? t : e;
      });
    }
    function A(e) {
      var t = e.filter(function (e) {
          return o("WAWebOrgViewerRoleUtils").canViewerAdministerOrg(e);
        }).length,
        n = e.filter(function (e) {
          return !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(e);
        }).length;
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function F() {
      o("WAWebUserPrefsOrgs")
        .setOrgListFetchedTs(Date.now())
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] could not store the org list fetch time",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-list-stamp-write-failed");
        });
    }
    function O() {
      var e = o("WAWebUserPrefsOrgs").getOrgListFetchedTs();
      if (e == null) return !1;
      var t = Date.now() - e;
      return (
        t >= 0 &&
        t <
          o("WAWebABProps").getABPropConfigValue(
            "whatsapp_orgs_fetch_cooldown_secs",
          ) *
            f
      );
    }
    function B(e) {
      ((h = babelHelpers.extends({}, h, e)),
        S.forEach(function (e) {
          return e();
        }));
    }
    function W() {
      var e = r("WAWebNoop"),
        t = new Promise(function (t) {
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
