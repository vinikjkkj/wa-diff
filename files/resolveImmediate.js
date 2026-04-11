__d(
  "resolveImmediate",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = (e || (e = n("Promise"))).resolve();
    function s(e) {
      l.then(e).catch(u);
    }
    function u(e) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
    i.default = s;
  },
  66,
);
