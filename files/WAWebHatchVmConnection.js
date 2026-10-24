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
      D();
      var e = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      return e != null ? (c || (c = n("Promise"))).resolve(e) : v().api;
    }
    function b() {
      var e = C(),
        t = p;
      return e.then(function (e) {
        var n;
        return e != null
          ? { kind: "ready", api: e }
          : {
              kind: "failed",
              failure:
                (n = t == null ? void 0 : t.failure.current) != null
                  ? n
                  : "no_api",
            };
      });
    }
    function v() {
      if (p == null) {
        var e = { current: null },
          t = S(e).finally(function () {
            var e;
            ((e = p) == null ? void 0 : e.api) === t && (p = null);
          });
        p = { api: t, failure: e };
      }
      return p;
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = _;
          f = t;
          var n = yield L(t, e);
          return _ !== t
            ? (f === t && A(), (e.current = "stale_generation"), null)
            : (n == null && e.current == null && (e.current = "no_api"), n);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (n.kind !== "ok")
            return ((t.current = "credentials"), T(e, "credentials", n.detail));
          try {
            var r = yield k(n.credentials);
            if (r != null) return ((t.current = "channel"), T(e, "channel", r));
          } catch (n) {
            return ((t.current = "threw"), T(e, "threw", n));
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        I.apply(this, arguments)
      );
    }
    function T(t, n, r) {
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
    function D() {
      h ||
        ((h = !0),
        (g = w() !== m.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = w();
          if (e !== m.Unknown) {
            var t = g;
            if (((g = e === m.Linked), t && !g)) {
              (_++,
                A(),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                ));
              for (var n of Array.from(y)) P(n);
            }
          }
        }));
    }
    function x() {
      return (D(), _);
    }
    function $(e) {
      return (
        D(),
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function P(e) {
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
            M(e),
          )
          .sendLogs("hatch-vm-account-listener-failed");
      }
    }
    var N = new Set([
      "AggregateError",
      "Error",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ]);
    function M(e) {
      if (!(e instanceof Error)) return typeof e;
      var t;
      try {
        t = e.name;
      } catch (e) {
        return "Error";
      }
      return typeof t == "string" && N.has(t) ? t : "Error";
    }
    function w() {
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
    function A() {
      ((p = null),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect(),
        d.clear());
    }
    ((l.connectHatchVmApi = C),
      (l.connectHatchVmApiWithResult = b),
      (l.getHatchVmAccountGeneration = x),
      (l.subscribeToHatchVmAccountChange = $));
  },
  98,
);
