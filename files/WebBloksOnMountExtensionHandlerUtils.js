__d(
  "WebBloksOnMountExtensionHandlerUtils",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    var e = ")",
      s = "*",
      u = "+";
    function c(t, n, r) {
      var a = r.bloksContext,
        i = r.executeOnNextTickCatch,
        l = a.initAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").CONTROLLER_ASSOCIATED_OBJECT,
          { firstMountRecorded: !1 },
        ),
        c = t.getExpression(e),
        d = t.getExpression(s),
        m = t.getExpression(u);
      return (
        l.firstMountRecorded !== !0 &&
          (a.updateAssociatedObject_INTERNAL(
            t,
            o("WebBloksConstants").CONTROLLER_ASSOCIATED_OBJECT,
            { firstMountRecorded: !0 },
          ),
          c != null && i(n.current, c, [n.current, r])),
        d != null && i(n.current, d, [n.current, r]),
        function () {
          m != null && i(n.current, m, [n.current]);
        }
      );
    }
    l.runMountEffects = c;
  },
  98,
);
