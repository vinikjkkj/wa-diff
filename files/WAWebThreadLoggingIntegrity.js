__d(
  "WAWebThreadLoggingIntegrity",
  [
    "WALogger",
    "WAWebThreadInteractionDataIntegrityWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataIntegrityFalcoEvent",
    "getErrorSafe",
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
            "WAWebThreadInteractionDataIntegrityWamEvent",
          ).ThreadInteractionDataIntegrityWamEvent)(c(e));
          t.commit();
        }),
          await Promise.all(a));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ctlv2: error uploading Integrity WAM event",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("thread-logging-integrity-upload-failure");
      }
    }
    function u(e) {
      var t = c(e);
      return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(
        r("WamThreadInteractionDataIntegrityFalcoEvent"),
        function () {
          return { thread_ds: t.threadDs, thread_id: t.threadId };
        },
      );
    }
    function c(e) {
      var t = e.threadDs,
        n = e.threadId;
      return { threadDs: t, threadId: n };
    }
    ((l.ThreadInteractionIntegrityWamTrigger = s),
      (l.logThreadInteractionIntegrityFalcoEvent = u));
  },
  98,
);
