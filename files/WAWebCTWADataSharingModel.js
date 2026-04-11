__d(
  "WAWebCTWADataSharingModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = new (r("WAWebEventEmitter"))(),
      u = function (n) {
        ((e = n), s.trigger("update", e));
      },
      c = function () {
        return e;
      },
      d = function (t) {
        s.on("update", t);
      },
      m = function (t) {
        s.off("update", t);
      },
      p = {
        subscribeForUpdates: d,
        unsubscribeFromUpdates: m,
        setValue: u,
        getValue: c,
      };
    l.CTWADataSharingModel = p;
  },
  98,
);
