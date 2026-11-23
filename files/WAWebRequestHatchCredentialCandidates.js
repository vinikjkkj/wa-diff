__d(
  "WAWebRequestHatchCredentialCandidates",
  [
    "WALogger",
    "WAWebHatchCredentialCandidates",
    "WAWebHatchVmConnection",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4,
      u = 404;
    async function c(e) {
      var t = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (t == null) return (p("session"), null);
      var n = function () {
          return t.approvalDetail(e, { timeoutMs: s });
        },
        r = await n(),
        a =
          r.kind === "Failure" && r.reason != null && r.reason !== "TIMEOUT"
            ? await n()
            : r;
      return d(a);
    }
    function d(e) {
      if (e.kind === "Rejected" && e.statusCode === u) return null;
      var t =
        e.kind === "Ok"
          ? o("WAWebHatchCredentialCandidates").decodeHatchCredentialCandidates(
              e.value,
            )
          : null;
      return (t == null && p(m(e)), t);
    }
    function m(e) {
      return e.kind === "Ok"
        ? "ok.no_choice"
        : e.kind === "Rejected"
          ? e.statusCode != null
            ? "http." + e.statusCode
            : "rejected.no_status"
          : e.kind;
    }
    function p(t) {
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
