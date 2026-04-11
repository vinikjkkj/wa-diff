__d(
  "WAWebCallTimer.react",
  [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebClock",
    "WAWebVoipActivityTracker",
    "WAWebVoipEventConstants",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = null;
    function g() {
      return (
        f ||
          (f = { startTime: null, intervalId: null, subscribers: new Set() }),
        f
      );
    }
    function h(e) {
      f != null &&
        ((f.startTime = e),
        f.subscribers.forEach(function (e) {
          return e();
        }));
    }
    function y() {
      var e;
      (((e = f) == null ? void 0 : e.intervalId) != null &&
        window.clearInterval(f.intervalId),
        (f = null));
    }
    var C = {
      timerContainer: {
        minWidth: "x2c5eco",
        fontSize: "x1f6kntn",
        fontWeight: "xo1l8bm",
        textAlign: "x2b8uid",
        $$css: !0,
      },
    };
    function b(t) {
      var a = t.callState,
        i = t.xstyle,
        l = _(function () {
          if (a !== o("WAWebVoipWaCallEnums").CallState.CallActive) return null;
          var e = f;
          if ((e == null ? void 0 : e.startTime) != null) {
            var t = e.startTime;
            return Math.floor((Date.now() - t) / 1e3);
          }
          return null;
        }),
        c = l[0],
        m = l[1];
      p(
        function () {
          if (a !== o("WAWebVoipWaCallEnums").CallState.CallActive) {
            y();
            return;
          }
          var t = !0,
            i = g();
          i.startTime == null &&
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var n = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface();
                if (!t) return;
                if ((n == null ? void 0 : n.type) === "web") {
                  o("WAWebVoipActivityTracker").trackActivity(
                    o("WAWebVoipActivityTracker").VoipActivity.GET_CALL_INFO,
                    "call_timer",
                  );
                  var a = yield n.getCallInfo();
                  if (!t) return;
                  if (a) {
                    var l = r("WAWebVoipJsonParsersWeb").parseCallInfo(a),
                      s = Math.floor(l.callActiveDuration / 1e3),
                      u = Date.now() - s * 1e3;
                    (h(u), t && m(s));
                  }
                }
              } catch (t) {
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebCallTimer: Failed to get initial call duration",
                    ])),
                ),
                  i.startTime == null && h(Date.now()));
              }
            })();
          var l = function () {
            var e = i.startTime;
            if (e != null) {
              var t = Math.floor((Date.now() - e) / 1e3);
              m(t);
            }
          };
          return (
            i.subscribers.add(l),
            i.intervalId == null &&
              (i.intervalId = window.setInterval(function () {
                i.subscribers.forEach(function (e) {
                  return e();
                });
              }, 1e3)),
            function () {
              ((t = !1),
                i.subscribers.delete(l),
                i.subscribers.size === 0 && y());
            }
          );
        },
        [a],
      );
      var b = r("useWAWebEventTargetValue")(
        r("WAWebCallCollection").activeCall,
        o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING,
        ),
        function () {
          var e = r("WAWebCallCollection").activeCall;
          return (e == null ? void 0 : e.peerJid) == null
            ? null
            : e.getPeerReconnectingState(e.peerJid);
        },
      );
      if (a !== o("WAWebVoipWaCallEnums").CallState.CallActive || c == null)
        return null;
      var v =
        (b == null ? void 0 : b.isReconnecting) === !0 &&
        (b == null ? void 0 : b.option) ===
          o("WAWebVoipWaCallEnums").ReconnectingOption.Text;
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(C.timerContainer, i),
          {
            "data-testid": void 0,
            role: "timer",
            children: v
              ? s._(/*BTDS*/ "Reconnecting...")
              : o("WAWebClock").Clock.durationStr(c),
          },
        ),
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
