__d(
  "WAWebVoipScreenShareHelpers",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipActivityTracker",
    "WAWebVoipScreenShareConfirmPopup.react",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoDesktopCapture",
    "WDSIconIcScreenShare.react",
    "WDSIconIcStopScreenShare.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(e, t) {
      return (function (e) {
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.isAnyPeerScreenSharing === !0) ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.isAnyPeerScreenSharing === !1 &&
            e.isSelfScreenSharing === !1)
        )
          return r("WDSIconIcScreenShare.react");
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.isAnyPeerScreenSharing === !1 &&
          e.isSelfScreenSharing === !0
        )
          return r("WDSIconIcStopScreenShare.react");
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })({ isSelfScreenSharing: e, isAnyPeerScreenSharing: t });
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.isAnyPeerScreenSharing,
        r = e.isSelfScreenSharing,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = g({ isSelfScreenSharing: r, isAnyPeerScreenSharing: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function g(e) {
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.isAnyPeerScreenSharing === !0
      )
        return p.jsx(r("WDSIconIcScreenShare.react"), {});
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.isAnyPeerScreenSharing === !1 &&
        e.isSelfScreenSharing === !1
      )
        return p.jsx(r("WDSIconIcScreenShare.react"), {});
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.isAnyPeerScreenSharing === !1 &&
        e.isSelfScreenSharing === !0
      )
        return p.jsx(r("WDSIconIcStopScreenShare.react"), {});
      throw Error(
        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
          e,
      );
    }
    function h(e) {
      return e
        ? s._(/*BTDS*/ "Stop sharing screen")
        : s._(/*BTDS*/ "Share screen");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.closeModal,
            l = t.isSelfScreenSharing,
            u = t.isVideoCall,
            c = t.isVideoMuted,
            m = t.onVideoMuteToggle,
            _ = t.openModal;
          if (!u) {
            _(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                { closeModal: i },
              ),
            );
            return;
          }
          if (l) {
            yield S();
            return;
          }
          if (
            ((a = r("WAWebCallCollection").activeCall) == null ||
              a.setSelfScreenShareRejected(!1),
            c)
          ) {
            _(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                {
                  closeModal: i,
                  message: s._(
                    /*BTDS*/ "Turn on your video to share your screen.",
                  ),
                  okText: s._(/*BTDS*/ "Turn on"),
                  onOK: n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      try {
                        (yield (d || (d = n("Promise"))).resolve(m()),
                          yield b());
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] screen share: start failed after video enable",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t));
                      }
                    },
                  ),
                },
              ),
            );
            return;
          }
          yield b();
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .USER_START_SCREEN_SHARE,
          );
          var e = yield o(
            "WAWebVoipVideoDesktopCapture",
          ).WAWebVoipVideoDesktopCapture.preflightAcquireDesktopStream();
          if (e != null)
            try {
              var t = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if ((t == null ? void 0 : t.type) === "web")
                yield t.startScreenShare();
              else {
                var n;
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] screen share: op not available for ",
                      "",
                    ])),
                  (n = t == null ? void 0 : t.type) != null ? n : "null",
                );
              }
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: UI: screen share: screen share operation failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
                yield o(
                  "WAWebVoipVideoDesktopCapture",
                ).WAWebVoipVideoDesktopCapture.stopCapture(!0));
            }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_STOP_SCREEN_SHARE,
          );
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e == null ? void 0 : e.type) === "web" &&
            (yield e.stopScreenShare());
        })),
        R.apply(this, arguments)
      );
    }
    ((l.getScreenShareIcon = _),
      (l.ScreenShareIcon = f),
      (l.getScreenShareLabel = h),
      (l.handlePressScreenShare = y));
  },
  226,
);
