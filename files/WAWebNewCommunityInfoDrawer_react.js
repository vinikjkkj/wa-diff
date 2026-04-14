__d(
  "WAWebNewCommunityInfoDrawer.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommunityAddGroupConfirmationPopup.react",
    "WAWebCommunityCells.react",
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityGetParticipantInfoText",
    "WAWebCreateCommunityAction",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNewCommunityNux.react",
    "WAWebNoop",
    "WAWebNux",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebRichTextField.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamPrivateStatsUtils",
    "WDSBanner.react",
    "WDSButton.react",
    "WDSRichTextField.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebABPropConfigValue",
    "useWAWebCallbackOnce",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = {
        section: {
          paddingInlineStart: "x11ahuha",
          paddingInlineEnd: "xl3akx1",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        buttonContainer: {
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
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
        paddingTop28: { paddingTop: "xv8gdss", $$css: !0 },
        paddingVert32: {
          paddingTop: "x1sk1jro",
          paddingBottom: "x1ci70gm",
          $$css: !0,
        },
      };
    function h() {
      return c.jsx("div", {
        className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
        children: c.jsx(r("WDSBanner.react"), {
          type: "tip",
          body: s._(/*BTDS*/ "See examples of different communities."),
          actionText: s._(/*BTDS*/ "Learn more"),
          onAction: C,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var a = t.existingGroups,
        i = t.onBack,
        l = t.onCancel,
        u = t.onCreateCommunity,
        d = t.ref,
        y = t.viewType,
        C = _(null),
        b = _(null),
        v = f(""),
        S = v[0],
        R = v[1],
        L = f(
          s
            ._(
              /*BTDS*/ "Hi everyone! This community is for members to chat in topic-based groups and get important announcements.",
            )
            .toString(),
        ),
        E = L[0],
        k = L[1],
        I = f(),
        T = I[0],
        D = I[1],
        x = f(!1),
        $ = x[0],
        P = x[1],
        N = r("useWAWebNux")(o("WAWebNux").NUX.COMMUNITY),
        M = N[0],
        w = N[1],
        A = f(!0),
        F = A[0],
        O = A[1],
        B = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        W = M || F,
        q = _(!1),
        U = f(function () {
          return a == null || a.length <= 0
            ? []
            : a
                .map(function (e) {
                  var t,
                    n,
                    r = o("WAWebChatCollection").ChatCollection.get(e);
                  return r == null
                    ? null
                    : {
                        id: e,
                        subject: (t = r.formattedTitle) != null ? t : "",
                        participants:
                          (n = r.groupMetadata) == null
                            ? void 0
                            : n.participants,
                        contact: r.contact,
                      };
                })
                .filter(Boolean);
        }),
        V = U[0],
        H = U[1],
        G = function () {
          return W
            ? o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX
            : o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO;
        },
        z = function () {
          var e = G();
          V.length &&
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.linkGroup(V.length, e);
        },
        j = r("useWAWebCallbackOnce")(function () {
          (z(),
            W
              ? o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.dismiss()
              : q.current === !1 &&
                o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.exit(),
            i || l
              ? (i == null || i(), l == null || l())
              : q.current === !1 &&
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        });
      function K() {
        o(
          "WAWebCommunityCreationFlowMetricUtils",
        ).UiCommunityCreationAction.createCommunityFail(G());
      }
      function Q(e) {
        return X.apply(this, arguments);
      }
      function X() {
        return (
          (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t =
                (V == null || V.length === 0) &&
                o(
                  "WAWebCommunityGatingUtils",
                ).communityGeneralChatCreateEnabled(),
              n = yield r("WAWebCreateCommunityAction")(
                babelHelpers.extends({}, e, {
                  existingGroups: V,
                  onCommunityCreationFailure: K,
                  shouldCreateGeneralChat: t,
                }),
              );
            ((q.current = !0),
              o(
                "WAWebWamPrivateStatsUtils",
              ).logUiActionShadowPrivateStatsTestEvents(),
              n != null &&
                (o("WAWebCmd").Cmd.openCommunityHome(n),
                o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.createCommunitySuccess(
                  G(),
                  n.user,
                )),
              u == null || u());
          })),
          X.apply(this, arguments)
        );
      }
      var Y = r("useWAWebCallbackOnce")(function (e) {
        (P(!0), Q(e));
      });
      function J(e) {
        if (!r("WAWebNetworkStatus").online) {
          (o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Community could not be created. Check your internet connection and try again.",
              ),
            }),
          ),
            K());
          return;
        }
        Y(e);
      }
      var Z = [g.paddingHoriz32, g.paddingBottom28];
      m(
        function () {
          var e;
          (e = C.current) == null || e.restoreFocus();
        },
        [V.length],
      );
      var ee = function (t) {
          C.current = t;
        },
        te = function (t) {
          R(t);
        },
        ne = function (t) {
          k(t);
        },
        re = function () {
          (o(
            "WAWebCommunityCreationFlowMetricUtils",
          ).UiCommunityCreationAction.unlinkGroup(),
            H([]));
        },
        oe = r("useWAWebCallbackOnce")(function () {
          J({ name: S.trim(), desc: E.trim(), icon: T });
        }),
        ae = function () {
          var e,
            t = s._(/*BTDS*/ 'Add "{community-name}" to community?', [
              s._param(
                "community-name",
                c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: (e = V[0]) == null ? void 0 : e.subject,
                }),
              ),
            ]);
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
              title: t,
              disclaimer: s._(
                /*BTDS*/ "The people in this group will be added to the community as members.",
              ),
              onOK: function () {
                (o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.linkGroupConfirmationOk(),
                  oe(),
                  o("WAWebModalManager").ModalManager.close());
              },
              onCancel: function () {
                (o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.linkGroupConfirmationCancel(),
                  o("WAWebModalManager").ModalManager.close());
              },
            }),
          );
        },
        ie = function () {
          (o(
            "WAWebCommunityCreationFlowMetricUtils",
          ).UiCommunityCreationAction.createCommunity(
            o("WAWebWamEnumCommunityCreationCurrentScreenType")
              .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO,
          ),
            V.length ? ae() : oe());
        },
        le = function (t, n) {
          D(n);
        };
      if (
        (p(d, function () {
          return {
            restoreFocus: function () {
              var e;
              return (e = C.current) == null ? void 0 : e.restoreFocus();
            },
            getElement: function () {
              return b.current;
            },
          };
        }),
        W)
      )
        return c.jsx(r("WAWebNewCommunityNux.react"), {
          ref: b,
          viewType: y,
          onContinue: function () {
            (o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.getStarted(),
              M && w(),
              F && O(!1));
          },
          onBack: i ? j : void 0,
          onCancel: l ? j : void 0,
        });
      var se = S.trim().length > 0,
        ue = s._(/*BTDS*/ "Community name"),
        ce = s._(
          /*BTDS*/ "What's this community for? It's helpful to add rules for your members.",
        ),
        de = s._(/*BTDS*/ "Community description"),
        me = o("WAWebDrawerUtils").getDrawerHeaderType(y);
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: b,
        tsNavigationData: { surface: "new-community-info-drawer" },
        viewType: y,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "New community"),
            type: me,
            onBack: i ? j : void 0,
            onCancel: l ? j : void 0,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              children: [
                c.jsx(h, {}),
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props.apply(
                      e,
                      [g.paddingTop28].concat(Z),
                    ),
                    {
                      children: c.jsx(
                        o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
                        {
                          type: o("WAWebPhotoPickerConstants").PhotoPickerType
                            .COMMUNITY,
                          attachToChat: !1,
                          startImage: T,
                          onImageSet: le,
                          theme: o("WAWebPhotoPickerConstants")
                            .PhotoPickerThemeType.EMOJI_SUGGESTIONS,
                        },
                      ),
                    },
                  ),
                ),
                c.jsx(
                  "div",
                  babelHelpers.extends({}, e.props.apply(e, Z), {
                    children: c.jsx(
                      o("WAWebRichTextField.react").RichTextField,
                      {
                        testid: void 0,
                        title: ue,
                        ref: ee,
                        value: S,
                        maxLength: o(
                          "WAWebGroupGatingUtils",
                        ).getGroupMaxSubject(),
                        showRemaining: !0,
                        onChange: function (t) {
                          var e = t.text;
                          return te(e);
                        },
                        placeholder: ue,
                        onEnter: se ? ie : r("WAWebNoop"),
                        emojiBtnPosition: "side",
                        focusOnMount: !0,
                      },
                    ),
                  }),
                ),
                c.jsx(
                  "div",
                  babelHelpers.extends({}, e.props.apply(e, Z), {
                    children:
                      B === !0
                        ? c.jsx(r("WDSRichTextField.react"), {
                            label: de,
                            initialText: E,
                            onValueChange: ne,
                            maxLength: o(
                              "WAWebGroupGatingUtils",
                            ).getGroupDescriptionLength(),
                            maxCharacterCount: o(
                              "WAWebGroupGatingUtils",
                            ).getGroupDescriptionLength(),
                            rows: 5,
                            onEnter: se ? ie : void 0,
                            testid: void 0,
                          })
                        : c.jsx(o("WAWebRichTextField.react").RichTextField, {
                            testid: void 0,
                            title: ce,
                            value: E,
                            maxLength: o(
                              "WAWebGroupGatingUtils",
                            ).getGroupDescriptionLength(),
                            showRemaining: !0,
                            onChange: function (t) {
                              var e = t.text;
                              return ne(e);
                            },
                            placeholder: de,
                            inputPlaceholder: ce,
                            onEnter: se ? ie : r("WAWebNoop"),
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
                          }),
                  }),
                ),
                V.length
                  ? c.jsx(r("WAWebDrawerSection.react"), {
                      testid: void 0,
                      title: s._(/*BTDS*/ "Groups in this community"),
                      animation: !1,
                      xstyle: g.section,
                      theme: "padding-no-vertical",
                      children: V.map(function (e) {
                        var t = e.id,
                          n = e.participants,
                          a = e.subject;
                        return c.jsx(
                          r("WAWebCellFrame.react"),
                          {
                            primary: c.jsx(
                              o("WAWebEmojiText.react").EmojiText,
                              { text: a, ellipsify: !0 },
                            ),
                            image: c.jsx(
                              o("WAWebDetailImage.react").DetailImage,
                              { id: t },
                            ),
                            secondary: c.jsx(
                              o("WAWebEmojiText.react").EmojiText,
                              {
                                text: n
                                  ? o(
                                      "WAWebCommunityGetParticipantInfoText",
                                    ).getParticipantInfoText(n)
                                  : null,
                                ellipsify: !0,
                              },
                            ),
                            detail: c.jsx(
                              o("WAWebCommunityCells.react").RemoveButton,
                              {
                                groupName: a,
                                onClick: re,
                                subgroup: t,
                                tabIndex: 0,
                              },
                            ),
                            theme: "collection-header",
                          },
                          t.toString(),
                        );
                      }),
                    })
                  : null,
              ],
            }),
          }),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: [g.paddingVert32, g.buttonContainer],
            children: c.jsx(r("WDSButton.react"), {
              label: $ ? s._(/*BTDS*/ "Creating...") : s._(/*BTDS*/ "Create"),
              variant: "filled",
              size: "medium",
              type: "default",
              onPress: ie,
              disabled: !se || $,
              widthMode: "flexible",
              testid: void 0,
            }),
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      var e = o("WAWebFaqUrl").getAboutCommunitiesFaqUrl();
      o("WAWebExternalLink.react").openExternalLink(e);
    }
    l.default = y;
  },
  226,
);
