__d(
  "WAWebDebugTee",
  [
    "WAHex",
    "WALogger",
    "WAWebDebugRaTlsConnection",
    "WAWebTEENodeTokenFetcher",
    "WAWebTeeEnums",
    "WAWebTeeInnerHttp",
    "WAWebTeeRequestConfig",
    "WAWebTeeTestRequestProto",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 6e4,
      c = "rc",
      d = "WhatsApp Web TEE test request",
      m = 64,
      p = "latency";
    async function _(e) {
      var t = await o("WAWebTEENodeTokenFetcher").fetchNodeToken(
          e != null ? e : o("WAWebTeeRequestConfig").DEFAULT_TEE_ENV,
        ),
        n = {
          chipIdHex: t.chipId == null ? null : o("WAHex").toHex(t.chipId),
          fetchedAtMs: t.fetchedAtMs,
          nodeTokenHex: o("WAHex").toHex(t.nodeToken),
          nodeTokenLength: t.nodeToken.length,
          serializedTrustedNodeHex: o("WAHex").toHex(t.serializedTrustedNode),
        };
      return n;
    }
    async function f(t, n, a, i) {
      var l = t != null ? t : c,
        s = await o("WAWebDebugRaTlsConnection").openTheiaRaTlsConnection({
          clientPolicy: o("WAWebTeeRequestConfig").getTeeRequestConfig(l)
            .clientPolicy,
          env: l,
          onPhase: i,
          shouldVerifyCert: !0,
        });
      try {
        return await g({
          connection: s,
          env: l,
          maxTokens: a != null ? a : m,
          message: n != null ? n : d,
        });
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[TEE][test-request] failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("tee-test-request-failed"),
          t
        );
      } finally {
        s.close();
      }
    }
    ((f.doc =
      "RT1 + RA-TLS handshake, then one TEE TestRequest over the session. Optional args: env (default rc), message, maxTokens."),
      (f.paramsToExecute = []));
    async function g(e) {
      var t,
        n = e.connection,
        a = e.env,
        i = e.maxTokens,
        l = e.message,
        u = n.logPhase,
        c = n.reader,
        d = n.session,
        m = n.socket,
        _ = crypto.randomUUID(),
        f = Date.now(),
        g = o("WAWebTeeTestRequestProto").encodeTeeTestRequest({
          identifier: _,
          maxTokens: i,
          message: l,
          nowMs: f,
          testCase: p,
        }),
        y = d.tlsEncapsulate(o("WAWebTeeInnerHttp").buildInferenceRequest(g));
      if (y == null)
        throw r("err")(
          "RA-TLS session refused to encapsulate the test request",
        );
      (m.send(y),
        u("test-request.sent", { requestBytes: g.length, tlsBytes: y.length }));
      var b = await h(d, c),
        v = Date.now() - f;
      if (
        (u("test-request.response", {
          bodyBytes: b.body.length,
          httpStatus: b.status,
        }),
        b.status !== 200)
      )
        throw r("err")("TEE answered the test request with HTTP " + b.status);
      var S = o("WAWebTeeTestRequestProto").decodeTeeTestResponse(b.body),
        R = C({
          env: a,
          httpStatus: b.status,
          identifier: _,
          response: S,
          roundTripMs: v,
        });
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[TEE][test-request] status=",
              " responseLength=",
              " roundTripMs=",
              "",
            ])),
          (t = R.status) != null ? t : "none",
          R.responseLength,
          v,
        ),
        R
      );
    }
    async function h(e, t, n, a) {
      var i;
      (n === void 0 && (n = Date.now() + u),
        a === void 0 && (a = new Uint8Array(0)));
      var l = await y(t, n),
        s = e.tlsDecapsulate(l),
        c = s.data,
        d = s.resultCode;
      if (c == null) throw r("err")("RA-TLS decapsulate failed with code " + d);
      var m = v(a, c);
      return (i = o("WAWebTeeInnerHttp").parseInnerHttpResponse(m)) != null
        ? i
        : h(e, t, n, m);
    }
    async function y(e, t) {
      var n = null,
        o = new Promise(function (e, o) {
          n = self.setTimeout(
            function () {
              return o(
                r("err")(
                  "TEE did not answer the test request within " + u + " ms",
                ),
              );
            },
            Math.max(0, t - Date.now()),
          );
        });
      try {
        return await Promise.race([e.read(), o]);
      } finally {
        n != null && self.clearTimeout(n);
      }
    }
    function C(e) {
      var t,
        n = e.env,
        r = e.httpStatus,
        o = e.identifier,
        a = e.response,
        i = e.roundTripMs,
        l = (t = a.response) != null ? t : "";
      return {
        env: n,
        httpStatus: r,
        identifier: o,
        identifierMatches: a.identifier === o,
        responseLength: l.length,
        responsePreview: l.slice(0, 80),
        roundTripMs: i,
        status: b(a.status),
      };
    }
    function b(e) {
      if (e == null) return null;
      var t = o("WAWebTeeEnums").TEEResponseStatus.cast(e);
      return t == null
        ? String(e)
        : o("WAWebTeeEnums").TEEResponseStatus.getName(t);
    }
    function v(e, t) {
      var n = new Uint8Array(e.length + t.length);
      return (n.set(e), n.set(t, e.length), n);
    }
    var S = { fetchNodeToken: _, sendTestRequest: f };
    l.default = S;
  },
  98,
);
