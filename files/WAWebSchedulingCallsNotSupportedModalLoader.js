__d(
  "WAWebSchedulingCallsNotSupportedModalLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebSchedulingCallsNotSupportedModal.react",
      ).__setRef("WAWebSchedulingCallsNotSupportedModalLoader");
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield s.load(),
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
        })),
        c.apply(this, arguments)
      );
    }
    l.loadAndOpenSchedulingCallsNotSupportedModal = u;
  },
  98,
);
