__d(
  "MetaPayVaultLabyrinthFetchAll",
  [
    "E2EEBackupUtil",
    "EBLoadSelfMinosEpochRootKeyForDecryption",
    "FBLogger",
    "MetaPayVaultLabyrinthFetchAllQuery.graphql",
    "PaymentLabyrinthDecrypt",
    "PaymentLabyrinthEnvelope",
    "WorkerRelay",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "maw-debug-dummy-primary-access-key-fingerprint",
      c =
        e !== void 0
          ? e
          : (e = n("MetaPayVaultLabyrinthFetchAllQuery.graphql"));
    async function d() {
      var e,
        t,
        n = await o("WorkerRelay").createWorkerQuery(c, {
          input: { device_key_fingerprint: u, entry_type: "DUMMY" },
        }),
        a =
          (e =
            n == null || (t = n.meta_pay_vault_entries) == null
              ? void 0
              : t.vault_entry_to_entry_key) != null
            ? e
            : [],
        i = await Promise.all(
          a.map(async function (e) {
            var t = e.entry,
              n = t == null ? void 0 : t.entry_fbid,
              a = t == null ? void 0 : t.entry_data;
            try {
              if (n == null || a == null)
                throw r("err")("Missing Payment Labyrinth entry data");
              var i = new TextDecoder().decode(
                  o("E2EEBackupUtil").decodeBase64Url(a),
                ),
                l = o("PaymentLabyrinthEnvelope").parseEnvelope(i),
                u = l.epochFbid,
                c = await o(
                  "EBLoadSelfMinosEpochRootKeyForDecryption",
                ).loadSelfMinosEpochRootKeyForDecryption(u);
              if (c == null)
                throw r("err")("Unable to load historical Labyrinth epoch");
              var d = await o("PaymentLabyrinthDecrypt").decrypt({
                epochRootKey: c,
                serializedEnvelope: i,
              });
              return { entry_id: n, plaintext: d };
            } catch (e) {
              return (
                r("FBLogger")("payment_labyrinth")
                  .catching(r("getErrorSafe")(e))
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to decrypt Payment Labyrinth vault entry ",
                        "",
                      ])),
                    n != null ? n : "unknown",
                  ),
                null
              );
            }
          }),
        ),
        l = [];
      for (var d of i) d != null && l.push(d);
      return l;
    }
    l.fetchAllLabyrinthVaultEntries = d;
  },
  98,
);
