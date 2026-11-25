__d(
  "WarningFilter",
  ["CoreWarningGK"],
  function (t, n, r, o, a, i, l) {
    var e = 35,
      s = d,
      u = function () {
        return {};
      },
      c = function (t) {
        t();
      };
    function d(t) {
      return {
        finalFormat: t,
        forceDialogImmediately: !1,
        monitorEvent: null,
        monitorListVersion: e,
        monitorSampleRate: 1,
        suppressCompletely: !1,
        suppressDialog_LEGACY: !0,
        isMissing: !1,
        shouldFailJestE2E: !1,
      };
    }
    i.exports = {
      prepareWarning: s,
      getReactWarnings: u,
      withSuppressedWarningsForReactLayeredComponentMixin_DO_NOT_USE: c,
    };
  },
  34,
);
