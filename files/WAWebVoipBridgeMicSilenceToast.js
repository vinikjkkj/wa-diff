__d(
  "WAWebVoipBridgeMicSilenceToast",
  [
    "fbt",
    "WALogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipGatingUtils",
    "WAWebVoipMicrophoneHealthPresence",
    "WAWebVoipMicrophoneInputState",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = "microphone-silence-toast";
    function _() {
      if (
        (o("WAWebToastManager").ToastManager.close(p),
        o("WAWebVoipGatingUtils").isMicrophoneHealthExperienceEnabled())
      ) {
        var t = o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus();
        if (
          t === "active" &&
          o("WAWebVoipMicrophoneHealthPresence").isMicrophoneHealthArmed()
        ) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Routing native microphone silence to the mic health experience",
              ])),
          ),
            o("WAWebVoipMicrophoneInputState").dispatchMicrophoneInputEvent({
              type: "native-silence",
            }));
          return;
        }
        if (
          t === "unavailable" &&
          o(
            "WAWebVoipMicrophoneHealthPresence",
          ).isMicrophoneUnavailableBannerVisible()
        ) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Native microphone silence while unavailable; banner already shown",
              ])),
          );
          return;
        }
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Showing microphone silence toast",
          ])),
      ),
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebToast.react").Toast, {
            id: p,
            msg: s._(
              /*BTDS*/ "Your microphone may not be working. Try switching to a different microphone.",
            ),
            duration: 1e4,
          }),
        ));
    }
    ((l.MICROPHONE_SILENCE_TOAST_ID = p),
      (l.showMicrophoneSilenceToastImpl = _));
  },
  226,
);
