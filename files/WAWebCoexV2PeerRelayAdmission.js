__d(
  "WAWebCoexV2PeerRelayAdmission",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebCoexV2GatingUtils",
    "WAWebCreateNackFromStanza",
    "WAWebMsgProcessingApiUtils",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.metaFrom;
      return t == null ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, t) ||
        o("WAWebUserPrefsMeUser").isMeAccount(t)
        ? null
        : t;
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i;
          try {
            var l;
            i =
              (l = yield o("WAWebApiContact").getContactRecord(a)) == null
                ? void 0
                : l.isHosted;
          } catch (n) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to read peer hosted state",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("coexv2-peer-hosted-state-read-failed"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(t),
              o("WAWebCreateNackFromStanza").NackReason.DBOperationFailed
            );
          }
          return i === !1
            ? (o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] relay dropped: peer is not hosted",
                    ])),
                )
                .sendLogs("coexv2-relay-peer-not-hosted"),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropForCoexV2RelayOrHostedCompanion(
                t,
                o("WAWebMsgProcessingApiUtils").getFrom(n),
              ),
              o("WAWebCreateNackFromStanza").NackReason
                .InvalidHostedCompanionStanza)
            : null;
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getCoexV2PeerRelaySender = u), (l.checkCoexV2PeerRelayAdmission = c));
  },
  98,
);
