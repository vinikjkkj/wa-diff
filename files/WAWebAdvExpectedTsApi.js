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
        s(n, o, r, a, i, l)
      );
    }
    function s(e, t, n, r, a, i) {
      var l = {
        expectedTs: r,
        expectedTsLastDeviceJobTs: a,
        expectedTsUpdateTs: i,
      };
      return (
        t >= e ||
          (r != null && r >= e) ||
          ((l.expectedTs = e),
          (l.expectedTsLastDeviceJobTs = n != null ? n : void 0),
          (r == null || t >= r) &&
            (l.expectedTsUpdateTs =
              o("WATimeUtils").unixTimeWithoutClockSkewCorrection())),
        l
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
