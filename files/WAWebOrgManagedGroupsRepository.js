__d(
  "WAWebOrgManagedGroupsRepository",
  [
    "WALogger",
    "WAWebOrgManagedGroupDetailAdapter",
    "WAWebOrgManagedGroupListAdapter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [],
      c = new Set(),
      d = new Map(),
      m = new Map(),
      p = M();
    function _() {
      return p;
    }
    function f(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function g(e) {
      var t = O(e),
        n = m.get(t);
      return n != null
        ? n
        : (L(e),
          w(e, t, function () {
            return R(e);
          }));
    }
    function h(e, t) {
      var n = B(e, t),
        r = m.get(n);
      return r != null
        ? r
        : (k(e, t),
          w(e, n, function () {
            return E(e, t);
          }));
    }
    function y(e, t) {
      return (
        F(e),
        A(e, function () {
          return S(e, t);
        })
      );
    }
    function C(e, t) {
      return (
        F(e),
        A(e, function () {
          return t({
            refreshGroupAfterMutation: function (n) {
              return S(e, n);
            },
            refreshGroups: function () {
              return R(e);
            },
          });
        })
      );
    }
    function b(e, t) {
      var n = I(e);
      n.groups.some(function (e) {
        var n = e.gid;
        return n === t.gid;
      }) || D(e, babelHelpers.extends({}, n, { groups: [t].concat(n.groups) }));
    }
    function v(e, t, n, r) {
      var o,
        a = new Set(
          n.map(function (e) {
            var t = e.key;
            return t;
          }),
        ),
        i = new Map(p.emailInviteNotSentByOrgID.get(e)),
        l = [].concat(
          ((o = i.get(t)) != null ? o : []).filter(function (e) {
            var t = e.key;
            return !a.has(t);
          }),
          n.filter(function (e) {
            return e.source === "roster" && r.has(e.rosterEntry.id);
          }),
        );
      if (l.length > 0) i.set(t, l);
      else if (!i.delete(t)) return;
      var s = new Map(p.emailInviteNotSentByOrgID);
      (s.set(e, i), P({ emailInviteNotSentByOrgID: s }));
    }
    async function S(e, t) {
      await Promise.all([R(e), E(e, t)]);
      var n = T(e, t);
      n.status === "ready" && n.group != null && $(e, n.group);
    }
    async function R(t) {
      var n = I(t);
      D(t, {
        error: null,
        groups: n.groups,
        status: n.groups.length === 0 ? "loading" : "refreshing",
      });
      try {
        var a = await o(
          "WAWebOrgManagedGroupListAdapter",
        ).loadOrgManagedGroupList(t);
        D(t, { error: null, groups: a, status: "ready" });
      } catch (n) {
        var i = I(t),
          l = r("getErrorSafe")(n);
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] managed-group list refresh failed",
              ])),
          )
          .catching(l)
          .sendLogs("org-managed-groups-list-refresh-failed"),
          D(t, { error: l, groups: i.groups, status: "error" }));
      }
    }
    function L(e) {
      var t = I(e);
      D(e, {
        error: null,
        groups: t.groups,
        status: t.groups.length === 0 ? "loading" : "refreshing",
      });
    }
    async function E(e, t) {
      var n = T(e, t);
      x(e, t, {
        error: null,
        group: n.group,
        status: n.group == null ? "loading" : "refreshing",
      });
      try {
        var a = await o(
          "WAWebOrgManagedGroupDetailAdapter",
        ).loadOrgManagedGroupDetail(e, t);
        x(e, t, { error: null, group: a, status: "ready" });
      } catch (n) {
        var i = T(e, t),
          l = r("getErrorSafe")(n);
        (o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] managed-group detail refresh failed",
              ])),
          )
          .catching(l)
          .sendLogs("org-managed-group-detail-refresh-failed"),
          x(e, t, { error: l, group: i.group, status: "error" }));
      }
    }
    function k(e, t) {
      var n = T(e, t);
      x(e, t, {
        error: null,
        group: n.group,
        status: n.group == null ? "loading" : "refreshing",
      });
    }
    function I(e) {
      var t;
      return (t = p.listStateByOrgID.get(e)) != null
        ? t
        : { error: null, groups: u, status: "idle" };
    }
    function T(e, t) {
      var n, r;
      return (n =
        (r = p.detailStateByOrgID.get(e)) == null ? void 0 : r.get(t)) != null
        ? n
        : { error: null, group: null, status: "idle" };
    }
    function D(e, t) {
      var n = new Map(p.listStateByOrgID);
      (n.set(e, t), P({ listStateByOrgID: n }));
    }
    function x(e, t, n) {
      var r,
        o = new Map(p.detailStateByOrgID),
        a = new Map((r = o.get(e)) != null ? r : []);
      (a.set(t, n), o.set(e, a), P({ detailStateByOrgID: o }));
    }
    function $(e, t) {
      var n = I(e),
        r = n.groups.findIndex(function (e) {
          return e.gid === t.gid;
        });
      r !== -1 &&
        D(
          e,
          babelHelpers.extends({}, n, {
            groups: n.groups.map(function (e, n) {
              return n === r ? babelHelpers.extends({}, e, t) : e;
            }),
          }),
        );
    }
    function P(e) {
      ((p = babelHelpers.extends({}, p, e)), N());
    }
    function N() {
      c.forEach(function (e) {
        return e();
      });
    }
    function M() {
      return {
        detailStateByOrgID: new Map(),
        emailInviteNotSentByOrgID: new Map(),
        listStateByOrgID: new Map(),
      };
    }
    function w(e, t, n) {
      var r = m.get(t);
      if (r != null) return r;
      var o = A(e, n).finally(function () {
        m.get(t) === o && m.delete(t);
      });
      return (m.set(t, o), o);
    }
    function A(e, t) {
      var n = d.get(e),
        r = n == null ? t() : n.then(t),
        o = r
          .then(
            function () {},
            function () {},
          )
          .finally(function () {
            d.get(e) === o && d.delete(e);
          });
      return (d.set(e, o), r);
    }
    function F(e) {
      m.delete(O(e));
      var t = "detail\0" + e + "\0";
      m.forEach(function (e, n) {
        n.startsWith(t) && m.delete(n);
      });
    }
    function O(e) {
      return "list\0" + e;
    }
    function B(e, t) {
      return "detail\0" + e + "\0" + t;
    }
    ((l.getOrgManagedGroupsRepositorySnapshot = _),
      (l.subscribeToOrgManagedGroupsRepository = f),
      (l.refreshOrgManagedGroups = g),
      (l.refreshOrgManagedGroup = h),
      (l.refreshOrgManagedGroupAndListAfterPendingReads = y),
      (l.runOrgManagedGroupsMutation = C),
      (l.addOrgManagedGroupPreview = b),
      (l.recordOrgManagedGroupEmailInvites = v));
  },
  98,
);
