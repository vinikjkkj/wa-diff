__d(
  "WAWebEphemeralityFrontendUtils",
  ["WAWebEphemeralityUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebEphemeralityUtils",
      ).isEphemeralityDisabledForMessagingWithContact(e);
    }
    function s(e) {
      return u({ contact: e.contact, ephemeralDuration: e.ephemeralDuration });
    }
    function u(t) {
      var n = t.contact,
        r = t.ephemeralDuration;
      return e(n) && (r === 0 || r == null);
    }
    ((l.isEphemeralityDisabledInUIForContact = e),
      (l.isEphemeralityDisabledInUIForChat = s),
      (l.isEphemeralityDisabledInUIForChatValues = u));
  },
  98,
);
