__d(
  "WAWebHandlePrivacyTokensNotification",
  [
    "WAByteArray",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebEnvironment",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJidToWid",
    "WAWebPresenceCollection",
    "WAWebSetTcTokenChatAction",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = function (t) {
        var e = o("WAByteArray").uint8ArrayToBuffer(t.contentBytes());
        return { type: "trusted_contact", content: e, ts: t.attrTime("t") };
      },
      m = new (r("WADeprecatedWapParser"))(
        "incomingPrivacyTokensParser",
        function (t) {
          t.assertTag("notification");
          var n = t.attrString("id"),
            r = t.attrUserJid("from"),
            a = t.maybeAttrLidUserJid("sender_lid"),
            i = t.child("tokens"),
            l = [];
          return (
            i.forEachChildWithTag("token", function (t) {
              var n = t.attrString("type");
              switch (n) {
                case "trusted_contact":
                  l.push(d(t));
                  break;
                default:
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "incomingPrivacyTokensParser - receiving an unknown type: ",
                        "",
                      ])),
                    n,
                  );
              }
            }),
            { id: n, from: r, senderLid: a, privacyTokens: l }
          );
        },
      );
    async function p(e, t) {
      var n = t.ts,
        r = o("WAWebJidToWid").userJidToUserWid(e.from),
        a =
          e.senderLid != null
            ? o("WAWebJidToWid").lidUserJidToUserLid(e.senderLid)
            : null;
      if (t.type === "trusted_contact") {
        await o("WAWebSetTcTokenChatAction").handleIncomingTcToken(
          r,
          a,
          n,
          t.content,
        );
        var i = _(r, a);
        await o(
          "WAWebPresenceCollection",
        ).PresenceCollection.reSubscribeWhenActive(i);
      }
    }
    function _(e, t) {
      if (e.isLid()) return e;
      if (t != null) return t;
      throw (
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "PrivacyTokenNotification without a lid: from: ",
                "",
              ])),
            e.toLogString(),
          )
          .sendLogs("privacy-token-notification-without-lid"),
        r("err")("privacy-token-notification-without-lid")
      );
    }
    async function f(e) {
      var t = m.parse(e);
      if (t.error)
        throw (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "error while parsing: ",
                "",
              ])),
            e.toString(),
          ),
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          t.error
        );
      var n = t.success,
        a = o("WAWap").wap("ack", {
          id: o("WAWap").CUSTOM_STRING(n.id),
          class: "notification",
          to: o("WAWap").JID(n.from),
          type: "privacy_token",
        });
      return (
        r("WAWebEnvironment").isGuest ||
          (await o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd(),
          await Promise.all(
            n.privacyTokens.map(function (e) {
              return p(n, e);
            }),
          )),
        a
      );
    }
    l.default = f;
  },
  98,
);
