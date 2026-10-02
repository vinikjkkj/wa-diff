__d(
  "WACreateHandleFailure",
  ["Promise", "WAResultOrError", "WASmaxLoginFailureRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a = (r = t.login) == null ? void 0 : r.handleLoginFailure;
      return function (r) {
        if (a != null) {
          var t = o("WASmaxLoginFailureRPC").receiveFailureRPC(r),
            i = t.parsedRequest;
          return a({
            reason: i.reason,
            location: i.location,
            expire: i.expire,
          }).then(o("WAResultOrError").makeResult);
        }
        return (e || (e = n("Promise"))).resolve(
          o("WAResultOrError").makeResult("NO_ACK"),
        );
      };
    }
    l.createHandleFailure = s;
  },
  98,
);
