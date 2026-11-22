__d(
  "WAWebHatchApprovalBatches",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.attentionMode !== "background";
    }
    function l(t) {
      return [].concat(
        s(t.filter(e)),
        s(
          t.filter(function (t) {
            return !e(t);
          }),
        ),
      );
    }
    function s(e) {
      var t = [],
        n = [];
      for (var r of e)
        r.isExclusive ||
        r.payloadType === "browser_task_confirmation" ||
        r.credentialSelection != null
          ? t.push([r])
          : n.push(r);
      return n.length > 0 ? [].concat(t, [n]) : t;
    }
    function u(e) {
      var t;
      return (t = l(e)[0]) != null ? t : [];
    }
    function c(e, t) {
      var n;
      return (n = l(t).find(function (t) {
        return t.some(function (t) {
          return t.approvalId === e;
        });
      })) != null
        ? n
        : [];
    }
    function d(e) {
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
    ((i.isBlockingHatchApproval = e),
      (i.partitionExclusiveApprovals = l),
      (i.getApprovalsToReviewNow = u),
      (i.batchContaining = c),
      (i.commonDecisionOptions = d));
  },
  66,
);
