__d(
  "WAWebBizAiConsumerWid",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.lid;
      if (t != null && t !== "") {
        var n = s(t, "lid");
        if (n != null) return n;
      }
      var r = e == null ? void 0 : e.pn;
      return r != null && r !== "" ? s(r, "c.us") : null;
    }
    function s(e, t) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e, t);
      } catch (e) {
        return null;
      }
    }
    l.getBizAiConsumerWid = e;
  },
  98,
);
