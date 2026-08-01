__d(
  "VenusFlytrapLogging",
  ["QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(e, t) {
      (t === void 0 && (t = !1),
        r("QPLUserFlow").start(r("qpl")._(67975436, "2916"), {
          annotations: {
            int: { is_legacy: t ? 0 : 1 },
            string: { entry_point: e },
          },
        }));
    }
    function u() {
      (r("QPLUserFlow").endCancel(r("qpl")._(67975436, "2916")), e.clear());
    }
    function c() {
      (r("QPLUserFlow").endSuccess(r("qpl")._(67975436, "2916"), {}),
        e.clear());
    }
    function d() {
      (r("QPLUserFlow").endFailure(
        r("qpl")._(67975436, "2916"),
        "bug_report_failed",
      ),
        e.clear());
    }
    function m(t) {
      var n,
        o = (n = e.get(t.stepPoint)) != null ? n : 0;
      (r("QPLUserFlow").addPoint(
        r("qpl")._(67975436, "2916"),
        o === 0 ? t.stepPoint : t.stepPoint + "_" + o,
        { data: p(t) },
      ),
        e.set(t.stepPoint, o + 1));
    }
    function p(e) {
      switch (e.stepPoint) {
        case "set_problem_type": {
          var t = e.data.problemType;
          return { string: { problem_type: t } };
        }
        case "set_has_complete_logs": {
          var n = e.data.hasCompleteLogs;
          return { int: { has_complete_logs: n ? 1 : 0 } };
        }
        case "add_attachment": {
          var r = e.data.numberOfAttachments;
          return { int: { number_of_attachments: r } };
        }
        default:
          return;
      }
    }
    ((l.venusFlytrapLoggingStart = s),
      (l.venusFlytrapLoggingEndCancel = u),
      (l.venusFlytrapLoggingEndSuccess = c),
      (l.venusFlytrapLoggingEndFailure = d),
      (l.venusFlytrapLoggingAddPoint = m));
  },
  98,
);
