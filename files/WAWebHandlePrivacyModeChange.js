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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.bizInfo,
            r = t.chatWid,
            a = t.msgInfo,
            i = t.msgMeta,
            l = t.msgs,
            s = l[0],
            u = o(
              "WAWebMessageDestinationChat",
            ).determineDestinationChatForIncomingMessage({
              chat: r,
              msg: s,
              msgInfo: a,
            }),
            d = u.chatId,
            m = yield c(d),
            p = o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(
              n.privacyMode,
              m.privacyMode,
            ),
            _ = yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate(
              {
                destinationChat: u,
                msgMeta: i,
                options: { firstIncomingMsg: s, nextPrivacyMode: p },
                chatOriginType: "createChatOnNewMsg",
              },
            ),
            f =
              _ !== !0 ||
              m.verifiedLevel !==
                o("WAWebBusinessProfileTypes").convertLevel(n.verifiedLevel);
          try {
            return (
              _ &&
                p != null &&
                (yield o(
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebRuntimeEnvironmentUtils").isWorker())
            return o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "getChatPrivacyInfoOnNewMsg",
              { chatId: e },
            );
          var t = yield o(
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
        })),
        d.apply(this, arguments)
      );
    }
    l.handlePrivacyModeChangeAndCreateChat = s;
  },
  98,
);
