__d(
  "WAWebVoipUiPopoutWindowPortalContainer.react",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVelocityBackgroundTimer",
    "WAWebVoipActivityTracker",
    "WAWebVoipFocusTracker",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipStackInterface",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebVoipUiPopoutWindowLoadable",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebTimeout",
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
      v = b || (b = o("react")),
      S = b,
      R = S.useMemo,
      L = S.useRef,
      E = S.useState,
      k = "wa-web-voip-popover-portal",
      I = 3e3,
      T = new Map(),
      D = new WeakMap();
    function x(e, t, n) {
      (n === void 0 && (n = !1),
        t != null ? (T.set(e, t), D.set(t, { isFromPopout: n })) : T.delete(e));
    }
    function $(e) {
      var t, n;
      return e == null
        ? !1
        : (t = (n = D.get(e)) == null ? void 0 : n.isFromPopout) != null
          ? t
          : !1;
    }
    function P() {
      var e = [];
      for (var t of T) {
        var n = t[0],
          r = t[1];
        $(r) && e.push({ type: n, stream: r });
      }
      return e;
    }
    function N(e) {
      o(
        "WAWebVoipPopoutWindowState",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
        "popoutWindowVisibilityChanged",
        {
          visibilityState: e,
          isCallActiveInPopoutWindow: o(
            "WAWebVoipPopoutWindowState",
          ).getIsCallActiveInPopoutWindow(),
          hasPopoutWindow:
            o("WAWebVoipPopoutWindowState").getPopoutWindow() != null,
        },
      );
    }
    var M = 500,
      w = 250,
      A = 1e4;
    function F() {
      var t = E(null),
        a = t[0],
        i = t[1],
        l = E(null),
        b = l[0],
        S = l[1],
        D = E(null),
        x = D[0],
        $ = D[1],
        F = r("useWAWebStableCallback")(function () {
          var e = o("WAWebVoipPopoutWindowState").getPopoutWindow();
          if (e) {
            var t = e.document.visibilityState;
            (o("WAWebVoipActivityTracker").trackUiActivity(
              t === "hidden"
                ? o("WAWebVoipActivityTracker").VoipUiActivity
                    .TAB_VISIBILITY_HIDDEN
                : o("WAWebVoipActivityTracker").VoipUiActivity
                    .TAB_VISIBILITY_VISIBLE,
            ),
              o(
                "WAWebVelocityBackgroundTimer",
              ).toggleSmoothBackgroundAnimations(t === "visible"),
              N(t));
          }
        }),
        O = L(null),
        B = L(null),
        W = L(!1),
        q = r("useWAWebStableCallback")(function () {
          O.current != null &&
            (window.clearInterval(O.current), (O.current = null));
        }),
        U = r("useWAWebStableCallback")(function () {
          B.current != null && (B.current(), (B.current = null));
        }),
        V = o("useWAWebTimeout").useManualTimeout(function () {
          (q(), U());
          var e = o(
            "WAWebVoipPopoutWindowState",
          ).getIsCallActiveInPopoutWindow();
          (o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(!1),
            o("WAWebVoipPopoutWindowState").setPopoutWindow(null),
            e && N("hidden"),
            o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(
              !1,
            ),
            a == null || a.removeEventListener("visibilitychange", F),
            a == null || a.close(),
            o(
              "WAWebVoipPopoutWindowState",
            ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
              "setPopoutWindowProps",
              { callLogMsg: null, popoutWindow: null },
            ));
        }),
        H = V[0];
      (o("useWAWebListener").useListener(
        o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter,
        "setPopoutWindowProps",
        function (t) {
          var a,
            l = t.callLogMsg,
            y = t.popoutWindow;
          l != null && (W.current = !1);
          var C = o(
            "WAWebVoipPopoutWindowState",
          ).getIsCallActiveInPopoutWindow();
          if (
            ($(l),
            i(y),
            l != null && !C
              ? o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .VOIP_WINDOW_MOVE_TO_POPOUT,
                )
              : l == null &&
                C &&
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .VOIP_WINDOW_MOVE_FROM_POPOUT,
                ),
            o("WAWebVoipPopoutWindowState").setIsCallActiveInPopoutWindow(
              l != null,
            ),
            o("WAWebVoipFocusTracker").notifyWindowModeChanged(
              l != null ? "popout" : "main",
            ),
            o("WAWebVoipPopoutWindowState").setPopoutWindow(
              l != null ? y : null,
            ),
            o("WAWebVelocityBackgroundTimer").toggleSmoothBackgroundAnimations(
              l != null,
            ),
            (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) == null ||
              a.addEventListener("visibilitychange", F),
            l == null && (T.clear(), q(), U()),
            l != null &&
              o("WAWebUA").UA.isSafari &&
              y != null &&
              (q(),
              (O.current = window.setInterval(function () {
                try {
                  y.closed &&
                    (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: Safari popout close polling: detected window closed",
                        ])),
                    ),
                    q(),
                    o(
                      "WAWebVoipPopoutWindowState",
                    ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
                      "closePopoutWindow",
                      { callEnded: !1 },
                    ));
                } catch (e) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Safari popout poll: window inaccessible: ",
                        "",
                      ])),
                    String(e),
                  ),
                    q(),
                    o(
                      "WAWebVoipPopoutWindowState",
                    ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
                      "closePopoutWindow",
                      { callEnded: !1 },
                    ));
                }
              }, M))),
            l != null && o("WAWebUA").UA.isSafari && y != null)
          ) {
            var b = r("WAWebCallCollection").activeCall,
              v =
                (b == null ? void 0 : b.selfVideoState) ===
                o("WAWebVoipWaCallEnums").VideoState.Enabled,
              S = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
            if (v || S != null) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Safari popout open: setting up stream re-acquisition",
                  ])),
              );
              var R = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      try {
                        var e = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        if (e != null && e.type === "web") {
                          if (
                            (v &&
                              (o("WAWebUA").UA.isFirefox ||
                                o("WAWebUA").UA.isSafari) &&
                              (yield e.setCallVideoMute(!0),
                              yield e.setCallVideoMute(!1)),
                            S != null)
                          ) {
                            var t = yield Promise.resolve().then(function () {
                                return Z(
                                  require("WAWebVoipAudioCaptureAndPlayback"),
                                );
                              }),
                              n = t.switchAudioInputDevice,
                              a = yield n(S, y, !0);
                            a
                              ? o("WALogger").LOG(
                                  c ||
                                    (c =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: Safari popout open: audio re-acquisition completed",
                                      ])),
                                )
                              : o("WALogger").WARN(
                                  d ||
                                    (d =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: Safari popout open: audio re-acquisition failed",
                                      ])),
                                );
                          }
                          o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: Safari popout open: stream re-acquisition completed",
                              ])),
                          );
                        }
                      } catch (e) {
                        o("WALogger")
                          .ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: Safari popout open: stream re-acquisition failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e));
                      }
                    },
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                L = !1,
                E = !1,
                k = [],
                I = function () {
                  (k.forEach(function (e) {
                    e();
                  }),
                    (k.length = 0),
                    B.current === I && (B.current = null));
                },
                D = function (t) {
                  if (!L) {
                    var e = !1,
                      n = E,
                      a = !1;
                    try {
                      var i = y.document;
                      ((e = i.visibilityState === "visible" && !i.hidden),
                        (n = n || i.hasFocus()),
                        (a = i.documentElement != null && i.body != null));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: Safari popout: unable to check window state",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e));
                      return;
                    }
                    (o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [Popout:Safari] ready_check reason=",
                          " shell=",
                          " visible=",
                          " focused=",
                          "",
                        ])),
                      t,
                      String(a),
                      String(e),
                      String(n),
                    ),
                      !(!a || !e || !n) &&
                        ((L = !0),
                        I(),
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [Popout:Safari] reacquisition_triggered reason=",
                              "",
                            ])),
                          t,
                        ),
                        R()));
                  }
                },
                x = function () {
                  D("load");
                };
              (y.addEventListener("load", x),
                k.push(function () {
                  y.removeEventListener("load", x);
                }));
              var P = function () {
                ((E = !0), D("focus"));
              };
              (y.addEventListener("focus", P),
                k.push(function () {
                  y.removeEventListener("focus", P);
                }));
              var N = function () {
                D("visibilitychange");
              };
              try {
                (y.document.addEventListener("visibilitychange", N),
                  k.push(function () {
                    try {
                      y.document.removeEventListener("visibilitychange", N);
                    } catch (e) {}
                  }));
              } catch (e) {}
              var V = window.setInterval(function () {
                D("poll");
              }, w);
              k.push(function () {
                window.clearInterval(V);
              });
              var H = window.setTimeout(function () {
                var e = "unknown";
                try {
                  var t = y.document;
                  e =
                    "shell=" +
                    String(t.documentElement != null && t.body != null) +
                    " visible=" +
                    t.visibilityState +
                    " focused=" +
                    String(t.hasFocus()) +
                    " ready=" +
                    t.readyState;
                } catch (t) {
                  e = "inaccessible";
                }
                (o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Popout:Safari] reacquisition_timeout ",
                      "",
                    ])),
                  e,
                ),
                  D("timeout"),
                  I());
              }, A);
              (k.push(function () {
                window.clearTimeout(H);
              }),
                (B.current = I),
                D("initial"));
              try {
                y.document.hasFocus() || y.focus();
              } catch (e) {}
            }
          }
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter,
          "closePopoutWindow",
          function (e) {
            var t = e.callEnded,
              i = e.surveyInteracted;
            if (!W.current) {
              if (a != null && !a.closed)
                try {
                  var l;
                  (l = a.open(
                    "#",
                    o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME,
                  )) == null || l.focus();
                } catch (e) {}
              W.current = !0;
              var s = P();
              if (!t && s.length > 0) {
                var u = s.some(function (e) {
                  return e.type === "desktop";
                });
                if (u) {
                  var c = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var e = yield o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        (e == null ? void 0 : e.type) === "web" &&
                          (yield e.stopScreenShare());
                      },
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })();
                  c();
                }
                var d = r("WAWebCallCollection").activeCall,
                  m =
                    (d == null ? void 0 : d.selfVideoState) ===
                    o("WAWebVoipWaCallEnums").VideoState.Enabled;
                if (m) {
                  var p = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        try {
                          var e = yield o(
                            "WAWebVoipStackInterface",
                          ).getVoipStackInterface();
                          e != null &&
                            e.type === "web" &&
                            (yield e.setCallVideoMute(!0),
                            yield e.setCallVideoMute(!1));
                        } catch (e) {}
                      },
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })();
                  if (document.hasFocus()) p();
                  else {
                    var _ = function () {
                      (window.removeEventListener("focus", _), p());
                    };
                    (window.addEventListener("focus", _, { once: !0 }),
                      window.focus());
                  }
                }
              }
              if (
                !t &&
                (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari)
              ) {
                var f = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
                if (f != null) {
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: ",
                        " popout close: setting up audio re-acquisition",
                      ])),
                    o("WAWebUA").UA.isFirefox ? "Firefox" : "Safari",
                  );
                  var g = function () {
                    r("WAWebCallCollection").activeCall != null &&
                      o(
                        "WAWebVoipPopoutWindowState",
                      ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
                        "requestAudioReacquisition",
                        { deviceId: f, targetWindow: window },
                      );
                  };
                  if (document.hasFocus()) g();
                  else {
                    var h = 1e4,
                      b = function () {
                        (window.clearTimeout(v),
                          window.removeEventListener("focus", b),
                          o("WALogger").LOG(
                            C ||
                              (C = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: ",
                                " popout close: main window focused, re-acquiring audio",
                              ])),
                            o("WAWebUA").UA.isFirefox ? "Firefox" : "Safari",
                          ),
                          g());
                      },
                      v = window.setTimeout(function () {
                        window.removeEventListener("focus", b);
                      }, h);
                    (window.addEventListener("focus", b), window.focus());
                  }
                }
              }
              var S = t && !i;
              H(S ? I : 0);
            }
          },
        ));
      var G = R(
        function () {
          return {
            isContextInPopoutWindow: !0,
            popoverPortalEl: b == null ? void 0 : b.getElementById(k),
            documentEl: b,
            windowEl: a,
            isDocPip: !1,
          };
        },
        [b, a],
      );
      return x
        ? v.jsx(r("WAWebVoipUiPopoutWindowContext").Provider, {
            value: G,
            children: v.jsx(
              o("WAWebVoipUiPopoutWindowLoadable")
                .WAWebVoipUiPopoutWindowLoadable,
              {
                callLogMsg: x,
                popoutWindow: a,
                onWindowReady: function (t) {
                  return S(t.document);
                },
              },
            ),
          })
        : null;
    }
    ((F.displayName = F.name + " [from " + i.id + "]"),
      (l.VOIP_POPOUT_POPOVER_PORTAL_ID = k),
      (l.MAIN_WINDOW_NAME = o("WAWebVoipPopoutWindowState").MAIN_WINDOW_NAME),
      (l.WAWebVoipUiPopoutWindowEventEmitter = o(
        "WAWebVoipPopoutWindowState",
      ).WAWebVoipUiPopoutWindowEventEmitter),
      (l.getIsCallActiveInPopoutWindow = o(
        "WAWebVoipPopoutWindowState",
      ).getIsCallActiveInPopoutWindow),
      (l.getIsPopoutWindowActiveAndVisible = o(
        "WAWebVoipPopoutWindowState",
      ).getIsPopoutWindowActiveAndVisible),
      (l.getIsPopoutWindowOpening = o(
        "WAWebVoipPopoutWindowState",
      ).getIsPopoutWindowOpening),
      (l.getPopoutWindow = o("WAWebVoipPopoutWindowState").getPopoutWindow),
      (l.setIsPopoutWindowOpening = o(
        "WAWebVoipPopoutWindowState",
      ).setIsPopoutWindowOpening),
      (l.setMediaStream = x),
      (l.WAWebVoipUiPopoutWindowPortalContainer = F));
  },
  98,
);
