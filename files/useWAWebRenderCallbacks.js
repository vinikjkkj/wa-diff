__d(
  "useWAWebRenderCallbacks",
  [
    "WAAbortError",
    "WAFilteredCatch",
    "WAWebDocumentFlushed",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useLayoutEffect,
      d = s.useRef;
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(11),
        a = d(null),
        i = r("useWAWebUnmountSignal")(),
        l = (t = r("useWAWebStableCallback"))(e.onDOMCommit),
        s = t(e.onMount),
        m = t(e.onBeforePaint),
        p = t(e.onAfterPaint),
        _ = t(e.onUnmount),
        f = t(e.onError),
        g,
        h;
      (n[0] !== p ||
      n[1] !== m ||
      n[2] !== f ||
      n[3] !== s ||
      n[4] !== _ ||
      n[5] !== i
        ? ((g = function () {
            return (
              s(),
              (a.current = window.requestAnimationFrame(function () {
                ((a.current = null), m());
              })),
              o("WAWebDocumentFlushed")
                .documentFlushed({ signal: i })
                .then(function () {
                  i.aborted || p();
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAAbortError").AbortError,
                    f,
                  ),
                ),
              function () {
                (a.current != null && window.cancelAnimationFrame(a.current),
                  _());
              }
            );
          }),
          (h = [s, m, p, _, f, i]),
          (n[0] = p),
          (n[1] = m),
          (n[2] = f),
          (n[3] = s),
          (n[4] = _),
          (n[5] = i),
          (n[6] = g),
          (n[7] = h))
        : ((g = n[6]), (h = n[7])),
        u(g, h));
      var y, C;
      (n[8] !== l
        ? ((y = function () {
            l();
          }),
          (C = [l]),
          (n[8] = l),
          (n[9] = y),
          (n[10] = C))
        : ((y = n[9]), (C = n[10])),
        c(y, C));
    }
    l.default = m;
  },
  98,
);
