__d(
  "WAWebContactsAndGroupsContactActions",
  [
    "WALogger",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebCmd",
    "WAWebContactsAndGroupsNavigationAction",
    "WAWebFindChatAction",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFindChatAction")
            .findOrCreateLatestChat(e, "chatListUtils")
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFindChatAction")
            .findOrCreateLatestChat(e.id, "chatListUtils")
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      o("WAWebCmd").Cmd.favoriteChat(
        e,
        !e.isFavorite,
        o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT
          .CONTACT_INFO,
      );
    }
    function f(e) {
      o("WAWebBlockContactUtils").handleUnblock(
        e,
        o("WAWebBlockContants").BlockEntryPoint.ChatListContextMenuBlock,
      );
    }
    function g(t) {
      o("WAWebVoipStartCall")
        .startWAWebVoipCall(
          t.id,
          !0,
          o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACTS_TAB,
          o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
            .NOT_OPENED,
          null,
          { entryTrust: "user_gesture" },
        )
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "startVideoCallFromContactsAndGroups: starting the call failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        });
    }
    ((l.openContactChatFromContactsAndGroups = c),
      (l.blockContactFromContactsAndGroups = m),
      (l.toggleContactFavoriteFromContactsAndGroups = _),
      (l.unblockContactFromContactsAndGroups = f),
      (l.startVideoCallFromContactsAndGroups = g));
  },
  98,
);
