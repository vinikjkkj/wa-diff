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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(
              "div",
              babelHelpers.extends({}, t, {
                children: c.jsx(r("WDSBanner.react"), {
                  type: "tip",
                  body: s._(/*BTDS*/ "See examples of different communities."),
                  actionText: s._(/*BTDS*/ "Learn more"),
                  onAction: v,
                }),
              }),
            )),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function y(t) {
      var a,
        i = o("react-compiler-runtime").c(97),
        l = t.existingGroups,
        u = t.onBack,
        d = t.onCancel,
        y = t.onCreateCommunity,
        v = t.ref,
        S = t.viewType,
        R = _(null),
        L = _(null),
        E = f(""),
        k = E[0],
        I = E[1],
        T;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s
            ._(
              /*BTDS*/ "Hi everyone! This community is for members to chat in topic-based groups and get important announcements.",
            )
            .toString()),
          (i[0] = T))
        : (T = i[0]);
      var D = f(T),
        x = D[0],
        $ = D[1],
        P = f(),
        N = P[0],
        M = P[1],
        w = f(!1),
        A = w[0],
        F = w[1],
        O = r("useWAWebNux")(o("WAWebNux").NUX.COMMUNITY),
        B = O[0],
        W = O[1],
        q = f(!0),
        U = q[0],
        V = q[1],
        H = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        G = B || U,
        z = _(!1),
        j;
      i[1] !== l
        ? ((j = function () {
            return l == null || l.length <= 0 ? [] : l.map(b).filter(Boolean);
          }),
          (i[1] = l),
          (i[2] = j))
        : (j = i[2]);
      var K = f(j),
        Q = K[0],
        X = K[1],
        Y;
      i[3] !== G
        ? ((Y = function () {
            return G
              ? o("WAWebWamEnumCommunityCreationCurrentScreenType")
                  .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX
              : o("WAWebWamEnumCommunityCreationCurrentScreenType")
                  .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO;
          }),
          (i[3] = G),
          (i[4] = Y))
        : (Y = i[4]);
      var J = Y,
        Z;
      i[5] !== Q.length || i[6] !== J
        ? ((Z = function () {
            var e = J();
            Q.length &&
              o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).UiCommunityCreationAction.linkGroup(Q.length, e);
          }),
          (i[5] = Q.length),
          (i[6] = J),
          (i[7] = Z))
        : (Z = i[7]);
      var ee = Z,
        te;
      i[8] !== ee || i[9] !== u || i[10] !== d || i[11] !== G
        ? ((te = function () {
            (ee(),
              G
                ? o(
                    "WAWebCommunityCreationFlowMetricUtils",
                  ).UiCommunityCreationAction.dismiss()
                : z.current === !1 &&
                  o(
                    "WAWebCommunityCreationFlowMetricUtils",
                  ).UiCommunityCreationAction.exit(),
              u || d
                ? (u == null || u(), d == null || d())
                : z.current === !1 &&
                  o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
          }),
          (i[8] = ee),
          (i[9] = u),
          (i[10] = d),
          (i[11] = G),
          (i[12] = te))
        : (te = i[12]);
      var ne = r("useWAWebCallbackOnce")(te),
        re;
      i[13] !== J
        ? ((re = function () {
            o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.createCommunityFail(J());
          }),
          (i[13] = J),
          (i[14] = re))
        : (re = i[14]);
      var oe = re,
        ae;
      i[15] !== Q || i[16] !== J || i[17] !== oe || i[18] !== y
        ? ((ae = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t =
                    (Q == null || Q.length === 0) &&
                    o(
                      "WAWebCommunityGatingUtils",
                    ).communityGeneralChatCreateEnabled(),
                  n = yield r("WAWebCreateCommunityAction")(
                    babelHelpers.extends({}, e, {
                      existingGroups: Q,
                      onCommunityCreationFailure: oe,
                      shouldCreateGeneralChat: t,
                    }),
                  );
                ((z.current = !0),
                  o(
                    "WAWebWamPrivateStatsUtils",
                  ).logUiActionShadowPrivateStatsTestEvents(),
                  n != null &&
                    (o("WAWebCmd").Cmd.openCommunityHome(n),
                    o(
                      "WAWebCommunityCreationFlowMetricUtils",
                    ).UiCommunityCreationAction.createCommunitySuccess(
                      J(),
                      n.user,
                    )),
                  y == null || y());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i[15] = Q),
          (i[16] = J),
          (i[17] = oe),
          (i[18] = y),
          (i[19] = ae))
        : (ae = i[19]);
      var ie = ae,
        le;
      i[20] !== ie
        ? ((le = function (t) {
            (F(!0), ie(t));
          }),
          (i[20] = ie),
          (i[21] = le))
        : (le = i[21]);
      var se = r("useWAWebCallbackOnce")(le),
        ue;
      i[22] !== oe || i[23] !== se
        ? ((ue = function (t) {
            if (!r("WAWebNetworkStatus").online) {
              (o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Community could not be created. Check your internet connection and try again.",
                  ),
                }),
              ),
                oe());
              return;
            }
            se(t);
          }),
          (i[22] = oe),
          (i[23] = se),
          (i[24] = ue))
        : (ue = i[24]);
      var ce = ue,
        de = [g.paddingHoriz32, g.paddingBottom28],
        me;
      i[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = function () {
            var e;
            (e = R.current) == null || e.restoreFocus();
          }),
          (i[25] = me))
        : (me = i[25]);
      var pe;
      (i[26] !== Q.length
        ? ((pe = [Q.length]), (i[26] = Q.length), (i[27] = pe))
        : (pe = i[27]),
        m(me, pe));
      var _e;
      i[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = function (t) {
            R.current = t;
          }),
          (i[28] = _e))
        : (_e = i[28]);
      var fe = _e,
        ge;
      i[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = function (t) {
            I(t);
          }),
          (i[29] = ge))
        : (ge = i[29]);
      var he = ge,
        ye;
      i[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((ye = function (t) {
            $(t);
          }),
          (i[30] = ye))
        : (ye = i[30]);
      var Ce = ye,
        be;
      i[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = function () {
            (o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.unlinkGroup(),
              X([]));
          }),
          (i[31] = be))
        : (be = i[31]);
      var ve = be,
        Se;
      i[32] !== x || i[33] !== N || i[34] !== k || i[35] !== ce
        ? ((Se = function () {
            ce({ name: k.trim(), desc: x.trim(), icon: N });
          }),
          (i[32] = x),
          (i[33] = N),
          (i[34] = k),
          (i[35] = ce),
          (i[36] = Se))
        : (Se = i[36]);
      var Re = r("useWAWebCallbackOnce")(Se),
        Le;
      if (i[37] !== ((a = Q[0]) == null ? void 0 : a.subject) || i[38] !== Re) {
        var Ee;
        ((Le = function () {
          var e,
            t = s._(/*BTDS*/ 'Add "{community-name}" to community?', [
              s._param(
                "community-name",
                c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: (e = Q[0]) == null ? void 0 : e.subject,
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
                  Re(),
                  o("WAWebModalManager").ModalManager.close());
              },
              onCancel: C,
            }),
          );
        }),
          (i[37] = (Ee = Q[0]) == null ? void 0 : Ee.subject),
          (i[38] = Re),
          (i[39] = Le));
      } else Le = i[39];
      var ke = Le,
        Ie;
      i[40] !== Q.length || i[41] !== ke || i[42] !== Re
        ? ((Ie = function () {
            (o(
              "WAWebCommunityCreationFlowMetricUtils",
            ).UiCommunityCreationAction.createCommunity(
              o("WAWebWamEnumCommunityCreationCurrentScreenType")
                .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO,
            ),
              Q.length ? ke() : Re());
          }),
          (i[40] = Q.length),
          (i[41] = ke),
          (i[42] = Re),
          (i[43] = Ie))
        : (Ie = i[43]);
      var Te = Ie,
        De;
      i[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = function (t, n) {
            M(n);
          }),
          (i[44] = De))
        : (De = i[44]);
      var xe = De,
        $e;
      if (
        (i[45] === Symbol.for("react.memo_cache_sentinel")
          ? (($e = function () {
              return {
                restoreFocus: function () {
                  var e;
                  return (e = R.current) == null ? void 0 : e.restoreFocus();
                },
                getElement: function () {
                  return L.current;
                },
              };
            }),
            (i[45] = $e))
          : ($e = i[45]),
        p(v, $e),
        G)
      ) {
        var Pe;
        i[46] !== U || i[47] !== B || i[48] !== W
          ? ((Pe = function () {
              (o(
                "WAWebCommunityCreationFlowMetricUtils",
              ).UiCommunityCreationAction.getStarted(),
                B && W(),
                U && V(!1));
            }),
            (i[46] = U),
            (i[47] = B),
            (i[48] = W),
            (i[49] = Pe))
          : (Pe = i[49]);
        var Ne = u ? ne : void 0,
          Me = d ? ne : void 0,
          we;
        return (
          i[50] !== Pe || i[51] !== Ne || i[52] !== Me || i[53] !== S
            ? ((we = c.jsx(r("WAWebNewCommunityNux.react"), {
                ref: L,
                viewType: S,
                onContinue: Pe,
                onBack: Ne,
                onCancel: Me,
              })),
              (i[50] = Pe),
              (i[51] = Ne),
              (i[52] = Me),
              (i[53] = S),
              (i[54] = we))
            : (we = i[54]),
          we
        );
      }
      var Ae;
      i[55] !== k ? ((Ae = k.trim()), (i[55] = k), (i[56] = Ae)) : (Ae = i[56]);
      var Fe = Ae.length > 0,
        Oe;
      i[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((Oe = s._(/*BTDS*/ "Community name")), (i[57] = Oe))
        : (Oe = i[57]);
      var Be = Oe,
        We;
      i[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((We = s._(
            /*BTDS*/ "What's this community for? It's helpful to add rules for your members.",
          )),
          (i[58] = We))
        : (We = i[58]);
      var qe = We,
        Ue;
      i[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = s._(/*BTDS*/ "Community description")), (i[59] = Ue))
        : (Ue = i[59]);
      var Ve = Ue,
        He;
      i[60] !== S
        ? ((He = o("WAWebDrawerUtils").getDrawerHeaderType(S)),
          (i[60] = S),
          (i[61] = He))
        : (He = i[61]);
      var Ge = He,
        ze;
      i[62] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = { surface: "new-community-info-drawer" }), (i[62] = ze))
        : (ze = i[62]);
      var je;
      i[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((je = s._(/*BTDS*/ "New community")), (i[63] = je))
        : (je = i[63]);
      var Ke = u ? ne : void 0,
        Qe = d ? ne : void 0,
        Xe;
      i[64] !== Ge || i[65] !== Ke || i[66] !== Qe
        ? ((Xe = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: je,
            type: Ge,
            onBack: Ke,
            onCancel: Qe,
          })),
          (i[64] = Ge),
          (i[65] = Ke),
          (i[66] = Qe),
          (i[67] = Xe))
        : (Xe = i[67]);
      var Ye;
      i[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ye = c.jsx(h, {})), (i[68] = Ye))
        : (Ye = i[68]);
      var Je;
      i[69] !== N
        ? ((Je = c.jsx(
            o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
            {
              type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
              attachToChat: !1,
              startImage: N,
              onImageSet: xe,
              theme: o("WAWebPhotoPickerConstants").PhotoPickerThemeType
                .EMOJI_SUGGESTIONS,
            },
          )),
          (i[69] = N),
          (i[70] = Je))
        : (Je = i[70]);
      var Ze = (e || (e = r("stylex"))).props.apply(e, de),
        et;
      i[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((et = o("WAWebGroupGatingUtils").getGroupMaxSubject()), (i[71] = et))
        : (et = i[71]);
      var tt;
      i[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((tt = function (t) {
            var e = t.text;
            return he(e);
          }),
          (i[72] = tt))
        : (tt = i[72]);
      var nt = Fe ? Te : r("WAWebNoop"),
        rt;
      i[73] !== k || i[74] !== nt
        ? ((rt = c.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            title: Be,
            ref: fe,
            value: k,
            maxLength: et,
            showRemaining: !0,
            onChange: tt,
            placeholder: Be,
            onEnter: nt,
            emojiBtnPosition: "side",
            focusOnMount: !0,
          })),
          (i[73] = k),
          (i[74] = nt),
          (i[75] = rt))
        : (rt = i[75]);
      var ot = e.props.apply(e, de),
        at;
      i[76] !== x ||
      i[77] !== Ve ||
      i[78] !== Te ||
      i[79] !== Ce ||
      i[80] !== H ||
      i[81] !== qe ||
      i[82] !== Fe
        ? ((at =
            H === !0
              ? c.jsx(r("WDSRichTextField.react"), {
                  label: Ve,
                  initialText: x,
                  onValueChange: Ce,
                  maxLength: o(
                    "WAWebGroupGatingUtils",
                  ).getGroupDescriptionLength(),
                  maxCharacterCount: o(
                    "WAWebGroupGatingUtils",
                  ).getGroupDescriptionLength(),
                  rows: 5,
                  onEnter: Fe ? Te : void 0,
                  testid: void 0,
                })
              : c.jsx(o("WAWebRichTextField.react").RichTextField, {
                  testid: void 0,
                  title: qe,
                  value: x,
                  maxLength: o(
                    "WAWebGroupGatingUtils",
                  ).getGroupDescriptionLength(),
                  showRemaining: !0,
                  onChange: function (t) {
                    var e = t.text;
                    return Ce(e);
                  },
                  placeholder: Ve,
                  inputPlaceholder: qe,
                  onEnter: Fe ? Te : r("WAWebNoop"),
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
                })),
          (i[76] = x),
          (i[77] = Ve),
          (i[78] = Te),
          (i[79] = Ce),
          (i[80] = H),
          (i[81] = qe),
          (i[82] = Fe),
          (i[83] = at))
        : (at = i[83]);
      var it;
      i[84] !== ot || i[85] !== at
        ? ((it = c.jsx("div", babelHelpers.extends({}, ot, { children: at }))),
          (i[84] = ot),
          (i[85] = at),
          (i[86] = it))
        : (it = i[86]);
      var lt;
      i[87] !== Q || i[88] !== ve
        ? ((lt = Q.length
            ? c.jsx(r("WAWebDrawerSection.react"), {
                testid: void 0,
                title: s._(/*BTDS*/ "Groups in this community"),
                animation: !1,
                xstyle: g.section,
                theme: "padding-no-vertical",
                children: Q.map(function (e) {
                  var t = e.id,
                    n = e.participants,
                    a = e.subject;
                  return c.jsx(
                    r("WAWebCellFrame.react"),
                    {
                      primary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: a,
                        ellipsify: !0,
                      }),
                      image: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: t,
                      }),
                      secondary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: n
                          ? o(
                              "WAWebCommunityGetParticipantInfoText",
                            ).getParticipantInfoText(n)
                          : null,
                        ellipsify: !0,
                      }),
                      detail: c.jsx(
                        o("WAWebCommunityCells.react").RemoveButton,
                        { groupName: a, onClick: ve, subgroup: t, tabIndex: 0 },
                      ),
                      theme: "collection-header",
                    },
                    t.toString(),
                  );
                }),
              })
            : null),
          (i[87] = Q),
          (i[88] = ve),
          (i[89] = lt))
        : (lt = i[89]);
      var st;
      i[90] === Symbol.for("react.memo_cache_sentinel")
        ? ((st = [g.paddingVert32, g.buttonContainer]), (i[90] = st))
        : (st = i[90]);
      var ut;
      i[91] !== A
        ? ((ut = A ? s._(/*BTDS*/ "Creating...") : s._(/*BTDS*/ "Create")),
          (i[91] = A),
          (i[92] = ut))
        : (ut = i[92]);
      var ct = !Fe || A,
        dt;
      return (
        i[93] !== Te || i[94] !== ut || i[95] !== ct
          ? ((dt = c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: st,
              children: c.jsx(r("WDSButton.react"), {
                label: ut,
                variant: "filled",
                size: "medium",
                type: "default",
                onPress: Te,
                disabled: ct,
                widthMode: "flexible",
                testid: void 0,
              }),
            })),
            (i[93] = Te),
            (i[94] = ut),
            (i[95] = ct),
            (i[96] = dt))
          : (dt = i[96]),
        c.jsxs(r("WAWebDrawer.react"), {
          ref: L,
          tsNavigationData: ze,
          viewType: S,
          children: [
            Xe,
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsxs(r("WAWebDrawerSection.react"), {
                theme: "full-height",
                children: [
                  Ye,
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props.apply(e, [g.paddingTop28].concat(de)),
                      { children: Je },
                    ),
                  ),
                  c.jsx("div", babelHelpers.extends({}, Ze, { children: rt })),
                  it,
                  lt,
                ],
              }),
            }),
            dt,
          ],
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      (o(
        "WAWebCommunityCreationFlowMetricUtils",
      ).UiCommunityCreationAction.linkGroupConfirmationCancel(),
        o("WAWebModalManager").ModalManager.close());
    }
    function b(e) {
      var t,
        n,
        r = o("WAWebChatCollection").ChatCollection.get(e);
      return r == null
        ? null
        : {
            id: e,
            subject: (t = r.formattedTitle) != null ? t : "",
            participants:
              (n = r.groupMetadata) == null ? void 0 : n.participants,
            contact: r.contact,
          };
    }
    function v() {
      var e = o("WAWebFaqUrl").getAboutCommunitiesFaqUrl();
      o("WAWebExternalLink.react").openExternalLink(e);
    }
    l.default = y;
  },
  226,
);
