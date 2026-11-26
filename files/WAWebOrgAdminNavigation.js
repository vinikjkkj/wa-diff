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
      u = null,
      c = 0,
      d = new Set();
    function m() {
      return l;
    }
    function p(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function _(e) {
      ((l = e),
        d.forEach(function (e) {
          return e();
        }));
    }
    function f() {
      _(e);
    }
    function g() {
      return ((c += 1), c);
    }
    function h(e) {
      return e === c;
    }
    function y(e, t) {
      return (
        (s = e),
        (u = t),
        function () {
          s === e &&
            ((s = null),
            (u = null),
            _(
              babelHelpers.extends({}, l, {
                disabled: !1,
                leaveDisabled: !1,
                selectedOrganizationID: "",
                switchDisabled: !1,
              }),
            ));
        }
      );
    }
    function C() {
      return s != null;
    }
    function b(e) {
      var t = u;
      if (t == null) {
        e();
        return;
      }
      t(function () {
        u === t && e();
      });
    }
    function v(e, t) {
      return s == null ? !1 : (s(e, t), !0);
    }
    ((i.getOrgAdminNavigation = m),
      (i.subscribeToOrgAdminNavigation = p),
      (i.publishOrgAdminNavigation = _),
      (i.resetOrgAdminNavigation = f),
      (i.startOrgAdminNavigationSession = g),
      (i.isCurrentOrgAdminNavigationSession = h),
      (i.registerOrgAdminPageHandler = y),
      (i.hasOrgAdminPageHandler = C),
      (i.leaveOrgAdminPage = b),
      (i.openOrgAdminPage = v));
  },
  66,
);
