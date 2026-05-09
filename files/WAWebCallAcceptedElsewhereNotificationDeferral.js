__d(
  "WAWebCallAcceptedElsewhereNotificationDeferral",
  [
    "WALogger",
    "WAWebNotificationBackend",
    "WAWebVoipOngoingCallCollection",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return document.visibilityState !== "hidden" && document.hasFocus();
    }
    function d(t) {
      var n = t.callId,
        a = !1,
        i = function () {
          ((a = !0),
            document.removeEventListener("visibilitychange", d),
            window.removeEventListener("focus", d),
            o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.off("remove", m));
        };
      function l() {
        if (
          (i(),
          o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(n) == null)
        ) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: deferred call-accepted-elsewhere notification dropped for ",
                " - call no longer ongoing",
              ])),
            n,
          );
          return;
        }
        o("WAWebNotificationBackend")
          .showCallAcceptedElsewhereNotification(t)
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to show deferred call-accepted-elsewhere notification",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-call-accepted-elsewhere-notif");
          });
      }
      function d() {
        a || (c() && l());
      }
      function m() {
        a ||
          (o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByCallId(n) == null &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: deferred call-accepted-elsewhere notification cancelled for ",
                  " - call ended",
                ])),
              n,
            ),
            i()));
      }
      (document.addEventListener("visibilitychange", d),
        window.addEventListener("focus", d),
        o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.on(
          "remove",
          m,
        ),
        c() && l());
    }
    l.deferCallAcceptedElsewhereNotificationUntilForeground = d;
  },
  98,
);
