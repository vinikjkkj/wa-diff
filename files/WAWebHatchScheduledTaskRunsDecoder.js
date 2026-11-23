__d(
  "WAWebHatchScheduledTaskRunsDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "null";
    function s(e, t) {
      var n,
        r =
          (n = o("WAWebHatchJsonReaders").readArray(e, "runs")) != null
            ? n
            : o("WAWebHatchJsonReaders").readArray(
                o("WAWebHatchJsonReaders").readObject(e, "result"),
                "runs",
              );
      if (r == null) return null;
      var a = [],
        i = new Set();
      for (var l of r) {
        var s = u(l, t);
        s != null && !i.has(s.id) && (i.add(s.id), a.push(s));
      }
      return a.sort(d);
    }
    function u(e, t) {
      var n = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readStringOrEmpty(e, "run_id"),
      );
      return n == null ||
        o("WAWebHatchJsonReaders").readString(e, "job_id") !== t
        ? null
        : {
            errorText: c(e, "error_text"),
            id: n,
            resultSummary: c(e, "result_summary"),
            scheduledForSec: o("WAWebHatchJsonReaders").readPositiveDateSec(
              e,
              "scheduled_for_utc",
            ),
            status: o("WAWebHatchJsonReaders")
              .readStringOrEmpty(e, "status")
              .trim(),
          };
    }
    function c(t, n) {
      var r = o("WAWebHatchJsonReaders").trimToNull(
        o("WAWebHatchJsonReaders").readStringOrEmpty(t, n),
      );
      return (r == null ? void 0 : r.toLowerCase()) === e ? null : r;
    }
    function d(e, t) {
      var n, r;
      return (
        ((n = t.scheduledForSec) != null ? n : 0) -
        ((r = e.scheduledForSec) != null ? r : 0)
      );
    }
    l.decodeHatchScheduledTaskRuns = s;
  },
  98,
);
