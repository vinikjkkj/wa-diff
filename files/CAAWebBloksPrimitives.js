__d(
  "CAAWebBloksPrimitives",
  [
    "CAAWebBloksExtensionHandlers",
    "WebBloksCAABroadcastChannelListener",
    "WebBloksCAAFetchCachedString",
    "WebBloksCAAFetchCredentialManager",
    "WebBloksCAAFetchSMSCode",
    "WebBloksCAAGenerateUUID",
    "WebBloksCAAGetAgeFailureBirthdayYearCount",
    "WebBloksCAAGetAgeFromBirthdayTimestamp",
    "WebBloksCAAGetWaterfallId",
    "WebBloksCAAMobileWebEncryptPassword",
    "WebBloksCAAPerformIGDeviceBasedLogin",
    "WebBloksCAAPostMessageToOpener",
    "WebBloksCAARegExistingLoginSuccess",
    "WebBloksCAARegLogoutCurrentUser",
    "WebBloksCAARegOpenShareSheet",
    "WebBloksCAASaveCachedString",
    "WebBloksChangeCanonicalURL",
    "WebBloksCheckInstalledAppsOnDevice",
    "WebBloksFetchAllAvailableNativeAuthData",
    "WebBloksHandleLoginResponse",
    "WebBloksIsUserBirthdayHardBlocked",
    "WebBloksLaunchSecurityKeys",
    "WebBloksMAPSetLogoutSource",
    "WebBloksMarkYoungUserCreationAttempt",
    "WebBloksMiStartSilentAuth",
    "WebBloksUserTooYoungRegistration",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = {
        "bk.action.caa.HandleLoginResponse": r("WebBloksHandleLoginResponse"),
        "bk.action.caa.PostMessageToOpener": r(
          "WebBloksCAAPostMessageToOpener",
        ),
        "bk.fx.action.FetchAllAvailableNativeAuthData": r(
          "WebBloksFetchAllAvailableNativeAuthData",
        ),
        "bk.action.caa.mobileweb.EncryptPassword": r(
          "WebBloksCAAMobileWebEncryptPassword",
        ),
        "bk.action.caa.reg.MarkYoungUserCreationAttempt": r(
          "WebBloksMarkYoungUserCreationAttempt",
        ),
        "bk.action.caa.reg.IsUserBirthdayHardBlocked": r(
          "WebBloksIsUserBirthdayHardBlocked",
        ),
        "bk.action.caa.reg.GetAgeFailureBirthdayYearCount": r(
          "WebBloksCAAGetAgeFailureBirthdayYearCount",
        ),
        "bk.action.pdp.UserTooYoungRegistration": r(
          "WebBloksUserTooYoungRegistration",
        ),
        "bk.action.caa.reg.GetAgeFromBirthdayTimestamp": r(
          "WebBloksCAAGetAgeFromBirthdayTimestamp",
        ),
        "bk.action.caa.reg.OpenShareSheet": r("WebBloksCAARegOpenShareSheet"),
        "bk.action.caa.mobileweb.ig.PerformDeviceBasedLogin": r(
          "WebBloksCAAPerformIGDeviceBasedLogin",
        ),
        "bk.action.caa.reg.LogoutCurrentUser": r(
          "WebBloksCAARegLogoutCurrentUser",
        ),
        "bk.action.caa.login.RegExistingLoginSuccess": r(
          "WebBloksCAARegExistingLoginSuccess",
        ),
        "bk.action.caa.login.FetchCredentialManager": r(
          "WebBloksCAAFetchCredentialManager",
        ),
        "bk.action.caa.FetchSMSCode": r("WebBloksCAAFetchSMSCode"),
        "bk.action.caa.SaveCachedString": r("WebBloksCAASaveCachedString"),
        "bk.action.caa.SetupBroadcastChannelListener": r(
          "WebBloksCAABroadcastChannelListener",
        ),
        "bk.action.caa.FetchCachedString": r("WebBloksCAAFetchCachedString"),
        "bk.action.urs.GetInstalledAppsFromBrowser": r(
          "WebBloksCheckInstalledAppsOnDevice",
        ),
        "bk.action.urs.ChangeCanonicalURL": r("WebBloksChangeCanonicalURL"),
        "bk.action.acp.LaunchSecurityKeys": r("WebBloksLaunchSecurityKeys"),
        "bk.action.caa.GenerateUUID": r("WebBloksCAAGenerateUUID"),
        "bk.action.caa.GetWaterfallId": r("WebBloksCAAGetWaterfallId"),
        "bk.action.map.SetLogoutSource": r("WebBloksMAPSetLogoutSource"),
        "bk.action.mi.StartSilentAuth": r("WebBloksMiStartSilentAuth"),
      };
    ((l.EXTENSION_HANDLERS = o(
      "CAAWebBloksExtensionHandlers",
    ).EXTENSION_HANDLERS),
      (l.COMPONENTS = e),
      (l.ACTIONS = s));
  },
  98,
);
