__d(
  "WAWebNewsletterInboxSearchLogging",
  ["WAWebUpdatesTabSearchWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o("WAWebUpdatesTabSearchWamEvent").UpdatesTabSearchWamEvent)(
        e,
      );
      t.commit();
    }
    l.logNewsletterInboxSearchEvent = e;
  },
  98,
);
