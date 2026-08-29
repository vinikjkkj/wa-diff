__d(
  "WebBloksTextGetText",
  ["WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a = t.uiMutableContainer.domNode;
      o("WebBloksUtils").nullthrows(
        a,
        "Not a valid Text model, uiMutableContainer not set",
      );
      var i =
        a == null || (n = a.current) == null ? void 0 : n.dataset.bloksName;
      if (i !== "bk.components.Text")
        throw new (o("WebBloksErrors").WebBloksError)("Not bk.component.Text");
      var l = a == null || (r = a.current) == null ? void 0 : r.innerText;
      return l != null ? l : "";
    }
    l.default = e;
  },
  98,
);
