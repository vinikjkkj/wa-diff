__d(
  "WACreateHandleRtcE2eeCallEventNotificationBranch",
  [
    "Promise",
    "WAParseRtcE2eeCallEventNotification",
    "WAResultOrError",
    "WATagsLogger",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS(["decision tree", "handleRtcE2eeCallEvent"]);
    function c(t) {
      var r,
        a = (r = t.call) != null ? r : {},
        i = a.handleRtcE2eeCallEvent;
      return function (r) {
        return (
          u.LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(["start handling"])),
          ),
          i == null
            ? (s || (s = n("Promise"))).resolve(
                o("WAUnknownStanzaError").unknownStanzaError,
              )
            : i(
                o(
                  "WAParseRtcE2eeCallEventNotification",
                ).parseRtcE2eeCallEventNotification(r),
              ).then(o("WAResultOrError").makeResult)
        );
      };
    }
    l.createHandleRtcE2eeCallEventNotification = c;
  },
  98,
);
