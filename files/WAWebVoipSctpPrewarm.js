__d(
  "WAWebVoipSctpPrewarm",
  ["WALogger", "WAWebVoipPerfOptimizations", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = null;
    function d(e) {
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
    function m() {
      return c != null
        ? c
        : o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.SCTP_PREWARM,
            )
          ? ((c = p()), c)
          : Promise.resolve();
    }
    async function p() {
      var t = self.performance.now(),
        n = null,
        a = null,
        i = null;
      try {
        ((n = new RTCPeerConnection()),
          (a = new RTCPeerConnection()),
          await Promise.race([
            _(n, a),
            new Promise(function (e, t) {
              i = window.setTimeout(function () {
                t(r("err")("SctpPrewarm timeout"));
              }, u);
            }),
          ]));
        var l = (self.performance.now() - t).toFixed(1);
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpPrewarm] completed in ",
              "ms",
            ])),
          l,
        );
      } catch (e) {
        var c = (self.performance.now() - t).toFixed(1);
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SctpPrewarm] failed after ",
              "ms: ",
              "",
            ])),
          c,
          String(e),
        );
      } finally {
        var d, m;
        (i != null && window.clearTimeout(i),
          (d = n) == null || d.close(),
          (m = a) == null || m.close());
      }
    }
    async function _(e, t) {
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
      var i = await d(e);
      await t.setRemoteDescription(i);
      var l = await t.createAnswer();
      await t.setLocalDescription(l);
      var s = await d(t);
      (await e.setRemoteDescription(s), await o);
    }
    l.default = m;
  },
  98,
);
