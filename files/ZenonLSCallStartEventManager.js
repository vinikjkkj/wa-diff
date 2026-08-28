__d(
  "ZenonLSCallStartEventManager",
  ["ZenonCallFalcoEventUtils", "ZenonCallInfoManager", "ZenonPeerID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deviceID"],
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$ZenonLSCallStartEventManager$p_1 = {}),
            (e.$ZenonLSCallStartEventManager$p_2 = !1),
            (e.$ZenonLSCallStartEventManager$p_3 = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.updateEventTimestamp = function (t) {
            this.$ZenonLSCallStartEventManager$p_1[t] == null &&
              (this.$ZenonLSCallStartEventManager$p_1[t] = o(
                "ZenonCallFalcoEventUtils",
              ).performanceNowParsed());
          }),
          (r.receivedFromInvite = function () {
            this.$ZenonLSCallStartEventManager$p_2 = !0;
          }),
          (r.receivedFromServer = function () {
            this.$ZenonLSCallStartEventManager$p_3 = !0;
          }),
          (r.getStartEventData = function () {
            var e = this.getCallInfo(),
              t = e.signalingID,
              n = babelHelpers.extends(
                {},
                this.getTimestamps(),
                this.$ZenonLSCallStartEventManager$p_4(),
              );
            return (t !== "" && (n.local_signaling_id = t), n);
          }),
          (r.$ZenonLSCallStartEventManager$p_4 = function () {
            var e = this.getCallInfo(),
              t = e.deviceID,
              n = e.localCallID,
              r = e.peerID,
              a = e.serverInfoData,
              i = e.signalingID;
            return babelHelpers.extends(
              {
                connection_logging_id: i,
                local_call_id: n,
                peer_id: o("ZenonPeerID").convertPeerIDForLogging(r),
                protocol: "multiway",
              },
              a != null && { shared_call_id: a },
              {
                steady_time_ms: o(
                  "ZenonCallFalcoEventUtils",
                ).performanceNowParsed(),
                system_time_ms: String(Date.now()),
                web_device_id: t,
              },
            );
          }),
          (r.getTimestamps = function () {
            return this.$ZenonLSCallStartEventManager$p_1;
          }),
          (r.save = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.storeCallStartEventManager(n, r, this);
          }),
          (r.delete = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.removeLocalStorageObjects([{ peerID: n, signalingID: r }]);
          }),
          (r.toJsonString = function () {
            var e = this.getCallInfo(),
              t = e.signalingID,
              n = {
                callInfo: e,
                connectionLoggingId: t,
                receivedFromInvite: this.$ZenonLSCallStartEventManager$p_2,
                receivedFromServer: this.$ZenonLSCallStartEventManager$p_3,
                timestamps: this.getTimestamps(),
              };
            return JSON.stringify(n);
          }),
          (n.fromJsonString = function (r) {
            var t;
            try {
              t = JSON.parse(r);
            } catch (e) {
              return null;
            }
            var o = t.callInfo,
              a = o.deviceID,
              i = babelHelpers.objectWithoutPropertiesLoose(o, e),
              l = new n(i);
            return (
              (l.$ZenonLSCallStartEventManager$p_2 = t.receivedFromInvite),
              (l.$ZenonLSCallStartEventManager$p_3 = t.receivedFromServer),
              (l.$ZenonLSCallStartEventManager$p_1 = t.timestamps),
              l
            );
          }),
          n
        );
      })(r("ZenonCallInfoManager"));
    l.default = s;
  },
  98,
);
