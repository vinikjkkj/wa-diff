__d(
  "WABackendHandleError",
  ["Promise", "WADeprecatedWapParser", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = { SMAX_INVALID: 479 },
      d = new (r("WADeprecatedWapParser"))("errorParser", function (e) {
        e.assertTag("error");
        var t = e.attrInt("code");
        switch (t) {
          case c.SMAX_INVALID:
            return p();
          default:
            return _(t);
        }
      });
    function m(e) {
      return (d.parse(e), (u || (u = n("Promise"))).resolve("NO_ACK"));
    }
    function p() {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Invalid stanza sent (smax-invalid)",
            ])),
        )
        .sendLogs("smax-invalid");
    }
    function _(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Unknown error code: ",
              "",
            ])),
          e,
        )
        .sendLogs("unknown-error-code");
    }
    l.handleError = m;
  },
  98,
);
