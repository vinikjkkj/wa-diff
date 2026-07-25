__d(
  "WAWebVoipSctpPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebAppTracker",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipSctpPrewarmQpl",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5e3,
      d = null;
    function m(e) {
      if (d != null) return d;
      var t = (e == null ? void 0 : e.force) === !0;
      return !t &&
        !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.SCTP_PREWARM,
        )
        ? (u || (u = n("Promise"))).resolve()
        : ((d = _()), d);
    }
    function p(e) {
      if (e.iceGatheringState === "complete" && e.localDescription != null) {
        var t = e.localDescription,
          r = t.sdp,
          o = t.type;
        return (u || (u = n("Promise"))).resolve({ type: o, sdp: r });
      }
      return new (u || (u = n("Promise")))(function (t) {
        e.onicegatheringstatechange = function () {
          if (
            e.iceGatheringState === "complete" &&
            e.localDescription != null
          ) {
            var n = e.localDescription,
              r = n.sdp,
              o = n.type;
            t({ type: o, sdp: r });
          }
        };
      });
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = self.performance.now(),
            a = o("WAWebVoipSctpPrewarmQpl").startVoipSctpPrewarmQpl(),
            i = null,
            l = null,
            d = null;
          try {
            (o("WAWebAppTracker").AppTracker.mark(
              o("WAWebAppTracker").AppTrackerType.VoipSctpPrewarm,
            ),
              (i = new RTCPeerConnection()),
              (l = new RTCPeerConnection()),
              yield (u || (u = n("Promise"))).race([
                g(i, l),
                new u(function (e, t) {
                  d = window.setTimeout(function () {
                    t(r("err")("SctpPrewarm timeout"));
                  }, c);
                }),
              ]));
            var m = (self.performance.now() - t).toFixed(1);
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpPrewarm] completed in ",
                  "ms",
                ])),
              m,
            ),
              o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplSuccess(a));
          } catch (e) {
            var p = (self.performance.now() - t).toFixed(1);
            (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpPrewarm] failed after ",
                  "ms: ",
                  "",
                ])),
              p,
              String(e),
            ),
              o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplFail(
                a,
                "prewarm_failed",
              ));
          } finally {
            var _, f;
            (d != null && window.clearTimeout(d),
              (_ = i) == null || _.close(),
              (f = l) == null || f.close());
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = { negotiated: !0, id: 0, ordered: !1, maxRetransmits: 0 },
            o = e.createDataChannel("sctp-prewarm", r);
          t.createDataChannel("sctp-prewarm", r);
          var a = new (u || (u = n("Promise")))(function (e) {
              o.onopen = function () {
                return e();
              };
            }),
            i = yield e.createOffer();
          yield e.setLocalDescription(i);
          var l = yield p(e);
          yield t.setRemoteDescription(l);
          var s = yield t.createAnswer();
          yield t.setLocalDescription(s);
          var c = yield p(t);
          (yield e.setRemoteDescription(c), yield a);
        })),
        h.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
