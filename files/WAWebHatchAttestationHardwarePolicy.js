__d(
  "WAWebHatchAttestationHardwarePolicy",
  ["WAWebHatchAttestationErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.policy.debugAllowed && !t.allowDebug)
        throw f("debug flag is set in guest policy but allow_debug=false");
      if (t.requiredVmpl != null && e.vmpl > t.requiredVmpl)
        throw f(
          "report VMPL is " +
            e.vmpl +
            " but policy allows at most " +
            t.requiredVmpl,
        );
      (t.tcbFloors.length > 0 && u(e, t.tcbFloors), s(e, t));
    }
    function s(e, t) {
      if (!t.allowMigration && e.policy.migrateMaAllowed)
        throw f(
          "guest policy has migrate_ma_allowed but policy disallows migration",
        );
      if (t.denyGuestSmt && e.policy.smtAllowed)
        throw f("guest policy has smt_allowed but policy denies guest SMT");
      if (t.denyPlatformSmt && e.platInfo.smtEnabled)
        throw f("platform info has smt_enabled but policy denies platform SMT");
      if (t.requirePageSwapDisable && !e.policy.pageSwapDisabled)
        throw f(
          "guest policy does not disable page swap but policy requires it",
        );
      if (t.requireAliasCheck && !e.platInfo.aliasCheckComplete)
        throw f(
          "platform info reports alias_check_complete=false but policy requires it",
        );
    }
    function u(e, t) {
      t.forEach(function (e, n) {
        if (
          t.slice(n + 1).some(function (t) {
            return p(t.stepping, e.stepping);
          })
        )
          throw f(
            "duplicate TCB floor entry for chip stepping " +
              _(e.stepping) +
              "; each stepping must appear at most once in tcb_floors",
          );
      });
      var n = d(e),
        r = t.find(function (e) {
          return p(e.stepping, n);
        });
      if (r == null)
        throw f("no TCB floor configured for chip stepping " + _(n));
      var o = r.floor,
        a = e.reportedTcb;
      if (
        (c("bootloader", a.bootloader, o.bootloader),
        c("tee", a.tee, o.tee),
        c("snp", a.snp, o.snp),
        c("microcode", a.microcode, o.microcode),
        o.fmc != null)
      ) {
        if (a.fmc == null)
          throw f("TCB floor requires fmc but report carries no fmc value");
        c("fmc", a.fmc, o.fmc);
      }
    }
    function c(e, t, n) {
      if (t < n) throw f("TCB " + e + " is " + t + " but policy floor is " + n);
    }
    function d(e) {
      return {
        famId: m(e.cpuidFamId, "cpuid_fam_id"),
        modId: m(e.cpuidModId, "cpuid_mod_id"),
        step: m(e.cpuidStep, "cpuid_step"),
      };
    }
    function m(e, t) {
      if (e == null)
        throw f(
          "report missing " +
            t +
            "; cannot resolve chip stepping for TCB floor enforcement (older V2-shape SNP reports do not carry CPUID fields)",
        );
      return e;
    }
    function p(e, t) {
      return e.famId === t.famId && e.modId === t.modId && e.step === t.step;
    }
    function _(e) {
      var t = function (t) {
        return t.toString(16).toUpperCase().padStart(2, "0");
      };
      return (
        "family=0x" + t(e.famId) + " model=0x" + t(e.modId) + " step=" + e.step
      );
    }
    function f(e) {
      return new (o("WAWebHatchAttestationErrors").HatchAttestationError)(
        "PolicyViolation",
        e,
      );
    }
    l.checkPolicy = e;
  },
  98,
);
