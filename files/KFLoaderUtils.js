__d(
  "KFLoaderUtils",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t, n, r) {
      for (var a = 0; a < t.length; a++) {
        var i = t[a],
          l = n.getComponent(i, o("KFComponentNames").CHILDREN),
          s = l == null ? void 0 : l.getChildren();
        (s != null && e(s, n, r), r(i, a, t));
      }
    }
    function s(t, n) {
      var r = t.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
        a = t.getComponent(r, o("KFComponentNames").SCENE);
      if (a != null) {
        var i = a.getEntities();
        e(i, t, n);
      }
    }
    function u(e) {
      var t = e == null ? void 0 : e.duration();
      return t == null || t === 0 ? 1 : t * 1e3;
    }
    function c(e) {
      d.traverseEntitiesAndApply(e, function (t, n, r) {
        if (n + 1 !== r.length) {
          var a = r[n + 1],
            i = e.getComponent(a, o("KFComponentNames").COMPOSITING);
          if ((i == null ? void 0 : i.isTrackMatte) === !0) {
            var l = e.getComponent(t, o("KFComponentNames").COMPOSITING);
            (l == null &&
              (l = e.addComponent(t, o("KFComponentNames").COMPOSITING)),
              (l.trackMatteId = a.getID()));
          }
        }
      });
    }
    var d = {
        getDocumentDuration: u,
        maybeGenerateTrackMatteIDs: c,
        traverseEntitiesAndApply: s,
      },
      m = d;
    l.default = m;
  },
  98,
);
