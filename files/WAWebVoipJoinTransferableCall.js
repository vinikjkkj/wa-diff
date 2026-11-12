__d(
  "WAWebVoipJoinTransferableCall",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleCallTransferFailed",
    "WAWebVoipTransferCall",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        function () {
          return r("JSResourceForInteraction")(
            "WAWebVoipCallTransferLobbyActions",
          )
            .__setRef("WAWebVoipJoinTransferableCall")
            .load();
        },
        "WAWebVoipCallTransferLobbyActions",
        {
          isTerminalError: function () {
            return !0;
          },
          onFinalFailure: function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: loading the lobby failed",
                  ])),
              )
              .catching(n)
              .sendLogs("voip-transfer-lobby-load-failed");
          },
        },
      );
    function u(e) {
      if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        c(e);
        return;
      }
      m(e);
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield s();
          } catch (e) {
            o(
              "WAWebVoipHandleCallTransferFailed",
            ).showCallTransferCouldNotConnectToast();
            return;
          }
          t.openCallTransferLobby(e);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebVoipTransferCall",
          ).transferWAWebVoipCallToThisDevice({
            hasVideo: e.isVideoCall,
            peerActiveDevice: e.peerActiveDeviceJid,
            rootCallCreator: e.rootCallCreatorJid,
            rootCallId: e.rootCallId,
          });
          t ||
            o(
              "WAWebVoipHandleCallTransferFailed",
            ).showCallTransferCouldNotConnectToast();
        })),
        p.apply(this, arguments)
      );
    }
    l.joinTransferableCallHere = u;
  },
  98,
);
