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
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = c.parse(e);
          if (t.error)
            return (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                t.error.toString(),
              ),
              (u || (u = n("Promise"))).reject(t.error)
            );
          var r = t.success,
            a = r.from,
            i = r.stanzaId,
            l = r.type;
          if (p()) {
            var d = yield (u || (u = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                o("WAWebVoipPeerTcToken").fetchPeerTcToken(a),
              ]),
              m = d[0],
              _ = d[1];
            yield m == null
              ? void 0
              : m.handleIncomingSignalingReceipt(
                  new (o("WAParsableWapNode").ParsableWapNode)("receipt", e),
                  a.toString({ legacy: !0, formatIncludeDevice: !0 }),
                  _,
                );
          }
          return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(i),
            to: o("WAWebCommsWapMd").JID(a),
            class: "receipt",
            type: o("WAWap").MAYBE_CUSTOM_STRING(l),
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return !o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled() ||
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
        ? !0
        : (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
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
