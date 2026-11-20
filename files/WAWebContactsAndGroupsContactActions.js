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
    "asyncToGeneratorRuntime",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFindChatAction")
            .findOrCreateLatestChat(e, "chatListUtils")
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "openContactChatFromContactsAndGroups: finding the chat failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                null
              );
            });
          t != null &&
            (yield o(
              "WAWebContactsAndGroupsNavigationAction",
            ).openChatFromContactsAndGroups(t.chat));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFindChatAction")
            .findOrCreateLatestChat(e.id, "chatListUtils")
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      o("WAWebCmd").Cmd.favoriteChat(
        e,
        !e.isFavorite,
        o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT
          .CONTACT_INFO,
      );
    }
    function C(t) {
      var n = t.id.toString();
      if (!p.has(n)) {
        p.add(n);
        var a = o("WAWebWamEnumFavoritesUpdateEntryPoint")
            .FAVORITES_UPDATE_ENTRY_POINT.CONTACT_INFO,
          i = o("WAWebContactsAndGroupsContacts").getStoredChatlessFavoriteIds(
            t,
          );
        (i.length > 0
          ? o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(i, {
              entryPoint: a,
            })
          : o("WAWebAddToFavoritesAction").addToFavoritesAction([t.id], {
              entryPoint: a,
            })
        )
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "toggleContactWithoutChatFavoriteFromContactsAndGroups: updating Favorites failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          })
          .finally(function () {
            p.delete(n);
          });
      }
    }
    function b(e, t) {
      o("WAWebBlockContactUtils").handleUnblock(
        e,
        o("WAWebBlockContants").BlockEntryPoint.ChatListContextMenuBlock,
        t,
      );
    }
    function v(e) {
      R(e, !0);
    }
    function S(e) {
      R(e, !1);
    }
    function R(e, t) {
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
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "startCallFromContactsAndGroups: starting the call failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        });
    }
    ((l.openContactChatFromContactsAndGroups = _),
      (l.blockContactFromContactsAndGroups = g),
      (l.toggleContactFavoriteFromContactsAndGroups = y),
      (l.toggleContactWithoutChatFavoriteFromContactsAndGroups = C),
      (l.unblockContactFromContactsAndGroups = b),
      (l.startVideoCallFromContactsAndGroups = v),
      (l.startVoiceCallFromContactsAndGroups = S));
  },
  98,
);
