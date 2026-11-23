__d(
  "WAWebCustomerManagerListViewColumns",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebCustomerManagerActionsCell.react",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerCustomFieldDisplay",
    "WAWebCustomerManagerCustomFieldLabels",
    "WAWebCustomerManagerCustomFieldTypes",
    "WAWebCustomerManagerCustomerCell.react",
    "WAWebCustomerManagerDateFormatUtils",
    "WAWebCustomerManagerListCell.react",
    "WAWebCustomerManagerListViewColumnWidths",
    "WAWebCustomerManagerNotesCell.react",
    "WAWebCustomerManagerSMBUserJourneyLogger",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebFrontendContactGetters",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebUsernameGatingUtils",
    "WDSBaseCheckbox.react",
    "WDSFocusStateStyles",
    "WDSIconIcArrowDownward.react",
    "WDSIconIcArrowUpward.react",
    "WDSIconIcDragHandle.react",
    "WDSText.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebContactValues",
    "useWAWebFocusState",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = d.useState,
      f = {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        flexShrink: "x2lah0s",
        justifyContent: "xl56j7k",
        marginInlineStart: "x15w1vwp",
        $$css: !0,
      },
      g = {
        center: function (t) {
          return [
            f,
            { width: t != null ? "x5lhr3w" : t, $$css: !0 },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        header: { height: "xn3w4p2", marginTop: "xe3kor7", $$css: !0 },
      },
      h = {
        wrapper: {
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          columnGap: "x1trrmfo",
          display: "x78zum5",
          maxWidth: "x193iq5w",
          position: "x1n2onr6",
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
        fullCellTarget: {
          boxSizing: "x9f619",
          height: "xn3w4p2",
          marginTop: "xe3kor7",
          marginInlineStart: "x15w1vwp",
          marginInlineEnd: "x1olz2oy",
          maxWidth: "x1x1rfll",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          width: "x2abaw6",
          $$css: !0,
        },
        draggable: { cursor: "x1jm3nie", $$css: !0 },
        dragging: { opacity: "xti2d7y", $$css: !0 },
      };
    function y(e, t, n, r) {
      return r == null || $.includes(e)
        ? null
        : {
            draggable: !0,
            onDragStart: function (r) {
              (r.dataTransfer.setData("text/plain", e),
                (r.dataTransfer.effectAllowed = "move"),
                n(!0));
            },
            onDragEnd: function () {
              n(!1);
            },
            onDragOver: function (t) {
              (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
            },
            onDrop: function (a) {
              var n;
              a.preventDefault();
              var i = a.dataTransfer.getData("text/plain"),
                l = o(
                  "WAWebCustomerManagerCustomFieldTypes",
                ).customFieldIdFromKey(i),
                s =
                  (n = P.find(function (e) {
                    return e === i;
                  })) != null
                    ? n
                    : l != null
                      ? o(
                          "WAWebCustomerManagerCustomFieldTypes",
                        ).customFieldKey(l)
                      : null;
              if (s != null && s !== e) {
                var u = t.indexOf(s),
                  c = t.indexOf(e);
                (r(s, e),
                  u !== -1 &&
                    c !== -1 &&
                    o(
                      "WAWebCustomerManagerSMBUserJourneyLogger",
                    ).CustomerManagerUserJourneyLogger.editColumnReorderDrag(
                      u,
                      c,
                    ));
              }
            },
          };
    }
    function C() {
      var e = p(null),
        t = o("useWAWebHover").useWAWebHover(e),
        n = r("useWAWebFocusState")(),
        a = n[0],
        i = n[1],
        l = r("useMergeRefs")(e, a);
      return { revealed: t || i, setHeaderRef: l };
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    function v(e) {
      var t = e.announcement;
      return c.jsx("span", {
        className:
          "x10l6tqk x1i1rx1s xjm9jq1 xexx8yu x18d9i69 x1c1uobl xyri2b x1y332i5 x1jyxor1 x1hb08if xjn30re x6ikm8r x10wlt62 x1hyvwdk xuxw1ft x972fbf x10w94by x1qhh985 x14e42zd",
        "aria-live": "assertive",
        "data-testid": "contact_manager_column_reorder_announcer",
        children: t,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t, n, a, i, l) {
      var u = _(!1),
        c = u[0],
        d = u[1],
        m = p(null),
        f = p(0);
      function g(e) {
        f.current += 1;
        var t = f.current % 2 === 0 ? "" : "\u200B";
        i(String(e) + t);
      }
      function h(e) {
        ((m.current = e),
          d(!0),
          g(
            s._(/*BTDS*/ "", [
              s._param("column name", t),
              s._param("position", e + 1),
              s._param("total", n.length),
            ]),
          ));
      }
      function y(e) {
        var t = m.current;
        (t != null &&
          t !== e &&
          o(
            "WAWebCustomerManagerSMBUserJourneyLogger",
          ).CustomerManagerUserJourneyLogger.editColumnReorderKeyboard(t, e),
          d(!1),
          (m.current = null),
          g(s._(/*BTDS*/ "")));
      }
      function C(t) {
        var r = m.current;
        (r != null && r !== t && l != null && l(e, n[r]),
          d(!1),
          (m.current = null),
          g(s._(/*BTDS*/ "")));
      }
      function b(e) {
        g(e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""));
      }
      function v(t, o) {
        var a = r("WAWebL10N").isRTL() ? "ArrowLeft" : "ArrowRight",
          i = r("WAWebL10N").isRTL() ? "ArrowRight" : "ArrowLeft",
          u;
        if (t.key === a) u = o + 1;
        else if (t.key === i) u = o - 1;
        else return !1;
        return (
          t.preventDefault(),
          u < 0 || u >= n.length
            ? (b(u < 0), !0)
            : (l != null &&
                (l(e, n[u]),
                g(s._(/*BTDS*/ "", [s._param("position", u + 1)]))),
              !0)
        );
      }
      function S(e, t) {
        return e.key === "Enter" || e.key === " "
          ? (e.preventDefault(), y(t), !0)
          : e.key === "Escape"
            ? (e.preventDefault(), C(t), !0)
            : v(e, t);
      }
      function R() {
        c && C(n.indexOf(e));
      }
      function L(t) {
        if (!a) return !1;
        var r = n.indexOf(e);
        return r === -1
          ? !1
          : c
            ? S(t, r)
            : t.key === " "
              ? (t.preventDefault(), h(r), !0)
              : !1;
      }
      return { handleReorderBlur: R, handleReorderKeyDown: L };
    }
    function R(e) {
      var t = e.revealed;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x10l6tqk x1cfcev x13vifvy x1ey2m1c x6s0dn4 x78zum5 xg01cxk x1g2r6go x19991ni",
            },
            1: {
              className:
                "x10l6tqk x1cfcev x13vifvy x1ey2m1c x6s0dn4 x78zum5 x1g2r6go x19991ni x1hc1fzr",
            },
          }[!!t << 0],
          {
            "aria-hidden": !0,
            "data-testid": "contact_manager_column_drag_handle",
            children: c.jsx(r("WDSIconIcDragHandle.react"), {
              width: 12,
              height: 12,
            }),
          },
        ),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.direction;
      return t == null
        ? null
        : c.jsx("div", {
            className: "x78zum5 x2lah0s x14ju556",
            children:
              t === "asc"
                ? c.jsx(r("WDSIconIcArrowUpward.react"), {
                    "aria-hidden": !0,
                    height: 18,
                    width: 18,
                  })
                : c.jsx(r("WDSIconIcArrowDownward.react"), {
                    "aria-hidden": !0,
                    height: 18,
                    width: 18,
                  }),
          });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return e === "asc" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function k(e, t) {
      return t == null
        ? e
        : t === "asc"
          ? s._(/*BTDS*/ "", [s._param("column name", e)])
          : s._(/*BTDS*/ "", [s._param("column name", e)]);
    }
    function I(t) {
      var n = t.columnKey,
        a = t.label,
        i = t.onColumnReorder,
        l = t.onReorderAnnounce,
        s = t.onSort,
        u = t.reorderableColumnKeys,
        d = t.sortConfig,
        m = _(!1),
        p = m[0],
        f = m[1],
        g = y(n, u, f, i),
        v = String(a),
        E = g != null && u.includes(n),
        I = C(),
        T = I.revealed,
        D = I.setHeaderRef,
        x = S(n, v, u, E, l, i),
        $ = x.handleReorderBlur,
        P = x.handleReorderKeyDown,
        N = d != null && d.key === n ? d.direction : null;
      function M() {
        s == null || s(n);
      }
      function w(e) {
        P(e) ||
          (s != null &&
            (e.key === "Enter" || e.key === " ") &&
            (e.preventDefault(), s(n)));
      }
      return s == null && !E
        ? c.jsx("div", {
            className: "x6s0dn4 xhslqc4 x1trrmfo x78zum5 x193iq5w x1n2onr6",
            children: c.jsx(r("WDSText.react"), {
              maxLines: 1,
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: a,
            }),
          })
        : c.jsxs(
            "div",
            babelHelpers.extends(
              { ref: D },
              (e || (e = r("stylex"))).props(
                h.wrapper,
                s != null && h.sortable,
                h.fullCellTarget,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                s == null && h.draggable,
                p && h.dragging,
              ),
              {
                "aria-label": s != null ? k(a, N) : v,
                role: "button",
                tabIndex: 0,
                "aria-roledescription": E ? b() : void 0,
              },
              g != null ? g : {},
              {
                onBlur: $,
                onClick: s != null ? M : void 0,
                onKeyDown: w,
                children: [
                  E && c.jsx(R, { revealed: T }),
                  c.jsx(r("WDSText.react"), {
                    maxLines: 1,
                    type: "Body2Emphasized",
                    colorName: "contentDeemphasized",
                    children: a,
                  }),
                  s != null && c.jsx(L, { direction: N }),
                ],
              },
            ),
          );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e, t, n, r, o, a, i) {
      return function () {
        return c.jsx(I, {
          label: e,
          columnKey: t,
          sortConfig: i,
          onSort: a,
          onColumnReorder: n,
          reorderableColumnKeys: r,
          onReorderAnnounce: o,
        });
      };
    }
    function D(e) {
      var t = e.chatJid,
        n = m(
          function () {
            return o("WAWebContactCollection").ContactCollection.get(t);
          },
          [t],
        ),
        a =
          n != null
            ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n)
                .displayName
            : "\u2014";
      return c.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: "contentDefault",
        maxLines: 1,
        children: a,
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t,
        n = e.chatJid,
        a = o("WAWebContactCollection").ContactCollection.get(n),
        i =
          (t = o("useWAWebContactValues").useOptionalContactValues(
            a == null ? void 0 : a.id,
            [o("WAWebFrontendContactGetters").getFormattedUsername],
          )) == null
            ? void 0
            : t[0],
        l =
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          i != null &&
          i !== ""
            ? i
            : "\u2014";
      return c.jsx(r("WDSText.react"), {
        type: "Body1",
        colorName: "contentDefault",
        maxLines: 1,
        children: l,
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    var $ = ["select", "customer", "actions"],
      P = [
        "customer",
        "phone",
        "username",
        "list",
        "acquisitionSource",
        "email",
        "address",
        "birthday",
        "lastMessage",
        "lastOrder",
        "notes",
        "actions",
      ],
      N = [
        "customer",
        "phone",
        "username",
        "list",
        "acquisitionSource",
        "email",
        "address",
        "birthday",
        "lastMessage",
      ],
      M = P;
    function w(e, t) {
      return e.filter(function (e) {
        return !$.includes(e) && t.includes(e);
      });
    }
    function A(e, t) {
      var n = o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(e);
      if (n != null) {
        var r = t == null ? void 0 : t.get(n);
        return r != null
          ? o(
              "WAWebCustomerManagerCustomFieldLabels",
            ).getCustomFieldColumnLabel(r)
          : e;
      }
      return e === "select"
        ? "Select"
        : e === "customer"
          ? s._(/*BTDS*/ "")
          : e === "phone"
            ? s._(/*BTDS*/ "")
            : e === "username"
              ? s._(/*BTDS*/ "")
              : e === "email"
                ? s._(/*BTDS*/ "")
                : e === "address"
                  ? s._(/*BTDS*/ "")
                  : e === "birthday"
                    ? s._(/*BTDS*/ "")
                    : e === "list"
                      ? s._(/*BTDS*/ "")
                      : e === "acquisitionSource"
                        ? s._(/*BTDS*/ "")
                        : e === "lastMessage"
                          ? s._(/*BTDS*/ "")
                          : e === "lastOrder"
                            ? s._(/*BTDS*/ "")
                            : e === "notes"
                              ? s._(/*BTDS*/ "")
                              : e === "actions"
                                ? s._(/*BTDS*/ "")
                                : e;
    }
    function F(e) {
      return e.isAllSelected ? !0 : e.isIndeterminate ? "indeterminate" : !1;
    }
    function O(t) {
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
                g.center(
                  o("WAWebCustomerManagerListViewColumnWidths")
                    .SELECT_COLUMN_WIDTH_PX,
                ),
              ),
              {
                children: c.jsx(r("WDSBaseCheckbox.react"), {
                  "aria-label":
                    i != null
                      ? s._(/*BTDS*/ "", [s._param("name", i)])
                      : s._(/*BTDS*/ ""),
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
                g.center(
                  o("WAWebCustomerManagerListViewColumnWidths")
                    .SELECT_COLUMN_WIDTH_PX,
                ),
                g.header,
              ),
              {
                children: c.jsx(r("WDSBaseCheckbox.react"), {
                  "aria-label": s._(/*BTDS*/ ""),
                  onChange: function () {
                    return t.toggleAll();
                  },
                  testid: "customer_manager_select_all",
                  value: F(t),
                }),
              },
            ),
          );
        },
        stickyStart: !0,
        width: o("WAWebCustomerManagerListViewColumnWidths")
          .customerManagerColumnWidths.select,
      };
    }
    function B(e, t, n, a, i, l, u, d, m) {
      var p = l != null ? l : [],
        _ = u != null ? u : r("WAWebNoop"),
        f = function (r, o) {
          return n != null ? T(r, o, a, p, _, n, t) : void 0;
        },
        g = function (t, n, r) {
          return {
            cell: r,
            header: n,
            key: t,
            renderHeader: f(n, t),
            sortable: !0,
            width: o("WAWebCustomerManagerListViewColumnWidths")
              .customerManagerColumnWidths[t],
          };
        },
        h = i != null ? O(i) : null,
        y = (m != null ? m : []).map(function (e) {
          var t = o("WAWebCustomerManagerCustomFieldTypes").customFieldKey(
              e.id,
            ),
            n = o(
              "WAWebCustomerManagerCustomFieldLabels",
            ).getCustomFieldColumnLabel(e);
          return {
            cell: function (n) {
              return c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                maxLines: 1,
                children: o(
                  "WAWebCustomerManagerCustomFieldDisplay",
                ).formatCustomFieldDisplayValue(
                  n.item.customFieldValues.find(function (t) {
                    return t.fieldId === e.id;
                  }),
                  e,
                ),
              });
            },
            key: t,
            renderHeader: f(n, t),
            sortable: !0,
            width: o("WAWebCustomerManagerListViewColumnWidths")
              .customFieldColumnWidth,
          };
        }),
        C = [].concat(
          h != null ? [h] : [],
          [
            g("customer", s._(/*BTDS*/ ""), function (e) {
              return c.jsx(r("WAWebCustomerManagerCustomerCell.react"), {
                item: e.item.leadData,
              });
            }),
            g("phone", s._(/*BTDS*/ ""), function (e) {
              return c.jsx(D, { chatJid: e.item.chatJid });
            }),
            g("username", s._(/*BTDS*/ ""), function (e) {
              return c.jsx(x, { chatJid: e.item.chatJid });
            }),
            g("list", s._(/*BTDS*/ ""), function (e) {
              return c.jsx(r("WAWebCustomerManagerListCell.react"), {
                chatJid: e.item.chatJid,
                leadStage: e.item.leadData.leadStage,
              });
            }),
            g("acquisitionSource", s._(/*BTDS*/ ""), function (e) {
              var t = e.item.leadData.acquisitionSource,
                n =
                  t != null
                    ? o(
                        "WAWebCustomerProfileAcquisitionSourceNames",
                      ).getProfileAcquisitionSourceLabel(t)
                    : null;
              return c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                maxLines: 1,
                children: n != null ? n : s._(/*BTDS*/ ""),
              });
            }),
            g("email", s._(/*BTDS*/ ""), function (e) {
              var t;
              return c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: (t = e.item.leadData.email) != null ? t : "\u2014",
              });
            }),
            g("address", s._(/*BTDS*/ ""), function (e) {
              var t;
              return c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: (t = e.item.leadData.address) != null ? t : "\u2014",
              });
            }),
            g("birthday", s._(/*BTDS*/ ""), function (e) {
              return c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: o(
                  "WAWebCustomerManagerDateFormatUtils",
                ).formatCustomerBirthday(e.item.leadData.birthday),
              });
            }),
            g("lastMessage", s._(/*BTDS*/ ""), function (e) {
              var t = o(
                "WAWebCustomerManagerChatResolver",
              ).resolveCustomerManagerChat(e.item.chatJid);
              return c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children: o(
                  "WAWebCustomerManagerDateFormatUtils",
                ).formatCustomerDate(t == null ? void 0 : t.t),
              });
            }),
            {
              cell: function (t) {
                var e;
                return c.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children:
                    (e = t.item.leadData.lastOrderDescription) != null
                      ? e
                      : "\u2014",
                });
              },
              header: s._(/*BTDS*/ ""),
              key: "lastOrder",
              renderHeader: T(s._(/*BTDS*/ ""), "lastOrder", a, p, _),
              width: o("WAWebCustomerManagerListViewColumnWidths")
                .customerManagerColumnWidths.lastOrder,
            },
            {
              cell: function (t) {
                return c.jsx(r("WAWebCustomerManagerNotesCell.react"), {
                  chatJid: t.item.chatJid,
                });
              },
              header: s._(/*BTDS*/ ""),
              key: "notes",
              renderHeader: T(s._(/*BTDS*/ ""), "notes", a, p, _),
              width: o("WAWebCustomerManagerListViewColumnWidths")
                .customerManagerColumnWidths.notes,
            },
          ],
          y,
          [
            {
              cell: function (n) {
                return c.jsx(r("WAWebCustomerManagerActionsCell.react"), {
                  contact: n.item,
                  onChatClick: e,
                  onHiddenChange: d,
                });
              },
              key: "actions",
              stickyEnd: !0,
              width: o("WAWebCustomerManagerListViewColumnWidths")
                .customerManagerColumnWidths.actions,
            },
          ],
        );
      return C.map(function (e) {
        return babelHelpers.extends({}, e, {
          headerInteractive:
            (e.sortable === !0 && n != null) ||
            (a != null && p.includes(e.key)),
        });
      });
    }
    ((l.ColumnReorderAnnouncer = v),
      (l.getSortDirectionLabel = E),
      (l.ALWAYS_VISIBLE_COLUMNS = $),
      (l.ALL_COLUMN_KEYS = P),
      (l.SORTABLE_COLUMN_KEYS = N),
      (l.DEFAULT_VISIBLE_COLUMNS = M),
      (l.getOrderedReorderableColumnKeys = w),
      (l.getColumnLabel = A),
      (l.getCustomerManagerListColumns = B));
  },
  226,
);
