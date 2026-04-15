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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(46),
        i = e.chat,
        l = e.focusGroupSubjectOnMount,
        u = e.onAddParticipant,
        d = e.onClickParticipantsCount,
        _ = e.onSearchMsgs,
        h = e.showHiddenSubgroupIcon,
        y;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [o("WAWebChatGetters").getLabels]), (a[0] = y))
        : (y = a[0]);
      var C = o("useWAWebChatValues").useChatValues(i.id, y),
        b = C[0],
        v;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [
            "size",
            "creation",
            "groupType",
            "participants",
            "hiddenSubgroup",
            "isInternal",
          ]),
          (a[1] = v))
        : (v = a[1]);
      var S = o("useWAWebModelValues").useOptionalModelValues(
          i.groupMetadata,
          v,
        ),
        R = S == null ? void 0 : S.groupType,
        L = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "internal_group_indicator",
        ),
        E = (S == null ? void 0 : S.isInternal) === !0,
        k = S == null ? void 0 : S.participants,
        I = (t = k == null ? void 0 : k.length) != null ? t : 0,
        T = (n = S == null ? void 0 : S.size) != null ? n : 0,
        D;
      a[2] !== k || a[3] !== I || a[4] !== T
        ? ((D = k != null && k.iAmAdmin() ? I : T),
          (a[2] = k),
          (a[3] = I),
          (a[4] = T),
          (a[5] = D))
        : (D = a[5]);
      var x = D,
        $;
      if (a[6] !== S || a[7] !== R) {
        var P = S == null ? void 0 : S.getParentGroupChat(),
          N;
        if (
          (a[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = s._(/*BTDS*/ "Group")), (a[9] = N))
            : (N = a[9]),
          ($ = N),
          R === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP)
        ) {
          var M;
          (a[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = s._(/*BTDS*/ "Announcements")), (a[10] = M))
            : (M = a[10]),
            ($ = M));
        } else
          P != null &&
            ((S == null ? void 0 : S.hiddenSubgroup) === !0
              ? ($ = s._(/*BTDS*/ "Group hidden in {community-name}", [
                  s._param(
                    "community-name",
                    P == null ? void 0 : P.formattedTitle,
                  ),
                ]))
              : ($ = s._(/*BTDS*/ "Group in {community-name}", [
                  s._param(
                    "community-name",
                    P == null ? void 0 : P.formattedTitle,
                  ),
                ])));
        ((a[6] = S), (a[7] = R), (a[8] = $));
      } else $ = a[8];
      var w =
          R === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? x : I,
        A;
      a[11] !== w
        ? ((A = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
            s._plural(w, "number"),
          ])),
          (a[11] = w),
          (a[12] = A))
        : (A = a[12]);
      var F = A,
        O;
      a[13] !== S || a[14] !== d || a[15] !== w || a[16] !== F
        ? ((O =
            (S != null && S.isSuspendedOrTerminated()) || w === 0
              ? null
              : m.jsxs(m.Fragment, {
                  children: [
                    r("WAWebL10N").isRTL() ? " - " : " \xB7 ",
                    m.jsx(r("WAWebUnstyledButton.react"), {
                      onClick: d,
                      xstyle: p.participantCount,
                      children: F,
                    }),
                  ],
                })),
          (a[13] = S),
          (a[14] = d),
          (a[15] = w),
          (a[16] = F),
          (a[17] = O))
        : (O = a[17]);
      var B = O,
        W;
      a[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = (c || (c = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
          )),
          (a[18] = W))
        : (W = a[18]);
      var q;
      a[19] !== i || a[20] !== h
        ? ((q = m.jsx(r("WAWebGroupInfoPhoto.react"), {
            chat: i,
            xstyle: o("WAWebUISpacing").uiMargin.bottom10,
            showAddIconOverlay: !0,
            showHiddenSubgroupIcon: h,
          })),
          (a[19] = i),
          (a[20] = h),
          (a[21] = q))
        : (q = a[21]);
      var U;
      a[22] !== i || a[23] !== l
        ? ((U = m.jsx(f, {
            chat: i,
            focusOnMount: l,
            xstyle: o("WAWebUISpacing").uiMargin.bottom6,
          })),
          (a[22] = i),
          (a[23] = l),
          (a[24] = U))
        : (U = a[24]);
      var V;
      a[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { className: "x1evy7pa x1kgmq87 x2b8uid" }), (a[25] = V))
        : (V = a[25]);
      var H;
      a[26] !== $ || a[27] !== B
        ? ((H = m.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, V, {
              children: m.jsxs(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                selectable: !0,
                dir: "auto",
                children: [$, " ", B],
              }),
            }),
          )),
          (a[26] = $),
          (a[27] = B),
          (a[28] = H))
        : (H = a[28]);
      var G;
      a[29] !== E || a[30] !== L
        ? ((G =
            L === !0 &&
            E &&
            m.jsx(o("WAWebTag.react").Tag, {
              testid: void 0,
              theme: o("WAWebTag.react").TagTheme.Secondary,
              xstyle: p.internalBadge,
              children: s._(/*BTDS*/ "INTERNAL"),
            })),
          (a[29] = E),
          (a[30] = L),
          (a[31] = G))
        : (G = a[31]);
      var z;
      a[32] !== b
        ? ((z =
            o("WAWebBizGatingUtils").canDisplayLabel() &&
            m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: b })),
          (a[32] = b),
          (a[33] = z))
        : (z = a[33]);
      var j;
      a[34] !== i || a[35] !== S || a[36] !== u || a[37] !== _
        ? ((j = m.jsx(g, {
            chat: i,
            groupMetadata: S,
            onAddParticipant: u,
            onSearchMsgs: _,
          })),
          (a[34] = i),
          (a[35] = S),
          (a[36] = u),
          (a[37] = _),
          (a[38] = j))
        : (j = a[38]);
      var K;
      return (
        a[39] !== H ||
        a[40] !== G ||
        a[41] !== z ||
        a[42] !== j ||
        a[43] !== q ||
        a[44] !== U
          ? ((K = m.jsx(r("WAWebDrawerSection.react"), {
              theme: "refresh-new",
              children: m.jsxs(
                "div",
                babelHelpers.extends({}, W, { children: [q, U, H, G, z, j] }),
              ),
            })),
            (a[39] = H),
            (a[40] = G),
            (a[41] = z),
            (a[42] = j),
            (a[43] = q),
            (a[44] = U),
            (a[45] = K))
          : (K = a[45]),
        K
      );
    }
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
