__d(
  "MAIBAWorkspaceCanvasContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = {
        canNavigateBack: !1,
        closeCanvas: function () {},
        externalConversationID: null,
        getLatestWorkspaceEntity: function (t) {
          return t;
        },
        getLoadedEntryPointForEntity: function () {
          return null;
        },
        getWorkspaceById: function () {
          return null;
        },
        isLatestWorkspaceVersion: function () {
          return !0;
        },
        isWidthTransitioningRef: { current: !1 },
        latestDraftPreviewId: null,
        loadedEntryPoint: null,
        loadExperienceEntryPoint: function () {},
        navigateBack: function () {},
        navigateToExperience: function () {},
        navigateToWorkspaceId: function () {
          return !1;
        },
        openCanvas: function () {},
        preloadExperienceEntryPoint: function () {},
        publishWorkspace: function () {},
        refreshOpenExperience: function () {},
        registerDraftPreview: function () {},
        registerWorkspaceVersion: function () {},
        resolveLatestWorkspaceEntity: function (t) {
          return t;
        },
        state: {
          entity: null,
          isCanvasOpen: !1,
          isFullScreen: !1,
          userClosedSinceLastOpen: !1,
        },
        unregisterDraftPreview: function () {},
      },
      p = c(m);
    function _() {
      return d(p);
    }
    function f() {
      var e = _(),
        t = e.externalConversationID;
      return t != null;
    }
    ((l.MAIBA_WORKSPACE_CANVAS_NOOP_VALUE = m),
      (l.MAIBAWorkspaceCanvasContext = p),
      (l.useMAIBAWorkspaceCanvas = _),
      (l.useIsMAIBAWorkspaceCanvasMounted = f));
  },
  98,
);
