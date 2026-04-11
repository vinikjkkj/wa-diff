__d(
  "WAWebThreadLoggingVoip",
  ["WALogger", "WAWebThreadInteractionDataVoipWamEvent", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        t.forEach(function (e) {
          var t = e.event,
            n = e.threadDs,
            r = e.threadId,
            a = {
              threadDs: n,
              threadId: r,
              callOffersReceived: t.callOffersReceived,
              callOffersSent: t.callOffersSent,
              totalCallDuration: t.totalCallDuration,
            },
            i = new (o(
              "WAWebThreadInteractionDataVoipWamEvent",
            ).ThreadInteractionDataVoipWamEvent)(a);
          i.commit();
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ctlv2: error uploading Voip WAM event",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("thread-logging-voip-upload-failure");
      }
    }
    l.ThreadInteractionVoipWamTrigger = s;
  },
  98,
);
