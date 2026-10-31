__d(
  "WAWebHatchCvmPinLogging",
  [
    "HatchOnboardingFalcoEvent",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "muse_chat_thread",
      s = "cvm";
    function u(e) {
      f("cvm_pin_prompt_impression", e);
    }
    function c() {
      f("cvm_pin_submit");
    }
    function d(e) {
      f("cvm_pin_result", e);
    }
    function m(e) {
      f("cvm_pin_result", "failed:" + g(e));
    }
    function p() {
      f("cvm_pin_help_tap");
    }
    function _(e) {
      f("cvm_pin_sheet_closed", e);
    }
    function f(t, n) {
      var o = r("WAWebFalcoCanonicalMdId")();
      r("HatchOnboardingFalcoEvent").log(function () {
        return {
          action_type: t,
          app_version: r("WAWebFalcoCanonicalAppVersion")(),
          entry_point: e,
          md_id: o != null ? String(o) : null,
          meta_data: n,
          vm_type: s,
        };
      });
    }
    function g(e) {
      return e === "abra_token"
        ? "abra_mint"
        : e === "malformed_secret"
          ? "vesta_malformed"
          : e === "storage"
            ? "key_store_failed"
            : e;
    }
    ((l.logHatchCvmPinPromptShown = u),
      (l.logHatchCvmPinSubmitted = c),
      (l.logHatchCvmPinOutcome = d),
      (l.logHatchCvmPinFailed = m),
      (l.logHatchCvmPinHelpTapped = p),
      (l.logHatchCvmPinClosed = _));
  },
  98,
);
