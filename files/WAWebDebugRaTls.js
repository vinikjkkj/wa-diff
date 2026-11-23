__d(
  "WAWebDebugRaTls",
  [
    "WABase64",
    "WALogger",
    "WATheiaRaTls",
    "WAWebTEENodeTokenThriftFetcher",
    "err",
    "getErrorSafe",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Uint8Array(0),
      m = 100,
      p = 1e4,
      _ = 3e4,
      f = 32,
      g = Object.freeze({
        0: "CONNECTING",
        1: "OPEN",
        2: "CLOSING",
        3: "CLOSED",
      }),
      h = Object.freeze(
        ((e = {}),
        (e[(c = o("WATheiaRaTls")).WATheiaRaTlsState.INIT.valueOf()] = "INIT"),
        (e[c.WATheiaRaTlsState.CONNECTING.valueOf()] = "CONNECTING"),
        (e[c.WATheiaRaTlsState.CONNECTED.valueOf()] = "CONNECTED"),
        (e[c.WATheiaRaTlsState.CLOSED.valueOf()] = "CLOSED"),
        (e[c.WATheiaRaTlsState.ERROR.valueOf()] = "ERROR"),
        e),
      ),
      y = "wss://teellm.meta.com?x-tee-node-token=<redacted>",
      C = 1;
    async function b(e, t, n, a) {
      (e === void 0 && (e = o("WATheiaRaTls").WATheiaRaTlsClientPolicy.DEBUG),
        t === void 0 && (t = !0),
        n === void 0 && (n = "rc"),
        a === void 0 && (a = !1),
        r("vulture")("U6xdoTMDVjiK4v0tosmgto-RVyQ="));
      var i = C++,
        l = null,
        c = null;
      try {
        var d = await o(
            "WAWebTEENodeTokenThriftFetcher",
          ).fetchNodeTokenViaThrift(n, a),
          m = d.nodeToken,
          p = S(o("WABase64").encodeB64(m)),
          _ = await o("WATheiaRaTls").loadWATheiaRaTls();
        ((l = _.createSession(e, {
          enableTheiaV2Mode: !0,
          requestTransparencyReport: !0,
          shouldVerifyCert: t,
        })),
          (c = await v(p, i)));
        var f = await R(l, c, i),
          g = x(l, e, f);
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
        (l != null && l.close(), $(c, i));
      }
    }
    ((b.doc =
      "Full flow: fetch a TEE node token via the dev-only thrift endpoint, then run a browser RA-TLS WASM handshake against the teellm WebSocket endpoint. Optional args: clientPolicy, shouldVerifyCert, env, useAcs."),
      (b.paramsToExecute = []));
    function v(e, t) {
      return (
        r("vulture")("LekoiFKOyKN7mo_eKCRgzRVLLiw="),
        new Promise(function (n, o) {
          r("vulture")("9DpeG8RX7rcjODaFvUz4svMu_-k=");
          var a = new WebSocket(e);
          a.binaryType = "arraybuffer";
          var i = null,
            l = function () {
              (r("vulture")("nSy2xNeY8_iJ4UPisS6QSY2VVhE="),
                i != null && self.clearTimeout(i),
                a.removeEventListener("open", s),
                a.removeEventListener("error", u),
                a.removeEventListener("close", c));
            },
            s = function () {
              (r("vulture")("hMqjgfwRdh5x6MN3y0CTkA9tOQE="), l(), n(a));
            },
            u = function (t) {
              (r("vulture")("DfPDBBKz2Y3UguYuAN8gEm4-2VQ="),
                l(),
                o(r("err")("RA-TLS WebSocket open failed")));
            },
            c = function (t) {
              (r("vulture")("dzTyTjKzLuqvbll578jytu701nU="), l(), o(P(t)));
            };
          ((i = self.setTimeout(function () {
            (r("vulture")("23uYNgzMtwHJFLKkBScvgi7_4ek="),
              l(),
              $(a, t),
              o(r("err")("RA-TLS WebSocket open timed out")));
          }, p)),
            a.addEventListener("open", s),
            a.addEventListener("error", u),
            a.addEventListener("close", c));
        })
      );
    }
    function S(e) {
      return (
        r("vulture")("ZgIDO8UlcBygUzFOy0Mre1LTOKU="),
        "wss://teellm.meta.com/alpha.teellm.wa.meta.com?x-tee-node-token=" +
          encodeURIComponent(e)
      );
    }
    async function R(e, t, n) {
      r("vulture")("yaHOthay9An-g_dWhRIsoctxheA=");
      var o = I(t, n),
        a = null,
        i = new Promise(function (e, t) {
          (r("vulture")("dvrisfEIUIj_XMuMupXKfYY25Ok="),
            (a = self.setTimeout(function () {
              (r("vulture")("Bja7DJcl1iErHZ_nWUCGupYkplM="),
                t(r("err")("RA-TLS WebSocket handshake timed out")));
            }, _)));
        });
      try {
        var l = await Promise.race([L(e, t, o, n), i]);
        return l;
      } catch (e) {
        throw e;
      } finally {
        (a != null && self.clearTimeout(a), o.dispose());
      }
    }
    async function L(e, t, n, o) {
      r("vulture")("R2xlebNzPs5GZXd--S1Mdj8JlzE=");
      var a = {
          finalAdditionalErrorCode: 0,
          handshakeSteps: 0,
          receivedBytes: 0,
          sentBytes: 0,
        },
        i = e.performHandshake(d, d, d);
      return (
        k({ handshakeID: o, metrics: a, result: i, session: e, socket: t }),
        await E(e, t, n, a, o),
        a
      );
    }
    async function E(e, t, n, a, i) {
      r("vulture")("bK4bGSuwTiH64GjKgVyKP8yB4G4=");
      var l = e.getState();
      if (l !== o("WATheiaRaTls").WATheiaRaTlsState.CONNECTED.valueOf()) {
        if (a.handshakeSteps >= m)
          throw r("err")(
            "RA-TLS handshake did not connect after " +
              String(a.handshakeSteps) +
              " steps",
          );
        var s;
        try {
          s = await n.read();
        } catch (e) {
          throw e;
        }
        a.receivedBytes += s.length;
        var u = e.performHandshake(d, s, d);
        return (
          k({ handshakeID: i, metrics: a, result: u, session: e, socket: t }),
          E(e, t, n, a, i)
        );
      }
    }
    function k(e) {
      var t = e.handshakeID,
        n = e.metrics,
        a = e.result,
        i = e.session,
        l = e.socket;
      (r("vulture")("guU55mazTdHUFunUyMSBY9jaD9U="),
        (n.handshakeSteps += 1),
        (n.finalAdditionalErrorCode = a.additionalErrorCode));
      var s = i.getState();
      if (
        ((n.sentBytes += D(l, a.sendBuffer, t, n.handshakeSteps)),
        s === o("WATheiaRaTls").WATheiaRaTlsState.ERROR.valueOf())
      )
        throw r("err")(
          "RA-TLS handshake failed with code " + String(a.additionalErrorCode),
        );
    }
    function I(e, t) {
      r("vulture")("Nl4EFvwKOdG0PiRsZXVGSg5LlDw=");
      var n = [],
        o = [],
        a = null,
        i = function () {
          for (
            r("vulture")("c1828S3q2ApaCsAqv7UUVv0nbHs=");
            n.length > 0 && o.length > 0;
          ) {
            var e = n.shift(),
              t = o.shift();
            e != null && t != null && t.resolve(e);
          }
        },
        l = function (t) {
          for (
            r("vulture")("fxvxzc4xcQCUT6tKd2x9NT6pgug="), a = t;
            o.length > 0;
          ) {
            var e = o.shift();
            e != null && e.reject(t);
          }
        },
        s = function (t) {
          (r("vulture")("UX3okXeZdNIUz8wqZFdnMTt0mwA="),
            T(t.data)
              .then(function (e) {
                (r("vulture")("VjBSTxwglUmyWqUswrcJqgQ1N2I="),
                  e.length > 0 && (n.push(e), i()));
              })
              .catch(function (e) {
                (r("vulture")("cJb3nL6S3MPMf8ehr8WFeS07W2U="),
                  l(r("getErrorSafe")(e)));
              }));
        },
        u = function (t) {
          (r("vulture")("G62Md_uRbepTIf37E5qAHQ-AQAU="),
            l(r("err")("RA-TLS WebSocket read failed")));
        },
        c = function (t) {
          (r("vulture")("WI8uadyTgdvSZ7r_WCeXbQgGZPk="), l(P(t)));
        };
      return (
        e.addEventListener("message", s),
        e.addEventListener("error", u),
        e.addEventListener("close", c),
        {
          read: function () {
            r("vulture")("LIr_lAoXJ7oAYn9PPZZ-ty34rHc=");
            var e = n.shift();
            return e != null
              ? Promise.resolve(e)
              : a != null
                ? Promise.reject(a)
                : new Promise(function (e, t) {
                    (r("vulture")("WCsFNoXsu10zmC9Yn-wxowlAva8="),
                      o.push({ resolve: e, reject: t }));
                  });
          },
          dispose: function () {
            (r("vulture")("PDF89k3bQWqC8HvlAEa5s5b9qtg="),
              e.removeEventListener("message", s),
              e.removeEventListener("error", u),
              e.removeEventListener("close", c),
              l(r("err")("RA-TLS WebSocket byte reader disposed")));
          },
        }
      );
    }
    async function T(e) {
      if (
        (r("vulture")("86n4XmaSgQHIVF55fZMUkRT21dI="), e instanceof ArrayBuffer)
      )
        return new Uint8Array(e);
      if (Blob !== void 0 && e instanceof Blob)
        return new Uint8Array(await e.arrayBuffer());
      throw r("err")("RA-TLS WebSocket returned non-binary data");
    }
    function D(e, t, n, o) {
      if ((r("vulture")("XssDGqQ_C1Fb5nwEaWmyTLzM_UY="), t.length === 0))
        return 0;
      try {
        e.send(t);
      } catch (e) {
        throw e;
      }
      return t.length;
    }
    function x(e, t, n) {
      return (
        r("vulture")("UzwcWQ6b3D3RIBbujgODXffTr2U="),
        {
          attestationBundleCount: e.getAttestationBundles().length,
          clientPolicy: t,
          endpoint: y,
          finalAdditionalErrorCode: n.finalAdditionalErrorCode,
          handshakeSteps: n.handshakeSteps,
          localServiceTransparencyStreamCount: Object.keys(
            e.getLocalServiceTransparencyReport(),
          ).length,
          receivedBytes: n.receivedBytes,
          sentBytes: n.sentBytes,
          state: "CONNECTED",
        }
      );
    }
    function $(e, t) {
      (r("vulture")("lAKI6I9fOekiflFxcl_RODfsN0Q="),
        e != null && e.readyState !== WebSocket.CLOSED && e.close());
    }
    function P(e) {
      return (
        r("vulture")("AI-uJmOC6CCmrr4R6_RGAuMQH0M="),
        r("err")("RA-TLS WebSocket closed before handshake completed " + V(e))
      );
    }
    function N(e) {
      r("vulture")("wKpjdKShtqRBmP6xL51vJoTvXW4=");
      try {
        var t = new URL(e),
          n = [];
        t.searchParams.forEach(function (e, t) {
          (r("vulture")("8DkLyPEBWyOSU9jWzi-pZU2P5Rg="), n.push(t));
        });
        var o = t.searchParams.get("x-tee-node-token");
        return {
          host: t.host,
          nodeTokenLength: o == null ? 0 : o.length,
          nodeTokenPresent: o != null && o.length > 0,
          pathname: t.pathname,
          protocol: t.protocol,
          redacted: y,
          searchParamNames: n.sort(),
        };
      } catch (e) {
        return { error: z(e), redacted: y };
      }
    }
    function M(e) {
      return (
        r("vulture")("Ns0V1JtATt1fhoe6I_osHWmV-QI="),
        e == null
          ? null
          : {
              binaryType: e.binaryType,
              bufferedAmount: e.bufferedAmount,
              readyState: e.readyState,
              readyStateName: H(e.readyState),
              url: y,
            }
      );
    }
    function w(e) {
      return (
        r("vulture")("tqfx8Q70_07pBY8IqW9Uv-Xz5Ro="),
        {
          finalAdditionalErrorCode: e.finalAdditionalErrorCode,
          handshakeSteps: e.handshakeSteps,
          receivedBytes: e.receivedBytes,
          sentBytes: e.sentBytes,
        }
      );
    }
    function A(e) {
      return (
        r("vulture")("AFhW6LGW9qs_RTT7KIm-RiywfGg="),
        {
          additionalErrorCode: e.additionalErrorCode,
          recvBuffer: B(e.recvBuffer),
          sendBuffer: B(e.sendBuffer),
          state: e.state,
          stateName: G(e.state),
          transparencyReportDataBuffer: B(e.transparencyReportDataBuffer),
        }
      );
    }
    function F(e) {
      if ((r("vulture")("hbNQn3Da3OTc-Tx7o6MmeBgrhYE="), e == null))
        return null;
      try {
        return O(e.getState());
      } catch (e) {
        return { error: z(e), state: null, stateName: "unavailable" };
      }
    }
    function O(e) {
      return (
        r("vulture")("WZ5wYe2a4fGlAQVXfscec8VD-Gs="),
        { state: e, stateName: G(e) }
      );
    }
    function B(e) {
      r("vulture")("qHN_gqNAg98GSDNDPh1tmfBtN-Q=");
      var t = Math.min(e.length, f);
      if (e.length <= f)
        return { length: e.length, previewHex: W(e, 0, t), previewLength: t };
      var n = Math.max(t, e.length - f);
      return {
        length: e.length,
        previewHex: W(e, 0, t),
        previewLength: t,
        tailHex: W(e, n, e.length),
        tailLength: e.length - n,
        truncatedBytes: n - t,
      };
    }
    function W(e, t, n) {
      r("vulture")("m1uCPLbe5rUd_U3-bH96sqlUDJg=");
      for (var o = [], a = t; a < n; a++)
        o.push(e[a].toString(16).padStart(2, "0"));
      return o.join("");
    }
    function q(e) {
      return (
        r("vulture")("OjDg7AMacALjVx_3qe8iGrFMWsw="),
        e instanceof ArrayBuffer
          ? "ArrayBuffer"
          : Blob !== void 0 && e instanceof Blob
            ? "Blob"
            : typeof e
      );
    }
    function U(e) {
      return (
        r("vulture")("SP5O8hczvOr2FSnm6WFjbdVHrUE="),
        CloseEvent !== void 0 && e instanceof CloseEvent
          ? {
              code: e.code,
              reason: e.reason,
              type: e.type,
              wasClean: e.wasClean,
            }
          : { type: e.type }
      );
    }
    function V(e) {
      var t;
      r("vulture")("-ILB6KCusNt_azA0T9EKbVxmEBE=");
      var n = U(e);
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
    function H(e) {
      var t;
      return (
        r("vulture")("Hp89HkHB58cYcA7UN0SjsvUBqoA="),
        (t = g[e]) != null ? t : "UNKNOWN"
      );
    }
    function G(e) {
      var t;
      return (
        r("vulture")("HvZozKdBIqeJaLHCkatEjg10J8I="),
        (t = h[e]) != null ? t : "UNKNOWN"
      );
    }
    function z(e) {
      return (
        r("vulture")("al2W0ASl1y1MEGz6cK_FDlOaZJw="),
        e instanceof Error
          ? { message: e.message, name: e.name, stack: e.stack }
          : { message: String(e) }
      );
    }
    var j = { runTheiaRaTlsHandshake: b };
    l.default = j;
  },
  98,
);
