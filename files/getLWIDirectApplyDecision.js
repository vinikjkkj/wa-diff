__d(
  "getLWIDirectApplyDecision",
  ["LWIFormSyncState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        daily_budget: { direct: "explicit_exact", maxRatio: 2, minRatio: 0.5 },
      },
      s = new Set(["FAILED", "NOT_SUBMITTED"]);
    function u(e, t, n, r) {
      var a = e == null ? void 0 : e.amounts;
      if (e == null) return "NO_ECHO";
      if (
        a == null ||
        t - e.sentAt > o("LWIFormSyncState").LWI_TYPED_AMOUNTS_TTL_MS
      )
        return "ECHO_EXPIRED";
      if (a.amountsMinor.length === 0) return "NO_ECHO";
      if (a.isQuestion) return "QUESTION";
      if (a.isNegated) return "NEGATED";
      if (a.amountsMinor.length > 1) return "SEVERAL_AMOUNTS";
      if (a.amountsMinor[0] !== n) return "AMOUNT_MISMATCH";
      if (
        r !== e.currency ||
        a.currencies.some(function (t) {
          return t !== e.currency;
        })
      )
        return "CURRENCY_MISMATCH";
      if (a.isOtherUnit) return "OTHER_UNIT";
      if (a.hasSetCue) {
        if (a.hasWordsAfterAmount) return "WORDS_AFTER_AMOUNT";
      } else return "NO_SET_CUE";
      return null;
    }
    function c(e, t) {
      var n = t[e.field];
      if (!e.isDirectGateOn || !e.isApplyGateOn) return "GATE_OFF";
      if (
        e.mode !== "direct" ||
        (n == null ? void 0 : n.direct) !== "explicit_exact"
      )
        return "NOT_DIRECT";
      if (e.isFinal)
        if (e.isNewest)
          if (e.isFirstDirect) {
            if (e.isHandled) return "HANDLED";
          } else return "MULTIPLE_DIRECT";
        else return "NOT_LATEST";
      else return "NOT_FINAL";
      var r = u(e.typed, e.now, e.toMinor, e.currency);
      if (r != null) return r;
      if (e.liveForm !== e.form) return "STALE_FORM";
      if (e.liveMinor !== e.fromMinor) return "STALE_VALUE";
      var o = e.toMinor / e.fromMinor;
      if (n == null || !(o >= n.minRatio && o <= n.maxRatio))
        return "LARGE_CHANGE";
      if (e.isControlBusy) return "CONTROL_BUSY";
      if (e.previewMinor !== e.toMinor) return "ADJUSTED";
      if (e.isBusy) return "BUSY";
      if (e.isDocumentVisible) {
        if (e.submitStatus != null && !s.has(e.submitStatus))
          return "SUBMITTING";
      } else return "NOT_VISIBLE";
      return null;
    }
    function d(t, n) {
      n === void 0 && (n = e);
      var r = c(t, n);
      return r == null ? { kind: "direct" } : { kind: "card", reason: r };
    }
    ((l.DEFAULT_LWI_DIRECT_APPLY_POLICY = e),
      (l.getLWIDirectApplyDecision = d));
  },
  98,
);
