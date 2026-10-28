__d(
  "WAWebRequestHatchApprovalHistory",
  [
    "WALogger",
    "WAWebHatchApprovalHistory",
    "WAWebHatchVmConnection",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 50,
      c = 3e4,
      d = 404,
      m = { nextCursor: null, records: [], unreadable: 0 };
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (t == null) return (g("session"), null);
          var n = function () {
              return t.approvalHistory(u, e, { timeoutMs: c });
            },
            r = yield n(),
            a = r.kind === "Failure" && r.reason !== "TIMEOUT" ? yield n() : r;
          return f(a);
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      if (t.kind === "Rejected" && t.statusCode === d) return m;
      var n =
        t.kind === "Ok"
          ? o("WAWebHatchApprovalHistory").decodeHatchApprovalHistoryPage(
              t.value,
            )
          : null;
      return n == null
        ? (g(h(t)), null)
        : (n.unreadable > 0 &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval-history/dropped unreadable=",
                  " of=",
                  "",
                ])),
              n.unreadable,
              n.records.length + n.unreadable,
            ),
          n);
    }
    function g(e) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval-history/read-failed reason=",
              "",
            ])),
          e,
        )
        .sendLogs("hatch-approval-history-read-failed");
    }
    function h(e) {
      return (function (e) {
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
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "Unreadable") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "Ok")
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
    l.requestHatchApprovalHistoryPage = p;
  },
  98,
);
