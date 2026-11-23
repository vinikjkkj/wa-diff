__d(
  "KeyTransparencyBridgeHandlers",
  [
    "KeyTransparencyKt10Verification",
    "KeyTransparencyKt11Verification",
    "LFUCache",
    "MAWCurrentUser",
    "MWFBLogger",
    "WAJids",
    "WATimeUtils",
    "WMIQplFlow",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 12e4,
      d = 60,
      m;
    function p() {
      return (m || (m = new (r("LFUCache"))(d)), m);
    }
    function _() {
      return o("WMIQplFlow").startQplFlow(r("qpl")._(521483004, "3287"), {
        timeoutInMs: c,
      });
    }
    function f(e, t, n, r) {
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
    async function g(t, n) {
      o("MWFBLogger")
        .MWLogger()
        .tags(["KeyTransparency"])
        .DEBUG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "runKeyVerification invoked",
            ])),
        );
      var a = n == null ? _() : n;
      (a.addPoint("run_key_verification"), p().delete(t));
      var i = o("MAWCurrentUser").getID(),
        l = o("WAJids").userIdFromJid(t);
      try {
        var u = await Promise.all([
            o("KeyTransparencyKt11Verification").runKT11Verification(i, l, a),
            o("KeyTransparencyKt10Verification").runKT10Verification(i, l, a),
          ]),
          c = u[0],
          d = u[1],
          m = await f(d.self, c.self, d.target, c.target);
        return (
          m.status === "success"
            ? (p().set(t, m), a.endSuccess())
            : m.status === "pending"
              ? a.endSuccess({ bool: { is_pending: !0 } })
              : a.endFail("verification_fail_result"),
          m
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
          a.endFail("uncaught_error", {
            string: {
              errorName: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
            },
          }),
          { status: "failed", timestamp: o("WATimeUtils").millisTime() }
        );
      }
    }
    async function h(e) {
      o("MWFBLogger")
        .MWLogger()
        .tags(["KeyTransparency"])
        .DEBUG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "getKeyVerificationStatus invoked",
            ])),
        );
      var t = _();
      t.addPoint("get_key_verification_status");
      var n = p().get(e, null);
      return n != null
        ? (t.addPoint("cache_hit"), t.endSuccess(), n)
        : (t.addPoint("cache_miss"), await g(e, t));
    }
    var y = {
      keyVerificationStatus: function (t) {
        return h(t.userJid);
      },
      runKeyVerification: function (t) {
        return g(t.userJid);
      },
    };
    l.keyTransparencyBridgeHandlers = y;
  },
  98,
);
