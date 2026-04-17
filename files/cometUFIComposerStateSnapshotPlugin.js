__d(
  "cometUFIComposerStateSnapshotPlugin",
  [
    "FBLogger",
    "cometUFIComposerStateSnapshotPlugin_plugin.graphql",
    "getComposerStateSnapshotterForLexical",
    "react",
    "react-compiler-runtime",
    "useFocusedStoryDialogLaunchHandlers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["editor"],
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef;
    s !== void 0 ||
      (s = n("cometUFIComposerStateSnapshotPlugin_plugin.graphql"));
    function _(t) {
      var n = o("react-compiler-runtime").c(32),
        a = t.pluginProps,
        i = a.addCommandListener,
        l = a.addCommitListener,
        s = a.composerState,
        u = a.editor,
        c = a.setComposerState,
        d = s.commentID,
        _ = s.feedbackID,
        f = d != null ? d : null,
        g;
      n[0] !== _ || n[1] !== f
        ? ((g = r("getComposerStateSnapshotterForLexical")(_, f)),
          (n[0] = _),
          (n[1] = f),
          (n[2] = g))
        : (g = n[2]);
      var h = g,
        y = p(!1),
        C = p(!1),
        b = p(null),
        v,
        S;
      if (n[3] !== u) {
        var R = u.getEditorState();
        ((v = p),
          (S = R.isEmpty() ? null : R),
          (n[3] = u),
          (n[4] = v),
          (n[5] = S));
      } else ((v = n[4]), (S = n[5]));
      var L = v(S),
        E = r("useFocusedStoryDialogLaunchHandlers")(),
        k = E[0],
        I = E[1],
        T;
      n[6] !== u || n[7] !== c || n[8] !== h
        ? ((T = function () {
            var t = h.get();
            if (t != null) {
              var n = t.state,
                o = n.editor,
                a = babelHelpers.objectWithoutPropertiesLoose(n, e),
                i = t.editorState;
              if (i.isEmpty()) {
                r("FBLogger")("UFILexicalComposer").mustfix(
                  "Snapshot plugin attempted to restore an empty Outline EditorState",
                );
                return;
              }
              (c(function () {
                return a;
              }),
                u.setEditorState(t.editorState));
            }
          }),
          (n[6] = u),
          (n[7] = c),
          (n[8] = h),
          (n[9] = T))
        : (T = n[9]);
      var D = T,
        x;
      n[10] !== s || n[11] !== u || n[12] !== h
        ? ((x = function (t) {
            var e = t === void 0 ? !1 : t,
              n = L.current;
            n !== null &&
              (u.getRootElement() == null || e) &&
              !C.current &&
              h.set({ editorState: n, state: s });
          }),
          (n[10] = s),
          (n[11] = u),
          (n[12] = h),
          (n[13] = x))
        : (x = n[13]);
      var $ = x,
        P;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            ((C.current = !0),
              window.clearTimeout(b.current),
              (b.current = window.setTimeout(function () {
                C.current = !1;
              }, 0)));
          }),
          (n[14] = P))
        : (P = n[14]);
      var N = P,
        M,
        w;
      (n[15] !== D || n[16] !== $ || n[17] !== I || n[18] !== k
        ? ((w = function () {
            y.current || (D(), (y.current = !0));
            var e = k(function () {
                return $(!0);
              }),
              t = I(D);
            return function () {
              ($(), e == null || e.dispose(), t == null || t.dispose());
            };
          }),
          (M = [D, $, I, k]),
          (n[15] = D),
          (n[16] = $),
          (n[17] = I),
          (n[18] = k),
          (n[19] = M),
          (n[20] = w))
        : ((M = n[19]), (w = n[20])),
        m(w, M));
      var A, F;
      (n[21] !== u
        ? ((A = function () {
            return u.registerUpdateListener(function (e) {
              var t = e.editorState;
              u.getRootElement() !== null && !t.isEmpty() && (L.current = t);
            });
          }),
          (F = [u]),
          (n[21] = u),
          (n[22] = A),
          (n[23] = F))
        : ((A = n[22]), (F = n[23])),
        m(A, F));
      var O, B;
      (n[24] !== l || n[25] !== h
        ? ((O = function () {
            return l(function () {
              return (N(), h.clear(), "continue-commit");
            });
          }),
          (B = [h, l, N]),
          (n[24] = l),
          (n[25] = h),
          (n[26] = O),
          (n[27] = B))
        : ((O = n[26]), (B = n[27])),
        m(O, B));
      var W, q;
      return (
        n[28] !== i || n[29] !== h
          ? ((W = function () {
              return i(function (e) {
                return e.__type === "BeforeFinishEdit"
                  ? (N(), h.clear(), "handled")
                  : "not-handled";
              });
            }),
            (q = [i, N, h]),
            (n[28] = i),
            (n[29] = h),
            (n[30] = W),
            (n[31] = q))
          : ((W = n[30]), (q = n[31])),
        m(W, q),
        null
      );
    }
    function f(e) {
      return {
        above: null,
        action: null,
        below: _,
        id: "statesnapshot",
        inside: null,
        props: Object.freeze({}),
      };
    }
    l.default = f;
  },
  98,
);
