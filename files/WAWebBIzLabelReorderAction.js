__d(
  "WAWebBIzLabelReorderAction",
  ["WALogger", "WAWebLabelCollection", "WAWebListUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(t) {
      var n = !1,
        r =
          o("WAWebLabelCollection").LabelCollection.get(
            o("WAWebListUtils").META_AI_LIST_ID,
          ) == null || t.includes(Number(o("WAWebListUtils").META_AI_LIST_ID))
            ? null
            : o("WAWebLabelCollection")
                .LabelCollection.toArray()
                .map(function (e) {
                  var t = e.id,
                    n = e.isActive,
                    r = e.name,
                    o = e.orderIndex,
                    a = e.predefinedId,
                    i = e.type;
                  return {
                    id: t,
                    isActive: n,
                    name: r != null ? r : "",
                    orderIndex: o,
                    predefinedId: a,
                    type: i,
                  };
                }),
        a = 0;
      if (
        (t.forEach(function (e) {
          var t = o("WAWebLabelCollection").LabelCollection.get(String(e)),
            r =
              String(e) === o("WAWebListUtils").META_AI_LIST_ID ? a - 0.5 : a++;
          t && t.orderIndex !== r && ((t.orderIndex = r), (n = !0));
        }),
        r != null)
      ) {
        var i = s != null;
        (s != null || (s = r),
          i ||
            o("WAWebListUtils")
              .loadMetaAiList()
              .then(function (e) {
                var t = s;
                ((s = null),
                  e != null && t != null && e.reanchorMetaAiListInMemory(t));
              }));
      }
      n &&
        (o("WAWebLabelCollection").LabelCollection.trigger("reorder"),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Label] reorderLabelsAction: labels reordered",
            ])),
        ));
    }
    l.reorderLabelsAction = u;
  },
  98,
);
