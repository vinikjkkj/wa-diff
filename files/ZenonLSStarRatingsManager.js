__d(
  "ZenonLSStarRatingsManager",
  [
    "LsRtcEndCallSurveyFalcoEvent",
    "LsRtcStarRatingFalcoEvent",
    "ZenonCallInfoManager",
    "ZenonPeerID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deviceID"],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.setRating = function (t, n) {
            var e = this.getCallInfo(),
              a = e.deviceID,
              i = e.localCallID,
              l = e.peerID,
              s = e.serverInfoData,
              u = {
                local_call_id: i,
                peer_id: o("ZenonPeerID").convertPeerIDForLogging(l),
                shared_call_id: s,
                web_device_id: a,
              };
            r("LsRtcStarRatingFalcoEvent").logImmediately(function () {
              return babelHelpers.extends(
                { rating_style: n ? "1" : null, star_rating: t.toString() },
                u,
              );
            });
          }),
          (a.setSurvey = function (t, n, a) {
            var e, i;
            (n === void 0 && (n = null), a === void 0 && (a = null));
            var l = this.getCallInfo(),
              s = l.deviceID,
              u = l.localCallID,
              c = l.peerID,
              d = l.serverInfoData,
              m = {
                local_call_id: u,
                peer_id: o("ZenonPeerID").convertPeerIDForLogging(c),
                shared_call_id: d,
                web_device_id: s,
              },
              p = Array.isArray(n) ? n : n != null ? [n] : [],
              _ = babelHelpers.extends(
                {
                  rtc_end_call_survey_issue:
                    (e = (i = a) == null ? void 0 : i.toLocaleLowerCase()) !=
                    null
                      ? e
                      : "",
                  rtc_end_call_survey_selected_options: p,
                },
                m,
                t == null ? {} : { rtc_end_call_survey_freeform: t },
              );
            r("LsRtcEndCallSurveyFalcoEvent").log(function () {
              return _;
            });
          }),
          (a.save = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.storeStarRatings(n, r, this);
          }),
          (a.delete = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.removeLocalStorageObjects([{ peerID: n, signalingID: r }]);
          }),
          (a.toJsonString = function () {
            var e = { callInfo: this.getCallInfo() };
            return JSON.stringify(e);
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
              i = babelHelpers.objectWithoutPropertiesLoose(o, e);
            return new n(i);
          }),
          n
        );
      })(r("ZenonCallInfoManager"));
    l.default = s;
  },
  98,
);
