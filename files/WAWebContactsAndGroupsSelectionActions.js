__d(
  "WAWebContactsAndGroupsSelectionActions",
  [
    "fbt",
    "WALogger",
    "WAWebAddToFavoritesAction",
    "WAWebApiContact",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsFavoritesText",
    "WAWebContactsAndGroupsListActions",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSendContactsModalLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameTypes",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return r("compactMap")(
        e,
        o("WAWebContactsAndGroupsContacts").getContactChat,
      );
    }
    function m(e) {
      var t;
      return (
        ((t = e.groupMetadata) == null ? void 0 : t.participants.canAdd()) ===
        !0
      );
    }
    function p(e, t) {
      var n,
        r = (n = e.groupMetadata) == null ? void 0 : n.participants;
      return t.filter(function (e) {
        return (
          (r == null
            ? void 0
            : r.userIsMember(o("WAWebWidFactory").asUserWidOrThrow(e.id))) !==
          !0
        );
      });
    }
    function _() {
      return o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()
        ? (o("WAWebModalManager").ModalManager.open(
            c.jsx(
              o("WAWebReachoutTimelockRestrictedModalLoadable")
                .ReachoutTimelockRestrictedModalLoadable,
              {},
            ),
          ),
          !1)
        : !0;
    }
    function f(e) {
      var t = d(e);
      if (t.length !== 0) {
        o(
          "WAWebContactsAndGroupsListActions",
        ).openListsEditorForChatsFromContactsAndGroups(t);
        var n = e.length - t.length;
        n > 0 &&
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "", [s._plural(n, "count")]),
            }),
          );
      }
    }
    function g(e) {
      return (
        e.length === 0 ||
        e.some(function (e) {
          return !y(e);
        })
      );
    }
    function h(t, n) {
      var a = t.filter(function (e) {
        return y(e) !== n;
      });
      if (a.length !== 0) {
        var i = o("WAWebWamEnumFavoritesUpdateEntryPoint")
          .FAVORITES_UPDATE_ENTRY_POINT.CONTACT_INFO;
        (n
          ? o("WAWebAddToFavoritesAction").addToFavoritesAction(a.map(C), {
              entryPoint: i,
              suppressToast: !0,
            })
          : o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(
              a.flatMap(b),
              { entryPoint: i, suppressToast: !0 },
            )
        )
          .then(function () {
            a.every(function (e) {
              return y(e) === n;
            }) &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: n
                    ? o(
                        "WAWebContactsAndGroupsFavoritesText",
                      ).getAddedToFavoritesText()
                    : o(
                        "WAWebContactsAndGroupsFavoritesText",
                      ).getRemovedFromFavoritesText(),
                }),
              );
          })
          .catch(function (t) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "favoriteContactsFromContactsAndGroups: updating Favorites failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: o(
                    "WAWebContactsAndGroupsFavoritesText",
                  ).getFavoritesUpdateFailedText(),
                }),
              ));
          });
      }
    }
    function y(e) {
      var t = o("WAWebContactsAndGroupsContacts").getContactChat(e);
      return t != null
        ? o("WAWebFrontendChatGetters").getIsFavorite(t)
        : o("WAWebContactsAndGroupsContacts").isChatlessFavorite(e);
    }
    function C(e) {
      var t, n;
      return (t =
        (n = o("WAWebContactsAndGroupsContacts").getContactChat(e)) == null
          ? void 0
          : n.id) != null
        ? t
        : e.id;
    }
    function b(e) {
      var t = o("WAWebContactsAndGroupsContacts").getContactChat(e);
      return t != null
        ? [t.id]
        : o("WAWebContactsAndGroupsContacts").getStoredChatlessFavoriteIds(e);
    }
    function v(e) {
      return e.filter(R);
    }
    function S(e, t) {
      var n = v(e),
        r = e.length - n.length;
      (r > 0 &&
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "", [s._plural(r, "count")]),
          }),
        ),
        o("WAWebModalManager").ModalManager.open(
          c.jsx(o("WAWebSendContactsModalLoadable").SendContactsModalLoadable, {
            contacts: n,
            onContactsSent: function (n) {
              n != null && t();
            },
          }),
        ));
    }
    function R(e) {
      var t = e.id;
      return t.isRegularUserPn() ||
        (t.isLid() &&
          o("WAWebApiContact").getPhoneNumber(
            o("WAWebWidFactory").asUserLidOrThrow(t),
          ) != null)
        ? !0
        : o("WAWebUsernameTypes").isPresentUsername(
            o("WAWebFrontendContactGetters").getUsername(e),
          );
    }
    ((l.getSelectedChats = d),
      (l.canAddMembers = m),
      (l.getContactsToAdd = p),
      (l.canCreateGroupFromContactsAndGroups = _),
      (l.addContactsToListFromContactsAndGroups = f),
      (l.shouldFavoriteContacts = g),
      (l.favoriteContactsFromContactsAndGroups = h),
      (l.getShareableContacts = v),
      (l.shareContactsFromContactsAndGroups = S));
  },
  226,
);
