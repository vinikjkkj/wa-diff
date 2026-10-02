__d(
  "MAWRTCCallEventUtils",
  [
    "MAWConvertExtendedContentTypeToLSXmaContentType",
    "MSGDataclassTypes.flow",
    "WAArmadilloXMA.pb",
    "WAJids",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("XmaEventsE2eeFalcoEvent").__setRef(
      "MAWRTCCallEventUtils",
    );
    function s(e) {
      return e === "video"
        ? o("MSGDataclassTypes.flow").XmsgXmaRtcCallType.Video
        : o("MSGDataclassTypes.flow").XmsgXmaRtcCallType.Audio;
    }
    function u(e) {
      return e === "ended"
        ? o("MSGDataclassTypes.flow").XmsgXmaRtcCallState.Ended
        : e === "missed"
          ? o("MSGDataclassTypes.flow").XmsgXmaRtcCallState.Missed
          : o("MSGDataclassTypes.flow").XmsgXmaRtcCallState.Started;
    }
    function c(e, t, n) {
      var r = {
          ended: n
            ? o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_GROUP_AUDIO_CALL
            : o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL,
          missed: n
            ? o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_MISSED_GROUP_AUDIO_CALL
            : o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_MISSED_AUDIO_CALL,
          started: n
            ? o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_GROUP_AUDIO_CALL
            : o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_ONGOING_AUDIO_CALL,
        },
        a = {
          ended: n
            ? o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_GROUP_VIDEO_CALL
            : o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL,
          missed: n
            ? o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_MISSED_GROUP_VIDEO_CALL
            : o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_MISSED_VIDEO_CALL,
          started: n
            ? o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_GROUP_VIDEO_CALL
            : o("WAArmadilloXMA.pb")
                .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
                .RTC_ONGOING_VIDEO_CALL,
        };
      return e === "video" ? a[t] : r[t];
    }
    function d(e, t) {
      var n = e.call,
        r = n.callEventCallType,
        a = n.callEventDuration,
        i = n.callEventEventActorId,
        l = n.callEventEventTime,
        c = n.callEventEventType,
        d = n.callEventJid,
        m = n.callEventServerInfoData,
        p = {
          content: {
            __typename: "XMSGXmaSingleContent",
            custom_template_data: {
              __typename: "XMSGXmaCallingTemplateData",
              call_duration_sec: a != null ? a : 0,
              call_state: u(c),
              call_type: s(r),
              event_actor_id: o("WAJids").extractUserId(i),
              event_time_ms: String(l),
              server_info_data: m != null ? m : "",
              server_thread_key: d,
            },
          },
          content_type: t,
          is_shareable: !1,
          layout_type: o("MSGDataclassTypes.flow").XmsgXmaLayoutType.Single,
        };
      return p;
    }
    function m(e) {
      var t = o("WAJids").switchOnChatJidType(e, {
        group: function (t) {
          return t;
        },
        interopUser: function (t) {
          return null;
        },
        lidUser: function (t) {
          return null;
        },
        msgrUser: function (t) {
          return null;
        },
        phoneUser: function (t) {
          return null;
        },
      });
      return t != null;
    }
    function p(t) {
      var n,
        r = t.call,
        a = r.callEventCallType,
        i = r.callEventEventActorId,
        l = r.callEventEventType,
        s = r.callEventJid,
        u = m(s),
        d = c(a, l, u),
        p = o(
          "MAWConvertExtendedContentTypeToLSXmaContentType",
        ).convertExtendedContentTypeToLSXmaContentType(d),
        _ = o("WAJids").threadIdForChatJid(s),
        f = {
          event: "xma_received",
          extra: {
            call_type: a,
            delivery_path: "notifyd",
            server_info_data:
              (n = t.call.callEventServerInfoData) != null ? n : "",
          },
          tam_xma_content_type: p,
          thread_id: _,
          thread_key: _,
          thread_type: u ? 16 : 15,
        },
        g = { message_sender_id: o("WAJids").userIdFromJid(i) };
      e.load().then(function (e) {
        return e.log(function () {
          return babelHelpers.extends({}, f, g);
        });
      });
    }
    ((l.getTargetTypeFromRTCCallEvent = c),
      (l.buildRTCCallXmaDataclassFromRTCCallEvent = d),
      (l.isGroupCallEvent = m),
      (l.logXMAEvent = p));
  },
  98,
);
