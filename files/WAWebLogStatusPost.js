__d(
  "WAWebLogStatusPost",
  [
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebStatusLoggingUtils",
    "WAWebStatusPostWamEvent",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPrivacySettingsValueType",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusPostResult",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
        : t
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    function s(e) {
      return e === o("WAWebMsgType").MSG_TYPE.IMAGE
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO
          : e === o("WAWebMsgType").MSG_TYPE.AUDIO
            ? o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO
            : e === o("WAWebMsgType").MSG_TYPE.DOCUMENT
              ? o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT
              : e === o("WAWebMsgType").MSG_TYPE.STICKER
                ? o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER
                : o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
    }
    function u(e) {
      return e === o("WAWebSendMsgResultAction").SendMsgResult.OK
        ? o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT.OK
        : e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
          ? o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT.ERROR_NETWORK
          : e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_EXPIRED
            ? o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT.ERROR_EXPIRED
            : e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD
              ? o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT
                  .ERROR_UPLOAD
              : e ===
                  o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
                ? o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT.CANCELLED
                : o("WAWebWamEnumStatusPostResult").STATUS_POST_RESULT
                    .ERROR_UNKNOWN;
    }
    function c(e) {
      return e ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
        ? o("WAWebWamEnumPrivacySettingsValueType").PRIVACY_SETTINGS_VALUE_TYPE
            .MY_CONTACTS
        : e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
          ? o("WAWebWamEnumPrivacySettingsValueType")
              .PRIVACY_SETTINGS_VALUE_TYPE.ONLY_SHARE_WITH
          : e ===
              o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
            ? o("WAWebWamEnumPrivacySettingsValueType")
                .PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS_EXCEPT
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    async function d(t) {
      var n = t.hasCaption,
        r = t.hasFilters,
        a = t.isCropped,
        i = t.isGroupStatus,
        l = i === void 0 ? !1 : i,
        s = t.isNewsletterStatus,
        u = s === void 0 ? !1 : s,
        d = t.isReshare,
        m = t.isRotated,
        p = t.isVideoManuallyTrimmed,
        _ = t.isVideoMuted,
        f = t.isVideoTrimmed,
        g = t.mediaType,
        h = t.msg,
        y = t.newsletterStatusId,
        C = t.newsletterWid,
        b = t.perPostStatusPrivacySetting,
        v = t.retryCount,
        S = t.statusAudienceSelectorClicked,
        R = t.statusAudienceSelectorUpdated,
        L = t.statusAudienceSize,
        E = t.statusContainsMusic,
        k = t.statusPostOrigin,
        I = t.statusPostResult,
        T = await Promise.all([
          h != null
            ? o("WAWebStatusLoggingUtils").statusIdForLogging(h)
            : void 0,
          o("WAWebUserPrefsStatus").getStatusPrivacySetting(),
        ]),
        D = T[0],
        x = T[1],
        $ = new (o("WAWebStatusPostWamEvent").StatusPostWamEvent)({
          statusPostResult: I,
          statusPostOrigin: k,
          mediaType: g,
          cid: o("WAWebStatusLoggingUtils").channelStatusCid(C),
          channelStatusId: y,
          statusCategory: e(u, l),
          defaultStatusPrivacySetting: c(x),
          perPostStatusPrivacySetting: b != null ? c(b) : void 0,
          hasCaption: n,
          hasFilters: r,
          isCropped: a,
          isReshare: d,
          isRotated: m,
          isVideoManuallyTrimmed: p,
          isVideoMuted: _,
          isVideoTrimmed: f,
          retryCount: v,
          statusAudienceSelectorClicked: S,
          statusAudienceSelectorUpdated: R,
          statusAudienceSize: L != null ? L : void 0,
          statusContainsMusic: E,
          statusId: D,
        });
      $.commit();
    }
    ((l.getStatusMediaType = s),
      (l.getStatusPostResult = u),
      (l.logStatusPost = d));
  },
  98,
);
