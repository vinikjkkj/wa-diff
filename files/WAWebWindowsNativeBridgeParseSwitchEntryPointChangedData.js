__d(
  "WAWebWindowsNativeBridgeParseSwitchEntryPointChangedData",
  ["WAWebVoipJsonParserNative", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (t == null) throw r("err")("Invalid switch entry point changed data");
      return {
        rootCallId: t.RootCallId,
        rootCallCreatorJid: t.RootCallCreator,
        peerActiveDeviceJid: t.PeerActiveDevice,
        peerWid: o("WAWebWidFactory").asUserWidOrThrow(
          o("WAWebWidFactory").createWid(t.PeerActiveDevice),
        ),
        isVideoCall: t.IsVideoCall,
        enabled: t.Enabled,
      };
    }
    l.parseWindowsSwitchEntryPointChangedData = e;
  },
  98,
);
