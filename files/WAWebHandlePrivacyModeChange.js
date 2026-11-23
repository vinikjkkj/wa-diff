__d(
  "WAWebHandlePrivacyModeChange",
  [
    "WALogger",
    "WAWebApiVerifiedBusinessName",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBusinessProfileTypes",
    "WAWebChatViewMode.flow",
    "WAWebCheckChatExistsOrCreate",
    "WAWebCoexV2RepresentedIdentityFromMessage",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebMessageDestinationChat",
    "WAWebPrivacyModeSystemMsg",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n,
        r = t.bizInfo,
        a = t.chatWid,
        i = t.msgInfo,
        l = t.msgMeta,
        s = t.msgs,
        c = s[0],
        d = o(
          "WAWebMessageDestinationChat",
        ).determineDestinationChatForIncomingMessage({
          chat: a,
          msg: c,
          msgInfo: i,
        }),
        m = d.chatId,
        p = o(
          "WAWebCoexV2RepresentedIdentityFromMessage",
        ).maybeResolveCoexV2RepresentedIdentityFromMessage(i, l),
        _ =
          p == null ||
          ((n = p.representedIdentity) == null ? void 0 : n.identitySource) ===
            "sender",
        f = await u(m),
        g = _
          ? o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(
              r.privacyMode,
              f.privacyMode,
            )
          : null,
        h =
          o(
            "WAWebBizBroadcastProHiddenChatClassifier",
          ).isBizBroadcastProMarketingOnlyBatch(s, m) &&
          o(
            "WAWebBizBroadcastProHiddenChatClassifier",
          ).isBizBroadcastProHiddenChatsEnabled(),
        y = await o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
          destinationChat: d,
          msgMeta: l,
          options: { firstIncomingMsg: c, nextPrivacyMode: g },
          initialProps: h
            ? {
                chatViewMode: o("WAWebChatViewMode.flow").ChatViewModeType
                  .ONLY_MARKETING_FROM_SELF,
              }
            : void 0,
          chatOriginType: "createChatOnNewMsg",
        }),
        C =
          _ &&
          (y !== !0 ||
            f.verifiedLevel !==
              o("WAWebBusinessProfileTypes").convertLevel(r.verifiedLevel));
      try {
        return (
          y &&
            g != null &&
            (await o(
              "WAWebHandlePrivacyModeUpdateMsgAction",
            ).handlePrivacyModeTransition(m, g, { shouldRunMATonWid: !1 })),
          { shouldQueryContactInfo: C, latestPrivacyMode: g }
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
            m.toLogString(),
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
