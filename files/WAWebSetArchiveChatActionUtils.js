__d(
  "WAWebSetArchiveChatActionUtils",
  ["WAWebSettingsGetters", "WAWebSettingsModel"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !o("WAWebSettingsGetters").getShowArchiveV2(
        r("WAWebSettingsModel"),
      );
    }
    l.shouldUnarchiveChat = e;
  },
  98,
);
