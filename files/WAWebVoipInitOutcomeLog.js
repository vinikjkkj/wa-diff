__d(
  "WAWebVoipInitOutcomeLog",
  ["WALogger", "WAWebRuntimeEnvironmentUtils", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [
        ["timeout waiting for RPC ready", "worker_rpc_ready"],
        ["[RPC] timeout for voipInit", "voip_init_rpc"],
        ["[RPC] timeout for setHideMyIp", "sethidemyip_rpc"],
        ["stack interface load timed out", "stack_interface_load"],
        ["Unknown file path", "bx"],
        ["WASM module failed to load", "wasm_load"],
        ["Out of memory", "wasm_load"],
        ["WebAssembly", "wasm_load"],
      ],
      d = null,
      m = !1,
      p = !1;
    function _(t) {
      d != null ||
        o("WAWebRuntimeEnvironmentUtils").isWorker() ||
        o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling() ||
        ((d = self.performance.now()),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: first init attempt on this page trigger=",
                "",
              ])),
            t,
          )
          .tags("non-sad", "trigger:" + t)
          .sendLogs("voip-init-attempt", {
            sampling: 0,
            sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
          }));
    }
    function f(e) {
      if (!(m || o("WAWebRuntimeEnvironmentUtils").isWorker())) {
        m = !0;
        var t = d,
          n = t == null ? "unknown" : b(self.performance.now() - t);
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: VoIP ready on this page boot=",
                " dur=",
                "",
              ])),
            e,
            n,
          )
          .tags("non-sad", "boot:" + e, "dur:" + n)
          .sendLogs("voip-init-ready", {
            sampling: 0,
            sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
          });
      }
    }
    function g(e) {
      if (!(p || o("WAWebRuntimeEnvironmentUtils").isWorker())) {
        p = !0;
        var t = h(e);
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: VoIP init failed with no retry left phase=",
                "",
              ])),
            t,
          )
          .tags("non-sad", "phase:" + t)
          .sendLogs("voip-init-dead", {
            sampling: 0,
            sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT,
          });
      }
    }
    function h(e) {
      var t,
        n = e instanceof Error ? e.name + ": " + e.message : String(e);
      if (n.includes("Bootloading module")) return C(y(e));
      var r = c.find(function (e) {
        var t = e[0];
        return n.includes(t);
      });
      return (t = r == null ? void 0 : r[1]) != null ? t : "other";
    }
    function y(e) {
      var t,
        n = e instanceof Error ? Reflect.get(e, "messageParams") : null;
      return Array.isArray(n) ? String((t = n[0]) != null ? t : "") : "";
    }
    function C(e) {
      return e === ""
        ? "other"
        : e.includes("StackInterface")
          ? "chunk_stack_interface"
          : e.includes("WebWasm")
            ? "chunk_wasm_loader"
            : "chunk_backend";
    }
    function b(e) {
      return e < 5e3
        ? "lt_5s"
        : e < 3e4
          ? "5s_30s"
          : e < 9e4
            ? "30s_90s"
            : e < 10 * 6e4
              ? "90s_10m"
              : "ge_10m";
    }
    ((l.logVoipInitAttemptOnce = _),
      (l.logVoipInitReadyOnce = f),
      (l.logVoipInitDeadOnce = g));
  },
  98,
);
