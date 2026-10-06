__d(
  "WAWebHatchVmConnection",
  [
    "Promise",
    "WALogger",
    "WAWebHatchVmCredentials",
    "WAWebHatchVmSession",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map(),
      c = null;
    function d() {
      var e = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return e != null
        ? (s || (s = n("Promise"))).resolve(e)
        : (c == null &&
            (c = m().finally(function () {
              c = null;
            })),
          c);
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (e.kind !== "ok") return g("credentials", e.detail);
          try {
            var t = yield _(e.credentials);
            if (t != null) return g("channel", t);
          } catch (e) {
            return g("threw", e);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            credentials: e,
            trustedFingerprint: u.get(e.vmId),
          });
          if (t.kind !== "NeedsTrust")
            return t.kind === "Ready" ? null : t.detail;
          var n = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            credentials: e,
            trustedFingerprint: t.fingerprint,
          });
          return (
            n.kind === "Ready" && u.set(e.vmId, t.fingerprint),
            (function (e) {
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "Ready"
              )
                return null;
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "Failure" &&
                "detail" in e
              ) {
                var t = e.detail;
                return t;
              }
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "NeedsTrust"
              )
                return "Peer asked for trust after pinning";
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(n)
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: connect failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-vm-connect-failed"),
        null
      );
    }
    l.connectHatchVmApi = d;
  },
  98,
);
