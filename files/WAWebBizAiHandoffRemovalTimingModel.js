__d(
  "WAWebBizAiHandoffRemovalTimingModel",
  ["WALogger", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WAWebEventEmitter"))(),
      u = "IMMEDIATELY";
    function c() {
      return u;
    }
    function d(e) {
      e !== u && ((u = e), s.trigger("updated"));
    }
    function m(t) {
      if (t == null) return "IMMEDIATELY";
      var n = String(t);
      return n === "AFTER_24H_REPLY"
        ? "AFTER_24H_REPLY"
        : (n !== "IMMEDIATELY" &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Unrecognized handoff removal timing: ",
                    "",
                  ])),
                n,
              )
              .sendLogs("biz-ai-handoff-removal-timing-unknown"),
          "IMMEDIATELY");
    }
    ((l.BizAiHandoffRemovalTimingEventBus = s),
      (l.getHandoffRemovalTiming = c),
      (l.applyHandoffRemovalTiming = d),
      (l.toHandoffRemovalTiming = m));
  },
  98,
);
