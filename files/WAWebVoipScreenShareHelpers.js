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
      return e
        ? s._(/*BTDS*/ "Stop sharing screen")
        : s._(/*BTDS*/ "Share screen");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.closeModal,
            l = t.isCallLink,
            u = l === void 0 ? !1 : l,
            c = t.isSelfScreenSharing,
            m = t.isVideoCall,
            _ = t.isVideoMuted,
            f = t.onVideoMuteToggle,
            g = t.openModal,
            h = t.targetWindow;
          if (!m) {
            if (u) {
              g(
                p.jsx(
                  o("WAWebVoipScreenShareConfirmPopup.react")
                    .WAWebVoipScreenShareConfirmPopup,
                  {
                    closeModal: i,
                    hideCancel: !0,
                    message: s._(
                      /*BTDS*/ "You can only share your screen in video calls.",
                    ),
                    okText: s._(/*BTDS*/ "OK"),
                    onOK: i,
                  },
                ),
              );
              return;
            }
            g(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                { closeModal: i },
              ),
            );
            return;
          }
          if (c) {
            yield b();
            return;
          }
          if (
            ((a = r("WAWebCallCollection").activeCall) == null ||
              a.setSelfScreenShareRejected(!1),
            _)
          ) {
            g(
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
                        (yield (d || (d = n("Promise"))).resolve(f()),
                          yield y(h));
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
          yield y(h);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity
              .USER_START_SCREEN_SHARE,
          );
          var t = yield o(
            "WAWebVoipVideoDesktopCapture",
          ).WAWebVoipVideoDesktopCapture.preflightAcquireDesktopStream(e);
          if (t != null)
            try {
              var n = yield o(
                "WAWebVoipStackInterface",
              ).getVoipStackInterface();
              if ((n == null ? void 0 : n.type) === "web")
                yield n.startScreenShare();
              else {
                var a;
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] screen share: op not available for ",
                      "",
                    ])),
                  (a = n == null ? void 0 : n.type) != null ? a : "null",
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
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_STOP_SCREEN_SHARE,
          );
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e == null ? void 0 : e.type) === "web" &&
            (yield e.stopScreenShare());
        })),
        v.apply(this, arguments)
      );
    }
    ((l.getScreenShareIcon = _),
      (l.getScreenShareLabel = f),
      (l.handlePressScreenShare = g));
  },
  226,
);
