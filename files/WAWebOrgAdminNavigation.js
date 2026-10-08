__d(
  "WAWebOrgAdminNavigation",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        activePage: "home",
        disabled: !1,
        organizations: [],
        selectedOrganizationID: "",
        switchDisabled: !1,
      },
      l = e,
      s = null,
      u = 0,
      c = new Set();
    function d() {
      return l;
    }
    function m(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function p(e) {
      ((l = e),
        c.forEach(function (e) {
          return e();
        }));
    }
    function _() {
      p(e);
    }
    function f() {
      return ((u += 1), u);
    }
    function g(e) {
      return e === u;
    }
    function h(e) {
      return (
        (s = e),
        function () {
          s === e &&
            ((s = null),
            p(
              babelHelpers.extends({}, l, { disabled: !1, switchDisabled: !1 }),
            ));
        }
      );
    }
    function y() {
      return s != null;
    }
    function C(e, t) {
      return s == null ? !1 : (s(e, t), !0);
    }
    ((i.getOrgAdminNavigation = d),
      (i.subscribeToOrgAdminNavigation = m),
      (i.publishOrgAdminNavigation = p),
      (i.resetOrgAdminNavigation = _),
      (i.startOrgAdminNavigationSession = f),
      (i.isCurrentOrgAdminNavigationSession = g),
      (i.registerOrgAdminPageHandler = h),
      (i.hasOrgAdminPageHandler = y),
      (i.openOrgAdminPage = C));
  },
  66,
);
