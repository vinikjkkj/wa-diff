__d(
  "promiseLoadObjects",
  ["LoadObject", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var o = new Map();
        function a() {
          o.size === t.size && e(o);
        }
        var l = function () {
          var e = s[0],
            t = s[1];
          t.then(function (t) {
            (o.set(e, r("LoadObject").withValue(t, { creatorModuleID: i.id })),
              a());
          }).catch(function (t) {
            (o.set(e, r("LoadObject").withError(t, { creatorModuleID: i.id })),
              a());
          });
        };
        for (var s of t) l();
      });
    }
    l.default = s;
  },
  98,
);
