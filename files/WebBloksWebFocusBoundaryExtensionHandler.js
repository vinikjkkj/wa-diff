__d(
  "WebBloksWebFocusBoundaryExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = "#",
      l = "$",
      s = {
        onMount: function (n, r, o) {
          var t,
            a = n.getExpression(e),
            i = n.getExpression(l),
            s =
              (t = r.current.uiMutableContainer.domNode) == null
                ? void 0
                : t.current;
          if (!s) return;
          var u = s.contains(document.activeElement);
          u &&
            a != null &&
            o.executeCatch(r.current, a, [r.current, o.bloksContext]);
          function c(e) {
            var t,
              n = u;
            ((u =
              (t = s == null ? void 0 : s.contains(e.target)) != null ? t : !1),
              u &&
                !n &&
                a != null &&
                o.executeCatch(r.current, a, [r.current, o.bloksContext]));
          }
          function d(e) {
            var t,
              n = u;
            ((u =
              (t = s == null ? void 0 : s.contains(e.relatedTarget)) != null
                ? t
                : !1),
              n &&
                !u &&
                i != null &&
                o.executeCatch(r.current, i, [r.current, o.bloksContext]));
          }
          return (
            s.addEventListener("focusin", c),
            s.addEventListener("focusout", d),
            function () {
              (s.removeEventListener("focusin", c),
                s.removeEventListener("focusout", d));
            }
          );
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
