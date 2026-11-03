__d(
  "WATheiaRaTls",
  [
    "$InternalEnum",
    "WAResolvable",
    "WATheiaRaTlsWasm",
    "WAWasmModuleCache",
    "bx",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
        INIT: 0,
        CONNECTING: 1,
        CONNECTED: 2,
        CLOSED: 3,
        ERROR: 4,
      }),
      u = n("$InternalEnum")({
        STAGING: "staging",
        PROD: "prod",
        DEBUG: "debug",
        TEELAB_DEBUG: "teelab_debug",
        TEELAB_STAGING: "teelab_staging",
        GAIA_DEBUG: "gaia_debug",
        GAIA_STAGING: "gaia_staging",
        GAIA_PROD: "gaia_prod",
        LOOPBACK_DEBUG: "loopback_debug",
        LOOPBACK_STAGING: "loopback_staging",
        CODEC_AVATAR_DEBUG: "codec_avatar_debug",
        CODEC_AVATAR_STAGING: "codec_avatar_staging",
      }),
      c = r("bx").getURL(r("bx")("47448")),
      d = 32,
      m = Object.freeze(
        ((e = {}),
        (e[s.INIT.valueOf()] = "INIT"),
        (e[s.CONNECTING.valueOf()] = "CONNECTING"),
        (e[s.CONNECTED.valueOf()] = "CONNECTED"),
        (e[s.CLOSED.valueOf()] = "CLOSED"),
        (e[s.ERROR.valueOf()] = "ERROR"),
        e),
      ),
      p = null,
      _ = 1,
      f = new WeakMap(),
      g = new WeakMap();
    function h() {
      return (
        p == null &&
          (p = y().catch(function (e) {
            throw ((p = null), e);
          })),
        p
      );
    }
    async function y() {
      var e = await C();
      return new S(e);
    }
    function C() {
      var e = new (o("WAResolvable").Resolvable)(),
        t = r("WATheiaRaTlsWasm")({
          getRandomValue: b,
          instantiateWasm: function (n, r) {
            return (
              o("WAWasmModuleCache")
                .loadWasmModule(c)
                .then(function (e) {
                  return WebAssembly.instantiate(e, n);
                })
                .then(function (t) {
                  (r(t), e.resolve());
                })
                .catch(function (t) {
                  e.reject(t);
                }),
              {}
            );
          },
        });
      return e.promise
        .then(function () {
          return t;
        })
        .then(function (e) {
          return e;
        })
        .catch(function (e) {
          throw e;
        });
    }
    function b() {
      var e = new Uint32Array(1);
      return (self.crypto.getRandomValues(e), e[0]);
    }
    var v = (function () {
        function e(e) {
          var t = _++;
          (f.set(this, t), g.set(this, e));
        }
        var t = e.prototype;
        return (
          (t.performHandshake = function (t, n, r) {
            var e = L(this);
            try {
              var o = e.performHandshake(t, n, r);
              return o;
            } catch (e) {
              throw e;
            }
          }),
          (t.tlsEncapsulate = function (t) {
            var e = L(this),
              n = e.tlsEncapsulate(t);
            return n;
          }),
          (t.tlsDecapsulate = function (t) {
            var e = L(this),
              n = e.tlsDecapsulate(t);
            return n;
          }),
          (t.getState = function () {
            var e = L(this),
              t = e.getState();
            return t;
          }),
          (t.getAttestationBundles = function () {
            var e = L(this),
              t = e.getAttestationBundles();
            return t;
          }),
          (t.getLocalServiceTransparencyReport = function () {
            var e = L(this),
              t = e.getLocalServiceTransparencyReport();
            return t;
          }),
          (t.close = function () {
            var e = g.get(this);
            e != null && (e.delete(), g.delete(this));
          }),
          e
        );
      })(),
      S = (function () {
        function e(e) {
          ((this.$1 = e), (this.ClientPolicy = u), (this.State = s));
        }
        var t = e.prototype;
        return (
          (t.createSession = function (t, n) {
            n === void 0 && (n = {});
            var e = n,
              r = e.enableTheiaV2Mode,
              o = r === void 0 ? !1 : r,
              a = e.requestTransparencyReport,
              i = a === void 0 ? !1 : a,
              l = e.serializedTrustedNode,
              s = l === void 0 ? null : l,
              u = e.shouldVerifyCert,
              c = u === void 0 ? !0 : u,
              d = e.teeSessionId,
              m = d === void 0 ? null : d,
              p = R(t);
            try {
              var _ = new this.$1.TheiaRaTlsSession(p, c, o, i, s, m),
                f = new v(_);
              return f;
            } catch (e) {
              throw e;
            }
          }),
          e
        );
      })();
    function R(e) {
      return e.valueOf();
    }
    function L(e) {
      var t = g.get(e);
      if (t == null) throw r("err")("WATheiaRaTlsSession is closed");
      return t;
    }
    function E(e) {
      return f.get(e);
    }
    function k(e) {
      return {
        additionalErrorCode: e.additionalErrorCode,
        recvBuffer: T(e.recvBuffer),
        sendBuffer: T(e.sendBuffer),
        state: e.state,
        stateName: $(e.state),
        transparencyReportDataBuffer: T(e.transparencyReportDataBuffer),
      };
    }
    function I(e) {
      return e == null
        ? { isNull: !0, length: 0, previewHex: "", previewLength: 0 }
        : T(e);
    }
    function T(e) {
      var t = Math.min(e.length, d);
      if (e.length <= d)
        return { length: e.length, previewHex: D(e, 0, t), previewLength: t };
      var n = Math.max(t, e.length - d);
      return {
        length: e.length,
        previewHex: D(e, 0, t),
        previewLength: t,
        tailHex: D(e, n, e.length),
        tailLength: e.length - n,
        truncatedBytes: n - t,
      };
    }
    function D(e, t, n) {
      for (var r = [], o = t; o < n; o++)
        r.push(e[o].toString(16).padStart(2, "0"));
      return r.join("");
    }
    function x(e) {
      try {
        var t = e.getState();
        return { state: t, stateName: $(t) };
      } catch (e) {
        return { error: P(e), state: null, stateName: "unavailable" };
      }
    }
    function $(e) {
      var t;
      return (t = m[e]) != null ? t : "UNKNOWN";
    }
    function P(e) {
      return e instanceof Error
        ? { message: e.message, name: e.name, stack: e.stack }
        : { message: String(e) };
    }
    ((l.WATheiaRaTlsState = s),
      (l.WATheiaRaTlsClientPolicy = u),
      (l.loadWATheiaRaTls = h),
      (l.WATheiaRaTlsSession = v));
  },
  98,
);
