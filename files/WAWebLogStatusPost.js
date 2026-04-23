__d(
  "WAWebLogStatusPost",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return e
        ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.CHANNEL_STATUS
        : t
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS;
    }
    function u(e) {
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
    function c(e) {
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
    function d(e) {
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.hasCaption,
            i = t.hasFilters,
            l = t.isCropped,
            u = t.isGroupStatus,
            c = u === void 0 ? !1 : u,
            m = t.isNewsletterStatus,
            p = m === void 0 ? !1 : m,
            _ = t.isReshare,
            f = t.isRotated,
            g = t.isVideoManuallyTrimmed,
            h = t.isVideoMuted,
            y = t.isVideoTrimmed,
            C = t.mediaType,
            b = t.msg,
            v = t.newsletterStatusId,
            S = t.newsletterWid,
            R = t.perPostStatusPrivacySetting,
            L = t.retryCount,
            E = t.statusAudienceSelectorClicked,
            k = t.statusAudienceSelectorUpdated,
            I = t.statusAudienceSize,
            T = t.statusContainsMusic,
            D = t.statusPostOrigin,
            x = t.statusPostResult,
            $ = yield (e || (e = n("Promise"))).all([
              b != null
                ? o("WAWebStatusLoggingUtils").statusIdForLogging(b)
                : void 0,
              r("WAWebUserPrefsStatus").getStatusPrivacySetting(),
            ]),
            P = $[0],
            N = $[1],
            M = new (o("WAWebStatusPostWamEvent").StatusPostWamEvent)({
              statusPostResult: x,
              statusPostOrigin: D,
              mediaType: C,
              cid: S == null ? void 0 : S.user,
              channelStatusId: v,
              statusCategory: s(p, c),
              defaultStatusPrivacySetting: d(N),
              perPostStatusPrivacySetting: R != null ? d(R) : void 0,
              hasCaption: a,
              hasFilters: i,
              isCropped: l,
              isReshare: _,
              isRotated: f,
              isVideoManuallyTrimmed: g,
              isVideoMuted: h,
              isVideoTrimmed: y,
              retryCount: L,
              statusAudienceSelectorClicked: E,
              statusAudienceSelectorUpdated: k,
              statusAudienceSize: I != null ? I : void 0,
              statusContainsMusic: T,
              statusId: P,
            });
          M.commit();
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getStatusMediaType = u),
      (l.getStatusPostResult = c),
      (l.logStatusPost = m));
  },
  98,
);
