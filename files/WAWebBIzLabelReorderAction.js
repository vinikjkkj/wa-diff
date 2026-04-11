__d(
  "WAWebBIzLabelReorderAction",
  ["WALogger", "WAWebLabelCollection"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (n) {
        var t = !1;
        (n.forEach(function (e, n) {
          var r = o("WAWebLabelCollection").LabelCollection.get(String(e));
          r && r.orderIndex !== n && ((r.orderIndex = n), (t = !0));
        }),
          t &&
            (o("WAWebLabelCollection").LabelCollection.trigger("reorder"),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Label] reorderLabelsAction: labels reordered",
                ])),
            )));
      };
    l.reorderLabelsAction = s;
  },
  98,
);
