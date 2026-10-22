__d(
  "WAWebOrgManagedGroupsRepository",
  [
    "Promise",
    "WALogger",
    "WAWebOrgManagedGroupDetailAdapter",
    "WAWebOrgManagedGroupListAdapter",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [],
      d = new Set(),
      m = new Map(),
      p = new Map(),
      _ = O();
    function f() {
      return _;
    }
    function g(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function h(e) {
      var t = U(e),
        n = p.get(t);
      return n != null
        ? n
        : (I(e),
          B(e, t, function () {
            return E(e);
          }));
    }
    function y(e, t) {
      var n = V(e, t),
        r = p.get(n);
      return r != null
        ? r
        : (x(e, t),
          B(e, n, function () {
            return T(e, t);
          }));
    }
    function C(e, t) {
      return (
        q(e),
        W(e, function () {
          return t({
            refreshGroupAfterMutation: function (n) {
              return R(e, n);
            },
            refreshGroups: function () {
              return E(e);
            },
          });
        })
      );
    }
    function b(e, t) {
      var n = $(e);
      n.groups.some(function (e) {
        var n = e.gid;
        return n === t.gid;
      }) || N(e, babelHelpers.extends({}, n, { groups: [t].concat(n.groups) }));
    }
    function v(e, t, n, r) {
      var o,
        a = new Set(
          n.map(function (e) {
            var t = e.key;
            return t;
          }),
        ),
        i = new Map(_.emailInviteNotSentByOrgID.get(e)),
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
      var s = new Map(_.emailInviteNotSentByOrgID);
      (s.set(e, i), A({ emailInviteNotSentByOrgID: s }));
    }
    function S() {
      ((m = new Map()), (p = new Map()), (_ = O()), F());
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (u || (u = n("Promise"))).all([E(e), T(e, t)]);
          var r = P(e, t);
          r.status === "ready" && r.group != null && w(e, r.group);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = $(t);
          N(t, {
            error: null,
            groups: n.groups,
            status: n.groups.length === 0 ? "loading" : "refreshing",
          });
          try {
            var a = yield o(
              "WAWebOrgManagedGroupListAdapter",
            ).loadOrgManagedGroupList(t);
            N(t, { error: null, groups: a, status: "ready" });
          } catch (n) {
            var i = $(t),
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
              N(t, { error: l, groups: i.groups, status: "error" }));
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t = $(e);
      N(e, {
        error: null,
        groups: t.groups,
        status: t.groups.length === 0 ? "loading" : "refreshing",
      });
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = P(e, t);
          M(e, t, {
            error: null,
            group: n.group,
            status: n.group == null ? "loading" : "refreshing",
          });
          try {
            var a = yield o(
              "WAWebOrgManagedGroupDetailAdapter",
            ).loadOrgManagedGroupDetail(e, t);
            M(e, t, { error: null, group: a, status: "ready" });
          } catch (n) {
            var i = P(e, t),
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
              M(e, t, { error: l, group: i.group, status: "error" }));
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      var n = P(e, t);
      M(e, t, {
        error: null,
        group: n.group,
        status: n.group == null ? "loading" : "refreshing",
      });
    }
    function $(e) {
      var t;
      return (t = _.listStateByOrgID.get(e)) != null
        ? t
        : { error: null, groups: c, status: "idle" };
    }
    function P(e, t) {
      var n, r;
      return (n =
        (r = _.detailStateByOrgID.get(e)) == null ? void 0 : r.get(t)) != null
        ? n
        : { error: null, group: null, status: "idle" };
    }
    function N(e, t) {
      var n = new Map(_.listStateByOrgID);
      (n.set(e, t), A({ listStateByOrgID: n }));
    }
    function M(e, t, n) {
      var r,
        o = new Map(_.detailStateByOrgID),
        a = new Map((r = o.get(e)) != null ? r : []);
      (a.set(t, n), o.set(e, a), A({ detailStateByOrgID: o }));
    }
    function w(e, t) {
      var n = $(e),
        r = n.groups.findIndex(function (e) {
          return e.gid === t.gid;
        });
      r !== -1 &&
        N(
          e,
          babelHelpers.extends({}, n, {
            groups: n.groups.map(function (e, n) {
              return n === r ? babelHelpers.extends({}, e, t) : e;
            }),
          }),
        );
    }
    function A(e) {
      ((_ = babelHelpers.extends({}, _, e)), F());
    }
    function F() {
      d.forEach(function (e) {
        return e();
      });
    }
    function O() {
      return {
        detailStateByOrgID: new Map(),
        emailInviteNotSentByOrgID: new Map(),
        listStateByOrgID: new Map(),
      };
    }
    function B(e, t, n) {
      var r = p.get(t);
      if (r != null) return r;
      var o = W(e, n).finally(function () {
        p.get(t) === o && p.delete(t);
      });
      return (p.set(t, o), o);
    }
    function W(e, t) {
      var n = m.get(e),
        r = n == null ? t() : n.then(t),
        o = r
          .then(
            function () {},
            function () {},
          )
          .finally(function () {
            m.get(e) === o && m.delete(e);
          });
      return (m.set(e, o), r);
    }
    function q(e) {
      p.delete(U(e));
      var t = "detail\0" + e + "\0";
      p.forEach(function (e, n) {
        n.startsWith(t) && p.delete(n);
      });
    }
    function U(e) {
      return "list\0" + e;
    }
    function V(e, t) {
      return "detail\0" + e + "\0" + t;
    }
    ((l.getOrgManagedGroupsRepositorySnapshot = f),
      (l.subscribeToOrgManagedGroupsRepository = g),
      (l.refreshOrgManagedGroups = h),
      (l.refreshOrgManagedGroup = y),
      (l.runOrgManagedGroupsMutation = C),
      (l.addOrgManagedGroupPreview = b),
      (l.recordOrgManagedGroupEmailInvites = v),
      (l.resetOrgManagedGroupsRepository = S));
  },
  98,
);
