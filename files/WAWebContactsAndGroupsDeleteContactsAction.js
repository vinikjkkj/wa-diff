__d(
  "WAWebContactsAndGroupsDeleteContactsAction",
  [
    "fbt",
    "Promise",
    "WAWebActionToast.react",
    "WAWebContactLogging",
    "WAWebContactUtils",
    "WAWebContactsAndGroupsOneByOne",
    "WAWebCustomerManagerGating",
    "WAWebDeleteContactAction",
    "WAWebFrontendContactGetters",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return o("WAWebCustomerManagerGating").customerManagerEnabled()
        ? []
        : e.filter(function (e) {
            return o("WAWebFrontendContactGetters").getIsMyContact(e);
          });
    }
    function m(e, t) {
      var n = e.filter(function (e) {
          var t;
          return (
            ((t = o("WAWebContactUtils").getContactDataFromContactModel(e)) ==
            null
              ? void 0
              : t.syncToAddressbook) === !0
          );
        }).length,
        a = !1,
        i = function (r) {
          a ||
            ((a = !0), o("WDSDialogBridge").closeWDSDialog(), r && (t(), _(e)));
        };
      o("WDSDialogBridge").openWDSDialog(
        c.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ "Delete"),
          description: p(e.length, n),
          destructive: !0,
          onConfirm: function () {
            return i(!0);
          },
          onDismiss: function () {
            return i(!1);
          },
          open: !0,
          testid: "contacts-and-groups-delete-contacts-confirm",
          title: s._(
            /*BTDS*/ '_j{"*":"Delete {count} contacts?","_1":"Delete 1 contact?"}',
            [s._plural(e.length, "count")],
          ),
        }),
      );
    }
    function p(e, t) {
      return t === 0
        ? s._(
            /*BTDS*/ '_j{"*":"These contacts will be deleted from WhatsApp.","_1":"This contact will be deleted from WhatsApp."}',
            [s._plural(e)],
          )
        : t < e
          ? s._(
              /*BTDS*/ '_j{"*":"These contacts will be deleted from WhatsApp. Those also saved on your phone will be deleted from it too.","_1":"This contact will be deleted from WhatsApp. Those also saved on your phone will be deleted from it too."}',
              [s._plural(e)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"These contacts will be deleted from WhatsApp and your phone.","_1":"This contact will be deleted from WhatsApp and your phone."}',
              [s._plural(e)],
            );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("WAWebContactsAndGroupsOneByOne")
        .runOneByOne(e, f)
        .then(function (t) {
          return new (o("WAWebActionToast.react").ActionType)(
            y(t, e.length - t),
          );
        });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(
              /*BTDS*/ '_j{"*":"Deleting {count} contacts","_1":"Deleting 1 contact"}',
              [s._plural(e.length, "count")],
            ),
          ),
          pendingAction: t,
        }),
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebContactUtils").getContactDataFromContactModel(e),
            n = new (o("WAWebContactLogging").AddContactEvent)(
              o("WAWebContactLogging").ContactSourceType.ContactInfo,
              t,
            );
          try {
            yield h(t);
          } catch (e) {
            throw (n.logDelete(e), e);
          }
          n.logDelete();
        })),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      var a = t == null ? void 0 : t.phoneNumber;
      if (a != null)
        return o("WAWebDeleteContactAction").deleteContactAction({
          phoneNumber: a,
        });
      var i = t == null ? void 0 : t.lid,
        l = t == null ? void 0 : t.username;
      return i != null && l != null && !r("isStringNullOrEmpty")(l)
        ? o("WAWebDeleteContactAction").deleteContactAction({
            lid: i,
            username: l,
          })
        : (e || (e = n("Promise"))).reject(
            r("err")("the contact has no phone number or username"),
          );
    }
    function y(e, t) {
      return t === 0
        ? s._(
            /*BTDS*/ '_j{"*":"{count} contacts deleted","_1":"1 contact deleted"}',
            [s._plural(e, "count")],
          )
        : e === 0
          ? s._(
              /*BTDS*/ '_j{"*":"Couldn\'t delete {count} contacts. Try again later.","_1":"Couldn\'t delete 1 contact. Try again later."}',
              [s._plural(t, "count")],
            )
          : s._(
              /*BTDS*/ '_j{"*":{"*":"Deleted {deletedCount} contacts. Couldn\'t delete {notDeletedCount} contacts. Try again later.","_1":"Deleted {deletedCount} contacts. Couldn\'t delete 1 contact. Try again later."},"_1":{"*":"Deleted 1 contact. Couldn\'t delete {notDeletedCount} contacts. Try again later.","_1":"Deleted 1 contact. Couldn\'t delete 1 contact. Try again later."}}',
              [s._plural(e, "deletedCount"), s._plural(t, "notDeletedCount")],
            );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.getContactsToDelete = d),
      (l.deleteContactsFromContactsAndGroups = m));
  },
  226,
);
