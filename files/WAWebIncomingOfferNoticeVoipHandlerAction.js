__d(
  "WAWebIncomingOfferNoticeVoipHandlerAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCallCollection",
    "WAWebCallNotificationBus",
    "WAWebVoipGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 45;
    function d(t, n, a, i, l) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip:handleIncomingCallOfferNotice: callId ",
              "",
            ])),
          n,
        ),
        o("WATimeUtils").unixTime() - a > c)
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip:handleIncomingCallOfferNotice: stale offer_notice",
            ])),
        );
        return;
      }
      (r("WAWebCallCollection").add(
        {
          id: n,
          isVideo: i,
          isGroup: l,
          offerTime: a,
          peerJid: t,
          isSilenced: !1,
        },
        { merge: !0 },
      ),
        o("WAWebVoipGatingUtils").isCallingEnabled()
          ? o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:handleIncomingCallOfferNotice unexpected ",
                    " video=",
                    " group=",
                    "",
                  ])),
                n,
                i,
                l,
              )
              .sendLogs("web-calling-enabled-offer-notice-received")
          : r("WAWebCallNotificationBus").trigger("alert_call", {
              wid: o("WAWebWidFactory").asUserWidOrThrow(t),
              msgId: n,
              isVideo: i,
              isGroup: l,
              isSilenced: !1,
            }),
        self.setTimeout(function () {
          r("WAWebCallNotificationBus").trigger("cancel_call", { wid: t });
          var e = r("WAWebCallCollection").get(n);
          e && r("WAWebCallCollection").remove(e);
        }, c * 1e3));
    }
    l.default = d;
  },
  98,
);
