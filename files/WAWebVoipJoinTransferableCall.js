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
    async function p(e) {
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
          await f(function (t) {
            return t.openCallTransferLobby(e);
          });
          return;
        }
        await g(e);
      }
    }
    function _(e) {
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        if (o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
          f(function (t) {
            return t.joinCallTransferWithoutLobby(e);
          });
          return;
        }
        b(e);
      }
    }
    async function f(e) {
      var t;
      try {
        t = await m();
      } catch (e) {
        o(
          "WAWebVoipHandleCallTransferFailed",
        ).showCallTransferCouldNotConnectToast();
        return;
      }
      e(t);
    }
    async function g(e) {
      var t = await h(),
        n = o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(e.rootCallId);
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
      (t != null && (await y(t, n))) || (await b(n));
    }
    async function h() {
      try {
        return await o("WAWebVoipStackInterface").getVoipStackInterface();
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
    }
    async function y(e, t) {
      if (e.type !== "windows") return !1;
      try {
        var n = o("WAWebContactCollection").ContactCollection.gadd(
            o("WAWebWidFactory").asUserWidOrThrow(t.peerWid),
            { silent: !0 },
          ),
          a = await e.openCallTransferLobby({
            rootCallId: t.rootCallId,
            rootCallCreator: t.rootCallCreatorJid,
            peerActiveDevice: t.peerActiveDeviceJid,
            peerJid: t.peerWid.toString(),
            peerName: C(n),
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
    }
    function C(e) {
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
    async function b(e) {
      var t = await o(
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
    }
    ((l.joinTransferableCallHere = p),
      (l.joinTransferableCallWithoutLobby = _));
  },
  98,
);
