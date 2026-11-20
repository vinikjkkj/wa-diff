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
      c = ["agent.status", "identity.updated", "hitl.snapshot"],
      d = 3e5,
      m = { kind: "idle" },
      p = m,
      _ = !1;
    function f(e) {
      if (e != null && typeof e == "object") {
        var t = e.accepted;
        if (Array.isArray(t)) return t;
      }
      return [];
    }
    function g() {
      if (h(Date.now())) {
        var t = { kind: "in_flight", channelFbid: C() };
        ((p = t),
          o("WAWebSendHatchMetadataRequest")
            .sendHatchMetadataRequest({
              method: "channel.bootstrap",
              sections: c,
            })
            .then(function (e) {
              var n = b(e);
              (y(t, n.kind === "acked"), n.kind !== "acked" && v(n));
            })
            .catch(function (n) {
              (y(t, !1),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-metadata: channel.bootstrap failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("hatch-bootstrap-error"));
            }));
      }
    }
    function h(e) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "idle"
        )
          return !0;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "in_flight" &&
          "channelFbid" in t
        ) {
          var n = t.channelFbid;
          return n !== C();
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "acked" &&
          "ackedAtMs" in t &&
          "channelFbid" in t
        ) {
          var r = t.ackedAtMs,
            o = t.channelFbid;
          return e - r > d || o !== C();
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(p);
    }
    function y(e, t) {
      p === e &&
        (p = t
          ? { kind: "acked", ackedAtMs: Date.now(), channelFbid: e.channelFbid }
          : m);
    }
    function C() {
      var e;
      return (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
        ? void 0
        : e.channelFbid;
    }
    function b(e) {
      if (e.outcome !== "response" || e.response.status !== "ok")
        return { kind: "not_acked", outcome: e.outcome };
      var t = f(e.response.body),
        n = c.filter(function (e) {
          return !t.includes(e);
        });
      return n.length > 0
        ? { kind: "missing_sections", missing: n }
        : { kind: "acked" };
    }
    function v(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "not_acked" &&
          "outcome" in t
        ) {
          var n = t.outcome;
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-metadata: channel.bootstrap not acked outcome=",
                  "",
                ])),
              n,
            )
            .sendLogs("hatch-bootstrap-not-acked");
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "missing_sections" &&
          "missing" in t
        ) {
          var r = t.missing;
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-metadata: channel.bootstrap missing sections ",
                  "",
                ])),
              r.join(", "),
            )
            .sendLogs("hatch-bootstrap-missing-sections");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function S() {
      _ ||
        ((_ = !0),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(R));
    }
    function R() {
      r("WAWebHatchLinkedStatusManager").isLinked() || (p = m);
    }
    function L() {
      if ((S(), r("WAWebHatchLinkedStatusManager").isLinked()))
        return (g(), r("WAWebNoop"));
      var e = r("WAWebNoop");
      return (
        (e = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function () {
            r("WAWebHatchLinkedStatusManager").isLinked() && (e(), g());
          },
        )),
        function () {
          e();
        }
      );
    }
    function E() {
      (S(), (p = m));
    }
    ((l.bootstrapHatchWhenLinked = L),
      (l.resetHatchChannelBootstrapForTests = E));
  },
  98,
);
