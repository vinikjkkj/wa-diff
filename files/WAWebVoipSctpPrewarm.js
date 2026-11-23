__d(
  "WAWebVoipSctpPrewarm",
  [
    "WALogger",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebODS",
    "WAWebReleaseToEventLoop",
    "WAWebUserPrefsVoip",
    "WAWebVoipSctpPrewarmQpl",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 5e3,
      m = 500,
      p = "outgoing_intent",
      _ = null;
    function f() {
      if (_ != null) return _;
      var t = o("WAWebUserPrefsVoip").getSctpPrewarmSlowRecord();
      if (t != null) {
        var n =
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
            n,
          ),
          r("WAWebODS").incr("web.call.sctp_prewarm_v2.skipped_slow"),
          (_ = Promise.resolve()),
          _
        );
      }
      return (r("WAWebODS").incr("web.call.sctp_prewarm_v2.run"), (_ = h()), _);
    }
    function g(e) {
      if (e.iceGatheringState === "complete" && e.localDescription != null) {
        var t = e.localDescription,
          n = t.sdp,
          r = t.type;
        return Promise.resolve({ type: r, sdp: n });
      }
      return new Promise(function (t) {
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
    async function h() {
      var e = self.performance.now(),
        t = 0,
        n = e,
        a = o("WAWebVoipSctpPrewarmQpl").startVoipSctpPrewarmQpl(),
        i = null,
        l = null,
        _ = null,
        f = !1,
        g = function () {
          a.addAnnotations({
            int: {
              prewarm_ms: Math.round(t),
              prewarm_wall_ms: Math.round(self.performance.now() - e),
            },
            string: { trigger: p },
            bool: { marked_slow: f },
          });
        };
      try {
        (o("WAWebAppTracker").AppTracker.mark(
          o("WAWebAppTracker").AppTrackerType.VoipSctpPrewarm,
        ),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          (n = self.performance.now()),
          (i = new RTCPeerConnection()),
          (t += self.performance.now() - n),
          await o("WAWebReleaseToEventLoop").releaseToEventLoop(),
          (n = self.performance.now()),
          (l = new RTCPeerConnection()),
          await Promise.race([
            y(i, l),
            new Promise(function (e, t) {
              _ = window.setTimeout(function () {
                t(r("err")("SctpPrewarm timeout"));
              }, d);
            }),
          ]),
          (t += self.performance.now() - n),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpPrewarm] completed in ",
                "ms",
              ])),
            t.toFixed(1),
          ),
          t > m &&
            ((f = !0),
            o("WAWebUserPrefsVoip").markSctpPrewarmSlow(t),
            o("WAWebCoreActionsODS").logCallSctpPrewarmV2MarkedSlow(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpPrewarm] slow on this device, disabled until next login",
                ])),
            )),
          g(),
          o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplSuccess(a));
      } catch (e) {
        ((t += self.performance.now() - n),
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
          (f = !0),
          o("WAWebUserPrefsVoip").markSctpPrewarmSlow(
            o("WAWebUserPrefsVoip").SCTP_PREWARM_FAILED_MS,
          ),
          o("WAWebCoreActionsODS").logCallSctpPrewarmV2MarkedSlow(),
          g(),
          o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplFail(
            a,
            "prewarm_failed",
          ));
      } finally {
        var h, C;
        (_ != null && window.clearTimeout(_),
          (h = i) == null || h.close(),
          (C = l) == null || C.close());
      }
    }
    async function y(e, t) {
      var n = { negotiated: !0, id: 0, ordered: !1, maxRetransmits: 0 },
        r = e.createDataChannel("sctp-prewarm", n);
      t.createDataChannel("sctp-prewarm", n);
      var o = new Promise(function (e) {
          r.onopen = function () {
            return e();
          };
        }),
        a = await e.createOffer();
      await e.setLocalDescription(a);
      var i = await g(e);
      await t.setRemoteDescription(i);
      var l = await t.createAnswer();
      await t.setLocalDescription(l);
      var s = await g(t);
      (await e.setRemoteDescription(s), await o);
    }
    l.default = f;
  },
  98,
);
