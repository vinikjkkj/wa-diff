__d(
  "WAWebLabelItemCollection",
  ["WAWebBaseCollection", "WAWebBizLabelUtils", "WAWebLabelItemModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          t.listenTo(t, "add", s),
          t.listenTo(t, "remove", u),
          t
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebLabelItemModel");
    function s(e) {
      c(e, !0);
    }
    function u(e) {
      c(e, !1);
    }
    function c(e, t) {
      var n = o("WAWebBizLabelUtils")
        .getParentCollection(e.parentType)
        .get(e.parentId);
      if (n) {
        var r = n.labels || [];
        t
          ? r.includes(e.labelId) || (n.labels = [e.labelId].concat(r))
          : (n.labels = r.filter(function (t) {
              return t !== e.labelId;
            }));
      }
    }
    l.LabelItemCollection = e;
  },
  98,
);
