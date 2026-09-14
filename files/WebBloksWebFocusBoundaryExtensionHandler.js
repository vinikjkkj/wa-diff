__d(
  "WebBloksWebFocusBoundaryExtensionHandler",
  ["WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      u = {
        onMount: function (n, r, o) {
          var t,
            a = n.getExpression(e),
            i = n.getExpression(s),
            l =
              (t = r.current.uiMutableContainer.domNode) == null
                ? void 0
                : t.current;
          if (!l) return;
          var u = l.contains(document.activeElement);
          u &&
            a != null &&
            o.executeCatch(r.current, a, [r.current, o.bloksContext]);
          function c(e) {
            var t,
              n = u;
            ((u =
              (t = l == null ? void 0 : l.contains(e.target)) != null ? t : !1),
              u &&
                !n &&
                a != null &&
                o.executeCatch(r.current, a, [r.current, o.bloksContext]));
          }
          function d(e) {
            var t,
              n = u;
            ((u =
              (t = l == null ? void 0 : l.contains(e.relatedTarget)) != null
                ? t
                : !1),
              n &&
                !u &&
                i != null &&
                o.executeCatch(r.current, i, [r.current, o.bloksContext]));
          }
          return (
            l.addEventListener("focusin", c),
            l.addEventListener("focusout", d),
            function () {
              (l.removeEventListener("focusin", c),
                l.removeEventListener("focusout", d));
            }
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
