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
    function _() {
      return c != null ? c : e;
    }
    var f = function (t) {
        d.on("update", t);
      },
      g = function (t) {
        d.off("update", t);
      },
      h = {
        subscribeForUpdates: f,
        unsubscribeFromUpdates: g,
        setValue: m,
        getValue: p,
        getVersion: _,
      };
    ((l.BASE_DISCLOSURE_VERSION = e),
      (l.EPD_DISCLOSURE_VERSION = s),
      (l.CTWADataSharingModel = h));
  },
  98,
);
