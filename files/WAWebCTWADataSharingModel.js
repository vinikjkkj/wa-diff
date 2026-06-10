__d(
  "WAWebCTWADataSharingModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = null,
      u = new (r("WAWebEventEmitter"))(),
      c = function (n, r) {
        ((e = n), r != null && (s = r), u.trigger("update", e));
      },
      d = function () {
        return e;
      },
      m = function () {
        return s;
      },
      p = function (t) {
        u.on("update", t);
      },
      _ = function (t) {
        u.off("update", t);
      },
      f = {
        subscribeForUpdates: p,
        unsubscribeFromUpdates: _,
        setValue: c,
        getValue: d,
        getVersion: m,
      };
    l.CTWADataSharingModel = f;
  },
  98,
);
