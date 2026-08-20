__d(
  "WAWebHatchApprovalBatches",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [],
        n = [];
      for (var r of e) r.isExclusive ? t.push([r]) : n.push(r);
      return n.length > 0 ? [].concat(t, [n]) : t;
    }
    function l(t) {
      var n;
      return (n = e(t)[0]) != null ? n : [];
    }
    function s(t, n) {
      var r;
      return (r = e(n).find(function (e) {
        return e.some(function (e) {
          return e.approvalId === t;
        });
      })) != null
        ? r
        : [];
    }
    function u(e) {
      var t = e[0],
        n = babelHelpers.arrayLikeToArray(e).slice(1);
      if (t == null) return [];
      var r = t.decisionOptions.filter(function (e) {
          return n.every(function (t) {
            return t.decisionOptions.some(function (t) {
              return (
                t.kind === e.kind &&
                t.alwaysScope === e.alwaysScope &&
                (e.alwaysScope === "" || t.labelText === e.labelText)
              );
            });
          });
        }),
        o = new Set(),
        a = [];
      for (var i of r) {
        var l = i.kind + "\0" + i.alwaysScope;
        o.has(l) || (o.add(l), a.push(i));
      }
      return a;
    }
    ((i.partitionExclusiveApprovals = e),
      (i.getApprovalsToReviewNow = l),
      (i.batchContaining = s),
      (i.commonDecisionOptions = u));
  },
  66,
);
