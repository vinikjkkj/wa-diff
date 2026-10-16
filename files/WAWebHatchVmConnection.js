__d(
  "WAWebHatchVmConnection",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmCredentials",
    "WAWebHatchVmSession",
    "WAWebL10N",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = new Map(),
      m = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      p = null,
      _ = 0,
      f = 0,
      g = !1,
      h = !1,
      y = new Set();
    function C() {
      I();
      var e = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (e != null) return (c || (c = n("Promise"))).resolve(e);
      if (p == null) {
        var t = b().finally(function () {
          p === t && (p = null);
        });
        p = t;
      }
      return p;
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = _;
          f = e;
          var t = yield S(e);
          return _ !== e ? (f === e && M(), null) : t;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (t.kind !== "ok") return k(e, "credentials", t.detail);
          try {
            var n = yield L(t.credentials);
            if (n != null) return k(e, "channel", n);
          } catch (t) {
            return k(e, "threw", t);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("WAWebL10N").getFullLocale(),
            n = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
              acceptLanguage: t,
              credentials: e,
              trustedFingerprint: d.get(e.vmId),
            });
          if (n.kind !== "NeedsTrust")
            return n.kind === "Ready" ? null : n.detail;
          var a = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            acceptLanguage: t,
            credentials: e,
            trustedFingerprint: n.fingerprint,
          });
          return (
            a.kind === "Ready" && d.set(e.vmId, n.fingerprint),
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
            })(a)
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(t, n, r) {
      return (
        _ === t &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-vm: connect failed reason=",
                  "",
                ])),
              n,
            )
            .sendLogs("hatch-vm-connect-failed"),
        null
      );
    }
    function I() {
      h ||
        ((h = !0),
        (g = N() !== m.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = N();
          if (e !== m.Unknown) {
            var t = g;
            if (((g = e === m.Linked), t && !g)) {
              (_++,
                M(),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(y)) x(n);
            }
          }
        }));
    }
    function T() {
      return (I(), _);
    }
    function D(e) {
      return (
        I(),
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function x(e) {
      try {
        e();
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: an account change listener failed name=",
                "",
              ])),
            P(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var $ = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function P(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && $.has(t) ? t : "Error";
    }
    function N() {
      return (function (e) {
        if (e === "linked") return m.Linked;
        if (e === "unlinked") return m.Unlinked;
        if (e == null) return m.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function M() {
      ((p = null),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect(),
        d.clear());
    }
    ((l.connectHatchVmApi = C),
      (l.getHatchVmAccountGeneration = T),
      (l.subscribeToHatchVmAccountChange = D));
  },
  98,
);
