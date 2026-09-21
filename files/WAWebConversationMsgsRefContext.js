__d(
  "WAWebConversationMsgsRefContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext,
      u = [],
      c = s(null);
    function d() {
      var e = null,
        t = null,
        n = new Set(),
        r = function () {
          n.forEach(function (e) {
            return e();
          });
        },
        o = function () {
          (t == null || t(),
            (t =
              e != null && n.size > 0
                ? e.subscribeToVisibleMessageAnchors(r)
                : null));
        };
      return {
        source: {
          getVisibleMessageAnchors: function () {
            var t, n;
            return (t =
              (n = e) == null ? void 0 : n.getVisibleMessageAnchors()) != null
              ? t
              : u;
          },
          subscribeToVisibleMessageAnchors: function (t) {
            var e = n.size === 0;
            return (
              n.add(t),
              e && o(),
              function () {
                (n.delete(t), n.size === 0 && o());
              }
            );
          },
        },
        updateSource: function (n) {
          e !== n && ((e = n), o(), r());
        },
      };
    }
    ((l.WAWebConversationMsgsRefContext = c),
      (l.createWAWebVisibleMessageAnchorSourceProxy = d));
  },
  98,
);
