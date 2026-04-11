__d(
  "WAWebCrosspostingParser",
  ["WABase64", "WAWebCrossposting.flow", "WAWebNonEmptyString", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null) throw r("err")("Purpose public keys are null");
      if (e.purpose_public_ik_enc_certificate == null)
        throw r("err")("Purpose public ik enc certificate is null");
      if (e.purpose_dummy_ciphertext == null)
        throw r("err")("Dummy ciphertext is null");
      if (e.purpose_dummy_nonce == null) throw r("err")("Dummy nonce is null");
      if (e.purpose_public_ik == null)
        throw r("err")("Purpose public ik is null");
      if (e.purpose_public_ek == null)
        throw r("err")("Purpose public ek is null");
      if (e.purpose_public_ik_sig == null)
        throw r("err")("Purpose public ik sig is null");
      var t = e.purpose_dummy_ciphertext,
        n = e.purpose_dummy_nonce,
        a = e.purpose_public_ik,
        i = e.purpose_public_ek,
        l = e.purpose_public_ik_enc_certificate,
        s = e.purpose_public_ik_sig;
      return {
        purposeDummyCipherText: new Uint8Array(
          o("WABase64").decodeB64UrlSafe(t),
        ),
        purposeDummyNonce: new Uint8Array(o("WABase64").decodeB64UrlSafe(n)),
        purposePublicIK: new Uint8Array(o("WABase64").decodeB64UrlSafe(a)),
        purposePublicEK: new Uint8Array(o("WABase64").decodeB64UrlSafe(i)),
        purposePublicIKEncCertificate: l,
        purposePublicIKSig: s,
      };
    }
    function s(e) {
      var t,
        n = new Map(),
        o = e == null || (t = e.waffle_xe_root) == null ? void 0 : t.waffle_xps;
      if (o == null) return n;
      for (var a of o) {
        var i = a.waffle_xas,
          l = i == null ? void 0 : i.waffle_xan;
        if (l == null)
          throw r("err")(
            "[WAFFLE] Parsing Eligibility Response Failed! with crosspost app name is null",
          );
        var s = a.waffle_hcbc;
        s != null &&
          s.forEach(function (e, t) {
            var r = n.get(t);
            (r == null && ((r = []), n.set(t, r)), r.push(e));
          });
      }
      return n;
    }
    function u(e) {
      var t = {};
      for (var n of e) {
        var r, a;
        if (
          ((r = n.waffle_xas) == null ? void 0 : r.waffle_xan) === "I" &&
          n.waffle_di != null
        ) {
          var i = o("WAWebNonEmptyString").asMaybeNonEmptyString(n.waffle_di);
          i != null && (t.igCrosspostingDestinationId = i);
        }
        if (
          ((a = n.waffle_xas) == null ? void 0 : a.waffle_xan) === "F" &&
          n.waffle_di != null
        ) {
          var l = o("WAWebNonEmptyString").asMaybeNonEmptyString(n.waffle_di);
          l != null && (t.fbCrosspostingDestinationId = l);
        }
      }
      return t;
    }
    function c(t) {
      var n = t == null ? void 0 : t.waffle_xe_root;
      if (n == null)
        throw r("err")("[WAFFLE] Eligibility check response is null");
      var o = e(n.purpose_public_keys),
        a = u(n.waffle_d),
        i = n.waffle_unique_ids,
        l = s(t);
      return {
        purposeEncryptionParams: o,
        uniqueIds: i,
        hcbcPerStatus: l,
        crosspostingDestinations: a,
      };
    }
    function d(e) {
      return e ===
        o("WAWebCrossposting.flow").CrosspostingDestinationIQValue.FACEBOOK
        ? o("WAWebCrossposting.flow").CrosspostingDestinationIQValue.FACEBOOK
        : e ===
            o("WAWebCrossposting.flow").CrosspostingDestinationIQValue.INSTAGRAM
          ? o("WAWebCrossposting.flow").CrosspostingDestinationIQValue.INSTAGRAM
          : null;
    }
    function m(e, t) {
      var n = e.get(t);
      return (
        n == null &&
          ((n = {
            successIds: [],
            duplicateRequests: [],
            deactivatedAccount: [],
            unknownErrors: [],
          }),
          e.set(t, n)),
        n
      );
    }
    function p(e) {
      var t = new Map();
      for (var n of e.waffle_ialsv) {
        var r = d(n.waffle_da);
        r != null && t.set(r, n.is_valid);
      }
      var a = new Map();
      for (var i of e.waffle_xr) {
        var l = i.waffle_unique_id,
          s = i.response_code,
          u = d(i.waffle_da);
        if (u != null) {
          var c = m(a, u);
          s === o("WAWebCrossposting.flow").CrosspostResponseCodes.OK ||
          s ===
            o("WAWebCrossposting.flow").CrosspostResponseCodes.ALREADY_SHARED
            ? c.successIds.push(l)
            : s ===
                o("WAWebCrossposting.flow").CrosspostResponseCodes
                  .DUPLICATE_REQUEST
              ? c.duplicateRequests.push(l)
              : s ===
                  o("WAWebCrossposting.flow").CrosspostResponseCodes
                    .DEACTIVATED_ACCOUNT
                ? c.deactivatedAccount.push(l)
                : c.unknownErrors.push(l);
        }
      }
      return { accountLinkStateValidity: t, responsesByDestination: a };
    }
    ((l.parseCrosspostStateList = s),
      (l.parseEligibilityCheckResponse = c),
      (l.parseCrosspostingIQResponse = p));
  },
  98,
);
