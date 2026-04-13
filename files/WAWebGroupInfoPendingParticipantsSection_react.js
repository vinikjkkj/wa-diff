__d(
  "WAWebGroupInfoPendingParticipantsSection.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebBoolFunc",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebChatParticipant.react",
    "WAWebConfirmPopup.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFlatList.react",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebSingleSelection",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebAsync",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState;
    function _(t) {
      var n = o("react-compiler-runtime").c(7),
        a = t.active,
        i = t.data,
        l = t.groupMetadata,
        u = t.onContextMenu,
        d = t.pendingParticipants,
        m = i.id,
        p;
      if (
        n[0] !== a ||
        n[1] !== i ||
        n[2] !== l ||
        n[3] !== m ||
        n[4] !== u ||
        n[5] !== d
      ) {
        var _ = d.get(m);
        if (!_)
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[UnknownDataError] WAWebGroupInfoPendingParticipantsSection",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(i)
          );
        var g = function (t) {
          var e = function () {
              var e = function () {
                (o("WAWebModalManager").ModalManager.close(),
                  l.revokeGroupsV4AddInvite([_.id]).then(f));
              };
              o("WAWebModalManager").ModalManager.open(
                c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: e,
                  okText: s._(/*BTDS*/ "Reset link"),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  cancelText: s._(/*BTDS*/ "Cancel"),
                  children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: s._(
                      /*BTDS*/ "Reset invite for {member}? If you reset the invite, {member} won't be able to use it to join this group.",
                      [
                        s._param(
                          "member",
                          o("WAWebFrontendContactGetters").getFormattedName(
                            _.contact,
                          ),
                        ),
                      ],
                    ),
                  }),
                }),
              );
            },
            n = [
              c.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: e,
                  children: s._(/*BTDS*/ "Revoke invite"),
                },
                "promote",
              ),
            ];
          u(n, t, _.contact);
        };
        ((p = c.jsx(
          r("WAWebChatParticipant.react"),
          {
            active: a,
            contact: _.contact,
            participant: _,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            contextMenu: !0,
            onContext: g,
            theme: "refresh",
            showNotifyName: !0,
            isPendingParticipant: !0,
            waitIdle: !0,
            showStatusRingAroundProfilePhoto: !0,
          },
          _.id.toString(),
        )),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = m),
          (n[4] = u),
          (n[5] = d),
          (n[6] = p));
      } else p = n[6];
      return p;
    }
    function f() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Invite reset"),
        }),
      );
    }
    function g(e) {
      "use no forget";
      var t,
        a,
        i = e.chat,
        l = e.flatListController,
        u = r("WANullthrows")(
          i.groupMetadata,
          "WAWebGroupInfoPendingParticipantsSection: Chat must have group metadata for group info section.",
        ),
        d = r("WANullthrows")(
          (t = i.groupMetadata) == null ? void 0 : t.participants,
          "WAWebGroupInfoPendingParticipantsSection: Group metadata must have participants.",
        ),
        f = r("WANullthrows")(
          (a = i.groupMetadata) == null ? void 0 : a.pendingParticipants,
          "WAWebGroupInfoPendingParticipantsSection: Group metadata must have pending participants.",
        ),
        g = f.toArray(),
        y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (o("useWAWebListener").useListener(
        d,
        "change:isAdmin change:isSuperAdmin",
        y,
      ),
        o("useWAWebListener").useListener(f, "add remove reset", y));
      var C = p(h(f)),
        b = C[0],
        v = C[1],
        S = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        R = p(),
        L = R[0],
        E = R[1];
      r("useWAWebAsync")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield u.queryGroupsV4PendingInvite(), v(h(u.pendingParticipants)));
        }),
        [u],
      );
      var k = m(
        function () {
          var e = g;
          (h(g) &&
            b &&
            (e = e.slice(
              0,
              o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
            )),
            S.current.init(
              e.map(function (e) {
                return e.contact;
              }),
            ));
          var t = new Set(),
            n = e.filter(function (e) {
              var n,
                r = e.id,
                a =
                  (n = o("WAWebLidMigrationUtils").toPn(r)) == null
                    ? void 0
                    : n.toString();
              return a != null && t.has(a)
                ? !1
                : (t.add(a != null ? a : r.toString()), !0);
            });
          return n.map(function (e) {
            return { itemKey: e.id.toString(), id: e.id, height: 68 };
          });
        },
        [b, g],
      );
      if (u.isSuspendedOrTerminated()) return c.jsx(c.Fragment, {});
      var I = function (t, n, r) {
          var e = n.type === "click" ? void 0 : n.target;
          E({
            contactId: r.id,
            menu: t,
            anchor: e,
            event: n.anchor ? void 0 : n,
          });
        },
        T = s._(
          /*BTDS*/ '_j{"*":"Invited members list: {group-participants} members","_1":"Invited members list: 1 member"}',
          [s._plural(f.length, "group-participants")],
        ),
        D;
      f.length > 0 &&
        (D = c.jsx(r("WAWebNavigableFlatList.react"), {
          ariaLabel: T,
          flatListController: l,
          listData: k,
          onRenderItem: function (t) {
            return c.jsx(_, {
              active: S.current,
              data: t,
              onContextMenu: I,
              pendingParticipants: f,
              groupMetadata: u,
            });
          },
          selection: S.current,
          rotateList: !0,
        }));
      var x;
      if (h(f) && b) {
        var $ =
            f.length -
            o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
          P = function () {
            v(!1);
          };
        x = c.jsx(r("WAWebChatInfoExpandButton.react"), {
          numMore: $,
          onClick: P,
        });
      }
      var N;
      d.iAmAdmin() &&
        f.length > 0 &&
        (N = c.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
          {
            xstyle: o("WAWebUISpacing").uiPadding.horiz0,
            titleXStyle: o("WAWebUISpacing").uiPadding.horiz20,
            titleTestId: "section-participants",
            testid: void 0,
            title: s._(/*BTDS*/ "{number} invited", [
              s._param("number", f.length),
            ]),
            children: [D, x],
          },
        ));
      var M = function () {
          E(null);
        },
        w;
      return (
        L &&
          (w = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "ChatContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: M,
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: L }),
          })),
        c.jsxs(c.Fragment, { children: [N, w] })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return (
        e.length >
        o("WAWebChatInfoDrawerSection.react")
          .INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
      );
    }
    l.default = g;
  },
  226,
);
