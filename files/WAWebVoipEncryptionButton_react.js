__d(
  "WAWebVoipEncryptionButton.react",
  [
    "fbt",
    "WAWebBizCoexGatingUtils",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebUserPrefsMultiDevice",
    "WAWebVoipE2EInfoModal.react",
    "WDSButton.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLock.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebVoipModalManager",
    "useWAWebVoipWindowPopoutTooltipProps",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { iconButton: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e,
        t = o("react-compiler-runtime").c(22),
        n = r("useWAWebVoipWindowPopoutTooltipProps")(),
        a = n.tooltipAnchorRef,
        i = n.tooltipOwnerDocument,
        l = r("useWAWebVoipModalManager")(),
        d = l.openModal,
        m = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "coex_calling_enabled",
        ),
        p;
      t[0] !== m
        ? ((p = m && o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()),
          (t[0] = m),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] !== _
        ? ((f =
            _ &&
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage()),
          (t[2] = _),
          (t[3] = f))
        : (f = t[3]);
      var g = f,
        h =
          (e = r("WAWebCallCollection").activeCall) == null
            ? void 0
            : e.peerJid,
        y;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y =
            h != null
              ? o("WAWebContactCollection").ContactCollection.get(h)
              : null),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b = _ && (C == null ? void 0 : C.isHosted) === !0,
        v = g || b,
        S;
      t[5] !== g || t[6] !== b || t[7] !== d
        ? ((S = function () {
            d(
              u.jsx(r("WAWebVoipE2EInfoModal.react"), {
                isCurrentUserCoex: g,
                isPeerCoex: b,
              }),
            );
          }),
          (t[5] = g),
          (t[6] = b),
          (t[7] = d),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L = r(v ? "WDSIconIcInfo.react" : "WDSIconIcLock.react"),
        E;
      if (b) {
        var k;
        (t[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = s._(
              /*BTDS*/ "This business uses a secure service from Meta to manage this call",
            )),
            (t[9] = k))
          : (k = t[9]),
          (E = k));
      } else if (g) {
        var I;
        (t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = s._(
              /*BTDS*/ "Your business uses a secure service from Meta to manage this call",
            )),
            (t[10] = I))
          : (I = t[10]),
          (E = I));
      } else {
        var T;
        (t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = s._(/*BTDS*/ "End-to-end encrypted")), (t[11] = T))
          : (T = t[11]),
          (E = T));
      }
      var D;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { className: "x10l6tqk xugynej x67dgr1 x68pp3s" }), (t[12] = D))
        : (D = t[12]);
      var x;
      t[13] !== L || t[14] !== R || t[15] !== E
        ? ((x = u.jsx(r("WDSButton.react"), {
            Icon: L,
            onPress: R,
            size: "small",
            type: "default",
            variant: "borderless",
            testid: void 0,
            xstyle: c.iconButton,
            "aria-label": E,
          })),
          (t[13] = L),
          (t[14] = R),
          (t[15] = E),
          (t[16] = x))
        : (x = t[16]);
      var $;
      return (
        t[17] !== x || t[18] !== a || t[19] !== E || t[20] !== i
          ? (($ = u.jsx(
              "div",
              babelHelpers.extends({}, D, {
                children: u.jsx(r("WDSTooltip.react"), {
                  label: E,
                  ownerAnchorRef: a,
                  ownerDocument: i,
                  children: x,
                }),
              }),
            )),
            (t[17] = x),
            (t[18] = a),
            (t[19] = E),
            (t[20] = i),
            (t[21] = $))
          : ($ = t[21]),
        $
      );
    }
    l.default = d;
  },
  226,
);
