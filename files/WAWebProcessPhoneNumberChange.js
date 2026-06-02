__d(
  "WAWebProcessPhoneNumberChange",
  ["WAJids", "WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAJids").validateChatJid(e.toJid()),
        r = o("WAJids").validateChatJid(t.toJid());
      if (!(n == null || r == null))
        return o("WAWebBackendApi").frontendFireAndForget(
          "updateNoteJidAction",
          { oldJid: n, newJid: r },
        );
    }
    l.default = e;
  },
  98,
);
