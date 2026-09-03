__d(
  "WATheiaRaTls",
  [
    "$InternalEnum",
    "WAResolvable",
    "WATheiaRaTlsWasm",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
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
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield b();
          return new R(e);
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      var e = new (o("WAResolvable").Resolvable)(),
        t = r("WATheiaRaTlsWasm")({
          getRandomValue: v,
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
    function v() {
      var e = new Uint32Array(1);
      return (self.crypto.getRandomValues(e), e[0]);
    }
    var S = (function () {
        function e(e) {
          var t = _++;
          (f.set(this, t), g.set(this, e));
        }
        var t = e.prototype;
        return (
          (t.performHandshake = function (t, n, r) {
            var e = E(this);
            try {
              var o = e.performHandshake(t, n, r);
              return o;
            } catch (e) {
              throw e;
            }
          }),
          (t.tlsEncapsulate = function (t) {
            var e = E(this),
              n = e.tlsEncapsulate(t);
            return n;
          }),
          (t.tlsDecapsulate = function (t) {
            var e = E(this),
              n = e.tlsDecapsulate(t);
            return n;
          }),
          (t.getState = function () {
            var e = E(this),
              t = e.getState();
            return t;
          }),
          (t.getAttestationBundles = function () {
            var e = E(this),
              t = e.getAttestationBundles();
            return t;
          }),
          (t.getLocalServiceTransparencyReport = function () {
            var e = E(this),
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
      R = (function () {
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
              p = L(t);
            try {
              var _ = new this.$1.TheiaRaTlsSession(p, c, o, i, s, m),
                f = new S(_);
              return f;
            } catch (e) {
              throw e;
            }
          }),
          e
        );
      })();
    function L(e) {
      return e.valueOf();
    }
    function E(e) {
      var t = g.get(e);
      if (t == null) throw r("err")("WATheiaRaTlsSession is closed");
      return t;
    }
    function k(e) {
      return f.get(e);
    }
    function I(e) {
      return {
        additionalErrorCode: e.additionalErrorCode,
        recvBuffer: D(e.recvBuffer),
        sendBuffer: D(e.sendBuffer),
        state: e.state,
        stateName: P(e.state),
        transparencyReportDataBuffer: D(e.transparencyReportDataBuffer),
      };
    }
    function T(e) {
      return e == null
        ? { isNull: !0, length: 0, previewHex: "", previewLength: 0 }
        : D(e);
    }
    function D(e) {
      var t = Math.min(e.length, d);
      if (e.length <= d)
        return { length: e.length, previewHex: x(e, 0, t), previewLength: t };
      var n = Math.max(t, e.length - d);
      return {
        length: e.length,
        previewHex: x(e, 0, t),
        previewLength: t,
        tailHex: x(e, n, e.length),
        tailLength: e.length - n,
        truncatedBytes: n - t,
      };
    }
    function x(e, t, n) {
      for (var r = [], o = t; o < n; o++)
        r.push(e[o].toString(16).padStart(2, "0"));
      return r.join("");
    }
    function $(e) {
      try {
        var t = e.getState();
        return { state: t, stateName: P(t) };
      } catch (e) {
        return { error: N(e), state: null, stateName: "unavailable" };
      }
    }
    function P(e) {
      var t;
      return (t = m[e]) != null ? t : "UNKNOWN";
    }
    function N(e) {
      return e instanceof Error
        ? { message: e.message, name: e.name, stack: e.stack }
        : { message: String(e) };
    }
    ((l.WATheiaRaTlsState = s),
      (l.WATheiaRaTlsClientPolicy = u),
      (l.loadWATheiaRaTls = h),
      (l.WATheiaRaTlsSession = S));
  },
  98,
);
