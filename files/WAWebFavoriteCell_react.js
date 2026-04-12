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
      var t = e.active,
        n = e.disableHover,
        a = n === void 0 ? !1 : n,
        i = e.favoriteItem,
        l = e.isEditing,
        d = l === void 0 ? !1 : l,
        m = e.onClick,
        p = e.photoSize,
        _ = p === void 0 ? 49 : p,
        f = e.testid,
        g = i.chat,
        h = i.contact,
        y = i.wid,
        C = r("useWAWebActiveSelection")(t, y.toString()),
        b = C[0],
        v = C[1],
        S = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        R = function () {
          m && m();
        },
        L = { enter: R, space: R },
        E = !d && g != null ? u(g) : null;
      return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: L,
        onFocus: S,
        ref: b,
        children: s.jsx(r("WAWebChatCell.react"), {
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          active: v,
          idle: a,
          image: s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: y,
            size: _,
          }),
          primary: c(g, h),
          secondary: null,
          detail: E,
          onClick: R,
          testid: void 0,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
