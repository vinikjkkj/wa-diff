__d(
  "GetServerEncryptionKey",
  [
    "FBPayAuthLibraryCommon",
    "FBPayGetServerEncryptionKeyMutation",
    "Promise",
    "promiseDone",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3;
    function u(t, a, i, l, u, c, d, m, p, _) {
      var f = {
        client_mutation_id: r("uuidv4")(),
        device_id: "device_id",
        payment_type: t,
        target_account_id: a != null ? a : null,
        fetch_unified_wallet_key: i != null ? i : !1,
        logging_id: l != null ? l : null,
        xe_profile_identifier: p,
      };
      return new (e || (e = n("Promise")))(function (e, t) {
        var n = function (n) {
            (c && c(n), t(n));
          },
          a = !1,
          i = function (l) {
            (d == null || d.logClientLoadPaysecInit("get_encryption_key"),
              o(
                "FBPayGetServerEncryptionKeyMutation",
              ).getServerEncryptionKeyUnified(
                f,
                d,
                function (t, s) {
                  r("promiseDone")(
                    o("FBPayAuthLibraryCommon").getCryptoKeyFromCert(t, s, d),
                    function (t) {
                      (d == null ||
                        d.logClientLoadPaysecSuccess(
                          "get_encryption_key",
                          void 0,
                          void 0,
                          a,
                        ),
                        (a = !0),
                        u && u(t),
                        e(t));
                    },
                    function (e) {
                      l === 1 ? n(e) : i(l - 1);
                    },
                  );
                },
                function (e) {
                  l === 1 ? n(e) : i(l - 1);
                },
                !1,
                m,
                _,
              ));
          };
        i(s);
      });
    }
    l.getServerPublicCryptoKey = u;
  },
  98,
);
