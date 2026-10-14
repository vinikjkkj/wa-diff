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
      v = null,
      S = null,
      R = null;
    function L() {
      if (R != null) return R;
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
          (R = !0));
      } catch (e) {
        R = !1;
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
          String(R),
        ),
        R === !0
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_proxy_and_sctp_workers",
          );
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(t),
            ),
            !t)
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
          if (!L())
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip",
                  ])),
              ),
              !1
            );
          if (S != null && S.isActive())
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] thread already active, reuse",
                  ])),
              ),
              !0
            );
          if (v != null) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var n, a;
              return (
                (S = yield v),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(
                    (n = (a = S) == null ? void 0 : a.isActive()) != null
                      ? n
                      : !1,
                  ),
                ),
                S != null && S.isActive()
              );
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
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] init WASM pthread for RTCDataChannel I/O",
              ])),
          ),
            (v = r("WAWebVoipSctpDataChannelThread").create()));
          try {
            var i, l, s, C;
            return (
              (S = yield v),
              (i = S) == null ||
                i.setRemoveRelayPortOverride(
                  o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(),
                ),
              (l = S) == null || l.setSctpTimeoutMs(e()),
              (s = S) == null || s.setRelayParkedTxIdleMs(I()),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread created successfully",
                  ])),
              ),
              (C = S) == null || C.ping(),
              !0
            );
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
              (v = null),
              !1
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
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
    function T() {
      return S != null && S.isActive();
    }
    function D() {
      return S != null && S.isActive() ? S : null;
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (((v = null), S == null || !S.isActive())) {
            S = null;
            return;
          }
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down WASM pthread",
              ])),
          );
          var e = S;
          ((S = null),
            yield e.shutdown(),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread shutdown complete",
                ])),
            ));
        })),
        $.apply(this, arguments)
      );
    }
    ((l.initDataChannelWorker = E),
      (l.isDataChannelThreadActive = T),
      (l.getDataChannelThread = D),
      (l.stopDataChannelWorker = x));
  },
  98,
);
