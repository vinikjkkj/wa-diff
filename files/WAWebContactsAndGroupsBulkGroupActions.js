__d(
  "WAWebContactsAndGroupsBulkGroupActions",
  [
    "fbt",
    "MetaConfig",
    "Promise",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSetArchiveChatAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUpdateUnreadChatAction",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return e.filter(function (e) {
        return !o("WAWebFrontendChatGetters").getIsCommunity(e);
      });
    }
    function m(e) {
      return (
        e.length === 0 ||
        e.some(function (e) {
          return !e.archive;
        })
      );
    }
    function p(e) {
      return (
        e.length === 0 ||
        e.some(function (e) {
          return !o("WAWebMuteGetters").getIsMuted(e.mute);
        })
      );
    }
    function _(e) {
      return (
        e.length === 0 ||
        e.some(function (e) {
          return !o("WAWebFrontendChatGetters").getIsFavorite(e);
        })
      );
    }
    function f(e) {
      return e.some(o("WAWebChatGetters").getHasUnread);
    }
    function g(e) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          return (
            o("WAWebChatGetters").getIsReadOnly(e) &&
            !o("WAWebFrontendChatGetters").getIsCAG(e)
          );
        }) &&
        r("MetaConfig")._("578")
      );
    }
    function h(e) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          var t;
          return (
            o("WAWebChatEphemerality").shouldShowEphemeralSetting(e) &&
            ((t = e.groupMetadata) == null
              ? void 0
              : t.canSetEphemeralSetting()) === !0
          );
        })
      );
    }
    function y(t, a) {
      var i = t.filter(function (e) {
          return e.archive !== a;
        }),
        l = (e || (e = n("Promise")))
          .allSettled(
            i.map(function (e) {
              return o("WAWebSetArchiveChatAction").setArchive(e, a, !1);
            }),
          )
          .then(function () {
            var e = i.filter(function (e) {
              return e.archive !== a;
            }).length;
            return new (o("WAWebActionToast.react").ActionType)(
              e === 0 ? R(a, i.length) : L(a, e),
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: new (o("WAWebActionToast.react").ActionType)(
              S(a, i.length),
            ),
            pendingAction: l,
          }),
        ),
        l.then(r("WAWebNoop"))
      );
    }
    function C(e, t) {
      var n = e.filter(function (e) {
        return o("WAWebMuteGetters").getIsMuted(e.mute) !== t;
      });
      o("WAWebCmd").Cmd.muteChatMultiselect(n, t, function () {
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: E(t, n.length) }),
        );
      });
    }
    function b(t, r) {
      var a = t
        .filter(function (e) {
          return o("WAWebFrontendChatGetters").getIsFavorite(e) !== r;
        })
        .map(function (e) {
          return e.id;
        });
      if (a.length === 0) return (e || (e = n("Promise"))).resolve();
      var i = o("WAWebWamEnumFavoritesUpdateEntryPoint")
        .FAVORITES_UPDATE_ENTRY_POINT.GROUP_INFO;
      return r
        ? o("WAWebAddToFavoritesAction").addToFavoritesAction(a, {
            entryPoint: i,
          })
        : o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(a, {
            entryPoint: i,
          });
    }
    function v(t, a) {
      var i = t.filter(function (e) {
          return o("WAWebChatGetters").getHasUnread(e) === a;
        }),
        l = (e || (e = n("Promise")))
          .allSettled(
            i.map(function (e) {
              return o("WAWebUpdateUnreadChatAction").markUnread(e, {
                allowAction: !1,
                showToast: !1,
                unread: !a,
              });
            }),
          )
          .then(function (e) {
            var t = e.filter(function (e) {
              return e.status === "rejected";
            }).length;
            return new (o("WAWebActionToast.react").ActionType)(
              t === 0 ? I(a, i.length) : T(a, t),
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: new (o("WAWebActionToast.react").ActionType)(
              k(a, i.length),
            ),
            pendingAction: l,
          }),
        ),
        l.then(r("WAWebNoop"))
      );
    }
    function S(e, t) {
      return e
        ? s._(
            /*BTDS*/ '_j{"*":"Archiving {count} groups","_1":"Archiving 1 group"}',
            [s._plural(t, "count")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Unarchiving {count} groups","_1":"Unarchiving 1 group"}',
            [s._plural(t, "count")],
          );
    }
    function R(e, t) {
      return e
        ? s._(
            /*BTDS*/ '_j{"*":"Archived {count} groups","_1":"Archived 1 group"}',
            [s._plural(t, "count")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Unarchived {count} groups","_1":"Unarchived 1 group"}',
            [s._plural(t, "count")],
          );
    }
    function L(e, t) {
      return e
        ? s._(
            /*BTDS*/ '_j{"*":"Couldn\'t archive {count} groups","_1":"Couldn\'t archive 1 group"}',
            [s._plural(t, "count")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Couldn\'t unarchive {count} groups","_1":"Couldn\'t unarchive 1 group"}',
            [s._plural(t, "count")],
          );
    }
    function E(e, t) {
      return e
        ? s._(/*BTDS*/ '_j{"*":"Muted {count} groups","_1":"Muted 1 group"}', [
            s._plural(t, "count"),
          ])
        : s._(
            /*BTDS*/ '_j{"*":"Unmuted {count} groups","_1":"Unmuted 1 group"}',
            [s._plural(t, "count")],
          );
    }
    function k(e, t) {
      return e
        ? s._(
            /*BTDS*/ '_j{"*":"Marking {count} groups as read","_1":"Marking 1 group as read"}',
            [s._plural(t, "count")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Marking {count} groups as unread","_1":"Marking 1 group as unread"}',
            [s._plural(t, "count")],
          );
    }
    function I(e, t) {
      return e
        ? s._(
            /*BTDS*/ '_j{"*":"Marked {count} groups as read","_1":"Marked 1 group as read"}',
            [s._plural(t, "count")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Marked {count} groups as unread","_1":"Marked 1 group as unread"}',
            [s._plural(t, "count")],
          );
    }
    function T(e, t) {
      return e
        ? s._(
            /*BTDS*/ '_j{"*":"Couldn\'t mark {count} groups as read","_1":"Couldn\'t mark 1 group as read"}',
            [s._plural(t, "count")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Couldn\'t mark {count} groups as unread","_1":"Couldn\'t mark 1 group as unread"}',
            [s._plural(t, "count")],
          );
    }
    ((l.getBulkActionGroups = d),
      (l.shouldArchiveGroups = m),
      (l.shouldMuteGroups = p),
      (l.shouldFavoriteGroups = _),
      (l.shouldMarkGroupsRead = f),
      (l.canDeleteGroups = g),
      (l.canChangeGroupsDisappearingTimer = h),
      (l.archiveGroupsFromContactsAndGroups = y),
      (l.muteGroupsFromContactsAndGroups = C),
      (l.favoriteGroupsFromContactsAndGroups = b),
      (l.markGroupsReadFromContactsAndGroups = v));
  },
  226,
);
