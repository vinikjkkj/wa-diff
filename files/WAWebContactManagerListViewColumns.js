__d(
  "WAWebContactManagerListViewColumns",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactManagerActionsCell.react",
    "WAWebContactManagerCustomerCell.react",
    "WAWebContactManagerListCell.react",
    "WAWebContactManagerListViewColumnWidths",
    "WAWebContactManagerNotesCell.react",
    "WAWebContactManagerSMBUserJourneyLogger",
    "WAWebCustomerDataFieldSaver",
    "WAWebFrontendContactGetters",
    "WAWebLeadStageChip.react",
    "WAWebListsGatingUtils",
    "WDSBaseCheckbox.react",
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
        alignItems: "x6s0dn4",
        display: "x78zum5",
        flexShrink: "x2lah0s",
        justifyContent: "xl56j7k",
        marginInlineStart: "x15w1vwp",
        $$css: !0,
      },
      f = {
        center: function (t) {
          return [
            _,
            { width: t != null ? "x5lhr3w" : t, $$css: !0 },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
      },
      g = {
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
    function h(e, t, n) {
      return n == null || L.includes(e)
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
                o = E.find(function (e) {
                  return e === t;
                });
              o != null && o !== e && n(o, e);
            },
          };
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t.columnKey,
        i = t.label,
        l = t.onColumnReorder,
        s = t.onSort,
        u = t.sortConfig,
        d = p(!1),
        m = d[0],
        _ = d[1],
        f;
      n[0] !== a || n[1] !== l
        ? ((f = h(a, _, l)), (n[0] = a), (n[1] = l), (n[2] = f))
        : (f = n[2]);
      var y = f,
        C = u != null && u.key === a ? u.direction : null,
        b;
      n[3] !== y || n[4] !== m
        ? ((b = (e || (e = r("stylex"))).props(
            g.wrapper,
            g.sortable,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            y != null && g.draggableExpand,
            m && g.dragging,
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
    function C(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.columnKey,
        a = e.label,
        i = e.onColumnReorder,
        l = p(!1),
        s = l[0],
        u = l[1],
        d;
      t[0] !== n || t[1] !== i
        ? ((d = h(n, u, i)), (t[0] = n), (t[1] = i), (t[2] = d))
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
      var f;
      t[6] !== m
        ? ((f = m != null ? m : {}), (t[6] = m), (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== a
        ? ((g = c.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: a,
          })),
          (t[8] = a),
          (t[9] = g))
        : (g = t[9]);
      var y;
      return (
        t[10] !== _ || t[11] !== f || t[12] !== g
          ? ((y = c.jsx(
              "div",
              babelHelpers.extends({}, _, f, { children: g }),
            )),
            (t[10] = _),
            (t[11] = f),
            (t[12] = g),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    function b(e, t, n, r, o) {
      return function () {
        return c.jsx(y, {
          label: e,
          columnKey: t,
          sortConfig: n,
          onSort: r,
          onColumnReorder: o,
        });
      };
    }
    function v(e, t, n) {
      return function () {
        return c.jsx(C, { label: e, columnKey: t, onColumnReorder: n });
      };
    }
    function S(e) {
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
    function R(e) {
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
    var L = ["select", "customer", "actions"],
      E = [
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
      k = E;
    function I(e) {
      return e === "select"
        ? "Select"
        : e === "customer"
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
    function T(e) {
      return e.isAllSelected ? !0 : e.isIndeterminate ? "indeterminate" : !1;
    }
    function D(t) {
      return {
        cell: function (a) {
          var n = o("WAWebContactCollection").ContactCollection.get(
              a.item.chatJid,
            ),
            i =
              n != null
                ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n)
                    .displayName
                : null;
          return c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                f.center(
                  o("WAWebContactManagerListViewColumnWidths")
                    .SELECT_COLUMN_WIDTH_PX,
                ),
              ),
              {
                children: c.jsx(r("WDSBaseCheckbox.react"), {
                  "aria-label":
                    i != null
                      ? s._(/*BTDS*/ "Select {name}", [s._param("name", i)])
                      : s._(/*BTDS*/ "Select customer"),
                  onChange: function (n) {
                    (n != null && n.stopPropagation(),
                      t.toggle(a.item.chatJid));
                  },
                  testid: "customer_manager_select_row",
                  value: t.isSelected(a.item.chatJid),
                }),
              },
            ),
          );
        },
        key: "select",
        renderHeader: function () {
          return c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                f.center(
                  o("WAWebContactManagerListViewColumnWidths")
                    .SELECT_COLUMN_WIDTH_PX,
                ),
              ),
              {
                children: c.jsx(r("WDSBaseCheckbox.react"), {
                  "aria-label": s._(/*BTDS*/ "Select all customers"),
                  onChange: function () {
                    return t.toggleAll();
                  },
                  testid: "customer_manager_select_all",
                  value: T(t),
                }),
              },
            ),
          );
        },
        stickyStart: !0,
        width: o("WAWebContactManagerListViewColumnWidths")
          .contactManagerColumnWidths.select,
      };
    }
    function x(e, t, n, a, i, l) {
      var u = function (t, r) {
          return a != null ? b(t, r, n, a, i) : void 0;
        },
        d = s._(/*BTDS*/ "Customer"),
        m = l != null ? D(l) : null;
      return [].concat(m != null ? [m] : [], [
        {
          cell: function (t) {
            return c.jsx(r("WAWebContactManagerCustomerCell.react"), {
              item: t.item,
            });
          },
          header: d,
          key: "customer",
          renderHeader: u(d, "customer"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.customer,
        },
        {
          cell: function (t) {
            return c.jsx(S, { chatJid: t.item.chatJid });
          },
          header: s._(/*BTDS*/ "Phone number"),
          key: "phone",
          renderHeader: u(s._(/*BTDS*/ "Phone number"), "phone"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.phone,
        },
        {
          cell: function (t) {
            return c.jsx("div", {
              className: "x14ba6vc xrw3huk",
              children: c.jsx(r("WAWebLeadStageChip.react"), {
                customer: t.item,
                onPillClick: function (t) {
                  return o(
                    "WAWebContactManagerSMBUserJourneyLogger",
                  ).ContactManagerUserJourneyLogger.clickRowLeadStagePill(t);
                },
                onStageChange: function (n, r) {
                  (o(
                    "WAWebContactManagerSMBUserJourneyLogger",
                  ).ContactManagerUserJourneyLogger.editLeadStage(
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
          renderHeader: u(s._(/*BTDS*/ "Lead stage"), "leadStage"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.leadStage,
        },
        {
          cell: function (t) {
            return c.jsx(r("WAWebContactManagerListCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: o("WAWebListsGatingUtils").isListsEnabled()
            ? s._(/*BTDS*/ "List")
            : s._(/*BTDS*/ "Label"),
          key: "list",
          renderHeader: u(
            o("WAWebListsGatingUtils").isListsEnabled()
              ? s._(/*BTDS*/ "List")
              : s._(/*BTDS*/ "Label"),
            "list",
          ),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.list,
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
          renderHeader: u(s._(/*BTDS*/ "Source"), "acquisitionSource"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.acquisitionSource,
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
          renderHeader: u(s._(/*BTDS*/ "Email"), "email"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.email,
        },
        {
          cell: function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(t.item.chatJid);
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: R(e == null ? void 0 : e.t),
            });
          },
          header: s._(/*BTDS*/ "Last message"),
          key: "lastMessage",
          renderHeader: u(s._(/*BTDS*/ "Last message"), "lastMessage"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.lastMessage,
        },
        {
          cell: function (t) {
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: R(t.item.lastOrder),
            });
          },
          header: s._(/*BTDS*/ "Last order"),
          key: "lastOrder",
          renderHeader: u(s._(/*BTDS*/ "Last order"), "lastOrder"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.lastOrder,
        },
        {
          cell: function (t) {
            return c.jsx(r("WAWebContactManagerNotesCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: s._(/*BTDS*/ "Notes"),
          key: "notes",
          renderHeader: v(s._(/*BTDS*/ "Notes"), "notes", i),
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.notes,
        },
        {
          cell: function (o) {
            return c.jsx(r("WAWebContactManagerActionsCell.react"), {
              chatJid: o.item.chatJid,
              onChatClick: e,
              onDelete: t,
            });
          },
          key: "actions",
          stickyEnd: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.actions,
        },
      ]);
    }
    ((l.ALWAYS_VISIBLE_COLUMNS = L),
      (l.ALL_COLUMN_KEYS = E),
      (l.DEFAULT_VISIBLE_COLUMNS = k),
      (l.getColumnLabel = I),
      (l.getContactManagerListColumns = x));
  },
  226,
);
