__d(
  "VisualCompletionTraceObserver",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [],
      l = [],
      s = {
        subscribe: function (n) {
          e.push(n);
        },
        subscribeStart: function (t) {
          l.push(t);
        },
        unsubscribe: function (n) {
          e = e.filter(function (e) {
            return e !== n;
          });
        },
        unsubscribeStart: function (t) {
          l = l.filter(function (e) {
            return e !== t;
          });
        },
        emit: function (n) {
          e.forEach(function (e) {
            return e(n);
          });
        },
        emitStart: function (t) {
          l.forEach(function (e) {
            return e(t);
          });
        },
      };
    i.default = s;
  },
  66,
);
