__d(
  "WAWebWindowsHybridBridgeFactory",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebWindowsHybridBridge",
    "WAWebWindowsHybridBridge.v2627",
    "WAWebWindowsHybridBridge.v2628",
    "WAWebWindowsHybridBridge.v2629",
    "WAWebWindowsHybridBridge.v2630",
    "WAWebWindowsHybridBridge.v2631",
    "WAWebWindowsHybridBridge.v2632",
    "WAWebWindowsHybridBridge.v2633",
    "WAWebWindowsHybridBridge.v2634",
    "WAWebWindowsHybridBridge.v2635",
    "WAWebWindowsHybridBridge.v2636",
    "WAWebWindowsHybridBridge.v2637",
    "WAWebWindowsHybridBridgeCommon",
    "WAWebWindowsHybridBridgeUtils",
    "WAWebWindowsHybridFlowHelpers",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new URLSearchParams((e = self.location.search) != null ? e : ""),
      _ = p.get("bridgeError") === "1";
    function f(e) {
      var t;
      if (!r("WAWebEnvironment").isWindows) return !1;
      if (((t = window.chrome) == null ? void 0 : t.webview) == null) {
        if (r("gkx")("26258") || _) throw r("err")(e);
        return !1;
      }
      return !0;
    }
    function g(e) {
      var t;
      return (
        e === void 0 && (e = "getWebView: no bridge available"),
        f(e) ? ((t = window.chrome) == null ? void 0 : t.webview) : null
      );
    }
    function h() {
      try {
        var e = g();
        if (e != null) {
          var t = o("WAWebBuildConstants").WINDOWS_BUILD;
          t != null &&
            (t = o(
              "WAWebWindowsHybridBridgeUtils",
            ).getBetaHybridVersionForBridgeCut(t));
          var n = y(t, e);
          return (
            o("WAWebWindowsHybridBridgeCommon").WAWebWindowsSetBridge(n),
            n
          );
        }
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "WinRTBridge: failed to initialize: ",
              "",
            ])),
          e,
        );
      }
      return null;
    }
    function y(e, t) {
      try {
        return e != null && e.startsWith("2627")
          ? new (o("WAWebWindowsHybridBridge.v2627").WindowsHybridBridge_v2627)(
              o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(t),
            )
          : e != null && e.startsWith("2628")
            ? new (o(
                "WAWebWindowsHybridBridge.v2628",
              ).WindowsHybridBridge_v2628)(
                o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(t),
              )
            : e != null && e.startsWith("2629")
              ? new (o(
                  "WAWebWindowsHybridBridge.v2629",
                ).WindowsHybridBridge_v2629)(
                  o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(t),
                )
              : e != null && e.startsWith("2630")
                ? new (o(
                    "WAWebWindowsHybridBridge.v2630",
                  ).WindowsHybridBridge_v2630)(
                    o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(
                      t,
                    ),
                  )
                : e != null && e.startsWith("2631")
                  ? new (o(
                      "WAWebWindowsHybridBridge.v2631",
                    ).WindowsHybridBridge_v2631)(
                      o(
                        "WAWebWindowsHybridFlowHelpers",
                      ).unsafeCastCustomWebView(t),
                    )
                  : e != null && e.startsWith("2632")
                    ? new (o(
                        "WAWebWindowsHybridBridge.v2632",
                      ).WindowsHybridBridge_v2632)(
                        o(
                          "WAWebWindowsHybridFlowHelpers",
                        ).unsafeCastCustomWebView(t),
                      )
                    : e != null && e.startsWith("2633")
                      ? new (o(
                          "WAWebWindowsHybridBridge.v2633",
                        ).WindowsHybridBridge_v2633)(
                          o(
                            "WAWebWindowsHybridFlowHelpers",
                          ).unsafeCastCustomWebView(t),
                        )
                      : e != null && e.startsWith("2634")
                        ? new (o(
                            "WAWebWindowsHybridBridge.v2634",
                          ).WindowsHybridBridge_v2634)(
                            o(
                              "WAWebWindowsHybridFlowHelpers",
                            ).unsafeCastCustomWebView(t),
                          )
                        : e != null && e.startsWith("2635")
                          ? new (o(
                              "WAWebWindowsHybridBridge.v2635",
                            ).WindowsHybridBridge_v2635)(
                              o(
                                "WAWebWindowsHybridFlowHelpers",
                              ).unsafeCastCustomWebView(t),
                            )
                          : e != null && e.startsWith("2636")
                            ? new (o(
                                "WAWebWindowsHybridBridge.v2636",
                              ).WindowsHybridBridge_v2636)(
                                o(
                                  "WAWebWindowsHybridFlowHelpers",
                                ).unsafeCastCustomWebView(t),
                              )
                            : e != null && e.startsWith("2637")
                              ? new (o(
                                  "WAWebWindowsHybridBridge.v2637",
                                ).WindowsHybridBridge_v2637)(
                                  o(
                                    "WAWebWindowsHybridFlowHelpers",
                                  ).unsafeCastCustomWebView(t),
                                )
                              : (o("WALogger")
                                  .ERROR(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "windows hybrid bridge: unsupported build version ",
                                            "",
                                          ],
                                        )),
                                    e,
                                  )
                                  .sendLogs(
                                    "windows hybrid bridge version missing",
                                  ),
                                new (o(
                                  "WAWebWindowsHybridBridge",
                                ).WindowsHybridBridge)(t));
      } catch (e) {
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "WinRTBridge: failed to initialize bridge instance: ",
              "",
            ])),
          e,
        );
      }
    }
    var C = null,
      b = 0,
      v = null;
    function S(e) {
      if (C == null) {
        (b > 0
          ? o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "WinRTBridge: init called ",
                    "x, build=",
                    ", firstInitiator=",
                    ", retryInitiator=",
                    "",
                  ])),
                b,
                o("WAWebBuildConstants").WINDOWS_BUILD,
                v,
                e,
              )
              .sendLogs("windows bridge multiple init")
          : (v = e),
          b++);
        try {
          C = h();
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "WinRTBridge: failed to initialize: ",
                  "",
                ])),
              e,
            )
            .sendLogs("windows bridge init error");
        }
      }
      return C;
    }
    ((l.getIsBridgeReady = f), (l.getWebView = g), (l.getWindowsBridge = S));
  },
  98,
);
