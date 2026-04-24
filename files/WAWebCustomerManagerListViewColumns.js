__d(
  "WAWebCustomerManagerListViewColumns",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerManagerActionsCell.react",
    "WAWebCustomerManagerCustomerCell.react",
    "WAWebCustomerManagerListCell.react",
    "WAWebCustomerManagerNotesCell.react",
    "WAWebCustomerManagerSMBUserJourneyLogger",
    "WAWebFrontendContactGetters",
    "WAWebLeadStageChip.react",
    "WAWebListsGatingUtils",
    "WDSIconIcArrowDropDown.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e, t, n, o) {
      return function () {
        var a = n != null && n.key === t ? n.direction : null;
        return u.jsxs("div", {
          className:
            "x1ypdohk x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1tiyuxx x1nbhmlj",
          role: "button",
          tabIndex: 0,
          onClick: function () {
            return o(t);
          },
          onKeyDown: function (n) {
            (n.key === "Enter" || n.key === " ") && (n.preventDefault(), o(t));
          },
          children: [
            u.jsx(r("WDSText.react"), {
              maxLines: 1,
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: e,
            }),
            a != null &&
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "x78zum5" },
                    1: { className: "x78zum5 x19jd1h0" },
                  }[(a === "asc") << 0],
                  {
                    children: u.jsx(r("WDSIconIcArrowDropDown.react"), {
                      width: 12,
                      height: 12,
                    }),
                  },
                ),
              ),
          ],
        });
      };
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chatJid,
        a;
      t[0] !== n
        ? ((a = o("WAWebContactCollection").ContactCollection.get(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i
        ? ((l =
            i != null
              ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(i)
                  .displayName
              : "\u2014"),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        c;
      return (
        t[4] !== s
          ? ((c = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: s,
            })),
            (t[4] = s),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    function p(e) {
      if (e == null || e === 0) return "\u2014";
      try {
        return new Intl.DateTimeFormat(void 0, {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(e * 1e3);
      } catch (e) {
        return "\u2014";
      }
    }
    var _ = ["customer", "actions"],
      f = [
        "customer",
        "phone",
        "leadStage",
        "list",
        "acquisitionSource",
        "email",
        "lastMessage",
        "lastOrder",
        "notes",
        "actions",
      ],
      g = f;
    function h(e) {
      return e === "customer"
        ? s._(/*BTDS*/ "Customer")
        : e === "phone"
          ? s._(/*BTDS*/ "Phone number")
          : e === "email"
            ? s._(/*BTDS*/ "Email")
            : e === "leadStage"
              ? s._(/*BTDS*/ "Lead stage")
              : e === "list"
                ? o("WAWebListsGatingUtils").isListsEnabled()
                  ? s._(/*BTDS*/ "List")
                  : s._(/*BTDS*/ "Label")
                : e === "acquisitionSource"
                  ? s._(/*BTDS*/ "Acquisition source")
                  : e === "lastMessage"
                    ? s._(/*BTDS*/ "Last message")
                    : e === "lastOrder"
                      ? s._(/*BTDS*/ "Last order")
                      : e === "notes"
                        ? s._(/*BTDS*/ "Notes")
                        : e === "actions"
                          ? s._(/*BTDS*/ "Actions")
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  e,
                              );
                            })();
    }
    function y(e, t, n, a) {
      var i = function (t, r) {
          return a != null ? d(t, r, n, a) : void 0;
        },
        l = s._(/*BTDS*/ "Customer");
      return [
        {
          cell: function (t) {
            return u.jsx(r("WAWebCustomerManagerCustomerCell.react"), {
              item: t.item,
            });
          },
          header: l,
          key: "customer",
          renderHeader: i(l, "customer"),
          sortable: !0,
          width: {
            options: { minWidth: 200 },
            type: "proportional",
            value: 18,
          },
        },
        {
          cell: function (t) {
            return u.jsx(m, { chatJid: t.item.chatJid });
          },
          header: s._(/*BTDS*/ "Phone number"),
          key: "phone",
          renderHeader: i(s._(/*BTDS*/ "Phone number"), "phone"),
          sortable: !0,
          width: {
            options: { minWidth: 180 },
            type: "proportional",
            value: 10,
          },
        },
        {
          cell: function (t) {
            return u.jsx("div", {
              className: "x14ba6vc xrw3huk",
              children: u.jsx(r("WAWebLeadStageChip.react"), {
                customer: t.item,
                onPillClick: function (t) {
                  return o(
                    "WAWebCustomerManagerSMBUserJourneyLogger",
                  ).CustomerManagerUserJourneyLogger.clickRowLeadStagePill(t);
                },
                onStageChange: function (n, r) {
                  return o(
                    "WAWebCustomerDataFieldSaver",
                  ).handleLeadStageTransition(t.item.chatJid, t.item, n, r);
                },
                showNoneOption: !0,
                testid: "customer-manager-lead-stage-cell",
              }),
            });
          },
          header: s._(/*BTDS*/ "Lead stage"),
          key: "leadStage",
          renderHeader: i(s._(/*BTDS*/ "Lead stage"), "leadStage"),
          sortable: !0,
          width: { options: { minWidth: 160 }, type: "proportional", value: 8 },
        },
        {
          cell: function (t) {
            return u.jsx(r("WAWebCustomerManagerListCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: o("WAWebListsGatingUtils").isListsEnabled()
            ? s._(/*BTDS*/ "List")
            : s._(/*BTDS*/ "Label"),
          key: "list",
          renderHeader: i(
            o("WAWebListsGatingUtils").isListsEnabled()
              ? s._(/*BTDS*/ "List")
              : s._(/*BTDS*/ "Label"),
            "list",
          ),
          sortable: !0,
          width: { options: { minWidth: 150 }, type: "proportional", value: 7 },
        },
        {
          cell: function (t) {
            var e = t.item.acquisitionSource,
              n =
                e != null
                  ? o(
                      "WAWebAcquisitionSourceNames",
                    ).getAcquisitionSourceDisplayName(e)
                  : null;
            return n != null
              ? u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: n,
                })
              : u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  maxLines: 1,
                  children: o(
                    "WAWebAcquisitionSourceNames",
                  ).getUnknownAcquisitionSourceLabel(),
                });
          },
          header: s._(/*BTDS*/ "Acquisition source"),
          key: "acquisitionSource",
          renderHeader: i(
            s._(/*BTDS*/ "Acquisition source"),
            "acquisitionSource",
          ),
          sortable: !0,
          width: {
            options: { minWidth: 170 },
            type: "proportional",
            value: 12,
          },
        },
        {
          cell: function (t) {
            var e;
            return u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: (e = t.item.email) != null ? e : "\u2014",
            });
          },
          header: s._(/*BTDS*/ "Email"),
          key: "email",
          renderHeader: i(s._(/*BTDS*/ "Email"), "email"),
          sortable: !0,
          width: {
            options: { minWidth: 200 },
            type: "proportional",
            value: 10,
          },
        },
        {
          cell: function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(t.item.chatJid);
            return u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: p(e == null ? void 0 : e.t),
            });
          },
          header: s._(/*BTDS*/ "Last message"),
          key: "lastMessage",
          renderHeader: i(s._(/*BTDS*/ "Last message"), "lastMessage"),
          sortable: !0,
          width: { options: { minWidth: 150 }, type: "proportional", value: 8 },
        },
        {
          cell: function (t) {
            return u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: p(t.item.lastOrder),
            });
          },
          header: s._(/*BTDS*/ "Last order"),
          key: "lastOrder",
          renderHeader: i(s._(/*BTDS*/ "Last order"), "lastOrder"),
          sortable: !0,
          width: { options: { minWidth: 140 }, type: "proportional", value: 7 },
        },
        {
          cell: function (t) {
            return u.jsx(r("WAWebCustomerManagerNotesCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: s._(/*BTDS*/ "Notes"),
          key: "notes",
          width: {
            options: { minWidth: 200 },
            type: "proportional",
            value: 25,
          },
        },
        {
          cell: function (o) {
            return u.jsx(r("WAWebCustomerManagerActionsCell.react"), {
              chatJid: o.item.chatJid,
              onChatClick: e,
              onDelete: t,
            });
          },
          key: "actions",
          width: { type: "pixel", px: 80 },
        },
      ];
    }
    ((l.ALWAYS_VISIBLE_COLUMNS = _),
      (l.ALL_COLUMN_KEYS = f),
      (l.DEFAULT_VISIBLE_COLUMNS = g),
      (l.getColumnLabel = h),
      (l.getCustomerManagerListColumns = y));
  },
  226,
);
