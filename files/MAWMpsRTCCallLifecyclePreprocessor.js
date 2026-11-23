__d(
  "MAWMpsRTCCallLifecyclePreprocessor",
  [
    "MAWProtobufDeserializers",
    "MpsPreprocessor",
    "MpsTypes",
    "WAArmadilloXMA.pb",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .RTC_MISSED_GROUP_AUDIO_CALL:
        case o("WAArmadilloXMA.pb")
          .EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE
          .RTC_MISSED_GROUP_VIDEO_CALL:
          return !0;
        default:
          return !1;
      }
    }
    function s(t) {
      var n;
      if (
        t.directive.actionType !== o("MpsTypes").ActionType.UpsertTopLevel ||
        !r("gkx")("19746")
      )
        return !1;
      var a =
        (n = o("MAWProtobufDeserializers")
          .DeserializedBackupMessage.create(t.message.payload)
          .encryptedTransportMessage()) == null ||
        (n = n.armadillo()) == null ||
        (n = n.extendedContentMessage()) == null
          ? void 0
          : n.payload.targetType;
      return e(a);
    }
    var u = o("MpsPreprocessor").preprocessor(function (e) {
      var t = e.ctx,
        n = e.payloadList,
        r = new Map();
      return {
        ctx: t,
        errors: r,
        payloadList: n.map(function (e) {
          var t;
          return s(e)
            ? babelHelpers.extends({}, e, {
                directive: babelHelpers.extends({}, e.directive, {
                  directiveTags: [].concat(
                    (t = e.directive.directiveTags) != null ? t : [],
                    [
                      o("MpsTypes").MpsDirectiveTag
                        .AllowOverwriteExistingTopLevel,
                    ],
                  ),
                }),
              })
            : e;
        }),
      };
    }, "maw-mps-rtc-call-lifecycle");
    l.MAWMpsRTCCallLifecyclePreprocessor = u;
  },
  98,
);
