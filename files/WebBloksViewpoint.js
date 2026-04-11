__d(
  "WebBloksViewpoint",
  ["WebBloksViewpointContext", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(9),
        n = c(r("WebBloksViewpointContext")),
        a = e.action,
        i = e.id,
        l = e.untrackAfterFirstAppear,
        s = m(null);
      _(e);
      var u;
      t[0] !== a || t[1] !== l || t[2] !== n
        ? ((u = function (t) {
            a(t);
            var e = s.current;
            e &&
              t.state === "entered" &&
              l === !0 &&
              (n == null || n.untrackElement(e));
          }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = n),
          (t[3] = u))
        : (u = t[3]);
      var p = u,
        f,
        g;
      return (
        t[4] !== p || t[5] !== i || t[6] !== n
          ? ((f = function () {
              var e = s.current;
              e && n && n.track(e, p, i);
            }),
            (g = [p, i, n]),
            (t[4] = p),
            (t[5] = i),
            (t[6] = n),
            (t[7] = f),
            (t[8] = g))
          : ((f = t[7]), (g = t[8])),
        d(f, g),
        s
      );
    }
    ((l.ViewpointSnapshot = p), (l.useViewpoint = g));
  },
  98,
);
