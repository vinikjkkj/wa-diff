__d(
  "WAWebNewGroupFlow.react",
  [
    "$InternalEnum",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebCreateGroupAction",
    "WAWebDrawerManager",
    "WAWebDrawerViewType",
    "WAWebGroupGatingUtils",
    "WAWebModalManager",
    "WAWebNewGroupDrawer.react",
    "WAWebNewGroupParticipantsDrawer.react",
    "WAWebNewGroupPermissionsDrawer.react",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteGating",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebUim",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebGroupDiscardGuard",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      return o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled()
        ? e <=
            o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD
        : !1;
    }
    var f = n("$InternalEnum").Mirrored([
      "ADD_PARTICIPANTS_DRAWER",
      "SET_GROUP_INFO_DRAWER",
      "GROUP_PERMISSIONS_DRAWER",
    ]);
    function g(e) {
      var t,
        n = o("react-compiler-runtime").c(107),
        a = e.initialParticipants,
        i = e.initialSelectedSubgroup,
        l = e.initialStep,
        u = e.isSubFlow,
        c = e.onCreateGroup,
        g = e.onEnd,
        b = e.parentGroupWid,
        v = e.participantsDrawerTitle,
        S = e.ref,
        R = e.shortenedCreationFlow,
        L = e.viewType,
        E = l === void 0 ? f.ADD_PARTICIPANTS_DRAWER : l,
        k = u === void 0 ? !0 : u,
        I;
      n[0] !== b
        ? ((I =
            b != null ? o("WAWebChatCollection").ChatCollection.get(b) : null),
          (n[0] = b),
          (n[1] = I))
        : (I = n[1]);
      var T = I,
        D = T != null ? T.formattedTitle : null,
        x;
      n[2] !== g
        ? ((x = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: g,
          }),
          (n[2] = g),
          (n[3] = x))
        : (x = n[3]);
      var $ = o("useWAWebFlow").useFlow(E, x),
        P = $[0],
        N = $[1],
        M;
      n[4] !== a
        ? ((M = a != null ? a : []), (n[4] = a), (n[5] = M))
        : (M = n[5]);
      var w = p(M),
        A = w[0],
        F = w[1],
        O = p(!0),
        B = O[0],
        W = O[1],
        q;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = []), (n[6] = q))
        : (q = n[6]);
      var U = p(q),
        V = U[0],
        H = U[1],
        G;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = []), (n[7] = G))
        : (G = n[7]);
      var z = m(G),
        j = p((t = a == null ? void 0 : a.length) != null ? t : 0),
        K = j[0],
        Q = j[1],
        X;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function (t) {
            Q(t.length);
          }),
          (n[8] = X))
        : (X = n[8]);
      var Y = X,
        J = o("useWAWebGroupDiscardGuard").useGroupCreationDiscardGuard(K),
        Z,
        ee;
      (n[9] !== N.step || n[10] !== J
        ? ((ee = function () {
            if (N.step === f.ADD_PARTICIPANTS_DRAWER) {
              var e = o(
                "WAWebDrawerManager",
              ).DrawerManager.registerCloseGuardLeft(function (e) {
                return J();
              });
              return e;
            }
          }),
          (Z = [N.step, J]),
          (n[9] = N.step),
          (n[10] = J),
          (n[11] = Z),
          (n[12] = ee))
        : ((Z = n[11]), (ee = n[12])),
        d(ee, Z));
      var te;
      n[13] !== N || n[14] !== J
        ? ((te = function (t) {
            t === o("WAWebUim").DismissReason.UIM_INTERACTION &&
            N.step === f.ADD_PARTICIPANTS_DRAWER
              ? J().then(function (e) {
                  e && N.pop();
                })
              : N.pop();
          }),
          (n[13] = N),
          (n[14] = J),
          (n[15] = te))
        : (te = n[15]);
      var ne = te,
        re = p(!1),
        oe = re[0],
        ae = re[1],
        ie = p(),
        le = ie[0],
        se = ie[1],
        ue = p(),
        ce = ue[0],
        de = ue[1],
        me = p(),
        pe = me[0],
        _e = me[1],
        fe = p(),
        ge = fe[0],
        he = fe[1],
        ye = p("lid"),
        Ce = ye[0],
        be = ye[1],
        ve = p(!0),
        Se = ve[0],
        Re = ve[1],
        Le = p(!0),
        Ee = Le[0],
        ke = Le[1],
        Ie = p(!0),
        Te = Ie[0],
        De = Ie[1],
        xe = p(),
        $e = xe[0],
        Pe = xe[1],
        Ne = p(!0),
        Me = Ne[0],
        we = Ne[1],
        Ae = p(!1),
        Fe = Ae[0],
        Oe = Ae[1],
        Be;
      n[16] !== N
        ? ((Be = function () {
            N.end();
          }),
          (n[16] = N),
          (n[17] = Be))
        : (Be = n[17]);
      var We = Be;
      o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", We);
      var qe;
      (n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = []), (n[18] = qe))
        : (qe = n[18]),
        d(C, qe));
      var Ue;
      n[19] !== Ee ||
      n[20] !== Te ||
      n[21] !== $e ||
      n[22] !== Me ||
      n[23] !== Fe ||
      n[24] !== c ||
      n[25] !== b ||
      n[26] !== Se
        ? ((Ue = function (t, n, a, i, l, u) {
            var e = l === void 0 ? [] : l,
              d = u === void 0 ? "pn" : u;
            ae(!0);
            var m = z.current,
              p = function () {
                if (
                  !(
                    !o(
                      "WAWebOutContactInviteGating",
                    ).isOutContactInviteEnabled() || m.length === 0
                  )
                ) {
                  var e = m.map(y),
                    t = m.map(h);
                  o("WAWebModalManager").ModalManager.open(
                    s.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
                      names: e,
                      onConfirm: function () {
                        (o("WAWebOutContactInviteAction").sendMultiGroupInvite(
                          t,
                        ),
                          o("WAWebModalManager").ModalManager.close());
                      },
                      onCancel: o("WAWebModalManager").closeModalManager,
                    }),
                  );
                }
              },
              _ = o("WAWebCreateGroupAction").createGroup(
                {
                  title: t,
                  thumb: n,
                  full: a,
                  ephemeralDuration: i,
                  parentGroupId: b,
                  restrict: Se,
                  announce: Ee,
                  membershipApprovalMode: Fe,
                  memberAddMode: Te,
                  memberLinkMode: $e,
                  memberShareGroupHistoryMode: Me,
                  addressingModeOverride: d,
                },
                e,
                p,
              );
            c == null || c(_);
          }),
          (n[19] = Ee),
          (n[20] = Te),
          (n[21] = $e),
          (n[22] = Me),
          (n[23] = Fe),
          (n[24] = c),
          (n[25] = b),
          (n[26] = Se),
          (n[27] = Ue))
        : (Ue = n[27]);
      var Ve = Ue,
        He;
      n[28] !== N || n[29] !== $e || n[30] !== R
        ? ((He = function (t, n, r) {
            if (
              (F(t),
              W(n),
              H(r != null ? r : []),
              (z.current = r != null ? r : []),
              o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() &&
                $e != null)
            ) {
              var e =
                t.length <=
                o("WAWebGroupGatingUtils")
                  .ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD;
              Pe(e);
            }
            R === !0 ? N.pop() : N.push(f.SET_GROUP_INFO_DRAWER);
          }),
          (n[28] = N),
          (n[29] = $e),
          (n[30] = R),
          (n[31] = He))
        : (He = n[31]);
      var Ge = He,
        ze;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((ze = function (t) {
            (t.text != null && se(t.text),
              t.thumb != null && de(t.thumb),
              t.full != null && _e(t.full),
              t.ephemeralDuration != null && he(t.ephemeralDuration),
              t.addressingModeOverride != null && be(t.addressingModeOverride));
          }),
          (n[32] = ze))
        : (ze = n[32]);
      var je = ze;
      if (N.step == null) return null;
      var Ke, Qe;
      n[33] !== N
        ? ((Qe = function () {
            return N.pop();
          }),
          (n[33] = N),
          (n[34] = Qe))
        : (Qe = n[34]);
      var Xe;
      n[35] !== g || n[36] !== L
        ? ((Xe =
            L === r("WAWebDrawerViewType").MODAL
              ? function () {
                  return g == null ? void 0 : g();
                }
              : void 0),
          (n[35] = g),
          (n[36] = L),
          (n[37] = Xe))
        : (Xe = n[37]);
      var Ye;
      n[38] !== Qe || n[39] !== Xe
        ? ((Ye = { onBack: Qe, onCancel: Xe }),
          (n[38] = Qe),
          (n[39] = Xe),
          (n[40] = Ye))
        : (Ye = n[40]);
      var Je = Ye;
      e: switch (N.step) {
        case f.SET_GROUP_INFO_DRAWER: {
          var Ze,
            et =
              (T == null || (Ze = T.groupMetadata) == null
                ? void 0
                : Ze.isParentGroupClosed) === !0,
            tt = et ? null : D,
            nt;
          n[41] !== N
            ? ((nt = function () {
                return N.push(f.ADD_PARTICIPANTS_DRAWER);
              }),
              (n[41] = N),
              (n[42] = nt))
            : (nt = n[42]);
          var rt;
          n[43] !== N || n[44] !== $e || n[45] !== A
            ? ((rt = function () {
                ($e == null && Pe(_(A.length)),
                  N.push(f.GROUP_PERMISSIONS_DRAWER));
              }),
              (n[43] = N),
              (n[44] = $e),
              (n[45] = A),
              (n[46] = rt))
            : (rt = n[46]);
          var ot;
          (n[47] !== B ||
          n[48] !== Je.onBack ||
          n[49] !== Je.onCancel ||
          n[50] !== Ce ||
          n[51] !== ge ||
          n[52] !== pe ||
          n[53] !== le ||
          n[54] !== ce ||
          n[55] !== Ve ||
          n[56] !== oe ||
          n[57] !== b ||
          n[58] !== A ||
          n[59] !== R ||
          n[60] !== tt ||
          n[61] !== nt ||
          n[62] !== rt ||
          n[63] !== L
            ? ((ot = s.jsx(r("WAWebNewGroupDrawer.react"), {
                participants: A,
                onBack: Je.onBack,
                onCancel: Je.onCancel,
                onSubmit: Ve,
                communityName: tt,
                allowUnnamedGroup: B,
                parentGroupId: b,
                shortenedCreationFlow: R,
                onAddParticipants: nt,
                onGroupPermissions: rt,
                handleLiftGroupInfo: je,
                subject: le,
                thumb: ce,
                full: pe,
                ephemeralDuration: ge,
                addressingModeOverride: Ce,
                loading: oe,
                viewType: L,
              })),
              (n[47] = B),
              (n[48] = Je.onBack),
              (n[49] = Je.onCancel),
              (n[50] = Ce),
              (n[51] = ge),
              (n[52] = pe),
              (n[53] = le),
              (n[54] = ce),
              (n[55] = Ve),
              (n[56] = oe),
              (n[57] = b),
              (n[58] = A),
              (n[59] = R),
              (n[60] = tt),
              (n[61] = nt),
              (n[62] = rt),
              (n[63] = L),
              (n[64] = ot))
            : (ot = n[64]),
            (Ke = ot));
          break e;
        }
        case f.ADD_PARTICIPANTS_DRAWER: {
          var at;
          n[65] !== N
            ? ((at = function () {
                return N.pop();
              }),
              (n[65] = N),
              (n[66] = at))
            : (at = n[66]);
          var it;
          if (
            n[67] !== N ||
            n[68] !== k ||
            n[69] !== g ||
            n[70] !== at ||
            n[71] !== L
          ) {
            if (((it = { onBack: at }), !k)) {
              delete it.onBack;
              var lt;
              (n[73] !== N || n[74] !== g || n[75] !== L
                ? ((lt = function () {
                    return L === r("WAWebDrawerViewType").MODAL
                      ? g == null
                        ? void 0
                        : g()
                      : N.pop();
                  }),
                  (n[73] = N),
                  (n[74] = g),
                  (n[75] = L),
                  (n[76] = lt))
                : (lt = n[76]),
                (it.onCancel = lt));
            }
            ((n[67] = N),
              (n[68] = k),
              (n[69] = g),
              (n[70] = at),
              (n[71] = L),
              (n[72] = it));
          } else it = n[72];
          var st;
          (n[77] !== it ||
          n[78] !== D ||
          n[79] !== Ge ||
          n[80] !== i ||
          n[81] !== b ||
          n[82] !== A ||
          n[83] !== v ||
          n[84] !== V ||
          n[85] !== L
            ? ((st = s.jsx(
                r("WAWebNewGroupParticipantsDrawer.react"),
                babelHelpers.extends({}, it, {
                  onContinue: Ge,
                  onParticipantsChange: Y,
                  participants: A,
                  initialSelectedOutContacts: V,
                  communityName: D,
                  parentGroupId: b,
                  initialSelectedSubgroup: i,
                  viewType: L,
                  participantsDrawerTitle: v,
                }),
              )),
              (n[77] = it),
              (n[78] = D),
              (n[79] = Ge),
              (n[80] = i),
              (n[81] = b),
              (n[82] = A),
              (n[83] = v),
              (n[84] = V),
              (n[85] = L),
              (n[86] = st))
            : (st = n[86]),
            (Ke = st));
          break e;
        }
        case f.GROUP_PERMISSIONS_DRAWER: {
          var ut;
          n[87] !== $e || n[88] !== A.length
            ? ((ut = $e != null ? $e : _(A.length)),
              (n[87] = $e),
              (n[88] = A.length),
              (n[89] = ut))
            : (ut = n[89]);
          var ct;
          (n[90] !== Ee ||
          n[91] !== Je.onBack ||
          n[92] !== Je.onCancel ||
          n[93] !== Te ||
          n[94] !== Me ||
          n[95] !== Fe ||
          n[96] !== A.length ||
          n[97] !== Se ||
          n[98] !== ut ||
          n[99] !== L
            ? ((ct = s.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
                onBack: Je.onBack,
                onCancel: Je.onCancel,
                participantCount: A.length,
                restrict: Se,
                setRestrict: Re,
                announce: Ee,
                setAnnounce: ke,
                membershipApprovalMode: Fe,
                setMembershipApprovalMode: Oe,
                memberAddMode: Te,
                setMemberAddMode: De,
                memberLinkMode: ut,
                setMemberLinkMode: Pe,
                memberShareGroupHistoryMode: Me,
                setMemberShareGroupHistoryMode: we,
                viewType: L,
              })),
              (n[90] = Ee),
              (n[91] = Je.onBack),
              (n[92] = Je.onCancel),
              (n[93] = Te),
              (n[94] = Me),
              (n[95] = Fe),
              (n[96] = A.length),
              (n[97] = Se),
              (n[98] = ut),
              (n[99] = L),
              (n[100] = ct))
            : (ct = n[100]),
            (Ke = ct));
        }
      }
      var dt;
      return (
        n[101] !== P ||
        n[102] !== Ke ||
        n[103] !== N ||
        n[104] !== ne ||
        n[105] !== S
          ? ((dt = s.jsx(P, {
              ref: S,
              flow: N,
              requestDismiss: ne,
              children: Ke,
            })),
            (n[101] = P),
            (n[102] = Ke),
            (n[103] = N),
            (n[104] = ne),
            (n[105] = S),
            (n[106] = dt))
          : (dt = n[106]),
        dt
      );
    }
    function h(e) {
      return e.phoneNumber;
    }
    function y(e) {
      return e.getName();
    }
    function C() {
      o("WAWebContactCollection").ContactCollection.ensureSorted();
    }
    var b = g;
    ((l.NewGroupFlowStep = f), (l.NewGroupFlow = b));
  },
  98,
);
