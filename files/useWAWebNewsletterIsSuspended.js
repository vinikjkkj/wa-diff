__d(
  "useWAWebNewsletterIsSuspended",
  ["useWAWebEventTargetValue", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebModelValues").useModelValues(e, [
          "newsletterMetadata",
        ]),
        n = r("useWAWebEventTargetValue")(
          t.newsletterMetadata,
          ["change:suspended"],
          function () {
            var e;
            return (
              ((e = t.newsletterMetadata) == null ? void 0 : e.suspended) === !0
            );
          },
        );
      return n;
    }
    l.useNewsletterIsSuspended = e;
  },
  98,
);
