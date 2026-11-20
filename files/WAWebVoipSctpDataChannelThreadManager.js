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
            r = n.withRing,
            a = r === void 0 ? !0 : r,
            i = o("WAWebABProps").getABPropConfigValue(
              "enable_web_voip_proxy_and_sctp_workers",
            );
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(i),
            ),
            !i)
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
          var l = k;
          l != null && (yield l);
          var s = E;
          if (s != null && s.isActive())
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] thread already active, reuse",
                  ])),
              ),
              a && (yield s.ensureRingBuffer()),
              !0
            );
          var g = L;
          if (g != null) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var h = yield g;
              return L !== g ||
                ((E = h),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(h.isActive()),
                ),
                !h.isActive())
                ? !1
                : (a && (yield h.ensureRingBuffer()), !0);
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
          return $(e, a);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] init WASM pthread for RTCDataChannel I/O",
              ])),
          );
          var n =
              t &&
              o("WAWebABProps").getABPropConfigValue(
                "web_voip_sctp_ring_start_after_flags",
              ),
            a = r("WAWebVoipSctpDataChannelThread").create({
              initRing: t && !n,
            });
          L = a;
          try {
            var i,
              l,
              s,
              u,
              c = yield a;
            return L !== a ||
              ((E = c),
              (i = E) == null ||
                i.setRemoveRelayPortOverride(
                  o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
                ),
              (l = E) == null || l.setSctpTimeoutMs(e()),
              (s = E) == null || s.setRelayParkedTxIdleMs(N()),
              n && (yield c.ensureRingBuffer(), L !== a))
              ? !1
              : (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] WASM pthread created successfully",
                    ])),
                ),
                (u = E) == null || u.ping(),
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
        P.apply(this, arguments)
      );
    }
    function N() {
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
    function M() {
      return O() != null || L != null;
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        A.apply(this, arguments)
      );
    }
    function F() {
      return E != null && E.isActive();
    }
    function O() {
      return E != null && E.isActive() ? E : null;
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            var n = q(e);
            k = n;
            try {
              yield n;
            } finally {
              k === n && (k = null);
            }
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        U.apply(this, arguments)
      );
    }
    ((l.initDataChannelWorker = D),
      (l.hasDataChannelThreadOrPending = M),
      (l.ensureDataChannelRingBuffer = w),
      (l.isDataChannelThreadActive = F),
      (l.getDataChannelThread = O),
      (l.stopDataChannelWorker = B));
  },
  98,
);
