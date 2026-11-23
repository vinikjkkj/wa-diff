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
          confirmLabel: s._(/*BTDS*/ ""),
          onConfirm: function () {
            return l(!0);
          },
          onDismiss: function () {
            return l(!1);
          },
          open: !0,
          testid: "contacts-and-groups-save-contacts-confirm",
          title: s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
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
          getSuccessToastText: h,
          onSaved: function () {
            ((r = !0), t());
          },
        }));
    }
    function p(e, t) {
      var n = 0,
        r = o("WAWebContactsAndGroupsOneByOne")
          .runOneByOne(_(e), async function (e) {
            var t = await f(e);
            n += t;
          })
          .then(function () {
            return (
              n === 0 && t(),
              new (o("WAWebActionToast.react").ActionType)(g(n, e.length - n))
            );
          });
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "", [s._plural(e.length, "count")]),
          ),
          pendingAction: r,
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
    async function f(e) {
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
        await o("WAWebSaveContactAction").saveContactBatchAction(t, n),
        t.length + n.length
      );
    }
    function g(e, t) {
      return t === 0
        ? h(e)
        : e === 0
          ? s._(/*BTDS*/ "", [s._plural(t, "count")])
          : s._(/*BTDS*/ "", [
              s._plural(e, "savedCount"),
              s._plural(t, "notSavedCount"),
            ]);
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.getContactsToSave = c),
      (l.saveContactsFromContactsAndGroups = d));
  },
  226,
);
