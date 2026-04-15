__d(
  "WAWebFavoriteCell.react",
  [
    "WAWebBoolFunc",
    "WAWebCallButtonsSurface",
    "WAWebChatCell.react",
    "WAWebDetailImage.react",
    "WAWebFlexBox.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebName.react",
    "WAWebShouldShowCallButtons",
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return !o("WAWebVoipGatingUtils").isCallingEnabled() ||
        !o("WAWebShouldShowCallButtons").shouldShowCallButtons(e)
        ? null
        : s.jsx(o("WAWebFlexBox.react").FlexRow, {
            children: s.jsx(
              o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable,
              {
                chat: e,
                surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface
                  .IconOnly,
                callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.FAVORITES,
                lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType")
                  .LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
              },
            ),
          });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e, t) {
      return e != null
        ? s.jsx(o("WAWebName.react").Name, {
            chat: e,
            titlify: !0,
            ellipsify: !0,
          })
        : t != null
          ? s.jsx(o("WAWebName.react").Name, {
              contact: t,
              titlify: !0,
              ellipsify: !0,
            })
          : null;
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.active,
        a = e.disableHover,
        i = e.favoriteItem,
        l = e.isEditing,
        d = e.onClick,
        p = e.photoSize,
        _ = e.testid,
        f = a === void 0 ? !1 : a,
        g = l === void 0 ? !1 : l,
        h = p === void 0 ? 49 : p,
        y = i.chat,
        C = i.contact,
        b = i.wid,
        v;
      t[0] !== b ? ((v = b.toString()), (t[0] = b), (t[1] = v)) : (v = t[1]);
      var S = r("useWAWebActiveSelection")(n, v),
        R = S[0],
        L = S[1],
        E = m,
        k;
      t[2] !== d
        ? ((k = function () {
            d && d();
          }),
          (t[2] = d),
          (t[3] = k))
        : (k = t[3]);
      var I = k,
        T;
      t[4] !== I
        ? ((T = { enter: I, space: I }), (t[4] = I), (t[5] = T))
        : (T = t[5]);
      var D = T,
        x;
      t[6] !== y || t[7] !== g
        ? ((x = !g && y != null ? u(y) : null),
          (t[6] = y),
          (t[7] = g),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        P;
      t[9] !== h || t[10] !== b
        ? ((P = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: b,
            size: h,
          })),
          (t[9] = h),
          (t[10] = b),
          (t[11] = P))
        : (P = t[11]);
      var N;
      t[12] !== y || t[13] !== C
        ? ((N = c(y, C)), (t[12] = y), (t[13] = C), (t[14] = N))
        : (N = t[14]);
      var M;
      t[15] !== $ ||
      t[16] !== f ||
      t[17] !== I ||
      t[18] !== L ||
      t[19] !== P ||
      t[20] !== N ||
      t[21] !== _
        ? ((M = s.jsx(r("WAWebChatCell.react"), {
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            active: L,
            idle: f,
            image: P,
            primary: N,
            secondary: null,
            detail: $,
            onClick: I,
            testid: void 0,
          })),
          (t[15] = $),
          (t[16] = f),
          (t[17] = I),
          (t[18] = L),
          (t[19] = P),
          (t[20] = N),
          (t[21] = _),
          (t[22] = M))
        : (M = t[22]);
      var w;
      return (
        t[23] !== D || t[24] !== R || t[25] !== M
          ? ((w = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: D,
              onFocus: E,
              ref: R,
              children: M,
            })),
            (t[23] = D),
            (t[24] = R),
            (t[25] = M),
            (t[26] = w))
          : (w = t[26]),
        w
      );
    }
    function m(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    l.default = d;
  },
  98,
);
