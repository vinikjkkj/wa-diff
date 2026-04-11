__d(
  "WAWebAudienceExpressionTypes",
  [],
  function (t, n, r, o, a, i) {
    var e = "EXPLICIT",
      l = "PREDICATE",
      s = "LABEL",
      u = "CHATTED_RECENTLY",
      c = "NOT_MESSAGED_RECENTLY",
      d = "ALL_CONTACTS";
    function m(t) {
      return { type: e, userJids: t };
    }
    function p(e) {
      return { params: { labelIds: e }, predicateType: s, type: l };
    }
    function _(e) {
      if (e.type === l && e.predicateType === s) {
        var t, n;
        return (t = (n = e.params) == null ? void 0 : n.labelIds) != null
          ? t
          : [];
      }
      return [];
    }
    function f(e, t) {
      var n, r;
      return (
        e.type === l &&
        e.predicateType === s &&
        ((n =
          (r = e.params) == null || (r = r.labelIds) == null
            ? void 0
            : r.includes(t)) != null
          ? n
          : !1)
      );
    }
    function g(e) {
      return (e == null ? void 0 : e.type) === l;
    }
    function h(e) {
      var t,
        n = (t = e.broadcastMetadata) == null ? void 0 : t.audienceExpression;
      return n != null && n.type === l ? n : null;
    }
    function y(e) {
      return JSON.stringify(e);
    }
    function C(t) {
      try {
        var n = JSON.parse(t);
        return (n == null ? void 0 : n.type) === e && Array.isArray(n.userJids)
          ? m(n.userJids)
          : (n == null ? void 0 : n.type) === l && n.predicateType != null
            ? { params: n.params, predicateType: n.predicateType, type: l }
            : null;
      } catch (e) {
        return null;
      }
    }
    var b = m([]);
    ((i.EXPRESSION_TYPE_EXPLICIT = e),
      (i.EXPRESSION_TYPE_PREDICATE = l),
      (i.PREDICATE_TYPE_LABEL = s),
      (i.PREDICATE_TYPE_CHATTED_RECENTLY = u),
      (i.PREDICATE_TYPE_NOT_MESSAGED_RECENTLY = c),
      (i.PREDICATE_TYPE_ALL_CONTACTS = d),
      (i.createExplicitExpression = m),
      (i.createLabelPredicateExpression = p),
      (i.getLabelIdsFromExpression = _),
      (i.expressionUsesLabel = f),
      (i.isPredicateExpression = g),
      (i.getPredicateExpressionFromChat = h),
      (i.serializeAudienceExpression = y),
      (i.parseAudienceExpressionJson = C),
      (i.DEFAULT_AUDIENCE_EXPRESSION = b));
  },
  66,
);
