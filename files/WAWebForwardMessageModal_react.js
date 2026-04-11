__d(
  "WAWebForwardMessageModal.react",
  [
    "fbt",
    "Keys",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebABProps",
    "WAWebAttachMediaCollection",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebChatModel",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebConstantsDeprecated",
    "WAWebContactGetters",
    "WAWebFbtCommon",
    "WAWebForwardErrorChatAction",
    "WAWebForwardMediaWithCaptionPopupNux.react",
    "WAWebForwardMessagesToChat",
    "WAWebForwardWithCaptionPreview.react",
    "WAWebFrequentlyForwardedWarning.react",
    "WAWebFrontendMsgGetters",
    "WAWebGroupGatingUtils",
    "WAWebLogStatusPost",
    "WAWebLogStatusPosterActions",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMediaPrep",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageYourselfMetricUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterForwardConfirmationModal.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNux",
    "WAWebPrepareMediaForStatusForwarding",
    "WAWebSelectModal.react",
    "WAWebSendStatusMsgAction",
    "WAWebSendTextMsgChatAction",
    "WAWebServerPropConstants",
    "WAWebShareContentUserJourneyLogger",
    "WAWebStatusPostingMediaView.react",
    "WAWebTabOrder",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebVideoUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStatusPostOrigin",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcGroupAdd.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useCallback,
      h = f.useMemo,
      y = f.useRef,
      C = f.useState,
      b = 1;
    function v(e) {
      var t = e.getAnnouncementSummary,
        a = e.msgs,
        i = e.onBack,
        l = e.onClose,
        u = e.onForward,
        c = e.onNewGroupClick,
        d = [];
      (o(
        "WAWebMessageAssociationGatingUtils",
      ).isMessageAssociationInfraEnabled()
        ? a == null ||
          a.forEach(function (e) {
            var t = o("WAWebFrontendMsgGetters").getAsAlbum(e);
            if (t) {
              var n = o(
                "WAWebMessageAssociationUIUtils",
              ).getHiddenAssociatedMessages(
                e.id,
                o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              );
              d.push.apply(d, n);
            } else d.push(e);
          })
        : d.push.apply(d, a),
        d.forEach(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
                  o("WAWebMsgGetters").getIsMedia(e) &&
                  !o("WAWebVideoUtils").isMsgStreamable(e) &&
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterQuickForwardingEnabled() &&
                  (yield e.downloadMedia({
                    downloadEvenIfExpensive: !0,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                      .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                    isUserInitiated: !0,
                  }));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ));
      var m = d[0],
        p = o("WAWebFrontendMsgGetters").getMaybeChat(m),
        f = d.some(o("WAWebMsgGetters").getIsFrequentlyForwarded),
        v = d.some(function (e) {
          return e.isForwarded;
        }),
        D = d.filter(function (e) {
          return (
            !o("WAWebMsgGetters").getIsFrequentlyForwarded(e) &&
            e.getForwardingScoreWhenForwarded() ===
              r("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
          );
        }),
        $ = D.length
          ? _.jsx(r("WAWebFrequentlyForwardedWarning.react"), {
              frequentlyForwardedCount: D.length,
              totalCount: d.length,
            })
          : void 0,
        N = f ? b : o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
        M = d.every(function (e) {
          return !o("WAWebMsgGetters").getIsMedia(e);
        }),
        w = o("WAWebMsgModelUtils").getMediaMsgWithCaptionForForwarding(d),
        A = C(w.length > 0),
        F = A[0],
        O = A[1],
        B = r("useWAWebNux")(o("WAWebNux").NUX.FORWARD_MEDIA_WITH_CAPTION),
        W = B[0],
        q = B[1],
        U = C(!1),
        V = U[0],
        H = U[1],
        G = function () {
          O(!1);
        },
        z = C(null),
        j = z[0],
        K = z[1],
        Q = C(!1),
        X = Q[0],
        Y = Q[1],
        J = y(null),
        Z = y(0),
        ee = function (t) {
          K(t);
        },
        te = g(function (e, t, n) {
          var r =
            n.length === 1 &&
            n[0] instanceof o("WAWebChatModel").Chat &&
            n[0].id.isStatus();
          (Y(r),
            r && n[0] instanceof o("WAWebChatModel").Chat
              ? (J.current = n[0])
              : (J.current = null));
        }, []),
        ne =
          X &&
          d.length === 1 &&
          d[0].type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_edit_before_forwarding_to_status",
          ) === !0;
      function re() {
        var e = J.current;
        e != null &&
          (new (o(
            "WAWebLogStatusPosterActions",
          ).StatusPosterActionsLogger)().logForwardPreviewEdit(),
          x(e, d[0], F, j, l, function (e) {
            e && (u == null || u(d));
          }));
      }
      function oe(e) {
        var t = e.isSearchResult,
          n = t === void 0 ? !1 : t,
          a = e.selectedItems,
          i = a,
          l = i.find(function (e) {
            return o("WAWebChatGetters").getIsNewsletter(e);
          });
        return l != null
          ? o("WAWebModalManager").ModalManager.open(
              _.jsx(r("WAWebNewsletterForwardConfirmationModal.react"), {
                forwardToChat: l,
                handleConfirm: function () {
                  return ae(i, n);
                },
              }),
            )
          : ae(i, n);
      }
      function ae(e, t) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (
          (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
            t === void 0 && (t = !1);
            var n = e.filter(function (e) {
              return !e.id.isStatus();
            });
            if (F && W && !n.some(k)) {
              H(!0);
              return;
            }
            var a = n[0],
              i =
                n.length === 1 &&
                a != null &&
                o("WAWebBotUtils").isMetaAiBot(a.id),
              s = function () {
                var e;
                o(
                  "WAWebShareContentUserJourneyLogger",
                ).ShareContentUserJourneyLogger.contentShared(
                  ((e = j == null ? void 0 : j.length) != null ? e : 0) > 0,
                );
              };
            if (i)
              o("WAWebForwardMessagesToChat")
                .forwardMessagesToChats({
                  msgs: d,
                  chats: n,
                  includeCaption: F,
                  appendedText: j,
                })
                .then(s)
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    r("WAWebForwardErrorChatAction"),
                    function (e) {
                      return E(e.reasons);
                    },
                  ),
                );
            else if (n.length > 0) {
              var c = o("WAWebForwardMessagesToChat")
                .forwardMessagesToChats({
                  msgs: d,
                  chats: n,
                  includeCaption: F,
                })
                .then(s)
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    r("WAWebForwardErrorChatAction"),
                    function (e) {
                      return E(e.reasons);
                    },
                  ),
                )
                .finally(function () {
                  return L(j, n);
                });
              a != null &&
                o("WAWebChatGetters").getIsNewsletter(a) &&
                (yield c);
            }
            var m = e.find(function (e) {
              return e.id.isStatus();
            });
            if (
              (m != null && T(m, d, F, j, Z), l(), u == null || u(d), a != null)
            )
              return o("WAWebCmd")
                .Cmd.openChatFromUnread({ chat: a })
                .then(function (e) {
                  e &&
                    o("WAWebContactGetters").getIsMe(a.contact) &&
                    o(
                      "WAWebMessageYourselfMetricUtils",
                    ).UiMessageYourselfSearchAction.logMessageYourselfOpenedEvent(
                      a,
                      t,
                    );
                });
          })),
          ie.apply(this, arguments)
        );
      }
      var le = h(
          function () {
            return d.some(function (e) {
              var t;
              return (t = e.interactiveAnnotations) == null
                ? void 0
                : t.some(function (e) {
                    var t;
                    return (
                      ((t = e.embeddedContent) == null
                        ? void 0
                        : t.embeddedMusic) != null
                    );
                  });
            });
          },
          [d],
        ),
        se = !d.some(function (e) {
          return !P(e);
        }),
        ue = { hasMusicAnnotations: le },
        ce =
          c != null &&
          o("WAWebGroupGatingUtils").isForwardToSmallGroupsEnabled()
            ? _.jsx(r("WDSMenuBarItem.react"), {
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                onClick: c,
                title: s._(/*BTDS*/ "New group"),
                icon: r("WDSIconIcGroupAdd.react"),
              })
            : null,
        de = {
          onBack: i,
          hasFrequentlyForwarded: f,
          hasForwarded: v,
          headerRightActionElement: ce,
          onConfirm: oe,
          maxItems: N,
          isDisabled: function (t) {
            return d.some(function (e) {
              return !o("WAWebMsgActionCapability").canForwardMsgToChat(e, t);
            });
          },
          customItemSecondaryText: I,
          excludeBroadcast: !0,
          title: R.title(d.length, m),
          includeNewsletters:
            p != null &&
            o("WAWebNewsletterGatingUtils").isForwardToNewsletterEnabled(),
          listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
          customHeader: $,
          ephemeralIcon: "chat-list",
          hasDirtyAppendMsgComposeBox: j != null && j !== "",
          includeMetaAi: o("WAWebBotGating").isAiWebForwardEnabled(),
          includeMyStatus:
            se &&
            o("WAWebABProps").getABPropConfigValue(
              "status_allow_forwarding_to_status_on_web",
            ),
          isNonMediaForward: M,
          chatFilter: function (t) {
            return o(
              "WAWebMsgActionCapability",
            ).allowedChatOrContactForForwarding(t, d, ue);
          },
          contactFilter: function (t) {
            return o(
              "WAWebMsgActionCapability",
            ).allowedChatOrContactForForwarding(t, d, ue);
          },
          onSelectionChanged: te,
          previewComponent: _.jsx(S, {
            includeCaption: F,
            handleAppendMessage: ee,
            handleRemoveCaption: G,
            msgs: d,
            mediaMsgsWithCaption: w,
            onEditClick: re,
            showEditIcon: ne,
          }),
        };
      return _.jsxs(_.Fragment, {
        children: [
          _.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "MessageForwardModal",
            escapable: !0,
            requestDismiss: function (t, n) {
              var e = i != null ? i : l;
              t === o("WAWebUim").DismissReason.UIM_INTERACTION &&
                n instanceof KeyboardEvent &&
                n.keyCode === r("Keys").ESC &&
                (e == null || e());
            },
            children: _.jsx(
              o("WAWebSelectModal.react").SelectModal,
              babelHelpers.extends({}, de, {
                tsNavigationData:
                  p != null && o("WAWebChatGetters").getIsNewsletter(p)
                    ? {
                        surface: "channel-forward",
                        extras: { channelWid: p.id },
                      }
                    : { surface: "forward-selection-modal" },
                getAnnouncementSummary: t,
              }),
            ),
          }),
          V &&
            _.jsx(r("WAWebForwardMediaWithCaptionPopupNux.react"), {
              onOk: function () {
                (q(), H(!1));
              },
            }),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.handleAppendMessage,
        a = e.handleRemoveCaption,
        i = e.includeCaption,
        l = e.mediaMsgsWithCaption,
        u = e.msgs,
        c = e.onEditClick,
        d = e.showEditIcon,
        m =
          u.length === 1 &&
          o("WAWebMsgGetters").getIsMedia(u[0]) &&
          !u[0].caption,
        p = o("WAWebMsgActionCapability").canForwardMsgToMetaAi(u);
      if (u.length === 0) return null;
      var f = u[0],
        g = o("WAWebFrontendMsgGetters").getMaybeChat(f);
      if (g != null && o("WAWebChatGetters").getIsNewsletter(g)) return null;
      if (l.length > 0) {
        var h;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = {
              className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
            }),
            (t[0] = h))
          : (h = t[0]);
        var y;
        t[1] !== n ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== u ||
        t[6] !== c ||
        t[7] !== d
          ? ((y = _.jsx(r("WAWebForwardWithCaptionPreview.react"), {
              msgs: l,
              displayCaptionText: i,
              onRemoveCaptionSelect: a,
              onAppendMessage: n,
              allMsgs: u,
              onEditClick: c,
              showEditIcon: d,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = u),
            (t[6] = c),
            (t[7] = d),
            (t[8] = y))
          : (y = t[8]);
        var C;
        return (
          t[9] !== h || t[10] !== y
            ? ((C = _.jsx("div", babelHelpers.extends({}, h, { children: y }))),
              (t[9] = h),
              (t[10] = y),
              (t[11] = C))
            : (C = t[11]),
          C
        );
      }
      if (m) {
        var b;
        t[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = {
              className: "x11uqc5h xv32h1t xh8yej3 x1od0jb8 x9f619 xpx74rz",
            }),
            (t[12] = b))
          : (b = t[12]);
        var v;
        t[13] !== n ||
        t[14] !== a ||
        t[15] !== i ||
        t[16] !== u ||
        t[17] !== c ||
        t[18] !== d
          ? ((v = _.jsx(r("WAWebForwardWithCaptionPreview.react"), {
              msgs: u,
              displayCaptionText: i,
              onRemoveCaptionSelect: a,
              onAppendMessage: n,
              onEditClick: c,
              showEditIcon: d,
            })),
            (t[13] = n),
            (t[14] = a),
            (t[15] = i),
            (t[16] = u),
            (t[17] = c),
            (t[18] = d),
            (t[19] = v))
          : (v = t[19]);
        var S;
        return (
          t[20] !== b || t[21] !== v
            ? ((S = _.jsx("div", babelHelpers.extends({}, b, { children: v }))),
              (t[20] = b),
              (t[21] = v),
              (t[22] = S))
            : (S = t[22]),
          S
        );
      }
      if (p) {
        var R;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = {
              className: "x11uqc5h xng8ra xh8yej3 xtl5do8 x9f619 xpx74rz",
            }),
            (t[23] = R))
          : (R = t[23]);
        var L;
        t[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = s._(/*BTDS*/ "Ask a question")), (t[24] = L))
          : (L = t[24]);
        var E;
        t[25] !== n || t[26] !== a || t[27] !== i || t[28] !== u
          ? ((E = _.jsx(r("WAWebForwardWithCaptionPreview.react"), {
              msgs: u,
              displayCaptionText: i,
              onRemoveCaptionSelect: a,
              onAppendMessage: n,
              captionPlaceholderText: L,
            })),
            (t[25] = n),
            (t[26] = a),
            (t[27] = i),
            (t[28] = u),
            (t[29] = E))
          : (E = t[29]);
        var k;
        return (
          t[30] !== R || t[31] !== E
            ? ((k = _.jsx("div", babelHelpers.extends({}, R, { children: E }))),
              (t[30] = R),
              (t[31] = E),
              (t[32] = k))
            : (k = t[32]),
          k
        );
      }
      return null;
    }
    var R = {
      title: function (t, n) {
        return o("WAWebMsgGetters").getIsNewsletterMsg(n)
          ? s._(
              /*BTDS*/ '_j{"*":"Forward updates to","_1":"Forward update to"}',
              [s._plural(t)],
            )
          : s._(
              /*BTDS*/ '_j{"*":"Forward messages to","_1":"Forward message to"}',
              [s._plural(t)],
            );
      },
    };
    function L(t, r) {
      if (!(t == null || t === "")) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendAppendedText inside WAWebForwardMessageModal",
            ])),
        );
        var a = r.map(function (e) {
          return o("WAWebChatGetters").getIsNewsletter(e)
            ? o("WAWebNewsletterSendMsgAction").sendNewsletterTextMsg(e, t, {})
            : o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t);
        });
        return (m || (m = n("Promise"))).all(a).catch(function (e) {});
      }
    }
    function E(e) {
      var t = e.map(function (e) {
        var t = e.chat,
          n = e.reason;
        return _.jsxs(
          "p",
          { children: [t.formattedTitle, " : ", n] },
          t.id.toString(),
        );
      });
      o("WAWebModalManager").ModalManager.open(
        _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "forward-message" },
          onOK: function () {
            return o("WAWebModalManager").ModalManager.close();
          },
          okText: r("WAWebFbtCommon")("OK"),
          children: t,
        }),
        void 0,
      );
    }
    function k(e) {
      return (
        e instanceof o("WAWebChatModel").Chat &&
        o("WAWebChatGetters").getIsNewsletter(e)
      );
    }
    function I(e, t) {
      if (!(!t || !k(e))) return s._(/*BTDS*/ "Message type not supported.");
    }
    function T(e, t, n, r, o) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            var l = t.length,
              s = i.current;
            ((i.current += 1),
              (m || (m = n("Promise"))).all(
                [].concat(
                  t.map(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          var n = yield o(
                              "WAWebPrepareMediaForStatusForwarding",
                            ).prepareMediaForStatusForwarding(t),
                            i = r ? t.caption : null;
                          return (
                            i == null && a != null && l === 1 && (i = a),
                            N({
                              statusChat: e,
                              msgType: t.type,
                              body: t.body,
                              caption: i,
                              mediaData: n,
                              retryCount: s,
                              statusContainsMusic:
                                o("WAWebMsgGetters").isStatusWithMusic(t),
                            })
                          );
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  ),
                  [
                    l > 1
                      ? N({
                          statusChat: e,
                          msgType: o("WAWebMsgType").MSG_TYPE.CHAT,
                          body: a,
                          retryCount: s,
                          statusContainsMusic: !1,
                        })
                      : null,
                  ],
                ),
              ));
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r, o, a) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s, d, m;
            try {
              var p;
              ((p = t.mediaData) != null && p.mediaBlob) ||
                (yield t.downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                  isUserInitiated: !0,
                }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "openStatusEditorForForward: failed to download media ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("status-forward-edit-download-failed", {
                  sampling: 0.01,
                });
              return;
            }
            var f = null,
              g = (s = t.mediaData) == null ? void 0 : s.mediaBlob;
            if (
              (g instanceof r("WAWebMediaOpaqueData")
                ? (f = g.forceToBlob())
                : ((d = t.mediaData) == null ? void 0 : d.filehash) != null &&
                  (f = o(
                    "WAWebMediaInMemoryBlobCache",
                  ).InMemoryMediaBlobCache.get(t.mediaData.filehash)),
              f == null)
            ) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "openStatusEditorForForward: could not get blob for message",
                    ])),
                )
                .sendLogs("status-forward-edit-no-blob", { sampling: 0.01 });
              return;
            }
            i();
            var h = n ? t.caption : null;
            h == null && a != null && (h = a);
            var y = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: e.getParticipantCount(),
            });
            e.setAttachMediaContents(y);
            var C = new File([f], "forwarded-media", {
                type:
                  f.type ||
                  ((m = t.mediaData) == null ? void 0 : m.mimetype) ||
                  "image/jpeg",
              }),
              b = { file: C },
              v = function () {
                var t = e.attachMediaContents;
                t != null &&
                  t.processAttachmentsForChat(
                    [b],
                    o("WAWebWamEnumMediaPickerOriginType")
                      .MEDIA_PICKER_ORIGIN_TYPE.FORWARD,
                    e,
                  );
              };
            o("WAWebModalManager").ModalManager.openMedia(
              _.jsx(r("WAWebStatusPostingMediaView.react"), {
                chat: e,
                initCaption: h != null ? { text: h } : null,
                mediaCollection: y,
                onComplete: l,
                onRender: v,
                statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
                  .STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
              }),
              { transition: "status-modal" },
            );
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e)
        ? !1
        : e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
            e.type === o("WAWebMsgType").MSG_TYPE.PTT ||
            o("WAWebMsgGetters").getIsMedia(e);
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = e.body,
            i = e.caption,
            l = e.mediaData,
            s = e.msgType,
            u = e.retryCount,
            c = e.statusChat,
            p = e.statusContainsMusic;
          if (!(!a && !l)) {
            var _ = {
                statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
                  .STATUS_POST_ORIGIN.FORWARD_FROM_MESSAGES,
                mediaType:
                  s === o("WAWebMsgType").MSG_TYPE.CHAT
                    ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT
                    : o("WAWebLogStatusPost").getStatusMediaType(s),
                hasCaption: !!i,
                hasFilters: !1,
                retryCount: u,
                statusContainsMusic: p,
              },
              f;
            try {
              l != null
                ? (f = yield new (o("WAWebMediaPrep").MediaPrep)(
                    s,
                    (m || (m = n("Promise"))).resolve(l),
                  ).sendToChat({
                    chat: c,
                    options: { caption: i, addEvenWhilePreparing: !0 },
                  }))
                : s === o("WAWebMsgType").MSG_TYPE.CHAT &&
                  a != null &&
                  (f = yield o(
                    "WAWebSendStatusMsgAction",
                  ).sendStatusTextMsgAction({ text: a }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to forward message as status ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("status-forward-failed", { sampling: 0.01 });
            }
            o("WAWebLogStatusPost").logStatusPost(
              babelHelpers.extends(
                {
                  statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(
                    (t = f) == null ? void 0 : t.messageSendResult,
                  ),
                  msg: (r = f) == null ? void 0 : r.msg,
                },
                _,
              ),
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    l.default = v;
  },
  226,
);
