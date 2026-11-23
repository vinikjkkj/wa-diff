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
    "WASmaxDecisionTreeUtils",
    "WASmaxParseUtils",
    "WAStanzaRootTag",
    "WAWaitForComms",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t) {
      var n,
        a,
        i,
        l,
        c = t.fullCommsSync,
        m = t.getCommsConfig,
        p = t.oneQueue,
        _ = t.regInfo,
        f = t.stanzaHandler,
        g;
      if (o("WADeviceRegistrationGating").isAtomicDeviceRegistrationEnabled()) {
        if (_.authKeyPair == null) throw r("err")("authKeyPair not set");
        g = _.authKeyPair;
      } else g = await o("WAInitAndGetAuthKeyPair").initAndGetAuthKeyPair(_);
      var h = await m({ authKeyPair: g }),
        y = (n = h.handlers) == null ? void 0 : n.onOptimisticConnectionChange,
        C = (a = h.handlers) == null ? void 0 : a.onConnectionChange,
        b = (i = h.handlers) == null ? void 0 : i.onDisconnect,
        v = (l = h.handlers) == null ? void 0 : l.onHandleStanza,
        S = !1,
        R = null,
        L = function (n) {
          (n === "in_handshake"
            ? S === !1 && (S = !0)
            : n === "connected"
              ? (c === !0 &&
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
                p.newConnection(),
                (S = !1),
                (R = null))
              : n === "disconnected" &&
                (c === !0 && o("WAWaitForComms").commsConnectionLost(),
                (S = !1)),
            C == null || C(n));
        },
        E = function (t) {
          (t === "connected"
            ? c === !1 &&
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
            y == null || y(t));
        };
      ((h.handlers.onConnectionChange = L),
        (h.handlers.onOptimisticConnectionChange = E),
        (h.handlers.onHandleStanza = function (e, t, n) {
          (e.tag === o("WAStanzaRootTag").STANZA_ROOT_TAG.STREAM_ERROR &&
            (R = d(e)),
            v == null || v(e, t, n));
        }),
        (h.handlers.onDisconnect = function (e) {
          (p.connectionDropped({ reason: e, streamError: R }),
            b == null || b(e));
        }),
        o("WAComms").startComms(
          f,
          h,
          o("WAGzip").gzipInflate,
          !o("WAMockServerShell").isMockServerMode,
        ),
        o("WAMockServerShell").isMockServerMode &&
          o("WAMockServerShell").getMockServer != null &&
          (o("WAWaitForComms").unblockComms(), p.newConnection()));
    }
    function d(e) {
      var t = o("WASmaxDecisionTreeUtils").firstChild(e);
      if (!t.success) {
        var n = o("WASmaxParseUtils").attrString(e, "code");
        return n.success ? n.value : "unknown";
      }
      var r = o("WASmaxParseUtils").attrString(t.value, "class");
      return t.value.tag === "ack" && r.success
        ? "ack." + r.value
        : t.value.tag;
    }
    l.initComms = c;
  },
  98,
);
