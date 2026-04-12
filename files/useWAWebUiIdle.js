__d(
  "useWAWebUiIdle",
  [
    "WAAbortError",
    "WAWebDocumentFlushed",
    "WAWebNoop",
    "WAWebUiIdleEventBus",
    "react",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u() {
      var e = o("useWAWebListener").useAddListenerOnce(),
        t = e[0],
        n = r("useWAWebUnmountSignal")(),
        a = s(
          function (e) {
            if (o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy) {
              t(o("WAWebUiIdleEventBus").UiIdleEventBus, "ui_idle", e);
              return;
            }
            o("WAWebDocumentFlushed")
              .documentFlushed({ signal: n })
              .then(function () {
                e();
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
          },
          [t, n],
        );
      return a;
    }
    l.default = u;
  },
  98,
);
