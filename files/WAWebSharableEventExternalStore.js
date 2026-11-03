__d(
  "WAWebSharableEventExternalStore",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e,
        n = new Set();
      return {
        get: function () {
          return t;
        },
        set: function (r) {
          ((t = r),
            n.forEach(function (e) {
              return e();
            }));
        },
        subscribe: function (t) {
          return s(n, t);
        },
      };
    }
    function l(e) {
      var t = new Map(),
        n = new Set(),
        r = function () {
          return n.forEach(function (e) {
            return e();
          });
        };
      return {
        get: function (r) {
          var n;
          return (n = t.get(r)) != null ? n : e;
        },
        has: function (n) {
          return t.has(n);
        },
        set: function (n, o) {
          (t.set(n, o), r());
        },
        delete: function (n) {
          t.delete(n) && r();
        },
        subscribe: function (t) {
          return s(n, t);
        },
      };
    }
    function s(e, t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    ((i.createSharableEventStore = e), (i.createSharableEventKeyedStore = l));
  },
  66,
);
