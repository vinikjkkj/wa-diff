__d(
  "WAWebDragAndDropGatingUtils",
  ["$InternalEnum", "WAWebABProps", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      DragOut: 1,
      DragToChat: 2,
      DropFromBrowser: 4,
      DragFilesToChat: 8,
      DragFilesOut: 16,
    });
    function s() {
      return !r("WAWebEnvironment").isWindows || c(e.DragOut);
    }
    function u(e) {
      var t = e.target;
      t instanceof HTMLImageElement && (t.draggable = s());
    }
    function c(e) {
      if (!d(e)) return !1;
      var t = o("WAWebABProps").getABPropConfigValue(
        "wa_web_drag_and_drop_capabilities",
      );
      return !Number.isInteger(t) || t < 0 ? !1 : Math.floor(t / e) % 2 === 1;
    }
    function d(t) {
      return t !== e.DragOut || r("WAWebEnvironment").isWindows;
    }
    ((l.DragAndDropCapability = e),
      (l.isDragOutAllowed = s),
      (l.allowDragOutOnPress = u),
      (l.isDragAndDropCapabilityEnabled = c));
  },
  98,
);
