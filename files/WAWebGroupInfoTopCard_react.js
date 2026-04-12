__d(
  "WAWebGroupInfoTopCard.react",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WANullthrows",
    "WAPromiseRaceAbort",
    "WAWebBizGatingUtils",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebGroupInfoPhoto.react",
    "WAWebGroupInfoSubjectInput.react",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLabelsInfoDrawerLabelWell.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebParticipantListUtils",
    "WAWebSetSubjectGroupAction",
    "WAWebShouldShowCallButtons",
    "WAWebTag.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSFlex.stylex",
    "WDSIconIcCall.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcVideocam.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebChatValues",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
    "useWAWebVoipCanStartCall",
    "useWAWebVoipIsCallingEnabledAndInited",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = {
        participantCount: { color: "xo1mcw5", $$css: !0 },
        internalBadge: {
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          marginTop: "x1380le5",
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n,
        a = e.chat,
        i = e.focusGroupSubjectOnMount,
        l = e.onAddParticipant,
        u = e.onAdminSetting,
        d = e.onClickParticipantsCount,
        _ = e.onSearchMsgs,
        h = e.showHiddenSubgroupIcon,
        y = o("useWAWebChatValues").useChatValues(a.id, [
          o("WAWebChatGetters").getLabels,
        ]),
        C = y[0],
        b = o("useWAWebModelValues").useOptionalModelValues(a.groupMetadata, [
          "size",
          "creation",
          "groupType",
          "participants",
          "hiddenSubgroup",
          "isInternal",
        ]),
        v = b == null ? void 0 : b.groupType,
        S = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "internal_group_indicator",
        ),
        R = (b == null ? void 0 : b.isInternal) === !0,
        L = b == null ? void 0 : b.participants,
        E = (t = L == null ? void 0 : L.length) != null ? t : 0,
        k = (n = b == null ? void 0 : b.size) != null ? n : 0,
        I = L != null && L.iAmAdmin() ? E : k,
        T = b == null ? void 0 : b.getParentGroupChat(),
        D = s._(/*BTDS*/ "Group");
      v === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ? (D = s._(/*BTDS*/ "Announcements"))
        : T != null &&
          ((b == null ? void 0 : b.hiddenSubgroup) === !0
            ? (D = s._(/*BTDS*/ "Group hidden in {community-name}", [
                s._param(
                  "community-name",
                  T == null ? void 0 : T.formattedTitle,
                ),
              ]))
            : (D = s._(/*BTDS*/ "Group in {community-name}", [
                s._param(
                  "community-name",
                  T == null ? void 0 : T.formattedTitle,
                ),
              ])));
      var x =
          v === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? I : E,
        $ = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
          s._plural(x, "number"),
        ]),
        P =
          (b != null && b.isSuspendedOrTerminated()) || x === 0
            ? null
            : m.jsxs(m.Fragment, {
                children: [
                  r("WAWebL10N").isRTL() ? " - " : " \xB7 ",
                  m.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: d,
                    xstyle: p.participantCount,
                    children: $,
                  }),
                ],
              });
      return m.jsx(r("WAWebDrawerSection.react"), {
        theme: "refresh-new",
        children: m.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (c || (c = r("stylex"))).props(
              o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
            ),
            {
              children: [
                m.jsx(r("WAWebGroupInfoPhoto.react"), {
                  chat: a,
                  xstyle: o("WAWebUISpacing").uiMargin.bottom10,
                  showAddIconOverlay: !0,
                  showHiddenSubgroupIcon: h,
                }),
                m.jsx(f, {
                  chat: a,
                  focusOnMount: i,
                  xstyle: o("WAWebUISpacing").uiMargin.bottom6,
                }),
                m.jsx("div", {
                  "data-testid": void 0,
                  className: "x1evy7pa x1kgmq87 x2b8uid",
                  children: m.jsxs(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDeemphasized",
                    selectable: !0,
                    dir: "auto",
                    children: [D, " ", P],
                  }),
                }),
                S === !0 &&
                  R &&
                  m.jsx(o("WAWebTag.react").Tag, {
                    testid: void 0,
                    theme: o("WAWebTag.react").TagTheme.Secondary,
                    xstyle: p.internalBadge,
                    children: s._(/*BTDS*/ "INTERNAL"),
                  }),
                o("WAWebBizGatingUtils").canDisplayLabel() &&
                  m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
                    labels: C,
                  }),
                m.jsx(g, {
                  chat: a,
                  groupMetadata: b,
                  onAddParticipant: l,
                  onSearchMsgs: _,
                }),
              ],
            },
          ),
        ),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var a = t.chat,
        i = t.focusOnMount,
        l = i === void 0 ? !1 : i,
        u = t.xstyle,
        d = o("useWAWebModelValues").useModelValues(a.contact, ["name"]),
        p = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(a.groupMetadata),
          ["creation", "restrict", "support", "isUnnamed", "participants"],
        ),
        _ = r("useWAWebUnmountSignal")(),
        f = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t;
            n !== d.name &&
              (yield r("WAPromiseRaceAbort")(
                o("WAWebSetSubjectGroupAction").setGroupSubject(a, n),
                _,
              )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "group_info_drawer:onSetSubject failed",
                      ])),
                  );
                }));
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        g = function () {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(/*BTDS*/ "Only admins can edit this group's info"),
            }),
          );
        };
      if (!p.support)
        return p.isUnnamed
          ? m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
              subject: o("WAWebParticipantListUtils")
                .calculateUnnamedGroupParticipantsList(p)
                .toLocaleString(),
              onSave: f,
              editable: p.canSetSubject(),
              editRestrictionInfo: p.restrict ? g : void 0,
              focusOnMount: l,
              xstyle: u,
            })
          : m.jsx(r("WAWebGroupInfoSubjectInput.react"), {
              subject: d.name || a.formattedTitle,
              onSave: f,
              editable: p.canSetSubject(),
              editRestrictionInfo: p.restrict ? g : void 0,
              focusOnMount: l,
              xstyle: u,
            });
      var h = m.jsx(o("WAWebName.react").GroupName, {
        chat: a,
        groupMetadata: p,
        breakWord: !0,
        checkmarkLarge: !0,
      });
      return m.jsx(
        "div",
        babelHelpers.extends({}, (c || (c = r("stylex"))).props(u), {
          children: m.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Headline1",
            children: h,
          }),
        }),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n,
        a,
        i = e.chat,
        l = e.groupMetadata,
        c = e.onAddParticipant,
        d = e.onSearchMsgs,
        p = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "waweb_chatinfo_refresh",
        ),
        _ = o(
          "useWAWebVoipIsCallingEnabledAndInited",
        ).useWAWebVoipIsCallingEnabledAndInited(),
        f = _.inited,
        g = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(i),
        h = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "group_call_max_participants",
        );
      if (p === !1) return null;
      var y = l == null ? void 0 : l.participants.canAdd(),
        C =
          y === !0
            ? s._(/*BTDS*/ "Add members")
            : s._(/*BTDS*/ "You can't add members to this group"),
        b =
          (t =
            (n = l == null ? void 0 : l.size) != null
              ? n
              : l == null || (a = l.participants) == null
                ? void 0
                : a.length) != null
            ? t
            : 0,
        v =
          (r("WAWebEnvironment").isWindows || f) &&
          o("WAWebShouldShowCallButtons").shouldShowCallButtons(i) &&
          o("WAWebVoipGatingUtils").isGroupCallingEnabled() &&
          b <= h,
        S = !g,
        R = function (t) {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: group info: start group call, isVideo: ",
                "",
              ])),
            t,
          ),
            o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(
              i,
              t,
              o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_INFO,
              o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                .GROUP_CHAT_INFO,
            ));
        };
      return m.jsx("div", {
        className: "xh8yej3 x1de0gy",
        children: m.jsxs(r("WDSActionTileGroup.react"), {
          children: [
            m.jsx(
              r("WDSActionTile.react"),
              {
                Icon: r("WDSIconIcPersonAdd.react"),
                tooltip: C,
                label: s._(/*BTDS*/ "Add"),
                disabled: y !== !0,
                onPress: c,
              },
              "add",
            ),
            m.jsx(
              r("WDSActionTile.react"),
              {
                Icon: r("WDSIconIcSearch.react"),
                tooltip: s._(/*BTDS*/ "Search messages"),
                onPress: d,
                label: s._(/*BTDS*/ "Search"),
              },
              "search",
            ),
            v &&
              m.jsx(
                r("WDSActionTile.react"),
                {
                  Icon: r("WDSIconIcVideocam.react"),
                  testid: void 0,
                  disabled: S,
                  onPress: function () {
                    return R(!0);
                  },
                  label: s._(/*BTDS*/ "Video"),
                },
                "video",
              ),
            v &&
              m.jsx(
                r("WDSActionTile.react"),
                {
                  Icon: r("WDSIconIcCall.react"),
                  testid: void 0,
                  disabled: S,
                  onPress: function () {
                    return R(!1);
                  },
                  label: s._(/*BTDS*/ "Voice"),
                },
                "voice",
              ),
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
