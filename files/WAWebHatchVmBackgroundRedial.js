__d(
  "WAWebHatchVmBackgroundRedial",
  [
    "WALogger",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmRedialScheduler",
    "WAWebNetworkStatus",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = null;
    function d(e, t) {
      p().noteCycleEnd(e, t);
    }
    function m() {
      var e;
      (e = u) == null || e.stop();
    }
    function p() {
      return (
        u != null ||
          (u = o("WAWebHatchVmRedialScheduler").createHatchVmRedialScheduler({
            isAccountReady: function () {
              return (
                r("WAWebHatchLinkedStatusManager").isLinked() &&
                o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
              );
            },
            isEnabled: function () {
              return r("justknobx")._("8272");
            },
            isOnline: function () {
              return r("WAWebNetworkStatus").online;
            },
            isVisible: function () {
              return document.visibilityState === "visible";
            },
            onAttempt: h,
            onCheckFailed: g,
            onListeningChange: _,
          })),
        u
      );
    }
    function _(e) {
      e && c == null ? (c = f()) : !e && c != null && (c(), (c = null));
    }
    function f() {
      var e = function () {
          var e;
          return (e = u) == null ? void 0 : e.noteVisibilityChange();
        },
        t = function () {
          var e;
          return (e = u) == null ? void 0 : e.noteOnlineChange();
        };
      return (
        document.addEventListener("visibilitychange", e),
        r("WAWebNetworkStatus").on("change:online", t),
        function () {
          (document.removeEventListener("visibilitychange", e),
            r("WAWebNetworkStatus").off("change:online", t));
        }
      );
    }
    function g(t, n) {
      try {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: background redial check failed check=",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("hatch-vm-background-redial-check-failed");
      } catch (e) {}
    }
    function h(e, t, n) {
      try {
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-vm: background redial result=",
                " n=",
                " trigger=",
                "",
              ])),
            e,
            t,
            n,
          )
          .sendLogs("hatch-vm-background-redial");
      } catch (e) {}
    }
    ((l.noteHatchVmCycleEnd = d), (l.stopHatchVmBackgroundRedial = m));
  },
  98,
);
