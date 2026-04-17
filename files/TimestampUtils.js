__d(
  "TimestampUtils",
  ["fbt", "formatDate"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 864e5,
      u = e * 30;
    function c(e, t) {
      return (
        e.getFullYear() === t.getFullYear() &&
        e.getMonth() === t.getMonth() &&
        e.getDate() === t.getDate()
      );
    }
    function d(e, t) {
      return s._(/*BTDS*/ "{date} at {time}", [
        s._param("date", e),
        s._param("time", t),
      ]);
    }
    function m(t, n) {
      var o = r("formatDate")(n, "g:i A");
      if (c(n, t))
        return s._(/*BTDS*/ "Today at {time}", [s._param("time", o)]);
      var a = new Date(t.valueOf() - e);
      if (c(n, a))
        return s._(/*BTDS*/ "Yesterday at {time}", [s._param("time", o)]);
      var i = new Date(t.valueOf() + e);
      if (c(n, i))
        return s._(/*BTDS*/ "Tomorrow at {time}", [s._param("time", o)]);
      var l = r("formatDate")(n, "F j");
      return (
        t.getFullYear() !== n.getFullYear() &&
          (l = r("formatDate")(n, "F j, Y")),
        Math.abs(t.valueOf() - n.valueOf()) < u ? d(l, o) : l
      );
    }
    function p(e) {
      return d(r("formatDate")(e, "l, F j, Y"), r("formatDate")(e, "g:i A"));
    }
    ((l.getAbsoluteTimestampFbt = d),
      (l.getTimestamp = m),
      (l.getAbsoluteTimestamp = p));
  },
  226,
);
