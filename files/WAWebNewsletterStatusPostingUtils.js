__d(
  "WAWebNewsletterStatusPostingUtils",
  ["WAWebNewsletterCollection", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebNewsletterCollection")
        .getModelsArray()
        .filter(function (e) {
          return o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterStatusCreationEnabled(e.newsletterMetadata);
        });
    }
    l.getStatusPostableNewsletters = e;
  },
  98,
);
