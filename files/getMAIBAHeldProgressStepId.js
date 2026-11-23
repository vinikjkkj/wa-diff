__d(
  "getMAIBAHeldProgressStepId",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /<tool-call\b[^>]*\/>/gi;
    function l(t, n) {
      if (t == null) return !1;
      var r = t.indexOf('<tool-call id="' + n + '"'),
        o = r === -1 ? -1 : t.indexOf("/>", r);
      return o === -1
        ? !1
        : t
            .slice(o + 2)
            .replace(e, "")
            .trim() !== "";
    }
    function s(e) {
      var t = e.indicatorProgressStepId,
        n = e.isIndicatorShowingProgress,
        r = e.progressUpdates,
        o = e.snippet,
        a = r.length > 0 ? r[r.length - 1] : null;
      return !n ||
        a == null ||
        a.isRenderedByToolCall !== !0 ||
        !a.isCompleted ||
        a.toolCallId !== t ||
        l(o, a.toolCallId)
        ? null
        : a.toolCallId;
    }
    i.default = s;
  },
  66,
);
