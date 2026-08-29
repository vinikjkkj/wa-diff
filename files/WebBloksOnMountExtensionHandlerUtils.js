__d(
  "WebBloksOnMountExtensionHandlerUtils",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = n.bloksContext,
        a = n.executeOnNextTickCatch,
        i = r.initAssociatedObject_INTERNAL(
          e,
          o("WebBloksConstants").CONTROLLER_ASSOCIATED_OBJECT,
          { firstMountRecorded: !1 },
        ),
        l = e.getExpression("on_first_mount"),
        s = e.getExpression("on_mount"),
        u = e.getExpression("on_unmount");
      return (
        i.firstMountRecorded !== !0 &&
          (r.updateAssociatedObject_INTERNAL(
            e,
            o("WebBloksConstants").CONTROLLER_ASSOCIATED_OBJECT,
            { firstMountRecorded: !0 },
          ),
          l != null && a(t.current, l, [t.current, n])),
        s != null && a(t.current, s, [t.current, n]),
        function () {
          u != null && a(t.current, u, [t.current]);
        }
      );
    }
    l.runMountEffects = e;
  },
  98,
);
