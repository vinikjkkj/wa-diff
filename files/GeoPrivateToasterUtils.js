__d(
  "GeoPrivateToasterUtils",
  ["uniqueID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return "geo-toast-" + r("uniqueID")();
    }
    function s(e, t, n) {
      return [].concat(e, [{ toast: t, config: n }]);
    }
    function u(e, t) {
      return e.map(function (e) {
        return e.config.key === t
          ? {
              toast: e.toast,
              config: babelHelpers.extends({}, e.config, { isVisible: !1 }),
            }
          : e;
      });
    }
    function c(e) {
      return e.map(function (e) {
        return {
          toast: babelHelpers.extends({}, e.toast),
          config: babelHelpers.extends({}, e.config, { isVisible: !1 }),
        };
      });
    }
    function d(e, t) {
      return e.filter(function (e) {
        return e.config.key !== t;
      });
    }
    function m(e, t) {
      switch (t.type) {
        case "add":
          return s(
            e,
            t.toast,
            babelHelpers.extends({}, t.config, {
              key: t.key,
              onAfterHide: t.onAfterHide,
            }),
          );
        case "remove":
          return d(e, t.key);
        case "hide":
          return u(e, t.key);
        case "hideAll":
          return c(e);
      }
      return e;
    }
    var p = new Map(),
      _ = function (t) {
        for (var e of p.values()) e(t);
      };
    ((l.createItemKey = e),
      (l.itemsReducer = m),
      (l.globalToasterSubscriptions = p),
      (l.updateGlobalToasterSubscribers = _));
  },
  98,
);
