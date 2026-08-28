__d(
  "AdsDataAtomInstrumentation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l(t) {
      e.push(t);
    }
    function s(t, n) {
      e.forEach(function (e) {
        return e.actionStart(t, n);
      });
    }
    function u(t, n) {
      e.forEach(function (e) {
        return e.actionEnd && e.actionEnd(t, n);
      });
    }
    function c(t, n) {
      e.forEach(function (e) {
        return e.dispatchCallbacksStart && e.dispatchCallbacksStart(t, n);
      });
    }
    function d(t, n) {
      e.forEach(function (e) {
        return e.dispatchCallbacksEnd && e.dispatchCallbacksEnd(t, n);
      });
    }
    function m() {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = e.measureDispatchCallbacks
            ? e.measureDispatchCallbacks()
            : null;
          n && t.push(n);
        }),
        t.length
          ? function (e) {
              t.forEach(function (t) {
                return t(e);
              });
            }
          : null
      );
    }
    ((i.addInstrumentation = l),
      (i.onActionStart = s),
      (i.onActionEnd = u),
      (i.onDispatchCallbacksStart = c),
      (i.onDispatchCallbacksEnd = d),
      (i.onMeasureDispatchCallbacks = m));
  },
  66,
);
