__d(
  "WAWebOrgFetchDirectoryAction",
  [
    "WALogger",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgDirectorySyncJob",
    "WAWebOrgViewerRoleUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Map(),
      p = new Map();
    function _(e, t) {
      var n = t.createModels,
        r = t.force,
        o = r === void 0 ? !1 : r,
        a = n || g(e),
        i = m.get(e);
      if (i != null)
        return a && !i.createModels
          ? i.promise.then(function (t) {
              return C(e, t);
            })
          : i.promise;
      var l = y(e, a, o).finally(function () {
        var t;
        ((t = m.get(e)) == null ? void 0 : t.promise) === l && m.delete(e);
      });
      return (m.set(e, { createModels: a, promise: l }), l);
    }
    function f(e) {
      if (
        !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          o("WAWebOrgCollection").OrgCollection.get(e),
        )
      )
        return Promise.resolve({ status: "not_allowed" });
      if (g(e)) return Promise.resolve({ status: "success" });
      var t = p.get(e);
      return t != null
        ? Promise.resolve({ memberCount: t, status: "roster_too_large" })
        : _(e, { createModels: !0 });
    }
    function g(e) {
      var t;
      return (
        ((t = o("WAWebOrgCollection").OrgCollection.get(e)) == null
          ? void 0
          : t.members.isComplete) === !0
      );
    }
    function h() {
      ((m = new Map()), (p = new Map()));
    }
    async function y(t, n, a) {
      if (
        !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          o("WAWebOrgCollection").OrgCollection.get(t),
        )
      )
        return { status: "not_allowed" };
      try {
        if (
          !a &&
          (await o("WAWebOrgDirectorySyncJob").isStoredOrgDirectoryFresh(t))
        )
          return n && !g(t) ? b(t) : { status: "success" };
        var i = await o("WAWebOrgDirectorySyncJob").syncOrgDirectory(t);
        if (i.status === "roster_too_large")
          return (
            p.set(t, i.memberCount),
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
            o("WAWebOrgBridgeApi").applyOrgRows({ isFullList: !1, rows: [c] }),
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
    }
    function C(e, t) {
      return t.status === "success" ? b(e) : t;
    }
    async function b(e) {
      try {
        var t = await o("WAWebOrgDirectorySyncJob").loadStoredOrgDirectory(e),
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
    }
    ((l.fetchOrgDirectory = _),
      (l.loadOrgDirectoryMembers = f),
      (l.isOrgDirectoryLoaded = g),
      (l.resetOrgDirectoryDownloads = h));
  },
  98,
);
