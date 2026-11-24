__d(
  "WAWebCanonicalNoiseAuthClient",
  [
    "WABase64",
    "WAWebCanonicalNoiseAuthResponse",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebCryptoCurve25519VerifySignature",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebNoiseAuthChallengeControllerRouteBuilder",
    "WAXWhatsAppWebNoiseAuthTokenControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "WA:CLIENT:ASSERT:v1",
      s = 32,
      u = 64,
      c = /^[A-Za-z][A-Za-z0-9_]{0,63}$/,
      d = 2e4;
    function m(e, t) {
      if (e == null || t == null) return null;
      var n = t.staticKeyPair,
        r = e.isLid() && e.isCompanion() && n.pubKey.byteLength === s;
      return r ? { deviceLid: e, keyPair: n } : null;
    }
    function p(e, t) {
      return e.deviceLid.equals(t);
    }
    async function _(e, t) {
      var n = await b(
        r("WAXWhatsAppWebNoiseAuthChallengeControllerRouteBuilder")
          .buildUri({})
          .toString(),
        {
          jid: e.deviceLid.toString(),
          public_key: o("WABase64").encodeB64UrlSafe(e.keyPair.pubKey),
        },
        t,
      );
      if (n.kind === "failed") return n;
      var a = n.payload.challenge;
      return typeof a == "string" && a !== ""
        ? { kind: "issued", challenge: { challenge: a } }
        : { kind: "failed", failure: "malformed", httpStatus: n.httpStatus };
    }
    async function f(t, n) {
      var r = new TextEncoder().encode("" + e + n.challenge);
      try {
        var a = new Uint8Array(
          await o("WAWebCryptoCurve25519CalculateSignature").calculateSignature(
            t.keyPair,
            r.buffer,
          ),
        );
        return y(t, r, a)
          ? {
              kind: "signed",
              proof: babelHelpers.extends({}, n, {
                signature: o("WABase64").encodeB64UrlSafe(a),
              }),
            }
          : { kind: "failed", errorName: null };
      } catch (e) {
        return { kind: "failed", errorName: h(e) };
      }
    }
    async function g(e) {
      var t = await b(
        r("WAXWhatsAppWebNoiseAuthTokenControllerRouteBuilder")
          .buildUri({})
          .toString(),
        { challenge: e.challenge, signature: e.signature },
        null,
      );
      return t.kind === "failed" ? t : { kind: "stored" };
    }
    function h(e) {
      return e instanceof Error
        ? c.test(e.name)
          ? e.name
          : "Error"
        : typeof e;
    }
    function y(e, t, n) {
      return (
        n.byteLength === u &&
        o("WAWebCryptoCurve25519VerifySignature").verifySignature(
          new Uint8Array(e.keyPair.pubKey),
          t,
          n,
        )
      );
    }
    async function C(e, t) {
      var n = new AbortController(),
        r = function () {
          return n.abort();
        },
        o = !1,
        a = self.setTimeout(function () {
          ((o = !0), r());
        }, d);
      (e == null || e.addEventListener("abort", r),
        (e == null ? void 0 : e.aborted) === !0 && r());
      try {
        return await t(n.signal);
      } catch (e) {
        return {
          kind: "failed",
          failure: o ? "timeout" : "network",
          httpStatus: null,
          errorName: h(e),
        };
      } finally {
        (self.clearTimeout(a), e == null || e.removeEventListener("abort", r));
      }
    }
    function b(e, t, n) {
      return C(n, async function (n) {
        var r = await o("WAWebXControllerFetchUtils").fetchFromXController(e, {
          method: "POST",
          additionalParams: t,
          signal: n,
        });
        return r.ok
          ? o("WAWebCanonicalNoiseAuthResponse").parsePayload(
              await r.text(),
              r.status,
            )
          : { kind: "failed", failure: "unavailable", httpStatus: r.status };
      });
    }
    ((l.makeNoiseProofKey = m),
      (l.isProofKeyFor = p),
      (l.requestNoiseChallenge = _),
      (l.signNoiseChallenge = f),
      (l.exchangeNoiseProof = g),
      (l.getBoundedErrorName = h));
  },
  98,
);
