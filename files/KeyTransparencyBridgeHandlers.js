__d(
  "KeyTransparencyBridgeHandlers",
  [
    "KeyTransparencyKt10Verification",
    "KeyTransparencyKt11Verification",
    "LFUCache",
    "MAWCurrentUser",
    "MWFBLogger",
    "Promise",
    "WAJids",
    "WATimeUtils",
    "WMIQplFlow",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 12e4,
      m = 60,
      p;
    function _() {
      return (p || (p = new (r("LFUCache"))(m)), p);
    }
    function f() {
      return o("WMIQplFlow").startQplFlow(r("qpl")._(521483004, "3287"), {
        timeoutInMs: d,
      });
    }
    function g(e, t, n, r) {
      var a = [e, t, n, r];
      return a.some(function (e) {
        return e === "failed";
      })
        ? { status: "failed", timestamp: o("WATimeUtils").millisTime() }
        : a.some(function (e) {
              return e === "pending";
            })
          ? { status: "pending", timestamp: o("WATimeUtils").millisTime() }
          : { status: "success", timestamp: o("WATimeUtils").millisTime() };
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "runKeyVerification invoked",
                ])),
            );
          var i = a == null ? f() : a;
          (i.addPoint("run_key_verification"), _().delete(t));
          var l = o("MAWCurrentUser").getID(),
            u = o("WAJids").userIdFromJid(t);
          try {
            var d = yield (c || (c = n("Promise"))).all([
                o("KeyTransparencyKt11Verification").runKT11Verification(
                  l,
                  u,
                  i,
                ),
                o("KeyTransparencyKt10Verification").runKT10Verification(
                  l,
                  u,
                  i,
                ),
              ]),
              m = d[0],
              p = d[1],
              h = yield g(p.self, m.self, p.target, m.target);
            return (
              h.status === "success"
                ? (_().set(t, h), i.endSuccess())
                : h.status === "pending"
                  ? i.endSuccess({ bool: { is_pending: !0 } })
                  : i.endFail("verification_fail_result"),
              h
            );
          } catch (e) {
            return (
              o("MWFBLogger")
                .MWLogger()
                .tags(["KeyTransparency"])
                .catching(r("getErrorSafe")(e))
                .MUSTFIX(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "runKeyVerification failed",
                    ])),
                ),
              i.endFail("uncaught_error", {
                string: {
                  errorName: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(
                    e,
                  ),
                },
              }),
              { status: "failed", timestamp: o("WATimeUtils").millisTime() }
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("MWFBLogger")
            .MWLogger()
            .tags(["KeyTransparency"])
            .DEBUG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getKeyVerificationStatus invoked",
                ])),
            );
          var t = f();
          t.addPoint("get_key_verification_status");
          var n = _().get(e, null);
          return n != null
            ? (t.addPoint("cache_hit"), t.endSuccess(), n)
            : (t.addPoint("cache_miss"), yield h(e, t));
        })),
        b.apply(this, arguments)
      );
    }
    var v = {
      keyVerificationStatus: function (t) {
        return C(t.userJid);
      },
      runKeyVerification: function (t) {
        return h(t.userJid);
      },
    };
    l.keyTransparencyBridgeHandlers = v;
  },
  98,
);
