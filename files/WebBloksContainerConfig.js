__d(
  "WebBloksContainerConfig",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.mergeWith = function (t) {
          return t;
        }),
        (e.fromBloksModel = function (t) {
          throw new (o("WebBloksErrors").WebBloksError)("Abstract");
        }),
        (t.getIsOverlay = function () {
          return !1;
        }),
        (t.getWrapperContribs = function () {
          return null;
        }),
        e
      );
    })();
    function s(e, t) {
      var n = t.styleId,
        r = e.objectSet.getContainerConfigModuleForName(n);
      return r.ContainerConfig.fromBloksModel(t);
    }
    ((l.WebBloksContainerConfig = e), (l.getContainerConfig = s));
  },
  98,
);
