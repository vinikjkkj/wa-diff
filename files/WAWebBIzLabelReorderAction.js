__d(
  "WAWebBIzLabelReorderAction",
  ["WALogger", "WAWebLabelCollection"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = !1;
      (t.forEach(function (e, t) {
        var r = o("WAWebLabelCollection").LabelCollection.get(String(e));
        r && r.orderIndex !== t && ((r.orderIndex = t), (n = !0));
      }),
        n &&
          (o("WAWebLabelCollection").LabelCollection.trigger("reorder"),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Label] reorderLabelsAction: labels reordered",
              ])),
          )));
    }
    l.reorderLabelsAction = s;
  },
  98,
);
