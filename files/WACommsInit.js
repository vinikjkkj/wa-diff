__d(
  "WACommsInit",
  [
    "WAComms",
    "WADeviceRegistrationGating",
    "WAGzip",
    "WAInitAndGetAuthKeyPair",
    "WALogger",
    "WAMockServerShell",
    "WASendPresenceStatusProtocol",
    "WAWaitForComms",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i = t.fullCommsSync,
            l = t.getCommsConfig,
            c = t.oneQueue,
            d = t.regInfo,
            m = t.stanzaHandler,
            p;
          if (
            o("WADeviceRegistrationGating").isAtomicDeviceRegistrationEnabled()
          ) {
            if (d.authKeyPair == null) throw r("err")("authKeyPair not set");
            p = d.authKeyPair;
          } else
            p = yield o("WAInitAndGetAuthKeyPair").initAndGetAuthKeyPair(d);
          var _ = yield l({ authKeyPair: p }),
            f =
              (n = _.handlers) == null
                ? void 0
                : n.onOptimisticConnectionChange,
            g = (a = _.handlers) == null ? void 0 : a.onConnectionChange,
            h = !1,
            y = function (n) {
              (n === "in_handshake"
                ? h === !1 && (h = !0)
                : n === "connected"
                  ? (i === !0 &&
                      (o("WAWaitForComms").unblockComms(),
                      o("WASendPresenceStatusProtocol")
                        .sendPresenceStatusProtocol({ status: "available" })
                        .catch(function (t) {
                          o("WALogger").ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "sendPresenceStatusProtocol available failed with error ",
                                "",
                              ])),
                            t,
                          );
                        })),
                    c.newConnection(),
                    (h = !1))
                  : n === "disconnected" &&
                    (i === !0 && o("WAWaitForComms").commsConnectionLost(),
                    c.connectionDropped(),
                    (h = !1)),
                g == null || g(n));
            },
            C = function (t) {
              (t === "connected"
                ? i === !1 &&
                  o("WASendPresenceStatusProtocol")
                    .sendPresenceStatusProtocol({ status: "available" })
                    .catch(function (e) {
                      o("WALogger").ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "sendPresenceStatusProtocol available failed with error ",
                            "",
                          ])),
                        e,
                      );
                    })
                : t === "disconnected" &&
                  o("WASendPresenceStatusProtocol")
                    .sendPresenceStatusProtocol({ status: "unavailable" })
                    .catch(function (e) {
                      o("WALogger").ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "sendPresenceStatusProtocol unavailable failed with error ",
                            "",
                          ])),
                        e,
                      );
                    }),
                f == null || f(t));
            };
          ((_.handlers.onConnectionChange = y),
            (_.handlers.onOptimisticConnectionChange = C),
            o("WAComms").startComms(
              m,
              _,
              o("WAGzip").gzipInflate,
              !o("WAMockServerShell").isMockServerMode,
            ),
            o("WAMockServerShell").isMockServerMode &&
              o("WAMockServerShell").getMockServer != null &&
              (o("WAWaitForComms").unblockComms(), c.newConnection()));
        })),
        d.apply(this, arguments)
      );
    }
    l.initComms = c;
  },
  98,
);
