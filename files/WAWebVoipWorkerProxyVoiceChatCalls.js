__d(
  "WAWebVoipWorkerProxyVoiceChatCalls",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebMLModelManager",
    "WAWebVoipCallIdProvider",
    "WAWebVoipGatingUtils",
    "WAWebVoipLobbyEntryPointStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, r) {
      return {
        startVoiceChat: (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
              o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(null),
              o("WAWebMLModelManager")
                .initMLModelsForCall(yield r)
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
            var a = Number(yield t("startVoiceChat", n));
            return (
              a !== 0 &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: startVoiceChat: failed with status ",
                        "",
                      ])),
                    a,
                  )
                  .sendLogs("voip-start-voice-chat-failed"),
              a
            );
          });
          function i(e) {
            return a.apply(this, arguments);
          }
          return i;
        })(),
        joinVoiceChat: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n;
            (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0),
              o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(
                (n = e.lobbyEntryType) != null ? n : null,
                !e.joinAndAccept,
              ),
              o("WAWebVoipCallIdProvider").resetPendingCallId());
            var r = Number(yield t("joinVoiceChat", e));
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
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        sendWaveAll: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return Number(yield t("sendWaveAll", {}));
          });
          function r() {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        extendVoiceChatTimeout: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return Number(
              yield t("extendVoiceChatTimeout", { extensionMs: e }),
            );
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
      };
    }
    l.createWorkerProxyVoiceChatCalls = c;
  },
  98,
);
