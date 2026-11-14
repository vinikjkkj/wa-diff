__d(
  "WAWebVoipJoinTransferableCall",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBoolFunc",
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
          isTerminalError: o("WAWebBoolFunc").returnTrue,
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
        d(function (t) {
          return t.openCallTransferLobby(e);
        });
        return;
      }
      p(e);
    }
    function c(e) {
      if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        d(function (t) {
          return t.joinCallTransferWithoutLobby(e);
        });
        return;
      }
      p(e);
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield s();
          } catch (e) {
            o(
              "WAWebVoipHandleCallTransferFailed",
            ).showCallTransferCouldNotConnectToast();
            return;
          }
          e(t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        _.apply(this, arguments)
      );
    }
    ((l.joinTransferableCallHere = u),
      (l.joinTransferableCallWithoutLobby = c));
  },
  98,
);
