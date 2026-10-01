__d(
  "WAWebThreadLoggingVoip",
  [
    "Promise",
    "WALogger",
    "WAWebThreadInteractionDataVoipWamEvent",
    "WAWebThreadLoggingFalco",
    "WamThreadInteractionDataVoipFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
                "WAWebThreadInteractionDataVoipWamEvent",
              ).ThreadInteractionDataVoipWamEvent)(m(e));
              t.commit();
            }),
              yield (s || (s = n("Promise"))).all(i));
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = m(e);
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
    function m(e) {
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
    ((l.ThreadInteractionVoipWamTrigger = u),
      (l.logThreadInteractionVoipFalcoEvent = d));
  },
  98,
);
