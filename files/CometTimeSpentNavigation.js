__d(
  "CometTimeSpentNavigation",
  [
    "CometProductAttribution",
    "CometTimeSpentUtils",
    "CometVisitationManager",
    "ProfileCometSession",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = new Set();
    function c() {
      u.forEach(function (t) {
        return t({ destPathInfo: s, sourcePathInfo: e });
      });
    }
    var d = {
        changePath: function (n, r, a) {
          var t;
          (a === void 0 && (a = null), (e = s));
          var i = n.entityID,
            l = n.parentContainerId,
            u = n.timeSpentConfig,
            d = n.tracePolicy,
            m = n.url;
          if (a && a.profile_session_id != null && i != null) {
            var p, _, f;
            a.profile_session_id =
              (p = o("ProfileCometSession").initOrExtend(
                i,
                (_ = a) == null ? void 0 : _.profile_session_id,
                d,
              )) != null
                ? p
                : (f = a) == null
                  ? void 0
                  : f.profile_session_id;
          }
          var g = babelHelpers.extends({}, r);
          delete g.v2;
          var h = o("CometProductAttribution").minifyProductAttributionV2(r),
            y = { pa: JSON.stringify(g), pav2: h, uri: m };
          y = o("CometTimeSpentUtils").addTimeSpentMetaData(n, y, a);
          var C = o("CometVisitationManager").getCurrentVisitationId();
          (C != null && (y.visitation_id = C),
            y.container_id == null && i != null && (y.container_id = i),
            y.parent_container_id == null &&
              l != null &&
              (y.parent_container_id = l),
            (s = {
              extraData: y,
              name: d,
              should_remove_navigation:
                (t = u == null ? void 0 : u.should_remove_navigation) != null
                  ? t
                  : !1,
            }),
            c());
        },
        getPathInfo: function () {
          return s;
        },
        getSourcePathInfo: function () {
          return e;
        },
        listenToPathChange: function (t) {
          return (
            u.add(t),
            {
              cancelListen: function () {
                return u.delete(t);
              },
            }
          );
        },
        resetPathInfoForTestingOnly: function () {
          ((e = null), (s = null));
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
