__d(
  "useWAWebNewsletterHasProfilePictureDeletionAlerts",
  ["useWAWebEventTargetValue", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebModelValues").useModelValues(e, [
          "newsletterMetadata",
        ]),
        n = r("useWAWebEventTargetValue")(
          t.newsletterMetadata,
          ["change:hasProfilePictureDeletionAlerts"],
          function () {
            var e;
            return (
              ((e = t.newsletterMetadata) == null
                ? void 0
                : e.hasProfilePictureDeletionAlerts) === !0
            );
          },
        );
      return n;
    }
    l.useWAWebNewsletterHasProfilePictureDeletionAlerts = e;
  },
  98,
);
