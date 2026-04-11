__d(
  "WAWebStatusSelectContactsModal.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebStatusPrivacyContactsUtils",
    "WAWebStatusPrivacySettingAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "react",
    "useWAWebFilteredContacts",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = n("$InternalEnum")({
        AllowList: "allow-list",
        DenyList: "deny-list",
      }),
      m = 64e3;
    function p(t) {
      var a = t.list,
        i = t.onBack,
        l = t.onConfirm,
        u = t.onDismiss,
        p = t.setting,
        g = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts();
      function h(e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (
          (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            try {
              var n = o(
                "WAWebStatusPrivacyContactsUtils",
              ).convertPrivacyListContactsToWids(t);
              switch (p) {
                case d.AllowList:
                  yield r(
                    "WAWebStatusPrivacySettingAction",
                  ).setStatusPrivacyAllowList(n);
                  break;
                case d.DenyList:
                  yield r(
                    "WAWebStatusPrivacySettingAction",
                  ).setStatusPrivacyDenyList(n);
                  break;
              }
              l(n);
            } catch (t) {
              var a = r("getErrorSafe")(t);
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "error: ",
                      "",
                    ])),
                  String(a.stack),
                )
                .sendLogs(
                  "SelectStatusContactsFlow:failed to set privacy settings",
                ),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Failed to update privacy settings. Please try again.",
                    ),
                  }),
                ));
            }
            u != null ? u() : o("WAWebModalManager").ModalManager.close();
          })),
          y.apply(this, arguments)
        );
      }
      var C = r("compactMap")(a, function (e) {
          var t = g
            ? o("WAWebLidMigrationUtils").toLid(e)
            : o("WAWebLidMigrationUtils").toPn(e);
          return t
            ? o("WAWebContactCollection").ContactCollection.gadd(t)
            : null;
        }),
        b = r("useWAWebFilteredContacts")(),
        v = Array.from(new Set([].concat(b, C)));
      return c.jsx(o("WAWebSelectModal.react").SelectModal, {
        title: _(p),
        onBack: i,
        onConfirm: function (t) {
          var e = t.selectedItems;
          h(e);
        },
        getInitialItems: function () {
          return C;
        },
        listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
        maxItems: m,
        singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType
          .CONFIRM,
        multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
          .FooterType.CONFIRM,
        contacts: v,
        getSelectionSummary: function (t) {
          return f(p, t);
        },
        enableSelectAll: !0,
        activeWithoutSelection: p === d.DenyList,
        tsNavigationData: {
          surface: "unknown",
          viewName: "status-select-contacts",
        },
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      switch (e) {
        case d.AllowList:
          return s._(/*BTDS*/ "Only share with...");
        case d.DenyList:
          return s._(/*BTDS*/ "My contacts except...");
      }
    }
    function f(e, t) {
      var n = t.length;
      switch (e) {
        case d.AllowList:
          return s._(
            /*BTDS*/ '_j{"*":"{allow-contacts} contacts included","_1":"1 contact included"}',
            [s._plural(n, "allow-contacts")],
          );
        case d.DenyList:
          return s._(
            /*BTDS*/ '_j{"*":"{allow-contacts} contacts excluded","_1":"1 contact excluded"}',
            [s._plural(n, "allow-contacts")],
          );
      }
    }
    ((l.StatusPrivacySettingListType = d),
      (l.MAX_CONTACTS = m),
      (l.SelectStatusContactsModal = p));
  },
  226,
);
