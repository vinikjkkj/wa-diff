__d(
  "ZenonCallLogger",
  [
    "Promise",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonLogPromiseRejection",
    "isEmployeeTestUserZenonLogging",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        "mwMessageSent",
        "mwThriftMessageSent",
        "mwMessageRecv",
        "mwThriftMessageRecv",
        "setMediaStats",
        "updateE2EEStats",
        "updateIceInfo",
        "setRemoteSdpOffer",
      ]),
      u = new Set([
        "atLeastOneParticipantAlerted",
        "atLeastOneParticipantAnswered",
      ]),
      c = (function () {
        function t(e) {
          var t = this,
            n = e.config,
            r = e.initLoggerInfo,
            o = e.isE2eeMandated,
            a = e.processorConfigs,
            i = e.startFromNavigation;
          ((this.$4 = !0),
            (this.$6 = []),
            (this.$7 = new Set()),
            (this.$1 = r),
            (this.$2 = n),
            (this.$4 = i),
            (this.$3 = o),
            (this.$5 = {
              clientSessionID: r.signalingID,
              localCallID: r.localCallID,
              peerID: r.peerID,
              sharedCallID: r.serverInfoData,
            }),
            a.forEach(function (e) {
              t.addLogProcessor(e);
            }));
        }
        var o = t.prototype;
        return (
          (o.addLogProcessor = function (t) {
            var e = this;
            this.$6.push(
              new t.LogProcessor({
                config: this.$2,
                data: this.$1,
                isE2eeMandated: this.$3,
                isVideo: this.$1.isVideo,
                startFromNavigation: this.$4,
                updateLogIdentifiers: function (n) {
                  return e.updateLogIdentifiers(n);
                },
              }),
            );
          }),
          (o.updateLogIdentifiers = function (t) {
            ((this.$5 = babelHelpers.extends({}, this.$5, t)),
              this.log({ logIdentifiers: t, name: "updateLogIdentifiers" }));
          }),
          (o.log = function (t) {
            (u.has(t.name) && this.$7.has(t.name)) ||
              (this.$7.add(t.name),
              this.$8(t),
              r("promiseDone")(this.logToProcessors(t)));
          }),
          (o.logToProcessors = function (o) {
            return r("ZenonLogPromiseRejection")(
              (e || (e = n("Promise")))
                .all(
                  this.$6.map(function (e) {
                    return e.processEvent(o);
                  }),
                )
                .then(function () {}),
            );
          }),
          (o.$8 = function (t) {
            r("isEmployeeTestUserZenonLogging")() &&
              (s.has(t.name) ||
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint: "[ZP] ZenonCallLogger event: " + t.name,
                }));
          }),
          (o.getLogIdentifiers = function () {
            return this.$5;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
