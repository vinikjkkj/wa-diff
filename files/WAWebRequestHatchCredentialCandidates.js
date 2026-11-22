__d(
  "WAWebRequestHatchCredentialCandidates",
  [
    "WALogger",
    "WAWebHatchCredentialCandidates",
    "WAWebHatchVmConnection",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 404;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (t == null) return (_("session"), null);
          var n = function () {
              return t.approvalDetail(e, { timeoutMs: s });
            },
            r = yield n(),
            a =
              r.kind === "Failure" && r.reason != null && r.reason !== "TIMEOUT"
                ? yield n()
                : r;
          return m(a);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (e.kind === "Rejected" && e.statusCode === u) return null;
      var t =
        e.kind === "Ok"
          ? o("WAWebHatchCredentialCandidates").decodeHatchCredentialCandidates(
              e.value,
            )
          : null;
      return (t == null && _(p(e)), t);
    }
    function p(e) {
      return e.kind === "Ok"
        ? "ok.no_choice"
        : e.kind === "Rejected"
          ? e.statusCode != null
            ? "http." + e.statusCode
            : "rejected.no_status"
          : e.kind;
    }
    function _(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-credential-candidates/read-failed reason=",
              "",
            ])),
          t,
        )
        .sendLogs("hatch-credential-candidates-read-failed");
    }
    l.requestHatchCredentialCandidates = c;
  },
  98,
);
