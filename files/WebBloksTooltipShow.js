__d(
  "WebBloksTooltipShow",
  ["WebBloksConstants", "WebBloksTooltipConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.getExpression("on_visibility_update");
      if (
        (e.bloksContext.updateAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
          { visible: !0 },
        ),
        n != null)
      ) {
        var r = e.createBloksModelScopedContext(t.keyPath);
        r.executeCatch(n.getValue(), [
          !0,
          o("WebBloksTooltipConstants").ANIMATE_TOOLTIP_ON_ENTRY_AND_EXIT,
        ]);
      }
    }
    l.default = e;
  },
  98,
);
