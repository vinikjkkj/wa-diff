__d(
  "WAWebHandleVoipCallReceipt",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new (r("WADeprecatedWapParser"))("callReceiptParser", function (e) {
        e.assertTag("receipt");
        var t =
          e.maybeChild("offer") ||
          e.maybeChild("accept") ||
          e.maybeChild("reject");
        if (!t) throw e.createParseError("Unrecognized call stanza");
        return {
          stanzaId: e.attrString("id"),
          type: e.maybeAttrString("type"),
          from: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
        };
      });
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d.parse(e);
          if (t.error)
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                t.error.toString(),
              ),
              (c || (c = n("Promise"))).reject(t.error)
            );
          var r = t.success,
            a = r.from,
            i = r.stanzaId,
            l = r.type;
          if (_()) {
            var s = yield (c || (c = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                o("WAWebVoipPeerTcToken").fetchPeerTcToken(a),
              ]),
              m = s[0],
              p = s[1];
            yield m == null
              ? void 0
              : m.handleIncomingSignalingReceipt(
                  new (o("WAParsableWapNode").ParsableWapNode)("receipt", e),
                  a.toString({ legacy: !0, formatIncludeDevice: !0 }),
                  p,
                );
          }
          return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(i),
            to: o("WAWebCommsWapMd").JID(a),
            class: "receipt",
            type: o("WAWap").MAYBE_CUSTOM_STRING(l),
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: call receipt dropped reason=worker_realm",
              ])),
          ),
          !1)
        : o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited() ||
            !o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled()
          ? !0
          : (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] receipt dropped reason=not_inited",
                    ])),
                );
              },
            ),
            !1);
    }
    l.handleCallReceipt = m;
  },
  98,
);
