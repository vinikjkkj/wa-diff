__d(
  "WAWebClearAppStates",
  [
    "WAWebConnModel",
    "WAWebMediaStorage",
    "WAWebUserPrefsClearLocalState",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e;
      (o("WAWebMediaStorage").delistAndDeleteAllMedia(),
        o("WAWebUserPrefsClearLocalState").clearAllTemporaryStorageData(),
        n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator").WAWebClearAppStates,
          )) == null ||
          (e = e.getPreferences()) == null ||
          e.clean(),
        (o("WAWebConnModel").Conn.blockStoreAdds = !0));
    }
    l.default = e;
  },
  98,
);
