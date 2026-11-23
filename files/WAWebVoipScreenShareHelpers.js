__d(
  "WAWebVoipScreenShareHelpers",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallUserJourneyInCallAction",
    "WAWebCallUserJourneyLogger",
    "WAWebVoipActivityTracker",
    "WAWebVoipScreenShareConfirmPopup.react",
    "WAWebVoipScreenShareSurfaceState",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoDesktopCapture",
    "WDSIconIcScreenShare.react",
    "WDSIconIcStopScreenShare.react",
    "getErrorSafe",
    "react",
    "useWAWebEventTargetValue",
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
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      var e,
        t =
          (e = r("useWAWebEventTargetValue")(
            o("WAWebVoipScreenShareSurfaceState")
              .WAWebVoipScreenShareSurfaceEventEmitter,
            "change",
            o("WAWebVoipScreenShareSurfaceState").getSelfScreenShareSurface,
          )) != null
            ? e
            : "monitor";
      return s._(/*BTDS*/ "", [
        s._enum(t, {
          browser: "a tab",
          monitor: "your screen",
          window: "a window",
        }),
      ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    async function g(t) {
      var n,
        a,
        i,
        l = t.closeModal,
        u = t.isCallLink,
        c = u === void 0 ? !1 : u,
        d = t.isSelfScreenSharing,
        p = t.isVideoCall,
        _ = t.isVideoMuted,
        f = t.onVideoMuteToggle,
        g = t.openModal,
        C = t.subSurface,
        b = t.targetWindow;
      if (
        (o("WAWebCallUserJourneyInCallAction").logInCallAction(
          o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE
            .TAP_SCREEN_SHARE,
          C,
        ),
        !p)
      ) {
        if (c) {
          g(
            m.jsx(
              o("WAWebVoipScreenShareConfirmPopup.react")
                .WAWebVoipScreenShareConfirmPopup,
              {
                closeModal: l,
                hideCancel: !0,
                message: s._(/*BTDS*/ ""),
                okText: s._(/*BTDS*/ ""),
                onOK: l,
              },
            ),
          );
          return;
        }
        g(
          m.jsx(
            o("WAWebVoipScreenShareConfirmPopup.react")
              .WAWebVoipScreenShareConfirmPopup,
            { closeModal: l },
          ),
        );
        return;
      }
      if (d) {
        await y();
        return;
      }
      (o("WAWebCallUserJourneyInCallAction").logInCallAction(
        o("WAWebCallUserJourneyLogger").PARITY_CALL_ACTION_TYPE
          .START_SCREEN_SHARE,
      ),
        (n = r("WAWebCallCollection").activeCall) == null ||
          n.setSelfScreenShareRejected(!1));
      var v = !(
        (a =
          (i = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : i.isDualStreamScreenShareEnabled()) != null && a
      );
      if (_ && v) {
        g(
          m.jsx(
            o("WAWebVoipScreenShareConfirmPopup.react")
              .WAWebVoipScreenShareConfirmPopup,
            {
              closeModal: l,
              message: s._(/*BTDS*/ ""),
              okText: s._(/*BTDS*/ ""),
              onOK: async function () {
                try {
                  (await Promise.resolve(f()), await h(b));
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
      await h(b);
    }
    async function h(e) {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.USER_START_SCREEN_SHARE,
      );
      var t = await o(
        "WAWebVoipVideoDesktopCapture",
      ).WAWebVoipVideoDesktopCapture.preflightAcquireDesktopStream(e);
      if (t != null)
        try {
          var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((n == null ? void 0 : n.type) === "web")
            await n.startScreenShare();
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
            await o(
              "WAWebVoipVideoDesktopCapture",
            ).WAWebVoipVideoDesktopCapture.stopCapture(!0));
        }
    }
    async function y() {
      o("WAWebVoipActivityTracker").trackUiActivity(
        o("WAWebVoipActivityTracker").VoipUiActivity.USER_STOP_SCREEN_SHARE,
      );
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      (e == null ? void 0 : e.type) === "web" && (await e.stopScreenShare());
    }
    ((l.getScreenShareIcon = p),
      (l.getScreenShareLabel = _),
      (l.useSelfScreenShareSurfaceLabel = f),
      (l.handlePressScreenShare = g));
  },
  226,
);
