__d(
  "WAWebStatusThumbnail.react",
  [
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebFrontendStatusGetters",
    "WAWebMsgGetters",
    "WAWebStateUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusImageRing.react",
    "WAWebStatusThumbnailComponents.react",
    "WDSFocusStateStyles",
    "WDSVars.stylex",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        container: {
          paddingTop: "xz9dl7a",
          paddingInlineEnd: "x1q3ajuy",
          paddingBottom: "xsag5q8",
          paddingInlineStart: "xbmws1g",
          position: "x1n2onr6",
          borderStartStartRadius: "xr9e8f9",
          borderStartEndRadius: "x1e4oeot",
          borderEndEndRadius: "x1ui04y5",
          borderEndStartRadius: "x6en5u8",
          $$css: !0,
        },
        thumbSizeSmall: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        marginTop2: { marginTop: "xfl633f", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
        a = t.ariaLabel,
        i = t.id,
        l = t.msg,
        s = t.tabIndex,
        c;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebFrontendStatusGetters").getLastStatus]), (n[0] = c))
        : (c = n[0]);
      var m = o("useWAWebStatusValues").useStatusValues(i, c),
        p = m[0],
        _;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [o("WAWebContactGetters").getStatusMute]), (n[1] = _))
        : (_ = n[1]);
      var f = o("useWAWebContactValues").useContactValues(t.contact.id, _),
        g = f[0],
        h = r("useWAWebIsKeyboardUser")(),
        y = h.isKeyboardUser,
        C = r("useWAWebStaticButtonA11y")(t.onClick),
        b = C[0],
        v = C[1],
        S = l != null ? l : p,
        R;
      e: {
        if (
          !o(
            "WAWebStatusGatingUtils",
          ).isStatusCloseFriendsViewerSideEnabled() ||
          p == null
        ) {
          R = null;
          break e;
        }
        if (p.statusAudienceMetadata != null) {
          R = o("WDSVars.stylex").WDSBaseColor.plum400;
          break e;
        }
        R = null;
      }
      var L = R,
        E;
      n[2] !== S
        ? ((E = function () {
            if (!r("gkx")("26258") && S) {
              var e = o("WAWebStateUtils").unproxy(S);
              window.msg = e;
            }
          }),
          (n[2] = S),
          (n[3] = E))
        : (E = n[3]);
      var k = E,
        I = d.thumbSizeSmall,
        T;
      n[4] !== S
        ? ((T = S
            ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebMsgGetters").getSender(S),
                theme: "status",
                size: 40,
              })
            : null),
          (n[4] = S),
          (n[5] = T))
        : (T = n[5]);
      var D = T,
        x;
      n[6] !== y
        ? ((x = (e || (e = r("stylex")))(
            d.container,
            I,
            d.marginTop2,
            y && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[6] = y),
          (n[7] = x))
        : (x = n[7]);
      var $ = t.role || "",
        P = r("gkx")("26258") ? null : k,
        N;
      n[8] !== t
        ? ((N = function (n) {
            (t.onClick == null || t.onClick(),
              n.stopPropagation(),
              n.preventDefault());
          }),
          (n[8] = t),
          (n[9] = N))
        : (N = n[9]);
      var M;
      n[10] !== L || n[11] !== i || n[12] !== g
        ? ((M = g
            ? null
            : u.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
                id: i,
                breakRing: !0,
                customUnreadRingColor: L,
              })),
          (n[10] = L),
          (n[11] = i),
          (n[12] = g),
          (n[13] = M))
        : (M = n[13]);
      var w;
      n[14] !== S || n[15] !== D
        ? ((w = u.jsx(
            o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail,
            { msg: S, thumbnailPlaceholder: D, size: "small" },
          )),
          (n[14] = S),
          (n[15] = D),
          (n[16] = w))
        : (w = n[16]);
      var A;
      return (
        n[17] !== a ||
        n[18] !== v ||
        n[19] !== b ||
        n[20] !== w ||
        n[21] !== x ||
        n[22] !== $ ||
        n[23] !== P ||
        n[24] !== N ||
        n[25] !== M ||
        n[26] !== s
          ? ((A = u.jsxs(
              "div",
              babelHelpers.extends({ ref: b }, v, {
                tabIndex: s,
                className: x,
                "aria-label": a,
                role: $,
                onContextMenu: P,
                onClickCapture: N,
                "data-testid": void 0,
                children: [M, w],
              }),
            )),
            (n[17] = a),
            (n[18] = v),
            (n[19] = b),
            (n[20] = w),
            (n[21] = x),
            (n[22] = $),
            (n[23] = P),
            (n[24] = N),
            (n[25] = M),
            (n[26] = s),
            (n[27] = A))
          : (A = n[27]),
        A
      );
    }
    l.default = m;
  },
  98,
);
