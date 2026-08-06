__d(
  "WAWebCommsWorkerProxy",
  ["Promise", "WAComms", "WAWap", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
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
        var a = t.prototype;
        return (
          (a.updateSocketState = function (t, n) {
            ((this.$2 = t),
              n != null && (this.socketId = o("WAComms").toSocketId(n)));
          }),
          (a.isSocketConnected = function () {
            return this.$2;
          }),
          (a.sendIq = function (r, a, i, l, s) {
            var t = this;
            (i === void 0 && (i = 0), s === void 0 && (s = "iq"));
            var u = this.$3++;
            l != null &&
              l.addEventListener("abort", function () {
                t.$1.fireAndForget("comms", "abortSendIq", { abortToken: u });
              });
            var c = o("WAWap").encodeStanza(r);
            return this.$1
              .sendAndReceive(
                "comms",
                "sendIq",
                {
                  iq: c,
                  attachToSocket: a,
                  timeoutSeconds: i,
                  type: s,
                  abortToken: u,
                },
                void 0,
                void 0,
                void 0,
                [c.buffer],
              )
              .then(function (t) {
                return o("WAWap").decodeStanza(t, function (t) {
                  return (e || (e = n("Promise"))).resolve(t);
                });
              });
          }),
          (a.callStanza = function (t, n) {
            return this.$1.sendAndReceive("comms", "callStanza", {
              stanza: o("WAWap").encodeStanza(t),
              flags: n,
            });
          }),
          (a.castStanza = function (t, n) {
            return this.$1.sendAndReceive("comms", "castStanza", {
              stanza: o("WAWap").encodeStanza(t),
              flags: n,
            });
          }),
          (a.sendPing = function () {
            return this.$1.sendAndReceive("comms", "sendPing");
          }),
          (a.startHandlingRequests = function () {
            return this.$1.sendAndReceive(
              "comms",
              "startHandlingRequests",
              void 0,
            );
          }),
          (a.setSocket = function (t) {
            throw r("err")("WAWebCommsWorkerProxy.setSocket is not supported");
          }),
          (a.addAckHandler = function (t) {
            throw r("err")(
              "WAWebCommsWorkerProxy.addAckHandler is not supported",
            );
          }),
          (a.removeAckHandler = function (t) {
            throw r("err")(
              "WAWebCommsWorkerProxy.removeAckHandler is not supported",
            );
          }),
          t
        );
      })(),
      u = null,
      c = null;
    function d(e) {
      if (c == null)
        throw r("err")("[WAWebCommsWorkerProxy] comms startup args are null");
      e.fireAndForget("comms", "createComms", c);
      var t = new s(e);
      return ((u = t), t);
    }
    function m(e, t) {
      var n;
      (n = u) == null || n.updateSocketState(e, t);
    }
    function p(e) {
      c = e;
    }
    ((l.CommsWorkerProxy = s),
      (l.createCommsWorkerProxy = d),
      (l.updateCommsProxySocketState = m),
      (l.setStartCommsArgs = p));
  },
  98,
);
