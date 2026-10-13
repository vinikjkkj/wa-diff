__d(
  "WAWebBizAiConsumerWid",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = s(e)[0]) != null ? t : null;
    }
    function s(e) {
      var t = [],
        n = e == null ? void 0 : e.lid;
      if (n != null && n !== "") {
        var r = u(n, "lid");
        r != null && t.push(r);
      }
      var o = e == null ? void 0 : e.pn;
      if (o != null && o !== "") {
        var a = u(o, "c.us");
        a != null &&
          !t.some(function (e) {
            return e.toString() === a.toString();
          }) &&
          t.push(a);
      }
      return t;
    }
    function u(e, t) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e, t);
      } catch (e) {
        return null;
      }
    }
    ((l.getBizAiConsumerWid = e), (l.getBizAiConsumerWids = s));
  },
  98,
);
