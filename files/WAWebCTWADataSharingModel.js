__d(
  "WAWebCTWADataSharingModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 2,
      u = null,
      c = null,
      d = new (r("WAWebEventEmitter"))(),
      m = function (t, n) {
        ((u = t), n != null && (c = n), d.trigger("update", u));
      };
    function p() {
      return u;
    }
    var _ = function () {
        return c != null ? c : e;
      },
      f = function (t) {
        d.on("update", t);
      },
      g = function (t) {
        d.off("update", t);
      },
      h = function () {
        ((u = null), (c = null));
      },
      y = {
        subscribeForUpdates: f,
        unsubscribeFromUpdates: g,
        setValue: m,
        getValue: p,
        getVersion: _,
        resetForTests: h,
      };
    ((l.BASE_DISCLOSURE_VERSION = e),
      (l.EPD_DISCLOSURE_VERSION = s),
      (l.CTWADataSharingModel = y));
  },
  98,
);
