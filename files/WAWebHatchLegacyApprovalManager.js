__d(
  "WAWebHatchLegacyApprovalManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()),
            (this.$2 = []),
            (this.$3 = []),
            (this.$4 = null));
        }
        var t = e.prototype;
        return (
          (t.getPendingApprovals = function () {
            return this.$2;
          }),
          (t.getApproval = function (t) {
            return this.$1.get(t);
          }),
          (t.upsertApproval = function (t) {
            (this.$1.set(t.approvalId, t), this.$5());
          }),
          (t.resolveApproval = function (t) {
            this.$1.delete(t) && this.$5();
          }),
          (t.reconcilePending = function (t, n) {
            if (!(n != null && this.$4 != null && n <= this.$4)) {
              n != null && (this.$4 = n);
              var e = new Set();
              for (var r of t)
                (e.add(r.approvalId), this.$1.set(r.approvalId, r));
              for (var o of Array.from(this.$1.keys()))
                e.has(o) || this.$1.delete(o);
              this.$5();
            }
          }),
          (t.subscribe = function (t) {
            var e = this;
            return (
              this.$3.push(t),
              function () {
                e.$3 = e.$3.filter(function (e) {
                  return e !== t;
                });
              }
            );
          }),
          (t.__resetForTesting = function () {
            ((this.$1 = new Map()),
              (this.$2 = []),
              (this.$3 = []),
              (this.$4 = null));
          }),
          (t.$5 = function () {
            this.$2 = Array.from(this.$1.values());
            for (var e of [].concat(this.$3)) e();
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
