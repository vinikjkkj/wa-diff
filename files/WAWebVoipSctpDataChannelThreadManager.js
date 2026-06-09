__d(
  "WAWebVoipSctpDataChannelThreadManager",
  [
    "WALogger",
    "WAWebABProps",
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
      b = null,
      v = null,
      S = null;
    function R() {
      if (S != null) return S;
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
          (S = !0));
      } catch (e) {
        S = !1;
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
          String(S),
        ),
        S === !0
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_proxy_and_sctp_workers",
          );
          if (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] init shouldEnable=",
                  "",
                ])),
              String(t),
            ),
            !t)
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Disabled by ABProp, skipping pthread creation",
                  ])),
              ),
              !1
            );
          if (!R())
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] no RTCDataChannel transfer support, skip",
                  ])),
              ),
              !1
            );
          if (b != null && b.isActive())
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] Thread already active, reusing existing pthread",
                  ])),
              ),
              !0
            );
          if (v != null) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] Awaiting existing pthread creation promise",
                ])),
            );
            try {
              var n, a;
              return (
                (b = yield v),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [DCThread] Existing promise resolved, thread active: ",
                      "",
                    ])),
                  String(
                    (n = (a = b) == null ? void 0 : a.isActive()) != null
                      ? n
                      : !1,
                  ),
                ),
                b != null && b.isActive()
              );
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
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Initializing WASM pthread for RTCDataChannel I/O",
              ])),
          ),
            (v = r("WAWebVoipSctpDataChannelThread").create()));
          try {
            var i, l, y;
            b = yield v;
            var C = r("justknobx")._("1929");
            return (
              (i = b) == null || i.setRemoveRelayPortOverride(C),
              (l = b) == null || l.setSctpTimeoutMs(e),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [DCThread] WASM pthread created successfully",
                  ])),
              ),
              (y = b) == null || y.ping(),
              !0
            );
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
              (v = null),
              !1
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return b != null && b.isActive();
    }
    function I() {
      return b != null && b.isActive() ? b : null;
    }
    function T() {
      return b;
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (((v = null), b == null || !b.isActive())) {
            b = null;
            return;
          }
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] Shutting down WASM pthread",
              ])),
          );
          var e = b;
          ((b = null),
            yield e.shutdown(),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] WASM pthread shutdown complete",
                ])),
            ));
        })),
        x.apply(this, arguments)
      );
    }
    ((l.initDataChannelWorker = L),
      (l.isDataChannelThreadActive = k),
      (l.getDataChannelThread = I),
      (l.getDataChannelThreadRaw = T),
      (l.stopDataChannelWorker = D));
  },
  98,
);
