__d(
  "WAWebHatchVmConnection",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmCredentials",
    "WAWebHatchVmSession",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Map(),
      d = n("$InternalEnum").Mirrored(["Linked", "Unlinked", "Unknown"]),
      m = null,
      p = 0,
      _ = 0,
      f = !1,
      g = !1;
    function h() {
      E();
      var e = o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
      if (e != null) return (u || (u = n("Promise"))).resolve(e);
      if (m == null) {
        var t = y().finally(function () {
          m === t && (m = null);
        });
        m = t;
      }
      return m;
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = p;
          _ = e;
          var t = yield b(e);
          return p !== e ? (_ === e && I(), null) : t;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (t.kind !== "ok") return L(e, "credentials", t.detail);
          try {
            var n = yield S(t.credentials);
            if (n != null) return L(e, "channel", n);
          } catch (t) {
            return L(e, "threw", t);
          }
          return o("WAWebHatchVmSession").waWebHatchVmSession.connectedApi();
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
          var t = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            credentials: e,
            trustedFingerprint: c.get(e.vmId),
          });
          if (t.kind !== "NeedsTrust")
            return t.kind === "Ready" ? null : t.detail;
          var n = yield o("WAWebHatchVmSession").waWebHatchVmSession.connect({
            credentials: e,
            trustedFingerprint: t.fingerprint,
          });
          return (
            n.kind === "Ready" && c.set(e.vmId, t.fingerprint),
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
        R.apply(this, arguments)
      );
    }
    function L(t, n, r) {
      return (
        p === t &&
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
    function E() {
      g ||
        ((g = !0),
        (f = k() !== d.Unlinked),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(function () {
          var e = k();
          if (e !== d.Unknown) {
            var t = f;
            ((f = e === d.Linked),
              t &&
                !f &&
                (p++,
                I(),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-vm: cleared on unlink",
                    ])),
                )));
          }
        }));
    }
    function k() {
      return (function (e) {
        if (e === "linked") return d.Linked;
        if (e === "unlinked") return d.Unlinked;
        if (e == null) return d.Unknown;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        r("WAWebHatchLinkedStatusManager").getLastConfirmedLinkedStatusState(),
      );
    }
    function I() {
      ((m = null),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.invalidate(),
        o("WAWebHatchVmSession").waWebHatchVmSession.disconnect(),
        c.clear());
    }
    l.connectHatchVmApi = h;
  },
  98,
);
