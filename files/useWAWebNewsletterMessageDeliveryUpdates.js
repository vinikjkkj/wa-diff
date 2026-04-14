__d(
  "useWAWebNewsletterMessageDeliveryUpdates",
  ["useWAWebEventTargetValue", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebModelValues").useModelValues(e, [
          "newsletterMetadata",
        ]),
        n = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["messageDeliveryUpdates"],
        ),
        a = r("useWAWebEventTargetValue")(
          n == null ? void 0 : n.messageDeliveryUpdates,
          ["add", "remove", "reset", "change"],
          function () {
            return n == null ? void 0 : n.messageDeliveryUpdates.toArray();
          },
        );
      return a;
    }
    l.useNewsletterMessageDeliveryUpdates = e;
  },
  98,
);
