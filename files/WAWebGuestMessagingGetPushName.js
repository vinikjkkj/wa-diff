__d(
  "WAWebGuestMessagingGetPushName",
  ["WAWebLidAwareContactsDB", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").get(e);
          return t != null && t.pushname != null ? t.pushname : null;
        })),
        s.apply(this, arguments)
      );
    }
    l.getPushName = e;
  },
  98,
);
