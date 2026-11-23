__d(
  "WAWebRequestHatchBrowserTasks",
  [
    "WALogger",
    "WAWebHatchBrowserTask",
    "WAWebHatchBrowserTaskState",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
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
      _ = 10 * 1024 * 1024,
      f = new Set(),
      g = 0;
    async function h() {
      var t = g,
        n = await v(function (e) {
          return e.computerContext({ timeoutMs: p });
        });
      if (n.kind !== "Ok") {
        var r = S(n);
        return r === "http.403"
          ? { kind: "computerDisabled" }
          : (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-computer/list-browser-tasks-failed reason=",
                  "",
                ])),
              r,
            ),
            { kind: "failed", reason: r });
      }
      var a = o("WAWebHatchBrowserTask").decodeHatchBrowserTasks(n.value);
      if (a == null)
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-computer/list-browser-tasks-failed reason=malformedResponse",
                ])),
            )
            .sendLogs("hatch-computer-list-browser-tasks-failed"),
          { kind: "failed", reason: "malformedResponse" }
        );
      var i = t === g ? C(a.malformedCount, a.malformedIDs) : 0;
      return (
        i > 0 &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-computer/list-browser-tasks-dropped malformed=",
                  "",
                ])),
              i,
            )
            .sendLogs("hatch-computer-list-browser-tasks-dropped"),
        { kind: "ok", tasks: a.tasks }
      );
    }
    async function y(e) {
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
      var n = await v(function (e) {
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
              S(n),
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
    }
    function C(e, t) {
      var n = e - t.length;
      for (var r of t) {
        var a = o("WAWebHatchBrowserTaskState").normalizedBrowserTaskID(r);
        f.has(a) || (f.add(a), n++);
      }
      return n;
    }
    function b() {
      (g++, f.clear());
    }
    async function v(e) {
      var t = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (t == null) return { kind: "NoSession" };
      var n = await e(t);
      return n.kind === "Failure" ? e(t) : n;
    }
    function S(e) {
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
    ((l.requestHatchBrowserTasks = h),
      (l.requestHatchBrowserTaskScreenshot = y),
      (l.unreportedMalformedCount = C),
      (l.resetLoggedMalformedBrowserTaskIDs = b));
  },
  98,
);
