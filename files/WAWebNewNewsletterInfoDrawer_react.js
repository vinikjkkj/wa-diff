__d(
  "WAWebNewNewsletterInfoDrawer.react",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebABProps",
    "WAWebChatGetExistingBridge",
    "WAWebChatPinBridge",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCreateAction",
    "WAWebNewsletterCreationFailureModal.react",
    "WAWebNewsletterCreationLoadingModal.react",
    "WAWebNewsletterFollowerSelectionFlow.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebPinChatLimits",
    "WAWebRichTextField.react",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnifiedSession",
    "WAWebWamEnumChannelAdminAction",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelEventType",
    "WAWebWamEnumThreadType",
    "WDSBaseCheckbox.react",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = {
        channelMetadataSection: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "x1qughib",
          width: "xh8yej3",
          $$css: !0,
        },
        paddingHoriz32: {
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingBottom28: { paddingBottom: "xgb8hzy", $$css: !0 },
        paddingBottom32: { paddingBottom: "x1ci70gm", $$css: !0 },
        paddingTop28: { paddingTop: "xv8gdss", $$css: !0 },
      };
    function y(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.pinChannel,
        a = e.togglePinning,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = d.jsx(o("WAWebFlex.react").FlexColumn, {
            children: d.jsx(r("WDSBaseCheckbox.react"), {
              value: n,
              onChange: a,
              testid: void 0,
            }),
          })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(o("WAWebFlex.react").FlexColumn, {
            padding: 16,
            children: d.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Pin channel so it's easy to find"),
            }),
          })),
          (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== i
          ? ((u = d.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "start",
              align: "center",
              children: [i, l],
            })),
            (t[4] = i),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function C(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = g(!1),
        c = l[0],
        m = l[1],
        C = g(""),
        b = C[0],
        v = C[1],
        S = g(null),
        R = S[0],
        L = S[1],
        E = g(null),
        k = E[0],
        I = E[1],
        T = r("useWAWebToggle")(!1),
        D = T[0],
        x = T[1],
        $ = g(0),
        P = $[0],
        N = $[1];
      function M() {
        return w.apply(this, arguments);
      }
      function w() {
        return (
          (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebChatPinBridge").getNumNewslettersPinned();
            N(e);
          })),
          w.apply(this, arguments)
        );
      }
      var A = i.adminFunnelLoggerRef,
        F = f(""),
        O = f(null),
        B = [h.paddingHoriz32, h.paddingBottom28];
      _(function () {
        (A.current.logEvent(
          o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
            .CHANNEL_CREATE_LAUNCH_SUCCESS,
        ),
          M(),
          o(
            "WAWebNewsletterGatingUtils",
          ).isChannelInviteContactsToFollowCreationModalEnabled() &&
            r("JSResourceForInteraction")("WAWebConfettiTallGreenAnimationData")
              .__setRef("WAWebNewNewsletterInfoDrawer.react")
              .load()
              .catch(r("WAWebNoop")));
      }, []);
      var W =
          P < o("WAWebPinChatLimits").MAX_PINNED_NEWSLETTERS &&
          o("WAWebABProps").getABPropConfigValue(
            "channels_pinning_nudge_enabled",
          ),
        q = p(
          function (e, t) {
            (A.current.logEvent(
              o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                .CHANNEL_ADMIN_FLOW_FAILURE,
            ),
              t &&
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, { msg: e }),
                ));
          },
          [A],
        ),
        U = p(
          function (e) {
            (A.current.logEvent(
              o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                .CHANNEL_ADMIN_FLOW_SUCCESS,
            ),
              e &&
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Channel created"),
                  }),
                ));
          },
          [A],
        );
      function V(e) {
        return H.apply(this, arguments);
      }
      function H() {
        return (
          (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebChatGetExistingBridge").getExisting(e);
            t != null &&
              (yield o("WAWebChatPinBridge").getNumNewslettersPinned()) <
                o("WAWebChatPinBridge").getPinLimit(e) &&
              o("WAWebCmd").Cmd.pinChat(o("WAWebStateUtils").unproxy(t), !0);
          })),
          H.apply(this, arguments)
        );
      }
      var G = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o(
                "WAWebNewsletterGatingUtils",
              ).isChannelInviteContactsToFollowCreationModalEnabled(),
              n = { current: null },
              a = t ? o("WAWebModalManager").closeModalManager : r("WAWebNoop");
            (m(!0),
              t &&
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebNewsletterCreationLoadingModal.react"), {
                    channelName: e.name,
                    initialLoading: !0,
                    loadingRef: n,
                    onClose: a,
                    thumbnailUrl: e.picture,
                  }),
                  { blockClose: !0 },
                ));
            var i = yield o(
              "WAWebNewsletterCreateAction",
            ).createNewsletterAction(e);
            if (i != null) {
              var l, u;
              if (
                (o(
                  "WAWebNewsletterAttributionLogging",
                ).NewsletterCoreEventLogger.log({
                  channelCoreEventType: o("WAWebWamEnumChannelEventType")
                    .CHANNEL_EVENT_TYPE.CREATE,
                  cid: i,
                  unifiedSessionId:
                    (l = o(
                      "WAWebUnifiedSession",
                    ).UnifiedSessionManager.getSessionId()) != null
                      ? l
                      : void 0,
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                  entryPoint: o("WAWebWamEnumChannelEntryPoint")
                    .CHANNEL_ENTRY_POINT.NEWSLETTER_CREATION_UPDATES_TAB,
                }),
                U(!t),
                D && (yield V(i)),
                o(
                  "WAWebNewsletterGatingUtils",
                ).isChannelInviteContactsToFollowProducerEnabled())
              ) {
                var c = r("WAWebNewsletterCollection").get(i);
                if (c)
                  if (t) {
                    var p;
                    (p = n.current) == null ||
                      p.setOnSuccess(function () {
                        o(
                          "WAWebNewsletterFollowerSelectionFlow.react",
                        ).startFollowerInviteFlow({ chat: c });
                      });
                  } else
                    o(
                      "WAWebNewsletterFollowerSelectionFlow.react",
                    ).startFollowerInviteFlow({ chat: c });
              }
              (m(!1),
                (u = n.current) == null || u.setLoading(!1),
                o("WAWebCmd").Cmd.openCreatedNewsletter(i));
            } else
              (a(),
                m(!1),
                q(
                  s._(
                    /*BTDS*/ "The channel couldn't be created. Please try again.",
                  ),
                  !t,
                ),
                t &&
                  o("WAWebModalManager").ModalManager.open(
                    d.jsx(r("WAWebNewsletterCreationFailureModal.react"), {
                      onRetry: function () {
                        return void G(e);
                      },
                    }),
                  ));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        z = function (t) {
          if (!r("WAWebNetworkStatus").online) {
            q(
              s._(
                /*BTDS*/ "Channel could not be created. Check your internet connection and try again.",
              ),
              !0,
            );
            return;
          }
          G(t);
        },
        j = p(function (e) {
          var t = e.text;
          v(t);
        }, []),
        K = p(function (e) {
          var t = e.text;
          L(t);
        }, []),
        Q = p(
          function (e, t, n) {
            (I(t), A.current.logImageSetEvent(n));
          },
          [A],
        ),
        X = R != null && R.trim().length === 0 && /\s/.test(R),
        Y = b.trim().length > 0 && !X,
        J = function () {
          b !== F.current &&
            ((F.current = b),
            A.current.logEvent(
              o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                .CHANNEL_NAME_SET,
            ));
        },
        Z = function () {
          R !== O.current &&
            ((O.current = R),
            A.current.logEvent(
              o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                .CHANNEL_DESCRIPTION_SET,
            ));
        },
        ee = function () {
          (J(),
            Z(),
            A.current.logEvent(
              o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
                .CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP,
            ),
            z({ name: b, description: R, picture: k }));
        },
        te = d.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          xstyle: h.paddingBottom32,
          children: d.jsx(r("WDSButton.react"), {
            testid: void 0,
            type: "default",
            variant: "filled",
            onPress: ee,
            disabled: !Y || c,
            loading: c,
            label: o("WAWebCommonNewsletterStrings").getCreateChannelText(),
          }),
        }),
        ne = s._(/*BTDS*/ "Channel name"),
        re = s._(
          /*BTDS*/ "Describe your channel. Include information to help people understand what your channel is about.",
        ),
        oe = s._(/*BTDS*/ "Channel description");
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "channel-create-page",
          extras: {
            threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
          },
        },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "New channel"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i.onBack,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              xstyle: h.channelMetadataSection,
              children: [
                d.jsxs("div", {
                  children: [
                    d.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (u || (u = r("stylex"))).props.apply(
                          u,
                          [h.paddingTop28].concat(B),
                        ),
                        {
                          children: d.jsx(
                            o("WAWebPhotoPickerLoadable.react")
                              .PhotoPickerLoadable,
                            {
                              type: o("WAWebPhotoPickerConstants")
                                .PhotoPickerType.NEWSLETTER,
                              attachToChat: !1,
                              startImage: k,
                              onImageSet: Q,
                            },
                          ),
                        },
                      ),
                    ),
                    d.jsx(
                      "div",
                      babelHelpers.extends(
                        { "data-testid": void 0 },
                        u.props.apply(u, B),
                        {
                          children: d.jsx(
                            o("WAWebRichTextField.react").RichTextField,
                            {
                              testid: void 0,
                              title: ne,
                              value: b,
                              maxLength: o(
                                "WAWebGroupGatingUtils",
                              ).getGroupMaxSubject(),
                              showRemaining: !0,
                              onChange: j,
                              onBlur: J,
                              placeholder: ne,
                              onEnter: Y ? ee : r("WAWebNoop"),
                              emojiBtnPosition: "side",
                              focusOnMount: !0,
                            },
                          ),
                        },
                      ),
                    ),
                    d.jsx(
                      "div",
                      babelHelpers.extends(
                        { "data-testid": void 0 },
                        u.props.apply(u, B),
                        {
                          children: d.jsx(
                            o("WAWebRichTextField.react").RichTextField,
                            {
                              testid: void 0,
                              title: re,
                              value: R,
                              maxLength: o(
                                "WAWebGroupGatingUtils",
                              ).getGroupDescriptionLength(),
                              showRemaining: !0,
                              onChange: K,
                              onBlur: Z,
                              placeholder: oe,
                              inputPlaceholder: re,
                              onEnter: Y ? ee : r("WAWebNoop"),
                              emojiBtnPosition: "side",
                              multiline: !0,
                              maxVisibleLines: 5,
                              minVisibleLines: 5,
                              textFormatEnabled: !0,
                              bulletPointsEnabled: !0,
                              numberedListEnabled: !1,
                              blockQuoteEnabled: !1,
                              inlineCodeEnabled: !1,
                              theme: "gray-background",
                            },
                          ),
                        },
                      ),
                    ),
                    d.jsx(
                      "div",
                      babelHelpers.extends(
                        { "data-testid": void 0 },
                        u.props.apply(u, B),
                        {
                          children: W
                            ? d.jsx(y, { pinChannel: D, togglePinning: x })
                            : null,
                        },
                      ),
                    ),
                  ],
                }),
                te,
              ],
            }),
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
