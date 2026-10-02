__d(
  "EBRegisterMinosMessageEncryptionKey",
  [
    "Base64Utils",
    "EBMinosTypes",
    "EBRegisterMinosMessageEncryptionKeyMutation.graphql",
    "WALongInt",
    "WAResultOrError",
    "asyncToGeneratorRuntime",
    "createWorkerMutation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("EBRegisterMinosMessageEncryptionKeyMutation.graphql")),
      u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.actThreadId,
            a = e.instanceKey,
            i = e.mandrakeEnvelopes,
            l = e.mandrakeSender,
            u = e.mekEncryptionVersion,
            c = e.mekEnvelopes,
            d = e.mekId,
            m = e.mekRosterHash,
            p = e.sender,
            _ = c.map(function (e) {
              var t = e.encryptedMek,
                n = e.mailboxKey,
                r = e.mailboxKeyFbid,
                a = e.participantId;
              return {
                encrypted_mek_base64: o("Base64Utils").fromArrayBuffer(t),
                mailbox_key_base64: o("Base64Utils").fromArrayBuffer(n),
                mailbox_key_fbid: o("WALongInt").longIntToDecimalString(r),
                participant_id: a,
              };
            }),
            f = r("createWorkerMutation")(s),
            g = f[0],
            h =
              i != null && l != null
                ? { mandrake_envelopes: i, mandrake_sender: l }
                : {},
            y = yield g({
              input: babelHelpers.extends({}, h, {
                mek_envelopes: _,
                mek_info: babelHelpers.extends(
                  {
                    act_thread_id: n,
                    mek_encryption_version: u,
                    mek_id_base64: o("Base64Utils").fromArrayBuffer(d),
                    mek_roster_base64: o("Base64Utils").fromArrayBuffer(m),
                  },
                  p.senderType === "Minos"
                    ? { minos_sender: { epoch_fbid: p.epochFbId } }
                    : {
                        transport_sender: {
                          ephemeral_hpke_pub_key_base64: o(
                            "Base64Utils",
                          ).fromArrayBuffer(p.ephemeralEncryptionPk),
                          ephemeral_key_signature_base64: o(
                            "Base64Utils",
                          ).fromArrayBuffer(p.signature),
                          signing_pub_key_base64: o(
                            "Base64Utils",
                          ).fromArrayBuffer(p.signingPk),
                        },
                      },
                ),
                request_uuid: a.toString(),
                version: "REAL_MAILBOX_KEYS",
              }),
            });
          if (y == null)
            return o("WAResultOrError").makeError({
              errorName: "empty-response",
            });
          if (
            (y == null ||
            (t = y.xfb_minos_register_message_encryption_key) == null
              ? void 0
              : t.mek_fbid) != null
          ) {
            var C = y.xfb_minos_register_message_encryption_key.mek_fbid;
            return o("WAResultOrError").makeResult({
              mekFbid: o("EBMinosTypes").unsafeCastToMekFbId(C),
            });
          }
          var b =
              (y == null
                ? void 0
                : y.xfb_minos_register_message_encryption_key) || {},
            v = b.code,
            S = b.message,
            R =
              "error code: " +
              (v != null ? v : "null") +
              " error description: " +
              (S != null ? S : "null");
          return v != null
            ? o("WAResultOrError").makeError({
                errorName: "graphql-error",
                failReason: R,
              })
            : o("WAResultOrError").makeError({
                errorName: "unexpected-graphql-response",
                failReason: R,
              });
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    l.registerMinosMessageEncryptionKey = u;
  },
  98,
);
