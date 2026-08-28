__d(
  "AdsUEditorAdgroupBaseUIStore",
  [
    "AdsUEditorAdgroupCreateReducer",
    "AdsUEditorHostIDs",
    "FluxReduceStore",
    "abstractMethod",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        n = e.call(this, t) || this;
        var o = [
          r("AdsUEditorHostIDs").CREATION,
          r("AdsUEditorHostIDs").EDITING,
          r("AdsUEditorHostIDs").BULK_EDIT_DIALOG,
          r("AdsUEditorHostIDs").EDITING_CREATIVE_CONTAINER,
        ];
        return (
          (n.$AdsUEditorAdgroupBaseUIStore$p_1 = r(
            "AdsUEditorAdgroupCreateReducer",
          )(o, n.getHandlers())),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.reduce = function (t, n) {
          return this.$AdsUEditorAdgroupBaseUIStore$p_1(t, n);
        }),
        (n.getHandlers = function () {
          return r("abstractMethod")(
            "AdsUEditorAdgroupBaseUIStore",
            "getHandlers",
          );
        }),
        t
      );
    })(r("FluxReduceStore"));
    ((e.__moduleID = i.id), (l.default = e));
  },
  98,
);
