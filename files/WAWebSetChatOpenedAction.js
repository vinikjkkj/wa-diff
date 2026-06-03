__d(
  "WAWebSetChatOpenedAction",
  ["WAWebDBUpdateChatTable", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { hasOpened: !0 };
          (yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, t),
            e.set(t));
        })),
        s.apply(this, arguments)
      );
    }
    l.setChatHasOpened = e;
  },
  98,
);
