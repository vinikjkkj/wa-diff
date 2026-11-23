__d(
  "WAWebVoipSctpDataChannelThreadManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipGatingUtils",
    "WAWebVoipSctpDataChannelThread",
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
    async function D(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.withRing,
        a = r === void 0 ? !0 : r,
        i = o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_proxy_and_sctp_workers",
        );
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] init shouldEnable=",
              "",
            ])),
          String(i),
        ),
        !i)
      )
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] disabled by ABProp, skip",
              ])),
          ),
          !1
        );
      if (!T())
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] no RTCDataChannel transfer support, skip",
              ])),
          ),
          !1
        );
      var l = k;
      l != null && (await l);
      var f = E;
      if (f != null && f.isActive())
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] thread already active, reuse",
              ])),
          ),
          a && (await f.ensureRingBuffer()),
          !0
        );
      var g = L;
      if (g != null) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [DCThread] Awaiting existing pthread creation promise",
            ])),
        );
        try {
          var h = await g;
          return L !== g ||
            ((E = h),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Existing promise resolved, thread active: ",
                  "",
                ])),
              String(h.isActive()),
            ),
            !h.isActive())
            ? !1
            : (a && (await h.ensureRingBuffer()), !0);
        } catch (e) {
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Existing promise rejected: ",
                  "",
                ])),
              String(e),
            ),
            !1
          );
        }
      }
      return x(e, a);
    }
    async function x(e, t) {
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [DCThread] init WASM pthread for RTCDataChannel I/O",
          ])),
      );
      var n =
          t &&
          o("WAWebABProps").getABPropConfigValue(
            "web_voip_sctp_ring_start_after_flags",
          ),
        a = r("WAWebVoipSctpDataChannelThread").create({ initRing: t && !n });
      L = a;
      try {
        var i,
          l,
          s,
          u,
          c = await a;
        return L !== a ||
          ((E = c),
          (i = E) == null ||
            i.setRemoveRelayPortOverride(
              o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
            ),
          (l = E) == null || l.setSctpTimeoutMs(e()),
          (s = E) == null || s.setRelayParkedTxIdleMs($()),
          n && (await c.ensureRingBuffer(), L !== a))
          ? !1
          : (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread created successfully",
                ])),
            ),
            (u = E) == null || u.ping(),
            !0);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Failed to create WASM pthread: ",
                "",
              ])),
            e,
          ),
          (L = null),
          !1
        );
      }
    }
    function $() {
      try {
        return r("justknobx")._("1307") || 0;
      } catch (e) {
        return (
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
      return w() != null || L != null;
    }
    async function N() {
      var e = E,
        t = L;
      if (e == null && t != null) {
        try {
          e = await t;
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
    }
    function M() {
      return E != null && E.isActive();
    }
    function w() {
      return E != null && E.isActive() ? E : null;
    }
    async function A() {
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
          await t.shutdown(),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] WASM pthread shutdown complete",
              ])),
          ));
        return;
      }
      if (e != null) {
        var n = F(e);
        k = n;
        try {
          await n;
        } finally {
          k === n && (k = null);
        }
      }
    }
    async function F(e) {
      var t;
      try {
        t = await e;
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
        await t.shutdown());
    }
    ((l.initDataChannelWorker = D),
      (l.hasDataChannelThreadOrPending = P),
      (l.ensureDataChannelRingBuffer = N),
      (l.isDataChannelThreadActive = M),
      (l.getDataChannelThread = w),
      (l.stopDataChannelWorker = A));
  },
  98,
);
