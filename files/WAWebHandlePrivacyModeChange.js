__d(
  "WAWebHandlePrivacyModeChange",
  [
    "WALogger",
    "WAWebApiVerifiedBusinessName",
    "WAWebBusinessProfileTypes",
    "WAWebCheckChatExistsOrCreate",
    "WAWebCoexV2RepresentedIdentityFromMessage",
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
          var n,
            r = t.bizInfo,
            a = t.chatWid,
            i = t.msgInfo,
            l = t.msgMeta,
            s = t.msgs,
            u = s[0],
            d = o(
              "WAWebMessageDestinationChat",
            ).determineDestinationChatForIncomingMessage({
              chat: a,
              msg: u,
              msgInfo: i,
            }),
            m = d.chatId,
            p = o(
              "WAWebCoexV2RepresentedIdentityFromMessage",
            ).maybeResolveCoexV2RepresentedIdentityFromMessage(i, l),
            _ =
              p == null ||
              ((n = p.representedIdentity) == null
                ? void 0
                : n.identitySource) === "sender",
            f = yield c(m),
            g = _
              ? o("WAWebPrivacyModeSystemMsg").getLatestPrivacyMode(
                  r.privacyMode,
                  f.privacyMode,
                )
              : null,
            h = yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate(
              {
                destinationChat: d,
                msgMeta: l,
                options: { firstIncomingMsg: u, nextPrivacyMode: g },
                chatOriginType: "createChatOnNewMsg",
              },
            ),
            y =
              _ &&
              (h !== !0 ||
                f.verifiedLevel !==
                  o("WAWebBusinessProfileTypes").convertLevel(r.verifiedLevel));
          try {
            return (
              h &&
                g != null &&
                (yield o(
                  "WAWebHandlePrivacyModeUpdateMsgAction",
                ).handlePrivacyModeTransition(m, g, { shouldRunMATonWid: !1 })),
              { shouldQueryContactInfo: y, latestPrivacyMode: g }
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
