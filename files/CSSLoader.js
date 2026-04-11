__d(
  "CSSLoader",
  [
    "CSSLoaderConfig",
    "CSSPoller",
    "ResourceTimingsStore",
    "TimeSlice",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("CSSLoaderConfig").loadEventSupported,
      s;
    function u(t) {
      if (!s) {
        s = !0;
        var n = document.createElement("link");
        ((n.onload = function () {
          ((e = !0), n.parentNode && n.parentNode.removeChild(n));
        }),
          (n.rel = "stylesheet"),
          (n.href = "data:text/css;base64,"),
          t.appendChild(n));
      }
    }
    function c(e, t, n, o, a) {
      r("CSSPoller").startCSSPoll(e, n, o, a);
    }
    function d(t, n, o, a, i, l, s) {
      s === void 0 && (s = !1);
      var d = r("ResourceTimingsStore").getUID("css", n);
      (r("ResourceTimingsStore")
        .annotate("css", d)
        .addStringAnnotation("name", t)
        .addStringAnnotation("source", n)
        .addStringAnnotation("caller", "CSSLoader.loadStyleSheet"),
        r("ifRequired")("TimeSliceInteraction", function (e) {
          e.informGlobally("CSSLoader.loadStyleSheet")
            .addStringAnnotation("source", n)
            .addStringAnnotation("name", t);
        }),
        r("ResourceTimingsStore").measureRequestSent("css", d));
      var m = function () {
          (r("ResourceTimingsStore").measureResponseReceived("css", d), a());
        },
        p = r("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
      s
        ? c(t, o, m, i, l)
        : e !== !0
          ? (c(t, o, m, i, l), e === void 0 && u(o))
          : ((l.onload = p.bind(void 0, function () {
              ((l.onload = l.onerror = null), m());
            })),
            (l.onerror = p.bind(void 0, function () {
              ((l.onload = l.onerror = null), i());
            })));
    }
    var m = {
      loadStyleSheet: function (t, n, r, o, a, i, l) {
        var e = document.createElement("link");
        ((e.rel = "stylesheet"),
          (e.type = "text/css"),
          (e.href = n),
          o && (e.crossOrigin = "anonymous"),
          a != null && (e.dataset.btmanifest = a),
          d(t, n, r, i, l, e),
          r.appendChild(e));
      },
      setupEventListenersForPotentiallyLoadedCSS: function (t, n, r, o, a, i) {
        d(t, n, r, o, a, i, !0);
      },
    };
    i.exports = m;
  },
  34,
);
