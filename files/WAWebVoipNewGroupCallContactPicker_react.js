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
      var t = e.chat,
        n = e.isAddingToExistingCall,
        a = n === void 0 ? !1 : n,
        i = e.isGroupMemberSelection,
        l = i === void 0 ? !1 : i,
        c = e.isVideoCall,
        h = c === void 0 ? !1 : c,
        y = e.onCallStart,
        C = e.onClose,
        b = e.showCallTypeButtons,
        v = b === void 0 ? !1 : b,
        S = m(r("WAWebVoipUiPopoutWindowContext")),
        R =
          S.isContextInPopoutWindow && S.windowEl != null ? S.windowEl : void 0,
        L = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "group_call_max_participants",
        ),
        E = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(t),
        k = a ? !0 : E,
        I = r("useWAWebAddParticipantsSelectedContacts")(),
        T = I.handleClearSelectedContacts,
        D = I.updateSelectedContactsState,
        x = _([]),
        $ = f(function () {
          return (
            !l &&
            v &&
            o("WAWebContactCollection").ContactCollection.get(t.id) != null
          );
        }),
        P = $[0],
        N = $[1],
        M = d(
          function () {
            C != null ? C() : o("WAWebModalManager").ModalManager.close();
          },
          [C],
        ),
        w = function (t) {
          if (!a) return !1;
          var e = r("WAWebCallCollection").activeCall;
          if (e == null) return !1;
          var n = r("WAWebWid").user(t),
            o = e.groupCallParticipants;
          if (o != null && o.length > 0)
            return o.some(function (e) {
              return r("WAWebWid").user(e) === n;
            });
          var i = e.peerJid;
          return i != null ? r("WAWebWid").user(i) === n : !1;
        },
        A = function (t) {
          return w(t.id);
        },
        F = function (t) {
          return w(t) ? s._(/*BTDS*/ "Already in the call") : null;
        },
        O = p(
          function () {
            if (!l) return null;
            var e = r("WAWebGroupMetadataCollection").get(t.id.toString());
            if (e && e.participants) {
              var n = e.participants.toArray(),
                a = r("compactMap")(n, function (e) {
                  return o("WAWebContactCollection").ContactCollection.get(
                    e.id,
                  );
                });
              return a.filter(function (e) {
                return !o("WAWebContactGetters").getIsMe(e);
              });
            }
            return [];
          },
          [t.id, l],
        ),
        B = function () {
          if (l) return [];
          if (v) {
            var e = o("WAWebContactCollection").ContactCollection.get(t.id);
            if (e != null) return [e];
          }
          return [];
        },
        W = function (t) {
          var e = x.current;
          if (e.length === 0) {
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Please select at least one contact to add"),
              }),
            );
            return;
          }
          var n = e
            .filter(function (e) {
              return e instanceof r("WAWebContactModel");
            })
            .map(function (e) {
              return e.id;
            });
          (o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(
            n,
            t,
            o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER,
            o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
              .NOT_OPENED,
          ),
            M(),
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            y && y());
        },
        q = function () {
          var e = x.current;
          if (e.length === 0) {
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Please select at least one contact to add"),
              }),
            );
            return;
          }
          (e
            .filter(function (e) {
              return e instanceof r("WAWebContactModel");
            })
            .forEach(function (e) {
              o("WAWebVoipStartCall").inviteToCall(e.id);
            }),
            M(),
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            y && y());
        },
        U = function (t, n, r) {
          ((x.current = r),
            N(r.length > 0),
            r.length > L &&
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"Can\'t select more than {max-participants} people for a call"}',
                    [s._param("max-participants", L, [0, L])],
                  ),
                }),
              ));
        },
        V = d(
          function () {
            M();
          },
          [M],
        ),
        H = v
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
                    return W(!1);
                  },
                  disabled: !k || !P,
                },
                primaryButtonProps: {
                  label: s._(/*BTDS*/ "Video"),
                  variant: "filled",
                  Icon: r("WDSIconIcVideocam.react"),
                  onPress: function () {
                    return W(!0);
                  },
                  disabled: !k || !P,
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
                onPress: a
                  ? q
                  : function () {
                      return W(h);
                    },
                label: s._(/*BTDS*/ "Add"),
                xstyle: g.addButton,
                disabled: !k || !P,
              }),
            }),
        G = function () {
          return v || !a
            ? s._(/*BTDS*/ "New group call")
            : s._(/*BTDS*/ "Add people");
        },
        z = l
          ? function (e) {
              var t = [];
              return (
                e.length > 0 &&
                  (t.push({
                    itemKey: o("WAWebMultiSelectContactList.react")
                      .ContactListSection.MEMBERS,
                    type: o("WAWebMultiSelectContactList.react")
                      .ContactListSection.MEMBERS,
                  }),
                  e.forEach(function (e) {
                    t.push({
                      itemKey: e.id.toString(),
                      type: o("WAWebMultiSelectContactList.react").Row
                        .ROW_CONTACTS,
                      data: e,
                      isUnknownContact: !1,
                    });
                  })),
                t
              );
            }
          : void 0;
      return u.jsx(o("WAWebSelectModal.react").SelectModal, {
        title: G(),
        listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
        maxItems: L,
        onCancel: V,
        onConfirm: r("WAWebNoop"),
        onSelectionChanged: U,
        getInitialItems: B,
        handleClearSelectedContacts: T,
        updateSelectedContactsState: D,
        previewComponent: H,
        hideFooter: !0,
        disableContactPillAutoScroll: !0,
        isDisabled: A,
        isSelected: A,
        customSecondaryText: F,
        contacts: O != null ? O : void 0,
        customGetData: z,
        targetWindow: R,
        tsNavigationData: {
          surface: "unknown",
          viewName: "voip-group-call-picker",
        },
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return u.jsx(h, babelHelpers.extends({}, e));
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
