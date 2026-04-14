__d(
  "WAWebVoipScreenShareHelpers",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebIcScreenShareIcon.react",
    "WAWebVoipActivityTracker",
    "WAWebVoipScreenShareConfirmPopup.react",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoDesktopCapture",
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
          return o("WAWebIcScreenShareIcon.react").IcScreenShareIcon;
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
      var t = e.isAnyPeerScreenSharing,
        n = e.isSelfScreenSharing;
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.isAnyPeerScreenSharing === !0
        )
          return p.jsx(o("WAWebIcScreenShareIcon.react").IcScreenShareIcon, {});
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.isAnyPeerScreenSharing === !1 &&
          e.isSelfScreenSharing === !1
        )
          return p.jsx(o("WAWebIcScreenShareIcon.react").IcScreenShareIcon, {});
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
      })({ isSelfScreenSharing: n, isAnyPeerScreenSharing: t });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return e
        ? s._(/*BTDS*/ "Stop sharing screen")
        : s._(/*BTDS*/ "Share screen");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l = t.closeModal,
            u = t.isAnyPeerScreenSharing,
            c = t.isSelfScreenSharing,
            m = t.isVideoCall,
            _ = t.isVideoMuted,
            f = t.onVideoMuteToggle,
            g = t.openModal;
          if (!m) {
            g(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                { closeModal: l },
              ),
            );
            return;
          }
          var h =
            (a =
              (i = r("WAWebCallCollection").activeCall) == null
                ? void 0
                : i.isSelfScreenShareRejected()) != null
              ? a
              : !1;
          if (!c && (!u || h) && _) {
            g(
              p.jsx(
                o("WAWebVoipScreenShareConfirmPopup.react")
                  .WAWebVoipScreenShareConfirmPopup,
                {
                  closeModal: l,
                  message: s._(
                    /*BTDS*/ "Turn on your video to share your screen.",
                  ),
                  okText: s._(/*BTDS*/ "Turn on"),
                  onOK: n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      try {
                        var t;
                        ((t = r("WAWebCallCollection").activeCall) == null ||
                          t.setSelfScreenShareRejected(!1),
                          yield (d || (d = n("Promise"))).resolve(f()),
                          yield C());
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
          if (c) yield v();
          else if (!u || h) {
            var y;
            ((y = r("WAWebCallCollection").activeCall) == null ||
              y.setSelfScreenShareRejected(!1),
              yield C());
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebVoipActivityTracker").trackUiActivity(
            o("WAWebVoipActivityTracker").VoipUiActivity.USER_STOP_SCREEN_SHARE,
          );
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          (e == null ? void 0 : e.type) === "web" &&
            (yield e.stopScreenShare());
        })),
        S.apply(this, arguments)
      );
    }
    ((l.getScreenShareIcon = _),
      (l.ScreenShareIcon = f),
      (l.getScreenShareLabel = g),
      (l.handlePressScreenShare = h));
  },
  226,
);
