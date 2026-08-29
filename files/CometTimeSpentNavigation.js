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
            u = n.threadIDCandidate,
            d = n.timeSpentConfig,
            m = n.tracePolicy,
            p = n.url;
          if (a && a.profile_session_id != null && i != null) {
            var _, f, g;
            a.profile_session_id =
              (_ = o("ProfileCometSession").initOrExtend(
                i,
                (f = a) == null ? void 0 : f.profile_session_id,
                m,
              )) != null
                ? _
                : (g = a) == null
                  ? void 0
                  : g.profile_session_id;
          }
          var h = babelHelpers.extends({}, r);
          delete h.v2;
          var y = o("CometProductAttribution").minifyProductAttributionV2(r),
            C = { pa: JSON.stringify(h), pav2: y, uri: p };
          C = o("CometTimeSpentUtils").addTimeSpentMetaData(n, C, a);
          var b = o("CometVisitationManager").getCurrentVisitationId();
          (b != null && (C.visitation_id = b),
            C.container_id == null && i != null && (C.container_id = i),
            C.parent_container_id == null &&
              l != null &&
              (C.parent_container_id = l),
            u != null && (C.thread_id_candidate = u),
            (s = {
              extraData: C,
              name: m,
              should_remove_navigation:
                (t = d == null ? void 0 : d.should_remove_navigation) != null
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
