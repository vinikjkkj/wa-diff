__d(
  "WAWebContactsAndGroupsDeleteContactsAction",
  [
    "fbt",
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
    "err",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return o("WAWebCustomerManagerGating").customerManagerEnabled()
        ? []
        : e.filter(function (e) {
            return o("WAWebFrontendContactGetters").getIsMyContact(e);
          });
    }
    function d(e, t) {
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
            ((a = !0), o("WDSDialogBridge").closeWDSDialog(), r && (t(), p(e)));
        };
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ ""),
          description: m(e.length, n),
          destructive: !0,
          onConfirm: function () {
            return i(!0);
          },
          onDismiss: function () {
            return i(!1);
          },
          open: !0,
          testid: "contacts-and-groups-delete-contacts-confirm",
          title: s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
        }),
      );
    }
    function m(e, t) {
      return t === 0
        ? s._(/*BTDS*/ "", [s._plural(e)])
        : t < e
          ? s._(/*BTDS*/ "", [s._plural(e)])
          : s._(/*BTDS*/ "", [s._plural(e)]);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("WAWebContactsAndGroupsOneByOne")
        .runOneByOne(e, _)
        .then(function (t) {
          return new (o("WAWebActionToast.react").ActionType)(
            g(t, e.length - t),
          );
        });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
          ),
          pendingAction: t,
        }),
      );
    }
    async function _(e) {
      var t = o("WAWebContactUtils").getContactDataFromContactModel(e),
        n = new (o("WAWebContactLogging").AddContactEvent)(
          o("WAWebContactLogging").ContactSourceType.ContactInfo,
          t,
        );
      try {
        await f(t);
      } catch (e) {
        throw (n.logDelete(e), e);
      }
      n.logDelete();
    }
    function f(e) {
      var t = e == null ? void 0 : e.phoneNumber;
      if (t != null)
        return o("WAWebDeleteContactAction").deleteContactAction({
          phoneNumber: t,
        });
      var n = e == null ? void 0 : e.lid,
        a = e == null ? void 0 : e.username;
      return n != null && a != null && !r("isStringNullOrEmpty")(a)
        ? o("WAWebDeleteContactAction").deleteContactAction({
            lid: n,
            username: a,
          })
        : Promise.reject(
            r("err")("the contact has no phone number or username"),
          );
    }
    function g(e, t) {
      return t === 0
        ? s._(/*BTDS*/ "", [s._plural(e, "count")])
        : e === 0
          ? s._(/*BTDS*/ "", [s._plural(t, "count")])
          : s._(/*BTDS*/ "", [
              s._plural(e, "deletedCount"),
              s._plural(t, "notDeletedCount"),
            ]);
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.getContactsToDelete = c),
      (l.deleteContactsFromContactsAndGroups = d));
  },
  226,
);
