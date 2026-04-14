__d(
  "WAWebStatusPostingMediaView.react",
  [
    "WALogger",
    "WAWebAttachMediaModel",
    "WAWebFindChatAction",
    "WAWebLogStatusPost",
    "WAWebLogStatusPosterActions",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaEditorForChatLoadable.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebNewsletterStatusSelectorButton.react",
    "WAWebNoop",
    "WAWebPrepareMessageSendingAction",
    "WAWebStatusChangePrivacyPopup.react",
    "WAWebUiIdleEventBus",
    "WAWebUserPrefsStatusType",
    "WAWebWamEnumStatusPostOrigin",
    "WAWebWamEnumStatusPostResult",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebStatusPrivacySettingConfig",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState;
    function g(e) {
      if (e != null)
        switch (e.setting) {
          case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
            return e.allowList.length;
          case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
            return e.denyList.length;
          default:
            return;
        }
    }
    function h(t) {
      var a = t.chat,
        i = t.initCaption,
        l = t.isNewsletterStatus,
        c = l === void 0 ? !1 : l,
        m = t.mediaCollection,
        h = t.newsletterWid,
        y = t.onCancel,
        C = t.onComplete,
        b = t.onRender,
        v = t.onSend,
        S = t.statusPosterActionsLogger,
        R = t.statusPostOrigin,
        L = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        E = L.audienceTracking,
        k = L.setStatusPostingPrivacyConfig,
        I = L.statusPostingPrivacyConfig,
        T = L.trackAudienceSelectorClicked,
        D = _(0),
        x = f(h != null ? h : null),
        $ = x[0],
        P = x[1],
        N =
          c && h == null
            ? function () {
                return d.jsx(r("WAWebNewsletterStatusSelectorButton.react"), {
                  selectedNewsletterWid: $,
                  onNewsletterSelected: P,
                  type: "media",
                });
              }
            : void 0,
        M = c && $ == null;
      p(
        function () {
          S == null ||
            S.logStatusReadyScreenImp(
              o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO,
            );
        },
        [S],
      );
      var w = function (t) {
          (t === void 0 && (t = !0),
            t && A(),
            C == null || C(!1),
            y == null || y(),
            m.mediaPickerStatsLogger.logCancel(),
            S == null || S.logComposerXoutTapped(),
            o("WAWebModalManager").ModalManager.closeMedia());
        },
        A = function () {
          a && a.setAttachMediaContents(null);
        },
        F = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              S == null ||
                S.logPostSendTap(
                  o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO,
                );
              var i =
                  N != null ? $ : n == null ? void 0 : n.selectedNewsletterWid,
                l = a;
              if (i != null && i !== a.id)
                try {
                  var c = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    i,
                    "statusComposeBox",
                  );
                  l = c.chat;
                } catch (t) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to resolve chat for newsletter ",
                          ": ",
                          "",
                        ])),
                      String(i),
                      t,
                    )
                    .sendLogs("sendStatusMedia-chat-resolution-failed");
                  return;
                }
              i == null &&
              (I == null ? void 0 : I.setting) ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .AllowList &&
              (I == null ? void 0 : I.allowList.length) === 0
                ? o("WAWebModalManager").ModalManager.open(
                    d.jsx(r("WAWebStatusChangePrivacyPopup.react"), {
                      statusPostingPrivacyConfig: I,
                      setStatusPostingPrivacyConfig: k,
                    }),
                  )
                : (o("WAWebUiIdleEventBus").UiIdleEventBus.once(
                    "ui_idle",
                    function () {
                      (t.forEach(function (e) {
                        var t = e.media,
                          n = {};
                        ((n.type = t.type),
                          (n.caption = t.caption),
                          (n.addEvenWhilePreparing =
                            t.previewable &&
                            t.state ===
                              o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE
                                .PROCESSING),
                          i != null && (n.isNewsletterStatus = !0));
                        var r = D.current,
                          a = {
                            statusPostOrigin:
                              R != null
                                ? R
                                : o("WAWebWamEnumStatusPostOrigin")
                                    .STATUS_POST_ORIGIN.STATUS_TAB_CAMERA,
                            mediaType: o(
                              "WAWebLogStatusPost",
                            ).getStatusMediaType(t.type),
                            hasCaption: !!t.caption,
                            hasFilters: t.hasFilter,
                            isCropped: t.isCropped,
                            isRotated: t.isRotated,
                            isVideoManuallyTrimmed: t.isVideoManuallyTrimmed,
                            isVideoMuted: t.isVideoMuted,
                            isVideoTrimmed: t.isVideoTrimmed,
                            perPostStatusPrivacySetting:
                              i == null
                                ? I == null
                                  ? void 0
                                  : I.setting
                                : void 0,
                            retryCount: r,
                            statusAudienceSelectorClicked:
                              E.statusAudienceSelectorClicked,
                            statusAudienceSelectorUpdated:
                              E.statusAudienceSelectorUpdated,
                            statusAudienceSize: i == null ? g(I) : void 0,
                          };
                        t.sendToChat({ chat: l, options: n })
                          .then(function (e) {
                            var t,
                              n,
                              r = e.msg
                                ? o("WAWebMsgGetters").isStatusWithMusic(e.msg)
                                : !1,
                              i =
                                (t =
                                  (n = e.msg) == null ||
                                  (n = n.contextInfo) == null ||
                                  (n = n.statusAttributions) == null
                                    ? void 0
                                    : n.some(function (e) {
                                        return e.statusReshare != null;
                                      })) != null
                                  ? t
                                  : !1;
                            o("WAWebLogStatusPost").logStatusPost(
                              babelHelpers.extends(
                                {
                                  statusPostResult: o(
                                    "WAWebLogStatusPost",
                                  ).getStatusPostResult(e.messageSendResult),
                                  msg: e.msg,
                                  statusContainsMusic: r,
                                  isReshare: i,
                                },
                                a,
                              ),
                            );
                          })
                          .catch(function (e) {
                            (o("WALogger")
                              .ERROR(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "Media status posting failed with error ",
                                    "",
                                  ])),
                                e,
                              )
                              .sendLogs("sendStatusMedia-failed", {
                                sampling: 0.01,
                              }),
                              o("WAWebLogStatusPost").logStatusPost(
                                babelHelpers.extends(
                                  {
                                    statusPostResult: o(
                                      "WAWebWamEnumStatusPostResult",
                                    ).STATUS_POST_RESULT.ERROR_UNKNOWN,
                                  },
                                  a,
                                ),
                              ));
                          });
                      }),
                        o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "sendStatusMedia: sent ",
                              " media items to chat",
                            ])),
                          t.length,
                        ),
                        A());
                    },
                  ),
                  (D.current += 1),
                  C == null || C(!0),
                  v == null || v(),
                  m.mediaPickerStatsLogger.logSend({ isViewOnce: !1 }),
                  o("WAWebModalManager").ModalManager.closeMedia());
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })();
      return (
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(a),
        d.jsx("div", {
          className:
            "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn x1y61xfy x78zum5",
          children: d.jsx(
            o("WAWebMediaEditorForChatLoadable.react")
              .MediaEditorForChatLoadable,
            {
              theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
              chat: a,
              onClose: w,
              onRender: b,
              initCaption: i != null ? i : null,
              onSendMedia: F,
              mediaCollection: m,
              sendAsSticker: !1,
              onDropText: r("WAWebNoop"),
              statusPostingPrivacyConfig: I,
              setStatusPostingPrivacyConfig: k,
              onAudienceSelectorClicked: T,
              isNewsletterStatus: c,
              newsletterWid: h,
              renderSubmitAccessory: N,
              isSubmitDisabled: M,
              tsNavigationData: { surface: "status-composer-media" },
            },
          ),
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
