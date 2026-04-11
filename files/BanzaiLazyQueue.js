__d(
  "BanzaiLazyQueue",
  ["SimpleHook"],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s = new (o("SimpleHook").SimpleHook)(),
      u = {
        onQueue: s,
        queuePost: function (n, r, o) {
          (e.push([n, r, o]), s.call(n, r, o));
        },
        flushQueue: function () {
          var t = e;
          return ((e = []), t);
        },
      };
    i.exports = u;
  },
  34,
);
