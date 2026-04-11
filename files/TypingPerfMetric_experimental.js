__d(
  "TypingPerfMetric.experimental",
  ["clearTimeout", "performanceNow", "setTimeoutAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2e3,
      u = new Set([
        "insertText",
        "insertCompositionText",
        "insertFromComposition",
        "insertLineBreak",
        "insertParagraph",
        "deleteCompositionText",
        "deleteContentBackward",
        "deleteByComposition",
        "deleteContent",
        "deleteContentForward",
        "deleteWordBackward",
        "deleteWordForward",
        "deleteHardLineBackward",
        "deleteSoftLineBackward",
        "deleteHardLineForward",
        "deleteSoftLineForward",
      ]);
    function c(e, t, n) {
      var o = null,
        a = 0,
        i = 0,
        l = 0,
        u = 0,
        c = [],
        d = null,
        p = function () {
          (a !== 0 &&
            n({
              allTimes: c,
              averageTimeToRender: i,
              keypresses: a,
              max: l,
              min: u,
            }),
            (a = 0),
            (i = 0),
            (l = 0),
            (u = 0),
            (c = []));
        },
        _ = function () {
          ((o = null), p());
        },
        f = m(e, function (n) {
          (o == null
            ? ((o = e), t && t())
            : o !== e &&
              (p(),
              d != null && (r("clearTimeout")(d), (d = null)),
              (o = e),
              t && t()),
            n > 0 &&
              (a++,
              c.push(n),
              (i = (i * (a - 1) + n) / a),
              n > l && (l = n),
              (n < u || u === 0) && (u = n)),
            d != null && r("clearTimeout")(d),
            (d = r("setTimeoutAcrossTransitions")(_, s)));
        });
      return function () {
        (f(), p(), d != null && (r("clearTimeout")(d), (d = null)), (o = null));
      };
    }
    var d = { lastSetTimeout: null };
    function m(t, n) {
      var o = !1,
        a = function () {
          var t = (e || (e = r("performanceNow")))();
          d.lastSetTimeout = window.setTimeout(function () {
            if (o) {
              o = !1;
              return;
            }
            var a = (e || (e = r("performanceNow")))();
            n(a - t);
          }, 0);
        },
        i = function (t) {
          if (!u.has(t.inputType) || o) {
            o = !1;
            return;
          }
          a();
        },
        l = function (t) {
          var e = t.keyCode;
          (e === 8 || e === 13) && a();
        },
        s = function () {
          o = !0;
        },
        c = function () {
          o = !0;
        };
      return (
        t.addEventListener("keydown", l, !0),
        t.addEventListener("beforeinput", i, !0),
        t.addEventListener("paste", s, !0),
        t.addEventListener("cut", c, !0),
        function () {
          (t.removeEventListener("keydown", l, !0),
            t.removeEventListener("beforeinput", i, !0),
            t.removeEventListener("paste", s, !0),
            t.removeEventListener("cut", c, !0));
          var e = d.lastSetTimeout;
          e != null && r("clearTimeout")(e);
        }
      );
    }
    l.measureAverageTypingPerformance = c;
  },
  98,
);
