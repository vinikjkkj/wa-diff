__d(
  "WAWebVoipBackendEnqueueCallOfferPlaceholder",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebMessageQueue",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallLogPlaceholderTracker",
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
        var n = o("WAWebVoipCallOfferStanzaParser").parseCallOfferStanza(e);
        n != null &&
          (o("WAWebUserPrefsMeUser").isMeAccount(n.callCreator) ||
            o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(
              n.callId,
            ) ||
            (o("WAWebVoipCallLogPlaceholderTracker").markPlaceholderPending(
              n.callId,
            ),
            u(n)));
      }
    }
    function u(t) {
      var n,
        a = (n = t.groupJid) != null ? n : t.callCreator;
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
