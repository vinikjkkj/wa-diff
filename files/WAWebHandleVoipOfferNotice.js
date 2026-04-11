__d(
  "WAWebHandleVoipOfferNotice",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("callOfferNoticeParser", function (
        e,
      ) {
        e.assertTag("call");
        var t = e.attrString("id"),
          n = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
          r = e.child("offer_notice"),
          a = o("WAWebJidToWid").deviceJidToDeviceWid(
            r.attrDeviceJid("call-creator"),
          ),
          i = r.attrString("call-id"),
          l = r.attrString("type"),
          s = r.attrString("media"),
          u = e.attrTime("t");
        return {
          stanzaId: t,
          fromWid: n,
          callCreator: a,
          callId: i,
          isGroup: l === "group",
          isVideo: s === "video",
          t: u,
        };
      });
    function c(t) {
      var r = u.parse(t);
      if (r.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            r.error.toString(),
          ),
          (s || (s = n("Promise"))).resolve("NO_ACK")
        );
      var a = r.success,
        i = a.callCreator,
        l = a.callId,
        c = a.fromWid,
        d = a.isGroup,
        m = a.isVideo,
        p = a.stanzaId,
        _ = a.t;
      return (
        o("WAWebBackendApi").frontendFireAndForget(
          "handleIncomingOfferNotice",
          {
            callCreatorJid: i.toString(),
            callId: l,
            offerTime: _,
            isVideo: m,
            isGroup: d,
          },
        ),
        (s || (s = n("Promise"))).resolve(
          o("WAWap").wap("ack", {
            to: o("WAWebCommsWapMd").JID(c),
            id: o("WAWap").CUSTOM_STRING(p),
            class: "call",
            type: o("WAWap").CUSTOM_STRING("offer_notice"),
          }),
        )
      );
    }
    l.default = c;
  },
  98,
);
