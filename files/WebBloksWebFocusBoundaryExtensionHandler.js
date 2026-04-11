__d(
  "WebBloksWebFocusBoundaryExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        onMount: function (t, n, r) {
          var e,
            o = t.getExpression("on_gain_focus_inside"),
            a = t.getExpression("on_lose_focus_inside"),
            i =
              (e = n.current.uiMutableContainer.domNode) == null
                ? void 0
                : e.current;
          if (!i) return;
          var l = i.contains(document.activeElement);
          l &&
            o != null &&
            r.executeCatch(n.current, o, [n.current, r.bloksContext]);
          function s(e) {
            var t,
              a = l;
            ((l =
              (t = i == null ? void 0 : i.contains(e.target)) != null ? t : !1),
              l &&
                !a &&
                o != null &&
                r.executeCatch(n.current, o, [n.current, r.bloksContext]));
          }
          function u(e) {
            var t,
              o = l;
            ((l =
              (t = i == null ? void 0 : i.contains(e.relatedTarget)) != null
                ? t
                : !1),
              o &&
                !l &&
                a != null &&
                r.executeCatch(n.current, a, [n.current, r.bloksContext]));
          }
          return (
            i.addEventListener("focusin", s),
            i.addEventListener("focusout", u),
            function () {
              (i.removeEventListener("focusin", s),
                i.removeEventListener("focusout", u));
            }
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
