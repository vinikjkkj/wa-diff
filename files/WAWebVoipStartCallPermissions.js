__d(
  "WAWebVoipStartCallPermissions",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallUserJourneyGating",
    "WAWebCoreActionsODS",
    "WAWebModalManager",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipEventConstants",
    "WAWebVoipJoinWithoutCamera",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      g = o("WAWebVoipEventConstants").getChangeEvent(
        o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
      ),
      h = {
        closeModal: o("WAWebModalManager").closeModalManager,
        openModal: function (t, n) {
          return o("WAWebModalManager").ModalManager.open(t, n);
        },
      };
    function y() {
      return C().catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] the permission dialog preload failed",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      });
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebVoipBrowserPermissionButtonGating",
            ).hasBrowserPermissionButton("microphone")
          ) {
            var e = yield o(
                "WAWebVoipAcquireMediaStream",
              ).queryPermissionStatus(!1),
              t = e.micPermission;
            t !== "granted" &&
              o(
                "WAWebVoipDevicePermissionDialogLoader.react",
              ).preloadDevicePermissionDialog();
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield I(e, t);
          return (n == null && (yield R(e, t)), n);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              !o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() ||
              !k(t)
            )
          ) {
            var n = yield o(
                "WAWebVoipAcquireMediaStream",
              ).queryPermissionStatus(e),
              a = n.cameraPermission,
              i = n.micPermission,
              l = E(e, i, a);
            if (!(l == null || !k(t)))
              try {
                var s = yield r("JSResourceForInteraction")(
                  "WAWebCallUserJourneyCallStartBlocked",
                )
                  .__setRef("WAWebVoipStartCallPermissions")
                  .load();
                k(t) && s(l);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [start call] blocked start logging failed to load",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return t !== "granted"
        ? "microphone"
        : e && n !== "granted"
          ? "camera"
          : null;
    }
    function k(e) {
      return !e.aborted && r("WAWebCallCollection").activeCall == null;
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield P(e),
            a =
              e &&
              !(
                (r == null ? void 0 : r.cameraPermission) === "denied" &&
                o(
                  "WAWebVoipBrowserPermissionButtonGating",
                ).isBrowserPermissionButtonEnabled("microphone")
              ),
            i = (r == null ? void 0 : r.micPermission) === "denied",
            l = null,
            s = null,
            u = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(a, null, t, {
              shouldOpenFailureGuide: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n, r;
                    return (
                      (l = e === "denied" ? yield N(a) : null),
                      ((n = l) == null ? void 0 : n.type) === "microphone" &&
                        (o("WAWebCoreActionsODS").logCallStartMicrophoneRefused(
                          i ? "blocked_before" : "at_prompt",
                        ),
                        (s = yield o(
                          "WAWebVoipDevicePermissionDialogLoader.react",
                        ).loadDevicePermissionDialog())),
                      s == null &&
                        ((r = l) == null ? void 0 : r.type) !== "camera" &&
                        !t.aborted
                    );
                  },
                );
                function r(t) {
                  return e.apply(this, arguments);
                }
                return r;
              })(),
            });
          if (u)
            return e && !a
              ? (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [start call] camera blocked, starting the video call with the camera off",
                    ])),
                ),
                B("blocked"))
              : { cameraOff: null };
          var c = l;
          return t.aborted || c == null
            ? null
            : c.type === "camera"
              ? A(c.reason, t)
              : s == null || !(yield O(s, c.isBlocked, t))
                ? null
                : x({
                    asksCamera: a && i,
                    checksCamera: a,
                    isVideo: e,
                    signal: t,
                  });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      var n = t.cameraOff;
      (o("WAWebVoipJoinWithoutCamera").setStartWithoutCamera(e, n != null),
        n != null && o("WAWebCoreActionsODS").logCallOutgoingVideoCameraOff(n));
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.asksCamera,
            a = e.checksCamera,
            i = e.isVideo,
            l = e.signal,
            s = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(a),
            u = s.cameraPermission,
            c = a && (u === "granted" || (u === "prompt" && t)),
            d = null,
            m = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(c, null, l, {
              shouldOpenFailureGuide: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (e !== "denied") return !0;
                    var t = yield o(
                      "WAWebVoipAcquireMediaStream",
                    ).queryPermissionStatus(c);
                    return t.micPermission !== "granted"
                      ? !1
                      : c
                        ? ((d = w(t)), !1)
                        : !0;
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            });
          if (m)
            return i && !c
              ? B(a ? "refused" : "blocked")
              : r("WAWebCallCollection").activeCall != null
                ? (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [start call] another call came in during the recheck, not starting",
                      ])),
                  ),
                  null)
                : { cameraOff: null };
          var _ = d;
          return _ != null && !l.aborted ? A(_, l) : null;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return o(
        "WAWebVoipBrowserPermissionButtonGating",
      ).hasBrowserPermissionButton("microphone")
        ? o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e)
        : (f || (f = n("Promise"))).resolve(null);
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebVoipBrowserPermissionButtonGating",
            ).hasBrowserPermissionButton("microphone")
          )
            return null;
          var t = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(
            e,
          );
          return (t.micPermission === "granted" && !e) ||
            !o(
              "WAWebVoipBrowserPermissionButtonGating",
            ).isBrowserPermissionButtonEnabled("microphone")
            ? null
            : t.micPermission !== "granted"
              ? { isBlocked: t.micPermission === "denied", type: "microphone" }
              : { reason: w(t), type: "camera" };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return e.cameraPermission === "granted" ? "blocked_by_system" : "refused";
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [start call] camera ",
                  ", starting the video call with the camera off",
                ])),
              e,
            ),
            (yield o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
              !1,
              null,
              t,
            ))
              ? B(e)
              : null
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, a) {
      return r("WAWebCallCollection").activeCall != null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in before the microphone permission button",
              ])),
          ),
          (f || (f = n("Promise"))).resolve(!1))
        : new (f || (f = n("Promise")))(function (i) {
            var l = new AbortController(),
              s = null,
              c = function () {
                (f || (f = n("Promise"))).resolve().then(function () {
                  return s == null ? void 0 : s(!1, "closed");
                });
              },
              d = function (t) {
                (s == null || s(!1, t), l.abort());
              },
              m = function () {
                return d("cancelled with the call");
              },
              p = function () {
                r("WAWebCallCollection").activeCall != null &&
                  d("another call came in");
              };
            ((s = function (t, n) {
              ((s = null),
                o("WAWebModalManager").ModalManager.off("open_modal", c),
                o("WAWebModalManager").ModalManager.off("close_modal", c),
                r("WAWebCallCollection").off(g, p),
                a.removeEventListener("abort", m),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [start call] microphone permission button ",
                      "",
                    ])),
                  n,
                ),
                i(t));
            }),
              o(
                "WAWebVoipDevicePermissionDialogLoader.react",
              ).openDevicePermissionDialog(h, e, {
                action: "start",
                cancelSignal: l.signal,
                isBlocked: t,
                onAllowed: function () {
                  return s == null ? void 0 : s(!0, "allowed");
                },
                onDismissed: function () {
                  return s == null ? void 0 : s(!1, "dismissed");
                },
              }),
              o("WAWebModalManager").ModalManager.on("open_modal", c),
              o("WAWebModalManager").ModalManager.on("close_modal", c),
              r("WAWebCallCollection").on(g, p),
              a.addEventListener("abort", m));
          });
    }
    function B(e) {
      return r("WAWebCallCollection").activeCall != null
        ? (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in, not starting with the camera off",
              ])),
          ),
          null)
        : { cameraOff: e };
    }
    ((l.preloadStartCallPermissionDialog = y),
      (l.checkStartCallPermissions = v),
      (l.markCallStart = D));
  },
  98,
);
