__d(
  "MAWDropCutoverThreadsTable",
  ["Promise", "ReQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("ReQL").fromTableAscending(t.cutover_threads);
      return o("ReQL")
        .toArrayAsync(r)
        .then(function (r) {
          return r.reduce(
            function (e, n) {
              return e.then(function () {
                return t.cutover_threads.delete(n.openThreadId);
              });
            },
            (e || (e = n("Promise"))).resolve(),
          );
        });
    }
    l.call = s;
  },
  98,
);
