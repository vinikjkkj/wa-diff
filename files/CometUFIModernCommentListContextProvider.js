__d(
  "CometUFIModernCommentListContextProvider",
  ["FBLogger", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = s.createContext({
        canViewerComment: !1,
        connectionID: null,
        editingCommentID: null,
        feedbackSource: 1,
        feedLocation: "NEWSFEED",
        focusCommentID: null,
        handleCreateCommentProps: {
          onCommit: function () {},
          setError: function () {},
          setLocallyComposedCommentIds: function () {},
        },
        isInline: !1,
        isLiveVODCommentList: !1,
        locallyComposedCommentIds: new Set(),
        onActorSelected: function () {},
        onComposerFocusCallback: function () {},
        onEditCommentError: function () {},
        onTranslateAllClick: function () {},
        realtimeCommentIds: new Set(),
        renderedTranslationCommentID: null,
        selectedIntentToken: null,
        setEditingCommentID: function () {},
        setRenderedTranslationCommentID: function () {},
        shouldDisplayInReverse: !1,
        shouldRequestTranslationForAllComments: !1,
        storyRenderLocation: "permalink",
        threadingEnabled: !1,
        topLevelFeedbackID: null,
        useDefaultActor: !1,
      });
    function p(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        d,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D = o("react-compiler-runtime").c(28),
        x = e.children,
        $ = e.connectionID,
        P = e.contextValues,
        N = e.depth,
        M = c(m);
      if (N === 0 && P == null)
        throw r("FBLogger")("modern-ufi").mustfixThrow(
          "CometUFIModernCommentListContextProvider: no context value provided for depth 0 comment list.`",
        );
      if (N > 0 && P != null)
        throw r("FBLogger")("modern-ufi").mustfixThrow(
          "Depth %s list passed a nonnull context value, but this should only happen at depth 0",
          N,
        );
      (P == null || P.canViewerComment,
        P == null || P.editingCommentID,
        P == null || P.feedLocation,
        P == null || P.feedbackSource,
        P == null || P.focusCommentID,
        P == null || P.handleCreateCommentProps,
        P == null || P.isLiveVODCommentList,
        P == null || P.locallyComposedCommentIds,
        P == null || P.onActorSelected,
        P == null || P.onComposerFocusCallback,
        P == null || P.onEditCommentError,
        P == null || P.onTranslateAllClick,
        P == null || P.realtimeCommentIds,
        P == null || P.renderedTranslationCommentID,
        P == null || P.selectedIntentToken,
        P == null || P.setEditingCommentID,
        P == null || P.setRenderedTranslationCommentID,
        P == null || P.shouldDisplayInReverse,
        P == null || P.shouldRequestTranslationForAllComments,
        P == null || P.storyRenderLocation,
        P == null || P.threadingEnabled,
        P == null || P.topLevelFeedbackID,
        P == null || P.useDefaultActor);
      var w =
          (t = P == null ? void 0 : P.canViewerComment) != null
            ? t
            : M.canViewerComment,
        A = $ != null ? $ : M.connectionID,
        F =
          (n = P == null ? void 0 : P.editingCommentID) != null
            ? n
            : M.editingCommentID,
        O =
          (a = P == null ? void 0 : P.feedbackSource) != null
            ? a
            : M.feedbackSource,
        B =
          (i = P == null ? void 0 : P.feedLocation) != null
            ? i
            : M.feedLocation,
        W =
          (l = P == null ? void 0 : P.focusCommentID) != null
            ? l
            : M.focusCommentID,
        q =
          (u = P == null ? void 0 : P.handleCreateCommentProps) != null
            ? u
            : M.handleCreateCommentProps,
        U =
          (d = P == null ? void 0 : P.isLiveVODCommentList) != null
            ? d
            : M.isLiveVODCommentList,
        V =
          (p = P == null ? void 0 : P.locallyComposedCommentIds) != null
            ? p
            : M.locallyComposedCommentIds,
        H =
          (_ = P == null ? void 0 : P.onActorSelected) != null
            ? _
            : M.onActorSelected,
        G =
          (f = P == null ? void 0 : P.onComposerFocusCallback) != null
            ? f
            : M.onComposerFocusCallback,
        z =
          (g = P == null ? void 0 : P.onEditCommentError) != null
            ? g
            : M.onEditCommentError,
        j =
          (h = P == null ? void 0 : P.onTranslateAllClick) != null
            ? h
            : M.onTranslateAllClick,
        K =
          (y = P == null ? void 0 : P.realtimeCommentIds) != null
            ? y
            : M.realtimeCommentIds,
        Q =
          (C = P == null ? void 0 : P.renderedTranslationCommentID) != null
            ? C
            : M.renderedTranslationCommentID,
        X =
          (b = P == null ? void 0 : P.selectedIntentToken) != null
            ? b
            : M.selectedIntentToken,
        Y =
          (v = P == null ? void 0 : P.setEditingCommentID) != null
            ? v
            : M.setEditingCommentID,
        J =
          (S = P == null ? void 0 : P.setRenderedTranslationCommentID) != null
            ? S
            : M.setRenderedTranslationCommentID,
        Z =
          (R = P == null ? void 0 : P.shouldDisplayInReverse) != null
            ? R
            : M.shouldDisplayInReverse,
        ee =
          (L = P == null ? void 0 : P.shouldRequestTranslationForAllComments) !=
          null
            ? L
            : M.shouldRequestTranslationForAllComments,
        te =
          (E = P == null ? void 0 : P.storyRenderLocation) != null
            ? E
            : M.storyRenderLocation,
        ne =
          (k = P == null ? void 0 : P.threadingEnabled) != null
            ? k
            : M.threadingEnabled,
        re =
          (I = P == null ? void 0 : P.topLevelFeedbackID) != null
            ? I
            : M.topLevelFeedbackID,
        oe =
          (T = P == null ? void 0 : P.useDefaultActor) != null
            ? T
            : M.useDefaultActor,
        ae;
      D[0] !== w ||
      D[1] !== H ||
      D[2] !== G ||
      D[3] !== z ||
      D[4] !== j ||
      D[5] !== K ||
      D[6] !== Q ||
      D[7] !== X ||
      D[8] !== Y ||
      D[9] !== J ||
      D[10] !== Z ||
      D[11] !== A ||
      D[12] !== ee ||
      D[13] !== te ||
      D[14] !== ne ||
      D[15] !== re ||
      D[16] !== oe ||
      D[17] !== F ||
      D[18] !== O ||
      D[19] !== B ||
      D[20] !== W ||
      D[21] !== q ||
      D[22] !== U ||
      D[23] !== V
        ? ((ae = {
            canViewerComment: w,
            connectionID: A,
            editingCommentID: F,
            feedbackSource: O,
            feedLocation: B,
            focusCommentID: W,
            handleCreateCommentProps: q,
            isLiveVODCommentList: U,
            locallyComposedCommentIds: V,
            onActorSelected: H,
            onComposerFocusCallback: G,
            onEditCommentError: z,
            onTranslateAllClick: j,
            realtimeCommentIds: K,
            renderedTranslationCommentID: Q,
            selectedIntentToken: X,
            setEditingCommentID: Y,
            setRenderedTranslationCommentID: J,
            shouldDisplayInReverse: Z,
            shouldRequestTranslationForAllComments: ee,
            storyRenderLocation: te,
            threadingEnabled: ne,
            topLevelFeedbackID: re,
            useDefaultActor: oe,
          }),
          (D[0] = w),
          (D[1] = H),
          (D[2] = G),
          (D[3] = z),
          (D[4] = j),
          (D[5] = K),
          (D[6] = Q),
          (D[7] = X),
          (D[8] = Y),
          (D[9] = J),
          (D[10] = Z),
          (D[11] = A),
          (D[12] = ee),
          (D[13] = te),
          (D[14] = ne),
          (D[15] = re),
          (D[16] = oe),
          (D[17] = F),
          (D[18] = O),
          (D[19] = B),
          (D[20] = W),
          (D[21] = q),
          (D[22] = U),
          (D[23] = V),
          (D[24] = ae))
        : (ae = D[24]);
      var ie = ae,
        le;
      return (
        D[25] !== x || D[26] !== ie
          ? ((le = s.jsx(m.Provider, { value: ie, children: x })),
            (D[25] = x),
            (D[26] = ie),
            (D[27] = le))
          : (le = D[27]),
        le
      );
    }
    function _() {
      return c(m);
    }
    ((l.CometUFIModernCommentListContext = m),
      (l.CometUFIModernCommentListContextProvider = p),
      (l.useCometUFIModernCommentListContext = _));
  },
  98,
);
