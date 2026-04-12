__d(
  "WAWebContactInfoCustomerDataSection.react",
  [
    "fbt",
    "WAJids",
    "WATimeUtils",
    "WAWebAcquisitionSourceNames",
    "WAWebBusinessProfileTextField.react",
    "WAWebChatCollection",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebContactGetters",
    "WAWebContactInfoLeadStageRow.react",
    "WAWebCustomerDataFieldSaver",
    "WAWebCustomerDataLastUpdated",
    "WAWebCustomerManagerGating",
    "WAWebCustomerProfileDateField.react",
    "WAWebCustomerProfileEditableField.react",
    "WAWebCustomerProfileNotesField.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupInfoSeparator.react",
    "WAWebLabelOutlineIcon.react",
    "WAWebLabelsInfoDrawerLabelWell.react",
    "WAWebListPeopleRefreshedIcon.react",
    "WAWebListsGatingUtils",
    "WAWebNotesUtils",
    "WDSIconIcCake.react",
    "WDSIconIcCall.react",
    "WDSIconIcEdit.react",
    "WDSIconIcLocationOn.react",
    "WDSIconIcMail.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcShoppingBag.react",
    "WDSIconIcSyncAlt.react",
    "WDSText.react",
    "react",
    "useWAWebContactValues",
    "useWAWebCustomerDataForContact",
    "useWAWebNoteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      return new Date(e * 1e3).toLocaleString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      });
    }
    var _ = {
      readOnlyRow: {
        marginInlineStart: "x150mmf0",
        marginInlineEnd: "xqf2s3x",
        marginLeft: null,
        marginRight: null,
        $$css: !0,
      },
      lastUpdatedText: { marginTop: "xav9cv8", $$css: !0 },
      labelsRow: {
        alignSelf: "xkh2ocl",
        paddingBottom: "x12xbjc7",
        paddingInlineEnd: "xvtqlqk",
        paddingInlineStart: "x12w63v0",
        paddingTop: "x16ovd2e",
        $$css: !0,
      },
      iconContainer: {
        color: "xhslqc4",
        height: "x1nqnulx",
        paddingTop: "x16ovd2e",
        paddingInlineEnd: "x1nzty39",
        paddingBottom: "x12xbjc7",
        paddingInlineStart: "x12w63v0",
        width: "x1xvr5cs",
        $$css: !0,
      },
      editButtonContainer: {
        opacity: "xmywcsy",
        flexShrink: "x2lah0s",
        $$css: !0,
      },
    };
    function f(e) {
      var t = e.contact;
      return !o("WAWebCustomerManagerGating").customerManagerEnabled() ||
        !o("WAWebCustomerManagerGating").isEligibleForCustomerFields(t)
        ? null
        : u.jsx(g, { contact: t });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n,
        a,
        i = e.contact,
        l = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebContactGetters").getLabels,
        ]),
        c = l[0],
        m = r("useWAWebCustomerDataForContact")(i.id),
        f = o("WAJids").validateChatJid(
          (t = (n = i.id) == null ? void 0 : n.toJid()) != null ? t : "",
        ),
        g = r("useWAWebNoteValues")(f),
        R = d(
          function (e, t) {
            f != null &&
              o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(
                f,
                m,
                e,
                t,
              );
          },
          [m, f],
        );
      if (f == null) return null;
      var L = f,
        E = o("WAWebCustomerDataLastUpdated").getLastUpdatedTimestamp(
          m,
          g.value,
        );
      return u.jsxs("div", {
        "data-testid": void 0,
        children: [
          u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 }),
          u.jsxs("div", {
            className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Customer info"),
              }),
              E != null &&
                u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  xstyle: _.lastUpdatedText,
                  children: s._(/*BTDS*/ "Last updated {timeAgo}", [
                    s._param(
                      "timeAgo",
                      o("WAWebCustomerDataLastUpdated").formatTimeAgo(E),
                    ),
                  ]),
                }),
            ],
          }),
          u.jsx(r("WAWebContactInfoLeadStageRow.react"), {
            customer: m,
            onStageChange: R,
          }),
          o("WAWebNotesUtils").shouldEnableNotesForWid(i.id) &&
            u.jsx(r("WAWebCustomerProfileNotesField.react"), {
              contact: i,
              noteAsyncState: g,
            }),
          u.jsx(y, { contact: i }),
          u.jsx(C, { chatJid: L, customerData: m }, "email-" + String(L)),
          u.jsx(b, { chatJid: L, customerData: m }, "address-" + String(L)),
          u.jsx(v, { chatJid: L, customerData: m }, "birthday-" + String(L)),
          u.jsx(h, { contact: i, labels: c }),
          u.jsx(r("WAWebGroupInfoSeparator.react"), { padding: !0 }),
          u.jsx("div", {
            className: "x16ovd2e x1nbhmlj xdx6fka xvtqlqk",
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "Activity"),
            }),
          }),
          u.jsx(S, { chatJid: L, customerData: m }, "lastOrder-" + String(L)),
          u.jsx(r("WAWebBusinessProfileTextField.react"), {
            icon: u.jsx(r("WDSIconIcSyncAlt.react"), { width: 24, height: 24 }),
            editable: !1,
            label: s._(/*BTDS*/ "Acquisition source"),
            value: String(
              (a =
                (m == null ? void 0 : m.acquisitionSource) != null
                  ? o(
                      "WAWebAcquisitionSourceNames",
                    ).getAcquisitionSourceDisplayName(m.acquisitionSource)
                  : null) != null
                ? a
                : o(
                    "WAWebAcquisitionSourceNames",
                  ).getUnknownAcquisitionSourceLabel(),
            ),
            xstyle: _.readOnlyRow,
          }),
          u.jsx(r("WAWebBusinessProfileTextField.react"), {
            icon: u.jsx(r("WDSIconIcPersonAdd.react"), {
              width: 24,
              height: 24,
            }),
            editable: !1,
            label: s._(/*BTDS*/ "Acquisition date"),
            value:
              (m == null ? void 0 : m.createdAt) != null
                ? p(m.createdAt)
                : String(s._(/*BTDS*/ "Unknown")),
            xstyle: _.readOnlyRow,
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t,
        n = e.contact,
        a = e.labels,
        i = o("WAWebListsGatingUtils").isListsEnabled(),
        l = d(
          function () {
            var e = o("WAWebChatCollection").ChatCollection.get(n.id);
            e != null &&
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(e);
          },
          [n.id],
        );
      return u.jsx("div", {
        className:
          "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x85wx34 x1ubxc9n xi52gnm",
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          gap: 12,
          xstyle: _.labelsRow,
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: _.iconContainer,
              children: i
                ? u.jsx(
                    o("WAWebListPeopleRefreshedIcon.react")
                      .ListPeopleRefreshedIcon,
                    {},
                  )
                : u.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {}),
            }),
            u.jsx("div", {
              className: "x98rzlu xeuugli",
              children:
                ((t = a == null ? void 0 : a.length) != null ? t : 0) > 0
                  ? u.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
                      labels: a,
                      theme: "standalone",
                    })
                  : u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      children: i
                        ? s._(/*BTDS*/ "Add to lists")
                        : s._(/*BTDS*/ "Add labels"),
                    }),
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: _.editButtonContainer,
              children: u.jsx("button", {
                className:
                  "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
                onClick: l,
                "aria-label": s._(/*BTDS*/ "Edit labels"),
                children: u.jsx(r("WDSIconIcEdit.react"), {
                  width: 20,
                  height: 20,
                }),
              }),
            }),
          ],
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedPhoneAndType,
        ]),
        a = n[0],
        i = a.displayName;
      return i
        ? u.jsx(r("WAWebBusinessProfileTextField.react"), {
            icon: u.jsx(r("WDSIconIcCall.react"), { width: 24, height: 24 }),
            editable: !1,
            label: s._(/*BTDS*/ "Phone number"),
            value: i,
            xstyle: _.readOnlyRow,
          })
        : null;
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n = e.chatJid,
        a = e.customerData,
        i = m((t = a == null ? void 0 : a.email) != null ? t : ""),
        l = i[0],
        c = i[1],
        p = m(a == null ? void 0 : a.email),
        _ = p[0],
        f = p[1];
      if ((a == null ? void 0 : a.email) !== _) {
        var g;
        (f(a == null ? void 0 : a.email),
          c((g = a == null ? void 0 : a.email) != null ? g : ""));
      }
      var h = d(
        function (e) {
          (c(e),
            o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, {
              email: e,
            }));
        },
        [n, a],
      );
      return u.jsx(r("WAWebCustomerProfileEditableField.react"), {
        icon: u.jsx(r("WDSIconIcMail.react"), { width: 24, height: 24 }),
        label: s._(/*BTDS*/ "Email"),
        placeholder: s._(/*BTDS*/ "Add email"),
        value: l,
        onSave: h,
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = e.chatJid,
        a = e.customerData,
        i = m((t = a == null ? void 0 : a.address) != null ? t : ""),
        l = i[0],
        c = i[1],
        p = m(a == null ? void 0 : a.address),
        _ = p[0],
        f = p[1];
      if ((a == null ? void 0 : a.address) !== _) {
        var g;
        (f(a == null ? void 0 : a.address),
          c((g = a == null ? void 0 : a.address) != null ? g : ""));
      }
      var h = d(
        function (e) {
          (c(e),
            o("WAWebCustomerDataFieldSaver").saveCustomerDataField(n, a, {
              address: e,
            }));
        },
        [n, a],
      );
      return u.jsx(r("WAWebCustomerProfileEditableField.react"), {
        icon: u.jsx(r("WDSIconIcLocationOn.react"), { width: 24, height: 24 }),
        label: s._(/*BTDS*/ "Address"),
        placeholder: s._(/*BTDS*/ "Add address"),
        value: l,
        onSave: h,
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.chatJid,
        n = e.customerData,
        a = m(
          (n == null ? void 0 : n.birthday) != null
            ? new Date(n.birthday * 1e3)
            : null,
        ),
        i = a[0],
        l = a[1],
        c = m(n == null ? void 0 : n.birthday),
        p = c[0],
        _ = c[1];
      (n == null ? void 0 : n.birthday) !== p &&
        (_(n == null ? void 0 : n.birthday),
        l(
          (n == null ? void 0 : n.birthday) != null
            ? new Date(n.birthday * 1e3)
            : null,
        ));
      var f = d(
        function (e) {
          l(e);
          var r =
            e != null
              ? o("WATimeUtils").castToUnixTime(Math.floor(e.getTime() / 1e3))
              : void 0;
          o("WAWebCustomerDataFieldSaver").saveCustomerDataField(t, n, {
            birthday: r,
          });
        },
        [t, n],
      );
      return u.jsx(r("WAWebCustomerProfileDateField.react"), {
        icon: u.jsx(r("WDSIconIcCake.react"), { width: 24, height: 24 }),
        label: s._(/*BTDS*/ "Birthday"),
        placeholder: s._(/*BTDS*/ "Add birthday"),
        value: i,
        onSave: f,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.chatJid,
        n = e.customerData,
        a = m(
          (n == null ? void 0 : n.lastOrder) != null
            ? new Date(n.lastOrder * 1e3)
            : null,
        ),
        i = a[0],
        l = a[1],
        c = m(n == null ? void 0 : n.lastOrder),
        p = c[0],
        _ = c[1];
      (n == null ? void 0 : n.lastOrder) !== p &&
        (_(n == null ? void 0 : n.lastOrder),
        l(
          (n == null ? void 0 : n.lastOrder) != null
            ? new Date(n.lastOrder * 1e3)
            : null,
        ));
      var f = d(
        function (e) {
          l(e);
          var r =
            e != null
              ? o("WATimeUtils").castToUnixTime(Math.floor(e.getTime() / 1e3))
              : void 0;
          o("WAWebCustomerDataFieldSaver").saveCustomerDataField(t, n, {
            lastOrder: r,
          });
        },
        [t, n],
      );
      return u.jsx(r("WAWebCustomerProfileDateField.react"), {
        icon: u.jsx(r("WDSIconIcShoppingBag.react"), { width: 24, height: 24 }),
        label: s._(/*BTDS*/ "Last order"),
        placeholder: s._(/*BTDS*/ "Add last order date"),
        value: i,
        onSave: f,
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
