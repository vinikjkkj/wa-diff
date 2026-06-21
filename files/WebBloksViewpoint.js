__d(
  "WebBloksViewpoint",
  [
    "WebBloksComponentContext",
    "WebBloksInterpreterEnvironment",
    "WebBloksViewpointContext",
    "react",
    "react-compiler-runtime",
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
          Object.assign(this, t));
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.action,
        r = e.id,
        a = e.suppressWarnings,
        i = f(r),
        l = f(r),
        s;
      (t[0] !== n || t[1] !== r || t[2] !== l || t[3] !== i || t[4] !== a
        ? ((s = function () {
            var e = i !== r;
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = l),
          (t[3] = i),
          (t[4] = a),
          (t[5] = s))
        : (s = t[5]),
        d(s, void 0));
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
      var t = o("react-compiler-runtime").c(10),
        n = c(r("WebBloksViewpointContext")),
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.bloksContext,
        l = e.action,
        s = e.id,
        u = e.untrackAfterFirstAppear,
        p = m(null);
      _(e);
      var f;
      t[0] !== l || t[1] !== u || t[2] !== n
        ? ((f = function (t) {
            l(t);
            var e = p.current;
            e &&
              t.state === "entered" &&
              u === !0 &&
              (n == null || n.untrackElement(e));
          }),
          (t[0] = l),
          (t[1] = u),
          (t[2] = n),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h,
        y;
      return (
        t[4] !== g || t[5] !== i || t[6] !== s || t[7] !== n
          ? ((h = function () {
              var e = new (r("WebBloksInterpreterEnvironment"))(i);
              e.executeOnNextTick(function () {
                var e = p.current;
                e && n && n.track(e, g, s);
              }, []);
            }),
            (y = [g, i, s, n]),
            (t[4] = g),
            (t[5] = i),
            (t[6] = s),
            (t[7] = n),
            (t[8] = h),
            (t[9] = y))
          : ((h = t[8]), (y = t[9])),
        d(h, y),
        p
      );
    }
    ((l.ViewpointSnapshot = p), (l.useViewpoint = g));
  },
  98,
);
