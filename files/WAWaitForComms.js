__d(
  "WAWaitForComms",
  ["WACommsConnectionState", "WAResolvable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAResolvable").Resolvable)();
    function s() {
      return e.promise;
    }
    function u() {
      (o("WACommsConnectionState").WACommsConnectionState.set(!1),
        e.isSettled && (e = new (o("WAResolvable").Resolvable)()));
    }
    function c() {
      (o("WACommsConnectionState").WACommsConnectionState.set(!0), e.resolve());
    }
    function d() {
      return !e.resolveWasCalled();
    }
    function m(t) {
      return e.reject(t);
    }
    ((l.waitForComms = s),
      (l.commsConnectionLost = u),
      (l.unblockComms = c),
      (l.isStillWaitingForComms = d),
      (l.failComms = m));
  },
  98,
);
