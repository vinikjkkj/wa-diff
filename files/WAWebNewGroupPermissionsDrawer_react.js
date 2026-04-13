__d(
  "WAWebNewGroupPermissionsDrawer.react",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebAddUserIcon.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatsOutlineIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDrawerUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupConstants",
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryGating",
    "WAWebPendingParticipantsIcon.react",
    "WAWebSetPropertyGroupAction",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WDSIconIcEdit.react",
    "WDSIconIcLink.react",
    "WDSSwitch.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = { secondary: { color: "xhslqc4", $$css: !0 } };
    function p(e) {
      var t = o("react-compiler-runtime").c(16),
        a = e.icon,
        i = e.secondaryTitle,
        l = e.settingType,
        s = e.setValue,
        u = e.title,
        c = e.value,
        m = c === !0 ? "off" : "on",
        p;
      t[0] !== m || t[1] !== s || t[2] !== l
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                s(!e);
                var t = o("WAWebActionToast.react").genId(),
                  n = o("WAWebSetPropertyGroupAction").getActionString(l, m)[1];
                o("WAWebToastManager").ToastManager.open(
                  d.jsx(o("WAWebToast.react").Toast, { id: t, msg: n }),
                );
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = m),
          (t[1] = s),
          (t[2] = l),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] !== _ || t[5] !== c
        ? ((f = function () {
            return void _(c);
          }),
          (t[4] = _),
          (t[5] = c),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== f || t[8] !== u || t[9] !== c
        ? ((g = d.jsx(r("WDSSwitch.react"), {
            "aria-label": u,
            value: c,
            onChange: f,
          })),
          (t[7] = f),
          (t[8] = u),
          (t[9] = c),
          (t[10] = g))
        : (g = t[10]);
      var h = g,
        y;
      return (
        t[11] !== a || t[12] !== i || t[13] !== u || t[14] !== h
          ? ((y = d.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
              icon: a,
              side: h,
              title: u,
              secondaryTitle: i,
              spaced: !0,
            })),
            (t[11] = a),
            (t[12] = i),
            (t[13] = u),
            (t[14] = h),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(68),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        c = l.announce,
        _ = l.memberAddMode,
        f = l.memberLinkMode,
        g = l.memberShareGroupHistoryMode,
        h = l.membershipApprovalMode,
        y = l.onBack,
        C = l.onCancel,
        b = l.participantCount,
        v = l.restrict,
        S = l.setAnnounce,
        R = l.setMemberAddMode,
        L = l.setMemberLinkMode,
        E = l.setMemberShareGroupHistoryMode,
        k = l.setMembershipApprovalMode,
        I = l.setRestrict,
        T;
      n[3] !== a.viewType
        ? ((T = o("WAWebDrawerUtils").getDrawerHeaderType(a.viewType)),
          (n[3] = a.viewType),
          (n[4] = T))
        : (T = n[4]);
      var D = T,
        x;
      n[5] !== _ || n[6] !== b
        ? ((x =
            _ === !0 &&
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
            !(
              o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() &&
              b != null &&
              b >
                o("WAWebGroupGatingUtils")
                  .ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD
            )),
          (n[5] = _),
          (n[6] = b),
          (n[7] = x))
        : (x = n[7]);
      var $ = x,
        P;
      n[8] !== _
        ? ((P =
            _ === !0 &&
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistorySettingsToggleUIEnabled()),
          (n[8] = _),
          (n[9] = P))
        : (P = n[9]);
      var N = P,
        M;
      n[10] !== f || n[11] !== R || n[12] !== L
        ? ((M = function (t) {
            (R(t), t === !1 && f === !0 && L(!1));
          }),
          (n[10] = f),
          (n[11] = R),
          (n[12] = L),
          (n[13] = M))
        : (M = n[13]);
      var w = M,
        A = a.viewType,
        F;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { surface: "unknown", viewName: "new-group-permissions" }),
          (n[14] = F))
        : (F = n[14]);
      var O;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Group permissions")), (n[15] = O))
        : (O = n[15]);
      var B;
      n[16] !== D || n[17] !== y || n[18] !== C
        ? ((B = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: O,
            type: D,
            onBack: y,
            onCancel: C,
          })),
          (n[16] = D),
          (n[17] = y),
          (n[18] = C),
          (n[19] = B))
        : (B = n[19]);
      var W;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.horiz30,
            o("WAWebUISpacing").uiMargin.vert10,
          )),
          (n[20] = W))
        : (W = n[20]);
      var q;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = d.jsx(
            "div",
            babelHelpers.extends({}, W, {
              children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "Members can:"),
              }),
            }),
          )),
          (n[21] = q))
        : (q = n[21]);
      var U;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = d.jsx(r("WDSIconIcEdit.react"), {
            viewBox: { x: 0, y: 0, width: 24, height: 24 },
            width: 18,
            height: 18,
            xstyle: m.secondary,
          })),
          (n[22] = U))
        : (U = n[22]);
      var V;
      n[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "Edit group settings")), (n[23] = V))
        : (V = n[23]);
      var H;
      n[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "This includes the name, icon, description, disappearing message timer, and the ability to pin, keep or unkeep messages.",
            ),
          })),
          (n[24] = H))
        : (H = n[24]);
      var G;
      n[25] !== v || n[26] !== I
        ? ((G = d.jsx(p, {
            value: v,
            setValue: I,
            icon: U,
            settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
            title: V,
            secondaryTitle: H,
          })),
          (n[25] = v),
          (n[26] = I),
          (n[27] = G))
        : (G = n[27]);
      var z;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = d.jsx(o("WAWebChatsOutlineIcon.react").ChatsOutlineIcon, {
            width: 20,
            height: 20,
            xstyle: m.secondary,
          })),
          (n[28] = z))
        : (z = n[28]);
      var j;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Send new messages")), (n[29] = j))
        : (j = n[29]);
      var K;
      n[30] !== c || n[31] !== S
        ? ((K = d.jsx(p, {
            value: c,
            setValue: S,
            icon: z,
            settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .ANNOUNCEMENT,
            title: j,
          })),
          (n[30] = c),
          (n[31] = S),
          (n[32] = K))
        : (K = n[32]);
      var Q;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = d.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
            width: 22,
            height: 22,
            xstyle: m.secondary,
          })),
          (n[33] = Q))
        : (Q = n[33]);
      var X;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "Add other members")), (n[34] = X))
        : (X = n[34]);
      var Y;
      n[35] !== w || n[36] !== _
        ? ((Y = d.jsx(p, {
            value: _,
            setValue: w,
            icon: Q,
            settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
              .MEMBER_ADD_MODE,
            title: X,
          })),
          (n[35] = w),
          (n[36] = _),
          (n[37] = Y))
        : (Y = n[37]);
      var J;
      n[38] !== g || n[39] !== E || n[40] !== N
        ? ((J =
            N &&
            d.jsx(p, {
              value: g,
              setValue: E,
              icon: d.jsx(r("WDSIconIcLink.react"), {
                testid: void 0,
                xstyle: m.secondary,
              }),
              settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBER_SHARE_GROUP_HISTORY_MODE,
              title: s._(/*BTDS*/ "Send message history"),
              secondaryTitle: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(
                  /*BTDS*/ "Past messages can be sent to new members.",
                ),
              }),
            })),
          (n[38] = g),
          (n[39] = E),
          (n[40] = N),
          (n[41] = J))
        : (J = n[41]);
      var Z;
      n[42] !== f || n[43] !== L || n[44] !== $
        ? ((Z =
            $ &&
            d.jsx(p, {
              value: f,
              setValue: L,
              icon: d.jsx(r("WDSIconIcLink.react"), {
                testid: void 0,
                xstyle: m.secondary,
              }),
              settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                .MEMBER_LINK_MODE,
              title: s._(/*BTDS*/ "Invite via link"),
            })),
          (n[42] = f),
          (n[43] = L),
          (n[44] = $),
          (n[45] = Z))
        : (Z = n[45]);
      var ee;
      n[46] !== G || n[47] !== K || n[48] !== Y || n[49] !== J || n[50] !== Z
        ? ((ee = d.jsxs(r("WAWebDrawerSection.react"), {
            animation: !1,
            children: [G, K, Y, J, Z],
          })),
          (n[46] = G),
          (n[47] = K),
          (n[48] = Y),
          (n[49] = J),
          (n[50] = Z),
          (n[51] = ee))
        : (ee = n[51]);
      var te;
      n[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.horiz30,
            o("WAWebUISpacing").uiMargin.vert10,
          )),
          (n[52] = te))
        : (te = n[52]);
      var ne;
      n[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = d.jsx(
            "div",
            babelHelpers.extends({}, te, {
              children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: s._(/*BTDS*/ "Admins can:"),
              }),
            }),
          )),
          (n[53] = ne))
        : (ne = n[53]);
      var re;
      n[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = d.jsx(
            o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon,
            { width: 19, height: 19, xstyle: m.secondary },
          )),
          (n[54] = re))
        : (re = n[54]);
      var oe;
      n[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = s._(/*BTDS*/ "Approve new members")), (n[55] = oe))
        : (oe = n[55]);
      var ae;
      n[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = d.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "When turned on, admins must approve anyone who wants to join this group. {=m2}",
              [
                s._implicitParam(
                  "=m2",
                  d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ],
            ),
          })),
          (n[56] = ae))
        : (ae = n[56]);
      var ie;
      n[57] !== h || n[58] !== k
        ? ((ie = d.jsxs(d.Fragment, {
            children: [
              ne,
              d.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: d.jsx(p, {
                  value: h,
                  setValue: k,
                  icon: re,
                  settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE
                    .MEMBERSHIP_APPROVAL_MODE,
                  title: oe,
                  secondaryTitle: ae,
                }),
              }),
            ],
          })),
          (n[57] = h),
          (n[58] = k),
          (n[59] = ie))
        : (ie = n[59]);
      var le;
      n[60] !== ee || n[61] !== ie
        ? ((le = d.jsxs(r("WAWebDrawerBody.react"), { children: [q, ee, ie] })),
          (n[60] = ee),
          (n[61] = ie),
          (n[62] = le))
        : (le = n[62]);
      var se;
      return (
        n[63] !== a.viewType || n[64] !== i || n[65] !== le || n[66] !== B
          ? ((se = d.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "striped",
              testid: void 0,
              viewType: A,
              tsNavigationData: F,
              children: [B, le],
            })),
            (n[63] = a.viewType),
            (n[64] = i),
            (n[65] = le),
            (n[66] = B),
            (n[67] = se))
          : (se = n[67]),
        se
      );
    }
    l.default = _;
  },
  226,
);
