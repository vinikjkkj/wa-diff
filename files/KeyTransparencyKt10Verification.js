__d(
  "KeyTransparencyKt10Verification",
  [
    "KeyTransparencyLocalKeyRetrieval",
    "KeyTransparencyWASmaxClient",
    "KeyTransparencyWasmVerification",
    "KeyTransparencyWebConstants",
    "MWFBLogger",
    "WAExponentialBackoff",
    "WALongInt",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f;
    function g(e, t, n) {
      var r = o("WALongInt").decimalStringToLongInt(t);
      return {
        auditorSignatureTtlSecs: o("KeyTransparencyWebConstants")
          .KEY_TRANSPARENCY_AUDITOR_SIGNATURE_TTL_SECS,
        cloudflareMessage: e.cloudflareMessage,
        cloudflarePubKey: e.cloudflarePubKey,
        cloudflareSignature: e.cloudflareSignature,
        currentEpoch: e.currentEpoch,
        historyProof: e.historyProof,
        local_device_keys: n,
        metaSignature: e.metaSignature,
        rootHash: e.rootHash,
        userFbid: r,
      };
    }
    function h(e) {
      var t = new Map();
      return (
        e.forEach(function (e, n) {
          t.set(o("WALongInt").decimalStringToLongInt(String(n)), e.buffer);
        }),
        t
      );
    }
    var y = {
      factor: 2,
      jitter: 0,
      maxTimeout: 9e4,
      minTimeout: 8e3,
      retries: 3,
    };
    async function C(t, n, a) {
      var i = new AbortController(),
        l = await o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, y, { signal: i.signal }),
          async function (i, l) {
            o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Fetching KT10 data, attempt ",
                    "",
                  ])),
                l + 1,
              );
            var c = await o(
                "KeyTransparencyWASmaxClient",
              ).fetchKt10DataForMultipleUsers(t, n),
              d = !1;
            return (
              c.forEach(function (e) {
                e === "pending" && (d = !0);
              }),
              d
                ? (a.addAnnotations({
                    bool: { kt10_had_sequencing_pending: !0 },
                  }),
                  l >= y.retries
                    ? (o("MWFBLogger")
                        .MWLogger()
                        .tags(["KeyTransparency"])
                        .DEBUG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "KT10 sequencing pending after ",
                              " attempts, returning pending state",
                            ])),
                          l + 1,
                        ),
                      c)
                    : (o("MWFBLogger")
                        .MWLogger()
                        .tags(["KeyTransparency"])
                        .DEBUG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "KT10 sequencing pending on attempt ",
                              ", retrying",
                            ])),
                          l + 1,
                        ),
                      i(
                        r("err")(
                          "Sequencing pending - reconciliation in progress",
                        ),
                      )))
                : c
            );
          },
        );
      return l;
    }
    async function b(e, t, n) {
      (o("MWFBLogger")
        .MWLogger()
        .tags(["KeyTransparency"])
        .DEBUG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Running KT 1.0 verification",
            ])),
        ),
        n.addPoint("kt10_start"));
      var a = r("gkx")("21292");
      (o("MWFBLogger")
        .MWLogger()
        .tags(["KeyTransparency"])
        .DEBUG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Reconciliation is enabled? ",
              "",
            ])),
          a,
        ),
        n.addAnnotations({ bool: { kt10_reconciliation_enabled: a } }));
      var i = [e, t],
        l = await Promise.all([
          o("KeyTransparencyLocalKeyRetrieval").getLocalSignalKeysForUser(e),
          o("KeyTransparencyLocalKeyRetrieval").getLocalSignalKeysForUser(t),
        ]),
        s = l[0],
        u = l[1],
        y = a
          ? new Map([
              [e, s],
              [t, u],
            ])
          : void 0,
        b;
      (a && y != null
        ? (b = await C(i, y, n))
        : (b = await o(
            "KeyTransparencyWASmaxClient",
          ).fetchKt10DataForMultipleUsers(i)),
        n.addPoint("kt10_retrieved_wai_data"));
      var v = h(s),
        S = h(u),
        R = new Map([
          [e, v],
          [t, S],
        ]),
        L = new Map();
      await Promise.all(
        i.map(async function (e) {
          var t = b.get(e);
          if (t === "pending") {
            (o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .DEBUG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "KT 1.0 verification pending for user ",
                    " - reconciliation in progress",
                  ])),
                e,
              ),
              L.set(e, "pending"));
            return;
          }
          if (t instanceof Error) throw t;
          if (t == null)
            throw o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .mustfixThrow("No data returned for user " + e);
          var r = R.get(e);
          if (r == null)
            throw o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .mustfixThrow("No local keys for user " + e);
          var a = g(t, e, r),
            i = await o(
              "KeyTransparencyWasmVerification",
            ).verifyKeyTransparencyForUserSignal(a);
          if (!i.success) {
            (n.addAnnotations({ string: { kt10_unified_error: i.error } }),
              o("MWFBLogger")
                .MWLogger()
                .tags(["KeyTransparency"])
                .DEBUG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "KT 1.0 unified verification failed for user ",
                      ": ",
                      "",
                    ])),
                  e,
                  i.error,
                ),
              L.set(e, "failed"));
            return;
          }
          (o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "KT 1.0 unified verification succeeded for user ",
                  "",
                ])),
              e,
            ),
            n.addAnnotations({ bool: { kt10_unified_success: !0 } }),
            L.set(e, "success"));
        }),
      );
      var E = L.get(e),
        k = L.get(t);
      if (E == null || k == null)
        throw o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .mustfixThrow("Missing verification results");
      return (
        o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .DEBUG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "KT1.0 batched verification complete success self: ",
                ", target: ",
                "",
              ])),
            E,
            k,
          ),
        n.addPoint("kt10_verification_complete"),
        { self: E, target: k }
      );
    }
    l.runKT10Verification = b;
  },
  98,
);
