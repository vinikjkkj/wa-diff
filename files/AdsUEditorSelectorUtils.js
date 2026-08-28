__d(
  "AdsUEditorSelectorUtils",
  [
    "AdsBulkValueUtils",
    "AdsEmptyValue",
    "AdsMixedValue",
    "adsCreateStoreSelector",
    "immutable",
    "memoizeWithArgsWeak",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = c(function (e, t) {
          return t.reduce(function (t, n) {
            return t.set(n, n(e));
          }, r("immutable").Map());
        }),
        a = r("memoizeWithArgsWeak")(function (e, t, n, r, o, a) {
          var i = o.reduce(function (e, t) {
            return (e.push.apply(e, t.getStores(n)), e);
          }, []);
          return (
            i.push.apply(i, t.getStores(e)),
            i.push.apply(i, r.getStores(e)),
            i
          );
        });
      return r("adsCreateStoreSelector")(
        function (r) {
          var o = e(r),
            i = t(r),
            l = n == null ? void 0 : n(r);
          return a(r, e, o, t, i, l);
        },
        function (r) {
          return o(e(r), t(r));
        },
        { name: i.id },
      );
    }
    function s(e, t) {
      var n = [],
        a = r("AdsEmptyValue").instance();
      return function () {
        var i = e.apply(void 0, arguments);
        if (r("shallowArrayEqual")(i, n)) return a;
        n = i;
        var l = o("AdsBulkValueUtils").aggregate(i, t),
          s = a instanceof r("AdsMixedValue");
        return !s && r("shallowArrayEqual")(l.getValues(), a.getValues())
          ? a
          : ((a = l), l);
      };
    }
    function u(e) {
      var t = [];
      return function () {
        var n = e.apply(void 0, arguments);
        return r("shallowArrayEqual")(n, t) ? t : ((t = n), n);
      };
    }
    function c(e) {
      var t = r("immutable").Map();
      return function () {
        var n = e.apply(void 0, arguments);
        return n.equals(t) ? t : ((t = n), n);
      };
    }
    function d(e) {
      var t = r("immutable").Set();
      return function () {
        var n = e.apply(void 0, arguments);
        return n.equals(t) ? t : ((t = n), n);
      };
    }
    ((l.createDerivedDataChangedFlagSelector = e),
      (l.memoizeBulkAggregation = s),
      (l.memoizeCreateArray = u),
      (l.memoizeCreateImmutableMap = c),
      (l.memoizeCreateImmutableSet = d));
  },
  98,
);
