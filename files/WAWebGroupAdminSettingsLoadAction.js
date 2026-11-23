__d(
  "WAWebGroupAdminSettingsLoadAction",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebBackendRuntime",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupAdminSettings",
    "WAWebGroupQueryJob",
    "WAWebGroupQueryService",
    "WAWebGroupStoreService",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 20,
      c = 2,
      d = new Set(),
      m = new Map(),
      p = u;
    async function _(e, t) {
      var n = e.filter(function (e) {
        return !d.has(e.id.toString());
      });
      n.length !== 0 &&
        (await y(n),
        await b(
          n.filter(function (e) {
            return !g(e);
          }),
          t,
        ));
    }
    async function f(e, t) {
      var n = e.filter(function (e) {
        return !h(e);
      });
      await o("WAConcurrentIterate").concurrentIterate(
        n.length,
        async function (e) {
          t.aborted || (await v(n[e]));
        },
        c,
      );
    }
    function g(e) {
      var t = o("WAWebGroupAdminSettings").getChatGroupAdminSettings(e);
      return t != null && t.addMembers != null;
    }
    function h(e) {
      var t;
      return (
        ((t = e.groupMetadata) == null ? void 0 : t.memberLinkMode) != null ||
        d.has(e.id.toString())
      );
    }
    async function y(t) {
      try {
        var n = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupStoreService").GroupStoreService,
              ).bulkGetGroupMetadata
            : o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata
        )(
          t.map(function (e) {
            return e.id;
          }),
        );
        n.forEach(function (e, n) {
          e != null && C(t[n], e);
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "loadGroupAdminSettings: failed to read stored group settings",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    function C(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = e.groupMetadata;
      if (l != null) {
        l.set({
          announce: (n = l.announce) != null ? n : t.announce,
          memberAddMode: (r = l.memberAddMode) != null ? r : t.memberAddMode,
          memberLinkMode: (o = l.memberLinkMode) != null ? o : t.memberLinkMode,
          membershipApprovalMode:
            (a = l.membershipApprovalMode) != null
              ? a
              : t.membershipApprovalMode,
          restrict: (i = l.restrict) != null ? i : t.restrict,
        });
        var s = l.announce,
          u = l.memberAddMode,
          c = l.memberLinkMode,
          m = l.membershipApprovalMode,
          p = l.restrict;
        [s, u, c, m, p].every(function (e) {
          return e != null;
        }) && d.add(e.id.toString());
      }
    }
    async function b(e, t) {
      var n = e
        .filter(function (e) {
          return !m.has(e.id.toString());
        })
        .slice(0, p);
      await o("WAConcurrentIterate").concurrentIterate(
        n.length,
        async function (e) {
          var r = n[e];
          t.aborted || p === 0 || m.has(r.id.toString()) || (p--, await v(r));
        },
        c,
      );
    }
    function v(e) {
      var t = e.id.toString(),
        n = m.get(t);
      if (n != null) return n;
      var r = S(e).finally(function () {
        m.delete(t);
      });
      return (m.set(t, r), r);
    }
    async function S(e) {
      try {
        (await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupQueryService").GroupQueryService,
              ).queryAndUpdateGroupMetadataById
            : o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById
        )({ id: e.id, request: "interactive" }),
          g(e) && d.add(e.id.toString()));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "loadGroupAdminSettings: group query failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    ((l.MAX_SERVER_QUERIES_PER_SESSION = u),
      (l.loadGroupAdminSettings = _),
      (l.loadGroupLinkModes = f),
      (l.hasGroupAdminSettings = g),
      (l.isGroupLinkModeKnown = h));
  },
  98,
);
