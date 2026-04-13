__d(
  "WAWebVoipNewGroupCallContactPicker.react",
  [
    "fbt",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebDrawerManager",
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebMultiSelectContactList.react",
    "WAWebNoop",
    "WAWebSelectModal.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipStartCall",
    "WAWebVoipUiPopoutWindowContext",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWid",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSIconIcCall.react",
    "WDSIconIcVideocam.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebAddParticipantsSelectedContacts",
    "useWAWebVoipCanStartCall",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        addButton: {
          flexGrow: "x1iyjqo2",
          height: "x1vqgdyp",
          maxWidth: "x1ncir08",
          $$css: !0,
        },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(59),
        n = e.chat,
        a = e.isAddingToExistingCall,
        i = e.isGroupMemberSelection,
        l = e.isVideoCall,
        c = e.onCallStart,
        d = e.onClose,
        p = e.showCallTypeButtons,
        h = a === void 0 ? !1 : a,
        E = i === void 0 ? !1 : i,
        k = l === void 0 ? !1 : l,
        I = p === void 0 ? !1 : p,
        T = m(r("WAWebVoipUiPopoutWindowContext")),
        D =
          T.isContextInPopoutWindow && T.windowEl != null ? T.windowEl : void 0,
        x = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "group_call_max_participants",
        ),
        $ = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(n),
        P = h ? !0 : $,
        N = r("useWAWebAddParticipantsSelectedContacts")(),
        M = N.handleClearSelectedContacts,
        w = N.updateSelectedContactsState,
        A;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = []), (t[0] = A))
        : (A = t[0]);
      var F = _(A),
        O;
      t[1] !== n.id || t[2] !== E || t[3] !== I
        ? ((O = function () {
            return (
              !E &&
              I &&
              o("WAWebContactCollection").ContactCollection.get(n.id) != null
            );
          }),
          (t[1] = n.id),
          (t[2] = E),
          (t[3] = I),
          (t[4] = O))
        : (O = t[4]);
      var B = f(O),
        W = B[0],
        q = B[1],
        U;
      t[5] !== d
        ? ((U = function () {
            d != null ? d() : o("WAWebModalManager").ModalManager.close();
          }),
          (t[5] = d),
          (t[6] = U))
        : (U = t[6]);
      var V = U,
        H;
      t[7] !== h
        ? ((H = function (t) {
            if (!h) return !1;
            var e = r("WAWebCallCollection").activeCall;
            if (e == null) return !1;
            var n = r("WAWebWid").user(t),
              o = e.groupCallParticipants;
            if (o != null && o.length > 0)
              return o.some(function (e) {
                return r("WAWebWid").user(e) === n;
              });
            var a = e.peerJid;
            return a != null ? r("WAWebWid").user(a) === n : !1;
          }),
          (t[7] = h),
          (t[8] = H))
        : (H = t[8]);
      var G = H,
        z;
      t[9] !== G
        ? ((z = function (t) {
            return G(t.id);
          }),
          (t[9] = G),
          (t[10] = z))
        : (z = t[10]);
      var j = z,
        K;
      t[11] !== G
        ? ((K = function (t) {
            return G(t) ? s._(/*BTDS*/ "Already in the call") : null;
          }),
          (t[11] = G),
          (t[12] = K))
        : (K = t[12]);
      var Q = K,
        X;
      if (t[13] !== n.id || t[14] !== E) {
        e: {
          if (!E) {
            X = null;
            break e;
          }
          var Y = r("WAWebGroupMetadataCollection").get(n.id.toString());
          if (Y && Y.participants) {
            var J = Y.participants.toArray(),
              Z = r("compactMap")(J, L);
            X = Z.filter(R);
            break e;
          }
          var ee;
          (t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((ee = []), (t[16] = ee))
            : (ee = t[16]),
            (X = ee));
        }
        ((t[13] = n.id), (t[14] = E), (t[15] = X));
      } else X = t[15];
      var te = X,
        ne;
      t[17] !== n.id || t[18] !== E || t[19] !== I
        ? ((ne = function () {
            if (E) return [];
            if (I) {
              var e = o("WAWebContactCollection").ContactCollection.get(n.id);
              if (e != null) return [e];
            }
            return [];
          }),
          (t[17] = n.id),
          (t[18] = E),
          (t[19] = I),
          (t[20] = ne))
        : (ne = t[20]);
      var re = ne,
        oe;
      t[21] !== V || t[22] !== c
        ? ((oe = function (t) {
            var e = F.current;
            if (e.length === 0) {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Please select at least one contact to add",
                  ),
                }),
              );
              return;
            }
            var n = e.filter(S).map(v);
            (o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
              n,
              t,
              o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER,
              o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                .NOT_OPENED,
            ),
              V(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              c && c());
          }),
          (t[21] = V),
          (t[22] = c),
          (t[23] = oe))
        : (oe = t[23]);
      var ae = oe,
        ie;
      t[24] !== V || t[25] !== c
        ? ((ie = function () {
            var e = F.current;
            if (e.length === 0) {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Please select at least one contact to add",
                  ),
                }),
              );
              return;
            }
            (e.filter(b).forEach(C),
              V(),
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
              c && c());
          }),
          (t[24] = V),
          (t[25] = c),
          (t[26] = ie))
        : (ie = t[26]);
      var le = ie,
        se;
      t[27] !== x
        ? ((se = function (t, n, r) {
            ((F.current = r),
              q(r.length > 0),
              r.length > x &&
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ '_j{"*":"Can\'t select more than {max-participants} people for a call"}',
                      [s._param("max-participants", x, [0, x])],
                    ),
                  }),
                ));
          }),
          (t[27] = x),
          (t[28] = se))
        : (se = t[28]);
      var ue = se,
        ce;
      t[29] !== V
        ? ((ce = function () {
            V();
          }),
          (t[29] = V),
          (t[30] = ce))
        : (ce = t[30]);
      var de = ce,
        me;
      t[31] !== P ||
      t[32] !== le ||
      t[33] !== ae ||
      t[34] !== W ||
      t[35] !== h ||
      t[36] !== k ||
      t[37] !== I
        ? ((me = I
            ? u.jsx("div", {
                className:
                  "x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5",
                children: u.jsx(r("WDSButtonGroup.react"), {
                  orientation: "horizontal",
                  width: "hug",
                  secondaryButtonProps: {
                    label: s._(/*BTDS*/ "Audio"),
                    variant: "filled",
                    Icon: r("WDSIconIcCall.react"),
                    onPress: function () {
                      return ae(!1);
                    },
                    disabled: !P || !W,
                  },
                  primaryButtonProps: {
                    label: s._(/*BTDS*/ "Video"),
                    variant: "filled",
                    Icon: r("WDSIconIcVideocam.react"),
                    onPress: function () {
                      return ae(!0);
                    },
                    disabled: !P || !W,
                  },
                }),
              })
            : u.jsx("div", {
                className:
                  "x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5",
                children: u.jsx(r("WDSButton.react"), {
                  type: "default",
                  variant: "filled",
                  size: "medium",
                  widthMode: "flexible",
                  onPress: h
                    ? le
                    : function () {
                        return ae(k);
                      },
                  label: s._(/*BTDS*/ "Add"),
                  xstyle: g.addButton,
                  disabled: !P || !W,
                }),
              })),
          (t[31] = P),
          (t[32] = le),
          (t[33] = ae),
          (t[34] = W),
          (t[35] = h),
          (t[36] = k),
          (t[37] = I),
          (t[38] = me))
        : (me = t[38]);
      var pe = me,
        _e;
      t[39] !== h || t[40] !== I
        ? ((_e = function () {
            return I || !h
              ? s._(/*BTDS*/ "New group call")
              : s._(/*BTDS*/ "Add people");
          }),
          (t[39] = h),
          (t[40] = I),
          (t[41] = _e))
        : (_e = t[41]);
      var fe = _e,
        ge = E ? y : void 0,
        he;
      t[42] !== fe ? ((he = fe()), (t[42] = fe), (t[43] = he)) : (he = t[43]);
      var ye = te != null ? te : void 0,
        Ce;
      t[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = { surface: "unknown", viewName: "voip-group-call-picker" }),
          (t[44] = Ce))
        : (Ce = t[44]);
      var be;
      return (
        t[45] !== Q ||
        t[46] !== pe ||
        t[47] !== ge ||
        t[48] !== re ||
        t[49] !== de ||
        t[50] !== M ||
        t[51] !== ue ||
        t[52] !== j ||
        t[53] !== x ||
        t[54] !== D ||
        t[55] !== he ||
        t[56] !== ye ||
        t[57] !== w
          ? ((be = u.jsx(o("WAWebSelectModal.react").SelectModal, {
              title: he,
              listType: o("WAWebSelectModal.react").ListType
                .ParticipantManageModal,
              maxItems: x,
              onCancel: de,
              onConfirm: r("WAWebNoop"),
              onSelectionChanged: ue,
              getInitialItems: re,
              handleClearSelectedContacts: M,
              updateSelectedContactsState: w,
              previewComponent: pe,
              hideFooter: !0,
              disableContactPillAutoScroll: !0,
              isDisabled: j,
              isSelected: j,
              customSecondaryText: Q,
              contacts: ye,
              customGetData: ge,
              targetWindow: D,
              tsNavigationData: Ce,
            })),
            (t[45] = Q),
            (t[46] = pe),
            (t[47] = ge),
            (t[48] = re),
            (t[49] = de),
            (t[50] = M),
            (t[51] = ue),
            (t[52] = j),
            (t[53] = x),
            (t[54] = D),
            (t[55] = he),
            (t[56] = ye),
            (t[57] = w),
            (t[58] = be))
          : (be = t[58]),
        be
      );
    }
    function y(e) {
      var t = [];
      return (
        e.length > 0 &&
          (t.push({
            itemKey: o("WAWebMultiSelectContactList.react").ContactListSection
              .MEMBERS,
            type: o("WAWebMultiSelectContactList.react").ContactListSection
              .MEMBERS,
          }),
          e.forEach(function (e) {
            t.push({
              itemKey: e.id.toString(),
              type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
              data: e,
              isUnknownContact: !1,
            });
          })),
        t
      );
    }
    function C(e) {
      o("WAWebVoipStartCall").inviteToCall(e.id);
    }
    function b(e) {
      return e instanceof r("WAWebContactModel");
    }
    function v(e) {
      return e.id;
    }
    function S(e) {
      return e instanceof r("WAWebContactModel");
    }
    function R(e) {
      return !o("WAWebContactGetters").getIsMe(e);
    }
    function L(e) {
      return o("WAWebContactCollection").ContactCollection.get(e.id);
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = u.jsx(h, babelHelpers.extends({}, e))),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    l.default = E;
  },
  226,
);
