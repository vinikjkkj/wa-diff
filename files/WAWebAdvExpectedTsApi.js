__d(
  "WAWebAdvExpectedTsApi",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.deviceRecord,
        n = e.incomingTs,
        r = e.lastDeviceJobTs,
        o = t == null ? void 0 : t.timestamp;
      if (o == null)
        return {
          expectedTs: void 0,
          expectedTsLastDeviceJobTs: void 0,
          expectedTsUpdateTs: void 0,
        };
      var a, i, l;
      return (
        t != null &&
          !t.deleted &&
          ((a = t.expectedTs),
          (i = t.expectedTsLastDeviceJobTs),
          (l = t.expectedTsUpdateTs)),
        s({
          currentExpectedTs: a,
          currentExpectedTsLastDeviceJobTs: i,
          currentExpectedTsUpdateTs: l,
          currentLastDeviceJobTs: r,
          currentTs: o,
          incomingExpectedTs: n,
        })
      );
    }
    function s(e) {
      var t = e.currentExpectedTs,
        n = e.currentExpectedTsLastDeviceJobTs,
        r = e.currentExpectedTsUpdateTs,
        a = e.currentLastDeviceJobTs,
        i = e.currentTs,
        l = e.incomingExpectedTs,
        s = {
          expectedTs: t,
          expectedTsLastDeviceJobTs: n,
          expectedTsUpdateTs: r,
        };
      return (
        i >= l ||
          (t != null && t >= l) ||
          ((s.expectedTs = l),
          (s.expectedTsLastDeviceJobTs = a != null ? a : void 0),
          (t == null || i >= t) &&
            (s.expectedTsUpdateTs =
              o("WATimeUtils").unixTimeWithoutClockSkewCorrection())),
        s
      );
    }
    function u(e, t, n, r) {
      return n == null || n.deleted || n.expectedTs == null
        ? !1
        : e >= n.expectedTs ||
            (e < n.expectedTs &&
              t === n.expectedTs &&
              r != null &&
              (n.expectedTsLastDeviceJobTs == null ||
                r > n.expectedTsLastDeviceJobTs));
    }
    ((l.computeExpectedTsForDeviceRecord = e),
      (l.computeNewExpectedTs = s),
      (l.shouldClearExpectedTs = u));
  },
  98,
);
