__d(
  "WAWebVoipBridgeMediaStreamHelpers",
  [
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipGatingUtils",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.targetWindow;
          if (
            (e != null &&
              o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow() == null &&
              (e = null),
            n == null)
          ) {
            var r = o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow(),
              a = r != null && !document.hasFocus(),
              i;
            try {
              i = r != null && r.location.origin === window.location.origin;
            } catch (e) {
              i = !1;
            }
            var l = a;
            o("WAWebUA").UA.isSafari &&
              (l =
                a &&
                o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).getIsPopoutUiReady() &&
                i);
            var s = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled(),
              u = s && t.type === "camera" && r != null && e === "main";
            (t.type === "camera" && r != null,
              o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari
                ? u || (l ? (n = r) : o("WAWebUA").UA.isSafari)
                : t.type !== "microphone" && a && (n = r));
          }
          var c = yield o("WAWebVoipAcquireMediaStream").acquireVoipMediaStream(
            babelHelpers.extends({}, t, { targetWindow: n }),
          );
          if (c != null) {
            var d = t.type;
            if (d === "camera" || d === "desktop") {
              var m = o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).getPopoutWindow(),
                p = n != null && n === m;
              o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream(
                d,
                c,
                p,
                n,
              );
            }
            if (d === "camera") {
              var _ = o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow();
              e = n != null && n === _ ? "popout" : "main";
            }
            d === "desktop" &&
              o("WAWebUA").UA.isSafari &&
              o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow() != null &&
              (e = null);
          }
          return c;
        })),
        u.apply(this, arguments)
      );
    }
    l.voipAcquireMediaStreamImpl = s;
  },
  98,
);
