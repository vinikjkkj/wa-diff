__d(
  "WAWebEphemeralityFrontendUtils",
  ["WAWebEphemeralityUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o(
        "WAWebEphemeralityUtils",
      ).isEphemeralityDisabledForMessagingWithContact(e);
    }
    function s(t) {
      return (
        e(t.contact) &&
        (t.ephemeralDuration === 0 || t.ephemeralDuration == null)
      );
    }
    ((l.isEphemeralityDisabledInUIForContact = e),
      (l.isEphemeralityDisabledInUIForChat = s));
  },
  98,
);
