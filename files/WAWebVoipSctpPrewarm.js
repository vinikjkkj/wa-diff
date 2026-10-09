__d(
  "WAWebVoipSctpPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsVoip",
    "WAWebVoipSctpPrewarmQpl",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 5e3,
      p = 500,
      _ = "outgoing_intent",
      f = null;
    function g() {
      if (f != null) return f;
      var t = o("WAWebUserPrefsVoip").getSctpPrewarmSlowRecord();
      if (t != null) {
        var r =
          t.ms === o("WAWebUserPrefsVoip").SCTP_PREWARM_FAILED_MS
            ? "failed"
            : "took " + t.ms + "ms";
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpPrewarm] skipped, last prewarm on this device ",
                "",
              ])),
            r,
          ),
          o("WAWebCoreActionsODS").logCallSctpPrewarmV2SkippedSlow(),
          (f = (d || (d = n("Promise"))).resolve()),
          f
        );
      }
      return (o("WAWebCoreActionsODS").logCallSctpPrewarmV2Run(), (f = y()), f);
    }
    function h(e) {
      if (e.iceGatheringState === "complete" && e.localDescription != null) {
        var t = e.localDescription,
          r = t.sdp,
          o = t.type;
        return (d || (d = n("Promise"))).resolve({ type: o, sdp: r });
      }
      return new (d || (d = n("Promise")))(function (t) {
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
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = self.performance.now(),
            t = 0,
            a = e,
            i = o("WAWebVoipSctpPrewarmQpl").startVoipSctpPrewarmQpl(),
            l = null,
            f = null,
            g = null,
            h = !1,
            y = function () {
              i.addAnnotations({
                int: {
                  prewarm_ms: Math.round(t),
                  prewarm_wall_ms: Math.round(self.performance.now() - e),
                },
                string: { trigger: _ },
                bool: { marked_slow: h },
              });
            };
          try {
            (o("WAWebAppTracker").AppTracker.mark(
              o("WAWebAppTracker").AppTrackerType.VoipSctpPrewarm,
            ),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              (a = self.performance.now()),
              (l = new RTCPeerConnection()),
              (t += self.performance.now() - a),
              yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
              (a = self.performance.now()),
              (f = new RTCPeerConnection()),
              yield (d || (d = n("Promise"))).race([
                b(l, f),
                new d(function (e, t) {
                  g = window.setTimeout(function () {
                    t(r("err")("SctpPrewarm timeout"));
                  }, m);
                }),
              ]),
              (t += self.performance.now() - a),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpPrewarm] completed in ",
                    "ms",
                  ])),
                t.toFixed(1),
              ),
              t > p &&
                ((h = !0),
                o("WAWebUserPrefsVoip").markSctpPrewarmSlow(t),
                o("WAWebCoreActionsODS").logCallSctpPrewarmV2MarkedSlow(),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpPrewarm] slow on this device, disabled until next login",
                    ])),
                )),
              y(),
              o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplSuccess(i));
          } catch (e) {
            ((t += self.performance.now() - a),
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpPrewarm] failed after ",
                    "ms: ",
                    "",
                  ])),
                t.toFixed(1),
                String(e),
              ),
              (h = !0),
              o("WAWebUserPrefsVoip").markSctpPrewarmSlow(
                o("WAWebUserPrefsVoip").SCTP_PREWARM_FAILED_MS,
              ),
              o("WAWebCoreActionsODS").logCallSctpPrewarmV2MarkedSlow(),
              y(),
              o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplFail(
                i,
                "prewarm_failed",
              ));
          } finally {
            var C, v;
            (g != null && window.clearTimeout(g),
              (C = l) == null || C.close(),
              (v = f) == null || v.close());
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = { negotiated: !0, id: 0, ordered: !1, maxRetransmits: 0 },
            o = e.createDataChannel("sctp-prewarm", r);
          t.createDataChannel("sctp-prewarm", r);
          var a = new (d || (d = n("Promise")))(function (e) {
              o.onopen = function () {
                return e();
              };
            }),
            i = yield e.createOffer();
          yield e.setLocalDescription(i);
          var l = yield h(e);
          yield t.setRemoteDescription(l);
          var s = yield t.createAnswer();
          yield t.setLocalDescription(s);
          var u = yield h(t);
          (yield e.setRemoteDescription(u), yield a);
        })),
        v.apply(this, arguments)
      );
    }
    l.default = g;
  },
  98,
);
