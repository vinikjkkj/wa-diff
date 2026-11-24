__d(
  "WAWebVoipBackendEnqueueCallOfferPlaceholder",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebUserUtils",
    "WAWebVoipCallLogPlaceholderTracker",
    "WAWebVoipCallOfferRingWindow",
    "WAWebVoipCallOfferStanzaParser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t;
      if (
        e.tag === "call" &&
        o(
          "WAWebVoipCallLogPlaceholderTracker",
        ).isOfflineCallLogOrderingEnabled() &&
        ((t = e.attrs) == null ? void 0 : t.offline) != null
      ) {
        var n = o("WAWebVoipCallOfferStanzaParser").parseCallOffer(e);
        if (n != null) {
          var r = n.placeholderProps;
          o("WAWebUserUtils").isMeAccount(r.callCreator) ||
            o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(
              r.callId,
            ) ||
            o("WAWebVoipCallOfferRingWindow").canCallOfferStillRing(n) ||
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderPending(
              r.callId,
            ),
            u(r));
        }
      }
    }
    function u(t) {
      var n;
      o("WAWebBackendApi").frontendFireAndForget(
        "prefetchCallOfferPlaceholderTarget",
        t,
      );
      var a = (n = t.groupJid) != null ? n : t.callCreator;
      o("WAWebMessageQueue")
        .onMessageQueue({
          chatWid: a,
          isOffline: !0,
          msgCategory: null,
          action: function () {
            return o("WAWebBackendApi").frontendSendAndReceive(
              "writeCallOfferPlaceholder",
              t,
            );
          },
        })
        .catch(function (e) {
          return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
            e,
            "voip_call_offer_placeholder",
          );
        })
        .catch(function (n) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] placeholder queue/bridge failed for callId=",
                  "",
                ])),
              t.callId,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("voip-placeholder-backend-queue-fail"),
            o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderResolved(
              t.callId,
            ));
        });
    }
    ((l.maybeEnqueueCallOfferPlaceholderFromStanza = s),
      (l.enqueueCallOfferPlaceholder = u));
  },
  98,
);
