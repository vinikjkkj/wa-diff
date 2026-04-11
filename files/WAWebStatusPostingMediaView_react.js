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
      _ = m.useRef;
    function f(e) {
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
    function g(t) {
      var a = t.chat,
        i = t.initCaption,
        l = t.isNewsletterStatus,
        c = l === void 0 ? !1 : l,
        m = t.mediaCollection,
        g = t.newsletterWid,
        h = t.onCancel,
        y = t.onComplete,
        C = t.onRender,
        b = t.onSend,
        v = t.statusPosterActionsLogger,
        S = t.statusPostOrigin,
        R = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        L = R.audienceTracking,
        E = R.setStatusPostingPrivacyConfig,
        k = R.statusPostingPrivacyConfig,
        I = R.trackAudienceSelectorClicked,
        T = _(0);
      p(
        function () {
          v == null ||
            v.logStatusReadyScreenImp(
              o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO,
            );
        },
        [v],
      );
      var D = function (t) {
          (t === void 0 && (t = !0),
            t && x(),
            y == null || y(!1),
            h == null || h(),
            m.mediaPickerStatsLogger.logCancel(),
            v == null || v.logComposerXoutTapped(),
            o("WAWebModalManager").ModalManager.closeMedia());
        },
        x = function () {
          a && a.setAttachMediaContents(null);
        },
        $ = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              v == null ||
                v.logPostSendTap(
                  o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.PHOTO,
                );
              var i = n == null ? void 0 : n.selectedNewsletterWid,
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
              (k == null ? void 0 : k.setting) ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .AllowList &&
              (k == null ? void 0 : k.allowList.length) === 0
                ? o("WAWebModalManager").ModalManager.open(
                    d.jsx(r("WAWebStatusChangePrivacyPopup.react"), {
                      statusPostingPrivacyConfig: k,
                      setStatusPostingPrivacyConfig: E,
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
                        var r = T.current,
                          a = {
                            statusPostOrigin:
                              S != null
                                ? S
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
                                ? k == null
                                  ? void 0
                                  : k.setting
                                : void 0,
                            retryCount: r,
                            statusAudienceSelectorClicked:
                              L.statusAudienceSelectorClicked,
                            statusAudienceSelectorUpdated:
                              L.statusAudienceSelectorUpdated,
                            statusAudienceSize: i == null ? f(k) : void 0,
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
                        x());
                    },
                  ),
                  (T.current += 1),
                  y == null || y(!0),
                  b == null || b(),
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
              onClose: D,
              onRender: C,
              initCaption: i != null ? i : null,
              onSendMedia: $,
              mediaCollection: m,
              sendAsSticker: !1,
              onDropText: r("WAWebNoop"),
              statusPostingPrivacyConfig: k,
              setStatusPostingPrivacyConfig: E,
              onAudienceSelectorClicked: I,
              isNewsletterStatus: c,
              newsletterWid: g,
              tsNavigationData: { surface: "status-composer-media" },
            },
          ),
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
