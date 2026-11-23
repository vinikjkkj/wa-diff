__d(
  "WAFlowsNativeDraggingController",
  ["WAFlowsBridgeEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return {
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAFlowsSetDraggable,
          fallBackDataForWeb: void 0,
          hasCallback: !1,
          payload: { is_draggable: t },
        };
      },
      s = null,
      u = {
        enableNativeDragging: function (n) {
          (s == null || s === !1) && (n(e(!0)), (s = !0));
        },
        disableNativeDragging: function (n) {
          (s == null || s === !0) && (n(e(!1)), (s = !1));
        },
      };
    l.default = u;
  },
  98,
);
