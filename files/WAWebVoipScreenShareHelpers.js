__d(
  "WAWebVoipScreenShareHelpers",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipActivityTracker",
    "WAWebVoipScreenShareConfirmPopup.react",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoDesktopCapture",
    "WDSIconIcScreenShare.react",
    "WDSIconIcStopScreenShare.react",
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
      m = d || (d = o("react"));
    function p(e, t) {
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
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.isAnyPeerScreenSharing,
        r = e.isSelfScreenSharing,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = f({ isSelfScreenSharing: r, isAnyPeerScreenSharing: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function f(e) {
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.isAnyPeerScreenSharing === !0
      )
        return m.jsx(r("WDSIconIcScreenShare.react"), { directional: !0 });
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.isAnyPeerScreenSharing === !1 &&
        e.isSelfScreenSharing === !1
      )
        return m.jsx(r("WDSIconIcScreenShare.react"), { directional: !0 });
      if (
        ((typeof e == "object" && e !== null) || typeof e == "function") &&
        e.isAnyPeerScreenSharing === !1 &&
        e.isSelfScreenSharing === !0
      )
        return m.jsx(r("WDSIconIcStopScreenShare.react"), { directional: !0 });
      throw Error(
        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
          e,
      );
    }
    function g(e) {
      return e
        ? s._(/*BTDS*/ "Stop sharing screen")
        : s._(/*BTDS*/ "Share screen");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    async function h(t) {
      var n,
        a = t.closeModal,
        i = t.isSelfScreenSharing,
        l = t.isVideoCall,
        u = t.isVideoMuted,
        c = t.onVideoMuteToggle,
        d = t.openModal;
      if (!l) {
        d(
          m.jsx(
            o("WAWebVoipScreenShareConfirmPopup.react")
              .WAWebVoipScreenShareConfirmPopup,
            { closeModal: a },
          ),
        );
        return;
      }
      if (i) {
        await C();
        return;
      }
      if (
        ((n = r("WAWebCallCollection").activeCall) == null ||
          n.setSelfScreenShareRejected(!1),
        u)
      ) {
        d(
          m.jsx(
            o("WAWebVoipScreenShareConfirmPopup.react")
              .WAWebVoipScreenShareConfirmPopup,
            {
              closeModal: a,
              message: s._(/*BTDS*/ "Turn on your video to share your screen."),
              okText: s._(/*BTDS*/ "Turn on"),
              onOK: async function () {
                try {
                  (await Promise.resolve(c()), await y());
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
            },
          ),
        );
        return;
      }
      await y();
    }
    async function y() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.USER_START_SCREEN_SHARE,
      );
      var e = await o(
        "WAWebVoipVideoDesktopCapture",
      ).WAWebVoipVideoDesktopCapture.preflightAcquireDesktopStream();
      if (e != null)
        try {
          var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((t == null ? void 0 : t.type) === "web")
            await t.startScreenShare();
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
            await o(
              "WAWebVoipVideoDesktopCapture",
            ).WAWebVoipVideoDesktopCapture.stopCapture(!0));
        }
    }
    async function C() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.USER_STOP_SCREEN_SHARE,
      );
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      (e == null ? void 0 : e.type) === "web" && (await e.stopScreenShare());
    }
    ((l.getScreenShareIcon = p),
      (l.ScreenShareIcon = _),
      (l.getScreenShareLabel = g),
      (l.handlePressScreenShare = h));
  },
  226,
);
