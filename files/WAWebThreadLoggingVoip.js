__d(
  "WAWebThreadLoggingVoip",
  [
    "WALogger",
    "WAWebThreadInteractionDataVoipWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataVoipFalcoEvent",
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
            "WAWebThreadInteractionDataVoipWamEvent",
          ).ThreadInteractionDataVoipWamEvent)(c(e));
          t.commit();
        }),
          await Promise.all(a));
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
    function u(e) {
      var t = c(e);
      return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(
        r("WamThreadInteractionDataVoipFalcoEvent"),
        function () {
          return {
            thread_ds: t.threadDs,
            thread_id: t.threadId,
            call_offers_received: t.callOffersReceived,
            call_offers_sent: t.callOffersSent,
            total_call_duration: t.totalCallDuration,
          };
        },
      );
    }
    function c(e) {
      var t = e.event,
        n = e.threadDs,
        r = e.threadId;
      return {
        threadDs: n,
        threadId: r,
        callOffersReceived: t.callOffersReceived,
        callOffersSent: t.callOffersSent,
        totalCallDuration: t.totalCallDuration,
      };
    }
    ((l.ThreadInteractionVoipWamTrigger = s),
      (l.logThreadInteractionVoipFalcoEvent = u));
  },
  98,
);
