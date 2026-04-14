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
        n = e.initialParticipants,
        a = e.initialSelectedSubgroup,
        i = e.initialStep,
        l = i === void 0 ? f.ADD_PARTICIPANTS_DRAWER : i,
        u = e.isSubFlow,
        g = u === void 0 ? !0 : u,
        h = e.onCreateGroup,
        y = e.onEnd,
        C = e.parentGroupWid,
        b = e.participantsDrawerTitle,
        v = e.ref,
        S = e.shortenedCreationFlow,
        R = e.viewType,
        L = C != null ? o("WAWebChatCollection").ChatCollection.get(C) : null,
        E = L != null ? L.formattedTitle : null,
        k = o("useWAWebFlow").useFlow(l, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: y,
        }),
        I = k[0],
        T = k[1],
        D = p(n != null ? n : []),
        x = D[0],
        $ = D[1],
        P = p(!0),
        N = P[0],
        M = P[1],
        w = p([]),
        A = w[0],
        F = w[1],
        O = m([]),
        B = p((t = n == null ? void 0 : n.length) != null ? t : 0),
        W = B[0],
        q = B[1],
        U = c(function (e) {
          q(e.length);
        }, []),
        V = o("useWAWebGroupDiscardGuard").useGroupCreationDiscardGuard(W);
      d(
        function () {
          if (T.step === f.ADD_PARTICIPANTS_DRAWER) {
            var e = o(
              "WAWebDrawerManager",
            ).DrawerManager.registerCloseGuardLeft(function (e) {
              return V();
            });
            return e;
          }
        },
        [T.step, V],
      );
      var H = c(
          function (e) {
            e === o("WAWebUim").DismissReason.UIM_INTERACTION &&
            T.step === f.ADD_PARTICIPANTS_DRAWER
              ? V().then(function (e) {
                  e && T.pop();
                })
              : T.pop();
          },
          [T, V],
        ),
        G = p(!1),
        z = G[0],
        j = G[1],
        K = p(),
        Q = K[0],
        X = K[1],
        Y = p(),
        J = Y[0],
        Z = Y[1],
        ee = p(),
        te = ee[0],
        ne = ee[1],
        re = p(),
        oe = re[0],
        ae = re[1],
        ie = p("lid"),
        le = ie[0],
        se = ie[1],
        ue = p(!0),
        ce = ue[0],
        de = ue[1],
        me = p(!0),
        pe = me[0],
        _e = me[1],
        fe = p(!0),
        ge = fe[0],
        he = fe[1],
        ye = p(),
        Ce = ye[0],
        be = ye[1],
        ve = p(!0),
        Se = ve[0],
        Re = ve[1],
        Le = p(!1),
        Ee = Le[0],
        ke = Le[1],
        Ie = function () {
          T.end();
        };
      (o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", Ie),
        d(function () {
          o("WAWebContactCollection").ContactCollection.ensureSorted();
        }, []));
      var Te = function (t, n, a, i, l, u) {
          (l === void 0 && (l = []), u === void 0 && (u = "pn"), j(!0));
          var e = O.current,
            c = function () {
              if (
                !(
                  !o(
                    "WAWebOutContactInviteGating",
                  ).isOutContactInviteEnabled() || e.length === 0
                )
              ) {
                var t = e.map(function (e) {
                    return e.getName();
                  }),
                  n = e.map(function (e) {
                    return e.phoneNumber;
                  });
                o("WAWebModalManager").ModalManager.open(
                  s.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
                    names: t,
                    onConfirm: function () {
                      (o("WAWebOutContactInviteAction").sendMultiGroupInvite(n),
                        o("WAWebModalManager").ModalManager.close());
                    },
                    onCancel: o("WAWebModalManager").closeModalManager,
                  }),
                );
              }
            },
            d = o("WAWebCreateGroupAction").createGroup(
              {
                title: t,
                thumb: n,
                full: a,
                ephemeralDuration: i,
                parentGroupId: C,
                restrict: ce,
                announce: pe,
                membershipApprovalMode: Ee,
                memberAddMode: ge,
                memberLinkMode: Ce,
                memberShareGroupHistoryMode: Se,
                addressingModeOverride: u,
              },
              l,
              c,
            );
          h == null || h(d);
        },
        De = function (t, n, r) {
          if (
            ($(t),
            M(n),
            F(r != null ? r : []),
            (O.current = r != null ? r : []),
            o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() &&
              Ce != null)
          ) {
            var e =
              t.length <=
              o("WAWebGroupGatingUtils")
                .ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD;
            be(e);
          }
          S === !0 ? T.pop() : T.push(f.SET_GROUP_INFO_DRAWER);
        },
        xe = function (t) {
          (t.text != null && X(t.text),
            t.thumb != null && Z(t.thumb),
            t.full != null && ne(t.full),
            t.ephemeralDuration != null && ae(t.ephemeralDuration),
            t.addressingModeOverride != null && se(t.addressingModeOverride));
        };
      if (T.step == null) return null;
      var $e,
        Pe = {
          onBack: function () {
            return T.pop();
          },
          onCancel:
            R === r("WAWebDrawerViewType").MODAL
              ? function () {
                  return y == null ? void 0 : y();
                }
              : void 0,
        };
      switch (T.step) {
        case f.SET_GROUP_INFO_DRAWER: {
          var Ne,
            Me =
              (L == null || (Ne = L.groupMetadata) == null
                ? void 0
                : Ne.isParentGroupClosed) === !0;
          $e = s.jsx(r("WAWebNewGroupDrawer.react"), {
            participants: x,
            onBack: Pe.onBack,
            onCancel: Pe.onCancel,
            onSubmit: Te,
            communityName: Me ? null : E,
            allowUnnamedGroup: N,
            parentGroupId: C,
            shortenedCreationFlow: S,
            onAddParticipants: function () {
              return T.push(f.ADD_PARTICIPANTS_DRAWER);
            },
            onGroupPermissions: function () {
              (Ce == null && be(_(x.length)),
                T.push(f.GROUP_PERMISSIONS_DRAWER));
            },
            handleLiftGroupInfo: xe,
            subject: Q,
            thumb: J,
            full: te,
            ephemeralDuration: oe,
            addressingModeOverride: le,
            loading: z,
            viewType: R,
          });
          break;
        }
        case f.ADD_PARTICIPANTS_DRAWER: {
          var we = {
            onBack: function () {
              return T.pop();
            },
          };
          (g ||
            (delete we.onBack,
            (we.onCancel = function () {
              return R === r("WAWebDrawerViewType").MODAL
                ? y == null
                  ? void 0
                  : y()
                : T.pop();
            })),
            ($e = s.jsx(
              r("WAWebNewGroupParticipantsDrawer.react"),
              babelHelpers.extends({}, we, {
                onContinue: De,
                onParticipantsChange: U,
                participants: x,
                initialSelectedOutContacts: A,
                communityName: E,
                parentGroupId: C,
                initialSelectedSubgroup: a,
                viewType: R,
                participantsDrawerTitle: b,
              }),
            )));
          break;
        }
        case f.GROUP_PERMISSIONS_DRAWER: {
          $e = s.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
            onBack: Pe.onBack,
            onCancel: Pe.onCancel,
            participantCount: x.length,
            restrict: ce,
            setRestrict: de,
            announce: pe,
            setAnnounce: _e,
            membershipApprovalMode: Ee,
            setMembershipApprovalMode: ke,
            memberAddMode: ge,
            setMemberAddMode: he,
            memberLinkMode: Ce != null ? Ce : _(x.length),
            setMemberLinkMode: be,
            memberShareGroupHistoryMode: Se,
            setMemberShareGroupHistoryMode: Re,
            viewType: R,
          });
          break;
        }
      }
      return s.jsx(I, { ref: v, flow: T, requestDismiss: H, children: $e });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = g;
    ((l.NewGroupFlowStep = f), (l.NewGroupFlow = h));
  },
  98,
);
