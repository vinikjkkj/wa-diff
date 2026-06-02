__d(
  "WAWebGetPrivacyModeWhenSent",
  [
    "WAWebApiVerifiedBusinessName",
    "WAWebHandleMsgTypes.flow",
    "WAWebPrivacyModeSystemMsg",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
        if (!o("WAWebUserPrefsMeUser").isMeAccount(e.author))
          return t.privacyMode;
        var n = t.privacyMode,
          r = o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? await o("WAWebApiVerifiedBusinessName").getPrivacyMode(e.chat)
            : await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "getPrivacyMode",
                { id: e.chat },
              );
        return o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(r, n);
      }
    }
    l.getPrivacyModeWhenSent = e;
  },
  98,
);
