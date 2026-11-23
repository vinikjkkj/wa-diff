__d(
  "WebBloksFieldset",
  ["WebBloksComponentContext", "WebBloksConstants", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.node,
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.renderChildren;
      return s.jsx("fieldset", {
        className: c.fieldset,
        children: r(
          t.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        ),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = o("WebBloksStyle").createStyles({
      fieldset: { border: "none", margin: 0, padding: 0 },
    });
    l.default = u;
  },
  98,
);
