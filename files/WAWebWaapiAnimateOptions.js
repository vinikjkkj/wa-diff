__d(
  "WAWebWaapiAnimateOptions",
  ["WAWebUimUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (typeof e != "object" || e == null) return {};
      var t = e.container,
        n = e.progress,
        r = e,
        a = t != null ? t : null;
      return {
        axis: s(r.axis),
        container: o("WAWebUimUtils").isCrossWindowHTMLElement(a) ? a : void 0,
        delay: u(r.delay),
        drag: r.drag === !0,
        duration: u(r.duration),
        easing: c(r.easing),
        offset: u(r.offset),
        progress: typeof n == "function" ? n : void 0,
        queue: typeof r.queue == "string" || r.queue === !1 ? r.queue : void 0,
        stagger: u(r.stagger),
      };
    }
    function s(e) {
      if (e === "x") return "x";
      if (e === "y") return "y";
    }
    function u(e) {
      return typeof e == "number" && Number.isFinite(e) ? e : void 0;
    }
    function c(e) {
      if (typeof e == "string") return e;
      if (Array.isArray(e) && (e.length === 2 || e.length === 4)) {
        var t = [];
        for (var n of e) {
          var r = u(n);
          r != null && t.push(r);
        }
        return t.length === e.length ? t : void 0;
      }
    }
    l.optionsObject = e;
  },
  98,
);
