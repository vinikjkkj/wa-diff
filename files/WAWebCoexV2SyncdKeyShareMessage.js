__d(
  "WAWebCoexV2SyncdKeyShareMessage",
  [
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2RelayOneShotEncrypt",
    "WAWebCoexV2SendContribution",
    "WAWebCoexV2SyncdGating",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMsgKey",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgCommonApi",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.keyShare;
      if (
        (await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd(),
        !(await o("WAWebCoexV2SyncdGating").isCoexV2SyncdEnabled()))
      ) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[coexv2] syncd: gate off, dropping the key share to the bot",
            ])),
        );
        return;
      }
      var a = o("WAWebUserUtils").getMeLidUserOrThrow(),
        i = await o("WAWebCoexV2RelayOneShotEncrypt").encryptForCoexV2Bot({
          forceFetch: !0,
          plaintext: o("WAWebSendMsgCommonApi").encodeAndPad({
            protocolMessage: {
              type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .APP_STATE_SYNC_KEY_SHARE,
              appStateSyncKeyShare: n,
            },
          }),
        }),
        l = i.ciphertext,
        u = i.type,
        c = await r("WAWebMsgKey").newId(),
        d = await o("WAWebAdvSignatureApi").getADVEncodedIdentity(),
        m = o("WAWebCoexV2SendContribution").genCoexV2BotNode({
          agentEngagementType: null,
          botAttrs: null,
          destinationWids: [a],
          isFeedback: !1,
          personaType: null,
          sharedEnc: o("WAWap").wap(
            "enc",
            {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(u),
            },
            l,
          ),
        });
      await o(
        "WAWebDeprecatedSendIqWorkerCompatible",
      ).deprecatedSendStanzaAndWaitForAck(
        o("WAWap").wap(
          "message",
          {
            to: o("WAWebCommsWapMd").USER_JID(a),
            id: o("WAWap").CUSTOM_STRING(c),
            category: "peer",
            type: "text",
            push_priority: "high",
          },
          m,
          o("WAWap").wap("device-identity", null, d),
        ),
        o("WAWebCommsAckParser").toCoreAckTemplate({
          id: c,
          class: "message",
          from: a,
          participant: null,
        }),
      );
      var p = n.keys.filter(function (e) {
        return e.keyData == null;
      }).length;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[coexv2] syncd key share ",
            " sent to the bot with ",
            " keys, ",
            " key IDs only",
          ])),
        c,
        n.keys.length - p,
        p,
      );
    }
    l.sendCoexV2SyncdKeyShare = u;
  },
  98,
);
