__d(
  "WAWebVoipSctpPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebVoipPerfOptimizations",
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
    function p() {
      return d != null
        ? d
        : o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.SCTP_PREWARM,
            )
          ? ((d = _()), d)
          : (u || (u = n("Promise"))).resolve();
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = self.performance.now(),
            a = null,
            i = null,
            l = null;
          try {
            ((a = new RTCPeerConnection()),
              (i = new RTCPeerConnection()),
              yield (u || (u = n("Promise"))).race([
                g(a, i),
                new u(function (e, t) {
                  l = window.setTimeout(function () {
                    t(r("err")("SctpPrewarm timeout"));
                  }, c);
                }),
              ]));
            var d = (self.performance.now() - t).toFixed(1);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpPrewarm] completed in ",
                  "ms",
                ])),
              d,
            );
          } catch (e) {
            var m = (self.performance.now() - t).toFixed(1);
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpPrewarm] failed after ",
                  "ms: ",
                  "",
                ])),
              m,
              String(e),
            );
          } finally {
            var p, _;
            (l != null && window.clearTimeout(l),
              (p = a) == null || p.close(),
              (_ = i) == null || _.close());
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
          var l = yield m(e);
          yield t.setRemoteDescription(l);
          var s = yield t.createAnswer();
          yield t.setLocalDescription(s);
          var c = yield m(t);
          (yield e.setRemoteDescription(c), yield a);
        })),
        h.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
