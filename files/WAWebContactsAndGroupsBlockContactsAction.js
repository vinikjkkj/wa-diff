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
    "asyncToGeneratorRuntime",
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
          confirmLabel: s._(/*BTDS*/ "Block"),
          description: s._(
            /*BTDS*/ "Blocked contacts will no longer be able to call you or send you messages.",
          ),
          destructive: !0,
          onConfirm: function () {
            return a(!0);
          },
          onDismiss: function () {
            return a(!1);
          },
          open: !0,
          testid: "contacts-and-groups-block-contacts-confirm",
          title: s._(
            /*BTDS*/ '_j{"*":"Block {count} contacts?","_1":"Block 1 contact?"}',
            [s._plural(e.length, "count")],
          ),
        }),
      );
    }
    function m(e) {
      var t = 0,
        r = o("WAWebContactsAndGroupsOneByOne")
          .runOneByOne(
            e,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (yield _(e)) || t++;
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .then(function (n) {
            return new (o("WAWebActionToast.react").ActionType)(
              g(n - t, e.length - n, t),
            );
          });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(
              /*BTDS*/ '_j{"*":"Blocking {count} contacts","_1":"Blocking 1 contact"}',
              [s._plural(e.length, "count")],
            ),
          ),
          pendingAction: r,
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e.id,
              "chatListUtils",
            ),
            n = t.chat;
          return o("WAWebContactGetters").getIsBusiness(e) ||
            o("WAWebContactGetters").getIsBusiness(n.contact)
            ? !1
            : (yield o("WAWebBlockContactAction").blockContact({
                blockEntryPoint:
                  o("WAWebBlockContants").BlockEntryPoint
                    .ChatListContextMenuBlock,
                contact: n.contact,
                showToast: !1,
              }),
              !0);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return n > 0
        ? h(e, t)
        : t === 0
          ? s._(
              /*BTDS*/ '_j{"*":"{count} contacts blocked","_1":"1 contact blocked"}',
              [s._plural(e, "count")],
            )
          : e === 0
            ? s._(
                /*BTDS*/ '_j{"*":"Couldn\'t block {count} contacts. Try again later.","_1":"Couldn\'t block 1 contact. Try again later."}',
                [s._plural(t, "count")],
              )
            : s._(
                /*BTDS*/ '_j{"*":{"*":"Blocked {blockedCount} contacts. Couldn\'t block {notBlockedCount} contacts. Try again later.","_1":"Blocked {blockedCount} contacts. Couldn\'t block 1 contact. Try again later."},"_1":{"*":"Blocked 1 contact. Couldn\'t block {notBlockedCount} contacts. Try again later.","_1":"Blocked 1 contact. Couldn\'t block 1 contact. Try again later."}}',
                [s._plural(e, "blockedCount"), s._plural(t, "notBlockedCount")],
              );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      return e === 0 && t === 0
        ? s._(
            /*BTDS*/ "Businesses can't be blocked from here. Block a business from its chat.",
          )
        : t === 0
          ? s._(
              /*BTDS*/ '_j{"*":"Blocked {count} contacts. Businesses can only be blocked from their chat.","_1":"Blocked 1 contact. Businesses can only be blocked from their chat."}',
              [s._plural(e, "count")],
            )
          : e === 0
            ? s._(
                /*BTDS*/ '_j{"*":"Couldn\'t block {count} contacts. Try again later. Businesses can only be blocked from their chat.","_1":"Couldn\'t block 1 contact. Try again later. Businesses can only be blocked from their chat."}',
                [s._plural(t, "count")],
              )
            : s._(
                /*BTDS*/ '_j{"*":{"*":"Blocked {blockedCount} contacts. Couldn\'t block {notBlockedCount} contacts. Try again later. Businesses can only be blocked from their chat.","_1":"Blocked {blockedCount} contacts. Couldn\'t block 1 contact. Try again later. Businesses can only be blocked from their chat."},"_1":{"*":"Blocked 1 contact. Couldn\'t block {notBlockedCount} contacts. Try again later. Businesses can only be blocked from their chat.","_1":"Blocked 1 contact. Couldn\'t block 1 contact. Try again later. Businesses can only be blocked from their chat."}}',
                [s._plural(e, "blockedCount"), s._plural(t, "notBlockedCount")],
              );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.getContactsToBlock = c),
      (l.blockContactsFromContactsAndGroups = d));
  },
  226,
);
