__d(
  "LSDatascriptEvaluator",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "LSDatascriptJSONEval",
    "LSFactory",
    "LSServerProgramHardening",
    "MWPBumpEntityKey",
    "cr:8018",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return r("FBLogger")(
          "messenger_web",
          "invalid_sync_script_target",
        ).mustfixThrow(
          'Received a sync script with an illegal target of "%s"',
          t != null ? t : -1,
        );
      };
    function u() {
      var e, t, n;
      return o("LSServerProgramHardening").isServerProgramHardeningEnabled()
        ? {
            keyReturningSprocs:
              (e = o("LSServerProgramHardening").getKeyReturningSprocsMode()) !=
              null
                ? e
                : void 0,
            protectedCalls: r("justknobx")._("8597") ? "enforce" : "log",
            restrictedOps:
              (t = o("LSServerProgramHardening").getRestrictedOpsMode()) != null
                ? t
                : void 0,
            restrictedTables: r("justknobx")._("8658") ? "enforce" : "log",
            secureKeyReturningSprocs:
              (n = o(
                "LSServerProgramHardening",
              ).getSecureKeyReturningSprocsMode()) != null
                ? n
                : void 0,
          }
        : {};
    }
    function c(t, o) {
      var a = JSON.parse(o),
        i = t != null ? t : { gk: {}, iggk: {}, justknob: {}, qe: {} };
      return function (t) {
        var o = n("cr:8018") != null ? new (n("cr:8018"))() : void 0,
          l =
            o == null
              ? void 0
              : o.start({
                  bool: {
                    isInWorker: (e || (e = r("ExecutionEnvironment")))
                      .isInWorker,
                  },
                  string: { dynamic: String(!0) },
                }),
          s = r("LSFactory")(t, { dynamic: !0, lsRuntimeLogger: o });
        return new (r("LSDatascriptJSONEval"))(a, s, i, [], u())
          .eval()
          .finally(function () {
            return (l == null || l.end(), Promise.resolve());
          });
      };
    }
    function d(e, t, n) {
      if (n == null) throw s(n);
      switch (n) {
        case 3:
          return c(e, t);
        default:
          throw s(n);
      }
    }
    function m(e) {
      return function (t) {
        if (t == null)
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Error creating eval function, db is undefined. This is likely a currying error in the definition for LSDatascriptEvaluator",
          );
        return function (n) {
          var a = n.experiments,
            l = n.priority,
            s = n.syncScript,
            u = n.target,
            c = n.taskNames,
            m = a != null ? JSON.parse(a) : null;
          try {
            var p = d(m, s, u);
            return t.runInTransaction(
              function (t) {
                return (e && e(), p(t));
              },
              "readwrite",
              l,
              { taskNames: c, type: "sync_script" },
              i.id + ":168",
            );
          } catch (e) {
            o("MWPBumpEntityKey").bumpEntityKeyWithAppId(
              "lsplatform",
              "eval_datascript_failure",
            );
            var _ = r("getErrorSafe")(e);
            throw (
              r("FBLogger")("messenger_web")
                .catching(_)
                .mustfix("Error executing sync script"),
              e
            );
          }
        };
      };
    }
    ((m.__debugModuleName = "LSDatascriptEvaluator"), (l.default = m));
  },
  98,
);
