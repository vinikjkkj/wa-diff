__d(
  "ZenonGenAIConnectStateManager",
  [
    "CompactSerializer",
    "Promise",
    "RequestStreamBodyUtils",
    "RpGenaiSctpCaptionsGenAIBotStateSerializers",
    "ZenonSCTPConstants",
    "ZenonTransportType",
    "performanceNow",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 50,
      c = 1e4,
      d = (function () {
        function t() {
          this.$1 = null;
        }
        t.getInstance = function () {
          return (this.$2 == null && (this.$2 = new t()), this.$2);
        };
        var a = t.prototype;
        return (
          (a.startSending = function (t) {
            var e = this;
            this.$1 ||
              ((this.$1 = window.setInterval(function () {
                e.$3(t);
              }, u)),
              window.setTimeout(function () {
                e.$1 && (window.clearInterval(e.$1), (e.$1 = null));
              }, c));
          }),
          (a.stopSending = function () {
            this.$1 && (window.clearInterval(this.$1), (this.$1 = null));
          }),
          (a.$3 = function (a) {
            var t = r("uuidv4")(),
              i = {
                Uuid: t,
                msgSentTimestamp: Math.round(
                  (s || (s = r("performanceNow")))(),
                ).toString(),
                useCase: null,
              },
              l = o("CompactSerializer").serializeNoThrow(
                i,
                o("RpGenaiSctpCaptionsGenAIBotStateSerializers")
                  .serializeGenAiConnectState,
              );
            return l == null
              ? (e || (e = n("Promise"))).resolve()
              : a.sendGenericDataMessage(
                  o("ZenonSCTPConstants").GENAI_CONNECT_STATE_TOPIC,
                  o("RequestStreamBodyUtils").uint8ArrayToString(l),
                  { recipientIDs: [] },
                  o("ZenonTransportType").ZenonTransportType.SCTP,
                );
          }),
          t
        );
      })();
    d.$2 = null;
    var m = d.getInstance();
    l.default = m;
  },
  98,
);
