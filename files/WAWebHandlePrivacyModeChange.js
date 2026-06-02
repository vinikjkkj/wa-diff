__d(
  "WAWebHandlePrivacyModeChange",
  [
    "WALogger",
    "WAWebApiVerifiedBusinessName",
    "WAWebBusinessProfileTypes",
    "WAWebCheckChatExistsOrCreate",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebMessageDestinationChat",
    "WAWebPrivacyModeSystemMsg",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.bizInfo,
        r = t.chatWid,
        a = t.msgInfo,
        i = t.msgMeta,
        l = t.msgs,
        s = l[0],
        c = o(
          "WAWebMessageDestinationChat",
        ).determineDestinationChatForIncomingMessage({
          chat: r,
          msg: s,
          msgInfo: a,
        }),
        d = c.chatId,
        m = await u(d),
        p = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(
          n.privacyMode,
          m.privacyMode,
        ),
        _ = await o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
          destinationChat: c,
          msgMeta: i,
          options: { firstIncomingMsg: s, nextPrivacyMode: p },
          chatOriginType: "createChatOnNewMsg",
        }),
        f =
          _ !== !0 ||
          m.verifiedLevel !==
            o("WAWebBusinessProfileTypes").convertLevel(n.verifiedLevel);
      try {
        return (
          _ &&
            p != null &&
            (await o(
              "WAWebHandlePrivacyModeUpdateMsgAction",
            ).handlePrivacyModeTransition(d, p, { shouldRunMATonWid: !1 })),
          { shouldQueryContactInfo: f, latestPrivacyMode: p }
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handlePrivacyModeChange for ",
                ", failed with error: ",
                "",
              ])),
            d.toLogString(),
            t,
          )
          .tags("messaging", "non-sad")
          .sendLogs("handlePrivacyModeChange failed", { sampling: 0.01 });
      }
    }
    async function u(e) {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker())
        return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "getChatPrivacyInfoOnNewMsg",
          { chatId: e },
        );
      var t = await o(
        "WAWebApiVerifiedBusinessName",
      ).getVerifiedBusinessNameRecordLidAware(e);
      return {
        privacyMode:
          (t == null ? void 0 : t.privacyMode) != null
            ? o(
                "WAWebApiVerifiedBusinessName",
              ).convertPrivacyModeFromStorageType(t.privacyMode)
            : null,
        verifiedLevel: o("WAWebBusinessProfileTypes").convertLevel(
          t == null ? void 0 : t.level,
        ),
      };
    }
    l.handlePrivacyModeChangeAndCreateChat = s;
  },
  98,
);
