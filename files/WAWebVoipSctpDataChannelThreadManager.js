__d(
  "WAWebVoipSctpDataChannelThreadManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipGatingUtils",
    "WAWebVoipSctpDataChannelThread",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = null,
      E = null,
      k = null,
      I = null;
    function T() {
      if (I != null) return I;
      var t = null;
      try {
        t = new RTCPeerConnection();
        var n = t.createDataChannel("__transfer_probe__", {
            negotiated: !0,
            id: 0,
          }),
          r = new MessageChannel();
        (r.port1.postMessage({ ch: n }, [n]),
          r.port1.close(),
          r.port2.close(),
          (I = !0));
      } catch (e) {
        I = !1;
      } finally {
        var a;
        (a = t) == null || a.close();
      }
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] RTCDataChannel transfer supported: ",
              "",
            ])),
          String(I),
        ),
        I === !0
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t === void 0 ? {} : t,
            a = n.withRing,
            i = a === void 0 ? !0 : a,
            l = o("WAWebABProps").getABPropConfigValue(
              "enable_web_voip_proxy_and_sctp_workers",
            );
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(l),
            ),
            !l)
          )
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] disabled by ABProp, skip",
                  ])),
              ),
              !1
            );
          if (!T())
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip",
                  ])),
              ),
              !1
            );
          var s = k;
          s != null && (yield s);
          var C = E;
          if (C != null && C.isActive())
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] thread already active, reuse",
                  ])),
              ),
              i && (yield C.ensureRingBuffer()),
              !0
            );
          var b = L;
          if (b != null) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var v = yield b;
              return L !== b ||
                ((E = v),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(v.isActive()),
                ),
                !v.isActive())
                ? !1
                : (i && (yield v.ensureRingBuffer()), !0);
            } catch (e) {
              return (
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise rejected: ",
                      "",
                    ])),
                  String(e),
                ),
                !1
              );
            }
          }
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] init WASM pthread for RTCDataChannel I/O",
              ])),
          );
          var S = r("WAWebVoipSctpDataChannelThread").create({ initRing: i });
          L = S;
          try {
            var R,
              I,
              D,
              x,
              P = yield S;
            return L !== S
              ? !1
              : ((E = P),
                (R = E) == null ||
                  R.setRemoveRelayPortOverride(
                    o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
                  ),
                (I = E) == null || I.setSctpTimeoutMs(e()),
                (D = E) == null || D.setRelayParkedTxIdleMs($()),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] WASM pthread created successfully",
                    ])),
                ),
                (x = E) == null || x.ping(),
                !0);
          } catch (e) {
            return (
              o("WALogger").ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Failed to create WASM pthread: ",
                    "",
                  ])),
                e,
              ),
              (L = null),
              !1
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      try {
        return r("justknobx")._("1307") || 0;
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] relay parked TX idle JK unavailable, using fallback=6000: ",
                "",
              ])),
            String(e),
          ),
          6e3
        );
      }
    }
    function P() {
      return A() != null || L != null;
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = E,
            t = L;
          if (e == null && t != null) {
            try {
              e = yield t;
            } catch (e) {
              return (
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] No send ring: pthread creation failed: ",
                      "",
                    ])),
                  String(e),
                ),
                !1
              );
            }
            if (L !== t) return !1;
          }
          return e == null || !e.isActive() ? !1 : e.ensureRingBuffer();
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return E != null && E.isActive();
    }
    function A() {
      return E != null && E.isActive() ? E : null;
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = L;
          L = null;
          var t = E;
          if (((E = null), t != null)) {
            t.isActive() &&
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Shutting down WASM pthread",
                  ])),
              ),
              yield t.shutdown(),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread shutdown complete",
                  ])),
              ));
            return;
          }
          if (e != null) {
            var n = B(e);
            k = n;
            try {
              yield n;
            } finally {
              k === n && (k = null);
            }
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield e;
          } catch (e) {
            o("WALogger").WARN(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Stopped pthread creation had failed: ",
                  "",
                ])),
              String(e),
            );
            return;
          }
          (o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down a WASM pthread that was still being created",
              ])),
          ),
            yield t.shutdown());
        })),
        W.apply(this, arguments)
      );
    }
    ((l.initDataChannelWorker = D),
      (l.hasDataChannelThreadOrPending = P),
      (l.ensureDataChannelRingBuffer = N),
      (l.isDataChannelThreadActive = w),
      (l.getDataChannelThread = A),
      (l.stopDataChannelWorker = F));
  },
  98,
);
