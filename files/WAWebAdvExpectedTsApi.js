__d(
  "WAWebAdvExpectedTsApi",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = t == null ? void 0 : t.timestamp;
      if (r == null)
        return {
          expectedTs: void 0,
          expectedTsLastDeviceJobTs: void 0,
          expectedTsUpdateTs: void 0,
        };
      var o, a, i;
      return (
        t != null &&
          !t.deleted &&
          ((o = t.expectedTs),
          (a = t.expectedTsLastDeviceJobTs),
          (i = t.expectedTsUpdateTs)),
        s(e, r, n, o, a, i)
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
