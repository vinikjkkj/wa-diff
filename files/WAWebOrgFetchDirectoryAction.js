__d(
  "WAWebOrgFetchDirectoryAction",
  [
    "WALogger",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgDirectorySyncJob",
    "WAWebOrgViewerRoleUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Map(),
      p = new Set();
    function _(e, t) {
      var n = t.createModels,
        r = t.force,
        o = r === void 0 ? !1 : r,
        a = n || p.has(e),
        i = m.get(e);
      if (i != null)
        return a && !i.createModels
          ? i.promise.then(function (t) {
              return C(e, t);
            })
          : i.promise;
      var l = h(e, a, o).finally(function () {
        var t;
        ((t = m.get(e)) == null ? void 0 : t.promise) === l && m.delete(e);
      });
      return (m.set(e, { createModels: a, promise: l }), l);
    }
    function f(e) {
      return p.has(e);
    }
    function g() {
      ((m = new Map()), (p = new Set()));
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (
            !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
              o("WAWebOrgCollection").OrgCollection.get(t),
            )
          )
            return { status: "not_allowed" };
          try {
            if (
              !a &&
              (yield o("WAWebOrgDirectorySyncJob").isStoredOrgDirectoryFresh(t))
            )
              return n && !p.has(t) ? b(t) : { status: "success" };
            var i = yield o("WAWebOrgDirectorySyncJob").syncOrgDirectory(t);
            if (i.status === "roster_too_large")
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] too large to download members=",
                      "",
                    ])),
                  i.memberCount,
                ),
                i
              );
            var l = i.lids,
              c = i.org,
              d = i.rows;
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-directory] downloaded members=",
                    " forced=",
                    "",
                  ])),
                l.length,
                String(a),
              ),
              c != null &&
                o("WAWebOrgBridgeApi").applyOrgRows({
                  isFullList: !1,
                  rows: [c],
                }),
              o("WAWebOrgBridgeApi").applyOrgDirectory({
                createModels: n,
                lids: l,
                orgId: t,
                rows: d,
              }),
              n && p.add(t),
              { status: "success" }
            );
          } catch (e) {
            var m = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] public member directory refresh failed: ",
                      "",
                    ])),
                  o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(e),
                )
                .catching(m)
                .sendLogs("org-admin-directory-refresh-failed"),
              { error: m, status: "failed" }
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return t.status === "success" ? b(e) : t;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebOrgDirectorySyncJob").loadStoredOrgDirectory(
                e,
              ),
              n = t.lids,
              a = t.rows;
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-directory] loaded the stored directory members=",
                    "",
                  ])),
                n.length,
              ),
              o("WAWebOrgBridgeApi").applyOrgDirectory({
                createModels: !0,
                lids: n,
                orgId: e,
                rows: a,
              }),
              p.add(e),
              { status: "success" }
            );
          } catch (e) {
            var i = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] stored directory read failed",
                    ])),
                )
                .catching(i)
                .sendLogs("org-directory-stored-read-failed"),
              { error: i, status: "failed" }
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.fetchOrgDirectory = _),
      (l.isOrgDirectoryLoaded = f),
      (l.resetOrgDirectoryDownloads = g));
  },
  98,
);
