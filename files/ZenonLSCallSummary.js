__d(
  "ZenonLSCallSummary",
  [
    "ZenonCallFalcoEventUtils",
    "ZenonCallInfoManager",
    "ZenonDeviceInfoHelper",
    "ZenonDismissReason",
    "ZenonLoggingEventTypes",
    "ZenonPeerID",
    "asyncToGeneratorRuntime",
    "gkx",
    "performanceNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deviceID"],
      s,
      u = (function (t) {
        function a(e) {
          var n, a, i;
          return (
            (i = t.call(this, e) || this),
            (i.$ZenonLSCallSummary$p_1 = {
              call_answered_time: "-1",
              call_connected_time: "-1",
              call_created_time: "-1",
              call_ended_time: "-1",
              last_updated_time: "-1",
            }),
            (i.$ZenonLSCallSummary$p_2 = !1),
            (i.$ZenonLSCallSummary$p_3 = null),
            (i.$ZenonLSCallSummary$p_4 = !1),
            (i.$ZenonLSCallSummary$p_5 = !1),
            (i.$ZenonLSCallSummary$p_8 = null),
            (i.$ZenonLSCallSummary$p_10 = null),
            (i.$ZenonLSCallSummary$p_11 = null),
            (i.$ZenonLSCallSummary$p_12 = null),
            (i.$ZenonLSCallSummary$p_13 = null),
            (i.$ZenonLSCallSummary$p_17 = null),
            (i.$ZenonLSCallSummary$p_21 = !1),
            (i.$ZenonLSCallSummary$p_14 = e.callTrigger),
            (i.$ZenonLSCallSummary$p_9 = e.isVideo),
            (i.$ZenonLSCallSummary$p_6 = 0),
            (i.$ZenonLSCallSummary$p_16 =
              (n = e.joinMode) != null
                ? n
                : o("ZenonLoggingEventTypes").ZenonJoinMode.Primary),
            (i.$ZenonLSCallSummary$p_17 =
              (a = e.rtcActorID) != null ? a : null),
            (i.$ZenonLSCallSummary$p_7 = (s || (s = r("performanceNow")))()),
            i.setTimestamp("call_created_time"),
            i.updateLastUpdatedTime(),
            r("promiseDone")(i.updateBatteryStart()),
            i
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.setTimestamp = function (t) {
            this.$ZenonLSCallSummary$p_1[t] === "-1" &&
              (this.$ZenonLSCallSummary$p_1[t] = String(
                this.$ZenonLSCallSummary$p_22(),
              ));
          }),
          (i.getTimestamps = function () {
            return this.$ZenonLSCallSummary$p_1;
          }),
          (i.getExtraInfo = function () {
            var e = {};
            return (
              this.$ZenonLSCallSummary$p_11 != null &&
                !isNaN(this.$ZenonLSCallSummary$p_11) &&
                (e.battery_end_level = String(this.$ZenonLSCallSummary$p_11)),
              this.$ZenonLSCallSummary$p_10 != null &&
                !isNaN(this.$ZenonLSCallSummary$p_10) &&
                (e.battery_start_level = String(this.$ZenonLSCallSummary$p_10)),
              this.$ZenonLSCallSummary$p_12 != null &&
                (e.was_device_charged = this.$ZenonLSCallSummary$p_12),
              this.$ZenonLSCallSummary$p_13 != null &&
                (e.max_concurrent_connected_participant =
                  this.$ZenonLSCallSummary$p_13),
              e
            );
          }),
          (i.getVideoStats = function () {
            var e = {};
            if (this.$ZenonLSCallSummary$p_8 != null) {
              var t;
              if (
                (isNaN(this.$ZenonLSCallSummary$p_8.ld) ||
                  (e.local_video_duration = String(
                    this.$ZenonLSCallSummary$p_8.ld,
                  )),
                !isNaN(
                  (t = this.$ZenonLSCallSummary$p_8) == null ? void 0 : t.rd,
                ))
              ) {
                var n, r;
                e.remote_video_duration = String(
                  (n =
                    (r = this.$ZenonLSCallSummary$p_8) == null
                      ? void 0
                      : r.rd) != null
                    ? n
                    : 0,
                );
              }
            }
            return e;
          }),
          (i.getEndCallStats = function () {
            var e = {};
            if (
              (this.$ZenonLSCallSummary$p_18 != null &&
                (e.end_call_reason = o(
                  "ZenonDismissReason",
                ).dismissToEndCallReason(this.$ZenonLSCallSummary$p_18)),
              this.$ZenonLSCallSummary$p_19 != null &&
                (e.end_call_subreason = this.$ZenonLSCallSummary$p_19),
              this.$ZenonLSCallSummary$p_21 != null &&
                (e.remote_ended = this.$ZenonLSCallSummary$p_21),
              this.$ZenonLSCallSummary$p_3 != null)
            ) {
              var t;
              e.is_connected_end =
                r("gkx")("15639") && !this.$ZenonLSCallSummary$p_5
                  ? !1
                  : (t = this.$ZenonLSCallSummary$p_23()) != null
                    ? t
                    : !1;
            }
            return e;
          }),
          (i.getLoggingArgs = function () {
            var e,
              t = this.getCallInfo(),
              n = t.deviceID,
              r = t.peerID,
              a = t.serverInfoData,
              i = t.signalingID;
            return {
              call_id: i,
              conf_name: (e = this.$ZenonLSCallSummary$p_15) != null ? e : "",
              peer_id: o("ZenonPeerID").convertPeerIDForLogging(r),
              serv_info: a != null ? a : "",
              web_device_id: n,
            };
          }),
          (i.getSummaryLoggingInfo = function () {
            var e,
              t = this.getCallInfo(),
              n = t.deviceID,
              r = t.isCaller,
              a = t.localCallID,
              i = t.peerID,
              l = t.serverInfoData,
              s = t.signalingID;
            return babelHelpers.extends(
              {},
              this.getTimestamps(),
              this.getExtraInfo(),
              this.getVideoStats(),
              this.getEndCallStats(),
              l != null && { shared_call_id: l },
              {
                call_trigger:
                  (e = this.$ZenonLSCallSummary$p_14) != null ? e : "",
                client_session_id: s == null ? null : String(s),
                invite_requested_video: this.$ZenonLSCallSummary$p_9,
                is_caller: r,
                join_mode: String(this.$ZenonLSCallSummary$p_16),
                local_call_id: a,
                peer_id: o("ZenonPeerID").convertPeerIDForLogging(i),
                rtc_actor_id: this.$ZenonLSCallSummary$p_17,
                steady_time: o(
                  "ZenonCallFalcoEventUtils",
                ).performanceNowParsed(),
                system_time: String(Date.now()),
                web_device_id: n,
              },
            );
          }),
          (i.onCallEscalated = function () {
            this.updateLastUpdatedTime();
          }),
          (i.onCallAccepted = function (t) {
            ((this.$ZenonLSCallSummary$p_14 = t),
              this.setTimestamp("call_answered_time"),
              this.updateLastUpdatedTime());
          }),
          (i.onCallConnected = function () {
            ((this.$ZenonLSCallSummary$p_4 = !0),
              this.$ZenonLSCallSummary$p_24());
          }),
          (i.onRemoteConsentReceived = function () {
            ((this.$ZenonLSCallSummary$p_5 = !0),
              this.getCallInfo().isCaller &&
                this.setTimestamp("call_answered_time"),
              this.$ZenonLSCallSummary$p_24());
          }),
          (i.$ZenonLSCallSummary$p_24 = function () {
            this.$ZenonLSCallSummary$p_4 &&
              ((r("gkx")("15639") && !this.$ZenonLSCallSummary$p_5) ||
                (this.setTimestamp("call_connected_time"),
                this.updateLastUpdatedTime()));
          }),
          (i.setMediaStats = function (t) {
            ((this.$ZenonLSCallSummary$p_8 = t.video),
              this.updateLastUpdatedTime());
          }),
          (i.setMaxConnectedParticipants = function (t) {
            ((this.$ZenonLSCallSummary$p_13 = o(
              "ZenonCallFalcoEventUtils",
            ).nonNullIntNumber(t)),
              this.updateLastUpdatedTime());
          }),
          (i.setRtcActorID = function (t) {
            this.$ZenonLSCallSummary$p_17 = t;
          }),
          (i.unsetEndCallFields = function () {
            this.$ZenonLSCallSummary$p_20 === !0 &&
              ((this.$ZenonLSCallSummary$p_18 = null),
              (this.$ZenonLSCallSummary$p_19 = null),
              (this.$ZenonLSCallSummary$p_21 = null),
              (this.$ZenonLSCallSummary$p_3 = null),
              (this.$ZenonLSCallSummary$p_1.call_ended_time = "-1"),
              (this.$ZenonLSCallSummary$p_7 = 0),
              (this.$ZenonLSCallSummary$p_20 = null));
          }),
          (i.onCallEnded = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                ((this.$ZenonLSCallSummary$p_18 = e),
                  (this.$ZenonLSCallSummary$p_19 = r),
                  (this.$ZenonLSCallSummary$p_20 = n),
                  (this.$ZenonLSCallSummary$p_21 = t),
                  this.$ZenonLSCallSummary$p_3 == null &&
                    (this.$ZenonLSCallSummary$p_3 =
                      this.$ZenonLSCallSummary$p_25()),
                  yield this.updateBatteryEnd(),
                  this.setTimestamp("call_ended_time"),
                  this.updateLastUpdatedTime());
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.onPCStateChange = function (t) {
            ((this.$ZenonLSCallSummary$p_2 = t), this.updateLastUpdatedTime());
          }),
          (i.updateBatteryStart = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield r("ZenonDeviceInfoHelper").getBatteryStats(),
                t = e.level,
                n = e.placeholder;
              n !== !0 && (this.$ZenonLSCallSummary$p_10 = parseInt(t, 10));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.updateBatteryEnd = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield r("ZenonDeviceInfoHelper").getBatteryStats(),
                t = e.level,
                n = e.placeholder,
                o = e.wasCharged;
              n !== !0 &&
                ((this.$ZenonLSCallSummary$p_11 = parseInt(t, 10)),
                this.setDeviceCharged(o));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.setDeviceCharged = function (t) {
            this.$ZenonLSCallSummary$p_12 !== !0 &&
              (this.$ZenonLSCallSummary$p_12 = t);
          }),
          (i.setConferenceName = function (t) {
            ((this.$ZenonLSCallSummary$p_15 = t), this.updateLastUpdatedTime());
          }),
          (i.getDeviceCharged = function () {
            return this.$ZenonLSCallSummary$p_12;
          }),
          (a.fromJsonString = function (n) {
            var t, r, o, i;
            try {
              i = JSON.parse(n);
            } catch (e) {
              return null;
            }
            var l = i.callInfo,
              s = l.deviceID,
              u = babelHelpers.objectWithoutPropertiesLoose(l, e),
              c = new a(u);
            return (
              c.setDeviceID(s),
              (c.$ZenonLSCallSummary$p_1 = i.timestamps),
              (c.$ZenonLSCallSummary$p_2 = i.pcIsConnected),
              (c.$ZenonLSCallSummary$p_3 = i.endIsConnected),
              (c.$ZenonLSCallSummary$p_4 =
                (t = i.callConnected) != null ? t : !1),
              (c.$ZenonLSCallSummary$p_5 =
                (r = i.remoteConsentReceived) != null ? r : !1),
              (c.$ZenonLSCallSummary$p_18 = i.endCallReason),
              (c.$ZenonLSCallSummary$p_19 = i.endCallSubreason),
              (c.$ZenonLSCallSummary$p_21 = i.isRemoteEnded),
              (c.$ZenonLSCallSummary$p_9 = i.isVideo),
              (c.$ZenonLSCallSummary$p_17 =
                (o = i.rtcActorID) != null ? o : null),
              (c.$ZenonLSCallSummary$p_8 = {
                ld: parseInt(i.videoStats.local_video_duration, 10),
                rd: parseInt(i.videoStats.remote_video_duration, 10),
              }),
              (c.$ZenonLSCallSummary$p_10 = parseInt(
                i.extraInfo.battery_start_level,
                10,
              )),
              (c.$ZenonLSCallSummary$p_11 = parseInt(
                i.extraInfo.battery_end_level,
                10,
              )),
              i.extraInfo.was_device_charged != null &&
                (c.$ZenonLSCallSummary$p_12 = i.extraInfo.was_device_charged),
              i.extraInfo.max_concurrent_connected_participant != null &&
                (c.$ZenonLSCallSummary$p_13 =
                  i.extraInfo.max_concurrent_connected_participant),
              i.unsetOnRetrieve != null &&
                (c.$ZenonLSCallSummary$p_20 = i.unsetOnRetrieve),
              i.accumulatedCallTime != null &&
                (c.$ZenonLSCallSummary$p_6 = i.accumulatedCallTime),
              i.conferenceName != null &&
                (c.$ZenonLSCallSummary$p_15 = i.conferenceName),
              c
            );
          }),
          (i.toJsonString = function () {
            var e = {
              accumulatedCallTime: this.$ZenonLSCallSummary$p_22(),
              callConnected: this.$ZenonLSCallSummary$p_4,
              callInfo: this.getCallInfo(),
              conferenceName: this.$ZenonLSCallSummary$p_15,
              endCallReason: this.$ZenonLSCallSummary$p_18,
              endCallSubreason: this.$ZenonLSCallSummary$p_19,
              endIsConnected: this.$ZenonLSCallSummary$p_23(),
              extraInfo: this.getExtraInfo(),
              isRemoteEnded: this.$ZenonLSCallSummary$p_21,
              isVideo: this.$ZenonLSCallSummary$p_9,
              joinMode: this.$ZenonLSCallSummary$p_16,
              pcIsConnected: this.$ZenonLSCallSummary$p_25(),
              remoteConsentReceived: this.$ZenonLSCallSummary$p_5,
              rtcActorID: this.$ZenonLSCallSummary$p_17,
              timestamps: this.getTimestamps(),
              unsetOnRetrieve: this.$ZenonLSCallSummary$p_20,
              videoStats: this.getVideoStats(),
            };
            return JSON.stringify(e);
          }),
          (i.$ZenonLSCallSummary$p_22 = function () {
            var e =
              (s || (s = r("performanceNow")))() - this.$ZenonLSCallSummary$p_7;
            return Math.floor(this.$ZenonLSCallSummary$p_6 + e);
          }),
          (i.$ZenonLSCallSummary$p_23 = function () {
            return this.$ZenonLSCallSummary$p_3 == null
              ? null
              : this.$ZenonLSCallSummary$p_3 &&
                  Number(this.$ZenonLSCallSummary$p_13) > 1;
          }),
          (i.$ZenonLSCallSummary$p_25 = function () {
            return (
              this.$ZenonLSCallSummary$p_2 &&
              Number(this.$ZenonLSCallSummary$p_13) > 1
            );
          }),
          (i.updateLastUpdatedTime = function () {
            this.$ZenonLSCallSummary$p_1.last_updated_time = String(
              this.$ZenonLSCallSummary$p_22(),
            );
          }),
          (i.save = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.storeCallSummary(n, r, this);
          }),
          (i.remove = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.removeLocalStorageObjects([{ peerID: n, signalingID: r }]);
          }),
          a
        );
      })(r("ZenonCallInfoManager"));
    l.default = u;
  },
  98,
);
