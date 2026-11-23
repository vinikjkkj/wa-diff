__d(
  "WAWebContactsAndGroupsBlockContactsAction",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBlockContactAction",
    "WAWebBlockContants",
    "WAWebContactGetters",
    "WAWebContactsAndGroupsContacts",
    "WAWebContactsAndGroupsOneByOne",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e.filter(function (e) {
        return (
          !o("WAWebFrontendContactGetters").getIsContactBlocked(e) && !p(e)
        );
      });
    }
    function d(e, t) {
      var n = !1,
        a = function (a) {
          n ||
            ((n = !0), o("WDSDialogBridge").closeWDSDialog(), a && (t(), m(e)));
        };
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ ""),
          description: s._(/*BTDS*/ ""),
          destructive: !0,
          onConfirm: function () {
            return a(!0);
          },
          onDismiss: function () {
            return a(!1);
          },
          open: !0,
          testid: "contacts-and-groups-block-contacts-confirm",
          title: s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
        }),
      );
    }
    function m(e) {
      var t = 0,
        n = o("WAWebContactsAndGroupsOneByOne")
          .runOneByOne(e, async function (e) {
            (await _(e)) || t++;
          })
          .then(function (n) {
            return new (o("WAWebActionToast.react").ActionType)(
              f(n - t, e.length - n, t),
            );
          });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
          ),
          pendingAction: n,
        }),
      );
    }
    function p(e) {
      var t,
        n =
          (t = o("WAWebContactsAndGroupsContacts").getContactChat(e)) == null
            ? void 0
            : t.contact;
      return (
        o("WAWebContactGetters").getIsBusiness(e) ||
        (n != null && o("WAWebContactGetters").getIsBusiness(n))
      );
    }
    async function _(e) {
      var t = await o("WAWebFindChatAction").findOrCreateLatestChat(
          e.id,
          "chatListUtils",
        ),
        n = t.chat;
      return o("WAWebContactGetters").getIsBusiness(e) ||
        o("WAWebContactGetters").getIsBusiness(n.contact)
        ? !1
        : (await o("WAWebBlockContactAction").blockContact({
            blockEntryPoint:
              o("WAWebBlockContants").BlockEntryPoint.ChatListContextMenuBlock,
            contact: n.contact,
            showToast: !1,
          }),
          !0);
    }
    function f(e, t, n) {
      return n > 0
        ? g(e, t)
        : t === 0
          ? s._(/*BTDS*/ "", [s._plural(e, "count")])
          : e === 0
            ? s._(/*BTDS*/ "", [s._plural(t, "count")])
            : s._(/*BTDS*/ "", [
                s._plural(e, "blockedCount"),
                s._plural(t, "notBlockedCount"),
              ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      return e === 0 && t === 0
        ? s._(/*BTDS*/ "")
        : t === 0
          ? s._(/*BTDS*/ "", [s._plural(e, "count")])
          : e === 0
            ? s._(/*BTDS*/ "", [s._plural(t, "count")])
            : s._(/*BTDS*/ "", [
                s._plural(e, "blockedCount"),
                s._plural(t, "notBlockedCount"),
              ]);
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.getContactsToBlock = c),
      (l.blockContactsFromContactsAndGroups = d));
  },
  226,
);
