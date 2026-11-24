__d(
  "WAWebInboundMsgPersistedQueueAdapter",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebBoolFunc",
    "WAWebMessageCacheOneQueueFlushable",
    "WAWebNoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 0.01,
      c = {
        flushable: o("WAWebMessageCacheOneQueueFlushable")
          .messageCacheOneQueueFlushable,
        intake: null,
        sendReceipts: function () {
          return (s || (s = n("Promise"))).resolve();
        },
        waitForDrainIdle: function () {
          return (s || (s = n("Promise"))).resolve();
        },
      },
      d = c,
      m = null,
      p = !1,
      _ = r("WAWebNoop"),
      f = !1,
      g = o("WAWebBoolFunc").returnFalse,
      h = !1;
    function y(e) {
      d = e;
    }
    function C() {
      ((d = c),
        (m = null),
        (p = !1),
        (_ = r("WAWebNoop")),
        (f = !1),
        (g = o("WAWebBoolFunc").returnFalse),
        (h = !1));
    }
    function b(e) {
      g = e;
    }
    function v() {
      return g();
    }
    function S() {
      return d !== c;
    }
    function R() {
      m != null || (m = new (o("WAResolvable").Resolvable)());
    }
    function L(e) {
      var t;
      ((e == null ? void 0 : e.timedOut) === !0 && (p = !0),
        (t = m) == null || t.resolve());
    }
    function E() {
      return p;
    }
    function k() {
      return m != null && !m.resolveWasCalled();
    }
    function I() {
      var e, t;
      return (e = (t = m) == null ? void 0 : t.promise) != null
        ? e
        : (s || (s = n("Promise"))).resolve();
    }
    function T() {
      h = !0;
    }
    function D() {
      return h;
    }
    function x(e) {
      ((_ = e), f && e());
    }
    function $() {
      f || ((f = !0), L({ timedOut: !0 }), _());
    }
    function P() {
      return f;
    }
    var N = {
      flush: function (t, n, r, o) {
        return d.flushable.flush(t, n, r, o);
      },
    };
    function M() {
      return d.intake;
    }
    function w() {
      return d.sendReceipts();
    }
    function A() {
      var e =
        m == null
          ? d.waitForDrainIdle()
          : m.promise.then(function () {
              return d.waitForDrainIdle();
            });
      return e.catch(B);
    }
    function F(e) {
      var t;
      return (t =
        d.waitForStartupChatsDrained == null
          ? void 0
          : d.waitForStartupChatsDrained(e)) != null
        ? t
        : (s || (s = n("Promise"))).resolve();
    }
    function O() {
      var e;
      return (e =
        d.pauseDrainUntilMainStreamReady == null
          ? void 0
          : d.pauseDrainUntilMainStreamReady()) != null
        ? e
        : (s || (s = n("Promise"))).resolve();
    }
    function B(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[inbound-msg-queue] the wait for the drain failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .tags("messaging")
        .sendLogs("inbound-msg-drain-wait-failed", { sampling: u });
    }
    ((l.setInboundMsgPersistedQueueHooks = y),
      (l.resetInboundMsgPersistedQueueHooks = C),
      (l.setInboundMsgSignalStateHold = b),
      (l.shouldHoldInboundMsgSignalState = v),
      (l.isInboundMsgPersistedQueueRegistered = S),
      (l.armInboundMsgQueueRegistration = R),
      (l.settleInboundMsgQueueRegistration = L),
      (l.hasInboundMsgQueueRegistrationTimedOut = E),
      (l.isInboundMsgQueueRegistrationPending = k),
      (l.whenInboundMsgQueueRegistered = I),
      (l.latchInboundMsgOrder = T),
      (l.isInboundMsgOrderLatched = D),
      (l.setInboundMsgQueueStop = x),
      (l.stopInboundMsgQueue = $),
      (l.isInboundMsgQueueStopped = P),
      (l.inboundMsgPersistedQueueAdapterFlushable = N),
      (l.getInboundMsgIntake = M),
      (l.sendInboundMsgPersistedQueueReceipts = w),
      (l.waitForInboundMsgDrainIdle = A),
      (l.waitForInboundMsgStartupChatsDrained = F),
      (l.pauseInboundMsgDrainUntilMainStreamReady = O));
  },
  98,
);
