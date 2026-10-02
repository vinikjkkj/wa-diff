__d(
  "WACreateHandleNotification",
  [
    "Promise",
    "WACreateHandleAccountSyncNotificationBranch",
    "WACreateHandleDevicesNotificationBranch",
    "WACreateHandleEncryptNotificationBranch",
    "WACreateHandleFbDeviceChangeNotificationBranch",
    "WACreateHandleFbMultiwayNotificationBranch",
    "WACreateHandleFbThreadNotificationBranch",
    "WACreateHandleGroupNotificationBranch",
    "WACreateHandleRtcE2eeCallEventNotificationBranch",
    "WACreateHandleServerNotificationBranch",
    "WACreateHandleServerSyncNotificationBranch",
    "WAResultOrError",
    "WARuntimeError",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WATagsLogger",
    "WAUnknownStanzaError",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = {
        encrypt: "encrypt",
        "w:gp2": "w:gp2",
        server: "server",
        server_sync: "server_sync",
        "fbid:devices": "fbid:devices",
        "fbid:thread": "fbid:thread",
        "fb:multiway": "fb:multiway",
        mediaretry: "mediaretry",
        picture: "picture",
        "fb:call": "fb:call",
        business: "business",
        contacts: "contacts",
        devices: "devices",
        disappearing_mode: "disappearing_mode",
        status: "status",
        account_sync: "account_sync",
        pay: "pay",
        psa: "psa",
        privacy_token: "privacy_token",
        link_code_companion_reg: "link_code_companion_reg",
      },
      _ = o("WATagsLogger").TAGS(["decision tree", "handleNotification"]);
    function f(t) {
      var a = o(
          "WACreateHandleEncryptNotificationBranch",
        ).createHandleEncryptNotification(t),
        i = o(
          "WACreateHandleServerNotificationBranch",
        ).createHandleServerNotification(t),
        l = o(
          "WACreateHandleServerSyncNotificationBranch",
        ).createHandleServerSyncNotification(t),
        f = o(
          "WACreateHandleGroupNotificationBranch",
        ).createHandleGroupNotification(t),
        g = o(
          "WACreateHandleAccountSyncNotificationBranch",
        ).createHandleAccountSyncNotification(t),
        h = o(
          "WACreateHandleDevicesNotificationBranch",
        ).createHandleDevicesNotification(t);
      return function (C, b, v) {
        _.DEV(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["start handling"])),
        );
        var y = o("WASmaxParseUtils").attrStringEnum(C, "type", p);
        return (m || (m = n("Promise")))
          .resolve()
          .then(function () {
            if (!y.success) return o("WAUnknownStanzaError").unknownStanzaError;
            var e = y.value;
            switch (e) {
              case "fbid:devices": {
                var n,
                  r =
                    (n = t.fb) == null
                      ? void 0
                      : n.handleFbDeviceChangeNotification;
                if (r)
                  return o(
                    "WACreateHandleFbDeviceChangeNotificationBranch",
                  ).createHandleFbDeviceChangeNotification(r)(C, v);
                break;
              }
              case "fb:call":
                return o(
                  "WACreateHandleRtcE2eeCallEventNotificationBranch",
                ).createHandleRtcE2eeCallEventNotification(t)(C);
              case "fbid:thread": {
                var s,
                  u =
                    (s = t.fb) == null ? void 0 : s.handleFbThreadNotification;
                if (u)
                  return o(
                    "WACreateHandleFbThreadNotificationBranch",
                  ).createHandleFbThreadNotification(u)(C);
                break;
              }
              case "fb:multiway": {
                var c,
                  d =
                    (c = t.fb) == null
                      ? void 0
                      : c.handleFbMultiwayNotification;
                if (d)
                  return o(
                    "WACreateHandleFbMultiwayNotificationBranch",
                  ).createHandleFbMultiwayNotification(d)(C);
                break;
              }
              case "encrypt":
                return a(C);
              case "server":
                return i(C);
              case "server_sync":
                return l(C);
              case "w:gp2":
                return f(C);
              case "devices":
                return h(C);
              case "account_sync":
                return g(C);
              case "mediaretry":
                break;
              case "picture":
                break;
              case "business":
                break;
              case "contacts":
                break;
              case "disappearing_mode":
                break;
              case "status":
                break;
              case "pay":
                break;
              case "psa":
                break;
              case "privacy_token":
                break;
              case "link_code_companion_reg":
                break;
              default:
            }
            return o("WAUnknownStanzaError").unknownStanzaError;
          })
          .catch(function (e) {
            return e instanceof o("WASmaxParsingFailure").SmaxParsingFailure
              ? o("WAUnknownStanzaError").unknownStanzaError
              : o("WARuntimeError").runtimeError(r("getErrorSafe")(e));
          })
          .then(function (e) {
            if (e.success) return e;
            y.value === "fb:call" &&
              _.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "RTC notification error: ",
                    "",
                  ])),
                e.error,
              );
            var t = o(
                "WASmaxNotificationFallbackGenericNotificationRPC",
              ).receiveGenericNotificationRPC(C),
              n = t.makeGenericNotificationResponseAck,
              r = t.makeGenericNotificationResponseBadStanza;
            return e.error.type === "unknown-stanza"
              ? (_.WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "received unknown notifcation: ",
                      "",
                    ])),
                  C.toString(),
                ),
                o("WAResultOrError").makeResult(r({ ackError: 487 })))
              : (e.error.type,
                _.WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "runtime-error: ",
                      "",
                    ])),
                  e.error.error.message,
                ),
                _.ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "runtime-error: ",
                      "",
                    ])),
                  e.error.error,
                ),
                o("WAResultOrError").makeResult(n()));
          });
      };
    }
    l.createHandleNotification = f;
  },
  98,
);
