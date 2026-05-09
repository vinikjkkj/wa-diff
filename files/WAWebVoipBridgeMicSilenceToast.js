__d(
  "WAWebVoipBridgeMicSilenceToast",
  ["fbt", "WALogger", "WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = "microphone-silence-toast";
    function m() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: Showing microphone silence toast",
          ])),
      ),
        o("WAWebToastManager").ToastManager.close(d),
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            id: d,
            msg: s._(
              /*BTDS*/ "Your microphone may not be working. Try switching to a different microphone.",
            ),
            duration: 1e4,
          }),
        ));
    }
    ((l.MICROPHONE_SILENCE_TOAST_ID = d),
      (l.showMicrophoneSilenceToastImpl = m));
  },
  226,
);
