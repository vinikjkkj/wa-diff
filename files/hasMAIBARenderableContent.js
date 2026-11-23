__d(
  "hasMAIBARenderableContent",
  ["XPlatReactEnvironment", "actionabilityTools"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /<tool-call\b[^>]*\/>/gi;
    function s(t, n) {
      return o("XPlatReactEnvironment").isWeb()
        ? (t != null && t !== "") || n.length > 0
        : t == null || t === ""
          ? !1
          : t.replace(e, "").trim() !== "" ||
            n.some(function (e) {
              return o("actionabilityTools").isActionabilityToolCall(e);
            });
    }
    l.default = s;
  },
  98,
);
