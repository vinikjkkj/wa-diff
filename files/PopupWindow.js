__d(
  "PopupWindow",
  [
    "DOMDimensions",
    "DOMQuery",
    "FlowMigrationUtilsForLegacyFiles",
    "Layer",
    "Popup",
    "getViewportDimensions",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      allowShrink: !0,
      strategy: "vector",
      timeout: 100,
      widthElement: null,
    };
    function s(t) {
      (Object.assign(e, t), window.setInterval(u, e.timeout));
    }
    function u() {
      var t = r("getViewportDimensions")(),
        n = c(),
        a = r("Layer").getTopmostLayer();
      if (a) {
        var i,
          l = (i = a.getRoot()) == null ? void 0 : i.firstChild;
        l ||
          o("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "topMostLayer.getRoot().firstChild is null.",
          );
        var s = o("DOMDimensions").getElementDimensions(l);
        ((s.height += o("DOMDimensions").measureElementBox(
          l,
          "height",
          !0,
          !0,
          !0,
        )),
          (s.width += o("DOMDimensions").measureElementBox(
            l,
            "width",
            !0,
            !0,
            !0,
          )),
          (n.height = Math.max(n.height, s.height)),
          (n.width = Math.max(n.width, s.width)));
      }
      var u = n.height - t.height,
        d = n.width - t.width;
      if (
        (d < 0 && r("isFalsey")(e.widthElement) && (d = 0),
        (d = d > 1 ? d : 0),
        r("isFalsey")(e.allowShrink) && u < 0 && (u = 0),
        u || d)
      )
        try {
          (window.console && window.console.firebug != null,
            window.resizeBy(d, u),
            d && window.moveBy(d / -2, 0));
        } catch (e) {}
    }
    function c() {
      var n = o("DOMDimensions").getDocumentDimensions();
      if (e.strategy === "offsetHeight") {
        var a = document.body;
        if (!a)
          o("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "document.body is null.",
          );
        else {
          var i;
          n.height = (i = a.offsetHeight) != null ? i : 0;
        }
      }
      if (r("isFalsey")(e.widthElement) && typeof e.widthElement == "string") {
        var l = o("DOMQuery").scry(document.body, e.widthElement)[0];
        l && (n.width = o("DOMDimensions").getElementDimensions(l).width);
      }
      var s = t.Dialog;
      return (
        s &&
          s.max_bottom &&
          s.max_bottom > n.height &&
          (n.height = s.max_bottom),
        n
      );
    }
    function d(e, t, n, r) {
      return o("Popup").open(e, n, t, r);
    }
    ((l._opts = e),
      (l.init = s),
      (l._resizeCheck = u),
      (l._getDocumentSize = c),
      (l.open = d));
  },
  98,
);
