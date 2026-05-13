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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = function (t) {
        var e = o("WAByteArray").uint8ArrayToBuffer(t.contentBytes());
        return { type: "trusted_contact", content: e, ts: t.attrTime("t") };
      },
      p = new (r("WADeprecatedWapParser"))(
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
                  l.push(m(t));
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
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.ts,
            r = o("WAWebJidToWid").userJidToUserWid(e.from),
            a =
              e.senderLid != null
                ? o("WAWebJidToWid").lidUserJidToUserLid(e.senderLid)
                : null;
          if (t.type === "trusted_contact") {
            yield o("WAWebSetTcTokenChatAction").handleIncomingTcToken(
              r,
              a,
              n,
              t.content,
            );
            var i = g(r, a);
            yield o(
              "WAWebPresenceCollection",
            ).PresenceCollection.reSubscribeWhenActive(i);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p.parse(e);
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
              yield (d || (d = n("Promise"))).all(
                a.privacyTokens.map(function (e) {
                  return _(a, e);
                }),
              )),
            i
          );
        })),
        y.apply(this, arguments)
      );
    }
    l.default = h;
  },
  98,
);
