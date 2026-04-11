__d(
  "WAAckParser",
  ["WADeprecatedWapParser", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WADeprecatedWapParser"))("ack", function (e) {
      return (
        e.assertTag("ack"),
        {
          id: e.attrString("id"),
          ts: e.maybeAttrString("t"),
          class: e.attrString("class"),
          type: e.maybeAttrString("type"),
          from: e.attrJidWithType(),
          participant: e.hasAttr("participant")
            ? e.attrDeviceJid("participant")
            : null,
          recipient: e.hasAttr("recipient") ? e.attrUserJid("recipient") : null,
        }
      );
    });
    function s(e, t) {
      return (
        e.id === t.id &&
        (t.class === void 0 || e.class === t.class) &&
        (t.type === void 0 || e.type === t.type) &&
        (t.from === void 0 || u(e.from, t.from)) &&
        (t.participant === void 0 || e.participant === t.participant) &&
        (t.recipient === void 0 || e.recipient === t.recipient) &&
        (t.ts === void 0 || e.ts === t.ts)
      );
    }
    function u(e, t) {
      if (o("WAJids").extractFromJid(e) === t) return !0;
      if (e.userJid != null)
        return o("WAJids").defaultDeviceJidForUser(e.userJid) === t;
      if (e.deviceJid != null) {
        var n = e.deviceJid;
        return (
          o("WAJids").extractDeviceId(n) === 0 &&
          o("WAJids").extractUserJid(n) === t
        );
      }
      return !1;
    }
    ((l.AckParser = e), (l.ackMatchesTemplate = s), (l.fromJidsAreEqual = u));
  },
  98,
);
