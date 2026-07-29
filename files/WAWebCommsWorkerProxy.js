__d(
  "WAWebCommsWorkerProxy",
  ["Promise", "WAComms", "WAWap", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return (e || (e = n("Promise"))).resolve(t);
    }
    var u = (function () {
        function e(e) {
          var t = this;
          ((this.socketId = o("WAComms").DEFAULT_SOCKET_ID),
            (this.$2 = !1),
            (this.$3 = 1),
            (this.softCloseSocket = function () {
              t.$1.fireAndForget("comms", "softCloseSocket");
            }),
            (this.handleStanza = function () {
              throw r("err")(
                "WAWebCommsWorkerProxy.handleStanza is not supported",
              );
            }),
            (this.setOnBeforeCastStanzaForE2E = function () {
              throw r("err")(
                "WAWebCommsWorkerProxy.setOnBeforeCastStanzaForE2E is not supported",
              );
            }),
            (this.getAndIncrementNextOrderedId = function () {
              throw r("err")(
                "WAWebCommsWorkerProxy.getAndIncrementNextOrderedId is not supported",
              );
            }),
            (this.socketLoopIteration = function () {
              return t.$1.sendAndReceive(
                "comms",
                "socketLoopIteration",
                void 0,
              );
            }),
            (this.waitForNetworkHealth = function () {
              return t.$1.sendAndReceive(
                "comms",
                "waitForNetworkHealth",
                void 0,
              );
            }),
            (this.stopComms = function () {
              t.$1.fireAndForget("comms", "stopComms", void 0);
            }),
            (this.closeSocket = function () {
              t.$1.fireAndForget("comms", "closeSocket", void 0);
            }),
            (this.closeSocketInDebugMode = function () {
              t.$1.fireAndForget("comms", "closeSocketInDebugMode", void 0);
            }),
            (this.closeSocketAndPreventRetry = function () {
              t.$1.fireAndForget("comms", "closeSocketAndPreventRetry", void 0);
            }),
            (this.closeSocketAndPause = function () {
              t.$1.fireAndForget("comms", "closeSocketAndPause");
            }),
            (this.closeSocketAndResume = function () {
              t.$1.fireAndForget("comms", "closeSocketAndResume");
            }),
            (this.openSocketLoop = function () {
              t.$1.fireAndForget("comms", "openSocketLoop");
            }),
            (this.maybeResetSocketLoop = function () {
              t.$1.fireAndForget("comms", "maybeResetSocketLoop");
            }),
            (this.forceResetSocketLoop = function () {
              t.$1.fireAndForget("comms", "forceResetSocketLoop");
            }),
            (this.forceAbortSocketConnection = function () {
              t.$1.fireAndForget("comms", "forceAbortSocketConnection", void 0);
            }),
            (this.onStreamErrorReceived = function () {
              t.$1.fireAndForget("comms", "onStreamErrorReceived");
            }),
            (this.cancelDeadSocketTimer = function () {
              t.$1.fireAndForget("comms", "cancelDeadSocketTimer");
            }),
            (this.getMsSinceLastInboundRx = function () {
              return -1;
            }),
            (this.$1 = e));
        }
        var t = e.prototype;
        return (
          (t.updateSocketState = function (t, n) {
            ((this.$2 = t),
              n != null && (this.socketId = o("WAComms").toSocketId(n)));
          }),
          (t.isSocketConnected = function () {
            return this.$2;
          }),
          (t.sendIq = function (t, n, r, a, i) {
            var e = this;
            (r === void 0 && (r = 0), i === void 0 && (i = "iq"));
            var l = this.$3++;
            a != null &&
              a.addEventListener("abort", function () {
                e.$1.fireAndForget("comms", "abortSendIq", { abortToken: l });
              });
            var u = o("WAWap").encodeStanza(t);
            return this.$1
              .sendAndReceive(
                "comms",
                "sendIq",
                {
                  iq: u,
                  attachToSocket: n,
                  timeoutSeconds: r,
                  type: i,
                  abortToken: l,
                },
                void 0,
                void 0,
                void 0,
                [u.buffer],
              )
              .then(function (e) {
                return o("WAWap").decodeStanza(e, s);
              });
          }),
          (t.callStanza = function (t, n) {
            return this.$1.sendAndReceive("comms", "callStanza", {
              stanza: o("WAWap").encodeStanza(t),
              flags: n,
            });
          }),
          (t.castStanza = function (t, n) {
            return this.$1.sendAndReceive("comms", "castStanza", {
              stanza: o("WAWap").encodeStanza(t),
              flags: n,
            });
          }),
          (t.sendPing = function () {
            return this.$1.sendAndReceive("comms", "sendPing");
          }),
          (t.startHandlingRequests = function () {
            return this.$1.sendAndReceive(
              "comms",
              "startHandlingRequests",
              void 0,
            );
          }),
          (t.setSocket = function (t) {
            throw r("err")("WAWebCommsWorkerProxy.setSocket is not supported");
          }),
          (t.addAckHandler = function (t) {
            throw r("err")(
              "WAWebCommsWorkerProxy.addAckHandler is not supported",
            );
          }),
          (t.removeAckHandler = function (t) {
            throw r("err")(
              "WAWebCommsWorkerProxy.removeAckHandler is not supported",
            );
          }),
          e
        );
      })(),
      c = null,
      d = null;
    function m(e) {
      if (d == null)
        throw r("err")("[WAWebCommsWorkerProxy] comms startup args are null");
      e.fireAndForget("comms", "createComms", d);
      var t = new u(e);
      return ((c = t), t);
    }
    function p(e, t) {
      var n;
      (n = c) == null || n.updateSocketState(e, t);
    }
    function _(e) {
      d = e;
    }
    ((l.CommsWorkerProxy = u),
      (l.createCommsWorkerProxy = m),
      (l.updateCommsProxySocketState = p),
      (l.setStartCommsArgs = _));
  },
  98,
);
