__d(
  "CometFeedUnitStatusTrackingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e
        .map(function (e, n) {
          return t(e) ? babelHelpers.extends({}, e, { position: n }) : null;
        })
        .filter(Boolean);
    }
    function l(e) {
      return e.filter(m);
    }
    function s(e) {
      return e.filter(p);
    }
    function u(e) {
      return e.filter(_);
    }
    function c(e) {
      return e.filter(function (e) {
        return e.status === "received" || e.status === "positioned";
      });
    }
    function d(e) {
      var t = e.reduce(function (e, t, n) {
        return _(t) ? n : e;
      }, -1);
      return e.map(function (e, n) {
        return n <= t && !_(e)
          ? babelHelpers.extends({}, e, { status: "rendered" })
          : e;
      });
    }
    function m(e) {
      return e.status === "rendered";
    }
    function p(e) {
      return e.status !== "error";
    }
    function _(e) {
      return (
        e.status === "rendered" ||
        e.status === "error" ||
        e.status === "positioned"
      );
    }
    ((i.getFeedUnitsWithOriginalPosition = e),
      (i.getCurrentlyVisibleFeedUnits = l),
      (i.getPossiblyVisibleFeedUnits = s),
      (i.getAllPositionedFeedUnits = u),
      (i.getUncommittedFeedUnits = c),
      (i.getFeedUnitsWithRenderingOutOfOrderFixed = d),
      (i.isCurrentlyVisible = m),
      (i.isPossiblyVisible = p),
      (i.isAnyPositionedType = _));
  },
  66,
);
