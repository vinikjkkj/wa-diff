__d(
  "WAWebThreadLoggingNotification",
  [
    "Promise",
    "WALogger",
    "WAWebThreadInteractionDataNotificationWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataNotificationFalcoEvent",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [];
          try {
            (t.forEach(function (e) {
              if (a) {
                i.push(d(e));
                return;
              }
              var t = new (o(
                "WAWebThreadInteractionDataNotificationWamEvent",
              ).ThreadInteractionDataNotificationWamEvent)(m(e));
              t.commit();
            }),
              yield (s || (s = n("Promise"))).all(i));
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = m(e);
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
    function m(e) {
      var t = e.event,
        n = e.threadDs,
        r = e.threadId,
        o = t.contactInfo;
      return { threadDs: n, threadId: r, isAGroup: o.isAGroup };
    }
    ((l.ThreadInteractionNotificationWamTrigger = u),
      (l.logThreadInteractionNotificationFalcoEvent = d));
  },
  98,
);
