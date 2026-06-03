__d(
  "WAWebInitialSystemMsg",
  [
    "WANullthrows",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiDeviceList",
    "WAWebBizCoexGatingUtils",
    "WAWebBizCoexUtils",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebContactSystemMsg",
    "WAWebMobilePlatforms",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            o("WAWebMobilePlatforms").isSMB()
          ) {
            var t = yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount();
            if (t === !0)
              return [
                o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  e,
                  "biz_privacy_mode_init_fb",
                ),
              ];
          }
          return [o("WAWebContactSystemMsg").genEncryptNotificationMsg(e)];
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (r("WAWebWid").isPSA(t))
            return [
              o("WAWebContactSystemMsg").genEncryptNotificationMsg(
                t,
                "chat_psa",
              ),
            ];
          if (t.isBot()) return [o("WAWebBotSystemMsg").genBotInitSystemMsg(t)];
          if (r("WAWebWid").isBroadcast(t)) return e(t);
          if (r("WAWebWid").isCAPISupportAccount(t))
            return [
              o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                t,
                "support_system_message",
              ),
            ];
          if (a === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P)
            return [o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(t)];
          if (
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            t.isUser()
          ) {
            if (
              o("WAWebMobilePlatforms").isSMB() &&
              (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) ===
                !0
            )
              return [
                r("WANullthrows")(
                  o(
                    "WAWebAdvHostedAccountTypeSystemMsg",
                  ).genAdvMeAccountIsHostedNotificationMsg(t, t),
                ),
              ];
            var i = o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv();
            if (i && t.isUser()) {
              var l = yield o("WAWebApiDeviceList").getDeviceRecord(t);
              if (
                (l == null ? void 0 : l.advAccountType) ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED ||
                (l == null ? void 0 : l.deletedChangedToHost) === !0
              )
                return o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(
                  t,
                )
                  ? []
                  : [
                      r("WANullthrows")(
                        o(
                          "WAWebAdvHostedAccountTypeSystemMsg",
                        ).genAdvAccountTypeInitialSysMsg(t, t),
                      ),
                    ];
            }
          }
          var s = [],
            u = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(n);
          e: {
            if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE) {
              s.push(o("WAWebContactSystemMsg").genEncryptNotificationMsg(t));
              break e;
            }
            if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP) {
              s.push(
                o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  t,
                  "biz_privacy_mode_init_bsp",
                ),
              );
              break e;
            }
            if (u === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB) {
              s.push(
                o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  t,
                  "biz_privacy_mode_init_fb",
                ),
              );
              break e;
            }
            if (
              u ===
              o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP
            ) {
              s.push(
                o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
                  t,
                  "is_capi_hosted_group",
                ),
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                u,
            );
          }
          return (
            a === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P &&
              o("WAWebBotTos").hasAcceptedBizBotTos() &&
              s.push(o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(t)),
            s
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
