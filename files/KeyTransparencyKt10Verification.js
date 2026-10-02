__d(
  "KeyTransparencyKt10Verification",
  [
    "KeyTransparencyLocalKeyRetrieval",
    "KeyTransparencyWASmaxClient",
    "KeyTransparencyWasmVerification",
    "KeyTransparencyWebConstants",
    "MWFBLogger",
    "Promise",
    "WAExponentialBackoff",
    "WALongInt",
    "asyncToGeneratorRuntime",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t, n) {
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
    function y(e) {
      var t = new Map();
      return (
        e.forEach(function (e, n) {
          t.set(o("WALongInt").decimalStringToLongInt(String(n)), e.buffer);
        }),
        t
      );
    }
    var C = {
      factor: 2,
      jitter: 0,
      maxTimeout: 9e4,
      minTimeout: 8e3,
      retries: 3,
    };
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = new AbortController(),
            c = yield o("WAExponentialBackoff").exponentialBackoff(
              babelHelpers.extends({}, C, { signal: l.signal }),
              (function () {
                var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n, l) {
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
                    var c = yield o(
                        "KeyTransparencyWASmaxClient",
                      ).fetchKt10DataForMultipleUsers(t, a),
                      d = !1;
                    return (
                      c.forEach(function (e) {
                        e === "pending" && (d = !0);
                      }),
                      d
                        ? (i.addAnnotations({
                            bool: { kt10_had_sequencing_pending: !0 },
                          }),
                          l >= C.retries
                            ? (o("MWFBLogger")
                                .MWLogger()
                                .tags(["KeyTransparency"])
                                .DEBUG(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
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
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "KT10 sequencing pending on attempt ",
                                        ", retrying",
                                      ])),
                                  l + 1,
                                ),
                              n(
                                r("err")(
                                  "Sequencing pending - reconciliation in progress",
                                ),
                              )))
                        : c
                    );
                  },
                );
                return function (e, t) {
                  return l.apply(this, arguments);
                };
              })(),
            );
          return c;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          (o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Running KT 1.0 verification",
                ])),
            ),
            a.addPoint("kt10_start"));
          var i = r("gkx")("21292");
          (o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Reconciliation is enabled? ",
                  "",
                ])),
              i,
            ),
            a.addAnnotations({ bool: { kt10_reconciliation_enabled: i } }));
          var l = [e, t],
            s = yield (g || (g = n("Promise"))).all([
              o("KeyTransparencyLocalKeyRetrieval").getLocalSignalKeysForUser(
                e,
              ),
              o("KeyTransparencyLocalKeyRetrieval").getLocalSignalKeysForUser(
                t,
              ),
            ]),
            u = s[0],
            C = s[1],
            v = i
              ? new Map([
                  [e, u],
                  [t, C],
                ])
              : void 0,
            S;
          (i && v != null
            ? (S = yield b(l, v, a))
            : (S = yield o(
                "KeyTransparencyWASmaxClient",
              ).fetchKt10DataForMultipleUsers(l)),
            a.addPoint("kt10_retrieved_wai_data"));
          var R = y(u),
            L = y(C),
            E = new Map([
              [e, R],
              [t, L],
            ]),
            k = new Map();
          yield g.all(
            l.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = S.get(e);
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
                        k.set(e, "pending"));
                      return;
                    }
                    if (t instanceof Error) throw t;
                    if (t == null)
                      throw o("MWFBLogger")
                        .MWLogger()
                        .tags(["KeyTransparency"])
                        .mustfixThrow("No data returned for user " + e);
                    var n = E.get(e);
                    if (n == null)
                      throw o("MWFBLogger")
                        .MWLogger()
                        .tags(["KeyTransparency"])
                        .mustfixThrow("No local keys for user " + e);
                    var r = h(t, e, n),
                      i = yield o(
                        "KeyTransparencyWasmVerification",
                      ).verifyKeyTransparencyForUserSignal(r);
                    if (!i.success) {
                      (a.addAnnotations({
                        string: { kt10_unified_error: i.error },
                      }),
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
                        k.set(e, "failed"));
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
                      a.addAnnotations({ bool: { kt10_unified_success: !0 } }),
                      k.set(e, "success"));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          var I = k.get(e),
            T = k.get(t);
          if (I == null || T == null)
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
                I,
                T,
              ),
            a.addPoint("kt10_verification_complete"),
            { self: I, target: T }
          );
        })),
        R.apply(this, arguments)
      );
    }
    l.runKT10Verification = S;
  },
  98,
);
