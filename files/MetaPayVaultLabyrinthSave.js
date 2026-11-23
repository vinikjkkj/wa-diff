__d(
  "MetaPayVaultLabyrinthSave",
  [
    "E2EEBackupUtil",
    "EBDB",
    "FBLogger",
    "MetaPayVaultLabyrinthSaveMutation.graphql",
    "PaymentLabyrinthEncrypt",
    "PaymentLabyrinthEnvelope",
    "WorkerRelay",
    "err",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WorkerRelay").createWorkerMutation(
        e !== void 0 ? e : (e = n("MetaPayVaultLabyrinthSaveMutation.graphql")),
      ),
      c = u[0];
    function d(e) {
      var t = Number(new TextDecoder().decode(e.epochAnonIdBlob));
      if (!Number.isSafeInteger(t) || t < 0)
        throw r("err")(
          "The latest Labyrinth epoch number is not a safe integer",
        );
      return t;
    }
    async function m() {
      var e = await o("EBDB").getEBDB(),
        t = await e.store("secure_encrypted_backups_epochs").readAll(),
        n,
        a = -1;
      for (var i of t)
        if (i.epochHead != null) {
          var l = d(i);
          l > a && ((n = i), (a = l));
        }
      if (n == null)
        throw r("err")("Unable to find a complete Labyrinth epoch");
      var u = n.epochId.toString();
      return (
        r("FBLogger")("messaging_eb")
          .tags(["payment_labyrinth"])
          .DEBUG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "using epoch to encrypt. fbid: ",
                ", anonId: ",
                "",
              ])),
            u,
            a,
          ),
        { epochFbid: u, epochRootKey: n.epochRootKeyBlob }
      );
    }
    var p = "bWF3LWRlYnVnLWR1bW15LWtleQ",
      _ = "maw-debug-dummy-primary-access-key-fingerprint";
    async function f(e) {
      e === void 0 && (e = new Uint8Array([1, 2, 3]));
      var t = await m(),
        n = t.epochFbid,
        a = t.epochRootKey,
        i = await o("PaymentLabyrinthEncrypt").encrypt({
          epochFbid: n,
          epochRootKey: a,
          plaintext: e,
        }),
        l = o("E2EEBackupUtil").encodeBase64Url(new TextEncoder().encode(i)),
        s = r("uuidv4")();
      return c({
        input: {
          meta_pay_vault_entry_save_payload: {
            meta_pay_vault_entry: {
              entry_data: l,
              entry_key_id: s,
              entry_label: "maw-debug-labyrinth-entry",
              entry_type: "DUMMY",
              entry_version: o("PaymentLabyrinthEnvelope").ENVELOPE_VERSION,
            },
            meta_pay_vault_entry_keys: [
              { device_key_fingerprint: _, key_data: p, key_id: s },
            ],
          },
          platform_trust_token: "dummy-ptt",
        },
      });
    }
    l.saveLabyrinthVaultEntry = f;
  },
  98,
);
