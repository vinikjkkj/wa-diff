__d(
  "WmiWireRoute",
  ["WmiErrorReport", "WmiErrorStamp", "fb-error"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["callerReports"];
    async function s(t, n, a, i, l) {
      var s = a.callerReports,
        u = babelHelpers.objectWithoutPropertiesLoose(a, e);
      try {
        return { success: !0, value: await i(u) };
      } catch (e) {
        var c,
          d,
          m = t.classify(e, "bridge/" + n, l);
        return (
          s !== !0 && o("WmiErrorReport").reportWmiError(m),
          {
            code: t.codeOf(m),
            error: "runtime-error",
            message: r("fb-error").ErrorSerializer.toReadableMessage(m),
            payload: m,
            source:
              (c =
                (d = o("WmiErrorStamp").getWmiErrorStamp(m)) == null
                  ? void 0
                  : d.source) != null
                ? c
                : void 0,
            stack: m.stack,
            success: !1,
          }
        );
      }
    }
    l.wmiWireRoute = s;
  },
  98,
);
