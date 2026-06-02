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
        a = t.hasFilters,
        i = t.isCropped,
        l = t.isGroupStatus,
        s = l === void 0 ? !1 : l,
        u = t.isNewsletterStatus,
        d = u === void 0 ? !1 : u,
        m = t.isReshare,
        p = t.isRotated,
        _ = t.isVideoManuallyTrimmed,
        f = t.isVideoMuted,
        g = t.isVideoTrimmed,
        h = t.mediaType,
        y = t.msg,
        C = t.newsletterStatusId,
        b = t.newsletterWid,
        v = t.perPostStatusPrivacySetting,
        S = t.retryCount,
        R = t.statusAudienceSelectorClicked,
        L = t.statusAudienceSelectorUpdated,
        E = t.statusAudienceSize,
        k = t.statusContainsMusic,
        I = t.statusPostOrigin,
        T = t.statusPostResult,
        D = await Promise.all([
          y != null
            ? o("WAWebStatusLoggingUtils").statusIdForLogging(y)
            : void 0,
          r("WAWebUserPrefsStatus").getStatusPrivacySetting(),
        ]),
        x = D[0],
        $ = D[1],
        P = new (o("WAWebStatusPostWamEvent").StatusPostWamEvent)({
          statusPostResult: T,
          statusPostOrigin: I,
          mediaType: h,
          cid: b == null ? void 0 : b.user,
          channelStatusId: C,
          statusCategory: e(d, s),
          defaultStatusPrivacySetting: c($),
          perPostStatusPrivacySetting: v != null ? c(v) : void 0,
          hasCaption: n,
          hasFilters: a,
          isCropped: i,
          isReshare: m,
          isRotated: p,
          isVideoManuallyTrimmed: _,
          isVideoMuted: f,
          isVideoTrimmed: g,
          retryCount: S,
          statusAudienceSelectorClicked: R,
          statusAudienceSelectorUpdated: L,
          statusAudienceSize: E != null ? E : void 0,
          statusContainsMusic: k,
          statusId: x,
        });
      P.commit();
    }
    ((l.getStatusMediaType = s),
      (l.getStatusPostResult = u),
      (l.logStatusPost = d));
  },
  98,
);
