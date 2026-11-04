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
    function c(e, t, n, o) {
      r("CSSPoller").startCSSPoll(e, t, n, o);
    }
    function d(t, n, a, i, l, s, d) {
      d === void 0 && (d = !1);
      var m = o("ResourceTimingsStore").getUID("css", n);
      (o("ResourceTimingsStore")
        .annotate("css", m)
        .addStringAnnotation("name", t)
        .addStringAnnotation("source", n)
        .addStringAnnotation("caller", "CSSLoader.loadStyleSheet"),
        r("ifRequired")("TimeSliceInteraction", function (e) {
          e.informGlobally("CSSLoader.loadStyleSheet")
            .addStringAnnotation("source", n)
            .addStringAnnotation("name", t);
        }),
        o("ResourceTimingsStore").measureRequestSent("css", m));
      var p = function () {
          (o("ResourceTimingsStore").measureResponseReceived("css", m), i());
        },
        _ = r("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
      d
        ? c(t, p, l, s)
        : e !== !0
          ? (c(t, p, l, s), e === void 0 && u(a))
          : ((s.onload = _.bind(void 0, function () {
              ((s.onload = s.onerror = null), p());
            })),
            (s.onerror = _.bind(void 0, function () {
              ((s.onload = s.onerror = null), l());
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
        setupEventListenersForPotentiallyLoadedCSS: function (
          t,
          n,
          r,
          o,
          a,
          i,
        ) {
          d(t, n, r, o, a, i, !0);
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
