__d(
  "MAIBAPreviewPublishScheduleFormatter",
  ["fbt", "DateStrings", "MAIBAPreviewPublishRawFieldValue", "TimeOfDay"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 60,
      u = 1440,
      c = 7,
      d = "g:i A";
    function m(e, t) {
      return e != null && typeof e == "object" && !Array.isArray(e)
        ? e[t]
        : null;
    }
    function p(e) {
      return e === 0 ? c : e;
    }
    function _(e) {
      return String(o("DateStrings").getWeekdayName(e));
    }
    function f(t) {
      var n = ((t % u) + u) % u;
      return r("TimeOfDay")
        .fromSecondOfDay(n * e)
        .format(d);
    }
    function g(e) {
      if (e.length === c) return String(s._(/*BTDS*/ ""));
      var t = e.map(p),
        n = t.length > 1 && t[t.length - 1] - t[0] === t.length - 1;
      return n
        ? String(
            s._(/*BTDS*/ "", [
              s._param("startDay", _(e[0])),
              s._param("endDay", _(e[e.length - 1])),
            ]),
          )
        : e.map(_).join(", ");
    }
    function h(e) {
      return e === "ADVERTISER"
        ? String(s._(/*BTDS*/ ""))
        : e === "USER"
          ? String(s._(/*BTDS*/ ""))
          : null;
    }
    function y(e) {
      var t = new Map(),
        n = new Set(),
        r = !0;
      for (var a of e) {
        var i = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(
            m(a, "start_minute"),
          ),
          l = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(
            m(a, "end_minute"),
          ),
          s = m(a, "days");
        if (i == null || l == null || !Array.isArray(s)) return null;
        var u = [];
        for (var d of s) {
          var _ = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(d);
          if (_ == null || _ < 0 || _ >= c) return null;
          u.push(_);
        }
        if (u.length === 0) return null;
        var f = String(i) + "-" + String(l),
          g = t.get(f);
        if (g == null) t.set(f, { days: u, end: l, start: i });
        else {
          var h;
          (h = g.days).push.apply(h, u);
        }
        var y = m(a, "timezone_type");
        typeof y == "string" && y !== "" ? n.add(y) : (r = !1);
      }
      return t.size === 0
        ? null
        : {
            allWindowsLabeled: r,
            timezones: n,
            windows: Array.from(t.values(), function (e) {
              return {
                days: Array.from(new Set(e.days)).sort(function (e, t) {
                  return p(e) - p(t);
                }),
                end: e.end,
                start: e.start,
              };
            }),
          };
    }
    function C(e) {
      var t = o("MAIBAPreviewPublishRawFieldValue").asArray(e);
      if (t == null || t.length === 0) return null;
      var n = y(t);
      if (n == null) return null;
      var r = n.windows
          .map(function (e) {
            return String(
              s._(/*BTDS*/ "", [
                s._param("dayRange", g(e.days)),
                s._param("startTime", f(e.start)),
                s._param("endTime", f(e.end)),
              ]),
            );
          })
          .join("; "),
        a =
          n.timezones.size === 1 && n.allWindowsLabeled
            ? Array.from(n.timezones)[0]
            : null,
        i = a != null ? h(a) : null;
      return i == null
        ? r
        : String(
            s._(/*BTDS*/ "", [
              s._param("schedule", r),
              s._param("timezone", i),
            ]),
          );
    }
    l.formatScheduleValue = C;
  },
  226,
);
