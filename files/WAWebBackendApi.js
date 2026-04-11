__d(
  "WAWebBackendApi",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(e, t, n) {
      if (!s) throw r("err")("fireAndForget called before setApi!");
      s.fireAndForget(e, t, n);
    }
    function c(t, o, a) {
      return s
        ? s.sendAndReceive(t, o, a)
        : (e || (e = n("Promise"))).reject(
            r("err")("sendAndReceive called before setApi!"),
          );
    }
    function d(e) {
      s = e;
    }
    function m(e, t) {
      u("event", e, t);
    }
    function p(e, t) {
      return c("event", e, t);
    }
    ((l.fireAndForgetInternalDoNotUse = u),
      (l.sendAndReceiveInternalDoNotUse = c),
      (l.setApi = d),
      (l.frontendFireAndForget = m),
      (l.frontendSendAndReceive = p));
  },
  98,
);
