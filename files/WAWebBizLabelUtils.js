__d(
  "WAWebBizLabelUtils",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebListItemParentType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = m(e);
      e.labels = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
        e.id.toString(),
        t,
      );
    }
    function u(e, t, n) {
      t &&
        t.length > 0 &&
        t.forEach(function (t) {
          var r = t,
            a = null;
          if (
            o("WAWebLabelCollection")
              .LabelCollection.getServerAssignedLabelIdMap()
              .has(r)
          ) {
            a = o("WAWebLabelCollection")
              .LabelCollection.getServerAssignedLabelIdMap()
              .get(r);
            var i = _(a);
            if (i == null) return;
            r = i;
          }
          var l = o("WAWebLabelCollection").LabelCollection.gadd({ id: r });
          (l.labelItemCollection.gadd({
            id: p(e, r, n),
            labelId: r,
            parentId: e,
            parentType: n,
            detectedOutcomeOriginalLabelPredefinedId: a,
          }),
            n === o("WAWebListItemParentType").LabelItemParentType.Chat &&
              l.labelItemCollection.gadd({
                id: p(
                  e,
                  r,
                  o("WAWebListItemParentType").LabelItemParentType.Contact,
                ),
                labelId: r,
                parentId: e,
                parentType: o("WAWebListItemParentType").LabelItemParentType
                  .Contact,
              }));
        });
    }
    function c(t, n, r) {
      var a = o("WAWebLabelCollection").LabelCollection.get(n),
        i = a == null ? void 0 : a.labelItemCollection;
      if (!i) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "labelItemCollection does not exist for labelId ",
              "",
            ])),
          n,
        );
        return;
      }
      (i.remove(p(t, n, r)),
        r === o("WAWebListItemParentType").LabelItemParentType.Chat &&
          i.remove(
            p(t, n, o("WAWebListItemParentType").LabelItemParentType.Contact),
          ));
    }
    function d(e) {
      switch (e) {
        case o("WAWebListItemParentType").LabelItemParentType.Chat:
          return o("WAWebChatCollection").ChatCollection;
        case o("WAWebListItemParentType").LabelItemParentType.Contact:
          return o("WAWebContactCollection").ContactCollection;
      }
    }
    function m(e) {
      if (e instanceof o("WAWebChatModel").Chat)
        return o("WAWebListItemParentType").LabelItemParentType.Chat;
      if (e instanceof r("WAWebContactModel"))
        return o("WAWebListItemParentType").LabelItemParentType.Contact;
      throw r("err")("getParentTypeFromModel: model is invalid");
    }
    function p(e, t, n) {
      return e + "_" + t + "_" + n;
    }
    function _(e) {
      if (e == null) return null;
      var t = null;
      switch (e) {
        case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_NEW_ORDER:
          t = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.NEW_ORDER;
          break;
        case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_LEAD:
          t = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD;
          break;
        default:
          return null;
      }
      var n = o("WAWebLabelCollection").LabelCollection.findFirst(function (e) {
        return e.predefinedId === t;
      });
      return n != null ? n.id : null;
    }
    function f(e) {
      var t,
        n =
          (t = o("WAWebLabelCollection").LabelCollection.get(e)) == null
            ? void 0
            : t.predefinedId,
        r = null;
      switch (n) {
        case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.NEW_ORDER:
          r = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_NEW_ORDER;
          break;
        case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD:
          r = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_LEAD;
          break;
        default:
          break;
      }
      var a = o("WAWebLabelCollection")
        .LabelCollection.getServerAssignedLabelIdMap()
        .entries()
        .find(function (e) {
          var t = e[0],
            n = e[1];
          return n === r;
        });
      return r == null || a == null ? null : a[0];
    }
    ((l.initializeLabels = s),
      (l.addToLabelCollection = u),
      (l.removeLabelFromCollection = c),
      (l.getParentCollection = d),
      (l.getParentTypeFromModel = m),
      (l.createLabelItemId = p),
      (l.mapDOLabelPredefinedIdToManualLabelId = _),
      (l.mapManualLabelIdToDetectedOutcomeLabelId = f));
  },
  98,
);
