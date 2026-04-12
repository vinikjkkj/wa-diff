__d(
  "WAWebCommunitySubgroupSuggestion.react",
  [
    "fbt",
    "WALogger",
    "WAWebCellRequest.react",
    "WAWebCellRequestState",
    "WAWebClock",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDetailImage.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebPeopleIcon.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcVisibilityOff.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        text: {
          maxWidth: "x193iq5w",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        dropdownText: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function p(t) {
      var a = t.isAdmin,
        i = t.onSubgroupSuggestionAction,
        l = t.subgroupSuggestion,
        u = r("useWAWebEventTargetValue")(
          l,
          ["change:currentState", "change:error"],
          function () {
            return [l.currentState, l.error];
          },
        ),
        p = u[0],
        _ = u[1],
        f = d(),
        g = f[0],
        h = f[1],
        y = o("WAWebUserPrefsMeUser").isMeAccount(l.owner),
        C = function (r) {
          var t = l.ownerContact.id,
            a = s._(/*BTDS*/ "Message {name}", [
              s._param(
                "name",
                o("WAWebFrontendContactGetters").getFormattedShortName(
                  l.ownerContact,
                ),
              ),
            ]),
            i = (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var n = yield o(
                        "WAWebFindChatAction",
                      ).findOrCreateLatestChat(
                        t,
                        "communitySubgroupSuggestions",
                      ),
                      r = n.chat,
                      a = yield o("WAWebCmd").Cmd.openChatFromUnread({
                        chat: r,
                      });
                    a && o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
                  } catch (t) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Opening chat failed with exceptions",
                        ])),
                    );
                  }
                },
              );
              return function () {
                return r.apply(this, arguments);
              };
            })();
          h({
            contactId: t,
            menu: [
              c.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: i,
                  ariaLabel: a,
                  addSpacing: !0,
                  children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: a,
                    xstyle: m.dropdownText,
                  }),
                },
                "message-suggestion-owner",
              ),
            ],
            anchor: r.target,
          });
        },
        b = function (t, n) {
          (t.stopPropagation(), i(l, n));
        },
        v = function (t) {
          (t.stopPropagation(),
            _ != null &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, { msg: _ }),
              ));
        },
        S = o("WAWebFrontendContactGetters").getFormattedName(l.ownerContact),
        R = a
          ? c.jsx("span", {
              children: s._(/*BTDS*/ "Suggested by {user-name}", [
                s._param(
                  "user-name",
                  c.jsx(o("WAWebEmojiText.react").EmojiText, { text: S }),
                ),
              ]),
            })
          : c.jsx("span", {
              children: o("WAWebClock").Clock.suggestedOnDateStr(l.t),
            }),
        L =
          l.desc != null
            ? { title: s._(/*BTDS*/ "Group description"), content: l.desc }
            : void 0,
        E =
          l.participantCount != null
            ? {
                text: s._(
                  /*BTDS*/ '_j{"*":"{participant-count} members","_1":"1 member"}',
                  [s._plural(l.participantCount, "participant-count")],
                ),
                Icon: o("WAWebPeopleIcon.react").PeopleIcon,
              }
            : void 0,
        k =
          l.hiddenSubgroup === !0
            ? {
                text: s._(/*BTDS*/ "Group visibility is set to hidden"),
                Icon: r("WDSIconIcVisibilityOff.react"),
              }
            : void 0,
        I;
      return (
        g &&
          (I = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "SubgroupSuggestionContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: function () {
              h(null);
            },
            children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: g }),
          })),
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(
              r("WAWebCellRequest.react"),
              babelHelpers.extends(
                {
                  image: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                    size: o("WAWebDetailImage.react").DetailImageSize.Small,
                    id: l.groupId,
                  }),
                  primary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: l.subject,
                    xstyle: m.text,
                  }),
                  secondary: R,
                  secondaryTestId: "suggestion-subtitle",
                  signals: {
                    description: L,
                    customSignals: [E, k].filter(Boolean),
                  },
                  state: p,
                  onApprove: a
                    ? function (e) {
                        b(e, o("WAWebCellRequestState").State.Approved);
                      }
                    : void 0,
                  onReject: function (t) {
                    a
                      ? b(t, o("WAWebCellRequestState").State.Rejected)
                      : b(t, o("WAWebCellRequestState").State.Canceled);
                  },
                  onError: v,
                },
                !y && { onClick: C, hoverEnabled: !0 },
              ),
            ),
            I,
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
