__d(
  "WAWebMessageCommunityGeneralChatWelcome.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebFormatParticipantNames",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebAddParticipantsSelectedContacts",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a = o("react-compiler-runtime").c(41),
        i = t.author,
        l = t.subgroupChat,
        u = t.templateParams,
        d = u[0],
        m = u[1],
        p = r("useWAWebAddParticipantsSelectedContacts")(),
        _ = p.handleClearSelectedContacts,
        f = p.selectedContactsMap,
        g = p.updateSelectedContactsState;
      if (((n = l.groupMetadata) == null ? void 0 : n.parentGroup) == null) {
        var h;
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.vert6,
              o("WAWebUISpacing").uiPadding.horiz12,
            )),
            (a[0] = h))
          : (h = a[0]);
        var y;
        a[1] !== l.formattedTitle
          ? ((y = o(
              "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
            ).communityGeneralChatWelcomeTitle(l.formattedTitle)),
            (a[1] = l.formattedTitle),
            (a[2] = y))
          : (y = a[2]);
        var C;
        return (
          a[3] !== y
            ? ((C = c.jsx("div", babelHelpers.extends({}, h, { children: y }))),
              (a[3] = y),
              (a[4] = C))
            : (C = a[4]),
          C
        );
      }
      var b = l.groupMetadata.parentGroup,
        v,
        S,
        R;
      if (a[5] !== m || a[6] !== b || a[7] !== l.formattedTitle) {
        var L,
          E = o("WAWebChatCollection").ChatCollection.get(b);
        ((v = E == null ? void 0 : E.formattedTitle),
          (S = m != null ? m : l == null ? void 0 : l.formattedTitle),
          (R = (L = E == null ? void 0 : E.iAmAdmin()) != null ? L : !1),
          (a[5] = m),
          (a[6] = b),
          (a[7] = l.formattedTitle),
          (a[8] = v),
          (a[9] = S),
          (a[10] = R));
      } else ((v = a[8]), (S = a[9]), (R = a[10]));
      var k = R,
        I;
      a[11] !== _ ||
      a[12] !== k ||
      a[13] !== b ||
      a[14] !== v ||
      a[15] !== f ||
      a[16] !== l ||
      a[17] !== g
        ? ((I = function () {
            if (k) {
              if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(
                    o("WAWebReachoutTimelockRestrictedModalLoadable")
                      .ReachoutTimelockRestrictedModalLoadable,
                    {},
                  ),
                );
                return;
              }
              o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow(
                {
                  groupMetadata: r("WANullthrows")(l.groupMetadata),
                  chat: l,
                  communityName: v,
                  selectedContactsMap: f,
                  updateSelectedContactsState: g,
                  reopenAddGroupFlowCallback: I,
                  handleClearSelectedContacts: _,
                },
              );
            } else o("WAWebCmd").Cmd.openCommunityTabbedInfo(b);
          }),
          (a[11] = _),
          (a[12] = k),
          (a[13] = b),
          (a[14] = v),
          (a[15] = f),
          (a[16] = l),
          (a[17] = g),
          (a[18] = I))
        : (I = a[18]);
      var T;
      e: switch (d) {
        case "created": {
          var D;
          (a[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((D =
                !o(
                  "WAWebCommunityGatingUtils",
                ).communityGeneralChatV2Enabled() &&
                s._(
                  /*BTDS*/ "Any new community members will automatically be added here",
                )),
              (a[19] = D))
            : (D = a[19]),
            (T = D));
          break e;
        }
        case "subtype-general_chat_add": {
          var x;
          (a[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((x =
                !o(
                  "WAWebCommunityGatingUtils",
                ).communityGeneralChatV2Enabled() &&
                s._(
                  /*BTDS*/ "You were added to this group when you joined the community",
                )),
              (a[20] = x))
            : (x = a[20]),
            (T = x));
          break e;
        }
        case "accept":
        case "":
        case null: {
          var $;
          a[21] !== i
            ? (($ = o("WAWebFormatParticipantNames").getFormattedNames(i)),
              (a[21] = i),
              (a[22] = $))
            : ($ = a[22]);
          var P = $;
          if (P != null && P !== "") {
            var N;
            (a[23] !== P
              ? ((N = s._(/*BTDS*/ "{admin_name} added you", [
                  s._param("admin_name", P),
                ])),
                (a[23] = P),
                (a[24] = N))
              : (N = a[24]),
              (T = N));
          } else {
            var M;
            (a[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = s._(/*BTDS*/ "You joined this group")), (a[25] = M))
              : (M = a[25]),
              (T = M));
          }
          break e;
        }
        case "invite":
        case "linked_group_join":
        default: {
          var w;
          (a[26] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = s._(/*BTDS*/ "You joined this group")), (a[26] = w))
            : (w = a[26]),
            (T = w));
        }
      }
      var A;
      a[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
            ? s._(
                /*BTDS*/ "All community members can join and use this chat to message each other.",
              )
            : s._(
                /*BTDS*/ "All community members can use this chat to talk with each other",
              )),
          (a[27] = A))
        : (A = a[27]);
      var F = A,
        O;
      a[28] !== T
        ? ((O =
            o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && !T
              ? c.jsx(c.Fragment, { children: F })
              : c.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                  items: [
                    c.jsx(c.Fragment, { children: T }),
                    c.jsx(c.Fragment, { children: F }),
                  ],
                })),
          (a[28] = T),
          (a[29] = O))
        : (O = a[29]);
      var B = O,
        W;
      a[30] !== k
        ? ((W = k
            ? s._(/*BTDS*/ "Add members")
            : s._(/*BTDS*/ "Explore the community")),
          (a[30] = k),
          (a[31] = W))
        : (W = a[31]);
      var q = W,
        U = l.id,
        V;
      a[32] !== S
        ? ((V = o(
            "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
          ).communityGeneralChatWelcomeTitle(S)),
          (a[32] = S),
          (a[33] = V))
        : (V = a[33]);
      var H;
      return (
        a[34] !== B ||
        a[35] !== q ||
        a[36] !== I ||
        a[37] !== b ||
        a[38] !== l.id ||
        a[39] !== V
          ? ((H = c.jsx(
              o("WAWebMessageCommunityCard.react").MessageCommunityCard,
              {
                communityId: b,
                subgroupId: U,
                title: V,
                body: B,
                footer: q,
                onFooterClick: I,
              },
            )),
            (a[34] = B),
            (a[35] = q),
            (a[36] = I),
            (a[37] = b),
            (a[38] = l.id),
            (a[39] = V),
            (a[40] = H))
          : (H = a[40]),
        H
      );
    }
    l.default = d;
  },
  226,
);
