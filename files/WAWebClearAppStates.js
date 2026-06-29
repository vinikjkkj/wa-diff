__d(
  "WAWebClearAppStates",
  [
    "WAWebConnModel",
    "WAWebMediaStorage",
    "WAWebUserPrefsClearLocalState",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      (o("WAWebMediaStorage").delistAndDeleteAllMedia(),
        o("WAWebUserPrefsClearLocalState").clearAllTemporaryStorageData(),
        n("cr:17219") == null ||
          (e = n("cr:17219").getWindowsBridge()) == null ||
          (e = e.getPreferences()) == null ||
          e.clean(),
        (o("WAWebConnModel").Conn.blockStoreAdds = !0));
    }
    l.default = e;
  },
  98,
);
