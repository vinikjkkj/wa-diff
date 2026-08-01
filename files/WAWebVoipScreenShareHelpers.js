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
            i,
            l,
            u = t.closeModal,
            c = t.isCallLink,
            m = c === void 0 ? !1 : c,
            _ = t.isSelfScreenSharing,
            f = t.isVideoCall,
            g = t.isVideoMuted,
            h = t.onVideoMuteToggle,
            C = t.openModal,
            v = t.targetWindow;
          if (!f) {
            if (m) {
              C(
                p.jsx(
                  o("WAWebVoipScreenShareConfirmPopup.react")
                    .WAWebVoipScreenShareConfirmPopup,
                  {
                    closeModal: u,
                    hideCancel: !0,
                    message: s._(
                      /*BTDS*/ "You can only share your screen in video calls.",
                    ),
                    okText: s._(/*BTDS*/ "OK"),
                    onOK: u,
                  },
                ),
              );
              return;
            }
            C(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                { closeModal: u },
              ),
            );
            return;
          }
          if (_) {
            yield b();
            return;
          }
          (a = r("WAWebCallCollection").activeCall) == null ||
            a.setSelfScreenShareRejected(!1);
          var S = !(
            (i =
              (l = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : l.isDualStreamScreenShareEnabled()) != null && i
          );
          if (g && S) {
            C(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                {
                  closeModal: u,
                  message: s._(
                    /*BTDS*/ "Turn on your video to share your screen.",
                  ),
                  okText: s._(/*BTDS*/ "Turn on"),
                  onOK: n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      try {
                        (yield (d || (d = n("Promise"))).resolve(h()),
                          yield y(v));
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
          yield y(v);
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
