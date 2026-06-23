__d(
  "WAWebHatchApprovalManager",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e5,
      u = (function () {
        function t() {
          ((this.$1 = new Map()),
            (this.$2 = []),
            (this.$3 = []),
            (this.$4 = new Map()),
            (this.$5 = null));
        }
        var n = t.prototype;
        return (
          (n.getPendingApprovals = function () {
            return this.$2;
          }),
          (n.getApproval = function (t) {
            return this.$1.get(t);
          }),
          (n.upsertApproval = function (t) {
            (this.$1.set(t.approvalId, t), this.$6(t.approvalId), this.$7());
          }),
          (n.resolveApproval = function (t) {
            this.$1.delete(t) && (this.$8(t), this.$7());
          }),
          (n.reconcilePending = function (t, n) {
            if (!(n != null && this.$5 != null && n <= this.$5)) {
              n != null && (this.$5 = n);
              var e = new Set();
              for (var r of t) {
                e.add(r.approvalId);
                var o = !this.$1.has(r.approvalId);
                (this.$1.set(r.approvalId, r), o && this.$6(r.approvalId));
              }
              for (var a of Array.from(this.$1.keys()))
                e.has(a) || (this.$1.delete(a), this.$8(a));
              this.$7();
            }
          }),
          (n.subscribe = function (t) {
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
          (n.__resetForTesting = function () {
            for (var e of this.$4.values()) window.clearTimeout(e);
            ((this.$1 = new Map()),
              (this.$4 = new Map()),
              (this.$2 = []),
              (this.$3 = []),
              (this.$5 = null));
          }),
          (n.$6 = function (t) {
            var e = this;
            (this.$8(t),
              this.$4.set(
                t,
                window.setTimeout(function () {
                  return e.$9(t);
                }, s),
              ));
          }),
          (n.$8 = function (t) {
            var e = this.$4.get(t);
            e != null && (window.clearTimeout(e), this.$4.delete(t));
          }),
          (n.$9 = function (n) {
            (this.$4.delete(n),
              this.$1.delete(n) &&
                (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-approval: expired ",
                        "",
                      ])),
                    n,
                  )
                  .sendLogs("hatch-approval-expired"),
                this.$7()));
          }),
          (n.$7 = function () {
            this.$2 = Array.from(this.$1.values());
            for (var e of [].concat(this.$3)) e();
          }),
          t
        );
      })(),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
