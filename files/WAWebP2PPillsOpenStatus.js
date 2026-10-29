__d(
  "WAWebP2PPillsOpenStatus",
  ["WAWebBusinessProfileUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 9e5,
      u = 60 * 1e3,
      c = new Set([
        (e = o("WAWebBusinessProfileUtils")).BUSINESS_OPEN_STATUS.OPEN,
        e.BUSINESS_OPEN_STATUS.OPEN_24H,
        e.BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT,
      ]),
      d = new Set([
        e.BUSINESS_OPEN_STATUS.CLOSED,
        e.BUSINESS_OPEN_STATUS.CLOSED_TODAY,
        e.BUSINESS_OPEN_STATUS.OPEN_TODAY,
      ]);
    function m(e, t) {
      return p(e, t) == null
        ? null
        : e.businessIsOpen === !0
          ? "open"
          : "closed";
    }
    function p(e, t) {
      var n = e.businessIsOpen,
        r = e.businessIsOpenSnapshotMs;
      if (n == null || r == null) return null;
      var o = t - r;
      return o < -u || o > s ? null : s - o + 1;
    }
    function _(e, t) {
      if (e == null) return null;
      var n = o("WAWebBusinessProfileUtils").getBusinessOpenState(e, t),
        r = n.status;
      return c.has(r) ? "open" : d.has(r) ? "closed" : null;
    }
    ((l.getOpenStatus = m),
      (l.getOpenStatusExpiresInMs = p),
      (l.getLocalOpenStatus = _));
  },
  98,
);
