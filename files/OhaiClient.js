__d(
  "OhaiClient",
  [
    "HttpRequestBinaryEncode",
    "HttpResponseBinaryDecode",
    "HttpXHRRequestBinaryEncode",
    "OhaiCommonUtils",
    "asyncToGeneratorRuntime",
    "getHpkeFromConfigIds",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var a = e.aeadId,
            i = e.kdfId,
            l = e.kemId,
            s = e.keyId,
            u = e.publicKey,
            c = r("getHpkeFromConfigIds")({ kemId: l, kdfId: i, aeadId: a }),
            d = new TextEncoder(),
            m = yield o("HttpRequestBinaryEncode").binaryEncodeRequest(t, n),
            p = o("OhaiCommonUtils").concat(
              o("OhaiCommonUtils").encodeNumber(s, 1),
              o("OhaiCommonUtils").encodeNumber(l, 2),
              o("OhaiCommonUtils").encodeNumber(i, 2),
              o("OhaiCommonUtils").encodeNumber(a, 2),
            ),
            _ = d.encode(o("OhaiCommonUtils").REQUEST_LABEL),
            f = yield c.setupBaseS(u, _),
            g = f.ctx,
            h = f.enc,
            y = yield g.seal(p, m),
            C = o("OhaiCommonUtils").concat(p, h, y);
          return { ctx: g, enc: h, encapsulatedRequest: C };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var a = e.aeadId,
            i = e.kdfId,
            l = e.kemId,
            s = e.keyId,
            u = e.publicKey,
            c = r("getHpkeFromConfigIds")({ kemId: l, kdfId: i, aeadId: a }),
            d = new TextEncoder(),
            m = yield o(
              "HttpXHRRequestBinaryEncode",
            ).binaryEncodeRelayAPIRequest(t, n),
            p = o("OhaiCommonUtils").concat(
              o("OhaiCommonUtils").encodeNumber(s, 1),
              o("OhaiCommonUtils").encodeNumber(l, 2),
              o("OhaiCommonUtils").encodeNumber(i, 2),
              o("OhaiCommonUtils").encodeNumber(a, 2),
            ),
            _ = d.encode(o("OhaiCommonUtils").REQUEST_LABEL),
            f = yield c.setupBaseS(u, _),
            g = f.ctx,
            h = f.enc,
            y = yield g.seal(p, m),
            C = o("OhaiCommonUtils").concat(p, h, y);
          return { ctx: g, enc: h, encapsulatedRequest: C };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.aead,
            a = e.kdf,
            i = r.nN,
            l = r.nK,
            s = Math.max(i, l),
            u = n.slice(0, s),
            c = n.slice(s),
            d = new TextEncoder(),
            m = yield e.export(
              d.encode(o("OhaiCommonUtils").RESPONSE_LABEL),
              l,
            ),
            p = o("OhaiCommonUtils").concat(t, u),
            _ = yield a.extract(p, m),
            f = yield a.expand(_, d.encode("key"), l),
            g = yield a.expand(_, d.encode("nonce"), i),
            h = yield r.open(f, g, o("OhaiCommonUtils").EMPTY_AAD, c),
            y = yield o("HttpResponseBinaryDecode").binaryDecodeResponse(h);
          return y;
        })),
        m.apply(this, arguments)
      );
    }
    ((l.encapsulateRequest = e),
      (l.encapsulateRelayAPIRequest = u),
      (l.decapsulateResponse = d));
  },
  98,
);
