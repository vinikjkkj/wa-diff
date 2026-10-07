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
    function d(t) {
      var n = t.callCreator,
        a = t.callId,
        i = t.isGroup,
        l = t.isVideo,
        d = t.offerTime;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip:handleIncomingCallOfferNotice: callId ",
            "",
          ])),
        a,
      );
      var m = c - (o("WATimeUtils").unixTime() - d);
      if (m <= 0) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip:handleIncomingCallOfferNotice: stale offer_notice",
            ])),
        );
        return;
      }
      var p = m * 1e3;
      if (
        (r("WAWebCallCollection").add(
          {
            id: a,
            isVideo: l,
            isGroup: i,
            offerTime: d,
            peerJid: n,
            isSilenced: !1,
          },
          { merge: !0 },
        ),
        i
          ? o("WAWebVoipGatingUtils").isGroupCallingEnabled()
          : o("WAWebVoipGatingUtils").isCallingEnabled())
      )
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip:handleIncomingCallOfferNotice unexpected ",
                " video=",
                " group=",
                "",
              ])),
            a,
            l,
            i,
          )
          .sendLogs("web-calling-enabled-offer-notice-received");
      else {
        var _ = o("WAWebWidFactory").asUserWidOrThrow(n);
        (r("WAWebCallNotificationBus").trigger("alert_call", {
          wid: _,
          msgId: a,
          isVideo: l,
          isGroup: i,
          isSilenced: !1,
        }),
          self.setTimeout(function () {
            r("WAWebCallNotificationBus").trigger("cancel_call", {
              wid: _,
              msgId: a,
            });
          }, p));
      }
      self.setTimeout(function () {
        var e = r("WAWebCallCollection").get(a);
        e && r("WAWebCallCollection").remove(e);
      }, p);
    }
    l.default = d;
  },
  98,
);
