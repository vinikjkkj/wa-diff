__d(
  "WAWebVoipBridgeMediaStreamHelpers",
  [
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "asyncToGeneratorRuntime",
    "justknobx",
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
            var a = o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow(),
              i = a != null && !document.hasFocus(),
              l;
            try {
              l = a != null && a.location.origin === window.location.origin;
            } catch (e) {
              l = !1;
            }
            var s = i;
            o("WAWebUA").UA.isSafari &&
              (s =
                i &&
                o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).getIsPopoutUiReady() &&
                l);
            var u = r("justknobx")._("2102") && o("WAWebUA").UA.isSafari,
              c = u && t.type === "camera" && a != null && e === "main";
            (t.type === "camera" && a != null,
              o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari
                ? c || (s ? (n = a) : o("WAWebUA").UA.isSafari)
                : t.type !== "microphone" && i && (n = a));
          }
          var d = yield o("WAWebVoipAcquireMediaStream").acquireVoipMediaStream(
            babelHelpers.extends({}, t, { targetWindow: n }),
          );
          if (d != null) {
            var m = t.type;
            if (m === "camera" || m === "desktop") {
              var p = o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).getPopoutWindow(),
                _ = n != null && n === p;
              o("WAWebVoipUiPopoutWindowPortalContainer.react").setMediaStream(
                m,
                d,
                _,
              );
            }
            if (m === "camera") {
              var f = o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow();
              e = n != null && n === f ? "popout" : "main";
            }
            m === "desktop" &&
              o("WAWebUA").UA.isSafari &&
              o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getPopoutWindow() != null &&
              (e = null);
          }
          return d;
        })),
        u.apply(this, arguments)
      );
    }
    l.voipAcquireMediaStreamImpl = s;
  },
  98,
);
