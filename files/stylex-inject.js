__d(
  "stylex-inject",
  [
    "CometSSRStyleXInjectionCollection",
    "CometStyleXSheet",
    "ServerJsRuntimeEnvironment",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s(t) {
      var n = t.ltr,
        a = t.priority,
        i = t.rtl,
        l = i === void 0 ? null : i;
      (!e && r("gkx")("20935") && n.indexOf("@keyframes") === -1 && (e = !0),
        o("ServerJsRuntimeEnvironment").getExecutionContext() === "SSR" &&
          o("CometSSRStyleXInjectionCollection").addStyleInjection(n, a, l),
        o("CometStyleXSheet").rootStyleSheet.insert(n, a, l));
    }
    l.default = s;
  },
  98,
);
