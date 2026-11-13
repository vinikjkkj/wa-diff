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
      g("cvm_pin_prompt_impression", e);
    }
    function c() {
      g("cvm_pin_submit");
    }
    function d(e, t) {
      g("cvm_pin_result", t != null ? e + "(" + t + ")" : e);
    }
    function m(e) {
      g("cvm_pin_result", e != null ? "wrong_pin:" + e : "wrong_pin");
    }
    function p(e) {
      g("cvm_pin_result", "failed:" + h(e));
    }
    function _() {
      g("cvm_pin_help_tap");
    }
    function f(e) {
      g("cvm_pin_sheet_closed", e);
    }
    function g(t, n) {
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
    function h(e) {
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
      (l.logHatchCvmPinWrong = m),
      (l.logHatchCvmPinFailed = p),
      (l.logHatchCvmPinHelpTapped = _),
      (l.logHatchCvmPinClosed = f));
  },
  98,
);
