__d(
  "WAWebWindowsHybridBridgeFactory",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebWindowsHybridBridge",
    "WAWebWindowsHybridBridge.v2586",
    "WAWebWindowsHybridBridge.v2587",
    "WAWebWindowsHybridBridge.v2589",
    "WAWebWindowsHybridBridge.v2590",
    "WAWebWindowsHybridBridge.v2591",
    "WAWebWindowsHybridBridge.v2601",
    "WAWebWindowsHybridBridge.v2602",
    "WAWebWindowsHybridBridge.v2603",
    "WAWebWindowsHybridBridge.v2604",
    "WAWebWindowsHybridBridge.v2605",
    "WAWebWindowsHybridBridge.v2606",
    "WAWebWindowsHybridBridge.v2607",
    "WAWebWindowsHybridBridge.v2608",
    "WAWebWindowsHybridBridge.v2609",
    "WAWebWindowsHybridBridge.v2610",
    "WAWebWindowsHybridBridge.v2611",
    "WAWebWindowsHybridBridge.v2613",
    "WAWebWindowsHybridBridge.v2614",
    "WAWebWindowsHybridBridge.v2615",
    "WAWebWindowsHybridBridge.v2616",
    "WAWebWindowsHybridBridge.v2617",
    "WAWebWindowsHybridBridge.v2618",
    "WAWebWindowsHybridBridge.v2619",
    "WAWebWindowsHybridBridge.v2620",
    "WAWebWindowsHybridBridge.v2621",
    "WAWebWindowsHybridBridge.v2622",
    "WAWebWindowsHybridBridge.v2623",
    "WAWebWindowsHybridBridge.v2624",
    "WAWebWindowsHybridBridge.v2625",
    "WAWebWindowsHybridBridge.v2626",
    "WAWebWindowsHybridBridge.v2627",
    "WAWebWindowsHybridBridge.v2628",
    "WAWebWindowsHybridBridge.v2629",
    "WAWebWindowsHybridBridge.v2630",
    "WAWebWindowsHybridBridge.v2631",
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
        return e != null && e.startsWith("2586")
          ? new (o("WAWebWindowsHybridBridge.v2586").WindowsHybridBridge_v2586)(
              o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(t),
            )
          : e != null && e.startsWith("2587")
            ? new (o(
                "WAWebWindowsHybridBridge.v2587",
              ).WindowsHybridBridge_v2587)(
                o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(t),
              )
            : e != null && e.startsWith("2589")
              ? new (o(
                  "WAWebWindowsHybridBridge.v2589",
                ).WindowsHybridBridge_v2589)(
                  o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(t),
                )
              : e != null && e.startsWith("2590")
                ? new (o(
                    "WAWebWindowsHybridBridge.v2590",
                  ).WindowsHybridBridge_v2590)(
                    o("WAWebWindowsHybridFlowHelpers").unsafeCastCustomWebView(
                      t,
                    ),
                  )
                : e != null && e.startsWith("2591")
                  ? new (o(
                      "WAWebWindowsHybridBridge.v2591",
                    ).WindowsHybridBridge_v2591)(
                      o(
                        "WAWebWindowsHybridFlowHelpers",
                      ).unsafeCastCustomWebView(t),
                    )
                  : e != null && e.startsWith("2601")
                    ? new (o(
                        "WAWebWindowsHybridBridge.v2601",
                      ).WindowsHybridBridge_v2601)(
                        o(
                          "WAWebWindowsHybridFlowHelpers",
                        ).unsafeCastCustomWebView(t),
                      )
                    : e != null && e.startsWith("2602")
                      ? new (o(
                          "WAWebWindowsHybridBridge.v2602",
                        ).WindowsHybridBridge_v2602)(
                          o(
                            "WAWebWindowsHybridFlowHelpers",
                          ).unsafeCastCustomWebView(t),
                        )
                      : e != null && e.startsWith("2603")
                        ? new (o(
                            "WAWebWindowsHybridBridge.v2603",
                          ).WindowsHybridBridge_v2603)(
                            o(
                              "WAWebWindowsHybridFlowHelpers",
                            ).unsafeCastCustomWebView(t),
                          )
                        : e != null && e.startsWith("2604")
                          ? new (o(
                              "WAWebWindowsHybridBridge.v2604",
                            ).WindowsHybridBridge_v2604)(
                              o(
                                "WAWebWindowsHybridFlowHelpers",
                              ).unsafeCastCustomWebView(t),
                            )
                          : e != null && e.startsWith("2605")
                            ? new (o(
                                "WAWebWindowsHybridBridge.v2605",
                              ).WindowsHybridBridge_v2605)(
                                o(
                                  "WAWebWindowsHybridFlowHelpers",
                                ).unsafeCastCustomWebView(t),
                              )
                            : e != null && e.startsWith("2606")
                              ? new (o(
                                  "WAWebWindowsHybridBridge.v2606",
                                ).WindowsHybridBridge_v2606)(
                                  o(
                                    "WAWebWindowsHybridFlowHelpers",
                                  ).unsafeCastCustomWebView(t),
                                )
                              : e != null && e.startsWith("2607")
                                ? new (o(
                                    "WAWebWindowsHybridBridge.v2607",
                                  ).WindowsHybridBridge_v2607)(
                                    o(
                                      "WAWebWindowsHybridFlowHelpers",
                                    ).unsafeCastCustomWebView(t),
                                  )
                                : e != null && e.startsWith("2608")
                                  ? new (o(
                                      "WAWebWindowsHybridBridge.v2608",
                                    ).WindowsHybridBridge_v2608)(
                                      o(
                                        "WAWebWindowsHybridFlowHelpers",
                                      ).unsafeCastCustomWebView(t),
                                    )
                                  : e != null && e.startsWith("2609")
                                    ? new (o(
                                        "WAWebWindowsHybridBridge.v2609",
                                      ).WindowsHybridBridge_v2609)(
                                        o(
                                          "WAWebWindowsHybridFlowHelpers",
                                        ).unsafeCastCustomWebView(t),
                                      )
                                    : e != null && e.startsWith("2610")
                                      ? new (o(
                                          "WAWebWindowsHybridBridge.v2610",
                                        ).WindowsHybridBridge_v2610)(
                                          o(
                                            "WAWebWindowsHybridFlowHelpers",
                                          ).unsafeCastCustomWebView(t),
                                        )
                                      : e != null && e.startsWith("2611")
                                        ? new (o(
                                            "WAWebWindowsHybridBridge.v2611",
                                          ).WindowsHybridBridge_v2611)(
                                            o(
                                              "WAWebWindowsHybridFlowHelpers",
                                            ).unsafeCastCustomWebView(t),
                                          )
                                        : e != null && e.startsWith("2613")
                                          ? new (o(
                                              "WAWebWindowsHybridBridge.v2613",
                                            ).WindowsHybridBridge_v2613)(
                                              o(
                                                "WAWebWindowsHybridFlowHelpers",
                                              ).unsafeCastCustomWebView(t),
                                            )
                                          : e != null && e.startsWith("2614")
                                            ? new (o(
                                                "WAWebWindowsHybridBridge.v2614",
                                              ).WindowsHybridBridge_v2614)(
                                                o(
                                                  "WAWebWindowsHybridFlowHelpers",
                                                ).unsafeCastCustomWebView(t),
                                              )
                                            : e != null && e.startsWith("2615")
                                              ? new (o(
                                                  "WAWebWindowsHybridBridge.v2615",
                                                ).WindowsHybridBridge_v2615)(
                                                  o(
                                                    "WAWebWindowsHybridFlowHelpers",
                                                  ).unsafeCastCustomWebView(t),
                                                )
                                              : e != null &&
                                                  e.startsWith("2616")
                                                ? new (o(
                                                    "WAWebWindowsHybridBridge.v2616",
                                                  ).WindowsHybridBridge_v2616)(
                                                    o(
                                                      "WAWebWindowsHybridFlowHelpers",
                                                    ).unsafeCastCustomWebView(
                                                      t,
                                                    ),
                                                  )
                                                : e != null &&
                                                    e.startsWith("2617")
                                                  ? new (o(
                                                      "WAWebWindowsHybridBridge.v2617",
                                                    ).WindowsHybridBridge_v2617)(
                                                      o(
                                                        "WAWebWindowsHybridFlowHelpers",
                                                      ).unsafeCastCustomWebView(
                                                        t,
                                                      ),
                                                    )
                                                  : e != null &&
                                                      e.startsWith("2618")
                                                    ? new (o(
                                                        "WAWebWindowsHybridBridge.v2618",
                                                      ).WindowsHybridBridge_v2618)(
                                                        o(
                                                          "WAWebWindowsHybridFlowHelpers",
                                                        ).unsafeCastCustomWebView(
                                                          t,
                                                        ),
                                                      )
                                                    : e != null &&
                                                        e.startsWith("2619")
                                                      ? new (o(
                                                          "WAWebWindowsHybridBridge.v2619",
                                                        ).WindowsHybridBridge_v2619)(
                                                          o(
                                                            "WAWebWindowsHybridFlowHelpers",
                                                          ).unsafeCastCustomWebView(
                                                            t,
                                                          ),
                                                        )
                                                      : e != null &&
                                                          e.startsWith("2620")
                                                        ? new (o(
                                                            "WAWebWindowsHybridBridge.v2620",
                                                          ).WindowsHybridBridge_v2620)(
                                                            o(
                                                              "WAWebWindowsHybridFlowHelpers",
                                                            ).unsafeCastCustomWebView(
                                                              t,
                                                            ),
                                                          )
                                                        : e != null &&
                                                            e.startsWith("2621")
                                                          ? new (o(
                                                              "WAWebWindowsHybridBridge.v2621",
                                                            ).WindowsHybridBridge_v2621)(
                                                              o(
                                                                "WAWebWindowsHybridFlowHelpers",
                                                              ).unsafeCastCustomWebView(
                                                                t,
                                                              ),
                                                            )
                                                          : e != null &&
                                                              e.startsWith(
                                                                "2622",
                                                              )
                                                            ? new (o(
                                                                "WAWebWindowsHybridBridge.v2622",
                                                              ).WindowsHybridBridge_v2622)(
                                                                o(
                                                                  "WAWebWindowsHybridFlowHelpers",
                                                                ).unsafeCastCustomWebView(
                                                                  t,
                                                                ),
                                                              )
                                                            : e != null &&
                                                                e.startsWith(
                                                                  "2623",
                                                                )
                                                              ? new (o(
                                                                  "WAWebWindowsHybridBridge.v2623",
                                                                ).WindowsHybridBridge_v2623)(
                                                                  o(
                                                                    "WAWebWindowsHybridFlowHelpers",
                                                                  ).unsafeCastCustomWebView(
                                                                    t,
                                                                  ),
                                                                )
                                                              : e != null &&
                                                                  e.startsWith(
                                                                    "2624",
                                                                  )
                                                                ? new (o(
                                                                    "WAWebWindowsHybridBridge.v2624",
                                                                  ).WindowsHybridBridge_v2624)(
                                                                    o(
                                                                      "WAWebWindowsHybridFlowHelpers",
                                                                    ).unsafeCastCustomWebView(
                                                                      t,
                                                                    ),
                                                                  )
                                                                : e != null &&
                                                                    e.startsWith(
                                                                      "2625",
                                                                    )
                                                                  ? new (o(
                                                                      "WAWebWindowsHybridBridge.v2625",
                                                                    ).WindowsHybridBridge_v2625)(
                                                                      o(
                                                                        "WAWebWindowsHybridFlowHelpers",
                                                                      ).unsafeCastCustomWebView(
                                                                        t,
                                                                      ),
                                                                    )
                                                                  : e != null &&
                                                                      e.startsWith(
                                                                        "2626",
                                                                      )
                                                                    ? new (o(
                                                                        "WAWebWindowsHybridBridge.v2626",
                                                                      ).WindowsHybridBridge_v2626)(
                                                                        o(
                                                                          "WAWebWindowsHybridFlowHelpers",
                                                                        ).unsafeCastCustomWebView(
                                                                          t,
                                                                        ),
                                                                      )
                                                                    : e !=
                                                                          null &&
                                                                        e.startsWith(
                                                                          "2627",
                                                                        )
                                                                      ? new (o(
                                                                          "WAWebWindowsHybridBridge.v2627",
                                                                        ).WindowsHybridBridge_v2627)(
                                                                          o(
                                                                            "WAWebWindowsHybridFlowHelpers",
                                                                          ).unsafeCastCustomWebView(
                                                                            t,
                                                                          ),
                                                                        )
                                                                      : e !=
                                                                            null &&
                                                                          e.startsWith(
                                                                            "2628",
                                                                          )
                                                                        ? new (o(
                                                                            "WAWebWindowsHybridBridge.v2628",
                                                                          ).WindowsHybridBridge_v2628)(
                                                                            o(
                                                                              "WAWebWindowsHybridFlowHelpers",
                                                                            ).unsafeCastCustomWebView(
                                                                              t,
                                                                            ),
                                                                          )
                                                                        : e !=
                                                                              null &&
                                                                            e.startsWith(
                                                                              "2629",
                                                                            )
                                                                          ? new (o(
                                                                              "WAWebWindowsHybridBridge.v2629",
                                                                            ).WindowsHybridBridge_v2629)(
                                                                              o(
                                                                                "WAWebWindowsHybridFlowHelpers",
                                                                              ).unsafeCastCustomWebView(
                                                                                t,
                                                                              ),
                                                                            )
                                                                          : e !=
                                                                                null &&
                                                                              e.startsWith(
                                                                                "2630",
                                                                              )
                                                                            ? new (o(
                                                                                "WAWebWindowsHybridBridge.v2630",
                                                                              ).WindowsHybridBridge_v2630)(
                                                                                o(
                                                                                  "WAWebWindowsHybridFlowHelpers",
                                                                                ).unsafeCastCustomWebView(
                                                                                  t,
                                                                                ),
                                                                              )
                                                                            : e !=
                                                                                  null &&
                                                                                e.startsWith(
                                                                                  "2631",
                                                                                )
                                                                              ? new (o(
                                                                                  "WAWebWindowsHybridBridge.v2631",
                                                                                ).WindowsHybridBridge_v2631)(
                                                                                  o(
                                                                                    "WAWebWindowsHybridFlowHelpers",
                                                                                  ).unsafeCastCustomWebView(
                                                                                    t,
                                                                                  ),
                                                                                )
                                                                              : (o(
                                                                                  "WALogger",
                                                                                )
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
                                                                                ).WindowsHybridBridge)(
                                                                                  t,
                                                                                ));
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
