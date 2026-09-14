__d(
  "WAWebBizLabelUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactManagerGating",
    "WAWebContactModel",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebListItemParentType",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = g(e),
        n = e.id.toString();
      e.labels = o("WAWebContactManagerGating").contactManagerEnabled()
        ? c(n, t)
        : o("WAWebLabelCollection").LabelCollection.getLabelsForModel(n, t);
    }
    function c(e, t) {
      var n = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(e, t),
        r = m(e);
      if (r == null) return n;
      var a = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
        r.toString(),
        t,
      );
      return a.length === 0 ? n : Array.from(new Set([].concat(n, a)));
    }
    function d(e, t) {
      var n = f(t),
        r = [],
        a = n.get(e);
      a != null && r.push(a);
      var i = m(e);
      if (i == null) return r;
      var l =
        t === o("WAWebListItemParentType").LabelItemParentType.Chat && i.isLid()
          ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(i)
          : n.get(i);
      return (l != null && l !== a && r.push(l), r);
    }
    function m(t) {
      var n;
      try {
        var r = o("WAWebWidFactory").createWid(t);
        if (!r.isUser()) return null;
        n = o("WAWebWidFactory").asUserWidOrThrow(r);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebBizLabelUtils: label item parent is not a wid",
                ])),
            )
            .sendLogs("label-item-parent-not-a-wid"),
          null
        );
      }
      return n.isLid()
        ? o("WAWebApiContact").getPnIfLidIsLatestMapping(n)
        : o("WAWebApiContact").getCurrentLid(n);
    }
    function p(e, t, n) {
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
            var i = y(a);
            if (i == null) return;
            r = i;
          }
          var l = o("WAWebLabelCollection").LabelCollection.gadd({ id: r });
          (l.labelItemCollection.gadd({
            id: h(e, r, n),
            labelId: r,
            parentId: e,
            parentType: n,
            detectedOutcomeOriginalLabelPredefinedId: a,
          }),
            n === o("WAWebListItemParentType").LabelItemParentType.Chat &&
              l.labelItemCollection.gadd({
                id: h(
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
    function _(e, t, n) {
      var r = o("WAWebLabelCollection").LabelCollection.get(t),
        a = r == null ? void 0 : r.labelItemCollection;
      if (!a) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "labelItemCollection does not exist for labelId ",
              "",
            ])),
          t,
        );
        return;
      }
      var i = o("WAWebContactManagerGating").contactManagerEnabled()
          ? m(e)
          : null,
        l = i != null ? [e, i.toString()] : [e];
      l.forEach(function (e) {
        (a.remove(h(e, t, n)),
          n === o("WAWebListItemParentType").LabelItemParentType.Chat &&
            a.remove(
              h(e, t, o("WAWebListItemParentType").LabelItemParentType.Contact),
            ));
      });
    }
    function f(e) {
      switch (e) {
        case o("WAWebListItemParentType").LabelItemParentType.Chat:
          return o("WAWebChatCollection").ChatCollection;
        case o("WAWebListItemParentType").LabelItemParentType.Contact:
          return o("WAWebContactCollection").ContactCollection;
      }
    }
    function g(e) {
      if (e instanceof o("WAWebChatModel").Chat)
        return o("WAWebListItemParentType").LabelItemParentType.Chat;
      if (e instanceof r("WAWebContactModel"))
        return o("WAWebListItemParentType").LabelItemParentType.Contact;
      throw r("err")("getParentTypeFromModel: model is invalid");
    }
    function h(e, t, n) {
      return e + "_" + t + "_" + n;
    }
    function y(e) {
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
    function C(e) {
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
    ((l.initializeLabels = u),
      (l.getLabelsForModelAnyAddressingMode = c),
      (l.getParentModelsAnyAddressingMode = d),
      (l.addToLabelCollection = p),
      (l.removeLabelFromCollection = _),
      (l.getParentCollection = f),
      (l.getParentTypeFromModel = g),
      (l.createLabelItemId = h),
      (l.mapDOLabelPredefinedIdToManualLabelId = y),
      (l.mapManualLabelIdToDetectedOutcomeLabelId = C));
  },
  98,
);
