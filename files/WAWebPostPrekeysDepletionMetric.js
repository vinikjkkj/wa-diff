__d(
  "WAWebPostPrekeysDepletionMetric",
  ["WAWebPrekeysDepletionWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.count,
        n = e.deviceSizeBucket,
        r = e.messageType,
        a = e.prekeysFetchReason;
      if (!(t == null || t === 0)) {
        var i = {};
        (a != null && (i.prekeysFetchReason = a),
          r != null && (i.messageType = r),
          n != null && (i.deviceSizeBucket = n),
          self.setTimeout(function () {
            for (var e = 0; e < t; e++)
              new (o("WAWebPrekeysDepletionWamEvent").PrekeysDepletionWamEvent)(
                i,
              ).commit();
          }, 0));
      }
    }
    l.maybePostPrekeysDepletionMetric = e;
  },
  98,
);
