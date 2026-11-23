__d(
  "WAWebThreadLoggingNotification",
  [
    "WALogger",
    "WAWebThreadInteractionDataNotificationWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataNotificationFalcoEvent",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = [];
      try {
        (t.forEach(function (e) {
          if (n) {
            a.push(u(e));
            return;
          }
          var t = new (o(
            "WAWebThreadInteractionDataNotificationWamEvent",
          ).ThreadInteractionDataNotificationWamEvent)(c(e));
          t.commit();
        }),
          await Promise.all(a));
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
    function u(e) {
      var t = c(e);
      return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(
        r("WamThreadInteractionDataNotificationFalcoEvent"),
        function () {
          return {
            thread_ds: t.threadDs,
            thread_id: t.threadId,
            is_a_group: t.isAGroup,
          };
        },
      );
    }
    function c(e) {
      var t = e.event,
        n = e.threadDs,
        r = e.threadId,
        o = t.contactInfo;
      return { threadDs: n, threadId: r, isAGroup: o.isAGroup };
    }
    ((l.ThreadInteractionNotificationWamTrigger = s),
      (l.logThreadInteractionNotificationFalcoEvent = u));
  },
  98,
);
