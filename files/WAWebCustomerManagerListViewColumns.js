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
    "WAWebCustomerManagerListViewColumnWidths",
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
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e, t, n) {
      return n == null || b.includes(e)
        ? null
        : {
            draggable: !0,
            onDragStart: function (r) {
              (r.dataTransfer.setData("text/plain", e),
                (r.dataTransfer.effectAllowed = "move"),
                t(!0));
            },
            onDragEnd: function () {
              t(!1);
            },
            onDragOver: function (t) {
              (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
            },
            onDrop: function (r) {
              r.preventDefault();
              var t = r.dataTransfer.getData("text/plain"),
                o = v.find(function (e) {
                  return e === t;
                });
              o != null && o !== e && n(o, e);
            },
          };
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.columnKey,
        a = e.label,
        i = e.onColumnReorder,
        l = e.onSort,
        s = e.sortConfig,
        c = m(!1),
        d = c[0],
        _ = c[1],
        f;
      t[0] !== n || t[1] !== i
        ? ((f = p(n, _, i)), (t[0] = n), (t[1] = i), (t[2] = f))
        : (f = t[2]);
      var g = f,
        h = s != null && s.key === n ? s.direction : null,
        y;
      t[3] !== g || t[4] !== d
        ? ((y = {
            0: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1tiyuxx x1nbhmlj x1ypdohk",
            },
            2: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1nbhmlj x9f619 x1jm3nie xn3w4p2 xe3kor7 x15w1vwp x1olz2oy x1p57kb1 x1phvje8 xcldk2z",
            },
            1: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1tiyuxx x1nbhmlj x1ypdohk xti2d7y",
            },
            3: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1nbhmlj x9f619 x1jm3nie xn3w4p2 xe3kor7 x15w1vwp x1olz2oy x1p57kb1 x1phvje8 xcldk2z xti2d7y",
            },
          }[((g != null) << 1) | (!!d << 0)]),
          (t[3] = g),
          (t[4] = d),
          (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== g
        ? ((C = g != null ? g : {}), (t[6] = g), (t[7] = C))
        : (C = t[7]);
      var b, v;
      t[8] !== n || t[9] !== l
        ? ((b = function () {
            return l(n);
          }),
          (v = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), l(n));
          }),
          (t[8] = n),
          (t[9] = l),
          (t[10] = b),
          (t[11] = v))
        : ((b = t[10]), (v = t[11]));
      var S;
      t[12] !== a
        ? ((S = u.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: a,
          })),
          (t[12] = a),
          (t[13] = S))
        : (S = t[13]);
      var R;
      t[14] !== h
        ? ((R =
            h != null &&
            u.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x78zum5" },
                  1: { className: "x78zum5 x19jd1h0" },
                }[(h === "asc") << 0],
                {
                  children: u.jsx(r("WDSIconIcArrowDropDown.react"), {
                    width: 12,
                    height: 12,
                  }),
                },
              ),
            )),
          (t[14] = h),
          (t[15] = R))
        : (R = t[15]);
      var L;
      return (
        t[16] !== y ||
        t[17] !== C ||
        t[18] !== b ||
        t[19] !== v ||
        t[20] !== S ||
        t[21] !== R
          ? ((L = u.jsxs(
              "div",
              babelHelpers.extends({}, y, { role: "button", tabIndex: 0 }, C, {
                onClick: b,
                onKeyDown: v,
                children: [S, R],
              }),
            )),
            (t[16] = y),
            (t[17] = C),
            (t[18] = b),
            (t[19] = v),
            (t[20] = S),
            (t[21] = R),
            (t[22] = L))
          : (L = t[22]),
        L
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.columnKey,
        a = e.label,
        i = e.onColumnReorder,
        l = m(!1),
        s = l[0],
        c = l[1],
        d;
      t[0] !== n || t[1] !== i
        ? ((d = p(n, c, i)), (t[0] = n), (t[1] = i), (t[2] = d))
        : (d = t[2]);
      var _ = d,
        f;
      t[3] !== _ || t[4] !== s
        ? ((f = {
            0: {
              className: "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1tiyuxx x1nbhmlj",
            },
            2: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1nbhmlj x9f619 x1jm3nie xn3w4p2 xe3kor7 x15w1vwp x1olz2oy x1p57kb1 x1phvje8 xcldk2z",
            },
            1: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1tiyuxx x1nbhmlj xti2d7y",
            },
            3: {
              className:
                "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1nbhmlj x9f619 x1jm3nie xn3w4p2 xe3kor7 x15w1vwp x1olz2oy x1p57kb1 x1phvje8 xcldk2z xti2d7y",
            },
          }[((_ != null) << 1) | (!!s << 0)]),
          (t[3] = _),
          (t[4] = s),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== _
        ? ((g = _ != null ? _ : {}), (t[6] = _), (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== a
        ? ((h = u.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: a,
          })),
          (t[8] = a),
          (t[9] = h))
        : (h = t[9]);
      var y;
      return (
        t[10] !== f || t[11] !== g || t[12] !== h
          ? ((y = u.jsx(
              "div",
              babelHelpers.extends({}, f, g, { children: h }),
            )),
            (t[10] = f),
            (t[11] = g),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    function g(e, t, n, r, o) {
      return function () {
        return u.jsx(_, {
          label: e,
          columnKey: t,
          sortConfig: n,
          onSort: r,
          onColumnReorder: o,
        });
      };
    }
    function h(e, t, n) {
      return function () {
        return u.jsx(f, { label: e, columnKey: t, onColumnReorder: n });
      };
    }
    function y(e) {
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
    function C(e) {
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
    var b = ["customer", "actions"],
      v = [
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
      S = v;
    function R(e) {
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
                  ? s._(/*BTDS*/ "Source")
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
    function L(e, t, n, a, i) {
      var l = function (t, r) {
          return a != null ? g(t, r, n, a, i) : void 0;
        },
        c = s._(/*BTDS*/ "Customer");
      return [
        {
          cell: function (t) {
            return u.jsx(r("WAWebCustomerManagerCustomerCell.react"), {
              item: t.item,
            });
          },
          header: c,
          key: "customer",
          renderHeader: l(c, "customer"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.customer,
        },
        {
          cell: function (t) {
            return u.jsx(y, { chatJid: t.item.chatJid });
          },
          header: s._(/*BTDS*/ "Phone number"),
          key: "phone",
          renderHeader: l(s._(/*BTDS*/ "Phone number"), "phone"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.phone,
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
                  (o(
                    "WAWebCustomerManagerSMBUserJourneyLogger",
                  ).CustomerManagerUserJourneyLogger.editLeadStage(
                    r,
                    n,
                    "list_row",
                  ),
                    o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(
                      t.item.chatJid,
                      t.item,
                      n,
                      r,
                    ));
                },
                showNoneOption: !0,
                testid: "customer-manager-lead-stage-cell",
              }),
            });
          },
          header: s._(/*BTDS*/ "Lead stage"),
          key: "leadStage",
          renderHeader: l(s._(/*BTDS*/ "Lead stage"), "leadStage"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.leadStage,
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
          renderHeader: l(
            o("WAWebListsGatingUtils").isListsEnabled()
              ? s._(/*BTDS*/ "List")
              : s._(/*BTDS*/ "Label"),
            "list",
          ),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.list,
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
          header: s._(/*BTDS*/ "Source"),
          key: "acquisitionSource",
          renderHeader: l(s._(/*BTDS*/ "Source"), "acquisitionSource"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.acquisitionSource,
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
          renderHeader: l(s._(/*BTDS*/ "Email"), "email"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.email,
        },
        {
          cell: function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(t.item.chatJid);
            return u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: C(e == null ? void 0 : e.t),
            });
          },
          header: s._(/*BTDS*/ "Last message"),
          key: "lastMessage",
          renderHeader: l(s._(/*BTDS*/ "Last message"), "lastMessage"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.lastMessage,
        },
        {
          cell: function (t) {
            return u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: C(t.item.lastOrder),
            });
          },
          header: s._(/*BTDS*/ "Last order"),
          key: "lastOrder",
          renderHeader: l(s._(/*BTDS*/ "Last order"), "lastOrder"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.lastOrder,
        },
        {
          cell: function (t) {
            return u.jsx(r("WAWebCustomerManagerNotesCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: s._(/*BTDS*/ "Notes"),
          key: "notes",
          renderHeader: h(s._(/*BTDS*/ "Notes"), "notes", i),
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.notes,
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
          stickyEnd: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.actions,
        },
      ];
    }
    ((l.ALWAYS_VISIBLE_COLUMNS = b),
      (l.ALL_COLUMN_KEYS = v),
      (l.DEFAULT_VISIBLE_COLUMNS = S),
      (l.getColumnLabel = R),
      (l.getCustomerManagerListColumns = L));
  },
  226,
);
