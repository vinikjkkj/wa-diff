__d(
  "WAWebEmptyChatSystemMsg",
  ["WAWebInitialSystemMsg", "WAWebMsgGetters", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebMsgGetters").getIsGroupMsg(e) && t.msgs.length === 0) {
            var n;
            return r("WAWebInitialSystemMsg")(
              t.id,
              t.contact.privacyMode,
              (n = t.contact.businessProfile) == null
                ? void 0
                : n.automatedType,
            );
          }
          return null;
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
