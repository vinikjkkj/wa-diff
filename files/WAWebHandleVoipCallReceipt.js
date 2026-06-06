__d(
  "WAWebHandleVoipCallReceipt",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebBackendApi",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "WAWebUserPrefsMeUser",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("callReceiptParser", function (e) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              (s || (s = n("Promise"))).reject(r.error)
            );
          var a = r.success,
            i = a.from,
            l = a.stanzaId,
            c = a.type,
            d = yield (s || (s = n("Promise"))).all([
              o("WAWebVoipStackInterface").getVoipStackInterface(),
              o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                wid: i,
              }),
            ]),
            m = d[0],
            p = d[1].tcToken;
          return (
            yield m == null
              ? void 0
              : m.handleIncomingSignalingReceipt(
                  new (o("WAParsableWapNode").ParsableWapNode)("receipt", t),
                  i.toString({ legacy: !0, formatIncludeDevice: !0 }),
                  p,
                ),
            o("WAWap").wap("ack", {
              id: o("WAWap").CUSTOM_STRING(l),
              to: o("WAWebCommsWapMd").JID(i),
              from: o("WAWebCommsWapMd").JID(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ),
              class: "receipt",
              type: o("WAWap").MAYBE_CUSTOM_STRING(c),
            })
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.handleCallReceipt = c;
  },
  98,
);
