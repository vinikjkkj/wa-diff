__d(
  "WAWebCTWADataSharingModel",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 2,
      u = null,
      c = null,
      d = 0,
      m = new (r("WAWebEventEmitter"))(),
      p = function (t, n) {
        ((d += 1), (u = t), n != null && (c = n), m.trigger("update", u));
      };
    function _() {
      return u;
    }
    function f() {
      return c != null ? c : e;
    }
    function g() {
      return d;
    }
    var h = function (t) {
        m.on("update", t);
      },
      y = function (t) {
        m.off("update", t);
      },
      C = {
        subscribeForUpdates: h,
        unsubscribeFromUpdates: y,
        setValue: p,
        getValue: _,
        getVersion: f,
        getRevision: g,
      };
    ((l.BASE_DISCLOSURE_VERSION = e),
      (l.EPD_DISCLOSURE_VERSION = s),
      (l.CTWADataSharingModel = C));
  },
  98,
);
