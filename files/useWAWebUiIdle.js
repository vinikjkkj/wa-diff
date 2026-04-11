__d(
  "useWAWebUiIdle",
  [
    "WAAbortError",
    "WAWebDocumentFlushed",
    "WAWebNoop",
    "WAWebUiIdleEventBus",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t = o("useWAWebListener").useAddListenerOnce(),
        n = t[0],
        a = r("useWAWebUnmountSignal")(),
        i;
      e[0] !== n || e[1] !== a
        ? ((i = function (t) {
            if (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy) {
              n(o("WAWebUiIdleEventBus").UiIdleEventBus, "ui_idle", t);
              return;
            }
            o("WAWebDocumentFlushed")
              .documentFlushed({ signal: a })
              .then(function () {
                t();
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
          }),
          (e[0] = n),
          (e[1] = a),
          (e[2] = i))
        : (i = e[2]);
      var l = i;
      return l;
    }
    l.default = u;
  },
  98,
);
