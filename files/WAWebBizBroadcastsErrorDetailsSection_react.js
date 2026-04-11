__d(
  "WAWebBizBroadcastsErrorDetailsSection.react",
  [
    "fbt",
    "WAWebBizBroadcastsConfirmDeleteDialogLoadable",
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsContactErrorMessage",
    "WAWebBizBroadcastsEditContactDialogLoadable",
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSIconIcEdit.react",
    "WDSIconIcError.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        errorIcon: {
          marginInlineEnd: "xqf2s3x",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.contacts,
        n = e.entryPoint,
        a = e.errorList,
        i = e.onDeleteAllErrorItems,
        l = e.onDeleteErrorItem,
        d = e.onUpdateContact;
      return a.length === 0
        ? null
        : u.jsxs(u.Fragment, {
            children: [
              u.jsx("tbody", {
                children: u.jsx("tr", {
                  children: u.jsxs("td", {
                    colSpan: 4,
                    children: [
                      u.jsx("div", {
                        className:
                          "x3x0x6p xjm9jq1 xefnzgg x6pxu1d xd6izgl x1380le5",
                      }),
                      u.jsxs("div", {
                        className:
                          "x6s0dn4 x78zum5 x1qughib xdqhqc9 x1phvje8 xcldk2z",
                        children: [
                          u.jsxs("div", {
                            className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g",
                            children: [
                              u.jsxs(r("WDSText.react"), {
                                type: "Body2",
                                colorName: "secondaryNegativeEmphasized",
                                children: [
                                  u.jsx(r("WDSIconIcError.react"), {
                                    displayInline: !0,
                                    xstyle: c.errorIcon,
                                  }),
                                  s._(
                                    /*BTDS*/ '_j{"*":{"*":"{number_of_recipients} recipients weren\\u2019t imported"},"_1":{"_1":"1 recipient wasn\\u2019t imported"}}',
                                    [
                                      s._plural(
                                        a.length,
                                        "number_of_recipients",
                                      ),
                                      s._plural(a.length),
                                    ],
                                  ),
                                ],
                              }),
                              u.jsx(r("WDSText.react"), {
                                type: "Body2",
                                colorName: "contentDeemphasized",
                                children: s._(
                                  /*BTDS*/ "Update recipient errors before saving your audience.",
                                ),
                              }),
                            ],
                          }),
                          u.jsx(r("WDSButton.react"), {
                            label: s._(/*BTDS*/ "Delete all errors"),
                            size: "small",
                            type: "destructive",
                            variant: "outline",
                            onPress: function () {
                              o("WAWebModalManager").ModalManager.open(
                                u.jsx(
                                  o(
                                    "WAWebBizBroadcastsConfirmDeleteDialogLoadable",
                                  )
                                    .WAWebBizBroadcastsConfirmDeleteDialogLoadable,
                                  {
                                    entryPoint: n,
                                    onPrimaryPress: function () {
                                      (o(
                                        "WAWebBusinessBroadcastUserJourneyLogger",
                                      ).BusinessBroadcastUserJourneyLogger.deleteAllErrorContactsConfirmClicked(
                                        n,
                                      ),
                                        i(),
                                        o(
                                          "WAWebModalManager",
                                        ).ModalManager.close());
                                    },
                                    onSecondaryPress: function () {
                                      (o(
                                        "WAWebBusinessBroadcastUserJourneyLogger",
                                      ).BusinessBroadcastUserJourneyLogger.deleteAllErrorContactsCancelClicked(
                                        n,
                                      ),
                                        o(
                                          "WAWebModalManager",
                                        ).ModalManager.close());
                                    },
                                  },
                                ),
                              );
                            },
                            testid: void 0,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              u.jsx("tbody", {
                children: a.map(function (e, a) {
                  return u.jsxs(
                    "tr",
                    {
                      children: [
                        u.jsx("td", {
                          className: "xdx6fka",
                          children: u.jsx(
                            r("WAWebBizBroadcastsContactChatCell.react"),
                            { rowData: e.rowData, index: a },
                          ),
                        }),
                        u.jsx("td", {
                          className: "xxymvpz",
                          children: u.jsx(r("WDSText.react"), {
                            type: "Body1",
                            colorName: "accent",
                            maxLines: 1,
                            children: o(
                              "WAWebBizBroadcastsTemplateParsingUtils",
                            ).extractPhone(e.rowData),
                          }),
                        }),
                        u.jsx("td", {
                          className: "xxymvpz",
                          children:
                            (e == null ? void 0 : e.errorType) &&
                            u.jsx(r("WDSText.react"), {
                              type: "Body3",
                              colorName: "secondaryNegativeEmphasized",
                              children: r(
                                "WAWebBizBroadcastsContactErrorMessage",
                              )(e == null ? void 0 : e.errorType),
                            }),
                        }),
                        u.jsx("td", {
                          className: "xxymvpz",
                          children: u.jsxs("div", {
                            className: "x78zum5 x7v6yn8",
                            children: [
                              u.jsx(r("WDSButton.react"), {
                                size: "medium",
                                variant: "borderless",
                                Icon: r("WDSIconIcEdit.react"),
                                onPress: function () {
                                  o("WAWebModalManager").ModalManager.open(
                                    u.jsx(
                                      o(
                                        "WAWebBizBroadcastsEditContactDialogLoadable",
                                      )
                                        .WAWebBizBroadcastsEditContactDialogLoadable,
                                      {
                                        entryPoint: n,
                                        validContactsData: t,
                                        item: e,
                                        onSave: function (r) {
                                          var t = babelHelpers.extends({}, r, {
                                            rowIndex: e.rowIndex,
                                          });
                                          (d(t, a),
                                            o(
                                              "WAWebBusinessBroadcastUserJourneyLogger",
                                            ).BusinessBroadcastUserJourneyLogger.editContactConfirmClicked(
                                              n,
                                            ),
                                            o(
                                              "WAWebModalManager",
                                            ).ModalManager.close());
                                        },
                                        onCancel: function () {
                                          (o(
                                            "WAWebBusinessBroadcastUserJourneyLogger",
                                          ).BusinessBroadcastUserJourneyLogger.editContactCancelClicked(
                                            n,
                                          ),
                                            o(
                                              "WAWebModalManager",
                                            ).ModalManager.close());
                                        },
                                      },
                                    ),
                                  );
                                },
                              }),
                              u.jsx(r("WDSButton.react"), {
                                size: "medium",
                                variant: "borderless",
                                Icon: r("WDSIconIcDelete.react"),
                                onPress: function () {
                                  return l(e);
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    String(e.rowData.phone) + "-" + a,
                  );
                }),
              }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
