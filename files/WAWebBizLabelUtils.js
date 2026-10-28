__d(
  "WAWebBizLabelUtils",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebCustomerManagerGating",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebListItemParentType",
    "WAWebSchemaLabel",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = C(e),
        n = e.id.toString();
      e.labels = o("WAWebCustomerManagerGating").customerManagerEnabled()
        ? c(n, t)
        : o("WAWebLabelCollection").LabelCollection.getLabelsForModel(n, t);
    }
    function c(e, t) {
      var n = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(e, t),
        r = _(e);
      if (r == null) return n;
      var a = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
        r.toString(),
        t,
      );
      return a.length === 0 ? n : Array.from(new Set([].concat(n, a)));
    }
    function d(e, t, n) {
      var r = o("WAWebLabelCollection").LabelCollection.get(n);
      if (r == null) return !1;
      if (r.labelItemCollection.get(b(e, n, t)) != null) return !0;
      var a = _(e);
      return (
        a != null && r.labelItemCollection.get(b(a.toString(), n, t)) != null
      );
    }
    function m(e) {
      var t,
        n = e.id.toString(),
        r = new Set(
          c(n, o("WAWebListItemParentType").LabelItemParentType.Chat),
        ),
        a = (t = _(n)) == null ? void 0 : t.toString();
      for (var i of c(
        n,
        o("WAWebListItemParentType").LabelItemParentType.Contact,
      )) {
        var l,
          s,
          d = o("WAWebLabelCollection").LabelCollection.get(i);
        if (
          !(d == null || r.has(i)) &&
          !(
            d.type !== o("WAWebSchemaLabel").ListType.CUSTOM &&
            d.type !== o("WAWebSchemaLabel").ListType.PREDEFINED &&
            d.type !== o("WAWebSchemaLabel").ListType.LEAD
          )
        ) {
          var m = d.labelItemCollection.get(
              b(n, i, o("WAWebListItemParentType").LabelItemParentType.Contact),
            ),
            p =
              a != null
                ? d.labelItemCollection.get(
                    b(
                      a,
                      i,
                      o("WAWebListItemParentType").LabelItemParentType.Contact,
                    ),
                  )
                : null;
          d.labelItemCollection.gadd({
            id: b(n, i, o("WAWebListItemParentType").LabelItemParentType.Chat),
            labelId: i,
            parentId: n,
            parentType: o("WAWebListItemParentType").LabelItemParentType.Chat,
            detectedOutcomeOriginalLabelPredefinedId:
              (l =
                (s =
                  m == null
                    ? void 0
                    : m.detectedOutcomeOriginalLabelPredefinedId) != null
                  ? s
                  : p == null
                    ? void 0
                    : p.detectedOutcomeOriginalLabelPredefinedId) != null
                ? l
                : null,
          });
        }
      }
      u(e);
    }
    function p(e, t) {
      var n = y(t),
        r = [],
        a = n.get(e);
      a != null && r.push(a);
      var i = _(e);
      if (i == null) return r;
      var l =
        t === o("WAWebListItemParentType").LabelItemParentType.Chat && i.isLid()
          ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(i)
          : n.get(i);
      return (l != null && l !== a && r.push(l), r);
    }
    function _(t) {
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
    function f(e, t, n) {
      t &&
        t.length > 0 &&
        t.forEach(function (t) {
          if (
            !o("WAWebLabelCollection").LabelCollection.isLegacyLeadListId(t)
          ) {
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
              var i = v(a);
              if (i == null) return;
              r = i;
            }
            var l = o("WAWebLabelCollection").LabelCollection.gadd({ id: r }),
              s = l.labelItemCollection.gadd({
                id: b(e, r, n),
                labelId: r,
                parentId: e,
                parentType: n,
                detectedOutcomeOriginalLabelPredefinedId: a,
              });
            (a == null && (s.hasManualAssociation = !0),
              n === o("WAWebListItemParentType").LabelItemParentType.Chat &&
                l.labelItemCollection.gadd({
                  id: b(
                    e,
                    r,
                    o("WAWebListItemParentType").LabelItemParentType.Contact,
                  ),
                  labelId: r,
                  parentId: e,
                  parentType: o("WAWebListItemParentType").LabelItemParentType
                    .Contact,
                }));
          }
        });
    }
    function g(e, t, n) {
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
      var i = o("WAWebCustomerManagerGating").customerManagerEnabled()
          ? _(e)
          : null,
        l = i != null ? [e, i.toString()] : [e];
      l.forEach(function (e) {
        (a.remove(b(e, t, n)),
          n === o("WAWebListItemParentType").LabelItemParentType.Chat &&
            a.remove(
              b(e, t, o("WAWebListItemParentType").LabelItemParentType.Contact),
            ));
      });
    }
    function h(e, t, n) {
      var r = _(t),
        o = r != null ? [t, r.toString()] : [t];
      return o.some(function (t) {
        var r;
        return (
          ((r = e.labelItemCollection.get(b(t, e.id, n))) == null
            ? void 0
            : r.hasManualAssociation) === !0
        );
      });
    }
    function y(e) {
      switch (e) {
        case o("WAWebListItemParentType").LabelItemParentType.Chat:
          return o("WAWebChatCollection").ChatCollection;
        case o("WAWebListItemParentType").LabelItemParentType.Contact:
          return o("WAWebContactCollection").ContactCollection;
      }
    }
    function C(e) {
      if (e instanceof o("WAWebChatModel").Chat)
        return o("WAWebListItemParentType").LabelItemParentType.Chat;
      if (e instanceof r("WAWebContactModel"))
        return o("WAWebListItemParentType").LabelItemParentType.Contact;
      throw r("err")("getParentTypeFromModel: model is invalid");
    }
    function b(e, t, n) {
      return e + "_" + t + "_" + n;
    }
    function v(e) {
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
    function S(e) {
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
      (l.hasLabelForModelAnyAddressingMode = d),
      (l.projectContactLabelsToChat = m),
      (l.getParentModelsAnyAddressingMode = p),
      (l.addToLabelCollection = f),
      (l.removeLabelFromCollection = g),
      (l.hasManualLabelAssociation = h),
      (l.getParentCollection = y),
      (l.getParentTypeFromModel = C),
      (l.createLabelItemId = b),
      (l.mapDOLabelPredefinedIdToManualLabelId = v),
      (l.mapManualLabelIdToDetectedOutcomeLabelId = S));
  },
  98,
);
