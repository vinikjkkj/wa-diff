__d(
  "WAWebThreadLoggingIntegrity",
  ["WALogger", "WAWebThreadInteractionDataIntegrityWamEvent", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        t.forEach(function (e) {
          var t = e.threadDs,
            n = e.threadId,
            r = { threadDs: t, threadId: n },
            a = new (o(
              "WAWebThreadInteractionDataIntegrityWamEvent",
            ).ThreadInteractionDataIntegrityWamEvent)(r);
          a.commit();
        });
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
    l.ThreadInteractionIntegrityWamTrigger = s;
  },
  98,
);
