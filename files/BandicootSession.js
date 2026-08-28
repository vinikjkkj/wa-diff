__d(
  "BandicootSession",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.freeze({
        ACTIVE: "ACTIVE",
        INACTIVE: "INACTIVE",
        CLOSED: "CLOSED",
      }),
      l = 600 * 1e3,
      s = 336 * 60 * 60 * 1e3;
    function u(e) {
      return Date.now() - e.lastUpdated;
    }
    function c(e) {
      return !!(
        typeof e == "object" &&
        e &&
        e.lastUpdated != null &&
        e.status != null
      );
    }
    function d(t) {
      return t.status === e.CLOSED
        ? !1
        : !(t.status === e.INACTIVE && u(t) > l);
    }
    function m(t) {
      return t.status === e.ACTIVE && u(t) > l;
    }
    function p(e) {
      return u(e) > s;
    }
    ((i.Status = e),
      (i.isValidSession = c),
      (i.isTrackedSession = d),
      (i.isCrashedSession = m),
      (i.isOrphanSession = p));
  },
  66,
);
