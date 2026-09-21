__d(
  "WAWebVoipSctpPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsVoip",
    "WAWebVoipPerfOptimizations",
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
      _ = null;
    function f(t) {
      var r;
      if (_ != null) return _;
      var a =
        (r = t == null ? void 0 : t.trigger) != null
          ? r
          : (t == null ? void 0 : t.force) === !0
            ? "wt_fallback"
            : "eager";
      if (a === "outgoing_intent") {
        var i = o("WAWebUserPrefsVoip").getSctpPrewarmSlowRecord();
        if (i != null) {
          var l =
            i.ms === o("WAWebUserPrefsVoip").SCTP_PREWARM_FAILED_MS
              ? "failed"
              : "took " + i.ms + "ms";
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpPrewarm] skipped, last prewarm on this device ",
                  "",
                ])),
              l,
            ),
            o("WAWebCoreActionsODS").logCallSctpPrewarmV2SkippedSlow(),
            (_ = (d || (d = n("Promise"))).resolve()),
            _
          );
        }
        o("WAWebCoreActionsODS").logCallSctpPrewarmV2Run();
      } else if (
        a === "eager" &&
        !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.SCTP_PREWARM,
        )
      )
        return (d || (d = n("Promise"))).resolve();
      return ((_ = h(a)), _);
    }
    function g(e) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === "outgoing_intent",
            a = self.performance.now(),
            i = 0,
            l = a,
            _ = o("WAWebVoipSctpPrewarmQpl").startVoipSctpPrewarmQpl(),
            f = null,
            g = null,
            h = null,
            y = !1,
            b = function () {
              _.addAnnotations({
                int: {
                  prewarm_ms: Math.round(i),
                  prewarm_wall_ms: Math.round(self.performance.now() - a),
                },
                string: { trigger: e },
                bool: { marked_slow: y },
              });
            };
          try {
            (o("WAWebAppTracker").AppTracker.mark(
              o("WAWebAppTracker").AppTrackerType.VoipSctpPrewarm,
            ),
              t &&
                (yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                (l = self.performance.now())),
              (f = new RTCPeerConnection()),
              t &&
                ((i += self.performance.now() - l),
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop(),
                (l = self.performance.now())),
              (g = new RTCPeerConnection()),
              yield (d || (d = n("Promise"))).race([
                C(f, g),
                new d(function (e, t) {
                  h = window.setTimeout(function () {
                    t(r("err")("SctpPrewarm timeout"));
                  }, m);
                }),
              ]),
              (i += self.performance.now() - l),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpPrewarm] completed in ",
                    "ms (",
                    ")",
                  ])),
                i.toFixed(1),
                e,
              ),
              t &&
                i > p &&
                ((y = !0),
                o("WAWebUserPrefsVoip").markSctpPrewarmSlow(i),
                o("WAWebCoreActionsODS").logCallSctpPrewarmV2MarkedSlow(),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [SctpPrewarm] slow on this device, disabled until next login",
                    ])),
                )),
              b(),
              o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplSuccess(_));
          } catch (n) {
            ((i += self.performance.now() - l),
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SctpPrewarm] failed after ",
                    "ms (",
                    "): ",
                    "",
                  ])),
                i.toFixed(1),
                e,
                String(n),
              ),
              t &&
                ((y = !0),
                o("WAWebUserPrefsVoip").markSctpPrewarmSlow(
                  o("WAWebUserPrefsVoip").SCTP_PREWARM_FAILED_MS,
                ),
                o("WAWebCoreActionsODS").logCallSctpPrewarmV2MarkedSlow()),
              b(),
              o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplFail(
                _,
                "prewarm_failed",
              ));
          } finally {
            var v, S;
            (h != null && window.clearTimeout(h),
              (v = f) == null || v.close(),
              (S = g) == null || S.close());
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var l = yield g(e);
          yield t.setRemoteDescription(l);
          var s = yield t.createAnswer();
          yield t.setLocalDescription(s);
          var u = yield g(t);
          (yield e.setRemoteDescription(u), yield a);
        })),
        b.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
