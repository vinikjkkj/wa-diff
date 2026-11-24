__d(
  "WAWebDebugRaTlsConnection",
  [
    "WALogger",
    "WATheiaRaTls",
    "WAWebDebugTlsRecordParser",
    "WAWebTEENodeTokenFetcher",
    "WAWebTeeRequestConfig",
    "err",
    "getErrorSafe",
    "vulture",
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
      g = 6e4,
      h = 32,
      y = Object.freeze({
        0: "CONNECTING",
        1: "OPEN",
        2: "CLOSING",
        3: "CLOSED",
      }),
      C = Object.freeze(
        ((e = {}),
        (e[(d = o("WATheiaRaTls")).WATheiaRaTlsState.INIT.valueOf()] = "INIT"),
        (e[d.WATheiaRaTlsState.CONNECTING.valueOf()] = "CONNECTING"),
        (e[d.WATheiaRaTlsState.CONNECTED.valueOf()] = "CONNECTED"),
        (e[d.WATheiaRaTlsState.CLOSED.valueOf()] = "CLOSED"),
        (e[d.WATheiaRaTlsState.ERROR.valueOf()] = "ERROR"),
        e),
      ),
      b = "wss://teellm.meta.com?x-tee-node-token=<redacted>",
      v = 1;
    async function S(e) {
      var t = e.clientPolicy,
        n = await R(e),
        a = n.logPhase,
        i = n.metrics,
        l = n.session;
      try {
        a("attestation-and-transparency.inspect.start", null);
        var c = w(l);
        a("attestation-and-transparency.inspect.complete", c);
        var d = M(t, i, c);
        return (
          a("handshake.success", d),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ratls-wasm] connected policy=",
                " steps=",
                " sent=",
                " received=",
                "",
              ])),
            t,
            String(d.handshakeSteps),
            String(d.sentBytes),
            String(d.receivedBytes),
          ),
          d
        );
      } catch (e) {
        throw (
          a("handshake.failed", {
            error: te(e),
            failedPhase: "attestation-and-transparency.inspect",
          }),
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
        n.close();
      }
    }
    async function R(e) {
      var t = e.clientPolicy,
        n = e.env,
        a = e.onPhase,
        i = e.shouldVerifyCert,
        l = v++,
        s = U(l, a),
        u = function (t, n) {
          return V(s, t, n);
        },
        d = null,
        m = null,
        h = null,
        y = function () {
          var e, t;
          (V(s, "cleanup.start", { sessionState: z(d), socket: B(m) }),
            (e = h) == null || e.dispose(),
            (t = d) == null || t.close(),
            A(m, l),
            V(s, "cleanup.complete", { socket: B(m) }));
        };
      V(s, "handshake.start", {
        clientPolicy: t,
        env: n,
        handshakeDeadlineMs: g,
        maxHandshakeSteps: p,
        openTimeoutMs: _,
        serverFlightTimeoutMs: f,
        shouldVerifyCert: i,
      });
      try {
        var C;
        V(s, "node-token.fetch.start", { env: n });
        var b = await o("WAWebTEENodeTokenFetcher").fetchNodeToken(n),
          S = b.chipId,
          R = b.nodeToken,
          I = b.serializedTrustedNode;
        (V(s, "node-token.fetch.complete", {
          chipIdLength: (C = S == null ? void 0 : S.length) != null ? C : 0,
          nodeTokenLength: R.length,
          serializedTrustedNodeLength: I.length,
        }),
          V(s, "node-token.url-value.start", { nodeTokenLength: R.length }));
        var T = new TextDecoder().decode(R);
        V(s, "node-token.url-value.complete", {
          nodeTokenQueryValueLength: T.length,
        });
        var D = E(o("WAWebTeeRequestConfig").getTeeRequestConfig(n).teeHost, T);
        V(s, "wasm.load.start", null);
        var x = await o("WATheiaRaTls").loadWATheiaRaTls();
        (V(s, "wasm.load.complete", null),
          V(s, "session.create.start", {
            clientPolicy: t,
            enableTheiaV2Mode: !0,
            requestTransparencyReport: !0,
            serializedTrustedNodeLength: I.length,
            shouldVerifyCert: i,
          }),
          (d = x.createSession(t, {
            enableTheiaV2Mode: !0,
            requestTransparencyReport: !0,
            serializedTrustedNode: I,
            shouldVerifyCert: i,
          })),
          V(s, "session.create.complete", { sessionState: z(d) }),
          V(s, "websocket.open.start", { endpoint: O(D) }),
          (m = await L(D, l)),
          (h = $(m, l)),
          V(s, "websocket.open.complete", { socket: B(m) }),
          V(s, "tls.handshake.start", { sessionState: z(d), socket: B(m) }));
        var P = await k(d, m, h, l);
        return (
          V(s, "tls.handshake.complete", {
            metrics: W(P),
            sessionState: z(d),
            socket: B(m),
          }),
          {
            close: y,
            logPhase: u,
            metrics: P,
            reader: h,
            session: d,
            socket: m,
          }
        );
      } catch (e) {
        var N = s.currentPhase;
        throw (
          V(s, "handshake.failed", {
            error: te(e),
            failedPhase: N,
            sessionState: z(d),
            socket: B(m),
          }),
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[ratls-wasm] debug handshake failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("ratls-wasm-debug-handshake-failed"),
          y(),
          e
        );
      }
    }
    function L(e, t) {
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
              (r("vulture")("dzTyTjKzLuqvbll578jytu701nU="), l(), o(F(t)));
            };
          ((i = self.setTimeout(function () {
            (r("vulture")("23uYNgzMtwHJFLKkBScvgi7_4ek="),
              l(),
              A(a, t),
              o(r("err")("RA-TLS WebSocket open timed out")));
          }, _)),
            a.addEventListener("open", s),
            a.addEventListener("error", u),
            a.addEventListener("close", c));
        })
      );
    }
    function E(e, t) {
      return (
        r("vulture")("ZgIDO8UlcBygUzFOy0Mre1LTOKU="),
        "wss://teellm.meta.com/" +
          e +
          "?x-tee-node-token=" +
          encodeURIComponent(t)
      );
    }
    async function k(e, t, n, o) {
      r("vulture")("yaHOthay9An-g_dWhRIsoctxheA=");
      try {
        var a = await I(e, t, n, o);
        return a;
      } catch (e) {
        throw e;
      }
    }
    async function I(e, t, n, o) {
      r("vulture")("R2xlebNzPs5GZXd--S1Mdj8JlzE=");
      var a = {
        finalAdditionalErrorCode: 0,
        handshakeSteps: 0,
        receivedBytes: 0,
        sentBytes: 0,
      };
      var i = e.performHandshake(m, m, m);
      return (
        x({ handshakeID: o, metrics: a, result: i, session: e, socket: t }),
        await T(e, t, n, a, o, Date.now() + g),
        a
      );
    }
    async function T(e, t, n, a, i, l) {
      r("vulture")("bK4bGSuwTiH64GjKgVyKP8yB4G4=");
      var s = e.getState(),
        u = a.handshakeSteps;
      if (s === o("WATheiaRaTls").WATheiaRaTlsState.CONNECTED.valueOf()) {
        return;
      }
      if (a.handshakeSteps >= p)
        throw r("err")(
          "RA-TLS handshake did not connect after " +
            String(a.handshakeSteps) +
            " steps",
        );
      var c = u + 1;
      var d;
      try {
        d = await D(n, l);
      } catch (n) {
        throw (te(n), n);
      }
      ((a.receivedBytes += d.length), G(d));
      var _ = e.performHandshake(m, d, m);
      return (
        x({ handshakeID: i, metrics: a, result: _, session: e, socket: t }),
        T(e, t, n, a, i, l)
      );
    }
    async function D(e, t) {
      var n = t - Date.now(),
        o = n <= f,
        a = Math.max(0, Math.min(f, n)),
        i = null,
        l = new Promise(function (e, t) {
          i = self.setTimeout(function () {
            t(
              o
                ? r("err")(
                    "RA-TLS handshake exceeded its overall deadline of " +
                      g +
                      " ms",
                  )
                : r("err")(
                    "RA-TLS WebSocket timed out waiting for a server flight after " +
                      a +
                      " ms",
                  ),
            );
          }, a);
        });
      try {
        return await Promise.race([e.read(), l]);
      } finally {
        i != null && self.clearTimeout(i);
      }
    }
    function x(e) {
      var t = e.handshakeID,
        n = e.metrics,
        a = e.result,
        i = e.session,
        l = e.socket;
      (r("vulture")("guU55mazTdHUFunUyMSBY9jaD9U="),
        (n.handshakeSteps += 1),
        (n.finalAdditionalErrorCode = a.additionalErrorCode));
      var s = n.handshakeSteps,
        u = i.getState();
      if (
        (G(a.sendBuffer),
        q(a),
        (n.sentBytes += N(l, a.sendBuffer, t, s)),
        u === o("WATheiaRaTls").WATheiaRaTlsState.ERROR.valueOf())
      )
        throw (
          q(a),
          r("err")(
            "RA-TLS handshake failed with code " +
              String(a.additionalErrorCode),
          )
        );
    }
    function $(e, t) {
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
            P(t.data)
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
          (r("vulture")("WI8uadyTgdvSZ7r_WCeXbQgGZPk="), l(F(t)));
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
    async function P(e) {
      if (
        (r("vulture")("86n4XmaSgQHIVF55fZMUkRT21dI="), e instanceof ArrayBuffer)
      )
        return new Uint8Array(e);
      if (Blob !== void 0 && e instanceof Blob)
        return new Uint8Array(await e.arrayBuffer());
      throw r("err")("RA-TLS WebSocket returned non-binary data");
    }
    function N(e, t, n, o) {
      if ((r("vulture")("XssDGqQ_C1Fb5nwEaWmyTLzM_UY="), t.length === 0))
        return 0;
      try {
        e.send(t);
      } catch (e) {
        throw e;
      }
      return t.length;
    }
    function M(e, t, n) {
      return (
        r("vulture")("UzwcWQ6b3D3RIBbujgODXffTr2U="),
        {
          attestationBundleCount: n.attestationBundleCount,
          clientPolicy: e,
          endpoint: b,
          finalAdditionalErrorCode: t.finalAdditionalErrorCode,
          handshakeSteps: t.handshakeSteps,
          localServiceTransparencyStreamCount:
            n.localServiceTransparencyStreamCount,
          receivedBytes: t.receivedBytes,
          sentBytes: t.sentBytes,
          state: "CONNECTED",
        }
      );
    }
    function w(e) {
      var t = e.getLocalServiceTransparencyReport();
      return {
        attestationBundleCount: e.getAttestationBundles().length,
        localServiceTransparencyStreamCount: Object.keys(t).length,
      };
    }
    function A(e, t) {
      (r("vulture")("lAKI6I9fOekiflFxcl_RODfsN0Q="),
        e != null && e.readyState !== WebSocket.CLOSED && e.close());
    }
    function F(e) {
      return (
        r("vulture")("AI-uJmOC6CCmrr4R6_RGAuMQH0M="),
        r("err")("RA-TLS WebSocket closed " + J(e))
      );
    }
    function O(e) {
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
          redacted: b,
          searchParamNames: n.sort(),
        };
      } catch (e) {
        return { error: te(e), redacted: b };
      }
    }
    function B(e) {
      return (
        r("vulture")("Ns0V1JtATt1fhoe6I_osHWmV-QI="),
        e == null
          ? null
          : {
              binaryType: e.binaryType,
              bufferedAmount: e.bufferedAmount,
              readyState: e.readyState,
              readyStateName: Z(e.readyState),
              url: b,
            }
      );
    }
    function W(e) {
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
    function q(e) {
      return (
        r("vulture")("AFhW6LGW9qs_RTT7KIm-RiywfGg="),
        {
          additionalErrorCode: e.additionalErrorCode,
          recvBuffer: K(e.recvBuffer),
          sendBuffer: K(e.sendBuffer),
          state: e.state,
          stateName: ee(e.state),
          transparencyReportDataBuffer: K(e.transparencyReportDataBuffer),
        }
      );
    }
    function U(e, t) {
      var n = Date.now();
      return {
        currentPhase: "created",
        handshakeID: e,
        onPhase: t,
        phaseStartedAtMs: n,
        sequence: 0,
        startedAtMs: n,
      };
    }
    function V(e, t, n) {
      var r = Date.now(),
        o = r - e.phaseStartedAtMs,
        a = r - e.startedAtMs;
      ((e.sequence += 1),
        e.onPhase == null ||
          e.onPhase({ phase: t, phaseElapsedMs: o, totalElapsedMs: a }),
        (e.currentPhase = t),
        (e.phaseStartedAtMs = r));
    }
    function H(e, t, n, r, o, a, i) {}
    function G(e) {
      return babelHelpers.extends(
        { bytes: K(e) },
        o("WAWebDebugTlsRecordParser").parseTLSRecords(e),
      );
    }
    function z(e) {
      if ((r("vulture")("hbNQn3Da3OTc-Tx7o6MmeBgrhYE="), e == null))
        return null;
      try {
        return j(e.getState());
      } catch (e) {
        return { error: te(e), state: null, stateName: "unavailable" };
      }
    }
    function j(e) {
      return (
        r("vulture")("WZ5wYe2a4fGlAQVXfscec8VD-Gs="),
        { state: e, stateName: ee(e) }
      );
    }
    function K(e) {
      r("vulture")("qHN_gqNAg98GSDNDPh1tmfBtN-Q=");
      var t = Math.min(e.length, h);
      if (e.length <= h)
        return { length: e.length, previewHex: Q(e, 0, t), previewLength: t };
      var n = Math.max(t, e.length - h);
      return {
        length: e.length,
        previewHex: Q(e, 0, t),
        previewLength: t,
        tailHex: Q(e, n, e.length),
        tailLength: e.length - n,
        truncatedBytes: n - t,
      };
    }
    function Q(e, t, n) {
      r("vulture")("m1uCPLbe5rUd_U3-bH96sqlUDJg=");
      for (var o = [], a = t; a < n; a++)
        o.push(e[a].toString(16).padStart(2, "0"));
      return o.join("");
    }
    function X(e) {
      return (
        r("vulture")("OjDg7AMacALjVx_3qe8iGrFMWsw="),
        e instanceof ArrayBuffer
          ? "ArrayBuffer"
          : Blob !== void 0 && e instanceof Blob
            ? "Blob"
            : typeof e
      );
    }
    function Y(e) {
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
    function J(e) {
      var t;
      r("vulture")("-ILB6KCusNt_azA0T9EKbVxmEBE=");
      var n = Y(e);
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
    function Z(e) {
      var t;
      return (
        r("vulture")("Hp89HkHB58cYcA7UN0SjsvUBqoA="),
        (t = y[e]) != null ? t : "UNKNOWN"
      );
    }
    function ee(e) {
      var t;
      return (
        r("vulture")("HvZozKdBIqeJaLHCkatEjg10J8I="),
        (t = C[e]) != null ? t : "UNKNOWN"
      );
    }
    function te(e) {
      return (
        r("vulture")("al2W0ASl1y1MEGz6cK_FDlOaZJw="),
        e instanceof Error
          ? { message: e.message, name: e.name, stack: e.stack }
          : { message: String(e) }
      );
    }
    ((l.checkTheiaRaTlsHandshake = S), (l.openTheiaRaTlsConnection = R));
  },
  98,
);
