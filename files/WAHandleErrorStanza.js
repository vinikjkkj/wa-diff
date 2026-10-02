__d(
  "WAHandleErrorStanza",
  ["Promise", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = function (r) {
        var t = r.code;
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Unknown error code: ",
                  "",
                ])),
              t,
            )
            .sendLogs("unknown-error-code"),
          (u || (u = n("Promise"))).resolve("NO_ACK")
        );
      },
      d = function () {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid stanza sent (smax-invalid)",
                ])),
            )
            .sendLogs("smax-invalid"),
          (u || (u = n("Promise"))).resolve("NO_ACK")
        );
      };
    ((l.handleErrorStanza = c), (l.handleSmaxErrorStanza = d));
  },
  98,
);
