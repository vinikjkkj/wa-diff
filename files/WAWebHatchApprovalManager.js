__d(
  "WAWebHatchApprovalManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new Map()), (this.$2 = []), (this.$3 = []));
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
            (this.$1.set(t.approvalId, t), this.$4());
          }),
          (t.resolveApproval = function (t) {
            this.$1.delete(t) && this.$4();
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
            ((this.$1 = new Map()), (this.$2 = []), (this.$3 = []));
          }),
          (t.$4 = function () {
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
