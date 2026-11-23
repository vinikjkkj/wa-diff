__d(
  "WAWebInitialSystemMsg",
  [
    "WAWebABPropsSaga",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiDeviceList",
    "WAWebBizCoexUtils",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebChatOpeningNotice",
    "WAWebContactSystemMsg",
    "WAWebMobilePlatforms",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProtobufsAdv.pb",
    "WAWebSagaSystemMsg",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (r("WAWebWid").isPSA(e))
        return [
          o("WAWebContactSystemMsg").genEncryptNotificationMsg(
            e,
            o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.PSA,
          ),
        ];
      var a = e.isSupportAgentBot();
      if (e.isBot() && !a)
        return [o("WAWebBotSystemMsg").genBotInitSystemMsg(e)];
      if (r("WAWebWid").isBroadcast(e)) return s(e);
      if (a || r("WAWebWid").isCAPISupportAccount(e)) {
        var i = [
          o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
            e,
            o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.SUPPORT,
          ),
        ];
        return (
          a &&
            r("WAWebWid").isCAPISupportAccount(e) &&
            o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
            i.push(o("WAWebSagaSystemMsg").genSagaInitSystemMsg(e)),
          i
        );
      }
      if (n === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P)
        return [o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(e)];
      if (e.isUser()) {
        if (
          o("WAWebMobilePlatforms").isSMB() &&
          (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === !0
        )
          return [
            r("nullthrows")(
              o(
                "WAWebAdvHostedAccountTypeSystemMsg",
              ).genAdvMeAccountIsHostedNotificationMsg(e, e),
            ),
          ];
        var l = o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv();
        if (l && e.isUser()) {
          var u = await o("WAWebApiDeviceList").getDeviceRecord(e);
          if (
            (u == null ? void 0 : u.advAccountType) ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED ||
            (u == null ? void 0 : u.deletedChangedToHost) === !0
          )
            return o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(e)
              ? []
              : [
                  r("nullthrows")(
                    o(
                      "WAWebAdvHostedAccountTypeSystemMsg",
                    ).genAdvAccountTypeInitialSysMsg(e, e),
                  ),
                ];
        }
      }
      var c = [],
        d = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(t);
      e: {
        if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE) {
          c.push(o("WAWebContactSystemMsg").genEncryptNotificationMsg(e));
          break e;
        }
        if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
          c.push(
            o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.BSP_PRIVACY,
            ),
          );
          break e;
        }
        if (d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB) {
          c.push(
            o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.META_PRIVACY,
            ),
          );
          break e;
        }
        if (
          d === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP
        ) {
          c.push(
            o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.HOSTED_GROUP,
            ),
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            d,
        );
      }
      return (
        n === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P &&
          o("WAWebBotTos").hasAcceptedBizBotTos() &&
          c.push(o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e)),
        c
      );
    }
    async function s(e) {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var t = await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount();
        if (t === !0) {
          var n;
          return [
            (n = o(
              "WAWebAdvHostedAccountTypeSystemMsg",
            ).genAdvMeAccountIsHostedNotificationMsg(e, e)) != null
              ? n
              : o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  e,
                  o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.META_PRIVACY,
                ),
          ];
        }
      }
      return [o("WAWebContactSystemMsg").genEncryptNotificationMsg(e)];
    }
    l.default = e;
  },
  98,
);
