__d(
  "WAWebOrgFetchDirectoryAction",
  [
    "Promise",
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
      m,
      p = new Map(),
      _ = new Map();
    function f(e, t) {
      var n = t.createModels,
        r = t.force,
        o = r === void 0 ? !1 : r,
        a = n || h(e),
        i = p.get(e);
      if (i != null)
        return a && !i.createModels
          ? i.promise.then(function (t) {
              return v(e, t);
            })
          : i.promise;
      var l = C(e, a, o).finally(function () {
        var t;
        ((t = p.get(e)) == null ? void 0 : t.promise) === l && p.delete(e);
      });
      return (p.set(e, { createModels: a, promise: l }), l);
    }
    function g(e) {
      if (
        !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          o("WAWebOrgCollection").OrgCollection.get(e),
        )
      )
        return (m || (m = n("Promise"))).resolve({ status: "not_allowed" });
      if (h(e)) return (m || (m = n("Promise"))).resolve({ status: "success" });
      var t = _.get(e);
      return t != null
        ? (m || (m = n("Promise"))).resolve({
            memberCount: t,
            status: "roster_too_large",
          })
        : f(e, { createModels: !0 });
    }
    function h(e) {
      var t;
      return (
        ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
          ? void 0
          : t.members.isComplete) === !0
      );
    }
    function y() {
      ((p = new Map()), (_ = new Map()));
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
              return n && !h(t) ? S(t) : { status: "success" };
            var i = yield o("WAWebOrgDirectorySyncJob").syncOrgDirectory(t);
            if (i.status === "roster_too_large")
              return (
                _.set(t, i.memberCount),
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
                inServerOrder: !0,
                lids: l,
                orgId: t,
                rows: d,
              }),
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return t.status === "success" ? S(e) : t;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                inServerOrder: !1,
                lids: n,
                orgId: e,
                rows: a,
              }),
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
        R.apply(this, arguments)
      );
    }
    ((l.fetchOrgDirectory = f),
      (l.loadOrgDirectoryMembers = g),
      (l.isOrgDirectoryLoaded = h),
      (l.resetOrgDirectoryDownloads = y));
  },
  98,
);
