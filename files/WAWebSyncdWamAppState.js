__d(
  "WAWebSyncdWamAppState",
  ["WAShiftTimer", "WAWebMdAppStateSyncDailyWamEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = c(),
      s = new (o("WAShiftTimer").ShiftTimer)(m),
      u = 1e3 * 60 * 5;
    function c() {
      return {
        mutationCount: 0,
        invalidActionCount: 0,
        unsupportedActionCount: 0,
        keyRotationRemoveCount: 0,
        storedMutationCount: 0,
        uploadConflictCount: 0,
        unsetActionCount: 0,
        missingKeyCount: 0,
      };
    }
    function d() {
      e = c();
    }
    function m() {
      var t = new (o(
        "WAWebMdAppStateSyncDailyWamEvent",
      ).MdAppStateSyncDailyWamEvent)();
      (e.mutationCount > 0 && (t.mutationCount = e.mutationCount),
        e.invalidActionCount > 0 &&
          (t.invalidActionCount = e.invalidActionCount),
        e.unsupportedActionCount > 0 &&
          (t.unsupportedActionCount = e.unsupportedActionCount),
        e.keyRotationRemoveCount > 0 &&
          (t.keyRotationRemoveCount = e.keyRotationRemoveCount),
        e.storedMutationCount > 0 &&
          (t.storedMutationCount = e.storedMutationCount),
        e.uploadConflictCount > 0 &&
          (t.uploadConflictCount = e.uploadConflictCount),
        e.unsetActionCount > 0 && (t.unsetActionCount = e.unsetActionCount),
        e.missingKeyCount > 0 && (t.missingKeyCount = e.missingKeyCount),
        d(),
        t.commit());
    }
    function p() {
      s.onOrBefore(u);
    }
    function _(t) {
      t !== 0 && ((e.mutationCount += t), p());
    }
    function f(t) {
      ((e.invalidActionCount = t), p());
    }
    function g(t) {
      ((e.unsupportedActionCount = t), p());
    }
    function h(t) {
      t !== 0 && ((e.keyRotationRemoveCount += t), p());
    }
    function y(t) {
      ((e.storedMutationCount = t), p());
    }
    function C() {
      (e.uploadConflictCount++, p());
    }
    function b(t) {
      t !== 0 && ((e.unsetActionCount += t), p());
    }
    function v(t) {
      ((e.missingKeyCount = t), p());
    }
    ((l.clear = d),
      (l.addMutationCount = _),
      (l.setInvalidActionCount = f),
      (l.setUnsupportedActionCount = g),
      (l.addKeyRotationRemoveCount = h),
      (l.setStoredMutationCount = y),
      (l.incConflict = C),
      (l.addUnsetActionCount = b),
      (l.setMissingKeyCount = v));
  },
  98,
);
