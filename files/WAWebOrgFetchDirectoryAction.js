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
      u = new Map(),
      c = new Set();
    function d(e, t) {
      var n = t.createModels,
        r = t.force,
        o = r === void 0 ? !1 : r,
        a = n || c.has(e),
        i = u.get(e);
      if (i != null)
        return a && !i.createModels
          ? i.promise.then(function (t) {
              return g(e, t);
            })
          : i.promise;
      var l = _(e, a, o).finally(function () {
        var t;
        ((t = u.get(e)) == null ? void 0 : t.promise) === l && u.delete(e);
      });
      return (u.set(e, { createModels: a, promise: l }), l);
    }
    function m(e) {
      return c.has(e);
    }
    function p() {
      ((u = new Map()), (c = new Set()));
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
              return n && !c.has(t) ? h(t) : { status: "success" };
            var i = yield o("WAWebOrgDirectorySyncJob").syncOrgDirectory(t);
            if (i.status === "roster_too_large") return i;
            var l = i.lids,
              s = i.org,
              u = i.rows;
            return (
              s != null &&
                o("WAWebOrgBridgeApi").applyOrgRows({
                  isFullList: !1,
                  rows: [s],
                }),
              o("WAWebOrgBridgeApi").applyOrgDirectory({
                createModels: n,
                lids: l,
                orgId: t,
                rows: u,
              }),
              n && c.add(t),
              { status: "success" }
            );
          } catch (t) {
            var d = r("getErrorSafe")(t);
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] public member directory refresh failed: ",
                      "",
                    ])),
                  o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(t),
                )
                .catching(d)
                .sendLogs("org-admin-directory-refresh-failed"),
              { error: d, status: "failed" }
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return t.status === "success" ? h(e) : t;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebOrgDirectorySyncJob").loadStoredOrgDirectory(
                e,
              ),
              n = t.lids,
              a = t.rows;
            return (
              o("WAWebOrgBridgeApi").applyOrgDirectory({
                createModels: !0,
                lids: n,
                orgId: e,
                rows: a,
              }),
              c.add(e),
              { status: "success" }
            );
          } catch (e) {
            var i = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] stored directory read failed",
                    ])),
                )
                .catching(i)
                .sendLogs("org-directory-stored-read-failed"),
              { error: i, status: "failed" }
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    ((l.fetchOrgDirectory = d),
      (l.isOrgDirectoryLoaded = m),
      (l.resetOrgDirectoryDownloads = p));
  },
  98,
);
