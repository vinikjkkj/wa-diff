__d(
  "OhaiClient",
  [
    "HttpRequestBinaryEncode",
    "HttpResponseBinaryDecode",
    "HttpXHRRequestBinaryEncode",
    "OhaiCommonUtils",
    "getHpkeFromConfigIds",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, a) {
      (n === void 0 && (n = !1), a === void 0 && (a = null));
      var i = e.aeadId,
        l = e.kdfId,
        s = e.kemId,
        u = e.keyId,
        c = e.publicKey,
        d = r("getHpkeFromConfigIds")({ kemId: s, kdfId: l, aeadId: i }),
        m = new TextEncoder(),
        p = await o("HttpRequestBinaryEncode").binaryEncodeRequest(t, n, a),
        _ = o("OhaiCommonUtils").concat(
          o("OhaiCommonUtils").encodeNumber(u, 1),
          o("OhaiCommonUtils").encodeNumber(s, 2),
          o("OhaiCommonUtils").encodeNumber(l, 2),
          o("OhaiCommonUtils").encodeNumber(i, 2),
        ),
        f = m.encode(o("OhaiCommonUtils").REQUEST_LABEL),
        g = await d.setupBaseS(c, f),
        h = g.ctx,
        y = g.enc,
        C = await h.seal(_, p),
        b = o("OhaiCommonUtils").concat(_, y, C);
      return { ctx: h, enc: y, encapsulatedRequest: b };
    }
    async function s(e, t, n) {
      n === void 0 && (n = !1);
      var a = e.aeadId,
        i = e.kdfId,
        l = e.kemId,
        s = e.keyId,
        u = e.publicKey,
        c = r("getHpkeFromConfigIds")({ kemId: l, kdfId: i, aeadId: a }),
        d = new TextEncoder(),
        m = await o("HttpXHRRequestBinaryEncode").binaryEncodeRelayAPIRequest(
          t,
          n,
        ),
        p = o("OhaiCommonUtils").concat(
          o("OhaiCommonUtils").encodeNumber(s, 1),
          o("OhaiCommonUtils").encodeNumber(l, 2),
          o("OhaiCommonUtils").encodeNumber(i, 2),
          o("OhaiCommonUtils").encodeNumber(a, 2),
        ),
        _ = d.encode(o("OhaiCommonUtils").REQUEST_LABEL),
        f = await c.setupBaseS(u, _),
        g = f.ctx,
        h = f.enc,
        y = await g.seal(p, m),
        C = o("OhaiCommonUtils").concat(p, h, y);
      return { ctx: g, enc: h, encapsulatedRequest: C };
    }
    async function u(e, t, n) {
      var r = e.aead,
        a = e.kdf,
        i = r.nN,
        l = r.nK,
        s = Math.max(i, l),
        u = n.slice(0, s),
        c = n.slice(s),
        d = new TextEncoder(),
        m = await e.export(d.encode(o("OhaiCommonUtils").RESPONSE_LABEL), l),
        p = o("OhaiCommonUtils").concat(t, u),
        _ = await a.extract(p, m),
        f = await a.expand(_, d.encode("key"), l),
        g = await a.expand(_, d.encode("nonce"), i),
        h = await r.open(f, g, o("OhaiCommonUtils").EMPTY_AAD, c),
        y = await o("HttpResponseBinaryDecode").binaryDecodeResponse(h);
      return y;
    }
    ((l.encapsulateRequest = e),
      (l.encapsulateRelayAPIRequest = s),
      (l.decapsulateResponse = u));
  },
  98,
);
