__d(
  "WAWebBizBroadcastFormatStatusText",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = (e == null ? void 0 : e[0]) != null ? Number(e[0].toString()) : 0,
        n = (e == null ? void 0 : e[1]) != null ? Number(e[1].toString()) : 0;
      return t > 0 && n > 0
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"{processingCount} processing, {failedCount} failed broadcasts","_1":"{processingCount} processing, 1 failed broadcast"},"_1":{"*":"1 processing, {failedCount} failed broadcasts","_1":"1 processing, 1 failed broadcast"}}',
            [s._plural(t, "processingCount"), s._plural(n, "failedCount")],
          )
        : t > 0
          ? s._(
              /*BTDS*/ '_j{"*":"{number} processing broadcasts","_1":"1 processing broadcast"}',
              [s._plural(t, "number")],
            )
          : n > 0
            ? s._(
                /*BTDS*/ '_j{"*":"{number} failed broadcasts","_1":"1 failed broadcast"}',
                [s._plural(n, "number")],
              )
            : s._(/*BTDS*/ "Your broadcast message is being processed.");
    }
    l.default = e;
  },
  226,
);
