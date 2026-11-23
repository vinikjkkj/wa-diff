__d(
  "MAIBAWorkspaceCanvasTimeoutDiagnostics",
  ["Bootloader", "BootloaderEvents", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = {
        pageBootloadErrors: String(r("Bootloader").getErrorCount()),
        pageOnline: String(navigator.onLine),
        pageVisibility: String(document.visibilityState),
      };
      if (e == null)
        return babelHelpers.extends({}, t, { timeoutStage: "no_entry_point" });
      var n = e.getRootModuleStatus == null ? void 0 : e.getRootModuleStatus();
      return n == null
        ? babelHelpers.extends({}, t, { timeoutStage: "root_module_unknown" })
        : n.isLoaded
          ? babelHelpers.extends({}, t, { timeoutStage: "root_module_loaded" })
          : babelHelpers.extends({}, u(n.moduleID), t, {
              timeoutStage: "root_module_pending",
            });
    }
    function u(t) {
      var n = r("Bootloader").getBootloadedComponents().get(t);
      if (n == null) return { rootBootload: "not_started" };
      var a = new Set(),
        i = 0,
        l = 0,
        s = 0,
        u = 0,
        c = 0,
        d = !1;
      for (var m of o("BootloaderEvents").getActiveBootloads())
        if (m.components.includes(t)) {
          d = !0;
          for (var p of o("BootloaderEvents").flattenResourceMapSet(
            m.tierOne,
          )) {
            var _ = p[0],
              f = p[1];
            if (!a.has(_)) {
              a.add(_);
              var g = r("Bootloader").getResourceState(_),
                h = g.loadEnd,
                y = g.loadError,
                C = y != null,
                b = !C && h == null;
              f.type === "async"
                ? (s += b ? 1 : 0)
                : f.type === "css"
                  ? ((i += C ? 1 : 0), (l += b ? 1 : 0))
                  : ((u += C ? 1 : 0), (c += b ? 1 : 0));
            }
          }
        }
      return {
        cssFailed: String(i),
        cssPending: String(l),
        endpointPending: String(s),
        jsFailed: String(u),
        jsPending: String(c),
        rootBootload: d ? "active" : "inactive",
        rootBootloadAgeMs: String(
          Math.round((e || (e = r("performanceAbsoluteNow")))() - n),
        ),
      };
    }
    l.getMAIBAWorkspaceCanvasTimeoutDiagnostics = s;
  },
  98,
);
