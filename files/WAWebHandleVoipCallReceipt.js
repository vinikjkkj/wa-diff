__d(
  "WAWebHandleVoipCallReceipt",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))("callReceiptParser", function (e) {
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
    async function d(t) {
      var n = c.parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          Promise.reject(n.error)
        );
      var r = n.success,
        a = r.from,
        i = r.stanzaId,
        l = r.type;
      if (m()) {
        var s = await Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            o("WAWebVoipPeerTcToken").fetchPeerTcToken(a),
          ]),
          u = s[0],
          d = s[1];
        await (u == null
          ? void 0
          : u.handleIncomingSignalingReceipt(
              new (o("WAParsableWapNode").ParsableWapNode)("receipt", t),
              a.toString({ legacy: !0, formatIncludeDevice: !0 }),
              d,
            ));
      }
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(i),
        to: o("WAWebCommsWapMd").JID(a),
        class: "receipt",
        type: o("WAWap").MAYBE_CUSTOM_STRING(l),
      });
    }
    function m() {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] receipt dropped reason=not_inited",
                    ])),
                );
              },
            ),
            !1);
    }
    l.handleCallReceipt = d;
  },
  98,
);
