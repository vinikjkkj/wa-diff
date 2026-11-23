__d(
  "WAWebContactsAndGroupsContactActions",
  [
    "WALogger",
    "WAWebAddToFavoritesAction",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebCmd",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsNavigationAction",
    "WAWebFindChatAction",
    "WAWebRemoveFromFavoritesAction",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumLobbyEntryPointType",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = new Set();
    async function _(t) {
      var n = await o("WAWebFindChatAction")
        .findOrCreateLatestChat(t, "chatListUtils")
        .catch(function (t) {
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "openContactChatFromContactsAndGroups: finding the chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
            null
          );
        });
      n != null &&
        (await o(
          "WAWebContactsAndGroupsNavigationAction",
        ).openChatFromContactsAndGroups(n.chat));
    }
    async function f(e) {
      var t = await o("WAWebFindChatAction")
        .findOrCreateLatestChat(e.id, "chatListUtils")
        .catch(function (e) {
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "blockContactFromContactsAndGroups: finding the chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            null
          );
        });
      t != null &&
        o("WAWebBlockContactUtils").handleBlock(
          t.chat,
          o("WAWebBlockContants").BlockEntryPoint.ChatListContextMenuBlock,
        );
    }
    function g(e) {
      o("WAWebCmd").Cmd.favoriteChat(
        e,
        !e.isFavorite,
        o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT
          .CONTACT_INFO,
      );
    }
    function h(e) {
      var t = e.id.toString();
      if (!p.has(t)) {
        p.add(t);
        var n = o("WAWebWamEnumFavoritesUpdateEntryPoint")
            .FAVORITES_UPDATE_ENTRY_POINT.CONTACT_INFO,
          a = o("WAWebContactsAndGroupsContacts").getStoredChatlessFavoriteIds(
            e,
          );
        (a.length > 0
          ? o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(a, {
              entryPoint: n,
            })
          : o("WAWebAddToFavoritesAction").addToFavoritesAction([e.id], {
              entryPoint: n,
            })
        )
          .catch(function (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleContactWithoutChatFavoriteFromContactsAndGroups: updating Favorites failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          })
          .finally(function () {
            p.delete(t);
          });
      }
    }
    function y(e, t) {
      o("WAWebBlockContactUtils").handleUnblock(
        e,
        o("WAWebBlockContants").BlockEntryPoint.ChatListContextMenuBlock,
        t,
      );
    }
    function C(e) {
      v(e, !0);
    }
    function b(e) {
      v(e, !1);
    }
    function v(e, t) {
      o("WAWebVoipStartCall")
        .startWAWebVoipCall(
          e.id,
          t,
          o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACTS_TAB,
          o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .NOT_OPENED,
          null,
          { entryTrust: "user_gesture" },
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "startCallFromContactsAndGroups: starting the call failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        });
    }
    ((l.openContactChatFromContactsAndGroups = _),
      (l.blockContactFromContactsAndGroups = f),
      (l.toggleContactFavoriteFromContactsAndGroups = g),
      (l.toggleContactWithoutChatFavoriteFromContactsAndGroups = h),
      (l.unblockContactFromContactsAndGroups = y),
      (l.startVideoCallFromContactsAndGroups = C),
      (l.startVoiceCallFromContactsAndGroups = b));
  },
  98,
);
