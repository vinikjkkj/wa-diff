__d(
  "WAWebClearAppStatesAsync",
  [
    "WAWebConnModel",
    "WAWebMediaStorage",
    "WAWebUserPrefsClearLocalState",
    "asyncToGeneratorRuntime",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          (o("WAWebMediaStorage").delistAndDeleteAllMedia(),
            o("WAWebUserPrefsClearLocalState").clearAllTemporaryStorageData(),
            n("cr:17219") == null ||
              (e = n("cr:17219").getWindowsBridge()) == null ||
              (e = e.getPreferences()) == null ||
              e.clean(),
            (o("WAWebConnModel").Conn.blockStoreAdds = !0));
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
