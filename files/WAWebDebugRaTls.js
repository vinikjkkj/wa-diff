__d(
  "WAWebDebugRaTls",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WATheiaRaTls",
    "WAWebTEENodeTokenThriftFetcher",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new Uint8Array(0),
      p = 100,
      _ = 1e4,
      f = 3e4,
      g = 32,
      h = Object.freeze({
        0: "CONNECTING",
        1: "OPEN",
        2: "CLOSING",
        3: "CLOSED",
      }),
      y = Object.freeze(
        ((e = {}),
        (e[(d = o("WATheiaRaTls")).WATheiaRaTlsState.INIT.valueOf()] = "INIT"),
        (e[d.WATheiaRaTlsState.CONNECTING.valueOf()] = "CONNECTING"),
        (e[d.WATheiaRaTlsState.CONNECTED.valueOf()] = "CONNECTED"),
        (e[d.WATheiaRaTlsState.CLOSED.valueOf()] = "CLOSED"),
        (e[d.WATheiaRaTlsState.ERROR.valueOf()] = "ERROR"),
        e),
      ),
      C = "wss://teellm.meta.com?x-tee-node-token=<redacted>",
      b = 1;
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (e === void 0 &&
              (e = o("WATheiaRaTls").WATheiaRaTlsClientPolicy.DEBUG),
              t === void 0 && (t = !0),
              n === void 0 && (n = "rc"),
              a === void 0 && (a = !1));
            var i = b++,
              l = null,
              c = null;
            try {
              var d = yield o(
                  "WAWebTEENodeTokenThriftFetcher",
                ).fetchNodeTokenViaThrift(n, a),
                m = d.nodeToken,
                p = L(o("WABase64").encodeB64(m)),
                _ = yield o("WATheiaRaTls").loadWATheiaRaTls();
              ((l = _.createSession(e, {
                enableTheiaV2Mode: !0,
                requestTransparencyReport: !0,
                shouldVerifyCert: t,
              })),
                (c = yield R(p, i)));
              var f = yield E(l, c, i),
                g = A(l, e, f);
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[ratls-wasm] connected policy=",
                      " steps=",
                      " sent=",
                      " received=",
                      "",
                    ])),
                  e,
                  String(g.handshakeSteps),
                  String(g.sentBytes),
                  String(g.receivedBytes),
                ),
                g
              );
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[ratls-wasm] debug handshake failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("ratls-wasm-debug-handshake-failed"),
                e
              );
            } finally {
              (l != null && l.close(), F(c, i));
            }
          },
        )),
        S.apply(this, arguments)
      );
    }
    ((v.doc =
      "Full flow: fetch a TEE node token via the dev-only thrift endpoint, then run a browser RA-TLS WASM handshake against the teellm WebSocket endpoint. Optional args: clientPolicy, shouldVerifyCert, env, useAcs."),
      (v.paramsToExecute = []));
    function R(e, t) {
      return new (c || (c = n("Promise")))(function (n, o) {
        var a = new WebSocket(e);
        a.binaryType = "arraybuffer";
        var i = null,
          l = function () {
            (i != null && self.clearTimeout(i),
              a.removeEventListener("open", s),
              a.removeEventListener("error", u),
              a.removeEventListener("close", c));
          },
          s = function () {
            (l(), n(a));
          },
          u = function (t) {
            (l(), o(r("err")("RA-TLS WebSocket open failed")));
          },
          c = function (t) {
            (l(), o(O(t)));
          };
        ((i = self.setTimeout(function () {
          (l(), F(a, t), o(r("err")("RA-TLS WebSocket open timed out")));
        }, _)),
          a.addEventListener("open", s),
          a.addEventListener("error", u),
          a.addEventListener("close", c));
      });
    }
    function L(e) {
      return (
        "wss://teellm.meta.com/alpha.teellm.wa.meta.com?x-tee-node-token=" +
        encodeURIComponent(e)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, o) {
          var a = P(t, o),
            i = null,
            l = new (c || (c = n("Promise")))(function (e, t) {
              i = self.setTimeout(function () {
                t(r("err")("RA-TLS WebSocket handshake timed out"));
              }, f);
            });
          try {
            var s = yield (c || (c = n("Promise"))).race([I(e, t, a, o), l]);
            return s;
          } catch (e) {
            throw e;
          } finally {
            (i != null && self.clearTimeout(i), a.dispose());
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = {
                finalAdditionalErrorCode: 0,
                handshakeSteps: 0,
                receivedBytes: 0,
                sentBytes: 0,
              },
              a = e.performHandshake(m, m, m);
            return ($(e, t, o, a, r), yield D(e, t, n, o, r), o);
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r, o) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = e.getState();
            if (l !== o("WATheiaRaTls").WATheiaRaTlsState.CONNECTED.valueOf()) {
              if (a.handshakeSteps >= p)
                throw r("err")(
                  "RA-TLS handshake did not connect after " +
                    String(a.handshakeSteps) +
                    " steps",
                );
              var s;
              try {
                s = yield n.read();
              } catch (e) {
                throw e;
              }
              a.receivedBytes += s.length;
              var u = e.performHandshake(m, s, m);
              return ($(e, t, a, u, i), D(e, t, n, a, i));
            }
          },
        )),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, a, i) {
      ((n.handshakeSteps += 1),
        (n.finalAdditionalErrorCode = a.additionalErrorCode));
      var l = e.getState();
      if (
        ((n.sentBytes += w(t, a.sendBuffer, i, n.handshakeSteps)),
        l === o("WATheiaRaTls").WATheiaRaTlsState.ERROR.valueOf())
      )
        throw r("err")(
          "RA-TLS handshake failed with code " + String(a.additionalErrorCode),
        );
    }
    function P(e, t) {
      var o = [],
        a = [],
        i = null,
        l = function () {
          for (; o.length > 0 && a.length > 0; ) {
            var e = o.shift(),
              t = a.shift();
            e != null && t != null && t.resolve(e);
          }
        },
        s = function (t) {
          for (i = t; a.length > 0; ) {
            var e = a.shift();
            e != null && e.reject(t);
          }
        },
        u = function (t) {
          N(t.data)
            .then(function (e) {
              e.length > 0 && (o.push(e), l());
            })
            .catch(function (e) {
              s(r("getErrorSafe")(e));
            });
        },
        d = function (t) {
          s(r("err")("RA-TLS WebSocket read failed"));
        },
        m = function (t) {
          s(O(t));
        };
      return (
        e.addEventListener("message", u),
        e.addEventListener("error", d),
        e.addEventListener("close", m),
        {
          read: function () {
            var e = o.shift();
            return e != null
              ? (c || (c = n("Promise"))).resolve(e)
              : i != null
                ? (c || (c = n("Promise"))).reject(i)
                : new (c || (c = n("Promise")))(function (e, t) {
                    a.push({ resolve: e, reject: t });
                  });
          },
          dispose: function () {
            (e.removeEventListener("message", u),
              e.removeEventListener("error", d),
              e.removeEventListener("close", m),
              s(r("err")("RA-TLS WebSocket byte reader disposed")));
          },
        }
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (Blob !== void 0 && e instanceof Blob)
            return new Uint8Array(yield e.arrayBuffer());
          throw r("err")("RA-TLS WebSocket returned non-binary data");
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      if (t.length === 0) return 0;
      try {
        e.send(t);
      } catch (e) {
        throw e;
      }
      return t.length;
    }
    function A(e, t, n) {
      return {
        attestationBundleCount: e.getAttestationBundles().length,
        clientPolicy: t,
        endpoint: C,
        finalAdditionalErrorCode: n.finalAdditionalErrorCode,
        handshakeSteps: n.handshakeSteps,
        localServiceTransparencyStreamCount: Object.keys(
          e.getLocalServiceTransparencyReport(),
        ).length,
        receivedBytes: n.receivedBytes,
        sentBytes: n.sentBytes,
        state: "CONNECTED",
      };
    }
    function F(e, t) {
      e != null && e.readyState !== WebSocket.CLOSED && e.close();
    }
    function O(e) {
      return r("err")(
        "RA-TLS WebSocket closed before handshake completed " + Q(e),
      );
    }
    function B(e) {
      try {
        var t = new URL(e),
          n = [];
        t.searchParams.forEach(function (e, t) {
          n.push(t);
        });
        var r = t.searchParams.get("x-tee-node-token");
        return {
          host: t.host,
          nodeTokenLength: r == null ? 0 : r.length,
          nodeTokenPresent: r != null && r.length > 0,
          pathname: t.pathname,
          protocol: t.protocol,
          redacted: C,
          searchParamNames: n.sort(),
        };
      } catch (e) {
        return { error: J(e), redacted: C };
      }
    }
    function W(e) {
      return e == null
        ? null
        : {
            binaryType: e.binaryType,
            bufferedAmount: e.bufferedAmount,
            readyState: e.readyState,
            readyStateName: X(e.readyState),
            url: C,
          };
    }
    function q(e) {
      return {
        finalAdditionalErrorCode: e.finalAdditionalErrorCode,
        handshakeSteps: e.handshakeSteps,
        receivedBytes: e.receivedBytes,
        sentBytes: e.sentBytes,
      };
    }
    function U(e) {
      return {
        additionalErrorCode: e.additionalErrorCode,
        recvBuffer: G(e.recvBuffer),
        sendBuffer: G(e.sendBuffer),
        state: e.state,
        stateName: Y(e.state),
        transparencyReportDataBuffer: G(e.transparencyReportDataBuffer),
      };
    }
    function V(e) {
      if (e == null) return null;
      try {
        return H(e.getState());
      } catch (e) {
        return { error: J(e), state: null, stateName: "unavailable" };
      }
    }
    function H(e) {
      return { state: e, stateName: Y(e) };
    }
    function G(e) {
      var t = Math.min(e.length, g);
      if (e.length <= g)
        return { length: e.length, previewHex: z(e, 0, t), previewLength: t };
      var n = Math.max(t, e.length - g);
      return {
        length: e.length,
        previewHex: z(e, 0, t),
        previewLength: t,
        tailHex: z(e, n, e.length),
        tailLength: e.length - n,
        truncatedBytes: n - t,
      };
    }
    function z(e, t, n) {
      for (var r = [], o = t; o < n; o++)
        r.push(e[o].toString(16).padStart(2, "0"));
      return r.join("");
    }
    function j(e) {
      return e instanceof ArrayBuffer
        ? "ArrayBuffer"
        : Blob !== void 0 && e instanceof Blob
          ? "Blob"
          : typeof e;
    }
    function K(e) {
      return CloseEvent !== void 0 && e instanceof CloseEvent
        ? { code: e.code, reason: e.reason, type: e.type, wasClean: e.wasClean }
        : { type: e.type };
    }
    function Q(e) {
      var t,
        n = K(e);
      return n.code == null
        ? n.type
        : n.type +
            " code=" +
            String(n.code) +
            " wasClean=" +
            String(n.wasClean) +
            " reason=" +
            ((t = n.reason) != null ? t : "");
    }
    function X(e) {
      var t;
      return (t = h[e]) != null ? t : "UNKNOWN";
    }
    function Y(e) {
      var t;
      return (t = y[e]) != null ? t : "UNKNOWN";
    }
    function J(e) {
      return e instanceof Error
        ? { message: e.message, name: e.name, stack: e.stack }
        : { message: String(e) };
    }
    var Z = { runTheiaRaTlsHandshake: v };
    l.default = Z;
  },
  98,
);
