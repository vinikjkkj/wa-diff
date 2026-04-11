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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.hasCaption,
            i = t.hasFilters,
            l = t.isCropped,
            s = t.isGroupStatus,
            u = s === void 0 ? !1 : s,
            d = t.isReshare,
            m = t.isRotated,
            p = t.isVideoManuallyTrimmed,
            _ = t.isVideoMuted,
            f = t.isVideoTrimmed,
            g = t.mediaType,
            h = t.msg,
            y = t.perPostStatusPrivacySetting,
            C = t.retryCount,
            b = t.statusAudienceSelectorClicked,
            v = t.statusAudienceSelectorUpdated,
            S = t.statusAudienceSize,
            R = t.statusContainsMusic,
            L = t.statusPostOrigin,
            E = t.statusPostResult,
            k = yield (e || (e = n("Promise"))).all([
              h != null
                ? o("WAWebStatusLoggingUtils").statusIdForLogging(h)
                : void 0,
              r("WAWebUserPrefsStatus").getStatusPrivacySetting(),
            ]),
            I = k[0],
            T = k[1],
            D = new (o("WAWebStatusPostWamEvent").StatusPostWamEvent)({
              statusPostResult: E,
              statusPostOrigin: L,
              mediaType: g,
              statusCategory: u
                ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
                : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                    .REGULAR_STATUS,
              defaultStatusPrivacySetting: c(T),
              perPostStatusPrivacySetting: y != null ? c(y) : void 0,
              hasCaption: a,
              hasFilters: i,
              isCropped: l,
              isReshare: d,
              isRotated: m,
              isVideoManuallyTrimmed: p,
              isVideoMuted: _,
              isVideoTrimmed: f,
              retryCount: C,
              statusAudienceSelectorClicked: b,
              statusAudienceSelectorUpdated: v,
              statusAudienceSize: S != null ? S : void 0,
              statusContainsMusic: R,
              statusId: I,
            });
          D.commit();
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getStatusMediaType = s),
      (l.getStatusPostResult = u),
      (l.logStatusPost = d));
  },
  98,
);
