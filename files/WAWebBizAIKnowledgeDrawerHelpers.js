__d(
  "WAWebBizAIKnowledgeDrawerHelpers",
  ["fbt", "$InternalEnum"],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
        "Main",
        "AllProducts",
        "AllFaqs",
        "AllSources",
        "AllGoogleDrive",
      ]),
      u = 3;
    function c(e, t) {
      return t.size === 0
        ? e
        : e.map(function (e) {
            var n = t.get(e.product_id);
            return n != null && e.images.length === 0
              ? babelHelpers.extends({}, e, { images: n })
              : e;
          });
    }
    function d(e, t, n) {
      var r = new Set();
      for (var o of t)
        o.source_type === "FILE_UPLOAD" && r.add(o.user_provided_file_name);
      for (var a of n) r.add(a.name);
      var i = [],
        l = !1;
      for (var s of e) {
        if (r.has(s.name)) {
          l = !0;
          continue;
        }
        (r.add(s.name), i.push(s));
      }
      return { hasDuplicate: l, newFiles: i };
    }
    function m(e) {
      if (e == null) return null;
      switch (e) {
        case "DESCRIPTION":
          return s._(/*BTDS*/ "");
        case "ADDRESS":
          return s._(/*BTDS*/ "");
        case "BUSINESS_HOURS":
          return s._(/*BTDS*/ "");
        case "WEBSITE":
          return s._(/*BTDS*/ "");
        case "EMAIL":
          return s._(/*BTDS*/ "");
        case "PAYMENT_METHODS":
          return s._(/*BTDS*/ "");
        case "IS_NATIVE_PAYMENT_ENABLED":
          return s._(/*BTDS*/ "");
        case "RETURN_POLICY":
          return s._(/*BTDS*/ "");
        case "DISCOUNT_POLICY":
          return s._(/*BTDS*/ "");
        case "SHIPPING_POLICY":
          return s._(/*BTDS*/ "");
        case "PURCHASE_INFO":
          return s._(/*BTDS*/ "");
        default:
          return null;
      }
    }
    ((l.KnowledgeStep = e),
      (l.MAX_PREVIEW_ITEMS = u),
      (l.mergeOptimisticProductImages = c),
      (l.partitionNewKnowledgeFiles = d),
      (l.getKnowledgeTypeLabel = m));
  },
  226,
);
