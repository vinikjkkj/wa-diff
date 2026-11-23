__d(
  "MAIBAPromptReliabilityCounters",
  ["CurrentUser", "ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === "BSH"
        ? "BSH"
        : e === "BHC"
          ? "BHC"
          : e === "MBS"
            ? "MBS"
            : e === "BILLING_DESKTOP"
              ? "BILLING_DESKTOP"
              : null;
    }
    function u(e) {
      return e === "bhc_chat"
        ? "bhc_chat"
        : e === "bhc_widget"
          ? "bhc_widget"
          : e === "billing_chat"
            ? "billing_chat"
            : e === "bsh_chat"
              ? "bsh_chat"
              : e === "bsh_widget"
                ? "bsh_widget"
                : e === "mbs_chat"
                  ? "mbs_chat"
                  : "unknown";
    }
    function c(e) {
      return e === "control"
        ? "control"
        : e === "not_applicable"
          ? "not_applicable"
          : e === "treatment"
            ? "treatment"
            : "unknown";
    }
    function d(e) {
      return e === "correct"
        ? "correct"
        : e === "capped"
          ? "capped"
          : e === "valid_empty"
            ? "valid_empty"
            : e === "failed"
              ? "failed"
              : e === "mismatch"
                ? "mismatch"
                : e === "recovered"
                  ? "recovered"
                  : e === "incomplete"
                    ? "incomplete"
                    : null;
    }
    function m(t, n) {
      var a =
        r("CurrentUser").isEmployee() ||
        r("CurrentUser").isAccountEmployee() ||
        r("CurrentUser").isTestUser();
      (e || (e = o("ODS"))).bumpEntityKey(
        68,
        a ? "maiba_prompt_reliability_internal" : "maiba_prompt_reliability",
        t,
        n,
      );
    }
    function p(e, t, n, r) {
      try {
        var o = d(n);
        if (o == null) return;
        m(
          "v2." +
            e +
            "." +
            t +
            "." +
            u(r.entrypoint) +
            "." +
            c(r.arm) +
            ".attempts_" +
            o,
          1,
        );
      } catch (e) {}
    }
    function _(e, t, n, r) {
      r === void 0 && (r = 1);
      try {
        if (!Number.isSafeInteger(r) || r <= 0) return;
        m("v1." + e + "." + t + "." + n, r);
      } catch (e) {}
    }
    function f() {
      try {
        (e || (e = o("ODS"))).flush("critical");
      } catch (e) {}
    }
    ((l.getMAIBAPromptReliabilitySurface = s),
      (l.bumpMAIBAPromptAttemptOutcome = p),
      (l.bumpMAIBAPromptReliabilityCounter = _),
      (l.flushMAIBAPromptReliabilityCounters = f));
  },
  98,
);
