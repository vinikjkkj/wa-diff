__d(
  "HeroImperativeHold",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map(),
      l = new Set();
    function s(e, t) {
      ((e.context = t),
        (e.holdID = t.hold(e.interactionUUID, t.pageletStack, e.description)));
    }
    function u(e) {
      var t = e.context,
        n = e.holdID;
      (t != null && n != null && t.unhold(e.interactionUUID, n),
        (e.context = null),
        (e.holdID = null));
    }
    function c(t, n) {
      var r = {
        context: null,
        description: n,
        holdID: null,
        interactionUUID: t,
      };
      l.add(r);
      var o = e.get(t);
      return (
        o != null && s(r, o),
        function () {
          l.delete(r) && u(r);
        }
      );
    }
    function d(t, n) {
      return (
        e.set(t, n),
        l.forEach(function (e) {
          e.interactionUUID === t && e.context == null && s(e, n);
        }),
        function () {
          (e.get(t) === n && e.delete(t),
            l.forEach(function (e) {
              e.context === n && u(e);
            }));
        }
      );
    }
    ((i.holdInteraction = c), (i.registerRoot = d));
  },
  66,
);
