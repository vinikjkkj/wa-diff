__d(
  "WAWebVoipWasmWorkerGlueResolver",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__waVoipPinnedWasmLoader",
      s = "__waVoipPinnedWasmBuildSha",
      u = "workerPolicy",
      c = 1e3,
      d = 2e3,
      m = 300;
    function p(e, t) {
      return r("err")(
        "voip: pinned worker glue load failed stage=" + e + ": " + t,
      );
    }
    function _(e) {
      var t,
        n =
          (t = e.match(
            /voip: pinned worker glue load failed stage=([a-z_]+)/,
          )) == null
            ? void 0
            : t[1];
      return n === "trusted_types_policy"
        ? "trusted_types_policy"
        : n === "import_scripts"
          ? "import_scripts"
          : n === "loader_missing"
            ? "loader_missing"
            : null;
    }
    function f(e) {
      return typeof e == "string" ? e : null;
    }
    function g(e) {
      return e instanceof Error ? e.name + ": " + e.message : String(e);
    }
    function h(t, n) {
      var r = t.trustedTypes,
        o = n;
      if (r != null)
        try {
          o = r
            .createPolicy(u, {
              createScriptURL: function (t) {
                return t;
              },
            })
            .createScriptURL(n);
        } catch (e) {
          throw p("trusted_types_policy", g(e));
        }
      try {
        t.importScripts(o);
      } catch (e) {
        throw p("import_scripts", g(e));
      }
      var a = Reflect.get(t, e);
      if (typeof a != "function")
        throw p("loader_missing", e + " is " + typeof a);
      return { buildSha: f(Reflect.get(t, s)), loader: a, source: "pinned" };
    }
    function y(e) {
      return {
        buildSha: f(Reflect.get(e, "BUILD_SHA")),
        loader: e,
        source: "haste",
      };
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            var a,
              i = L(t, n);
            if (i == null || r == null)
              return { bundledSkew: i, pinnedImport: null, resolved: t };
            o.onPinnedImportStart(i);
            var l = o.now(),
              s = 1,
              u = v(e, r, i.expectedBuildSha);
            return (
              u.isNetworkError &&
                o.now() - l < d &&
                (yield o.sleep(c), (s = 2), (u = v(e, r, i.expectedBuildSha))),
              {
                bundledSkew: i,
                pinnedImport: {
                  attempts: s,
                  durationMs: Math.round(o.now() - l),
                  failedStage: u.failedStage,
                  failureMessage: u.failureMessage,
                },
                resolved: (a = u.pinned) != null ? a : t,
              }
            );
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      var r;
      try {
        r = h(e, t);
      } catch (e) {
        var o,
          a = e instanceof Error ? e.message : String(e);
        return {
          failedStage: (o = _(a)) != null ? o : "unknown",
          failureMessage: a.slice(0, m),
          isNetworkError: a.includes("stage=import_scripts: NetworkError"),
          pinned: null,
        };
      }
      return L(r, n) != null
        ? {
            failedStage: "build_sha_mismatch",
            failureMessage: "pinned build=" + String(r.buildSha),
            isNetworkError: !1,
            pinned: null,
          }
        : {
            failedStage: null,
            failureMessage: null,
            isNetworkError: !1,
            pinned: r,
          };
    }
    function S(e) {
      var t = e.bundledSkew,
        n = e.pinnedImport;
      return t == null
        ? null
        : n == null
          ? babelHelpers.extends({}, t)
          : babelHelpers.extends({}, t, {
              pinnedImport: n.failedStage == null ? "loaded" : "failed",
              pinnedImportAttempts: n.attempts,
              pinnedImportFailedStage: n.failedStage,
              pinnedImportMs: n.durationMs,
            });
    }
    function R(e) {
      var t = e.bundledSkew,
        n = e.pinnedImport;
      if (t == null) return "";
      var r = " expected=" + t.expectedBuildSha + " (skew observed)";
      if (n == null) return r;
      var o =
          n.failedStage == null ? "loaded" : "failed stage=" + n.failedStage,
        a = n.failureMessage == null ? "" : " error=" + n.failureMessage;
      return (
        r +
        " bundled=" +
        String(t.actualBuildSha) +
        " pinned_import=" +
        o +
        " attempts=" +
        n.attempts +
        " ms=" +
        n.durationMs +
        a
      );
    }
    function L(e, t) {
      return t == null || e.buildSha == null || e.buildSha === t
        ? null
        : { actualBuildSha: e.buildSha, expectedBuildSha: t, source: e.source };
    }
    function E(e) {
      return e.source === "pinned";
    }
    ((l.PINNED_WORKER_GLUE_LOADER_GLOBAL = e),
      (l.PINNED_WORKER_GLUE_BUILD_SHA_GLOBAL = s),
      (l.getPinnedGlueLoadFailureStage = _),
      (l.importPinnedWorkerGlue = h),
      (l.resolveHasteWorkerGlue = y),
      (l.resolveWorkerGlueForLoad = C),
      (l.getWasmGlueBuildSkewReport = S),
      (l.describeWorkerGlueSkew = R),
      (l.detectWasmGlueBuildMismatch = L),
      (l.shouldRefuseWasmGlueBuildMismatch = E));
  },
  98,
);
