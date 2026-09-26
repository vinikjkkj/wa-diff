__d(
  "FDSFormTimeInputUtils",
  ["DateConsts", "EventTimeInputUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new RegExp("\\s|" + o("EventTimeInputUtils").SEPARATOR, "g");
    function s(e) {
      return e.reduce(function (e, t) {
        return ((e[t.uniqueID] = t), e);
      }, {});
    }
    function u(e, t) {
      return Object.values(babelHelpers.extends({}, e, t));
    }
    function c(t, n, r) {
      var a = [],
        i = n;
      do
        ((a = t
          .filter(function (t) {
            var n = t.title;
            return n.replace(e, "").startsWith(i.replace(e, ""));
          })
          .sort(function (e, t) {
            var n = e.title.startsWith(i),
              a = t.title.startsWith(i);
            if (r == null) return n && a ? 0 : n ? -1 : 1;
            var l = e.uniqueID - r;
            (l <= 0 && (l += o("DateConsts").SEC_PER_DAY),
              a && (l += o("DateConsts").SEC_PER_DAY));
            var s = t.uniqueID - r;
            return (
              s <= 0 && (s += o("DateConsts").SEC_PER_DAY),
              n && (s += o("DateConsts").SEC_PER_DAY),
              l - s
            );
          })),
          (i = i.slice(0, -1)));
      while (a.length === 0);
      return a;
    }
    ((l.timeEntryArrToObj = s),
      (l.timeEntryObjsToArr = u),
      (l.getTimeSuggestions = c));
  },
  98,
);
