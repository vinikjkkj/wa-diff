__d(
  "WAWebVoipStartCallPermissions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBrowserPermissionSupport",
    "WAWebCallCollection",
    "WAWebCallUserJourneyGating",
    "WAWebModalManager",
    "WAWebODS",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipEventConstants",
    "WAWebVoipJoinWithoutCamera",
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
    async function y() {
      if (
        o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "microphone",
        )
      ) {
        var e = await o("WAWebVoipAcquireMediaStream").queryPermissionStatus(
            !1,
          ),
          t = e.micPermission;
        t !== "granted" &&
          o(
            "WAWebVoipDevicePermissionDialogLoader.react",
          ).preloadDevicePermissionDialog();
      }
    }
    async function C(e, t) {
      var n = await R(e, t);
      return (n == null && (await b(e, t)), n);
    }
    async function b(e, t) {
      if (
        !(
          !o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() || !S(t)
        )
      ) {
        var n = await o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e),
          a = n.cameraPermission,
          i = n.micPermission,
          l = v(e, i, a);
        if (!(l == null || !S(t)))
          try {
            var u = await r("JSResourceForInteraction")(
              "WAWebCallUserJourneyCallStartBlocked",
            )
              .__setRef("WAWebVoipStartCallPermissions")
              .load();
            S(t) && u(l);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [start call] blocked start logging failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
      }
    }
    function v(e, t, n) {
      return t !== "granted"
        ? "microphone"
        : e && n !== "granted"
          ? "camera"
          : null;
    }
    function S(e) {
      return !e.aborted && r("WAWebCallCollection").activeCall == null;
    }
    async function R(e, t) {
      var n = await k(e),
        a =
          e &&
          !(
            (n == null ? void 0 : n.cameraPermission) === "denied" &&
            o(
              "WAWebVoipBrowserPermissionButtonGating",
            ).isBrowserPermissionButtonEnabled("microphone")
          ),
        i = (n == null ? void 0 : n.micPermission) === "denied",
        l = null,
        s = null,
        c = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
          a,
          null,
          t,
          {
            shouldOpenFailureGuide: async function (n) {
              var e, u;
              if (
                ((l = n === "denied" ? await I(a) : null),
                ((e = l) == null ? void 0 : e.type) === "microphone")
              ) {
                var c = i ? "blocked_before" : "at_prompt";
                e: {
                  if (c === "at_prompt") {
                    r("WAWebODS").incr("web.call.start_mic_refused.at_prompt");
                    break e;
                  }
                  if (c === "blocked_before") {
                    r("WAWebODS").incr(
                      "web.call.start_mic_refused.blocked_before",
                    );
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      c,
                  );
                }
                s = await o(
                  "WAWebVoipDevicePermissionDialogLoader.react",
                ).loadDevicePermissionDialog();
              }
              return (
                s == null &&
                ((u = l) == null ? void 0 : u.type) !== "camera" &&
                !t.aborted
              );
            },
          },
        );
      if (c)
        return e && !a
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [start call] camera blocked, starting the video call with the camera off",
                ])),
            ),
            $("blocked"))
          : { cameraOff: null };
      var d = l;
      return t.aborted || d == null
        ? null
        : d.type === "camera"
          ? D(d.reason, t)
          : s == null || !(await x(s, t))
            ? null
            : E({ asksCamera: a && i, checksCamera: a, isVideo: e, signal: t });
    }
    function L(e, t) {
      var n = t.cameraOff;
      if (
        (o("WAWebVoipJoinWithoutCamera").setStartWithoutCamera(e, n != null),
        n != null)
      )
        e: {
          if (n === "blocked") {
            r("WAWebODS").incr("web.call.outgoing_video_camera_blocked");
            break e;
          }
          if (n === "refused") {
            r("WAWebODS").incr("web.call.outgoing_video_camera_refused");
            break e;
          }
          if (n === "blocked_by_system") {
            r("WAWebODS").incr(
              "web.call.outgoing_video_camera_blocked_by_system",
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              n,
          );
        }
    }
    async function E(e) {
      var t = e.asksCamera,
        n = e.checksCamera,
        a = e.isVideo,
        i = e.signal,
        l = await o("WAWebVoipAcquireMediaStream").queryPermissionStatus(n),
        s = l.cameraPermission,
        u = n && (s === "granted" || (s === "prompt" && t)),
        d = null,
        m = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
          u,
          null,
          i,
          {
            shouldOpenFailureGuide: async function (t) {
              if (t !== "denied") return !0;
              var e = await o(
                "WAWebVoipAcquireMediaStream",
              ).queryPermissionStatus(u);
              return e.micPermission !== "granted"
                ? !1
                : u
                  ? ((d = T(e)), !1)
                  : !0;
            },
          },
        );
      if (m)
        return a && !u
          ? $(n ? "refused" : "blocked")
          : r("WAWebCallCollection").activeCall != null
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [start call] another call came in during the recheck, not starting",
                  ])),
              ),
              null)
            : { cameraOff: null };
      var p = d;
      return p != null && !i.aborted ? D(p, i) : null;
    }
    function k(e) {
      return o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
        "microphone",
      )
        ? o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e)
        : Promise.resolve(null);
    }
    async function I(e) {
      if (
        !o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "microphone",
        )
      )
        return null;
      var t = await o("WAWebVoipAcquireMediaStream").queryPermissionStatus(e);
      return (t.micPermission === "granted" && !e) ||
        !o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone")
        ? null
        : t.micPermission !== "granted"
          ? { type: "microphone" }
          : { reason: T(t), type: "camera" };
    }
    function T(e) {
      return e.cameraPermission === "granted" ? "blocked_by_system" : "refused";
    }
    async function D(e, t) {
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [start call] camera ",
              ", starting the video call with the camera off",
            ])),
          e,
        ),
        (await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
          !1,
          null,
          t,
        ))
          ? $(e)
          : null
      );
    }
    function x(e, t) {
      return r("WAWebCallCollection").activeCall != null
        ? (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in before the microphone permission button",
              ])),
          ),
          Promise.resolve(!1))
        : new Promise(function (n) {
            var a = new AbortController(),
              i = null,
              l = function () {
                Promise.resolve().then(function () {
                  return i == null ? void 0 : i(!1, "closed");
                });
              },
              s = function (t) {
                (i == null || i(!1, t), a.abort());
              },
              u = function () {
                return s("cancelled with the call");
              },
              c = function () {
                r("WAWebCallCollection").activeCall != null &&
                  s("another call came in");
              };
            ((i = function (a, s) {
              ((i = null),
                o("WAWebModalManager").ModalManager.off("open_modal", l),
                o("WAWebModalManager").ModalManager.off("close_modal", l),
                r("WAWebCallCollection").off(f, c),
                t.removeEventListener("abort", u),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [start call] microphone permission button ",
                      "",
                    ])),
                  s,
                ),
                n(a));
            }),
              o(
                "WAWebVoipDevicePermissionDialogLoader.react",
              ).openDevicePermissionDialog(g, e, {
                action: "start",
                cancelSignal: a.signal,
                onAllowed: function () {
                  return i == null ? void 0 : i(!0, "allowed");
                },
                onDismissed: function () {
                  return i == null ? void 0 : i(!1, "dismissed");
                },
              }),
              o("WAWebModalManager").ModalManager.on("open_modal", l),
              o("WAWebModalManager").ModalManager.on("close_modal", l),
              r("WAWebCallCollection").on(f, c),
              t.addEventListener("abort", u));
          });
    }
    function $(e) {
      return r("WAWebCallCollection").activeCall != null
        ? (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [start call] another call came in, not starting with the camera off",
              ])),
          ),
          null)
        : { cameraOff: e };
    }
    ((l.preloadStartCallPermissionDialog = h),
      (l.checkStartCallPermissions = C),
      (l.markCallStart = L));
  },
  98,
);
