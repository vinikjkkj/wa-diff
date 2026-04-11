__d(
  "CometTransientDialogProviderImpl.react",
  [
    "fbt",
    "BaseModal.react",
    "CometDialogContext",
    "CometDialogTransitionTypes",
    "CometErrorBoundary.react",
    "CometHeroLogging",
    "CometInteractionTracingQPLConfigContext",
    "FBLogger",
    "cometPushToast",
    "cr:945",
    "react",
    "react-compiler-runtime",
    "useCometInteractionTracing",
    "useIsCalledDuringRender",
    "useIsMountedRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.startTransition,
      m = c.unstable_addTransitionType,
      p = c.useCallback,
      _ = c.useEffect,
      f = c.useRef,
      g = c.useState;
    function h(e) {
      var t,
        n,
        a,
        i,
        l,
        c = o("react-compiler-runtime").c(25),
        p = e.dialogConfig,
        h = e.dialogConfigsRef,
        y = e.removeDialogConfig,
        C = f(null),
        b,
        v;
      (c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            return function () {
              C.current != null && window.cancelAnimationFrame(C.current);
            };
          }),
          (v = []),
          (c[0] = b),
          (c[1] = v))
        : ((b = c[0]), (v = c[1])),
        _(b, v));
      var S = p.dialog,
        R = p.dialogProps,
        L = g(!1),
        E = L[0],
        k = L[1],
        I;
      c[2] !== p || c[3] !== h || c[4] !== y
        ? ((I = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var o = t;
            C.current != null && window.cancelAnimationFrame(C.current);
            var a = h.current.indexOf(p);
            (a < 0 &&
              r("FBLogger")("comet_ui")
                .blameToPreviousFrame()
                .mustfix(
                  "Attempting to close a dialog that does not exist anymore.",
                ),
              (C.current = window.requestAnimationFrame(function () {
                (p.unstable_animateExit
                  ? d(function () {
                      (m(r("CometDialogTransitionTypes").Exit), y(p, o));
                    })
                  : y(p, o),
                  (C.current = null));
              })));
          }),
          (c[2] = p),
          (c[3] = h),
          (c[4] = y),
          (c[5] = I))
        : (I = c[5]);
      var T = I,
        D;
      c[6] !== T
        ? ((D = function () {
            (T(),
              o("cometPushToast").cometPushErrorToast({
                message: s._(
                  /*BTDS*/ "Something isn't working. This may be because of a technical error we're working to fix.",
                ),
                truncateText: !1,
              }));
          }),
          (c[6] = T),
          (c[7] = D))
        : (D = c[7]);
      var x = D,
        $;
      c[8] !== S || c[9] !== R || c[10] !== T
        ? (($ = u.jsx(
            S,
            babelHelpers.extends({}, R, { onClose: T, onHide: k }),
          )),
          (c[8] = S),
          (c[9] = R),
          (c[10] = T),
          (c[11] = $))
        : ($ = c[11]);
      var P = $,
        N = (t = p.baseModalProps) == null ? void 0 : t.backdropXStyle,
        M =
          (n = p.baseModalProps) == null
            ? void 0
            : n.disableGeoToCometModalsCompatibility_DO_NOT_USE,
        w = (a = p.baseModalProps) == null ? void 0 : a.isOverlayTransparent,
        A = (i = p.baseModalProps) == null ? void 0 : i.unstable_animateEnter,
        F = (l = p.baseModalProps) == null ? void 0 : l.unstable_animateExit,
        O;
      c[12] !== P ||
      c[13] !== p.interactionDesc ||
      c[14] !== p.interactionUUID ||
      c[15] !== E ||
      c[16] !== F ||
      c[17] !== N ||
      c[18] !== M ||
      c[19] !== w ||
      c[20] !== A
        ? ((O = u.jsx(r("BaseModal.react"), {
            backdropXStyle: N,
            disableGeoToCometModalsCompatibility_DO_NOT_USE: M,
            hidden: E,
            interactionDesc: p.interactionDesc,
            interactionUUID: p.interactionUUID,
            isOverlayTransparent: w,
            stackingBehavior: "above-nav",
            unstable_animateEnter: A,
            unstable_animateExit: F,
            children: P,
          })),
          (c[12] = P),
          (c[13] = p.interactionDesc),
          (c[14] = p.interactionUUID),
          (c[15] = E),
          (c[16] = F),
          (c[17] = N),
          (c[18] = M),
          (c[19] = w),
          (c[20] = A),
          (c[21] = O))
        : (O = c[21]);
      var B;
      return (
        c[22] !== x || c[23] !== O
          ? ((B = u.jsx(r("CometErrorBoundary.react"), {
              onError: x,
              children: O,
            })),
            (c[22] = x),
            (c[23] = O),
            (c[24] = B))
          : (B = c[24]),
        B
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(18),
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (t[0] = a))
        : (a = t[0]);
      var i = g(a),
        l = i[0],
        s = i[1],
        c = o(
          "CometInteractionTracingQPLConfigContext",
        ).useDialogTraceQPLEvent(),
        p = r("useCometInteractionTracing")(c, "fluid", "INTERACTION"),
        y = r("useIsCalledDuringRender")(),
        C;
      t[1] !== y || t[2] !== p
        ? ((C = function (t, o, a, i, l) {
            var e = a.loadType,
              u = a.preloadTrigger,
              c = a.traceAPIAddOn,
              _ = a.tracePolicy;
            p(
              function (a) {
                var p,
                  f = r("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(
                    a.getTraceId(),
                  );
                (a.addMetadata("interaction_type", "dialog"),
                  a.addMetadata("load_type", e),
                  u != null && a.addMetadata("preload_trigger", u),
                  c == null || c(a));
                var g = function () {
                  s(function (e) {
                    var n,
                      r,
                      a,
                      s =
                        (n = l == null ? void 0 : l.replaceCurrentDialog) !=
                        null
                          ? n
                          : !1,
                      u = {
                        baseModalProps: l == null ? void 0 : l.baseModalProps,
                        dialog: t,
                        dialogProps: o,
                        interactionDesc: "Dialog",
                        interactionUUID: f,
                        onClose: i,
                        tracePolicy: _,
                        unstable_animateEnter:
                          (l == null || (r = l.baseModalProps) == null
                            ? void 0
                            : r.unstable_animateEnter) === !0,
                        unstable_animateExit:
                          (l == null || (a = l.baseModalProps) == null
                            ? void 0
                            : a.unstable_animateExit) === !0,
                      };
                    return s ? e.slice(0, e.length - 1).concat(u) : e.concat(u);
                  });
                };
                ((l == null || (p = l.baseModalProps) == null
                  ? void 0
                  : p.unstable_animateEnter) === !0
                  ? d(function () {
                      (m(r("CometDialogTransitionTypes").Enter), g());
                    })
                  : g(),
                  n("cr:945") == null || n("cr:945").logOpen(_, f));
              },
              void 0,
              void 0,
              _,
            );
          }),
          (t[1] = y),
          (t[2] = p),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v = f(l),
        S,
        R;
      (t[4] !== l
        ? ((S = function () {
            v.current = l;
          }),
          (R = [l]),
          (t[4] = l),
          (t[5] = S),
          (t[6] = R))
        : ((S = t[5]), (R = t[6])),
        _(S, R));
      var L = r("useIsMountedRef")(),
        E;
      t[7] !== L
        ? ((E = function (t, r) {
            L.current &&
              (s(function (e) {
                var n = e.indexOf(t);
                return n < 0 ? e : e.slice(0, n);
              }),
              t.onClose == null || t.onClose.apply(t, r),
              n("cr:945") == null ||
                n("cr:945").logClose(t.tracePolicy, t.interactionUUID));
          }),
          (t[7] = L),
          (t[8] = E))
        : (E = t[8]);
      var k = E,
        I = e.children,
        T;
      t[9] !== l || t[10] !== k
        ? ((T = l.map(function (e, t) {
            return u.jsx(
              h,
              { dialogConfig: e, dialogConfigsRef: v, removeDialogConfig: k },
              t,
            );
          })),
          (t[9] = l),
          (t[10] = k),
          (t[11] = T))
        : (T = t[11]);
      var D;
      t[12] !== e.children || t[13] !== T
        ? ((D = u.jsxs(u.Fragment, { children: [I, T] })),
          (t[12] = e.children),
          (t[13] = T),
          (t[14] = D))
        : (D = t[14]);
      var x = D,
        $;
      return (
        t[15] !== b || t[16] !== x
          ? (($ = u.jsx(r("CometDialogContext").Provider, {
              value: b,
              children: x,
            })),
            (t[15] = b),
            (t[16] = x),
            (t[17] = $))
          : ($ = t[17]),
        $
      );
    }
    l.default = y;
  },
  226,
);
