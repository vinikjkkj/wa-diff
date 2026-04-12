__d(
  "useWAWebSubscribedNewsletters",
  [
    "WANullthrows",
    "WAWebNewsletterCollection",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(!1),
        t = e[0],
        n = e[1];
      (o("useWAWebListener").useListeners(
        r("WAWebNewsletterCollection")
          .toArray()
          .filter(function (e) {
            return e.newsletterMetadata != null;
          })
          .map(function (e) {
            return {
              source: r("WANullthrows")(e.newsletterMetadata),
              eventOrEvents: "change:isSubscribedOrOwned",
              callback: function () {
                return n(!t);
              },
            };
          }),
      ),
        o("useWAWebListener").useListeners(
          r("WAWebNewsletterCollection")
            .toArray()
            .map(function (e) {
              return {
                source: r("WANullthrows")(e),
                eventOrEvents: [
                  "change:msgs",
                  "change:msgsChanged",
                  "change:pendingDeleteForMeCount",
                  "change:chatlistPreview",
                  "change:lastReactionPreview",
                  "change:active",
                ],
                callback: function () {
                  return n(!t);
                },
              };
            }),
        ));
      var a = r("useWAWebEventTargetValue")(
        r("WAWebNewsletterCollection"),
        ["add", "remove", "reset", "sort"],
        function () {
          return r("WAWebNewsletterCollection").filter(function (e) {
            var t;
            return (t = e.newsletterMetadata) == null
              ? void 0
              : t.isSubscribedOrOwned;
          });
        },
        [t],
      );
      return a;
    }
    l.default = u;
  },
  98,
);
