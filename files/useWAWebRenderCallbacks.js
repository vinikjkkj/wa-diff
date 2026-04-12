__d(
  "useWAWebRenderCallbacks",
  [
    "WAAbortError",
    "WAFilteredCatch",
    "WAWebDocumentFlushed",
    "react",
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
        n = d(null),
        a = r("useWAWebUnmountSignal")(),
        i = (t = r("useWAWebStableCallback"))(e.onDOMCommit),
        l = t(e.onMount),
        s = t(e.onBeforePaint),
        m = t(e.onAfterPaint),
        p = t(e.onUnmount),
        _ = t(e.onError);
      (u(
        function () {
          return (
            l(),
            (n.current = window.requestAnimationFrame(function () {
              ((n.current = null), s());
            })),
            o("WAWebDocumentFlushed")
              .documentFlushed({ signal: a })
              .then(function () {
                a.aborted || m();
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAAbortError").AbortError,
                  _,
                ),
              ),
            function () {
              (n.current != null && window.cancelAnimationFrame(n.current),
                p());
            }
          );
        },
        [l, s, m, p, _, a],
      ),
        c(
          function () {
            i();
          },
          [i],
        ));
    }
    l.default = m;
  },
  98,
);
