__d(
  "ZenonSharedWorkerPortManager",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = null,
      s = null;
    function u(t) {
      (s != null && s(t), (l = (e || (e = n("Promise"))).resolve(t)));
    }
    function c() {
      return (
        l == null &&
          (l = new (e || (e = n("Promise")))(function (e) {
            s = e;
          })),
        l
      );
    }
    ((i.setSharedWorkerPort = u), (i.getSharedWorkerPort = c));
  },
  66,
);
