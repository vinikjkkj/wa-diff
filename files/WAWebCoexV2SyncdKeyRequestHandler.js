__d(
  "WAWebCoexV2SyncdKeyRequestHandler",
  [
    "WALogger",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2SyncdGating",
    "WAWebGetSyncKey",
    "WAWebRequestKeyShare",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdKeyTypes",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n,
        a = t.keyRequest;
      if (!(await o("WAWebCoexV2SyncdGating").isCoexV2SyncdEnabled())) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[coexv2] syncd: gate off, dropping the bot's key request",
            ])),
        );
        return;
      }
      var i = await o("WAWebGetSyncKey").getAllSyncKeysInTransaction(),
        l = new Set(
          i.map(function (e) {
            return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          }),
        ),
        c = r("compactMap")((n = a.keyIds) != null ? n : [], function (e) {
          return e.keyId;
        })
          .map(o("WAWebSyncdKeyTypes").toSyncKeyId)
          .filter(function (e) {
            return !l.has(o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e));
          });
      if (i.length === 0 && c.length === 0) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[coexv2] syncd: no keys to share with the bot",
            ])),
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[coexv2] syncd: sharing ",
            " keys with the bot, missing=[",
            "]",
          ])),
        i.length,
        c.map(o("WAWebSyncdCryptoUtils").syncKeyIdToHex),
      ),
        await o("WAWebRequestKeyShare").requestKeyShare(
          i,
          c,
          o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
        ));
    }
    l.handleCoexV2BotKeyRequest = c;
  },
  98,
);
