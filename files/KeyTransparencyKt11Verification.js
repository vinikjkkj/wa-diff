__d(
  "KeyTransparencyKt11Verification",
  [
    "EBMinosSecureMailboxKeysForContact",
    "KeyTransparencyGraphQLClient",
    "KeyTransparencyWasmVerification",
    "KeyTransparencyWebConstants",
    "MWFBLogger",
    "WABase64",
    "WALongInt",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m;
    function p() {
      var e = !0;
      return e;
    }
    function _(e) {
      var t = o("WABase64").decodeB64(e);
      return new Uint8Array(t);
    }
    function f(e, t, n, r, a) {
      var i = o("WALongInt").decimalStringToLongInt(t),
        l = _(e.protoForClient);
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
    function g(e, t, n, r, a) {
      var i = o("WALongInt").decimalStringToLongInt(t),
        l = _(e.protoForClient);
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
    function h(e, t) {
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
    async function y(t, n, r, a, i, l) {
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
          (c = await o(
            "KeyTransparencyWasmVerification",
          ).verifyKeyTransparencyForUserMandrake(g(t, r, n, p(), i))))
        : (l.addPoint("kt11_using_minos_head"),
          (c = await o(
            "KeyTransparencyWasmVerification",
          ).verifyKeyTransparencyForUserMinos(f(t, r, n, p(), a))));
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
          : (l.addAnnotations({ string: { kt11_unified_error: c.error } }),
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
    }
    async function C(e, t) {
      var n = await o(
        "EBMinosSecureMailboxKeysForContact",
      ).getSecureMailboxKeysForContact(e);
      if (n == null) return null;
      var r = null;
      if (t) {
        var a = await o(
          "EBMinosSecureMailboxKeysForContact",
        ).getMandrakeContactMMK(e);
        a != null && (r = a.mailbox_head_hash);
      }
      return { epochHead: n.epoch_head, mailboxHead: r, userFbid: e };
    }
    async function b(e, t, n) {
      var a, i;
      (o("MWFBLogger")
        .MWLogger()
        .tags(["KeyTransparency"])
        .DEBUG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Starting KT1.1 verification flow",
            ])),
        ),
        n.addPoint("kt11_start"));
      var l = ["cloudflare"],
        s = r("gkx")("23994");
      n.addAnnotations({ bool: { kt11_mandrake_enabled: s } });
      var u = await Promise.all([C(t, s), C(e, s)]),
        p = u[0],
        _ = u[1],
        f = [].concat(_ != null ? [_] : [], p != null ? [p] : []);
      if (f.length === 0)
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
      var g = f.map(function (e) {
          var t = e.epochHead,
            n = e.userFbid;
          return { epochHead: t, userFbid: n };
        }),
        b = await o("KeyTransparencyGraphQLClient").fetchKt11DataForUsers(g, l);
      (n.addPoint("kt11_retrieved_graphql_data"),
        h(
          f.map(function (e) {
            return e.userFbid;
          }),
          b,
        ),
        n.addPoint("kt11_validated_graphql_data"));
      var v = new Map(
          b.map(function (e) {
            return [e.accountFbid, e];
          }),
        ),
        S = await Promise.all(
          f.map(async function (e) {
            var t = e.epochHead,
              r = e.mailboxHead,
              a = e.userFbid,
              i = v.get(a);
            if (i == null)
              throw o("MWFBLogger")
                .MWLogger()
                .tags(["KeyTransparency"])
                .mustfixThrow("Response not found for user " + a);
            var s = await y(i, l, a, t, r, n);
            return [a, s];
          }),
        );
      n.addPoint("kt11_wasm_verification_complete");
      var R = new Map(S),
        L = (a = R.get(e)) != null ? a : "success",
        E = (i = R.get(t)) != null ? i : "success",
        k = { self: L, target: E };
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
            k.self,
            k.target,
          ),
        k
      );
    }
    l.runKT11Verification = b;
  },
  98,
);
