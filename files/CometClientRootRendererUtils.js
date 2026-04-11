__d(
  "CometClientRootRendererUtils",
  ["ReactDOM", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = !1;
    function c() {
      return u;
    }
    function d(e, t) {
      var n = document.getElementById(e);
      return (
        n ||
          ((n = document.createElement("div")),
          (n.id = e),
          document.body.appendChild(n)),
        t && t.setupNavigationMutationRoot(n),
        n
      );
    }
    function m(e) {
      var t = e.CometVisualCompletion,
        n = e.rootComponent,
        r = e.rootElementID,
        a = e.rootOptions;
      if (!u) {
        var i = o("ReactDOM").createRoot(d(r, t), a);
        (i.render(n), (u = !0));
      }
    }
    ((l.getIsClientSideRendered = c),
      (l.getOrCreateRootElement = d),
      (l.initReactRender = m));
  },
  98,
);
