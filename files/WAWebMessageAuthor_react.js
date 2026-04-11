__d(
  "WAWebMessageAuthor.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatParticipantColor",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupChatProfilePicture.react",
    "WAWebLidMigrationUtils",
    "WAWebMemberLabelRenderer.react",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebMessageUiUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterAdminProfileDetailsDrawer.react",
    "WAWebNewsletterAdminProfilePicture.react",
    "WAWebNewsletterGatingUtils",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUISpacing",
    "WAWebWid",
    "fbs",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t, n, r) {
      if (o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(r))
        return u._(/*BTDS*/ "Meta AI").toString();
      if (t) return e + " \xB7 " + u._(/*BTDS*/ "Status").toString();
      if (n) {
        var a = o("WAWebChatCollection").ChatCollection.get(n),
          i = a ? a.formattedTitle : u._(/*BTDS*/ "Group").toString();
        return i ? e + " \xB7 " + i : e;
      }
      return e;
    }
    var _ = {
      picInBubble: { position: "x1n2onr6", $$css: !0 },
      authorElevatedPushNames: { display: "x78zum5", $$css: !0 },
      authorLabel: { lineHeight: "x1fc57z9", $$css: !0 },
      label: {
        color: "x1bvqhpb",
        lineHeight: "x1d3mw78",
        fontWeight: "x1fcty0u",
        $$css: !0,
      },
      groupHistoryMessage: { filter: "x1olsc1v", $$css: !0 },
    };
    function f(t) {
      var n,
        a,
        i,
        l,
        s = t.albumId,
        d = t.chat,
        f = t.disableClick,
        h = t.displayType,
        y = t.msg,
        C = t.quotedRemoteJid,
        b = t.showMemberLabel,
        v = b === void 0 ? !0 : b,
        S = t.stopClickPropagation,
        R = S === void 0 ? !1 : S,
        L = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          o("WAWebMsgGetters").getSender,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getIsLive,
          o("WAWebMsgGetters").getIsStatus,
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getQuotedMsg,
          o("WAWebFrontendMsgGetters").getShouldDisplaySelf,
          o("WAWebMsgGetters").getGroupHistoryBundleMessageKey,
          o("WAWebMsgGetters").getNewsletterAdminProfile,
        ]),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = L[4],
        x = L[5],
        $ = L[6],
        P = L[7],
        N = L[8],
        M =
          E == null
            ? E
            : (n = o(
                  "WAWebSimpleSignalPNToFBIDMigration",
                ).getDeprecatedPnChatForFbidInvoke(E)) != null
              ? n
              : E,
        w = o("WAWebFrontendMsgGetters").getMaybeChat(t.msg.unsafe()),
        A =
          (a = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidInvoke(t.contact.id)) != null
            ? a
            : t.contact.id,
        F = o("useWAWebContactValues").useContactValues(A, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebContactGetters").getIsSupportAccount,
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getNotifyName,
          o("WAWebContactGetters").getPushname,
          o("WAWebContactGetters").getVerifiedLevel,
          o("WAWebContactGetters").getVerifiedName,
        ]),
        O = F[0],
        B = F[1],
        W = F[2],
        q = F[3],
        U = F[4],
        V = F[5],
        H = F[6],
        G = F[7],
        z = r("useWAWebContactFormattedUsernameOrPhoneByChat")(w, t.contact),
        j = z.formattedUsernameOrPhone,
        K = z.isPhoneNumberForceMasked,
        Q = !!f || K === !0,
        X = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(w),
        Y =
          h === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
          h === o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE ||
          g(N),
        J = function (t) {
          var e = M;
          e != null &&
            (w != null &&
              o("WAWebChatGetters").getIsGroup(w) &&
              (e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
                e,
                "message_author_handle_click",
              )),
            e != null &&
              (R && t.stopPropagation(),
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(e, "messageAuthor")
                .then(function (e) {
                  var t = e.chat,
                    n =
                      w != null &&
                      (o("WAWebChatGetters").getIsGroup(w) ||
                        o("WAWebChatGetters").getIsNewsletter(w))
                        ? w
                        : void 0;
                  o("WAWebCmd").Cmd.chatInfoDrawer(t, {
                    sourceGroupChatOrNewsletter: n,
                  });
                })));
        },
        Z = d || w;
      Z ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Assertion failed!",
              ])),
          )
          .sendLogs("author-with-no-chat");
      var ee =
          Q || o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(y)
            ? null
            : J,
        te =
          v &&
          o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForMsg(y)
            ? m.jsx(r("WAWebMemberLabelRenderer.react"), {
                memberLabelArgs: { from: "message", message: y },
                onClick: J,
              })
            : null,
        ne =
          Z &&
          M &&
          !o(
            "useWAWebDefaultProfileColors",
          ).isDefaultProfileColorsEnabledForWid(M)
            ? o("WAWebChatParticipantColor").getAssignedColor(
                Z,
                M,
                "WAWebMessageAuthor-" +
                  ((i = o("WAWebQuotedMessageUserJourneyLogger").getChatType(
                    Z.id,
                  )) != null
                    ? i
                    : ""),
              )
            : 1,
        re = o("useWAWebDefaultProfileColors").useDefaultProfileColors(M),
        oe = re.foreground,
        ae = o("useWAWebGroupColors").useGroupsColorStyle(ne, "color"),
        ie = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ahxj",
          ((l = {}), (l._ahxz = ee), l),
          (c || (c = r("stylex")))(
            X && _.authorElevatedPushNames,
            (k === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
              k === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ||
              k === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) &&
              o("WAWebUISpacing").uiPadding.start4,
            Y && _.picInBubble,
            oe != null ? oe : ae,
            P != null && _.groupHistoryMessage,
          ),
        ),
        le;
      if ($)
        le = m.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: p(r("fbs")._(/*BTDS*/ "You").toString(), T, C, y),
        });
      else if (g(N))
        le = m.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: p(N == null ? void 0 : N.name, T, C, y),
          onClick: function () {
            return o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              m.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
                color: ne,
                newsletterAdminProfile: N,
                onClose: o("WAWebDrawerManager").closeDrawerRight,
              }),
            );
          },
        });
      else if (
        q ||
        o("WAWebMsgGetters").getIsGroupStatus(y) ||
        (G && H !== 0) ||
        W
      ) {
        var se = o("WAWebLidMigrationUtils").getShouldShowLidDebugUI(O),
          ue = q != null ? q : G;
        (o("WAWebMsgGetters").getIsGroupStatus(y) && (ue = V),
          (ue = se ? ue + " [LID]" : ue),
          (le = [
            m.jsx(
              o("WAWebEmojiText.react").EmojiText,
              {
                text: p(W ? B : ue, T, C, y),
                className: "_ahxt",
                testid: void 0,
                onClick: ee,
              },
              "author",
            ),
          ]));
      } else if (r("WAWebWid").isPSA(O)) {
        var ce = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ahxt",
            "_al63",
          ),
          de = o("WAWebConnModel").Conn.isSMB
            ? "WhatsApp Business"
            : "WhatsApp";
        le = [
          m.jsx(
            o("WAWebEmojiText.react").EmojiText,
            {
              text: p(de, T, C, y),
              className: ce,
              testid: void 0,
              onClick: ee,
            },
            "author",
          ),
          m.jsx(
            "div",
            {
              className: "_ahx-",
              children: o("WAWebMiscGatingUtils").isBlueEnabled()
                ? m.jsx(
                    o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                    {},
                  )
                : m.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {}),
            },
            "authorCheckMark",
          ),
        ];
      } else if (X) {
        if (((le = []), !T)) {
          var me = r("isStringNullOrEmpty")(s)
              ? D.toString() + "-push-name"
              : s + "-push-name",
            pe =
              (O == null ? void 0 : O.isBot()) === !0
                ? u._(/*BTDS*/ "Meta AI").toString()
                : U != null
                  ? U
                  : V;
          le = [
            m.jsx(
              o("WAWebEmojiText.react").EmojiText,
              {
                className: "_ahxy",
                testid: void 0,
                onClick: ee,
                direction: "auto",
                ellipsify: !0,
                text: pe,
                ariaLabel: o("WAWebMessageUiUtils").getAriaLabelForMaybeName(
                  pe,
                ),
              },
              me,
            ),
          ];
        }
        var _e = O != null && O.isLid() ? j : p(j, T, C, y),
          fe = m.jsx(
            "span",
            {
              className: "_ahx_",
              testid: void 0,
              role: ee ? "button" : null,
              onClick: ee,
              children: _e,
            },
            D.toString() + "-number",
          );
        le.push(fe);
      } else {
        var ge = O != null && O.isLid() ? j : p(j, T, C, y);
        le = [
          m.jsx(
            "span",
            {
              className: "_ahxu",
              role: ee ? "button" : null,
              testid: void 0,
              onClick: ee,
              children: ge,
            },
            D.toString() + "-number",
          ),
        ];
        var he = le;
        if (!T) {
          var ye = r("isStringNullOrEmpty")(s)
              ? D.toString() + "-push-name"
              : s + "-push-name",
            Ce;
          ((O == null ? void 0 : O.isBot()) === !0
            ? (Ce = u._(/*BTDS*/ "Meta AI").toString())
            : r("isStringNullOrEmpty")(U)
              ? (Ce = V)
              : (Ce = U),
            he.push(
              m.jsx(
                o("WAWebEmojiText.react").EmojiText,
                {
                  className: "_ahxv",
                  testid: void 0,
                  onClick: ee,
                  direction: "auto",
                  ellipsify: !0,
                  text: Ce,
                },
                ye,
              ),
            ));
        }
      }
      if (Y) {
        var be,
          ve,
          Se =
            h === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT &&
            M != null &&
            !!(
              !(
                Z == null ||
                (be = Z.groupMetadata) == null ||
                (be = be.participants) == null ||
                (be = be.get(M)) == null
              ) && be.isAdmin
            );
        return (
          Se && (ve = u._(/*BTDS*/ "Community admin")),
          m.jsxs("div", {
            className: ie,
            role: t.role || "",
            children: [
              m.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (c || (c = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.end9,
                    (Se || g(N)) && o("WAWebUISpacing").uiMargin.vert6,
                  ),
                  {
                    children: g(N)
                      ? m.jsx(r("WAWebNewsletterAdminProfilePicture.react"), {
                          newsletterAdminProfile: N,
                          color: ne,
                        })
                      : m.jsx(r("WAWebGroupChatProfilePicture.react"), {
                          userContact: t.contact,
                          chatWid: r("WANullthrows")(Z).id,
                          disableClick: Q,
                          usePicInBubbleLayout: !0,
                        }),
                  },
                ),
              ),
              m.jsxs("div", {
                className: "x78zum5 xdt5ytf x1cy8zhl xl56j7k x6ikm8r x10wlt62",
                children: [
                  m.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      c.props(
                        _.authorLabel,
                        X && _.authorElevatedPushNames,
                        o("WAWebUISpacing").uiMargin.top4,
                        o("WAWebUISpacing").uiMargin.bottom2,
                      ),
                      { children: le },
                    ),
                  ),
                  ve &&
                    m.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (c || (c = r("stylex"))).props(
                          _.label,
                          o("WAWebUISpacing").uiMargin.top2,
                          o("WAWebUISpacing").uiMargin.bottom4,
                        ),
                        { children: ve },
                      ),
                    ),
                  te,
                ],
              }),
            ],
          })
        );
      }
      return m.jsxs(m.Fragment, {
        children: [
          m.jsx("div", { className: ie, role: t.role || "", children: le }),
          m.jsx("div", { children: te }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return (
        e != null &&
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterAdminProfilesReceiverEnabled()
      );
    }
    l.default = f;
  },
  226,
);
