__d(
  "WAWebProcessPhoneNumberChange",
  ["WAJids", "WAWebBackendApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").validateChatJid(e.toJid()),
            r = o("WAJids").validateChatJid(t.toJid());
          if (!(n == null || r == null))
            return o("WAWebBackendApi").frontendFireAndForget(
              "updateNoteJidAction",
              { oldJid: n, newJid: r },
            );
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
