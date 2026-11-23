__d(
  "WAWebSchedulingCallsNotSupportedModalLoader",
  ["JSResourceForInteraction", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebSchedulingCallsNotSupportedModal.react",
      ).__setRef("WAWebSchedulingCallsNotSupportedModalLoader");
    async function u() {
      try {
        var t = await s.load(),
          n = t.openSchedulingCallsNotSupportedModal;
        n();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled-call] not-supported notice failed to load",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("scheduling-calls-not-supported-modal-load-failed");
      }
    }
    l.loadAndOpenSchedulingCallsNotSupportedModal = u;
  },
  98,
);
