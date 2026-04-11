__d(
  "WAPromiseManagement",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Map();
      return function (r) {
        var o = e(r),
          a = n.get(o);
        if (a) return a;
        var i;
        try {
          i = Promise.resolve(t(r));
        } catch (e) {
          i = Promise.reject(e);
        }
        var l = i.finally(function () {
          return void n.delete(o);
        });
        return (n.set(o, l), l);
      };
    }
    var l = new Set();
    function s(e) {
      (l.add(e),
        e.finally(function () {
          l.delete(e);
        }));
    }
    ((i.cacheWhilePending = e), (i.preventGarbageCollection = s));
  },
  66,
);
