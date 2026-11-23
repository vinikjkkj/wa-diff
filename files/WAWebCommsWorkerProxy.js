__d(
  "WAWebCommsWorkerProxy",
  ["WAComms", "WAErrors", "WALogger", "WAWap", "WAWebCommsWorkerReady", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function e(e) {
          var t = this;
          ((this.socketId = o("WAComms").DEFAULT_SOCKET_ID),
            (this.$2 = !1),
            (this.$3 = 1),
            (this.$4 = !1),
            (this.trySoftCloseSocket = async function (e) {
              return t.$1.sendAndReceive("comms", "trySoftCloseSocket", {
                reason: e,
              });
            }),
            (this.handleStanza = function () {
              throw r("err")(
                "WAWebCommsWorkerProxy.handleStanza is not supported",
              );
            }),
            (this.setOnBeforeCastStanza = function () {
              throw r("err")(
                "WAWebCommsWorkerProxy.setOnBeforeCastStanza is not supported",
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
            (this.stopComms = function (e) {
              t.$1.fireAndForget("comms", "stopComms", { reason: e });
            }),
            (this.closeSocket = function (e) {
              t.$1.fireAndForget("comms", "closeSocket", { reason: e });
            }),
            (this.closeSocketInDebugMode = function () {
              t.$1.fireAndForget("comms", "closeSocketInDebugMode", void 0);
            }),
            (this.closeSocketAndPreventRetry = function (e) {
              t.$1.fireAndForget("comms", "closeSocketAndPreventRetry", {
                reason: e,
              });
            }),
            (this.closeSocketAndPause = function (e) {
              t.$1.fireAndForget("comms", "closeSocketAndPause", { reason: e });
            }),
            (this.closeSocketAndResume = function (e) {
              t.$1.fireAndForget("comms", "closeSocketAndResume", {
                reason: e,
              });
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
          (t.rebuildInRestartedWorker = function (t) {
            ((this.$2 = !1),
              (this.socketId = o("WAComms").DEFAULT_SOCKET_ID),
              this.$1.fireAndForget("comms", "createComms", t),
              this.$4 && this.startHandlingRequests(),
              this.$1.fireAndForget("comms", "openSocketLoop"),
              o("WAWebCommsWorkerReady").setCommsWorkerReady(!0));
          }),
          (t.sendIq = async function (t) {
            var e = this,
              n = t.attachToSocket,
              r = t.iq,
              a = t.signal,
              i = t.timeoutSeconds,
              l = i === void 0 ? 0 : i,
              s = t.type,
              u = s === void 0 ? "iq" : s;
            if (
              (await o("WAWebCommsWorkerReady").waitForCommsWorker(),
              (a == null ? void 0 : a.aborted) === !0)
            )
              throw new (o("WAErrors").Disconnected)(
                "aborted while waiting for the backend worker",
              );
            var c = this.$3++;
            a != null &&
              a.addEventListener("abort", function () {
                e.$1.fireAndForget("comms", "abortSendIq", { abortToken: c });
              });
            var d = o("WAWap").encodeStanza(r),
              m = await this.$1.sendAndReceive(
                "comms",
                "sendIq",
                {
                  iq: d,
                  attachToSocket: n,
                  timeoutSeconds: l,
                  type: u,
                  abortToken: c,
                },
                void 0,
                void 0,
                void 0,
                [d.buffer],
              );
            return o("WAWap").decodeStanza(m, function (e) {
              return Promise.resolve(e);
            });
          }),
          (t.callStanza = async function (t, n) {
            await o("WAWebCommsWorkerReady").waitForCommsWorker();
            var e = o("WAWap").encodeStanza(t);
            return this.$1.sendAndReceive(
              "comms",
              "callStanza",
              { stanza: e, flags: n },
              !0,
              void 0,
              void 0,
              [e.buffer],
            );
          }),
          (t.castStanza = async function (t, n) {
            await o("WAWebCommsWorkerReady").waitForCommsWorker();
            var e = o("WAWap").encodeStanza(t);
            return this.$1.sendAndReceive(
              "comms",
              "castStanza",
              { stanza: e, flags: n },
              !0,
              void 0,
              void 0,
              [e.buffer],
            );
          }),
          (t.sendPing = function () {
            return this.$1.sendAndReceive("comms", "sendPing");
          }),
          (t.startHandlingRequests = function () {
            return (
              (this.$4 = !0),
              this.$1.sendAndReceive("comms", "startHandlingRequests", void 0)
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
      u = null,
      c = null;
    function d(e) {
      if (c == null)
        throw r("err")("[WAWebCommsWorkerProxy] comms startup args are null");
      e.fireAndForget("comms", "createComms", c);
      var t = new s(e);
      return ((u = t), o("WAWebCommsWorkerReady").setCommsWorkerReady(!0), t);
    }
    function m() {
      var t = u;
      t == null ||
        c == null ||
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[comms] rebuilding comms in restarted backend worker",
            ])),
        ),
        t.rebuildInRestartedWorker(c));
    }
    function p(e, t) {
      var n;
      (n = u) == null || n.updateSocketState(e, t);
    }
    function _(e) {
      c = e;
    }
    ((l.createCommsWorkerProxy = d),
      (l.rebuildCommsInRestartedWorker = m),
      (l.updateCommsProxySocketState = p),
      (l.setStartCommsArgs = _));
  },
  98,
);
