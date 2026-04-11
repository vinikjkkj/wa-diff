__d(
  "WAWebBulkAddContactsModal.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebApiContact",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebSaveContactAction",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo;
    function _(t) {
      var a = t.chat,
        i = t.onClose,
        l = r("WANullthrows")(a.groupMetadata),
        u = l.participants,
        d = p(
          function () {
            var e = [];
            return (
              u.toArray().forEach(function (t) {
                var n = o(
                  "WAWebChatGroupUtils",
                ).getOneToOneContactFromGroupContact(
                  t.contact.id,
                  "group_info_participant_section_click",
                );
                if (n != null) {
                  var r = o("WAWebContactCollection").ContactCollection.get(n);
                  r != null &&
                    (o("WAWebFrontendContactGetters").getIsMyContact(r) ||
                      e.push(r));
                }
              }),
              e
            );
          },
          [u],
        ),
        _ = p(
          function () {
            var e = new Map();
            return (
              d.forEach(function (t) {
                t.pushname && e.set(t.id.toString(), t.pushname);
              }),
              e
            );
          },
          [d],
        ),
        f = m(
          function (e) {
            var t = _.get(e.toString());
            return t != null && t !== "" ? "~" + t : null;
          },
          [_],
        ),
        g = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.selectedItems,
              r = n;
            if (r.length !== 0)
              try {
                var a = r.map(function (e) {
                  var t,
                    n,
                    r = (t = e.pushname) != null ? t : "",
                    a = e.id.isLid()
                      ? o("WAWebApiContact").getPhoneNumber(e.id)
                      : e.id;
                  return {
                    phoneNumber:
                      (n = a == null ? void 0 : a.user) != null ? n : e.id.user,
                    firstName: r,
                    lastName: "",
                    syncToAddressbook: !1,
                  };
                });
                yield o("WAWebSaveContactAction").saveContactBatchAction(a);
                var l = a.length;
                (o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ '_j{"*":"{number} members added to your contacts.","_1":"1 member added to your contacts."}',
                      [s._plural(l, "number")],
                    ),
                  }),
                ),
                  i());
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to bulk add contacts: ",
                        "",
                      ])),
                    t,
                  )
                  .sendLogs("bulk-add-contacts-from-groups"),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Couldn't add contacts. Please try again.",
                      ),
                    }),
                  ),
                  i());
              }
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        h = s._(/*BTDS*/ "Add to contacts"),
        y = d.length,
        C = m(
          function (e) {
            var t = e.length;
            return s._(/*BTDS*/ "{selectedCount} of {totalCount} selected", [
              s._param("selectedCount", t),
              s._param("totalCount", y),
            ]);
          },
          [y],
        );
      return c.jsx(o("WAWebSelectModal.react").SelectModal, {
        title: h,
        contacts: d,
        listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
        onConfirm: g,
        onBack: i,
        singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType
          .CONFIRM,
        multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
          .FooterType.CONFIRM,
        shouldShowSelectionSummary: !0,
        getSelectionSummary: C,
        enableSelectAll: !0,
        enableSearchBox: !0,
        allowUnknownUsernameContactSearch: !1,
        customSecondaryText: f,
        tsNavigationData: { surface: "unknown", viewName: "bulk-add-contacts" },
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(_, {
          chat: e,
          onClose: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    ((l.openBulkAddContactsModal = f), (l.WAWebBulkAddContactsModal = _));
  },
  226,
);
