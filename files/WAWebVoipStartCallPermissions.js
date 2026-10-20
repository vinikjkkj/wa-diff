__d(
  "WAWebVoipStartCallPermissions",
  [
    "Promise",
    "WALogger",
    "WAWebCallCollection",
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
      f = o("WAWebVoipEventConstants").getChangeEvent(
        o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
      ),
      g = {
        closeModal: o("WAWebModalManager").closeModalManager,
        openModal: function (t, n) {
          return o("WAWebModalManager").ModalManager.open(t, n);
        },
      };
    function h() {
      return y().catch(function (t) {
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
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield E(e),
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
                      (l = e === "denied" ? yield k(a) : null),
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [start call] camera blocked, starting the video call with the camera off",
                    ])),
                ),
                P("blocked"))
              : { cameraOff: null };
          var c = l;
          return t.aborted || c == null
            ? null
            : c.type === "camera"
              ? D(c.reason, t)
              : s == null || !(yield $(s, c.isBlocked, t))
                ? null
                : R({
                    asksCamera: a && i,
                    checksCamera: a,
                    isVideo: e,
                    signal: t,
                  });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n = t.cameraOff;
      (o("WAWebVoipJoinWithoutCamera").setStartWithoutCamera(e, n != null),
        n != null && o("WAWebCoreActionsODS").logCallOutgoingVideoCameraOff(n));
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.asksCamera,
            a = e.checksCamera,
            i = e.isVideo,
            l = e.signal,
            s = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(a),
            u = s.cameraPermission,
            c = a && (u === "granted" || (u === "prompt" && t)),
            d = null,
            p = yield o(
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
                        ? ((d = T(t)), !1)
                        : !0;
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            });
          if (p)
            return i && !c
              ? P(a ? "refused" : "blocked")
              : r("WAWebCallCollection").activeCall != null
                ? (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [start call] another call came in during the recheck, not starting",
                      ])),
                  ),
                  null)
                : { cameraOff: null };
          var _ = d;
          return _ != null && !l.aborted ? D(_, l) : null;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return o(
        "WAWebVoipBrowserPermissionButtonGating",
      ).hasBrowserPermissionButton("microphone")
        ? o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e)
        : (_ || (_ = n("Promise"))).resolve(null);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              : { reason: T(t), type: "camera" };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return e.cameraPermission === "granted" ? "blocked_by_system" : "refused";
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
              ? P(e)
              : null
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, a) {
      return r("WAWebCallCollection").activeCall != null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in before the microphone permission button",
              ])),
          ),
          (_ || (_ = n("Promise"))).resolve(!1))
        : new (_ || (_ = n("Promise")))(function (i) {
            var l = new AbortController(),
              s = null,
              c = function () {
                (_ || (_ = n("Promise"))).resolve().then(function () {
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
                r("WAWebCallCollection").off(f, p),
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
              ).openDevicePermissionDialog(g, e, {
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
              r("WAWebCallCollection").on(f, p),
              a.addEventListener("abort", m));
          });
    }
    function P(e) {
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
    ((l.preloadStartCallPermissionDialog = h),
      (l.checkStartCallPermissions = b),
      (l.markCallStart = S));
  },
  98,
);
