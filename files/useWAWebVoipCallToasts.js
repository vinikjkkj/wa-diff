__d(
  "useWAWebVoipCallToasts",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebNetworkStatus",
    "WAWebVoipEventConstants",
    "WAWebVoipWaCallEnums",
    "react",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef;
    function p(e) {
      var t = e.callState,
        n = e.isAnyPeerScreenSharing,
        a = e.isSelfScreenSharing,
        i = e.showCenteredToast,
        l = r("useWAWebPrevious")(a),
        u = r("useWAWebPrevious")(n),
        p = d(
          function () {
            var e,
              t,
              n =
                (e =
                  (t = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : t.getScreenSharingPeerJid()) != null
                  ? e
                  : null;
            if (n == null) return null;
            var a = o("WAWebContactCollection").ContactCollection.get(n);
            return a != null
              ? o("WAWebFrontendContactGetters").getDisplayName(a)
              : null;
          },
          [n],
        );
      (c(
        function () {
          l === !1 && a && i(s._(/*BTDS*/ "You started sharing your screen"));
        },
        [a, l, i],
      ),
        c(
          function () {
            l === !0 &&
              !a &&
              i(s._(/*BTDS*/ "You stopped sharing your screen"));
          },
          [a, l, i],
        ),
        c(
          function () {
            u === !1 &&
              n &&
              p != null &&
              i(
                s._(/*BTDS*/ "{name} started sharing their screen", [
                  s._param("name", p),
                ]),
              );
          },
          [n, u, p, i],
        ));
      var _ = m(null);
      (c(
        function () {
          n && p != null && (_.current = p);
        },
        [n, p],
      ),
        c(
          function () {
            if (u === !0 && !n) {
              var e = _.current;
              e != null &&
                (i(
                  s._(/*BTDS*/ "{name} stopped sharing their screen", [
                    s._param("name", e),
                  ]),
                ),
                (_.current = null));
            }
          },
          [n, u, i],
        ),
        c(
          function () {
            var e = function () {
              !r("WAWebNetworkStatus").online &&
                t === o("WAWebVoipWaCallEnums").CallState.CallActive &&
                i(s._(/*BTDS*/ "Unstable connection. Try a new location."));
            };
            return (
              r("WAWebNetworkStatus").on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipNetworkEvents.ONLINE,
                ),
                e,
              ),
              function () {
                r("WAWebNetworkStatus").off(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipNetworkEvents.ONLINE,
                  ),
                  e,
                );
              }
            );
          },
          [t, i],
        ),
        c(
          function () {
            var e = function () {
              i(s._(/*BTDS*/ "Could not mute. Please try again."));
            };
            return (
              r("WAWebCallCollection").on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .MUTE_REQUEST_FAILED,
                ),
                e,
              ),
              function () {
                r("WAWebCallCollection").off(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallCollectionEvents
                      .MUTE_REQUEST_FAILED,
                  ),
                  e,
                );
              }
            );
          },
          [i],
        ),
        c(
          function () {
            var e = function (t) {
              var e = t.name;
              i(
                e !== ""
                  ? s._(/*BTDS*/ "{name} muted you", [s._param("name", e)])
                  : s._(/*BTDS*/ "You were muted"),
              );
            };
            return (
              r("WAWebCallCollection").on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallCollectionEvents
                    .MUTED_BY_OTHERS,
                ),
                e,
              ),
              function () {
                r("WAWebCallCollection").off(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallCollectionEvents
                      .MUTED_BY_OTHERS,
                  ),
                  e,
                );
              }
            );
          },
          [i],
        ));
    }
    l.default = p;
  },
  226,
);
