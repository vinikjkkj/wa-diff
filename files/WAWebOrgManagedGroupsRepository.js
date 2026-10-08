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
      _ = F();
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
      var t = q(e),
        n = p.get(t);
      return n != null
        ? n
        : (k(e),
          O(e, t, function () {
            return L(e);
          }));
    }
    function y(e, t) {
      var n = U(e, t),
        r = p.get(n);
      return r != null
        ? r
        : (D(e, t),
          O(e, n, function () {
            return I(e, t);
          }));
    }
    function C(e, t) {
      return (
        W(e),
        B(e, function () {
          return t({
            refreshGroupAfterMutation: function (n) {
              return S(e, n);
            },
            refreshGroups: function () {
              return L(e);
            },
          });
        })
      );
    }
    function b(e, t) {
      var n = x(e);
      n.groups.some(function (e) {
        var n = e.gid;
        return n === t.gid;
      }) || P(e, babelHelpers.extends({}, n, { groups: [t].concat(n.groups) }));
    }
    function v() {
      ((m = new Map()), (p = new Map()), (_ = F()), A());
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (u || (u = n("Promise"))).all([L(e), I(e, t)]);
          var r = $(e, t);
          r.status === "ready" && r.group != null && M(e, r.group);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = x(t);
          P(t, {
            error: null,
            groups: n.groups,
            status: n.groups.length === 0 ? "loading" : "refreshing",
          });
          try {
            var a = yield o(
              "WAWebOrgManagedGroupListAdapter",
            ).loadOrgManagedGroupList(t);
            P(t, { error: null, groups: a, status: "ready" });
          } catch (n) {
            var i = x(t),
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
              P(t, { error: l, groups: i.groups, status: "error" }));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = x(e);
      P(e, {
        error: null,
        groups: t.groups,
        status: t.groups.length === 0 ? "loading" : "refreshing",
      });
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = $(e, t);
          N(e, t, {
            error: null,
            group: n.group,
            status: n.group == null ? "loading" : "refreshing",
          });
          try {
            var a = yield o(
              "WAWebOrgManagedGroupDetailAdapter",
            ).loadOrgManagedGroupDetail(e, t);
            N(e, t, { error: null, group: a, status: "ready" });
          } catch (n) {
            var i = $(e, t),
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
              N(e, t, { error: l, group: i.group, status: "error" }));
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      var n = $(e, t);
      N(e, t, {
        error: null,
        group: n.group,
        status: n.group == null ? "loading" : "refreshing",
      });
    }
    function x(e) {
      var t;
      return (t = _.listStateByOrgID.get(e)) != null
        ? t
        : { error: null, groups: c, status: "idle" };
    }
    function $(e, t) {
      var n, r;
      return (n =
        (r = _.detailStateByOrgID.get(e)) == null ? void 0 : r.get(t)) != null
        ? n
        : { error: null, group: null, status: "idle" };
    }
    function P(e, t) {
      var n = new Map(_.listStateByOrgID);
      (n.set(e, t), w({ listStateByOrgID: n }));
    }
    function N(e, t, n) {
      var r,
        o = new Map(_.detailStateByOrgID),
        a = new Map((r = o.get(e)) != null ? r : []);
      (a.set(t, n), o.set(e, a), w({ detailStateByOrgID: o }));
    }
    function M(e, t) {
      var n = x(e),
        r = n.groups.findIndex(function (e) {
          return e.gid === t.gid;
        });
      r !== -1 &&
        P(
          e,
          babelHelpers.extends({}, n, {
            groups: n.groups.map(function (e, n) {
              return n === r ? babelHelpers.extends({}, e, t) : e;
            }),
          }),
        );
    }
    function w(e) {
      ((_ = babelHelpers.extends({}, _, e)), A());
    }
    function A() {
      d.forEach(function (e) {
        return e();
      });
    }
    function F() {
      return { detailStateByOrgID: new Map(), listStateByOrgID: new Map() };
    }
    function O(e, t, n) {
      var r = p.get(t);
      if (r != null) return r;
      var o = B(e, n).finally(function () {
        p.get(t) === o && p.delete(t);
      });
      return (p.set(t, o), o);
    }
    function B(e, t) {
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
    function W(e) {
      p.delete(q(e));
      var t = "detail\0" + e + "\0";
      p.forEach(function (e, n) {
        n.startsWith(t) && p.delete(n);
      });
    }
    function q(e) {
      return "list\0" + e;
    }
    function U(e, t) {
      return "detail\0" + e + "\0" + t;
    }
    ((l.getOrgManagedGroupsRepositorySnapshot = f),
      (l.subscribeToOrgManagedGroupsRepository = g),
      (l.refreshOrgManagedGroups = h),
      (l.refreshOrgManagedGroup = y),
      (l.runOrgManagedGroupsMutation = C),
      (l.addOrgManagedGroupPreview = b),
      (l.resetOrgManagedGroupsRepository = v));
  },
  98,
);
