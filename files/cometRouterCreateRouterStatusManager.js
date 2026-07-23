__d(
  "cometRouterCreateRouterStatusManager",
  ["CometRouter.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = {
        status: o("CometRouter.flow").RouterStatus.NO_ACTIVE_NAVIGATION,
      };
      function t(t) {
        e.cancelNav == null || e.cancelNav();
        var n =
          e.status === o("CometRouter.flow").RouterStatus.REACT_PENDING &&
          e.isReplace === !1 &&
          t === !1;
        return (
          (e = {
            isReplace: t === !0,
            status: o("CometRouter.flow").RouterStatus.GOIMPL_TRIGGERED,
          }),
          n
        );
      }
      function n() {
        e.cancelNav == null || e.cancelNav();
        var t = { canceled: !1 },
          n = function () {
            t.canceled = !0;
          };
        return (
          (e = babelHelpers.extends({}, e, {
            cancelNav: n,
            status: o("CometRouter.flow").RouterStatus.FETCHING_ROUTE,
          })),
          t
        );
      }
      function r(t) {
        e = babelHelpers.extends({}, e, {
          navigationKey: t,
          status: o("CometRouter.flow").RouterStatus.REACT_PENDING,
        });
      }
      function a(t) {
        e.navigationKey === t &&
          (e = {
            navigationKey: void 0,
            status: o("CometRouter.flow").RouterStatus.NO_ACTIVE_NAVIGATION,
          });
      }
      function i() {
        return e.status;
      }
      return {
        fetchingRoute: n,
        getCurrentStatus: i,
        internalStateUpdated: r,
        resetRouterStatus: a,
        startNavigation: t,
      };
    }
    l.default = e;
  },
  98,
);
