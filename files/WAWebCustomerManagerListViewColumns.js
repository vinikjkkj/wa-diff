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
    "WDSFocusStateStyles",
    "WDSIconIcArrowDropDown.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        wrapper: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          columnGap: "x1ned7t2",
          maxWidth: "x193iq5w",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
        sortable: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        draggableExpand: {
          boxSizing: "x9f619",
          cursor: "x1jm3nie",
          height: "xn3w4p2",
          marginTop: "xe3kor7",
          marginInlineStart: "x15w1vwp",
          marginInlineEnd: "x1olz2oy",
          marginLeft: null,
          marginRight: null,
          paddingTop: "x1p57kb1",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        dragging: { opacity: "xti2d7y", $$css: !0 },
      };
    function f(e, t, n) {
      return n == null || S.includes(e)
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
                o = R.find(function (e) {
                  return e === t;
                });
              o != null && o !== e && n(o, e);
            },
          };
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t.columnKey,
        i = t.label,
        l = t.onColumnReorder,
        s = t.onSort,
        u = t.sortConfig,
        d = p(!1),
        m = d[0],
        g = d[1],
        h;
      n[0] !== a || n[1] !== l
        ? ((h = f(a, g, l)), (n[0] = a), (n[1] = l), (n[2] = h))
        : (h = n[2]);
      var y = h,
        C = u != null && u.key === a ? u.direction : null,
        b;
      n[3] !== y || n[4] !== m
        ? ((b = (e || (e = r("stylex"))).props(
            _.wrapper,
            _.sortable,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            y != null && _.draggableExpand,
            m && _.dragging,
          )),
          (n[3] = y),
          (n[4] = m),
          (n[5] = b))
        : (b = n[5]);
      var v;
      n[6] !== y
        ? ((v = y != null ? y : {}), (n[6] = y), (n[7] = v))
        : (v = n[7]);
      var S, R;
      n[8] !== a || n[9] !== s
        ? ((S = function () {
            return s(a);
          }),
          (R = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), s(a));
          }),
          (n[8] = a),
          (n[9] = s),
          (n[10] = S),
          (n[11] = R))
        : ((S = n[10]), (R = n[11]));
      var L;
      n[12] !== i
        ? ((L = c.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (n[12] = i),
          (n[13] = L))
        : (L = n[13]);
      var E;
      n[14] !== C
        ? ((E =
            C != null &&
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x78zum5" },
                  1: { className: "x78zum5 x19jd1h0" },
                }[(C === "asc") << 0],
                {
                  children: c.jsx(r("WDSIconIcArrowDropDown.react"), {
                    width: 12,
                    height: 12,
                  }),
                },
              ),
            )),
          (n[14] = C),
          (n[15] = E))
        : (E = n[15]);
      var k;
      return (
        n[16] !== b ||
        n[17] !== v ||
        n[18] !== S ||
        n[19] !== R ||
        n[20] !== L ||
        n[21] !== E
          ? ((k = c.jsxs(
              "div",
              babelHelpers.extends({}, b, { role: "button", tabIndex: 0 }, v, {
                onClick: S,
                onKeyDown: R,
                children: [L, E],
              }),
            )),
            (n[16] = b),
            (n[17] = v),
            (n[18] = S),
            (n[19] = R),
            (n[20] = L),
            (n[21] = E),
            (n[22] = k))
          : (k = n[22]),
        k
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.columnKey,
        a = e.label,
        i = e.onColumnReorder,
        l = p(!1),
        s = l[0],
        u = l[1],
        d;
      t[0] !== n || t[1] !== i
        ? ((d = f(n, u, i)), (t[0] = n), (t[1] = i), (t[2] = d))
        : (d = t[2]);
      var m = d,
        _;
      t[3] !== m || t[4] !== s
        ? ((_ = {
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
          }[((m != null) << 1) | (!!s << 0)]),
          (t[3] = m),
          (t[4] = s),
          (t[5] = _))
        : (_ = t[5]);
      var g;
      t[6] !== m
        ? ((g = m != null ? m : {}), (t[6] = m), (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== a
        ? ((h = c.jsx(r("WDSText.react"), {
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
        t[10] !== _ || t[11] !== g || t[12] !== h
          ? ((y = c.jsx(
              "div",
              babelHelpers.extends({}, _, g, { children: h }),
            )),
            (t[10] = _),
            (t[11] = g),
            (t[12] = h),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    function y(e, t, n, r, o) {
      return function () {
        return c.jsx(g, {
          label: e,
          columnKey: t,
          sortConfig: n,
          onSort: r,
          onColumnReorder: o,
        });
      };
    }
    function C(e, t, n) {
      return function () {
        return c.jsx(h, { label: e, columnKey: t, onColumnReorder: n });
      };
    }
    function b(e) {
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
        u;
      return (
        t[4] !== s
          ? ((u = c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: s,
            })),
            (t[4] = s),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function v(e) {
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
    var S = ["customer", "actions"],
      R = [
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
      L = R;
    function E(e) {
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
    function k(e, t, n, a, i) {
      var l = function (t, r) {
          return a != null ? y(t, r, n, a, i) : void 0;
        },
        u = s._(/*BTDS*/ "Customer");
      return [
        {
          cell: function (t) {
            return c.jsx(r("WAWebCustomerManagerCustomerCell.react"), {
              item: t.item,
            });
          },
          header: u,
          key: "customer",
          renderHeader: l(u, "customer"),
          sortable: !0,
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.customer,
        },
        {
          cell: function (t) {
            return c.jsx(b, { chatJid: t.item.chatJid });
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
            return c.jsx("div", {
              className: "x14ba6vc xrw3huk",
              children: c.jsx(r("WAWebLeadStageChip.react"), {
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
            return c.jsx(r("WAWebCustomerManagerListCell.react"), {
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
              ? c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: n,
                })
              : c.jsx(r("WDSText.react"), {
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
            return c.jsx(r("WDSText.react"), {
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
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: v(e == null ? void 0 : e.t),
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
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: v(t.item.lastOrder),
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
            return c.jsx(r("WAWebCustomerManagerNotesCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: s._(/*BTDS*/ "Notes"),
          key: "notes",
          renderHeader: C(s._(/*BTDS*/ "Notes"), "notes", i),
          width: o("WAWebCustomerManagerListViewColumnWidths")
            .customerManagerColumnWidths.notes,
        },
        {
          cell: function (o) {
            return c.jsx(r("WAWebCustomerManagerActionsCell.react"), {
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
    ((l.ALWAYS_VISIBLE_COLUMNS = S),
      (l.ALL_COLUMN_KEYS = R),
      (l.DEFAULT_VISIBLE_COLUMNS = L),
      (l.getColumnLabel = E),
      (l.getCustomerManagerListColumns = k));
  },
  226,
);
