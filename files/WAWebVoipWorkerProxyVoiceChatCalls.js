__d(
  "WAWebVoipWorkerProxyVoiceChatCalls",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebMLModelManager",
    "WAWebVoipCallIdProvider",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyEntryPointStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, n) {
      return {
        startVoiceChat: async function (a) {
          (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
            o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(null),
            o("WAWebMLModelManager")
              .initMLModelsForCall(await n())
              .catch(function (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [initMLModelsForCall] unhandled error: ",
                      "",
                    ])),
                  t,
                );
              }));
          var r = Number(await t("startVoiceChat", a));
          return (
            r !== 0 &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: startVoiceChat: failed with status ",
                      "",
                    ])),
                  r,
                )
                .sendLogs("voip-start-voice-chat-failed"),
            r
          );
        },
        joinVoiceChat: async function (n) {
          var e;
          (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
            o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
              (e = n.lobbyEntryType) != null ? e : null,
              !n.joinAndAccept,
            ),
            o("WAWebVoipCallIdProvider").resetPendingCallId());
          var r = Number(await t("joinVoiceChat", n));
          return (
            r !== 0 &&
              (o("WAWebCoreActionsODS").logCallGroupJoinError(),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: joinVoiceChat: failed with status ",
                      "",
                    ])),
                  r,
                )
                .sendLogs("voip-join-voice-chat-failed")),
            r
          );
        },
        sendWaveAll: async function () {
          return Number(await t("sendWaveAll", {}));
        },
        extendVoiceChatTimeout: async function (n) {
          return Number(await t("extendVoiceChatTimeout", { extensionMs: n }));
        },
      };
    }
    l.createWorkerProxyVoiceChatCalls = c;
  },
  98,
);
