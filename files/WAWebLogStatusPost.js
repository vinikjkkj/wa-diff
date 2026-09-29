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
          var r = t.hasCaption,
            a = t.hasFilters,
            i = t.isCropped,
            l = t.isGroupStatus,
            u = l === void 0 ? !1 : l,
            c = t.isNewsletterStatus,
            m = c === void 0 ? !1 : c,
            p = t.isReshare,
            _ = t.isRotated,
            f = t.isVideoManuallyTrimmed,
            g = t.isVideoMuted,
            h = t.isVideoTrimmed,
            y = t.mediaType,
            C = t.msg,
            b = t.newsletterStatusId,
            v = t.newsletterWid,
            S = t.perPostStatusPrivacySetting,
            R = t.retryCount,
            L = t.statusAudienceSelectorClicked,
            E = t.statusAudienceSelectorUpdated,
            k = t.statusAudienceSize,
            I = t.statusContainsMusic,
            T = t.statusPostOrigin,
            D = t.statusPostResult,
            x = yield (e || (e = n("Promise"))).all([
              C != null
                ? o("WAWebStatusLoggingUtils").statusIdForLogging(C)
                : void 0,
              o("WAWebUserPrefsStatus").getStatusPrivacySetting(),
            ]),
            $ = x[0],
            P = x[1],
            N = new (o("WAWebStatusPostWamEvent").StatusPostWamEvent)({
              statusPostResult: D,
              statusPostOrigin: T,
              mediaType: y,
              cid: o("WAWebStatusLoggingUtils").channelStatusCid(v),
              channelStatusId: b,
              statusCategory: s(m, u),
              defaultStatusPrivacySetting: d(P),
              perPostStatusPrivacySetting: S != null ? d(S) : void 0,
              hasCaption: r,
              hasFilters: a,
              isCropped: i,
              isReshare: p,
              isRotated: _,
              isVideoManuallyTrimmed: f,
              isVideoMuted: g,
              isVideoTrimmed: h,
              retryCount: R,
              statusAudienceSelectorClicked: L,
              statusAudienceSelectorUpdated: E,
              statusAudienceSize: k != null ? k : void 0,
              statusContainsMusic: I,
              statusId: $,
            });
          N.commit();
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
