__d(
  "WAWebHatchGoalSteps",
  ["WAWebHatchActivityRecord", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["blocked", "in_progress"],
        ["completed", "complete"],
        ["error", "failed"],
        ["failed", "failed"],
        ["pending", "in_progress"],
        ["running", "in_progress"],
        ["stopped", "failed"],
        ["success", "complete"],
      ]),
      s = /^\s*#{1,6}\s+(.*)$/,
      u = /^(\s*)[-*+]\s+(.*)$/,
      c = /\\n/g,
      d = /\\n([-*+>|#]|\d+\. )|\.\\n/;
    function m(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "actions");
      return !o("WAWebHatchJsonReaders").isObject(e) || t == null
        ? null
        : {
            nextCursor: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(e, "next_cursor"),
            ),
            steps: t.filter(o("WAWebHatchJsonReaders").isObject).map(h),
          };
    }
    function p(e) {
      return o("WAWebHatchJsonReaders").isObject(e)
        ? {
            nextOffset: o("WAWebHatchJsonReaders").readInteger(
              e,
              "next_report_offset",
            ),
            text: o("WAWebHatchJsonReaders").readStringOrEmpty(e, "report"),
          }
        : null;
    }
    function _(t) {
      var n;
      return (n = e.get(t)) != null ? n : null;
    }
    function f(e) {
      var t,
        n,
        r = [].concat(e).sort(y),
        o = r.some(function (e) {
          return e.agentId == null;
        })
          ? null
          : (t = (n = r[0]) == null ? void 0 : n.agentId) != null
            ? t
            : null,
        a = new Map();
      for (var i of r) {
        var l = i.agentId === o ? null : i.agentId,
          s = a.get(l);
        s == null ? a.set(l, [i]) : s.push(i);
      }
      var u = a.get(null);
      return (
        a.delete(null),
        [].concat(
          u == null ? [] : [{ steps: u, subagentIndex: null }],
          Array.from(a.values(), function (e, t) {
            return { steps: e, subagentIndex: t + 1 };
          }),
        )
      );
    }
    function g(e) {
      var t = C(e)
        ? e
            .replace(/\\r\\n/g, "\n")
            .replace(/\\n/g, "\n")
            .replace(/\\t/g, "	")
        : e;
      return t
        .split("\n")
        .map(b)
        .join("\n")
        .replace(/\*\*/g, "")
        .replace(/`/g, "")
        .trim();
    }
    function h(e) {
      var t,
        n,
        r = (n = o("WAWebHatchJsonReaders")).trimToNull(
          n.readTrimmedString(e, "id"),
        ),
        a = n.trimToNull(n.readTrimmedString(e, "agent_id")),
        i = n.readTrimmedString(e, "title"),
        l = o("WAWebHatchActivityRecord").parseHatchRfc3339(
          n.readTrimmedString(e, "created_at"),
        ),
        s = n.trimToNull(n.readStringOrEmpty(e, "report"));
      return {
        agentId: a,
        createdAtMs: l,
        hasReport:
          (t = o("WAWebHatchJsonReaders").readBool(e, "has_report")) != null
            ? t
            : s != null,
        id: r,
        key:
          r != null
            ? r
            : (a != null ? a : "") + "/" + (l != null ? l : "") + "/" + i,
        report: s,
        status: o("WAWebHatchActivityRecord").parseHatchActivityStatus(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "status"),
        ),
        subtitle: o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "subtitle"),
        ),
        title: i,
      };
    }
    function y(e, t) {
      return e.createdAtMs == null || t.createdAtMs == null
        ? (e.createdAtMs == null ? 1 : 0) - (t.createdAtMs == null ? 1 : 0)
        : e.createdAtMs - t.createdAtMs;
    }
    function C(e) {
      var t, n;
      return (
        !e.includes("\n") &&
        (((t = (n = e.match(c)) == null ? void 0 : n.length) != null ? t : 0) >=
          2 ||
          d.test(e))
      );
    }
    function b(e) {
      var t = s.exec(e);
      if (t != null) return t[1];
      var n = u.exec(e);
      return n == null ? e : n[1] + "\u2022 " + n[2];
    }
    ((l.decodeHatchGoalStepsPage = m),
      (l.decodeHatchGoalStepReport = p),
      (l.hatchGoalState = _),
      (l.hatchGoalStepSections = f),
      (l.hatchGoalReportText = g));
  },
  98,
);
