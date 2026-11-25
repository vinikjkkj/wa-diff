__d(
  "WAWebCoexV2SyncdCoexNode",
  [
    "WALogger",
    "WASmaxJsx",
    "WAWap",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2RelayOneShotEncrypt",
    "WAWebCoexV2SyncdKeyShare",
    "WAWebGetSyncKey",
    "WAWebProtobufsE2E.pb",
    "WAWebRequestKeyShare",
    "WAWebSignalCommonUtils",
    "encodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = t.collectionWithEncryptedMutations,
        r = o("WAWebCoexV2RelayOneShotEncrypt").warmCoexV2BotPrekeyBundle(),
        a = o("WAWebCoexV2SyncdKeyShare").buildCoexV2SyncdKeyShare({
          collectionWithEncryptedMutations: n,
        });
      if (a == null) return null;
      if (!r)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] syncd: no bot prekey bundle cached, sending the keys by peer message",
              ])),
          ),
          p(),
          null
        );
      var i = await o("WAWebCoexV2RelayOneShotEncrypt").encryptForCoexV2Bot({
          forceFetch: !1,
          plaintext: _(a),
        }),
        l = i.ciphertext,
        u = i.type;
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[coexv2] syncd: <coex> for ",
              " with ",
              " keys, ",
              " bytes",
            ])),
          Array.from(n.keys()),
          a.keys.length,
          l.byteLength,
        ),
        o("WASmaxJsx").smax(
          "coex",
          null,
          o("WASmaxJsx").smax(
            "bot",
            null,
            o("WASmaxJsx").smax(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(u),
              },
              l,
            ),
          ),
        )
      );
    }
    function m(e) {
      var t = e.collectionWithEncryptedMutations;
      (o("WAWebCoexV2RelayOneShotEncrypt").warmCoexV2BotPrekeyBundle(),
        o("WAWebCoexV2SyncdKeyShare").buildCoexV2SyncdKeyShare({
          collectionWithEncryptedMutations: t,
        }) != null &&
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] syncd: write sent before the <coex> code loaded, sending the keys by peer message",
              ])),
          ),
          p()));
    }
    async function p() {
      try {
        await o("WAWebRequestKeyShare").requestKeyShare(
          await o("WAWebGetSyncKey").getAllSyncKeysInTransaction(),
          [],
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] syncd: key share to the bot not queued",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("coexv2-syncd-key-share-queue-failed");
      }
    }
    function _(e) {
      var t = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsE2E.pb").Message$AppStateSyncKeyShareSpec,
        e,
      );
      return (
        o("WAWebSignalCommonUtils").writeRandomPadMax16(t),
        t.readByteArrayView()
      );
    }
    ((l.buildCoexV2SyncdCoexNode = d), (l.shareKeysForPlainWrite = m));
  },
  98,
);
