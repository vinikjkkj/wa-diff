__d(
  "WAWebVoipJoinTransferableCall",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLazyLoadedRetriable",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipGatingUtils",
    "WAWebVoipHandleCallTransferFailed",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferCall",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("WAWebLazyLoadedRetriable")(
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()
          ) {
            if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
              yield g(function (t) {
                return t.openCallTransferLobby(e);
              });
              return;
            }
            yield y(e);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
          g(function (t) {
            return t.joinCallTransferWithoutLobby(e);
          });
          return;
        }
        E(e);
      }
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield m();
          } catch (e) {
            o(
              "WAWebVoipHandleCallTransferFailed",
            ).showCallTransferCouldNotConnectToast();
            return;
          }
          e(t);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield b(),
            n = o(
              "WAWebVoipCallTransferEntryPointStore",
            ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(
              e.rootCallId,
            );
          if (n == null) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: nativeTransferLobby: entry point removed before the lobby opened",
                ])),
            ),
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast());
            return;
          }
          (t != null && (yield S(t, n))) || (yield E(n));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield o("WAWebVoipStackInterface").getVoipStackInterface();
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: nativeTransferLobby: loading the VoIP stack failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-native-transfer-lobby-open-failed"),
              null
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.type !== "windows") return !1;
          try {
            var n = o("WAWebContactCollection").ContactCollection.gadd(
                o("WAWebWidFactory").asUserWidOrThrow(t.peerWid),
                { silent: !0 },
              ),
              a = yield e.openCallTransferLobby({
                rootCallId: t.rootCallId,
                rootCallCreator: t.rootCallCreatorJid,
                peerActiveDevice: t.peerActiveDeviceJid,
                peerJid: t.peerWid.toString(),
                peerName: L(n),
                isVideoCall: t.isVideoCall,
              });
            if (!a) return !1;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: nativeTransferLobby: opening the lobby failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-native-transfer-lobby-open-failed"),
              !1
            );
          }
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: nativeTransferLobby: open rootCallId=",
                  "",
                ])),
              t.rootCallId,
            ),
            !0
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t,
        n = o("WAWebFrontendContactGetters").getFormattedName(e);
      if (n !== "") return n;
      var r =
        (t = o(
          "WAWebFrontendContactGetters",
        ).getFormattedSavedNameOrPushnameWithType(e)) == null
          ? void 0
          : t.displayName;
      return r != null ? "~" + r : "";
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        k.apply(this, arguments)
      );
    }
    ((l.joinTransferableCallHere = p),
      (l.joinTransferableCallWithoutLobby = f));
  },
  98,
);
