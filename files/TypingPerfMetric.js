__d(
  "TypingPerfMetric",
  ["WebAPIs", "clearTimeout", "performanceNow", "setTimeoutAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2e3;
    function u(e) {
      return !!(
        (e.code === "Space" && e.ctrlKey && e.metaKey) ||
        (e.code === "Period" && e.getModifierState("OS"))
      );
    }
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
          var m = n.timestamps;
          o == null
            ? ((o = e), t && t())
            : o !== e &&
              (p(),
              d != null && (r("clearTimeout")(d), (d = null)),
              (o = e),
              t && t());
          var f = m.finalRAF - m.keydown;
          (f > 0 &&
            (a++,
            c.push(f),
            (i = (i * (a - 1) + f) / a),
            f > l && (l = f),
            (f < u || u === 0) && (u = f)),
            d != null && r("clearTimeout")(d),
            (d = r("setTimeoutAcrossTransitions")(_, s)));
        });
      return function () {
        (f(), p(), d != null && (r("clearTimeout")(d), (d = null)), (o = null));
      };
    }
    var d = { lastRequestedAnimationFrame: null };
    function m(t, n) {
      var a = 20,
        i = new Float64Array(a),
        l = new Float64Array(a),
        s = new Float64Array(a),
        c = -1,
        m = -1,
        p = 0,
        _ = !1,
        f = function (n) {
          ((c = n.timeStamp),
            (m = (e || (e = r("performanceNow")))()),
            (_ = u(n)));
        },
        g = function () {
          _ = !0;
        },
        h = function () {
          _ = !0;
        };
      (t.addEventListener("keydown", f),
        t.addEventListener("paste", g),
        t.addEventListener("cut", h));
      var y = !1,
        C = new MutationObserver(function (f) {
          if (_) {
            ((_ = !1), (c = -1), (m = -1));
            return;
          }
          if (p >= a) {
            ((c = -1), (m = -1));
            return;
          }
          var u = (e || (e = r("performanceNow")))(),
            g = !1;
          for (var h of f) {
            var C =
              h.type === "characterData" ||
              (h.type === "childList" && h.addedNodes.length !== 0) ||
              (h.type === "attributes" &&
                h.target.nodeName === "INPUT" &&
                h.attributeName === "value");
            if (!(!C || c === -1 || g)) {
              if (
                ((i[p] = c),
                (l[p] = m),
                (s[p] = u),
                (c = -1),
                (m = -1),
                p++,
                (g = !0),
                y)
              )
                return;
              ((d.lastRequestedAnimationFrame = o(
                "WebAPIs",
              ).requestAnimationFrame(function (r) {
                y = !1;
                var e = s[0];
                if (r - e < 0)
                  d.lastRequestedAnimationFrame = o(
                    "WebAPIs",
                  ).requestAnimationFrame(function (r) {
                    for (var e = 0; e < p; e++) {
                      var o = i[e],
                        a = s[e];
                      (n({
                        delta: r - o,
                        element: t,
                        firedOnSecondRAF: !0,
                        mutations: p,
                        timestamps: { finalRAF: r, keydown: o, mutation: a },
                      }),
                        (i[e] = 0),
                        (l[e] = 0),
                        (s[e] = 0));
                    }
                    p = 0;
                  });
                else {
                  for (var a = 0; a < p; a++) {
                    var u = i[a],
                      c = s[a];
                    (n({
                      delta: r - u,
                      element: t,
                      firedOnSecondRAF: !0,
                      mutations: p,
                      timestamps: { finalRAF: r, keydown: u, mutation: c },
                    }),
                      (i[a] = 0),
                      (l[a] = 0),
                      (s[a] = 0));
                  }
                  p = 0;
                }
              })),
                (y = !0));
            }
          }
        });
      return (
        C.observe(t, {
          attributeFilter: ["value"],
          attributes: !0,
          characterData: !0,
          childList: !0,
          subtree: !0,
        }),
        function () {
          (C.disconnect(),
            t.removeEventListener("keydown", f),
            t.removeEventListener("paste", g),
            t.removeEventListener("cut", h));
          var e = d.lastRequestedAnimationFrame;
          e != null && o("WebAPIs").cancelAnimationFrame(e);
        }
      );
    }
    l.measureAverageTypingPerformance = c;
  },
  98,
);
