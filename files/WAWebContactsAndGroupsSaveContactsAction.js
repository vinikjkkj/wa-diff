__d(
  "WAWebContactsAndGroupsSaveContactsAction",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebBulkAddContactsModal.react",
    "WAWebContactsAndGroupsGatingUtils",
    "WAWebContactsAndGroupsOneByOne",
    "WAWebGroupBulkAddContactsEligibility",
    "WAWebGroupConstants",
    "WAWebModalManager",
    "WAWebSaveContactAction",
    "WAWebToastManager",
    "WAWebUsernameTypes",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return o(
        "WAWebContactsAndGroupsGatingUtils",
      ).isContactsAndGroupsBulkSaveEnabled()
        ? e.filter(
            o("WAWebGroupBulkAddContactsEligibility").isBulkAddEligibleContact,
          )
        : [];
    }
    function d(e, t, n, a) {
      if (e.length <= o("WAWebGroupConstants").MAX_GROUP_SIZE_FOR_BULK_ADD) {
        m(e, t, a);
        return;
      }
      var i = !1,
        l = function (l) {
          i ||
            ((i = !0),
            o("WDSDialogBridge").closeWDSDialog(),
            l ? (t(), p(e, n)) : a());
        };
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WDSConfirmDialog.react"), {
          confirmLabel: s._(/*BTDS*/ "Save"),
          onConfirm: function () {
            return l(!0);
          },
          onDismiss: function () {
            return l(!1);
          },
          open: !0,
          testid: "contacts-and-groups-save-contacts-confirm",
          title: s._(
            /*BTDS*/ '_j{"*":"Save {count} contacts?","_1":"Save 1 contact?"}',
            [s._plural(e.length, "count")],
          ),
        }),
      );
    }
    function m(e, t, n) {
      var r = !1,
        a = function () {
          (o("WAWebModalManager").ModalManager.off("close_modal", a), r || n());
        };
      (o("WAWebModalManager").ModalManager.on("close_modal", a),
        o(
          "WAWebBulkAddContactsModal.react",
        ).openBulkAddContactsModalForContacts(e, {
          getSuccessToastText: y,
          onSaved: function () {
            ((r = !0), t());
          },
        }));
    }
    function p(e, t) {
      var r = 0,
        a = o("WAWebContactsAndGroupsOneByOne")
          .runOneByOne(
            _(e),
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield f(e);
                  r += t;
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .then(function () {
            return (
              r === 0 && t(),
              new (o("WAWebActionToast.react").ActionType)(h(r, e.length - r))
            );
          });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(
              /*BTDS*/ '_j{"*":"Saving {count} contacts","_1":"Saving 1 contact"}',
              [s._plural(e.length, "count")],
            ),
          ),
          pendingAction: a,
        }),
      );
    }
    function _(e) {
      for (
        var t = [], n = 0;
        n < e.length;
        n += o("WAWebGroupConstants").MAX_GROUP_SIZE_FOR_BULK_ADD
      )
        t.push(
          e.slice(n, n + o("WAWebGroupConstants").MAX_GROUP_SIZE_FOR_BULK_ADD),
        );
      return t;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            n = [];
          return (
            e.forEach(function (e) {
              var r = o(
                "WAWebGroupBulkAddContactsEligibility",
              ).getBulkAddSaveTarget(e);
              if (r != null) {
                var a = o(
                  "WAWebGroupBulkAddContactsEligibility",
                ).getBulkAddContactName(e, r);
                r.type === "username"
                  ? n.push({
                      firstName: a,
                      lastName: "",
                      lid: r.lid,
                      username: o("WAWebUsernameTypes").serializeUsername(
                        r.username,
                      ),
                    })
                  : t.push({
                      firstName: a,
                      lastName: "",
                      phoneNumber: r.phoneNumber.user,
                      syncToAddressbook: !1,
                    });
              }
            }),
            yield o("WAWebSaveContactAction").saveContactBatchAction(t, n),
            t.length + n.length
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return t === 0
        ? y(e)
        : e === 0
          ? s._(
              /*BTDS*/ '_j{"*":"Couldn\'t save {count} contacts","_1":"Couldn\'t save 1 contact"}',
              [s._plural(t, "count")],
            )
          : s._(
              /*BTDS*/ '_j{"*":{"*":"{savedCount} contacts saved. Couldn\'t save {notSavedCount} contacts.","_1":"{savedCount} contacts saved. Couldn\'t save 1 contact."},"_1":{"*":"1 contact saved. Couldn\'t save {notSavedCount} contacts.","_1":"1 contact saved. Couldn\'t save 1 contact."}}',
              [s._plural(e, "savedCount"), s._plural(t, "notSavedCount")],
            );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts saved","_1":"1 contact saved"}',
        [s._plural(e, "number")],
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.getContactsToSave = c),
      (l.saveContactsFromContactsAndGroups = d));
  },
  226,
);
