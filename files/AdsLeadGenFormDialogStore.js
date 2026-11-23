__d(
  "AdsLeadGenFormDialogStore",
  [
    "AdsDataAtom",
    "AdsLeadGenFormEditorSetDialogOnCloseActionFlux",
    "AdsLeadGenFormEditorSetDialogShowConfirmCloseActionFlux",
    "FluxReduceStore",
    "emptyFunction",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(
        r("immutable").Record({
          onClose: r("emptyFunction"),
          showConfirmClose: !1,
        }),
      ),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return new s();
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsLeadGenFormEditorSetDialogOnCloseActionFlux").actionType,
              o("AdsLeadGenFormEditorSetDialogShowConfirmCloseActionFlux")
                .actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsLeadGenFormEditorSetDialogOnCloseActionFlux")
                .actionType:
                return t.set("onClose", e.onClose);
              case o("AdsLeadGenFormEditorSetDialogShowConfirmCloseActionFlux")
                .actionType:
                return t.set("showConfirmClose", e.showConfirmClose);
              default:
                return t;
            }
          }),
          (n.getOnClose = function () {
            return this.getState().get("onClose");
          }),
          (n.getShowConfirmClose = function () {
            return this.getState().get("showConfirmClose");
          }),
          t
        );
      })(r("FluxReduceStore"));
    u.__moduleID = i.id;
    var c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
