__d(
  "WACreateHandleGroupNotificationBranch",
  [
    "Promise",
    "WAParseGroupNotifications",
    "WAResultOrError",
    "WATagsLogger",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS(["decision tree", "handleGroupNotification"]);
    function c(t) {
      var r,
        a = (r = t.groupMessage) != null ? r : {},
        i = a.handleGroupNotification;
      return function (r) {
        if (
          (u.LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(["start handling"])),
          ),
          i != null)
        ) {
          var t = o("WAParseGroupNotifications").parseGroupNotification(r);
          if (t.action.type !== "unknown") {
            var a = t.ack,
              l = t.action,
              c = t.id,
              d = t.offline,
              m = t.serverTs;
            return i({
              makeAck: a,
              action: l,
              offline: d,
              serverTs: m,
              id: c,
            }).then(o("WAResultOrError").makeResult);
          }
        }
        return (s || (s = n("Promise"))).resolve(
          o("WAUnknownStanzaError").unknownStanzaError,
        );
      };
    }
    l.createHandleGroupNotification = c;
  },
  98,
);
