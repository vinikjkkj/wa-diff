__d(
  "WAWebNewGroupDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAddressingModePopup.react",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "WAWebCommunityGetParticipantInfoText",
    "WAWebContactCollection",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawer.react",
    "WAWebDrawerBlock.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebEphemeralKicNux.react",
    "WAWebEphemeralL10N",
    "WAWebEphemeralPopup.react",
    "WAWebEphemeralityResolver",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUserPrefsNuxPreferences",
    "WAWebVelocityTransitionGroup",
    "WDSColorStyles.stylex",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c.useState,
      p = {
        header: { marginBottom: "x13m54ha", $$css: !0 },
        chevronIcon: { color: "xhslqc4", $$css: !0 },
      },
      _ = { surface: "group-creation" };
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.ephemeralDuration,
        a = e.handleEphemeralDurationClick,
        i;
      if (n > 0) {
        var l;
        (t[0] !== n
          ? ((l =
              o("WAWebEphemeralL10N").getDisappearingMessageDurationString(n)),
            (t[0] = n),
            (t[1] = l))
          : (l = t[1]),
          (i = l));
      } else {
        var u;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Off")), (t[2] = u))
          : (u = t[2]),
          (i = u));
      }
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            xstyle: p.chevronIcon,
            directional: !0,
            height: 21,
          })),
          (t[3] = c))
        : (c = t[3]);
      var m = c,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Disappearing messages").toString()), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x13m54ha" }), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = d.jsx(
            "div",
            babelHelpers.extends({}, f, {
              children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                children: s._(/*BTDS*/ "Disappearing messages"),
              }),
            }),
          )),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== i
        ? ((h = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            as: "p",
            children: i,
          })),
          (t[7] = i),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== a || t[10] !== h
          ? ((y = d.jsx(r("WAWebDrawerSection.react"), {
              children: d.jsxs(r("WAWebDrawerBlock.react"), {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                testid: void 0,
                onClick: a,
                side: m,
                ariaLabel: _,
                multiline: !0,
                children: [g, h],
              }),
            })),
            (t[9] = a),
            (t[10] = h),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.addressingModeOverride,
        a = e.handleAddressingModeClick,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {})),
          (l = s._(/*BTDS*/ "Addressing Mode").toString()),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x13m54ha" }), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d.jsx(
            "div",
            babelHelpers.extends({}, u, {
              children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                children: s._(/*BTDS*/ "Addressing Mode"),
              }),
            }),
          )),
          (t[3] = c))
        : (c = t[3]);
      var m;
      t[4] !== n
        ? ((m = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            as: "p",
            children: n,
          })),
          (t[4] = n),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== a || t[7] !== m
          ? ((p = d.jsx(r("WAWebDrawerSection.react"), {
              children: d.jsxs(r("WAWebDrawerBlock.react"), {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                testid: void 0,
                onClick: a,
                side: i,
                ariaLabel: l,
                multiline: !0,
                children: [c, m],
              }),
            })),
            (t[6] = a),
            (t[7] = m),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onGroupPermissions,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            xstyle: p.chevronIcon,
            directional: !0,
            height: 21,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Group permissions").toString()), (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { className: "x13m54ha" }), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d.jsx(
            "div",
            babelHelpers.extends({}, u, {
              children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "h3",
                children: s._(/*BTDS*/ "Group permissions"),
              }),
            }),
          )),
          (t[3] = c))
        : (c = t[3]);
      var m;
      return (
        t[4] !== n
          ? ((m = d.jsx(r("WAWebDrawerSection.react"), {
              children: d.jsx(r("WAWebDrawerBlock.react"), {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                testid: void 0,
                onClick: n,
                side: i,
                ariaLabel: l,
                multiline: !0,
                children: c,
              }),
            })),
            (t[4] = n),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onAddParticipants,
        a = e.participants,
        i;
      t[0] !== a
        ? ((i = o(
            "WAWebCommunityGetParticipantInfoText",
          ).getParticipantInfoText(a)),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
            xstyle: p.chevronIcon,
            directional: !0,
            height: 21,
          })),
          (c = s._(/*BTDS*/ "Add members").toString()),
          (t[2] = u),
          (t[3] = c))
        : ((u = t[2]), (c = t[3]));
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = d.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "h3",
            xstyle: p.header,
            children: s._(/*BTDS*/ "Add members (optional)"),
          })),
          (t[4] = m))
        : (m = t[4]);
      var _;
      t[5] !== l
        ? ((_ = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            as: "p",
            children: l,
          })),
          (t[5] = l),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== n || t[8] !== _
          ? ((f = d.jsx(r("WAWebDrawerSection.react"), {
              children: d.jsxs(r("WAWebDrawerBlock.react"), {
                tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                onClick: n,
                side: u,
                ariaLabel: c,
                multiline: !0,
                children: [m, _],
              }),
            })),
            (t[7] = n),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    function C(t) {
      var n,
        a = o("react-compiler-runtime").c(87),
        i,
        l;
      (a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, u)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2])),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebNewGroupDrawer",
            ])),
        ));
      var c = i,
        p = c.participants,
        C = c.onSubmit,
        b = c.allowUnnamedGroup,
        v = c.parentGroupId,
        S = c.shortenedCreationFlow,
        R = c.onAddParticipants,
        L = c.onGroupPermissions,
        E = c.loading,
        k;
      a[3] !== p
        ? ((k = p === void 0 ? [] : p), (a[3] = p), (a[4] = k))
        : (k = a[4]);
      var I = k,
        T = E === void 0 ? !1 : E,
        D = m(i.subject || ""),
        x = D[0],
        $ = D[1],
        P = m(i.thumb),
        N = P[0],
        M = P[1],
        w = m(i.full),
        A = w[0],
        F = w[1],
        O;
      a[5] !== i.ephemeralDuration
        ? ((O = function () {
            if (i.ephemeralDuration != null) return i.ephemeralDuration;
            var e = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              o("WAWebContactCollection").ContactCollection.getMeContact(),
            );
            return e != null ? e : 0;
          }),
          (a[5] = i.ephemeralDuration),
          (a[6] = O))
        : (O = a[6]);
      var B = m(O),
        W = B[0],
        q = B[1],
        U = m((n = i.addressingModeOverride) != null ? n : "lid"),
        V = U[0],
        H = U[1],
        G;
      a[7] !== i
        ? ((G = function (t, n) {
            (M(t),
              F(n),
              i.handleLiftGroupInfo == null ||
                i.handleLiftGroupInfo({ thumb: t, full: n }));
          }),
          (a[7] = i),
          (a[8] = G))
        : (G = a[8]);
      var z = G,
        j;
      a[9] !== V ||
      a[10] !== W ||
      a[11] !== A ||
      a[12] !== C ||
      a[13] !== I ||
      a[14] !== x ||
      a[15] !== N
        ? ((j = function () {
            var e = x.trim();
            C(e, N, A, W, I, V);
          }),
          (a[9] = V),
          (a[10] = W),
          (a[11] = A),
          (a[12] = C),
          (a[13] = I),
          (a[14] = x),
          (a[15] = N),
          (a[16] = j))
        : (j = a[16]);
      var K = r("useWAWebCallbackOnce")(j),
        Q;
      a[17] !== i
        ? ((Q = function (t) {
            ($(t),
              i.handleLiftGroupInfo == null ||
                i.handleLiftGroupInfo({ text: t }));
          }),
          (a[17] = i),
          (a[18] = Q))
        : (Q = a[18]);
      var X = Q,
        Y;
      a[19] !== i
        ? ((Y = function (t) {
            (q(t),
              i.handleLiftGroupInfo == null ||
                i.handleLiftGroupInfo({ ephemeralDuration: t }));
          }),
          (a[19] = i),
          (a[20] = Y))
        : (Y = a[20]);
      var J = Y,
        Z;
      a[21] !== i
        ? ((Z = function (t) {
            (H(t),
              i.handleLiftGroupInfo == null ||
                i.handleLiftGroupInfo({ addressingModeOverride: t }));
          }),
          (a[21] = i),
          (a[22] = Z))
        : (Z = a[22]);
      var ee = Z,
        te;
      if (a[23] !== W || a[24] !== J) {
        var ne = function () {
          o("WAWebModalManager").ModalManager.openSupportModal(
            d.jsx(r("WAWebEphemeralPopup.react"), {
              initialDuration: W,
              onDurationSelected: J,
            }),
          );
        };
        ((te = function () {
          o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
            o("WAWebNux").NUX.EPHEMERAL,
          )
            ? o("WAWebModalManager").ModalManager.openSupportModal(
                d.jsx(r("WAWebEphemeralKicNux.react"), {
                  fromMe: !0,
                  onOk: ne,
                }),
              )
            : ne();
        }),
          (a[23] = W),
          (a[24] = J),
          (a[25] = te));
      } else te = a[25];
      var re = te,
        oe;
      a[26] !== V || a[27] !== ee
        ? ((oe = function () {
            o("WAWebModalManager").ModalManager.openSupportModal(
              d.jsx(r("WAWebAddressingModePopup.react"), {
                initialAddressingMode: V,
                onAddressingModeSelected: ee,
              }),
            );
          }),
          (a[26] = V),
          (a[27] = ee),
          (a[28] = oe))
        : (oe = a[28]);
      var ae = oe,
        ie;
      a[29] !== b || a[30] !== v || a[31] !== x
        ? ((ie = function () {
            return v || b !== !0
              ? x.trim().length > 0
              : o("WAWebABProps").getABPropConfigValue("ugc_enabled")
                ? !0
                : x.trim().length > 0;
          }),
          (a[29] = b),
          (a[30] = v),
          (a[31] = x),
          (a[32] = ie))
        : (ie = a[32]);
      var le = ie,
        se;
      a[33] !== b || a[34] !== v
        ? ((se =
            !v &&
            b === !0 &&
            o("WAWebABProps").getABPropConfigValue("ugc_enabled")
              ? s._(/*BTDS*/ "Group subject (optional)")
              : s._(/*BTDS*/ "Group subject")),
          (a[33] = b),
          (a[34] = v),
          (a[35] = se))
        : (se = a[35]);
      var ue = se,
        ce;
      a[36] !== W || a[37] !== re
        ? ((ce = d.jsx(f, {
            ephemeralDuration: W,
            handleEphemeralDurationClick: re,
          })),
          (a[36] = W),
          (a[37] = re),
          (a[38] = ce))
        : (ce = a[38]);
      var de = ce,
        me;
      a[39] !== V || a[40] !== ae
        ? ((me =
            (!r("gkx")("26258") || r("gkx")("26256")) &&
            d.jsx(g, {
              addressingModeOverride: V,
              handleAddressingModeClick: ae,
            })),
          (a[39] = V),
          (a[40] = ae),
          (a[41] = me))
        : (me = a[41]);
      var pe = me,
        _e;
      a[42] !== R || a[43] !== I || a[44] !== S
        ? ((_e =
            S === !0 && R
              ? d.jsx(y, { participants: I, onAddParticipants: R })
              : null),
          (a[42] = R),
          (a[43] = I),
          (a[44] = S),
          (a[45] = _e))
        : (_e = a[45]);
      var fe = _e,
        ge;
      a[46] !== L
        ? ((ge = d.jsx(h, { onGroupPermissions: L })),
          (a[46] = L),
          (a[47] = ge))
        : (ge = a[47]);
      var he = ge,
        ye;
      a[48] !== K || a[49] !== le || a[50] !== T
        ? ((ye =
            le() === !0
              ? d.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "btn",
                  children: d.jsx("div", {
                    className:
                      "xhtitgo x78zum5 x1l1ennw x17r0vjz x178dpqu x2b8uid",
                    children: d.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: K,
                      "data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER,
                      children: d.jsx(o("WAWebRound.react").Round, {
                        testid: void 0,
                        label: s._(/*BTDS*/ "Create group"),
                        children: T
                          ? d.jsx(o("WAWebSpinner.react").Spinner, {
                              color: "white",
                              size: 30,
                            })
                          : d.jsx(
                              o("WAWebCheckmarkMediumIcon.react")
                                .CheckmarkMediumIcon,
                              {
                                iconXstyle: o("WDSColorStyles.stylex")
                                  .WDSColorStyles.contentOnAccent,
                              },
                            ),
                      }),
                    }),
                  }),
                })
              : null),
          (a[48] = K),
          (a[49] = le),
          (a[50] = T),
          (a[51] = ye))
        : (ye = a[51]);
      var Ce = ye,
        be;
      a[52] !== i.viewType
        ? ((be = o("WAWebDrawerUtils").getDrawerHeaderType(i.viewType)),
          (a[52] = i.viewType),
          (a[53] = be))
        : (be = a[53]);
      var ve = be,
        Se = i.viewType,
        Re;
      a[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = s._(/*BTDS*/ "New group")), (a[54] = Re))
        : (Re = a[54]);
      var Le;
      a[55] !== ve || a[56] !== i.onBack || a[57] !== i.onCancel
        ? ((Le = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: Re,
            type: ve,
            onBack: i.onBack,
            onCancel: i.onCancel,
          })),
          (a[55] = ve),
          (a[56] = i.onBack),
          (a[57] = i.onCancel),
          (a[58] = Le))
        : (Le = a[58]);
      var Ee;
      a[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = { className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j" }),
          (a[59] = Ee))
        : (Ee = a[59]);
      var ke;
      a[60] !== A || a[61] !== z
        ? ((ke = d.jsx(
            "div",
            babelHelpers.extends({}, Ee, {
              children: d.jsx(
                o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
                {
                  type: o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP,
                  attachToChat: !1,
                  startImage: A,
                  onImageSet: z,
                  dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                },
              ),
            }),
          )),
          (a[60] = A),
          (a[61] = z),
          (a[62] = ke))
        : (ke = a[62]);
      var Ie;
      a[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = { className: "x178dpqu x1ulvn4e xc8tqf8 x1laec3j" }),
          (a[63] = Ie))
        : (Ie = a[63]);
      var Te;
      a[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = o("WAWebGroupGatingUtils").getGroupMaxSubject()), (a[64] = Te))
        : (Te = a[64]);
      var De;
      a[65] !== X
        ? ((De = function (t) {
            X(t.text);
          }),
          (a[65] = X),
          (a[66] = De))
        : (De = a[66]);
      var xe = le() ? K : r("WAWebNoop"),
        $e;
      a[67] !== ue || a[68] !== De || a[69] !== xe || a[70] !== x
        ? (($e = d.jsxs(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, Ie, {
              children: [
                d.jsx(o("WAWebRichTextField.react").RichTextField, {
                  value: x,
                  maxLength: Te,
                  showRemaining: !0,
                  onChange: De,
                  title: ue,
                  placeholder: ue,
                  onEnter: xe,
                  emojiBtnPosition: "side",
                  focusOnMount: !0,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                }),
                null,
              ],
            }),
          )),
          (a[67] = ue),
          (a[68] = De),
          (a[69] = xe),
          (a[70] = x),
          (a[71] = $e))
        : ($e = a[71]);
      var Pe;
      a[72] !== ke || a[73] !== $e
        ? ((Pe = d.jsxs(r("WAWebDrawerSection.react"), { children: [ke, $e] })),
          (a[72] = ke),
          (a[73] = $e),
          (a[74] = Pe))
        : (Pe = a[74]);
      var Ne;
      a[75] !== fe ||
      a[76] !== pe ||
      a[77] !== Ce ||
      a[78] !== de ||
      a[79] !== he ||
      a[80] !== Pe
        ? ((Ne = d.jsxs(r("WAWebDrawerBody.react"), {
            children: [Pe, pe, de, he, fe, Ce],
          })),
          (a[75] = fe),
          (a[76] = pe),
          (a[77] = Ce),
          (a[78] = de),
          (a[79] = he),
          (a[80] = Pe),
          (a[81] = Ne))
        : (Ne = a[81]);
      var Me;
      return (
        a[82] !== i.viewType || a[83] !== l || a[84] !== Le || a[85] !== Ne
          ? ((Me = d.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              testid: void 0,
              viewType: Se,
              tsNavigationData: _,
              children: [Le, Ne],
            })),
            (a[82] = i.viewType),
            (a[83] = l),
            (a[84] = Le),
            (a[85] = Ne),
            (a[86] = Me))
          : (Me = a[86]),
        Me
      );
    }
    l.default = C;
  },
  226,
);
