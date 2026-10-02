__d(
  "KeyTransparencyKt11Verification",
  [
    "EBMinosSecureMailboxKeysForContact",
    "KeyTransparencyGraphQLClient",
    "KeyTransparencyWasmVerification",
    "KeyTransparencyWebConstants",
    "MWFBLogger",
    "Promise",
    "WABase64",
    "WALongInt",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _() {
      var e = !0;
      return e;
    }
    function f(e) {
      var t = o("WABase64").decodeB64(e);
      return new Uint8Array(t);
    }
    function g(e, t, n, r, a) {
      var i = o("WALongInt").decimalStringToLongInt(t),
        l = f(e.protoForClient);
      return {
        auditorSignatureTtlSecs: o("KeyTransparencyWebConstants")
          .KEY_TRANSPARENCY_AUDITOR_SIGNATURE_TTL_SECS,
        isProductionBuild: r,
        localEpochHead: a,
        lookupResponse: l,
        requestedAuditorList: n,
        userFbid: i,
      };
    }
    function h(e, t, n, r, a) {
      var i = o("WALongInt").decimalStringToLongInt(t),
        l = f(e.protoForClient);
      return {
        auditorSignatureTtlSecs: o("KeyTransparencyWebConstants")
          .KEY_TRANSPARENCY_AUDITOR_SIGNATURE_TTL_SECS,
        isProductionBuild: r,
        localMailboxHead: a,
        lookupResponse: l,
        requestedAuditorList: n,
        userFbid: i,
      };
    }
    function y(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.accountFbid;
        }),
      );
      if (n.size !== e.length)
        throw o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .mustfixThrow(
            "Different number of accounts requested/received in KT lookup: requested=" +
              e.length +
              ", received=" +
              n.size,
          );
      var r = e.filter(function (e) {
        return !n.has(e);
      });
      if (r.length > 0)
        throw o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .mustfixThrow(
            "Accounts missing from KT lookup: requested=" +
              e.length +
              ", received=" +
              t.length +
              ", missing=" +
              r.join(", "),
          );
    }
    function C(e, t, n, r, o, a) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l) {
            if (t.pendingSequencing)
              return (
                o("MWFBLogger")
                  .MWLogger()
                  .tags(["KeyTransparency"])
                  .DEBUG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "MI still processing keys (pending sequencing)",
                      ])),
                  ),
                "pending"
              );
            var c;
            i != null
              ? (l.addPoint("kt11_using_mandrake_head"),
                (c = yield o(
                  "KeyTransparencyWasmVerification",
                ).verifyKeyTransparencyForUserMandrake(h(t, r, n, _(), i))))
              : (l.addPoint("kt11_using_minos_head"),
                (c = yield o(
                  "KeyTransparencyWasmVerification",
                ).verifyKeyTransparencyForUserMinos(g(t, r, n, _(), a))));
            var d = i != null ? "mandrake" : "minos";
            return (
              l.addAnnotations({ string: { kt11_head_type: d } }),
              c.success
                ? (o("MWFBLogger")
                    .MWLogger()
                    .tags(["KeyTransparency"])
                    .DEBUG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "KT 1.1 ",
                          " verification succeeded for user ",
                          "",
                        ])),
                      d,
                      r,
                    ),
                  l.addAnnotations({
                    bool: { kt11_unified_success: !0 },
                    string: { kt11_head_type: d },
                  }),
                  "success")
                : (l.addAnnotations({
                    string: { kt11_unified_error: c.error },
                  }),
                  o("MWFBLogger")
                    .MWLogger()
                    .tags(["KeyTransparency"])
                    .DEBUG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "KT 1.1 ",
                          " verification failed for user ",
                          ": ",
                          "",
                        ])),
                      d,
                      r,
                      c.error,
                    ),
                  "failed")
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "EBMinosSecureMailboxKeysForContact",
          ).getSecureMailboxKeysForContact(e);
          if (n == null) return null;
          var r = null;
          if (t) {
            var a = yield o(
              "EBMinosSecureMailboxKeysForContact",
            ).getMandrakeContactMMK(e);
            a != null && (r = a.mailbox_head_hash);
          }
          return { epochHead: n.epoch_head, mailboxHead: r, userFbid: e };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          (o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Starting KT1.1 verification flow",
                ])),
            ),
            a.addPoint("kt11_start"));
          var s = ["cloudflare"],
            u = r("gkx")("23994");
          a.addAnnotations({ bool: { kt11_mandrake_enabled: u } });
          var _ = yield (p || (p = n("Promise"))).all([v(t, u), v(e, u)]),
            f = _[0],
            g = _[1],
            h = [].concat(g != null ? [g] : [], f != null ? [f] : []);
          if (h.length === 0)
            return (
              o("MWFBLogger")
                .MWLogger()
                .tags(["Key Transparency"])
                .DEBUG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "No users onboarded to LB 1.1 - skipping KT1.1 Verification",
                    ])),
                ),
              { self: "success", target: "success" }
            );
          var b = h.map(function (e) {
              var t = e.epochHead,
                n = e.userFbid;
              return { epochHead: t, userFbid: n };
            }),
            S = yield o("KeyTransparencyGraphQLClient").fetchKt11DataForUsers(
              b,
              s,
            );
          (a.addPoint("kt11_retrieved_graphql_data"),
            y(
              h.map(function (e) {
                return e.userFbid;
              }),
              S,
            ),
            a.addPoint("kt11_validated_graphql_data"));
          var R = new Map(
              S.map(function (e) {
                return [e.accountFbid, e];
              }),
            ),
            L = yield p.all(
              h.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.epochHead,
                        n = e.mailboxHead,
                        r = e.userFbid,
                        i = R.get(r);
                      if (i == null)
                        throw o("MWFBLogger")
                          .MWLogger()
                          .tags(["KeyTransparency"])
                          .mustfixThrow("Response not found for user " + r);
                      var l = yield C(i, s, r, t, n, a);
                      return [r, l];
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          a.addPoint("kt11_wasm_verification_complete");
          var E = new Map(L),
            k = (i = E.get(e)) != null ? i : "success",
            I = (l = E.get(t)) != null ? l : "success",
            T = { self: k, target: I };
          return (
            o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .DEBUG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "KT11 Result: Self: ",
                    ", Target: ",
                    "",
                  ])),
                T.self,
                T.target,
              ),
            T
          );
        })),
        L.apply(this, arguments)
      );
    }
    l.runKT11Verification = R;
  },
  98,
);
