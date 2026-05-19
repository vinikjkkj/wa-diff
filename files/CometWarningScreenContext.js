__d(
  "CometWarningScreenContext",
  ["emptyFunction", "react", "react-compiler-runtime", "useStatesInMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = c({
        makeContentVisibleDespiteOverlay: r("emptyFunction"),
        overlaySettings: {
          additionalRequiredHeight: 0,
          isContentVisibleDespiteOverlay: null,
          isOnFeedMedia: !1,
          overlayExists: !1,
          overlayShown: !1,
          parentRenderInstructions: "CLIP_TO_MEDIA",
          videoController: null,
        },
        setAdditionalRequiredHeight: r("emptyFunction"),
        setIsOnFeedMedia: r("emptyFunction"),
        setOverlayExists: r("emptyFunction"),
        setParentRenderInstructions: r("emptyFunction"),
        showOverlay: r("emptyFunction"),
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.children,
        a = e.identifier,
        i = e.isOnFeedMedia,
        l = e.overlayExists,
        u = e.overlayShownOverride,
        c = e.videoController,
        d = u != null ? u : l,
        m;
      t[0] !== i || t[1] !== l || t[2] !== d || t[3] !== c
        ? ((m = {
            additionalRequiredHeight: 0,
            isContentVisibleDespiteOverlay: null,
            isOnFeedMedia: i,
            overlayExists: l,
            overlayShown: d,
            parentRenderInstructions: "CLIP_TO_MEDIA",
            videoController: c,
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = d),
          (t[3] = c),
          (t[4] = m))
        : (m = t[4]);
      var p = r("useStatesInMap")(a, m),
        f = p[0],
        g = p[1],
        h;
      t[5] !== g
        ? ((h = function (t) {
            g(function (e) {
              return babelHelpers.extends({}, e, { overlayShown: t });
            });
          }),
          (t[5] = g),
          (t[6] = h))
        : (h = t[6]);
      var y = h,
        C;
      t[7] !== g
        ? ((C = function (t) {
            g(function (e) {
              return babelHelpers.extends({}, e, {
                isContentVisibleDespiteOverlay: t,
              });
            });
          }),
          (t[7] = g),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] !== g
        ? ((v = function (t) {
            g(function (e) {
              return babelHelpers.extends({}, e, { overlayExists: t });
            });
          }),
          (t[9] = g),
          (t[10] = v))
        : (v = t[10]);
      var S = v,
        R;
      t[11] !== g
        ? ((R = function (t) {
            g(function (e) {
              return babelHelpers.extends({}, e, { isOnFeedMedia: t });
            });
          }),
          (t[11] = g),
          (t[12] = R))
        : (R = t[12]);
      var L = R,
        E;
      t[13] !== g
        ? ((E = function (t) {
            g(function (e) {
              return babelHelpers.extends({}, e, {
                additionalRequiredHeight: t,
              });
            });
          }),
          (t[13] = g),
          (t[14] = E))
        : (E = t[14]);
      var k = E,
        I;
      t[15] !== g
        ? ((I = function (t) {
            g(function (e) {
              return babelHelpers.extends({}, e, {
                parentRenderInstructions: t,
              });
            });
          }),
          (t[15] = g),
          (t[16] = I))
        : (I = t[16]);
      var T = I,
        D;
      t[17] !== b ||
      t[18] !== f ||
      t[19] !== k ||
      t[20] !== L ||
      t[21] !== S ||
      t[22] !== T ||
      t[23] !== y
        ? ((D = {
            makeContentVisibleDespiteOverlay: b,
            overlaySettings: f,
            setAdditionalRequiredHeight: k,
            setIsOnFeedMedia: L,
            setOverlayExists: S,
            setParentRenderInstructions: T,
            showOverlay: y,
          }),
          (t[17] = b),
          (t[18] = f),
          (t[19] = k),
          (t[20] = L),
          (t[21] = S),
          (t[22] = T),
          (t[23] = y),
          (t[24] = D))
        : (D = t[24]);
      var x = D,
        $;
      return (
        t[25] !== n || t[26] !== x
          ? (($ = s.jsx(_.Provider, { value: x, children: n })),
            (t[25] = n),
            (t[26] = x),
            (t[27] = $))
          : ($ = t[27]),
        $
      );
    }
    function g() {
      var e = m(_),
        t = e.overlaySettings;
      return t.overlayExists;
    }
    function h() {
      var e = m(_),
        t = e.overlaySettings;
      return t.videoController;
    }
    function y() {
      var e = m(_),
        t = e.overlaySettings;
      return t.overlayShown;
    }
    function C() {
      var e = m(_),
        t = e.overlaySettings;
      return t.isOnFeedMedia;
    }
    function b() {
      var e = m(_),
        t = e.overlaySettings;
      return t.isContentVisibleDespiteOverlay;
    }
    function v() {
      var e = y(),
        t = b();
      return e ? t : !0;
    }
    function S() {
      var e = m(_),
        t = e.overlaySettings;
      return t.additionalRequiredHeight;
    }
    function R() {
      var e = m(_),
        t = e.overlaySettings;
      return t.parentRenderInstructions;
    }
    function L() {
      var e = m(_),
        t = e.showOverlay;
      return t;
    }
    function E() {
      var e = m(_),
        t = e.makeContentVisibleDespiteOverlay;
      return t;
    }
    function k() {
      var e = m(_),
        t = e.setOverlayExists;
      return t;
    }
    function I() {
      var e = m(_),
        t = e.setIsOnFeedMedia;
      return t;
    }
    function T() {
      var e = m(_),
        t = e.setAdditionalRequiredHeight;
      return t;
    }
    function D() {
      var e = m(_),
        t = e.setParentRenderInstructions;
      return t;
    }
    ((l.CometWarningScreenContextProvider = f),
      (l.useHasOverlay = g),
      (l.useHasVideoController = h),
      (l.useIsOverlayShown = y),
      (l.useIsOnFeedMedia = C),
      (l.useIsContentVisibleDespiteOverlay = b),
      (l.useIsContentVisible = v),
      (l.useAdditionalRequiredHeight = S),
      (l.useParentRenderInstructions = R),
      (l.useShowOverlay = L),
      (l.useMakeContentVisibleDespiteOverlay = E),
      (l.useSetOverlayExists = k),
      (l.useSetIsOnFeedMedia = I),
      (l.useSetAdditionalRequiredHeight = T),
      (l.useSetParentRenderInstructions = D));
  },
  98,
);
