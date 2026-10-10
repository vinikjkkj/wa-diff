__d(
  "WAWebRequestHatchBrowserTasks",
  [
    "WALogger",
    "WAWebHatchBrowserTask",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 3e4,
      _ = 10 * 1024 * 1024;
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield C(function (e) {
            return e.computerContext({ timeoutMs: p });
          });
          if (t.kind !== "Ok") {
            var n = v(t);
            return n === "http.403"
              ? { kind: "computerDisabled" }
              : (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-computer/list-browser-tasks-failed reason=",
                      "",
                    ])),
                  n,
                ),
                { kind: "failed", reason: n });
          }
          var r = o("WAWebHatchBrowserTask").decodeHatchBrowserTasks(t.value);
          return r == null
            ? (o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-computer/list-browser-tasks-failed reason=malformedResponse",
                    ])),
                )
                .sendLogs("hatch-computer-list-browser-tasks-failed"),
              { kind: "failed", reason: "malformedResponse" })
            : (r.malformedCount > 0 &&
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-computer/list-browser-tasks-dropped malformed=",
                        "",
                      ])),
                    r.malformedCount,
                  )
                  .sendLogs("hatch-computer-list-browser-tasks-dropped"),
              { kind: "ok", tasks: r.tasks });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHatchVmTransport").JarvisPaths.COMPUTER_SCREENSHOT(e);
          if (t == null)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-computer/load-screenshot-failed reason=invalidPath",
                    ])),
                )
                .sendLogs("hatch-computer-load-screenshot-failed"),
              null
            );
          var n = yield C(function (e) {
            return e.computerScreenshot(t, { timeoutMs: p });
          });
          return n.kind !== "Ok"
            ? (o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-computer/load-screenshot-failed reason=",
                      "",
                    ])),
                  v(n),
                )
                .sendLogs("hatch-computer-load-screenshot-failed"),
              null)
            : n.value.length > _
              ? (o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-computer/load-screenshot-failed reason=responseTooLarge",
                      ])),
                  )
                  .sendLogs("hatch-computer-load-screenshot-failed"),
                null)
              : n.value;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (t == null) return { kind: "NoSession" };
          var n = yield e(t);
          return n.kind === "Failure" ? e(t) : n;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "NoSession"
        )
          return "session";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected" &&
          "statusCode" in e
        ) {
          var t = e.statusCode;
          if (t != null) return "http." + t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected"
        )
          return "rejected";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Unreadable"
        )
          return "malformedResponse";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Failure"
        )
          return "transport";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    ((l.requestHatchBrowserTasks = f),
      (l.requestHatchBrowserTaskScreenshot = h));
  },
  98,
);
