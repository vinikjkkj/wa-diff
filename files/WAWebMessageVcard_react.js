__d(
  "WAWebMessageVcard.react",
  [
    "cx",
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddContactToGroupFlowLoadable",
    "WAWebAddUserIcon.react",
    "WAWebAudioDownloadIcon.react",
    "WAWebBizBotLogging",
    "WAWebBizCtwaContext.react",
    "WAWebBotBaseGating",
    "WAWebBotProfileCollection",
    "WAWebChatEntryPoint",
    "WAWebChatIcon.react",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactEditUtils",
    "WAWebContactLogging",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebContactViewer.react",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFbtAppName",
    "WAWebFbtCommon",
    "WAWebFileSaver",
    "WAWebFindChatAction",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebMediaMissingModal.react",
    "WAWebMediaTypes",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageComponentContext.react",
    "WAWebMessageLogQplEvents",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebProfileImage.react",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryExistsJob",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUim",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebVcardGetNameFromParsed",
    "WAWebVcardParsingUtils",
    "WAWebVcardWidChoiceModal.react",
    "WAWebWamEnumProfileEntryPoint",
    "WDSButton.react",
    "WDSIconWdsIcAiFilled.react",
    "fbs",
    "lodash",
    "react",
    "react-compiler-runtime",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e.useContext,
      m = {
        subtitleContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
      };
    function p(e) {
      "use no forget";
      var t,
        n,
        a,
        i = e.downloadMedia,
        l = e.mediaStage,
        s = e.msg,
        p = e.onMessageClick,
        g = e.vcard,
        h = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (n = o("WAWebMsgGetters")).getVcardFormattedName,
          (a = o("WAWebFrontendMsgGetters")).getRtl,
          a.getDir,
          n.getIsSentByMe,
          n.getIsGroupMsg,
          a.getSenderObj,
          n.getIsVcardOverMmsDocument,
          n.getType,
        ]),
        C = h[0],
        v = h[1],
        S = h[2],
        R = h[3],
        L = h[4],
        E = h[5],
        k = h[6],
        I = h[7],
        T = a.getChat(s.unsafe()),
        D = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(g),
        x = o("WAWebVcardParsingUtils").vcardLidWid(g),
        $ = !!g && o("WAWebVcardParsingUtils").vcardIsBiz(g),
        P = null;
      $ &&
        o("WAWebBotBaseGating").isBizBot3pEnabled() &&
        (P = D.length > 0 ? D[0] : x);
      var N = o("WAWebUseBusinessProfile.react").useBusinessProfile(P, [
          "isBizBot3p",
        ]),
        M = (N == null ? void 0 : N.isBizBot3p) === !0,
        w = o("WAWebContactUtils").getContactDataFromVcard(g),
        A = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        ["add", "remove"],
        function () {
          o("WAWebContactManagementGating").contactManagementEnabled() &&
            w &&
            A();
        },
      );
      var F = d(
          o("WAWebMessageComponentContext.react").MessageComponentContext,
        ),
        O = F.onSaveContact,
        B = function (t, n) {
          var e = function (t, n) {
            var e = $ && n;
            e && o("WAWebMessageLogQplEvents").qplStartProfileView("VCard");
            var r = $;
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(t, "messageVCard", { forceUsync: r })
              .then(function (t) {
                var r = t.chat;
                (p == null || p(),
                  o("WAWebModalManager").ModalManager.close(),
                  o("WAWebCmd")
                    .Cmd.openChatFromUnread({
                      chat: r,
                      chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                        .Vcard,
                    })
                    .then(function (t) {
                      if (!t) {
                        e && o("WAWebMessageLogQplEvents").qplEndProfileView(3);
                        return;
                      }
                      (n &&
                        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                          o(
                            "WAWebAdaptiveLayoutGatingUtils",
                          ).shouldUseDrawerDescriptor()
                            ? {
                                descriptorType: "info_flow",
                                chat: r,
                                profileEntryPoint: o(
                                  "WAWebWamEnumProfileEntryPoint",
                                ).PROFILE_ENTRY_POINT.CONTACT_CARD,
                              }
                            : c.jsx(
                                o("WAWebInfoFlowLoadable").InfoFlowLoadable,
                                {
                                  chat: r,
                                  profileEntryPoint: o(
                                    "WAWebWamEnumProfileEntryPoint",
                                  ).PROFILE_ENTRY_POINT.CONTACT_CARD,
                                },
                                "info-" + r.id.toString(),
                              ),
                          {
                            transition: "slide-left",
                            uim: o("WAWebUim").UIM.Manager.getTop(),
                            focusType: o("WAWebKeyboardTabUtils").FocusType
                              .TABBABLE,
                          },
                        ),
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(r));
                    })
                    .catch(function () {
                      e && o("WAWebMessageLogQplEvents").qplEndProfileView(3);
                    }));
              })
              .catch(function () {
                e && o("WAWebMessageLogQplEvents").qplEndProfileView(3);
              });
          };
          !o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() ||
          !t.isLid()
            ? e(t, n)
            : o("WAWebQueryExistsJob")
                .queryWidUsernameExists(t)
                .then(function (r) {
                  (r == null ? void 0 : r.username) == null ? y() : e(t, n);
                });
        },
        W = function (t) {
          g &&
            (D.length > 1
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebVcardWidChoiceModal.react"), {
                    icon: c.jsx(o("WAWebChatIcon.react").ChatIcon, {
                      className_DONOTUSE: "_ahzc",
                      directional: !0,
                    }),
                    vcard: g,
                    onCancel: o("WAWebModalManager").closeModalManager,
                    onSelect: function (n) {
                      return B(n, t);
                    },
                  }),
                )
              : x
                ? B(x, t)
                : D.length > 0 && B(D[0], t));
        },
        q = function () {
          w &&
            (w != null && w.lid
              ? o("WAWebQueryExistsJob")
                  .queryWidUsernameExists(w == null ? void 0 : w.lid)
                  .then(function (e) {
                    (e == null ? void 0 : e.username) == null
                      ? y()
                      : O
                        ? O(w)
                        : o("WAWebContactEditUtils").openContactEditDrawer(
                            w,
                            o("WAWebContactLogging").ContactSourceType.VCard,
                          );
                  })
              : O
                ? O(w)
                : o("WAWebContactEditUtils").openContactEditDrawer(
                    w,
                    o("WAWebContactLogging").ContactSourceType.VCard,
                  ));
        },
        U = function () {
          g
            ? o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() && x
              ? o("WAWebQueryExistsJob")
                  .queryWidUsernameExists(x)
                  .then(function (e) {
                    (e == null ? void 0 : e.username) == null
                      ? y()
                      : o("WAWebModalManager").ModalManager.open(
                          c.jsx(r("WAWebContactViewer.react"), {
                            vcard: g,
                            onSaveContact: q,
                            username: e.username,
                          }),
                        );
                  })
              : o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebContactViewer.react"), {
                    vcard: g,
                    onSaveContact: q,
                  }),
                )
            : o("WAWebModalManager").ModalManager.open(
                c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "vcard-download",
                  },
                  onCancel: o("WAWebModalManager").closeModalManager,
                  onOK: function () {
                    (o("WAWebModalManager").ModalManager.close(),
                      o("WAWebFileSaver").FileSaver.initDownload(
                        o("WAWebStateUtils").unproxy(s.unsafe()),
                      ));
                  },
                  okText: u._(/*BTDS*/ "Download"),
                  cancelText: u._(/*BTDS*/ "Cancel"),
                  title: u._(/*BTDS*/ "Download contact?"),
                  children: u._(
                    /*BTDS*/ "This contact can't be displayed in {=m1}. Download it to open it with another app on your computer?",
                    [
                      u._implicitParam(
                        "=m1",
                        c.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                          children: u._(/*BTDS*/ ""),
                        }),
                      ),
                    ],
                  ),
                }),
              );
        },
        V = function (t, n, a) {
          var e = {
            label: r("WAWebFbtCommon")("Message"),
            onClick: function () {
              (W(!1),
                M &&
                  o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent(
                    "message_click",
                  ));
            },
            title:
              o("WAWebNonEmptyString").asMaybeNonEmptyString(t) != null
                ? u._(/*BTDS*/ "Message {author}", [u._param("author", t)])
                : r("WAWebFbtCommon")("Message"),
            testid: "message-author-bubble-action",
          };
          if (n === !0) {
            var i = {
              label: u._(/*BTDS*/ "View AI"),
              onClick: function (t) {
                (W(!0),
                  o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent(
                    "view_ai_click",
                  ));
              },
            };
            return [e, i];
          }
          if ($ === !0) {
            var l = {
              label: u._(/*BTDS*/ "View business"),
              onClick: function (t) {
                return W(!0);
              },
            };
            return [e, l];
          }
          if (
            o("WAWebContactManagementGating").contactManagementEnabled() &&
            (w == null ? void 0 : w.isExistingContact) === !1
          ) {
            var s = { label: u._(/*BTDS*/ "Save contact"), onClick: q };
            return [e, s];
          }
          if (a === !0) return [e];
          var c = {
            label: u._(/*BTDS*/ "Add to a group"),
            onClick: function () {
              b(g);
            },
            testid: "add-to-group-bubble-action",
          };
          return [e, c];
        },
        H = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebMediaMissingModal.react"), { msg: s.unsafe() }),
          );
        },
        G,
        z,
        j;
      if (g) {
        var K = I === o("WAWebMsgType").MSG_TYPE.VCARD ? C : null;
        G = r("lodash").truncate(
          K ||
            o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(g) ||
            r("fbs")._(/*BTDS*/ "Contact").toString(),
          { length: 120, omission: r("fbs")._(/*BTDS*/ "\u2026").toString() },
        );
        var Q = D.find(function (e) {
          return e.isBot();
        });
        if (Q != null) {
          var X,
            Y,
            J =
              (X = o("WAWebBotProfileCollection").BotProfileCollection.get(
                Q,
              )) == null
                ? void 0
                : X.name;
          (J != null && (G = J),
            (j = c.jsxs("div", {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ((Y = {}), (Y._aoq1 = !0), Y),
              ),
              children: [
                u._(/*BTDS*/ "AI"),
                c.jsx(r("WDSIconWdsIcAiFilled.react"), {
                  width: 13,
                  height: 13,
                  colorName: "contentDeemphasized",
                }),
              ],
            })));
        }
        var Z = x != null;
        if (
          (Z &&
            o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) ||
          D.length > 0
        ) {
          var ee =
            o("WAWebUserPrefsMeUser").isMeAccount(x) ||
            D.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e);
            });
          z = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: V(G, Q != null || M, ee),
          });
        }
      }
      var te = o("WAWebDisplayType").isWideDisplay(e.displayType),
        ne = e.displayAuthor
          ? c.jsx("div", {
              className: "_ahy_",
              children: c.jsx(r("WAWebMessageAuthor.react"), {
                msg: s,
                contact: E,
                displayType: e.displayType,
              }),
            })
          : null,
        re = e.quotedMsg
          ? c.jsx("div", { className: "_ahyy", children: e.quotedMsg })
          : null,
        oe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._ahyz = ne != null),
          (t._ahz0 = re != null),
          (t._ahyw =
            e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO),
          (t._ahyx =
            e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS ||
            e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.CONTACT_CARD ||
            e.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY),
          (t._al03 = te),
          (t._ahyv = !0),
          t),
        ),
        ae =
          I === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
          !!k &&
          l === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING,
        ie = ae || (!e.placeholder && (g || T.isTrusted())),
        le = function () {
          if (ie) {
            if (ae) {
              H();
              return;
            }
            if (M) {
              (W(!0),
                o("WAWebBizBotLogging").logBizBot3pContactCardJourneyEvent(
                  "card_click",
                ));
              return;
            }
            U();
          }
        },
        se = !0,
        ue = o("WAWebFormatConfiguration").Compatibility({ selectable: se }),
        ce = e.placeholder
          ? c.jsx(_, { downloadMedia: i, mediaStage: l })
          : c.jsx(r("WAWebProfileImage.react"), {
              size: 49,
              thumb: o("WAWebVcardParsingUtils").vcardThumbnail(g),
              wid: o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.getThumbnailWidFromVcard(g),
            }),
        de;
      if (e.placeholder === !0) de = c.jsx(f, { mediaStage: l });
      else {
        var me = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: G,
          element: "div",
          className: "_ahz4",
          selectable: se,
          dirMismatch: v !== r("WAWebL10N").isRTL(),
          direction: S,
          formatters: ue,
        });
        ((de = me),
          M &&
            (de = c.jsxs("div", {
              children: [
                me,
                c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: m.subtitleContainer,
                  color: "secondary",
                  children: u._(/*BTDS*/ "AI"),
                }),
              ],
            })));
      }
      return (
        e.placeholder &&
          (l === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING
            ? (z = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: V().map(function (e) {
                  return babelHelpers.extends({}, e, { onClick: H });
                }),
              }))
            : (z = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [],
                placeholder: !0,
              }))),
        c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
          className: oe,
          contact: E,
          msg: s.unsafe(),
          children: [
            ne,
            re,
            c.jsx(r("WAWebBizCtwaContext.react"), {
              msg: s.unsafe(),
              wrapperClass: "_ahz6",
            }),
            c.jsxs("div", {
              className: "_ahy-",
              "data-testid": void 0,
              role: ie ? "button" : null,
              onClick: le,
              children: [
                c.jsx("div", { className: "_ahz2", children: ce }),
                c.jsxs("div", { className: "_ahz1", children: [de, j] }),
                c.jsx("div", {
                  className: "_ahz3",
                  children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: s }),
                }),
              ],
            }),
            z,
          ],
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.downloadMedia,
        a = e.mediaStage;
      if (!a) {
        var i;
        return (
          t[0] !== n
            ? ((i = c.jsx(h, { downloadMedia: n })), (t[0] = n), (t[1] = i))
            : (i = t[1]),
          i
        );
      }
      switch (a) {
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT: {
          var l;
          return (
            t[2] !== n
              ? ((l = c.jsx(h, { downloadMedia: n })), (t[2] = n), (t[3] = l))
              : (l = t[3]),
            l
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
          var s;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = c.jsx(g, { animate: !0, type: "profileImage" })),
                (t[4] = s))
              : (s = t[4]),
            s
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
          var u;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = c.jsx(g, { type: "profileImage" })), (t[5] = u))
              : (u = t[5]),
            u
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
          var d;
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = c.jsx(h, { downloadMedia: r("WAWebNoop") })), (t[6] = d))
              : (d = t[6]),
            d
          );
        }
        default: {
          var m;
          return (
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = c.jsx(g, { animate: !0, type: "profileImage" })),
                (t[7] = m))
              : (m = t[7]),
            m
          );
        }
      }
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.mediaStage;
      if (!n) {
        var r;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = c.jsx(g, { type: "body" })), (t[0] = r))
            : (r = t[0]),
          r
        );
      }
      switch (n) {
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
        case o("WAWebMediaTypes").MediaDataStage.INIT: {
          var a;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = c.jsx(g, { type: "body" })), (t[1] = a))
              : (a = t[1]),
            a
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
          var i;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = c.jsx(g, { animate: !0, type: "body" })), (t[2] = i))
              : (i = t[2]),
            i
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
          var l;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = c.jsx(g, { type: "body" })), (t[3] = l))
              : (l = t[3]),
            l
          );
        }
        default: {
          var s;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = c.jsx(g, { type: "body" })), (t[4] = s))
              : (s = t[4]),
            s
          );
        }
      }
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.animate,
        r = e.type,
        a = r === "profileImage" ? "_ahz9" : "_ahza",
        i = n ? "_ahz8" : null,
        l;
      if (t[0] !== a || t[1] !== i) {
        var s = ["_ahz7", a, i].filter(Boolean);
        ((l = o("WAWebClassnames").classnamesConvertMeToStylexPlease.apply(
          void 0,
          s,
        )),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l));
      } else l = t[2];
      var u;
      return (
        t[3] !== l
          ? ((u = c.jsx("div", { className: l })), (t[3] = l), (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.downloadMedia,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u._(/*BTDS*/ "Download")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = c.jsx(r("WDSButton.react"), {
              "aria-label": a,
              Icon: o("WAWebAudioDownloadIcon.react").AudioDownloadIcon,
              onPress: function () {
                n == null || n();
              },
              variant: "borderless",
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    var y = function () {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "vcard-download",
            },
            onOK: o("WAWebModalManager").closeModalManager,
            children: u._(
              /*BTDS*/ "Unable to load contact information. Please try again later.",
            ),
          }),
        );
      },
      C = function (t) {
        var e = function (t) {
          o("WAWebContactCollection")
            .ContactCollection.find(t)
            .then(function (e) {
              o("WAWebModalManager").ModalManager.open(
                c.jsx(
                  o("WAWebAddContactToGroupFlowLoadable")
                    .AddContactToGroupFlowLoadable,
                  { contact: e },
                ),
                { transition: "modal-flow" },
              );
            });
        };
        !o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() ||
        !t.isLid()
          ? e(t)
          : o("WAWebQueryExistsJob")
              .queryWidUsernameExists(t)
              .then(function (n) {
                (n == null ? void 0 : n.username) == null ? y() : e(t);
              });
      };
    function b(e) {
      var t = o("WAWebVcardParsingUtils").vcardPhoneNumberWids(e),
        n = o("WAWebVcardParsingUtils").vcardLidWid(e);
      t.length > 1 && e
        ? o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebVcardWidChoiceModal.react"), {
              icon: c.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
                directional: !0,
              }),
              vcard: e,
              onCancel: o("WAWebModalManager").closeModalManager,
              onSelect: C,
            }),
          )
        : n
          ? C(n)
          : t.length > 0 && C(t[0]);
    }
    l.default = p;
  },
  226,
);
