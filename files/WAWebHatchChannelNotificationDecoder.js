__d(
  "WAWebHatchChannelNotificationDecoder",
  ["WALogger", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "approval_request";
    function u(t) {
      var n,
        r = (n = o("WAWebHatchJsonReaders")).readField(t, "presentation"),
        a = n.readTrimmedString(t, "deduplication_key"),
        i = n.readTrimmedString(t, "channel_notification_type"),
        l = n.readTrimmedString(t, "source_subject_id"),
        s = n.readTrimmedString(r, "title"),
        u = n.readTrimmedString(r, "body"),
        c = d([
          ["presentation", r == null ? "" : "present"],
          ["deduplication_key", a],
          ["channel_notification_type", i],
          ["source_subject_id", l],
          ["title", s],
          ["body", u],
        ]);
      return c != null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-notification: dropping notification missing ",
                  "",
                ])),
              c,
            )
            .sendLogs("hatch-notification-missing-field"),
          null)
        : {
            deduplicationKey: a,
            notificationType: i,
            subjectId: l,
            title: s,
            body: u,
            expiresAtMs: o("WAWebHatchJsonReaders").readNumber(
              t,
              "notification_expires_at_ms",
            ),
          };
    }
    function c(e) {
      var t = e.deduplicationKey,
        n = e.expiresAtMs,
        r = e.notificationType,
        o = e.subjectId;
      return {
        notificationType: r,
        subjectId: o,
        deduplicationKey: t,
        expiresAtMs: n,
      };
    }
    function d(e) {
      var t;
      return (t = e.find(function (e) {
        var t = e[1];
        return o("WAWebHatchJsonReaders").isBlankText(t);
      })) == null
        ? void 0
        : t[0];
    }
    ((l.HATCH_NOTIFICATION_TYPE_APPROVAL_REQUEST = s),
      (l.decodeHatchChannelNotification = u),
      (l.summarizeHatchChannelNotification = c));
  },
  98,
);
