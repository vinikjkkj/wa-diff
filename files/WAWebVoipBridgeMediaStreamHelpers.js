__d(
  "WAWebVoipBridgeMediaStreamHelpers",
  [
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.targetWindow;
      if (t == null) {
        var n = o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getPopoutWindow(),
          r = n != null && !document.hasFocus(),
          a;
        try {
          a = n != null && n.location.origin === window.location.origin;
        } catch (e) {
          a = !1;
        }
        var i = r;
        (o("WAWebUA").UA.isSafari &&
          (i =
            r &&
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getIsPopoutUiReady() &&
            a),
          o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari
            ? i
              ? (t = n)
              : o("WAWebUA").UA.isSafari
            : e.type !== "microphone" && r && (t = n));
      }
      var l = await o("WAWebVoipAcquireMediaStream").acquireVoipMediaStream(
        babelHelpers.extends({}, e, { targetWindow: t }),
      );
      if (l != null) {
        var s = e.type;
        if (s === "camera" || s === "desktop") {
          var u = t != null;
          o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream(
            s,
            l,
            u,
          );
        }
      }
      return l;
    }
    l.voipAcquireMediaStreamImpl = e;
  },
  98,
);
