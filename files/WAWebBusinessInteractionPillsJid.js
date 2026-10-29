__d(
  "WAWebBusinessInteractionPillsJid",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    var e = /^[1-9][0-9]{4,19}@s\.whatsapp\.net$/;
    function s(t) {
      return o("WAJids").validateLidUserJid(t) != null || e.test(t)
        ? o("WAJids").validateUserJid(t)
        : null;
    }
    l.validateBusinessJid = s;
  },
  98,
);
