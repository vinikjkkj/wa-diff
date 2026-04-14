__d(
  "WAWebRemoveLinkJoinedMembersModal.react",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebChatContact.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebGroupLinkJoinUtils",
    "WAWebLinkJoinedMembersUtils",
    "WAWebMembersRemovedAlert.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebModifyParticipantsGroupAction",
    "WAWebSpinner.react",
    "WAWebWamEnumGroupBulkRemovalAction",
    "WAWebWidFactory",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = o("WAWebChatContact.react").ContactFactory();
    function g(e) {
      var t = e.contact;
      return c.jsx(f, {
        contact: t,
        theme: "drawer-list",
        showNotifyName: !0,
        waitIdle: !0,
        idle: !0,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        a = e.groupMetadata,
        i = e.messageTimestamp,
        l = _([]),
        u = l[0],
        d = l[1],
        f = _(!0),
        h = f[0],
        y = f[1];
      m(
        function () {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e =
                    i != null
                      ? o("WATimeUtils").castToUnixTime(
                          i -
                            o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS,
                        )
                      : void 0,
                  n =
                    i != null
                      ? o("WATimeUtils").castToUnixTime(
                          i +
                            o("WAWebGroupLinkJoinUtils")
                              .JOIN_FLOOD_COOLDOWN_SECS,
                        )
                      : void 0,
                  r = yield o(
                    "WAWebGroupLinkJoinUtils",
                  ).getParticipantsJoinedViaLink(t.id.toString(), e, n),
                  l = [],
                  s = a.participants;
                for (var u of r) {
                  var c = o("WAWebWidFactory").createWid(u),
                    m = s.get(c);
                  m != null && l.push(m);
                }
                d(l);
              } finally {
                y(!1);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        },
        [t.id, a.participants, i],
      );
      var C = function () {
          o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(t, a);
        },
        b = function () {
          (o("WAWebLinkJoinedMembersUtils").logGroupBulkRemovalWamEvent(
            o("WAWebWamEnumGroupBulkRemovalAction").GROUP_BULK_REMOVAL_ACTION
              .TAP_REMOVE_BUTTON,
            t.id,
            u.length,
          ),
            u.length > 0 &&
              o("WAWebModifyParticipantsGroupAction").removeParticipants(t, u),
            o("WAWebModalManager").closeModalManager());
        },
        v = u.length,
        S = p(
          function () {
            if (i == null) return null;
            var e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(i),
              t = e.endTime,
              n = e.startTime;
            return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(n, t);
          },
          [i],
        );
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Tower,
        onOverlayClick: o("WAWebModalManager").closeModalManager,
        children: c.jsxs(r("WAWebDrawer.react"), {
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "remove-link-joined-members",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              title: s._(/*BTDS*/ "Remove members"),
              onCancel: o("WAWebModalManager").closeModalManager,
            }),
            c.jsxs("div", {
              className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7 x2b8uid",
              children: [
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children:
                    S != null
                      ? s._(
                          /*BTDS*/ "These members joined using a group link on {timeRange}.",
                          [s._param("timeRange", S)],
                        )
                      : s._(
                          /*BTDS*/ "These members joined using a group link.",
                        ),
                }),
                c.jsx("div", {
                  className: "xav9cv8",
                  children: c.jsx("span", {
                    className: "x1ypdohk",
                    onClick: C,
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: function (t) {
                      (t.key === "Enter" || t.key === " ") && C();
                    },
                    children: c.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "accent",
                      children: s._(/*BTDS*/ "Manage link permissions"),
                    }),
                  }),
                }),
              ],
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: h
                ? c.jsx("div", {
                    className: "x78zum5 xl56j7k x6s0dn4 x1iyjqo2",
                    children: c.jsx(o("WAWebSpinner.react").Spinner, {}),
                  })
                : c.jsx("div", {
                    className: "x1iyjqo2 x1odjw0f",
                    children: u.map(function (e) {
                      return c.jsx(g, { contact: e.contact }, e.id.toString());
                    }),
                  }),
            }),
            c.jsx("div", {
              className:
                "xdx6fka xvtqlqk x1p57kb1 xvpt6g3 x178xt8z x13fuv20 xx42vgk",
              children: c.jsx(r("WDSButton.react"), {
                label: s._(
                  /*BTDS*/ '_j{"*":"Remove {number} members","_1":"Remove 1 member"}',
                  [s._plural(v, "number")],
                ),
                onPress: b,
                disabled: h || v === 0,
                type: "destructive",
                variant: "filled",
                widthMode: "flexible",
                testid: void 0,
              }),
            }),
          ],
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t, r, a) {
      var i = (function () {
        var i = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var n = yield o(
              "WAWebLinkJoinedMembersUtils",
            ).fetchRemainingParticipants(t, r, a);
            if (n.length === 0) {
              o("WAWebMembersRemovedAlert.react").openMembersRemovedAlert(
                t,
                r,
                a,
              );
              return;
            }
            o("WAWebModalManager").ModalManager.open(
              c.jsx(h, { chat: t, groupMetadata: r, messageTimestamp: a }),
            );
          } catch (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[openRemoveLinkJoinedMembersModal] fetch failed: ",
                  "",
                ])),
              t,
            );
          }
        });
        return function () {
          return i.apply(this, arguments);
        };
      })();
      i();
    }
    l.openRemoveLinkJoinedMembersModal = y;
  },
  226,
);
