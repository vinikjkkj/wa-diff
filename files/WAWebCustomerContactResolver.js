__d(
  "WAWebCustomerContactResolver",
  [
    "WAWebApiContact",
    "WAWebBizLabelUtils",
    "WAWebContactCollection",
    "WAWebListItemParentType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (!e.isUser() || (t != null && t.name !== "")) return t;
      var n = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        ),
        r =
          n != null
            ? o("WAWebContactCollection").ContactCollection.get(n)
            : null;
      return r != null && (t == null || r.name !== "") ? r : t;
    }
    function s(e) {
      return o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
        e,
        o("WAWebListItemParentType").LabelItemParentType.Contact,
      );
    }
    ((l.resolveCustomerContact = e), (l.resolveCustomerLabelIds = s));
  },
  98,
);
