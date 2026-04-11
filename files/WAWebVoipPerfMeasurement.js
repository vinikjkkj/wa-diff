__d(
  "WAWebVoipPerfMeasurement",
  ["$InternalEnum", "WALogger", "WAWebVoipWaCallEnums"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({ FIRST_CAMERA_FRAME: 0, FIRST_PEER_FRAME: 1 }),
      c = 2,
      d = ["first_camera_frame", "first_peer_frame"],
      m = null,
      p = new Array(c).fill(null);
    function _(e) {
      ((m = { isOutgoing: e }), (p = new Array(c).fill(null)));
    }
    function f() {
      ((m = null), p.fill(null));
    }
    function g(t, n) {
      if (m == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [Perf] startMeasurement: no context",
            ])),
        );
        return;
      }
      var r = t;
      p[r] == null &&
        (p[r] = {
          startTime: self.performance.now(),
          hasLogged: !1,
          metadata: n != null ? n : null,
        });
    }
    function h(e) {
      var t = m;
      if (t != null) {
        var n = e,
          r = p[n];
        if (!(r == null || r.hasLogged)) {
          r.hasLogged = !0;
          var a = self.performance.now() - r.startTime,
            i = t.isOutgoing ? "outgoing" : "incoming",
            l = d[n],
            u = "";
          if (r.metadata != null) {
            var c = Object.entries(r.metadata)
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return t + "=" + String(n);
              })
              .join(", ");
            u = ", " + c;
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [Perf] ",
                " (",
                "",
                "): ",
                "ms",
              ])),
            l,
            i,
            u,
            a,
          );
        }
      }
    }
    function y(e, t) {
      (e === o("WAWebVoipWaCallEnums").CallState.PreCalling ||
      e === o("WAWebVoipWaCallEnums").CallState.Calling ||
      e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
      e === o("WAWebVoipWaCallEnums").CallState.Rejoining ||
      e === o("WAWebVoipWaCallEnums").CallState.Link
        ? _(t)
        : (e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
            e === o("WAWebVoipWaCallEnums").CallState.None) &&
          f(),
        e === o("WAWebVoipWaCallEnums").CallState.CallActive &&
          g(u.FIRST_PEER_FRAME));
    }
    ((l.PerfMeasurement = u),
      (l.startMeasurement = g),
      (l.endMeasurement = h),
      (l.onCallStateChange = y));
  },
  98,
);
