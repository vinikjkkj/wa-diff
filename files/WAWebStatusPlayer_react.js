__d(
  "WAWebStatusPlayer.react",
  [
    "fbt",
    "$InternalEnum",
    "WAFilteredCatch",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebBizCoexStatusGatingUtils",
    "WAWebBlockContactAction",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebChatThreadLogging",
    "WAWebChevronIcon.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebCoexSystemMessageModalContent.react",
    "WAWebComplianceReportPopupLoadable",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingConfig",
    "WAWebCrosspostingIcons.react",
    "WAWebCrosspostingJob",
    "WAWebCrosspostingQplUtils",
    "WAWebDetailImage.react",
    "WAWebEligibilityCheckHelper",
    "WAWebErrorBoundary.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFileSaver",
    "WAWebFindChatAction",
    "WAWebFocusTracer",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupStatusAuthorImage.react",
    "WAWebKeyboardTabUtils",
    "WAWebL10N",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLogStatusReply",
    "WAWebMediaData",
    "WAWebMediaDataUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgInfoCollection",
    "WAWebMsgLinks",
    "WAWebMsgType",
    "WAWebMusicGatingUtils",
    "WAWebNewsletterGetStatusUpdatesJob",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterRevokeStatusAction",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNoop",
    "WAWebNux",
    "WAWebObjectFit.react",
    "WAWebPaidPartnershipLabelModal.react",
    "WAWebPrivateMessageComplianceUtils",
    "WAWebReportNewsletterStatusPopup.react",
    "WAWebReportStatusPopup.react",
    "WAWebRevokeStatusAction",
    "WAWebSendSpamChatAction",
    "WAWebSendStatusMuteAction",
    "WAWebSettingsModel",
    "WAWebSpamConstants",
    "WAWebSpinner.react",
    "WAWebStatusAudio.react",
    "WAWebStatusCaptionText.react",
    "WAWebStatusCloseFriendsDialog.react",
    "WAWebStatusComposeBox.react",
    "WAWebStatusDeletePopup.react",
    "WAWebStatusExternalShareUtils",
    "WAWebStatusGatingUtils",
    "WAWebStatusHostedDisclosure.react",
    "WAWebStatusImg.react",
    "WAWebStatusItemViewWamEvent",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMentionsPopup.react",
    "WAWebStatusMuteContactPopup.react",
    "WAWebStatusPlayerControlsMenu.react",
    "WAWebStatusProgressBar.react",
    "WAWebStatusSeenCount.react",
    "WAWebStatusSetupController",
    "WAWebStatusSubtitle.react",
    "WAWebStatusText.react",
    "WAWebStatusUnknown.react",
    "WAWebStatusVideo.react",
    "WAWebStatusViewerListModal.react",
    "WAWebStopEvent",
    "WAWebTabOrder",
    "WAWebTextStatusImageRenderer",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebVerificationDrawerLoadable",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentType",
    "WAWebWamEnumStatusItemViewResult",
    "WAWebWamEnumStatusReportInteraction",
    "WAWebWamEnumStatusRowEntryMethod",
    "WAWebWamEnumStatusRowSection",
    "WAWebWamEnumStatusViewEntryMethod",
    "WAWebWamEnumUrlStatusClicked",
    "WAWebWamEnumUrlStatusType",
    "WAWebWamStatusReportingEventsLogger",
    "WDSButton.react",
    "WDSText.react",
    "WaWebStatusPlayerName.react",
    "asyncToGeneratorRuntime",
    "cr:23046",
    "cr:6010",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useVideoPlayerXAPIOutsideVideoPlayerSurface",
    "useWAWebCanDownloadStatus",
    "useWAWebCanPlaybackAudio",
    "useWAWebDebouncedCallback",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebNux",
    "useWAWebOnUnmount",
    "useWAWebReactions",
    "useWAWebStableCallback",
    "useWAWebStatusContainsFutureproofEmbeddedContentBanner",
    "useWAWebStatusVisibilityLogger",
    "useWAWebTimeout",
    "useWAWebUnmountSignal",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u = ["ref"],
      c = ["ref"],
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useCallback,
      y = g.useEffect,
      C = g.useImperativeHandle,
      b = g.useLayoutEffect,
      v = g.useMemo,
      S = g.useRef,
      R = g.useState;
    function L(e) {
      o("WAWebCrosspostingQplUtils").crosspostingQplAnnotate({
        string: { entrypoint: "contextual_share_icon" },
        bool: {
          is_destination_fb:
            e ===
            o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue
              .FACEBOOK,
          is_destination_ig:
            e ===
            o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue
              .INSTAGRAM,
          is_auto_crosspost_setting_fb: r("WAWebSettingsModel").shareToFB,
          is_auto_crosspost_setting_ig: r("WAWebSettingsModel").shareToIG,
          is_crosspost_experience_v2_at_start: !1,
        },
      });
    }
    var E = {
        msgInfoNameWrapper: {
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        msgInfoNamePSA: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        timestamp: {
          marginBottom: "x12nagc",
          fontSize: "x1nxh6w3",
          color: "xziivwi",
          $$css: !0,
        },
        crosspostingIcons: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          columnGap: "x17zd0t2",
          marginInlineStart: "xdzw4kq",
          marginBottom: "x12nagc",
          color: "x17t9dm2",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        closeFriendsPillButton: {
          height: "xxk0z11",
          width: "x14qfxbe",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          marginTop: "x1de0gy",
          marginInlineEnd: "x14mko6t",
          backgroundColor: "x1p8t8ri",
          paddingInlineStart: "x4tra6z",
          paddingInlineEnd: "xde1mab",
          $$css: !0,
        },
      },
      k = 6e4;
    function I(e, t) {
      o("WAWebContactGetters").getIsMe(e) ||
        o("WAWebFindChatAction")
          .findOrCreateLatestChat(e.id, "statusPlayer")
          .then(function (e) {
            var n = e.chat;
            o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
              {
                activityType: t,
                ts: o("WATimeUtils").unixTime(),
                chatId: n.id,
              },
            ]);
          });
    }
    function T(e) {
      var t,
        n = [
          (t = r("WAWebMediaData")).TYPE.VIDEO,
          t.TYPE.IMAGE,
          t.TYPE.AUDIO,
          t.TYPE.PTT,
        ];
      return e != null && n.includes(e.type);
    }
    function D(e) {
      var t = [
        r("WAWebMediaData").TYPE.VIDEO,
        r("WAWebMediaData").TYPE.AUDIO,
        r("WAWebMediaData").TYPE.PTT,
      ];
      return e != null && t.includes(e.type);
    }
    function x(e) {
      if (e == null)
        return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT;
      switch (e) {
        case o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.PHOTO;
        case o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VIDEO;
        case o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.GIF;
        case o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO:
        case o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VOICE;
        case o("WAWebWamEnumMediaType").MEDIA_TYPE.URL:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.URL;
        default:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT;
      }
    }
    function $(e) {
      var t = [r("WAWebMediaData").TYPE.AUDIO, r("WAWebMediaData").TYPE.PTT];
      return e != null && t.includes(e.type);
    }
    function P(e, t) {
      if (e)
        switch (e.type) {
          case r("WAWebMediaData").TYPE.VIDEO:
            return e.isGif
              ? o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF
              : o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
          case r("WAWebMediaData").TYPE.IMAGE:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
          case r("WAWebMediaData").TYPE.AUDIO:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
          case r("WAWebMediaData").TYPE.PTT:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
          default:
            return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        }
      else if (o("WAWebMsgLinks").getLinksFromMsg(t).length)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
      return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
    }
    function N(e, t) {
      var n = e.id.toString(),
        r = Math.floor(window.performance.now()),
        o = t.get(n);
      return o == null ? !1 : r - o <= k;
    }
    function M(e) {
      switch (e) {
        case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .FOWARDS_TAP:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .FORWARD_TAP;
        case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .BACKWARDS_TAP:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .BACK_TAP;
        case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .FOWARDS_SWIPE:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .FORWARD_SWIPE;
        case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .BACKWARDS_SWIPE:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .BACK_SWIPE;
        case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .DIRECT_ROW_TAP:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .DIRECT_POG_TAP;
        case o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .PREVIOUS_ROW_TIMEOUT:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .AUTO_NAVIGATE_TIMER_END;
        default:
          return o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
            .DIRECT_POG_TAP;
      }
    }
    function w(e) {
      var t = e.current;
      return (e.current++, t);
    }
    function A(e, t) {
      if (e)
        switch (e.type) {
          case r("WAWebMediaData").TYPE.IMAGE:
          case r("WAWebMediaData").TYPE.VIDEO: {
            var n = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(e);
            return n != null ? { backgroundImage: "url(" + n + ")" } : null;
          }
          case r("WAWebMediaData").TYPE.PTT:
          case r("WAWebMediaData").TYPE.AUDIO:
            return {
              backgroundColor: o("WAWebMsgGetters").getStatusCanvasColor(t),
            };
        }
      else if (t.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
        var a = o("WAWebMsgGetters").getStatusCanvasColor(t);
        return { backgroundColor: a };
      }
    }
    function F(e) {
      var t = e.cvpApi,
        n = e.markRead,
        a = e.mediaData,
        i = e.msg,
        l = e.onMouseDown,
        s = e.onMouseUp,
        u = e.pause,
        c = e.play,
        m = e.playbackController,
        p = e.status,
        _ = e.statusItemViewEventRef;
      if (a)
        switch (a.type) {
          case r("WAWebMediaData").TYPE.IMAGE:
            return f.jsx(r("WAWebStatusImg.react"), {
              msg: i,
              status: p,
              mediaData: a,
              markRead: n,
              play: c,
              pause: u,
              onMouseDown: l,
              onMouseUp: s,
            });
          case r("WAWebMediaData").TYPE.VIDEO:
            return f.jsx(r("WAWebStatusVideo.react"), {
              cvpApi: t,
              msg: i,
              status: p,
              mediaData: a,
              markRead: n,
              play: c,
              pause: u,
              playbackController: m,
              onMouseDown: l,
              onMouseUp: s,
            });
          case r("WAWebMediaData").TYPE.PTT:
          case r("WAWebMediaData").TYPE.AUDIO:
            return f.jsx(r("WAWebStatusAudio.react"), {
              msg: i,
              mediaData: a,
              status: p,
              markRead: n,
              play: c,
              pause: u,
              playbackController: m,
              onMouseDown: l,
              onMouseUp: s,
            });
          default:
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Unexpected Status media type: ",
                    "",
                  ])),
                a.type,
              ),
              f.jsx(r("WAWebStatusUnknown.react"), {
                onMouseDown: l,
                onMouseUp: s,
              })
            );
        }
      else
        return i.type === o("WAWebMsgType").MSG_TYPE.CHAT
          ? f.jsx(r("WAWebStatusText.react"), {
              msg: i,
              onMouseDown: l,
              onMouseUp: s,
              statusItemViewEventRef: _,
              dataTab: o("WAWebTabOrder").TAB_ORDER.STATUS_MIDDLE_SECTION,
            })
          : f.jsx(r("WAWebStatusUnknown.react"), {
              onMouseDown: l,
              onMouseUp: s,
            });
    }
    F.displayName = F.name + " [from " + i.id + "]";
    var O = n("$InternalEnum").Mirrored([
      "PAUSE_BUTTON",
      "MOUSEDOWN",
      "WINDOW_BLUR",
      "OPEN_SEE_VIEWERS_MODAL",
      "LINK_MODAL_OPEN",
      "OVERFLOW_MENU_BUTTON",
      "STATUS_REPORT_MODAL_OPEN",
      "SPACEDOWN",
    ]);
    function B(e) {
      return e === O.PAUSE_BUTTON || e === O.MOUSEDOWN || e === O.SPACEDOWN
        ? "user_initiated"
        : "product_initiated";
    }
    function W(t) {
      var a,
        i,
        l,
        u = t.ref,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        d = c.canPlaybackAudio,
        _ = c.closeStatusViewer,
        g = c.containsMusic,
        N = c.isGroupStatus,
        M = c.markRead,
        w = c.mediaData,
        W = c.msg,
        V = c.onNext,
        j = c.rowIdx,
        K = c.rowSection,
        Q = c.sessionId,
        X = c.status,
        Y = c.statusItemLastImpressionTimestampMap,
        J = c.statusItemViewEventRef,
        Z = c.statusItemViewMap,
        ee = c.viewerSessionId,
        te = r("useWAWebUnmountSignal")(),
        ne = o("useWAWebMsgValues").useMsgValues(W.id, [
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        re = ne[0],
        oe =
          o("WAWebMsgGetters").getIsNewsletterStatus(W) &&
          o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
            r("WAWebNewsletterMetadataCollection").get(W.id.remote),
          ),
        ae = r("useWAWebEventTargetValue")(W, "change:viewCount", function () {
          return o("WAWebMsgGetters").getViewCount(W);
        }),
        ie = r("useWAWebEventTargetValue")(
          W,
          "change:crosspostingInfo",
          function () {
            return W.crosspostingInfo;
          },
        ),
        le = K;
      N &&
        re &&
        (le = o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS);
      var se =
          (a =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? a
            : !1,
        ue = r("useLazyRef")(function () {
          return o("WAWebStatusSetupController").setupStatusController(w, W);
        }),
        ce = R(function () {
          return o("WAWebStatusGatingUtils").isStatusCometVideoPlayerEnabled()
            ? o("WAWebStatusSetupController").setupCVPStatusController(w, W)
            : null;
        }),
        de = ce[0],
        me = de != null,
        pe = o(
          "useVideoPlayerXAPIOutsideVideoPlayerSurface",
        ).useVideoPlayerXAPIOutsideVideoPlayerSurface(),
        _e = pe[0],
        fe = pe[1].controller,
        ge = pe[2];
      y(
        function () {
          me && fe && de && de.setController(fe);
        },
        [fe, de, me],
      );
      var he = function () {
          return de != null ? de : ue.current;
        },
        ye = o(
          "useWAWebStatusContainsFutureproofEmbeddedContentBanner",
        ).useWAWebStatusContainsFutureproofEmbeddedContentBanner(W),
        Ce = v(
          function () {
            return ye != null;
          },
          [ye],
        ),
        be = S(!0),
        ve = S(null),
        Se = S(null),
        Re = S(null),
        Le = S(null),
        Ee = S(null),
        ke = S(null),
        Ie = S(null),
        Te = R(!1),
        De = Te[0],
        xe = Te[1],
        $e = R(!1),
        Pe = $e[0],
        Ne = $e[1],
        Me = R(!1),
        we = Me[0],
        Ae = Me[1],
        Fe = R(!1),
        Oe = Fe[0],
        Be = Fe[1],
        We = R(!1),
        qe = We[0],
        Ue = We[1],
        Ve = R(!1),
        He = Ve[0],
        Ge = Ve[1],
        ze = R(null),
        je = ze[0],
        Ke = ze[1],
        Qe = R(!1),
        Xe = Qe[0],
        Ye = Qe[1],
        Je = r("useWAWebCanDownloadStatus")(W),
        Ze = h(
          function () {
            o("WAWebFileSaver").FileSaver.initDownload(W.unsafe());
          },
          [W],
        ),
        et = R(!1),
        tt = et[0],
        nt = et[1],
        rt = R(!1),
        ot = rt[0],
        at = rt[1],
        it = R({ url: "", displayText: null }),
        lt = it[0],
        st = it[1],
        ut = S(null),
        ct = S(r("WAWebNoop")),
        dt = h(
          function () {
            lt.url &&
              (o("WAWebExternalLink.react").openExternalLink(lt.url),
              ct.current());
          },
          [lt.url],
        ),
        mt = f.jsxs("button", {
          className:
            "x78zum5 xdt5ytf x6s0dn4 x1ypdohk x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl",
          onClick: dt,
          type: "button",
          children: [
            f.jsx("div", {
              className:
                "x1e4dklr xisnujt x12w63v0 x1nzty39 x1yrsyyn x10b6aqq xpip370 xyi3aci xwf5gio x1p453bz x1suzm8a x1agd393 x78zum5 x6s0dn4 xl56j7k",
              children: f.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentInverse",
                children: lt.displayText,
              }),
            }),
            f.jsx("div", {
              className:
                "xnalus7 xqtp20y x8u93l6 x1t7ytsu xv5lvn5 xburx9h x18b5jzi x1o3jo1z x1kr8tdy x13fuv20 x2ubtbe",
            }),
          ],
        }),
        pt = r("useWDSMenu")({
          targetRef: ut,
          menu: mt,
          dismissable: !0,
          positionOnAnyClick: !0,
          position: "above",
          align: "middle",
          enableUIM: !1,
        }),
        _t = pt.closeMenu,
        ft = pt.menuPortal,
        gt = pt.openMenu;
      (y(
        function () {
          ct.current = _t;
        },
        [_t],
      ),
        y(
          function () {
            oe &&
              n("asyncToGeneratorRuntime")
                .asyncToGenerator(function* () {
                  var e = yield o(
                    "WAWebNewsletterGetStatusUpdatesJob",
                  ).fetchNewsletterStatusUpdates(
                    o("WAJids").toNewsletterJid(W.id.remote.toString()),
                  );
                  e != null &&
                    (yield o(
                      "WAWebNewsletterStatusProcessingUtils",
                    ).applyAndPersistViewCounts(e.from, e.serverIdToViewCount));
                })()
                .catch(function (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status][updates] failed to refresh view counts",
                      ])),
                  );
                });
          },
          [oe, W.id],
        ));
      var ht = o("useWAWebTimeout").useTimeout(
          h(function () {
            ct.current();
          }, []),
          3e3,
        ),
        yt = ht[0],
        Ct = h(
          function (e) {
            var t = o("WAWebStatusExternalShareUtils").getExternalShareInfo(W);
            t != null &&
              (st({ url: t.url, displayText: t.displayText }), gt(e), yt());
          },
          [W, yt, gt],
        ),
        bt = X.contact,
        vt = o("WAWebContactCollection").ContactCollection.get(W.author),
        St = bt;
      N && vt != null && (St = vt);
      var Rt = function () {
          o("WAWebMsgInfoCollection")
            .MsgInfoCollection.find(W.id)
            .then(function (e) {
              te.aborted || Ke(e.read);
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").EphemeralDrop,
                r("WAWebNoop"),
              ),
            );
        },
        Lt = function () {
          var e = ke.current,
            t = Le.current;
          if (!(!e || !t)) {
            var n = e.getBoundingClientRect(),
              o = t.getBoundingClientRect();
            (!r("WAWebL10N").isRTL() && n.right > o.left - 5) ||
            (r("WAWebL10N").isRTL() && n.left < o.right + 5)
              ? xe(!0)
              : xe(!1);
          }
        },
        Et = r("useWAWebDebouncedCallback")(Lt),
        kt = function () {
          var e = W.id.toString(),
            t = Math.floor(window.performance.now()),
            n = Y.get(e);
          return n == null || t - n > k ? (Y.set(e, t), !0) : !1;
        },
        It = function () {
          J.current.statusItemLoadTime ||
            (J.current.markStatusItemLoadTime(),
            (J.current.statusItemViewResult = o(
              "WAWebWamEnumStatusItemViewResult",
            ).STATUS_ITEM_VIEW_RESULT.OK));
        },
        Tt = r("useWAWebStableCallback")(function (e) {
          if (
            !(
              T(w) &&
              w.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
            )
          ) {
            var t = ve.current;
            (t != null &&
              ((J.current.statusItemViewTime += Math.round(
                window.performance.now() - t,
              )),
              (ve.current = void 0)),
              he().pause(B(e)),
              (Se.current = e));
          }
        }),
        Dt = r("useWAWebStableCallback")(function (e) {
          var t;
          if ((e === void 0 && (e = "product_initiated"), T(w))) {
            if (w.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED)
              return;
            It();
          }
          ((t = Re.current) != null && t.isPaused()) ||
            (be.current &&
              ((ve.current = window.performance.now()), he().resume(e)));
        }),
        xt = function (t) {
          var e,
            n = t != null ? t : {},
            o = n.focusWrapper,
            a = o === void 0 ? !0 : o,
            i = n.replied;
          if (a === !0) {
            var l = Ie.current;
            l && i !== !0 && r("WAWebFocusTracer").focus(l);
          }
          ((e = Re.current) == null || e.blur(), Ye(!1));
        };
      C(u, function () {
        return {
          handlePlayPauseToggle: function () {
            we ? Dt("user_initiated") : Tt(O.SPACEDOWN);
          },
          getWrapperElement: function () {
            return Ie.current;
          },
        };
      });
      var $t = function () {
          (o("WAWebModalManager").ModalManager.close(),
            Dt(),
            Ne(!1),
            o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
              null,
              "media",
            ));
        },
        Pt = function () {
          je &&
            (o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(
              !1,
              "media",
            ),
            window.setTimeout(function () {
              (o("WAWebModalManager").ModalManager.open(
                f.jsx(r("WAWebStatusViewerListModal.react"), {
                  onClose: $t,
                  viewers: je,
                  msgId: W.id,
                }),
                {
                  focusType: {
                    type: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                },
              ),
                Tt(O.OPEN_SEE_VIEWERS_MODAL),
                Ne(!0));
            }, 200));
        },
        Nt = function () {
          Ge(!He);
        },
        Mt = function () {
          ((be.current = !0), !Pe && Se.current === O.WINDOW_BLUR && Dt());
        },
        wt = function () {
          ((be.current = !1), we || Tt(O.WINDOW_BLUR));
        },
        At = function (t) {
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(t, "statusPlayer")
            .then(function (e) {
              var t = e.chat;
              return o("WAWebCmd").Cmd.openChatBottom({ chat: t });
            })
            .then(function () {
              _(!0);
            });
        },
        Ft = function () {
          (he().mute("user_initiated"), Be(!0));
        },
        Ot = function () {
          d && (he().unmute("user_initiated"), Be(!1));
        },
        Bt = r("useWAWebStableCallback")(function () {
          Tt(O.MOUSEDOWN);
        }),
        Wt = r("useWAWebStableCallback")(function () {
          Dt("user_initiated");
        }),
        qt = function () {
          Tt(O.PAUSE_BUTTON);
        },
        Ut = function () {
          Tt(O.OVERFLOW_MENU_BUTTON);
        },
        Vt = function () {
          Se.current === O.OVERFLOW_MENU_BUTTON && Dt();
        },
        Ht = function () {
          (o("WAWebWamStatusReportingEventsLogger").logStatusReportingEvent({
            statusReportingInteraction: o("WAWebWamEnumStatusReportInteraction")
              .STATUS_REPORT_INTERACTION.CLICK_CANCEL_REPORT,
          }),
            $t());
        },
        Gt = function (t) {
          var e;
          (o("WAWebWamStatusReportingEventsLogger").logStatusReportingEvent({
            statusReportingInteraction:
              t === !0
                ? o("WAWebWamEnumStatusReportInteraction")
                    .STATUS_REPORT_INTERACTION.CLICK_SUBMIT_REPORT_BLOCK
                : o("WAWebWamEnumStatusReportInteraction")
                    .STATUS_REPORT_INTERACTION.CLICK_SUBMIT_REPORT,
          }),
            o("WAWebSendSpamChatAction")
              .sendReport({
                spamFlow: o("WAWebSpamConstants").SpamFlow.StatusPostReport,
                msg: W,
                msgType: o("WAWebMsgType").MSG_TYPE.STATUS,
                chat:
                  N &&
                  (e = o("WAWebFrontendMsgGetters").getMaybeChat(W)) != null
                    ? e
                    : void 0,
              })
              .then(function (e) {
                (t &&
                  o("WAWebBlockContactAction").blockContact(
                    babelHelpers.extends(
                      {
                        contact: o(
                          "WAWebBlockContactUtils",
                        ).getContactToBlockOnlyUseIfNoAssociatedChat(
                          St,
                          o("WAWebBlockContants").BlockEntryPoint
                            .StatusPostReport,
                        ),
                        blockEntryPoint:
                          o("WAWebBlockContants").BlockEntryPoint
                            .StatusPostReport,
                      },
                      St.isBusiness && {
                        bizOptOutArgs: {
                          entryPoint:
                            o("WAWebBlockContants").BlockEntryPoint
                              .StatusPostReport,
                        },
                      },
                    ),
                  ),
                  o("WAWebModalManager").ModalManager.close(),
                  Ne(!1),
                  _());
                var n = o(
                  "WAWebPrivateMessageComplianceUtils",
                ).getPrivateMessageReportComplianceConfig({
                  reportId: e,
                  msg: W,
                });
                n != null &&
                  (o("WAWebModalManager").ModalManager.open(
                    f.jsx(
                      o("WAWebComplianceReportPopupLoadable")
                        .ComplianceReportPopupLoadable,
                      {
                        learnMoreUrl: n.learnMoreUrl,
                        bannerText: n.bannerText,
                        actionText: n.actionText,
                        showViewReport: n.showViewReport,
                      },
                    ),
                  ),
                  Ne(!0));
              })
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "status report dropped",
                      ])),
                  )
                  .tags("wa-ice", "report");
              }));
        },
        zt = function () {
          (Tt(),
            o("WAWebModalManager").ModalManager.open(
              f.jsx(r("WAWebPaidPartnershipLabelModal.react"), {
                msg: W,
                onClose: function () {
                  (Dt(), Ne(!1));
                },
              }),
            ),
            Ne(!0));
        },
        jt = function () {
          if (
            (Tt(O.STATUS_REPORT_MODAL_OPEN),
            o("WAWebMsgGetters").getIsNewsletterStatus(W))
          ) {
            var e = o("WAWebFrontendMsgGetters").getChat(W);
            (o("WAWebModalManager").ModalManager.open(
              f.jsx(r("WAWebReportNewsletterStatusPopup.react"), {
                chat: e,
                msg: W,
                spamFlow: o("WAWebSpamConstants").SpamFlow.StatusPostReport,
                onCancel: $t,
                onReportComplete: function () {
                  (Ne(!1), _());
                },
              }),
            ),
              Ne(!0));
            return;
          }
          (o("WAWebWamStatusReportingEventsLogger").logStatusReportingEvent({
            statusReportingInteraction: o("WAWebWamEnumStatusReportInteraction")
              .STATUS_REPORT_INTERACTION.CLICK_REPORT,
          }),
            o("WAWebModalManager").ModalManager.open(
              f.jsx(r("WAWebReportStatusPopup.react"), {
                contact: St,
                onCancel: Ht,
                onReport: Gt,
              }),
            ),
            Ne(!0));
        },
        Kt = function () {
          (Tt(),
            o("WAWebModalManager").ModalManager.open(
              f.jsx(r("WAWebStatusDeletePopup.react"), {
                onCancel: $t,
                onDelete: function () {
                  (o("WAWebMsgGetters").getIsNewsletterStatus(W)
                    ? o(
                        "WAWebNewsletterRevokeStatusAction",
                      ).revokeNewsletterStatusAction(X, W)
                    : o("WAWebRevokeStatusAction").sendStatusRevokeMsgAction(
                        X,
                        W,
                      ),
                    o("WAWebModalManager").ModalManager.close(),
                    Ne(!1),
                    _());
                },
              }),
            ),
            Ne(!0));
        },
        Qt = function (t, n) {
          var e = o(
            "WAWebCrosspostingConfig",
          ).CROSSPOSTING_DESTINATION_CONFIG.find(function (e) {
            return e.gqlValue === t;
          });
          if (e != null) {
            if (
              n &&
              t ===
                o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue
                  .INSTAGRAM &&
              W.caption != null &&
              W.caption !== ""
            ) {
              o("WAWebToastManager").ToastManager.open(
                f.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Status shared. Some features may not be supported on Instagram.",
                  ),
                }),
              );
              return;
            }
            var r = n ? e.getSuccessToastMsg() : e.getFailureToastMsg();
            o("WAWebToastManager").ToastManager.open(
              f.jsx(o("WAWebToast.react").Toast, { msg: r }),
            );
          }
        },
        Xt = function (t) {
          (o("WAWebCrosspostingQplUtils").crosspostingQplStart(),
            o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
              "INIT_CROSSPOST",
            ),
            L(t));
          var e = function (n) {
            return o("WAWebCrosspostingJob")
              .crosspostStatus(
                W.t,
                W.id,
                [
                  o(
                    "WAWebEligibilityCheckHelper",
                  ).translateCrosspostingDestination(t),
                ],
                n,
                W.caption,
              )
              .then(function () {
                (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                  "FINISH_CROSSPOST",
                ),
                  o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                    "SEE_CROSSPOST_SUCCESS",
                  ),
                  o("WAWebCrosspostingQplUtils").crosspostingQplEndSuccess(),
                  Qt(t, !0));
              })
              .catch(function (e) {
                (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                  "FINISH_CROSSPOST",
                ),
                  o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                    "SEE_CROSSPOST_ERROR",
                  ),
                  o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(),
                  Qt(t, !1));
              });
          };
          if (W.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            var n,
              a,
              i = parseFloat(
                (n = (a = W.mediaData) == null ? void 0 : a.duration) != null
                  ? n
                  : "0",
              );
            if (i > 60) {
              (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                "SEE_CROSSPOST_ERROR",
              ),
                o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(),
                Qt(t, !1));
              return;
            }
          }
          if (o("WAWebTextStatusImageRenderer").isTextStatusMessage(W)) {
            o("WAWebTextStatusImageRenderer")
              .renderTextStatusToBlob(W)
              .then(e)
              .catch(function (e) {
                (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
                  "SEE_CROSSPOST_ERROR",
                ),
                  o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(),
                  Qt(t, !1));
              });
            return;
          }
          var l =
            W.mediaData.mediaBlob instanceof r("WAWebMediaOpaqueData")
              ? W.mediaData.mediaBlob.getBlob()
              : W.mediaData.mediaBlob;
          if (l == null) {
            (o("WAWebCrosspostingQplUtils").crosspostingQplPoint(
              "SEE_CROSSPOST_ERROR",
            ),
              o("WAWebCrosspostingQplUtils").crosspostingQplEndFail(),
              Qt(t, !1));
            return;
          }
          e(l);
        },
        Yt = function (t) {
          o("WAWebSendStatusMuteAction")
            .setStatusMute(bt.id, t)
            .finally(function () {
              (o("WAWebModalManager").ModalManager.close(), Ne(!1), _());
            });
        },
        Jt = function (t) {
          t
            ? (Tt(),
              o("WAWebModalManager").ModalManager.open(
                f.jsx(r("WAWebStatusMuteContactPopup.react"), {
                  contact: bt,
                  onCancel: $t,
                  onMute: function () {
                    Yt(t);
                  },
                }),
              ),
              Ne(!0))
            : Yt(t);
        },
        Zt = function () {
          (J.current.statusItemReplied++, I(bt, "statusReplies"));
        },
        en = function (t) {
          Ye(t);
        };
      (b(function () {
        if (ee != null && le != null) {
          le ===
            o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS &&
            Rt();
          var e = j,
            t = c.statusIsUnread,
            n = P(w, W);
          (n === o("WAWebWamEnumMediaType").MEDIA_TYPE.URL &&
            (J.current.urlStatusClicked == null &&
              (J.current.urlStatusClicked = o(
                "WAWebWamEnumUrlStatusClicked",
              ).URL_STATUS_CLICKED.NO_CLICK),
            (J.current.urlStatusType = o(
              "WAWebWamEnumUrlStatusType",
            ).URL_STATUS_TYPE.NO_PREVIEW)),
            w == null && It(),
            (J.current.statusViewerSessionId = ee),
            o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() &&
              ((J.current.statusContainsMusic = g),
              g && (J.current.musicBlocked = !d)),
            (J.current.statusItemViewCount += 1),
            (J.current.statusRowSection = le),
            (J.current.statusRowIndex = e),
            (J.current.mediaType = n),
            (J.current.statusItemImpressionCount += kt() ? 1 : 0),
            J.current.statusItemUnread == null &&
              (J.current.statusItemUnread = t),
            o("WAWebConnModel").Conn.isSMB &&
              ((J.current.isPosterBiz = bt.isBusiness),
              (J.current.isPosterInAddressBook = o(
                "WAWebFrontendContactGetters",
              ).getIsMyContact(bt))));
        }
        (he().addListeners({
          onPlay: function (t, n) {
            var e = Ee.current;
            (e == null || e.handleStart(t, n), Ae(!1), (Se.current = null));
          },
          onPause: function () {
            var e = Ee.current;
            (e == null || e.handlePause(), Ae(!0));
          },
          onEnd: function () {
            var e = Ee.current;
            e == null ||
              e.handleEnded().then(function () {
                te.aborted ||
                  V(
                    o("WAWebWamEnumStatusRowEntryMethod")
                      .STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT,
                  );
              });
          },
          onLoad: function (t, n) {
            (Be(d ? n : !0), Ue(d ? t : !1));
          },
          onDetectHasAudio: function (t, n) {
            (Be(d ? n : !0), Ue(d ? t : !1));
          },
        }),
          w
            ? (Dt(),
              (w == null ? void 0 : w.mediaStage) ===
                o("WAWebMediaTypes").MediaDataStage.RESOLVED && M(X, W))
            : (W.type, o("WAWebMsgType").MSG_TYPE.CHAT, Dt(), M(X, W)));
        var r = Ie.current;
        (r == null || r.focus(), Lt());
      }, []),
        r("useWAWebOnUnmount")(function () {
          if (
            (de != null && de.cleanup(),
            ue.current.removeListeners(),
            ee != null && le != null)
          ) {
            var e = ve.current;
            e != null &&
              ((J.current.statusItemViewTime += Math.round(
                window.performance.now() - e,
              )),
              J.current.statusItemViewTime >= 3e3 &&
                o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled() &&
                (J.current.statusItem3sViewCount += 1),
              (ve.current = void 0));
            var t = he(),
              n = Number.isNaN(t.duration) ? 0 : Math.round(t.duration);
            ((J.current.statusItemLength = n),
              Z.set(W.id.toString(), J.current));
          }
          I(bt, "statusViews");
        }));
      var tn = r("useWAWebStableCallback")(M);
      (o("useWAWebListener").useListener(window, "focus", Mt),
        o("useWAWebListener").useListener(window, "blur", wt),
        o("useWAWebListener").useListener(window, "resize", Et),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_long_link_modal",
          function () {
            we || Tt(O.LINK_MODAL_OPEN);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_long_link_modal",
          function (e) {
            e === !0 && Se.current === O.LINK_MODAL_OPEN && Dt();
          },
        ));
      var nn = A(w, W),
        rn = f.jsx("button", {
          ref: ut,
          className:
            "xh8yej3 x5yr21d x11g6tue x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl x1ypdohk",
          onClick: Ct,
          type: "button",
          children: f.jsx(F, {
            cvpApi: me ? pe : null,
            mediaData: w,
            msg: W,
            status: X,
            markRead: tn,
            play: Dt,
            pause: Tt,
            onMouseDown: Bt,
            onMouseUp: Wt,
            playbackController: he(),
            statusItemViewEventRef: J,
          }),
        }),
        on = f.jsx(
          "div",
          babelHelpers.extends(
            { ref: Le },
            { 0: {}, 1: { className: "x1q9ymp4" } }[!!se << 0],
            {
              children: f.jsx(r("WAWebStatusProgressBar.react"), {
                ref: Ee,
                current: c.msgIdx,
                total: c.totalMsgs,
                onClick: c.onClickProgressBar,
              }),
            },
          ),
        ),
        an = function (t) {
          t !== o("WAWebUim").DismissReason.LIFECYCLE && c.closeStatusViewer();
        },
        ln = re || o("WAWebContactGetters").getIsPSA(bt),
        sn = f.jsx(r("WaWebStatusPlayerName.react"), {
          isGroupStatus: N,
          msg: W,
          statusContact: bt,
        }),
        un = r("useWAWebNux")(o("WAWebNux").NUX.STATUS_PRIVATE_MENTIONS),
        cn = un[0],
        dn = un[1],
        mn =
          o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() &&
          !!o("WAWebMsgGetters").getStatusMentioned(W),
        pn = mn && cn,
        _n = function () {
          (o("WAWebModalManager").ModalManager.close(), Ne(!1), Dt());
        },
        fn = function () {
          (Tt(),
            o("WAWebModalManager").ModalManager.open(
              f.jsx(r("WAWebStatusMentionsPopup.react"), {
                onOk: function () {
                  (dn(), _n());
                },
                onOverlayClick: _n,
                isSentByMe: re,
              }),
            ),
            Ne(!0));
        },
        gn = function (t) {
          (o("WAWebStopEvent").stopPropagation(t), fn());
        };
      (y(function () {
        pn && fn();
      }, []),
        pn && Pe && Tt());
      var hn = W.statusAudienceMetadata,
        yn =
          hn != null &&
          o("WAWebStatusGatingUtils").isStatusCloseFriendsViewerSideEnabled()
            ? {
                emoji: (i = hn.listEmoji) != null ? i : "\u2B50",
                listName:
                  (l = hn.listName) != null ? l : s._(/*BTDS*/ "Close friends"),
              }
            : null,
        Cn = function () {
          yn != null &&
            (Tt(),
            Ne(!0),
            o("WAWebStatusCloseFriendsDialog.react").showCloseFriendsDialog(
              bt == null ? void 0 : bt.id,
              o("WAWebFrontendContactGetters").getFormattedName(bt),
              yn.emoji,
              yn.listName,
              re,
              function () {
                (Dt(), Ne(!1));
              },
            ));
        },
        bn = f.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h",
              },
              4: {
                className:
                  "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv",
              },
              2: {
                className:
                  "x10l6tqk x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x2vplmn xtijo5x x1o0tod x11t971q xvc5jky",
              },
              6: {
                className:
                  "x10l6tqk x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv x2vplmn xtijo5x x1o0tod x11t971q xvc5jky",
              },
              1: {
                className:
                  "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x1q9ymp4",
              },
              5: {
                className:
                  "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv x1q9ymp4",
              },
              3: {
                className:
                  "x10l6tqk x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x2vplmn xtijo5x x1o0tod x11t971q xvc5jky x1q9ymp4",
              },
              7: {
                className:
                  "x10l6tqk x12xzxwr x78zum5 x1q0g3np x65f84u x1yc453h xt0e3qv x2vplmn xtijo5x x1o0tod x11t971q xvc5jky x1q9ymp4",
              },
            }[(!!ln << 2) | (!!De << 1) | (!!se << 0)],
            {
              onClick: ln
                ? null
                : function () {
                    return At(bt.id);
                  },
              children: [
                f.jsx("div", {
                  className: "xr1yuqi xbmvrgn x4ii5y1 xwklpps x1rg5ohu",
                  children: f.jsx(U, {
                    msg: W,
                    statusContact: bt,
                    authorContact: vt,
                  }),
                }),
                f.jsxs("div", {
                  className: "x78zum5 xdt5ytf xl56j7k xw5ewwj",
                  children: [
                    f.jsx(r("WAWebUnstyledButton.react"), {
                      dataTab:
                        o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
                      "aria-label": s._(/*BTDS*/ "Message to {contact-name}", [
                        s._param(
                          "contact-name",
                          o("WAWebFrontendContactGetters").getFormattedName(bt),
                        ),
                      ]),
                      onClick: function () {
                        return At(bt.id);
                      },
                      xstyle: [
                        E.msgInfoNameWrapper,
                        o("WAWebContactGetters").getIsPSA(bt) &&
                          E.msgInfoNamePSA,
                      ],
                      children: sn,
                    }),
                    f.jsxs("div", {
                      className:
                        "x3nfvp2 x1q0g3np x6s0dn4 xozqiw3 x6ikm8r x10wlt62",
                      children: [
                        f.jsx(r("WAWebStatusSubtitle.react"), {
                          statusMediaController: he(),
                          status: X,
                          playing: !we,
                          msg: W,
                          xstyle: E.timestamp,
                          onDialogOpen: function () {
                            (Tt(), Ne(!0));
                          },
                          onDialogDismiss: function () {
                            (Dt(), Ne(!1));
                          },
                          onMentionsClick: mn ? gn : null,
                          onClickProfile: At,
                        }),
                        ie != null
                          ? f.jsx(r("WAWebCrosspostingIcons.react"), {
                              crosspostingInfo: ie,
                              testidPrefix: "status-player",
                              xstyle: E.crosspostingIcons,
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "x78zum5 x15zctf7 x1ikap7u xnnr8r xt0e3qv",
                  onClick: o("WAWebStopEvent").stopPropagation,
                  children: [
                    f.jsx(r("WAWebStatusPlayerControlsMenu.react"), {
                      isPaused: we,
                      hasAudio: D(w) && qe,
                      isMuted: Oe,
                      onPlay: Dt,
                      onPauseButtonClick: qt,
                      onOverflowMenuShown: Ut,
                      onOverflowMenuDismissed: Vt,
                      onMute: Ft,
                      onUnmute: Ot,
                      onReport: jt,
                      onDelete: Kt,
                      onCrosspost: Xt,
                      onDownload: Je ? Ze : null,
                      onMuteOrUnmute: Jt,
                      onAddPaidPartnershipLabel: zt,
                      contact: bt,
                      msg: W,
                      crosspostingInfo: ie,
                    }),
                    yn != null &&
                      f.jsx(r("WDSButton.react"), {
                        label: yn.emoji,
                        variant: "tonal",
                        type: "default",
                        size: "small",
                        onPress: Cn,
                        xstyle: E.closeFriendsPillButton,
                        children: f.jsx("div", {
                          className: "x10l6tqk xtijo5x xwa60dl xefto5c",
                          children: f.jsx(
                            o("WAWebChevronIcon.react").ChevronIcon,
                            { height: 14, width: 16 },
                          ),
                        }),
                      }),
                  ],
                }),
              ],
            },
          ),
        ),
        vn = f.jsxs("div", {
          ref: ke,
          className:
            "x10l6tqk xg4rxxw xbky7k3 x12xzxwr x78zum5 x1ypdohk x1q0g3np x65f84u x1yc453h x47corl xg01cxk",
          children: [
            f.jsx("div", {
              className: "xr1yuqi xbmvrgn x4ii5y1 xwklpps x1rg5ohu",
              children: f.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: bt.id,
                theme: "status",
                size: 40,
              }),
            }),
            f.jsxs("div", {
              className: "x78zum5 xdt5ytf xl56j7k xw5ewwj",
              children: [
                sn,
                f.jsx("div", {
                  className: "x12nagc x1nxh6w3 xziivwi",
                  children: o("WAWebClock").Clock.relativeDateAndTimeStr(W.t),
                }),
              ],
            }),
          ],
        }),
        Sn = w ? f.jsx(H, { mediaData: w }) : null,
        Rn = v(
          function () {
            return z(bt, W);
          },
          [W, bt],
        ),
        Ln = x(P(w, W)),
        En = function (t, n, r) {
          o("WAWebLogStatusReply").logStatusReply({
            isGroupStatus: N,
            isQuickReply: r,
            mediaHeight: w == null ? void 0 : w.fullHeight,
            mediaWidth: w == null ? void 0 : w.fullWidth,
            msg: W,
            replyType: n,
            result: t,
            sessionId: Q,
            statusContact: bt,
            statusContentType: Ln,
            viewerSessionId: ee,
          });
        },
        kn = Rn
          ? f.jsx(r("WAWebStatusComposeBox.react"), {
              msg: c.msg,
              dismissReply: function (t, n) {
                xt({ replied: n });
              },
              onSend: Zt,
              onFocusChange: en,
              pause: Tt,
              play: Dt,
              ref: function (t) {
                Re.current = t;
              },
              onLogStatusReply: En,
            })
          : null,
        In = r("WAWebNoop"),
        Tn = r("useWAWebReactions")([W.id.toString()], In),
        Dn = null;
      oe
        ? (Dn = f.jsx("div", {
            className:
              "x10l6tqk xtijo5x xfqi8uc x1o0tod x12xzxwr x19sv2k2 x1kozois x11t971q xvc5jky",
            children: f.jsx(r("WAWebStatusSeenCount.react"), {
              seenCount: ae != null ? ae : 0,
            }),
          }))
        : re &&
          je != null &&
          !Xe &&
          (Dn = f.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x10l6tqk xtijo5x xfqi8uc x1o0tod x12xzxwr x19sv2k2 x1kozois x11t971q xvc5jky",
                },
                1: {
                  className:
                    "x10l6tqk xtijo5x x1o0tod x12xzxwr x19sv2k2 x1kozois x11t971q xvc5jky x11unvnq",
                },
              }[!!Rn << 0],
              {
                children: f.jsx(r("WAWebStatusSeenCount.react"), {
                  seenCount: je.length,
                  onClick: Pt,
                  hasLikes: Tn.numberOfSenderReactions > 0,
                }),
              },
            ),
          ));
      var xn =
          W.type !== o("WAWebMsgType").MSG_TYPE.CHAT && !$(w)
            ? f.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x10l6tqk xupqr0c xh8yej3 xnxb3zj x47corl x14qp83e",
                    },
                    1: {
                      className:
                        "x10l6tqk xupqr0c xh8yej3 x47corl x14qp83e x41k7rp",
                    },
                  }[!!De << 0],
                ),
              )
            : null,
        $n =
          o(
            "WAWebBizCoexStatusGatingUtils",
          ).smbHostedstatusReplyPrivacyDisclaimerEnabled() &&
          o("WAWebContactGetters").getIsHosted(bt) === !0,
        Pn = $n
          ? f.jsx(r("WAWebStatusHostedDisclosure.react"), {
              handleClick: function () {
                (nt(!0), he().pause());
              },
              withFutureproofing: Ce,
            })
          : null,
        Nn =
          W.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
          typeof W.caption == "string"
            ? f.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "x10l6tqk x1ey2m1c xh8yej3 x5yr21d" },
                    4: { className: "x10l6tqk xh8yej3 x5yr21d xdpez57" },
                    2: { className: "x10l6tqk xh8yej3 x5yr21d x4tydyf" },
                    6: { className: "x10l6tqk xh8yej3 x5yr21d x4tydyf" },
                    1: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
                    5: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
                    3: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
                    7: { className: "x10l6tqk xh8yej3 x5yr21d x1m2atwk" },
                  }[
                    (!!($n && !Ce) << 2) |
                      (!!(!$n && Ce) << 1) |
                      (!!($n && Ce) << 0)
                  ],
                  {
                    children: f.jsx(r("WAWebObjectFit.react"), {
                      type: "contain",
                      size: { width: w.fullWidth, height: w.fullHeight },
                      children: f.jsx(r("WAWebStatusCaptionText.react"), {
                        msg: W,
                        isExpandedCaptionText: He,
                        onExpandCaptionText: Nt,
                        withHostedDisclosurePadding: $n || Ce,
                      }),
                    }),
                  },
                ),
              )
            : null,
        Mn =
          Dn != null &&
          Nn == null &&
          W.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
          !$(w)
            ? f.jsx("div", {
                className:
                  "x10l6tqk xupqr0c xh8yej3 xnxb3zj x1ey2m1c x1o0tod x47corl xru3sqf",
              })
            : null,
        wn =
          o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() && bt.id.isUser()
            ? o("WAWebLidMigrationUtils").toUserLid(bt.id)
            : void 0,
        An = function () {
          (at(!1), he().resume());
        },
        Fn =
          o(
            "WAWebBizCoexStatusGatingUtils",
          ).smbHostedstatusReplyPrivacyDisclaimerEnabled() &&
          o("WAWebContactGetters").getIsHosted(bt) === !0 &&
          ot
            ? f.jsx("div", {
                className:
                  "xixxii4 xwa60dl xbudbmw x39lw6i xvue9z x11lhmoz x1vjfegm",
                children: f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                  name: "status-player",
                  children: f.jsx(q, {
                    msgAuthor: c.msg.author,
                    lid: wn,
                    handleVerificationDrawerClose: An,
                  }),
                }),
              })
            : null,
        On =
          o(
            "WAWebBizCoexStatusGatingUtils",
          ).smbHostedstatusReplyPrivacyDisclaimerEnabled() &&
          o("WAWebContactGetters").getIsHosted(bt) === !0 &&
          tt
            ? f.jsx(r("WAWebCoexSystemMessageModalContent.react"), {
                text: o(
                  "WAWebFormatNotificationTemplateModalText",
                ).formatCoexSecurityModalText(),
                textLast: o(
                  "WAWebFormatNotificationTemplateModalText",
                ).formatCoexSecurityModalTextLastParagraph(),
                faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                wid: c.msg.id.remote,
                lid: wn,
                onClose: function () {
                  (nt(!1), he().resume());
                },
                onVerificationClick: function () {
                  (nt(!1), at(!0), he().pause());
                },
              })
            : null,
        Bn = Xe;
      return f.jsx("div", {
        "data-testid": void 0,
        children: f.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "StatusPlayer",
          escapable: !0,
          requestDismiss: an,
          requestFocus: xt,
          children: f.jsxs(
            "div",
            {
              className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1280gxy",
              tabIndex: -1,
              ref: Ie,
              children: [
                vn,
                bn,
                Bn ? f.jsx(G, {}) : null,
                xn,
                on,
                f.jsx("div", {
                  className: {
                    0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xiy17q3 x1xsqp64 x18d0r48",
                    1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d xiy17q3 x1xsqp64 x18d0r48 x1bs05mj xbyyjgo",
                  }[(w != null && !$(w)) << 0],
                  style: nn,
                }),
                !r("gkx")("26258") && !se && n("cr:6010")
                  ? f.jsx(n("cr:6010"), { msg: W })
                  : null,
                rn,
                ft,
                o(
                  "WAWebBizCoexStatusGatingUtils",
                ).smbHostedstatusReplyPrivacyDisclaimerEnabled() && Pn,
                ye,
                Nn,
                Sn,
                kn,
                o(
                  "WAWebBizCoexStatusGatingUtils",
                ).smbHostedstatusReplyPrivacyDisclaimerEnabled() && On,
                o(
                  "WAWebBizCoexStatusGatingUtils",
                ).smbHostedstatusReplyPrivacyDisclaimerEnabled() && Fn,
                Mn,
                Dn,
              ],
            },
            W.id.toString(),
          ),
        }),
      });
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.handleVerificationDrawerClose,
        a = e.lid,
        i = e.msgAuthor,
        l;
      t[0] !== i
        ? ((l = o("WAWebContactCollection").ContactCollection.assertGet(i)),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        u;
      return (
        t[2] !== s || t[3] !== n || t[4] !== a
          ? ((u = f.jsx(
              r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable,
              { lid: a, contact: s, isFirstLevel: !0, onClose: n },
            )),
            (t[2] = s),
            (t[3] = n),
            (t[4] = a),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function U(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.authorContact,
        a = e.msg,
        i = e.statusContact;
      if (o("WAWebMsgGetters").getIsGroupStatus(a)) {
        if (n != null) {
          var l;
          return (
            t[0] !== n.id || t[1] !== i.id
              ? ((l = f.jsx(r("WAWebGroupStatusAuthorImage.react"), {
                  primaryContactId: i.id,
                  secondaryContactId: n.id,
                })),
                (t[0] = n.id),
                (t[1] = i.id),
                (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        var s;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { className: "x100vrsf x1vqgdyp" }), (t[3] = s))
          : (s = t[3]);
        var u;
        return (
          t[4] !== i.id
            ? ((u = f.jsx(
                "div",
                babelHelpers.extends({}, s, {
                  children: f.jsx(o("WAWebDetailImage.react").DefaultIcon, {
                    id: i.id,
                    theme: o("WAWebDetailImage.react").DefaultIconThemeType
                      .GroupStatus,
                  }),
                }),
              )),
              (t[4] = i.id),
              (t[5] = u))
            : (u = t[5]),
          u
        );
      }
      var c;
      return (
        t[6] !== i.id
          ? ((c = f.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: i.id,
              theme: "status",
              size: 40,
            })),
            (t[6] = i.id),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function V(e) {
      return (
        T(e) && e.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED
      );
    }
    function H(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.mediaData,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["mediaStage", "type"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l;
      t[1] !== i ? ((l = V(i)), (t[1] = i), (t[2] = l)) : (l = t[2]);
      var s = l,
        u;
      t[3] !== s
        ? ((u = s
            ? f.jsx("div", {
                className:
                  "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1pju0fl x10wjd1d xr1yuqi x11t971q x4ii5y1 xvc5jky x47corl",
                children: f.jsx("button", {
                  className: "icon-media-disabled",
                  children: f.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 50,
                    stroke: 4,
                    color: "white",
                  }),
                }),
              })
            : null),
          (t[3] = s),
          (t[4] = u))
        : (u = t[4]);
      var c = u,
        d;
      return (
        t[5] !== c
          ? ((d = f.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "status-media-loading",
              appear: !0,
              children: c,
            })),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function G() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = f.jsx("div", {
              className:
                "xh8yej3 x5yr21d x42x0ya x10l6tqk x13vifvy x1o0tod x197sbye x12xzxwr",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function z(e, t) {
      var n = !1;
      if (e.id.isGroup()) {
        var a = r("WAWebGroupMetadataCollection").get(e.id);
        a != null && (n = a.announce && !a.participants.iAmAdmin());
      }
      return (
        (o("WAWebMsgGetters").getIsGroupStatus(t) ||
          !o("WAWebMsgGetters").getIsSentByMe(t)) &&
        !o("WAWebContactGetters").getIsPSA(e) &&
        !n &&
        !o("WAWebMsgGetters").getIsNewsletterStatus(t)
      );
    }
    function j(e) {
      return e.id.toString();
    }
    function K(e) {
      var t = o("react-compiler-runtime").c(75),
        n,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        $,
        A,
        F,
        O,
        B,
        q,
        U,
        H;
      if (t[0] !== e) {
        var G, z, K;
        ((a = e.ref), (n = babelHelpers.objectWithoutPropertiesLoose(e, u)));
        var X = P(n.mediaData, n.msg),
          Y = V(n.mediaData),
          J = o("WAWebClock").Clock.getServerTime(),
          Z = parseFloat((G = n.mediaData) == null ? void 0 : G.duration);
        ((A = r("useWAWebStatusVisibilityLogger")),
          (i = j(n.msg.id)),
          (C = o("WAWebStatusLoggingUtils").statusIdForLogging(n.msg)),
          ($ = o("WAWebStatusLoggingUtils").statusPosterHashIdForLogging(
            n.msg,
            J,
          )),
          (F = o("WAWebStatusLoggingUtils").statusPosterIdForLogging(n.msg, J)),
          (O = o("WAWebStatusLoggingUtils").statusGroupIdForLogging(n.msg, J)),
          (B = x(X)),
          (q = X),
          (U = o("WAWebMsgGetters").getIsSentByMe(n.msg)),
          (H = N(n.msg, n.statusItemLastImpressionTimestampMap)),
          (l =
            o(
              "WAWebStatusGatingUtils",
            ).isStatusCloseFriendsViewerSideEnabled() &&
            n.msg.statusAudienceMetadata != null),
          (s = n.statusIsUnread),
          (c = n.containsMusic),
          (d = !n.canPlaybackAudio),
          (m =
            (z = n.rowSection) != null
              ? z
              : o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                  .RECENT_STORIES),
          (p = n.sessionId),
          (_ = n.viewerSessionId),
          (g = n.statusPogIndex),
          (h = n.msgIdx),
          (y = n.isGroupStatus
            ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
            : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS),
          t[33] !== Z
            ? ((b = Number.isFinite(Z) ? Z : void 0), (t[33] = Z), (t[34] = b))
            : (b = t[34]),
          (v = n.msg.campaignId),
          (S = ((K = n.msg.actionLink) == null ? void 0 : K.url) != null),
          (R = Y
            ? function () {
                return n.statusItemViewEventRef.current.statusItemLoadTime;
              }
            : Q),
          (L = function () {
            return n.statusItemViewEventRef.current.urlStatusType;
          }),
          (E = n.status.contact.isBusiness),
          (k = !1),
          (I = function () {
            return n.statusItemViewEventRef.current.statusItemViewTime > 0;
          }),
          (T = function () {
            return n.statusItemViewEventRef.current.statusItemViewResult;
          }),
          (D = M(n.statusRowEntryMethod)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = s),
          (t[6] = c),
          (t[7] = d),
          (t[8] = m),
          (t[9] = p),
          (t[10] = _),
          (t[11] = g),
          (t[12] = h),
          (t[13] = y),
          (t[14] = C),
          (t[15] = b),
          (t[16] = v),
          (t[17] = S),
          (t[18] = R),
          (t[19] = L),
          (t[20] = E),
          (t[21] = k),
          (t[22] = I),
          (t[23] = T),
          (t[24] = D),
          (t[25] = $),
          (t[26] = A),
          (t[27] = F),
          (t[28] = O),
          (t[29] = B),
          (t[30] = q),
          (t[31] = U),
          (t[32] = H));
      } else
        ((n = t[1]),
          (a = t[2]),
          (i = t[3]),
          (l = t[4]),
          (s = t[5]),
          (c = t[6]),
          (d = t[7]),
          (m = t[8]),
          (p = t[9]),
          (_ = t[10]),
          (g = t[11]),
          (h = t[12]),
          (y = t[13]),
          (C = t[14]),
          (b = t[15]),
          (v = t[16]),
          (S = t[17]),
          (R = t[18]),
          (L = t[19]),
          (E = t[20]),
          (k = t[21]),
          (I = t[22]),
          (T = t[23]),
          (D = t[24]),
          ($ = t[25]),
          (A = t[26]),
          (F = t[27]),
          (O = t[28]),
          (B = t[29]),
          (q = t[30]),
          (U = t[31]),
          (H = t[32]));
      var ee;
      t[35] !== n
        ? ((ee = function () {
            return w(n.viewSequenceIndexRef);
          }),
          (t[35] = n),
          (t[36] = ee))
        : (ee = t[36]);
      var te;
      t[37] !== i ||
      t[38] !== l ||
      t[39] !== s ||
      t[40] !== c ||
      t[41] !== d ||
      t[42] !== m ||
      t[43] !== p ||
      t[44] !== _ ||
      t[45] !== g ||
      t[46] !== h ||
      t[47] !== y ||
      t[48] !== C ||
      t[49] !== b ||
      t[50] !== v ||
      t[51] !== S ||
      t[52] !== R ||
      t[53] !== L ||
      t[54] !== E ||
      t[55] !== k ||
      t[56] !== I ||
      t[57] !== T ||
      t[58] !== D ||
      t[59] !== $ ||
      t[60] !== ee ||
      t[61] !== F ||
      t[62] !== O ||
      t[63] !== B ||
      t[64] !== q ||
      t[65] !== U ||
      t[66] !== H
        ? ((te = {
            itemId: i,
            encryptedStatusIdPromise: C,
            userRidPromise: $,
            statusPosterIdPromise: F,
            statusGroupIdPromise: O,
            statusContentType: B,
            mediaType: q,
            isSelfView: U,
            isSubImpression: H,
            isCloseSharingPost: l,
            isFirstView: s,
            statusContainsMusic: c,
            musicBlocked: d,
            statusViewEntrypoint: m,
            updatesTabSessionId: p,
            statusViewerSessionId: _,
            statusPogIndex: g,
            statusPostIndex: h,
            statusCategory: y,
            statusPostPlaybackDuration: b,
            psaCampaignId: v,
            psaLinkAvailable: S,
            statusLoadTime: R,
            urlStatusType: L,
            isPosterBiz: E,
            statusContainsQuestion: k,
            isSuccessfulView: I,
            statusItemViewResult: T,
            entryMethod: D,
            viewSequenceIndex: ee,
          }),
          (t[37] = i),
          (t[38] = l),
          (t[39] = s),
          (t[40] = c),
          (t[41] = d),
          (t[42] = m),
          (t[43] = p),
          (t[44] = _),
          (t[45] = g),
          (t[46] = h),
          (t[47] = y),
          (t[48] = C),
          (t[49] = b),
          (t[50] = v),
          (t[51] = S),
          (t[52] = R),
          (t[53] = L),
          (t[54] = E),
          (t[55] = k),
          (t[56] = I),
          (t[57] = T),
          (t[58] = D),
          (t[59] = $),
          (t[60] = ee),
          (t[61] = F),
          (t[62] = O),
          (t[63] = B),
          (t[64] = q),
          (t[65] = U),
          (t[66] = H),
          (t[67] = te))
        : (te = t[67]);
      var ne = A(te),
        re = ne[0],
        oe;
      t[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = {
            className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1280gxy",
          }),
          (t[68] = oe))
        : (oe = t[68]);
      var ae;
      t[69] !== n || t[70] !== a
        ? ((ae = f.jsx(W, babelHelpers.extends({ ref: a }, n))),
          (t[69] = n),
          (t[70] = a),
          (t[71] = ae))
        : (ae = t[71]);
      var ie;
      return (
        t[72] !== re || t[73] !== ae
          ? ((ie = f.jsx(
              "div",
              babelHelpers.extends({ ref: re }, oe, { children: ae }),
            )),
            (t[72] = re),
            (t[73] = ae),
            (t[74] = ie))
          : (ie = t[74]),
        ie
      );
    }
    function Q() {
      return 0;
    }
    function X(e) {
      var t = o("react-compiler-runtime").c(20),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getIsGroupStatus,
            o("WAWebMsgGetters").isStatusWithMusic,
          ]),
          (t[3] = i))
        : (i = t[3]);
      var l = o("useWAWebMsgValues").useMsgValues(n.msg.id, i),
        s = l[0],
        u = l[1],
        d = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(n.msg),
        m;
      t[4] !== s || t[5] !== n.msg.id || t[6] !== n.statusItemViewMap
        ? ((m = function () {
            var e;
            return (e = n.statusItemViewMap.get(n.msg.id.toString())) != null
              ? e
              : new (o("WAWebStatusItemViewWamEvent").StatusItemViewWamEvent)({
                  statusItemViewResult: o("WAWebWamEnumStatusItemViewResult")
                    .STATUS_ITEM_VIEW_RESULT.ERROR_UNKNOWN,
                  statusItemReplied: 0,
                  statusItemViewTime: 0,
                  statusItemViewCount: 0,
                  statusItemImpressionCount: 0,
                  statusItem3sViewCount: 0,
                  statusCategory: s
                    ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .GROUP_STATUS
                    : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .REGULAR_STATUS,
                });
          }),
          (t[4] = s),
          (t[5] = n.msg.id),
          (t[6] = n.statusItemViewMap),
          (t[7] = m))
        : (m = t[7]);
      var p = r("useLazyRef")(m),
        _;
      t[8] !== d || t[9] !== u || t[10] !== s || t[11] !== n || t[12] !== p
        ? ((_ = babelHelpers.extends({}, n, {
            statusItemViewEventRef: p,
            isGroupStatus: s,
            containsMusic: u,
            canPlaybackAudio: d,
          })),
          (t[8] = d),
          (t[9] = u),
          (t[10] = s),
          (t[11] = n),
          (t[12] = p),
          (t[13] = _))
        : (_ = t[13]);
      var g = _;
      if (o("WAWebStatusGatingUtils").isStatusVPVLoggingEnabled()) {
        var h;
        return (
          t[14] !== g || t[15] !== a
            ? ((h = f.jsx(K, babelHelpers.extends({ ref: a }, g))),
              (t[14] = g),
              (t[15] = a),
              (t[16] = h))
            : (h = t[16]),
          h
        );
      }
      var y;
      return (
        t[17] !== g || t[18] !== a
          ? ((y = f.jsx(W, babelHelpers.extends({ ref: a }, g))),
            (t[17] = g),
            (t[18] = a),
            (t[19] = y))
          : (y = t[19]),
        y
      );
    }
    l.default = X;
  },
  226,
);
