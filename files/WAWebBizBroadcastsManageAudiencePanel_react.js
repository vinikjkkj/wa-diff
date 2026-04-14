__d(
  "WAWebBizBroadcastsManageAudiencePanel.react",
  [
    "fbt",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBizBroadcastsDialog.react",
    "WAWebBizBroadcastsDrawerReducer",
    "WAWebBizBroadcastsErrorDetailsSection.react",
    "WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react",
    "WAWebBizBroadcastsSuccessfulContacts.react",
    "WAWebBizBroadcastsTypedError",
    "WAWebBroadcastAudienceNameField.react",
    "WAWebBroadcastListAction",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawerManager",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "countWhere",
    "formatDate",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useReducer,
      p = c.useState;
    function _(e) {
      var t = e.entryPoint,
        a = e.errorList,
        i = e.validContactsData,
        l = m(o("WAWebBizBroadcastsDrawerReducer").reducer, {
          errorList: a,
          validContactsData: i,
        }),
        c = l[0],
        _ = l[1];
      d(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.importedContactWizardViewed(
            {
              num_duplicate_contacts: r("countWhere")(a, function (e) {
                return (
                  e.errorType ===
                  o("WAWebBizBroadcastsTypedError").PhoneError.DUPLICATE
                );
              }),
              num_error_contacts: a.length,
              num_invalid_contacts: r("countWhere")(a, function (e) {
                return (
                  e.errorType ===
                  o("WAWebBizBroadcastsTypedError").PhoneError.INVALID
                );
              }),
              num_non_wa_contacts: r("countWhere")(a, function (e) {
                return (
                  e.errorType ===
                  o("WAWebBizBroadcastsTypedError").PhoneError.NOT_WHATSAPP_USER
                );
              }),
              num_total_contacts: i.length + a.length,
            },
            t,
          );
        },
        [t, i, a],
      );
      var f = p(function () {
          var e = r("formatDate")(
            Date.now() / 1e3,
            r("formatDate").DEFAULT_FORMAT,
          );
          return s
            ._(/*BTDS*/ "Broadcast audience {creation-date}", [
              s._param("creation-date", e),
            ])
            .toString();
        }),
        g = f[0],
        h = f[1],
        y = p(null),
        C = y[0],
        b = y[1],
        v = c.errorList,
        S = c.validContactsData;
      function R() {
        (C == null
          ? o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importedContactWizardCancelClicked(
              t,
            )
          : o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.contactImportSuccessCancelClicked(
              t,
            ),
          o("WAWebDrawerManager").DrawerManager.closeDrawerMid());
      }
      var L;
      C != null
        ? (L = u.jsx(
            r("WAWebBizBroadcastsManageAudienceListCreationSuccessPanel.react"),
            {
              broadcastListName: C.name,
              broadcastListRecipientCount: C.recipientCount,
            },
          ))
        : (L = u.jsxs(u.Fragment, {
            children: [
              u.jsx("div", {
                className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
                children: u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
                  defaultValue: g,
                  onFocus: function () {
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.importedContactListNameEntered(
                      t,
                    );
                  },
                  onValueChange: h,
                }),
              }),
              u.jsxs("table", {
                className: "xh8yej3",
                children: [
                  u.jsx(r("WAWebBizBroadcastsErrorDetailsSection.react"), {
                    errorList: v,
                    contacts: S,
                    entryPoint: t,
                    onDeleteErrorItem: function (n) {
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.errorContactDeleteClicked(
                        t,
                      ),
                        _({
                          payload: { errorItem: n },
                          type: "DELETE_ERROR_ITEM",
                        }));
                    },
                    onDeleteAllErrorItems: function () {
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.allErrorContactsDeleteClicked(
                        t,
                      ),
                        _({ type: "DELETE_ALL_ERROR_ITEMS" }));
                    },
                    onUpdateContact: function (n, r) {
                      (o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.errorContactEditClicked(
                        t,
                      ),
                        _({
                          payload: { editedContact: n, originalIndex: r },
                          type: "SAVE_EDITED_CONTACT",
                        }));
                    },
                  }),
                  u.jsx(r("WAWebBizBroadcastsSuccessfulContacts.react"), {
                    contacts: S,
                    actions: function (n) {
                      return u.jsx(r("WDSButton.react"), {
                        size: "medium",
                        variant: "borderless",
                        Icon: r("WDSIconIcDelete.react"),
                        onPress: function () {
                          (o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.contactDeleteClicked(
                            t,
                          ),
                            _({
                              payload: { contact: n },
                              type: "DELETE_CONTACT",
                            }));
                        },
                      });
                    },
                  }),
                ],
              }),
            ],
          }));
      var E =
        v.length > 0 ||
        g.length === 0 ||
        g.length >
          o("WAWebBizBroadcastsAudienceUtils").MAX_AUDIENCE_NAME_LENGTH;
      return u.jsx(r("WAWebBizBroadcastsDialog.react"), {
        title: s._(/*BTDS*/ "Broadcast audience"),
        onClose: R,
        testid: void 0,
        primaryAction:
          C == null &&
          u.jsx(r("WDSTooltip.react"), {
            disabled: !E,
            label: s._(
              /*BTDS*/ "You\u2019ll need to update recipient errors before saving your audience.",
            ),
            children: u.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Save audience"),
              variant: "filled",
              onPress: function () {
                var e = function (n) {
                  (b(n),
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.contactImportSuccessViewed(
                      {
                        num_error_contacts: v.length,
                        num_total_contacts: S.length + v.length,
                      },
                      t,
                    ));
                };
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.importedContactsSaveClicked(
                  {
                    num_error_contacts: v.length,
                    num_total_contacts: S.length + v.length,
                  },
                  t,
                );
                var r = S.map(function (e) {
                  return { lid: e.lid, phone: e.phone };
                });
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var n = yield o(
                      "WAWebBroadcastListAction",
                    ).createBroadcastListAction(r, g);
                    (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                      S.length,
                      "success",
                      void 0,
                      t,
                    ),
                      e({
                        audienceExpression: o("WAWebAudienceExpressionTypes")
                          .DEFAULT_AUDIENCE_EXPRESSION,
                        broadcastJid: n,
                        lastBroadcastTimestamp: null,
                        name: g,
                        recipientCount: S.length,
                      }));
                  } catch (e) {
                    var a = e instanceof Error ? e.message : "unknown";
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                      S.length,
                      "failure",
                      a,
                      t,
                    );
                  }
                })();
              },
              testid: void 0,
              disabled: E,
            }),
          }),
        children: u.jsx("div", {
          className: "x1p57kb1 xvpt6g3 x1tvm86q x1hqvyuz x25e6zw xpsqkbl",
          children: L,
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
