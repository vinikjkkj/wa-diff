__d(
  "WAWebHandlePrivacyTokensNotification",
  [
    "Promise",
    "WAByteArray",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebEnvironment",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJidToWid",
    "WAWebPresenceCollection",
    "WAWebSetTcTokenChatAction",
    "asyncToGeneratorRuntime",
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.ts,
            r = o("WAWebJidToWid").userJidToUserWid(e.from),
            a =
              e.senderLid != null
                ? o("WAWebJidToWid").lidUserJidToUserLid(e.senderLid)
                : null;
          t.type === "trusted_contact" &&
            (yield o("WAWebSetTcTokenChatAction").handleIncomingTcToken(
              r,
              a,
              n,
              t.content,
            ),
            yield o(
              "WAWebPresenceCollection",
            ).PresenceCollection.reSubscribeWhenActive(r));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = m.parse(e);
          if (t.error)
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "error while parsing: ",
                    "",
                  ])),
                e.toString(),
              ),
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                t.error.toString(),
              ),
              t.error
            );
          var a = t.success,
            i = o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(a.id),
              class: "notification",
              to: o("WAWap").JID(a.from),
              type: "privacy_token",
            });
          return (
            r("WAWebEnvironment").isGuest ||
              (yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd(),
              yield (c || (c = n("Promise"))).all(
                a.privacyTokens.map(function (e) {
                  return p(a, e);
                }),
              )),
            i
          );
        })),
        g.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
