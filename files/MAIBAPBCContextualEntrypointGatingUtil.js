__d(
  "MAIBAPBCContextualEntrypointGatingUtil",
  ["errorCode", "AdsAIUtils", "justknobx", "qex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Map([
      [2446880, "amd_pbc_whatsapp_disconnected_entrypoint"],
      [1443121, "amd_pbc_missing_page_entrypoint"],
      [2061006, "amd_pbc_invalid_link_entrypoint"],
    ]);
    function u(t) {
      var n,
        r = typeof t == "string" ? Number(t) : t;
      return typeof r == "number" && (n = e.get(r)) != null ? n : null;
    }
    var c =
      "I want Meta support to fix this for me. Transfer me to support as your first step, and do not diagnose the error or list fix steps yourself.";
    function d(e, t, n, r) {
      return (
        "I am observing the following error on my ad.\nAd Account ID: " +
        (e != null ? e : "") +
        "\nAd ID: " +
        (t != null ? t : "") +
        "\nError Code: " +
        String(n) +
        "\nError Message: " +
        r +
        "\n\n" +
        c
      );
    }
    function m(e) {
      var t = u(e);
      return t != null && r("justknobx")._("8348") ? t : null;
    }
    function p(e) {
      return u(e) != null;
    }
    function _() {
      return r("qex")._("2602") === !0;
    }
    function f() {
      return r("qex")._("2603") === !0;
    }
    function g(e, t) {
      return (
        p(e) &&
        o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(t) &&
        f()
      );
    }
    ((l.getPBCContextualEntrypointPromptID = u),
      (l.PBC_SUPPORT_HANDOFF_REQUEST = c),
      (l.createPBCSupportHandoffMessage = d),
      (l.getPBCSupportHandoffPromptID = m),
      (l.isPBCContextualEntrypointErrorCode = p),
      (l.isAllocatedToPBCContextualEntrypointExperiment = _),
      (l.isInPBCContextualEntrypointTestArm = f),
      (l.shouldShowPBCContextualEntrypointMAIBACTA = g));
  },
  98,
);
