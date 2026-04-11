__d(
  "WAWebThreadLoggingNotification",
  ["WALogger", "WAWebThreadInteractionDataNotificationWamEvent", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        t.forEach(function (e) {
          var t = e.event,
            n = e.threadDs,
            r = e.threadId,
            a = t.contactInfo,
            i = { threadDs: n, threadId: r, isAGroup: a.isAGroup },
            l = new (o(
              "WAWebThreadInteractionDataNotificationWamEvent",
            ).ThreadInteractionDataNotificationWamEvent)(i);
          l.commit();
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ctlv2: error uploading Notification WAM event",
              ])),
          )
          .catching(t instanceof Error ? t : r("err")(String(t)))
          .sendLogs("thread-logging-notification-upload-failure");
      }
    }
    l.ThreadInteractionNotificationWamTrigger = s;
  },
  98,
);
