__d(
  "liveQueryFetchWithWWWInitialWrapper",
  ["JSResource", "RelayRuntime", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      return n.config_id != null
        ? o("RelayRuntime").Observable.create(function (o) {
            var i;
            return (
              r("promiseDone")(
                r("JSResource")("liveQueryFetchWithWWWInitial")
                  .__setRef("liveQueryFetchWithWWWInitialWrapper")
                  .load()
                  .then(function (r) {
                    var l = r(e, t, n, a);
                    i = l.subscribe(o);
                  })
                  .catch(function (e) {
                    return o.error(e);
                  }),
              ),
              function () {
                i && i.unsubscribe();
              }
            );
          })
        : a;
    }
    l.default = e;
  },
  98,
);
