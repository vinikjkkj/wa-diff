__d(
  "WAWebNewsletterArchiveUtils",
  ["WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.isNewsletter() &&
        !o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
      );
    }
    l.shouldKeepChannelArchivedUntilMigration = e;
  },
  98,
);
