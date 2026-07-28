__d(
  "WAWebHatchChannelBootstrap",
  [
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebNoop",
    "WAWebSendHatchMetadataRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = ["agent.status", "identity.updated", "hitl.snapshot"];
    function d(e) {
      if (e != null && typeof e == "object") {
        var t = e.accepted;
        if (Array.isArray(t)) return t;
      }
      return [];
    }
    function m() {
      o("WAWebSendHatchMetadataRequest")
        .sendHatchMetadataRequest({ method: "channel.bootstrap", sections: c })
        .then(function (t) {
          if (t.outcome !== "response" || t.response.status !== "ok") {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: channel.bootstrap not acked outcome=",
                    "",
                  ])),
                t.outcome,
              )
              .sendLogs("hatch-bootstrap-not-acked");
            return;
          }
          var n = d(t.response.body),
            r = c.filter(function (e) {
              return !n.includes(e);
            });
          r.length > 0 &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: channel.bootstrap missing sections ",
                    "",
                  ])),
                r.join(", "),
              )
              .sendLogs("hatch-bootstrap-missing-sections");
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-metadata: channel.bootstrap failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-bootstrap-error");
        });
    }
    function p() {
      if (
        r("WAWebHatchLinkedStatusManager").getLinkedStatus() != null &&
        r("WAWebHatchLinkedStatusManager").isLinked()
      )
        return (m(), r("WAWebNoop"));
      var e = r("WAWebNoop");
      return (
        (e = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function () {
            r("WAWebHatchLinkedStatusManager").isLinked() && (e(), m());
          },
        )),
        function () {
          e();
        }
      );
    }
    ((l.sendHatchChannelBootstrap = m), (l.bootstrapHatchWhenLinked = p));
  },
  98,
);
