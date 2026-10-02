__d(
  "WACreateHandleSuccess",
  ["Promise", "WAResultOrError", "WASmaxLoginSuccessRPC", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a = (r = t.login) == null ? void 0 : r.handleLoginSuccess;
      return function (r) {
        if (a != null) {
          var t = o("WASmaxLoginSuccessRPC").receiveSuccessRPC(r),
            i = t.parsedRequest,
            l = i.abprops,
            s = i.companionEncStatic,
            u = i.creation,
            c = i.displayNameMixin,
            d = i.lid,
            m = i.location,
            p = i.shardCount,
            _ = i.t;
          return a({
            timestamp: o("WATimeUtils").castToUnixTime(_),
            abprops: l,
            location: m,
            shardCount: p,
            creation: u,
            companionEncStatic: s,
            lid: d,
            displayName: c == null ? void 0 : c.displayName,
          }).then(o("WAResultOrError").makeResult);
        }
        return (e || (e = n("Promise"))).resolve(
          o("WAResultOrError").makeResult("NO_ACK"),
        );
      };
    }
    l.createHandleSuccess = s;
  },
  98,
);
