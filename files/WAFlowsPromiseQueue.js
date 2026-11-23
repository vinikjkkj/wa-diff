__d(
  "WAFlowsPromiseQueue",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l() {
      var t = (e || (e = n("Promise"))).resolve();
      return {
        add: function (o) {
          return new (e || (e = n("Promise")))(function (e, n) {
            t = t
              .then(function (e) {
                return o;
              })
              .then(e)
              .catch(n);
          });
        },
      };
    }
    i.default = l;
  },
  66,
);
