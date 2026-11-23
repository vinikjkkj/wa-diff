__d(
  "WebBloksViewpoint",
  [
    "WebBloksComponentContext",
    "WebBloksInterpreterEnvironment",
    "WebBloksViewpointContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useEffect,
      m = s.useRef,
      p = function (t) {
        ((this.element = null),
          (this.percentVisible = null),
          (this.state = null),
          (this.element = t.element),
          (this.percentVisible = t.percentVisible),
          (this.state = t.state));
      };
    function _(e) {
      var t = e.action,
        n = e.id,
        r = e.suppressWarnings,
        o = f(n),
        a = f(n);
      d(
        function () {
          var e = o !== n;
        },
        void 0,
      );
    }
    function f(e) {
      var t = m(null);
      return (
        d(
          function () {
            t.current = e;
          },
          void 0,
        ),
        t.current
      );
    }
    function g(e) {
      var t = c(r("WebBloksViewpointContext")),
        n = o("WebBloksComponentContext").useWebBloksContext(),
        a = n.bloksContext,
        i = e.action,
        l = e.id,
        s = e.untrackAfterFirstAppear,
        p = m(null);
      _(e);
      var f = u(
        function (e) {
          i(e);
          var n = p.current;
          n &&
            e.state === "entered" &&
            s === !0 &&
            (t == null || t.untrackElement(n));
        },
        [i, s, t],
      );
      return (
        d(
          function () {
            var e = new (r("WebBloksInterpreterEnvironment"))(a);
            e.executeOnNextTick(function () {
              var e = p.current;
              e && t && t.track(e, f, l);
            }, []);
          },
          [f, a, l, t],
        ),
        p
      );
    }
    ((l.ViewpointSnapshot = p), (l.useViewpoint = g));
  },
  98,
);
