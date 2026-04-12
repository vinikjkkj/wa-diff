__d(
  "WAWebMembershipApprovalRequestsBanner.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGroupGatingUtils",
    "WAWebGroupMembershipApprovalRequestsFlow.react",
    "WAWebKeyboardTabUtils",
    "WAWebNux",
    "WAWebPendingParticipantsIcon.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUimUie.react",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebNux",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        banner: { backgroundColor: "x1280gxy", $$css: !0 },
        icon: { color: "x1anpt5t", $$css: !0 },
        paddingEnd20: { paddingInlineEnd: "xcldk2z", $$css: !0 },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i,
        l = a.chat,
        u = a.onClose,
        m = r("useWAWebUIM")(),
        _ = function () {
          (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
              ? {
                  descriptorType: "group_membership_approval_requests",
                  chat: l,
                }
              : c.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
                  chat: l,
                  onBack: o("WAWebDrawerManager").closeDrawerRight,
                }),
            {
              transition: "slide-left",
              uim: m,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          ),
            o(
              "WAWebGroupGatingUtils",
            ).isPersistentPendingJoinRequestsBannerEnabled() || u());
        },
        f = p(l);
      return c.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "MembershipApprovalRequestsBanner",
        escapable: !0,
        children: c.jsx(r("WAWebConversationBanner.react"), {
          ref: n,
          xstyle: d.banner,
          onClick: _,
          onClose: u,
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              c.jsx(r("WAWebFlexItem.react"), {
                xstyle: d.paddingEnd20,
                children: c.jsx(
                  o("WAWebPendingParticipantsIcon.react")
                    .PendingParticipantsIcon,
                  { xstyle: d.icon, width: 20, height: 20 },
                ),
              }),
              c.jsx(r("WAWebFlexItem.react"), {
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  as: "span",
                  children:
                    ((i = s._plural(f, "pendingRequests")),
                    s._(
                      /*BTDS*/ '_j{"*":"{=m0} {pendingRequests} requests to join","_1":"{=m0} 1 request to join"}',
                      [
                        i,
                        s._implicitParam(
                          "=m0",
                          c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                            color: "accent",
                            weight: "semibold",
                            children: s._(/*BTDS*/ '_j{"*":"Review"}', [i]),
                          }),
                        ),
                      ],
                    )),
                }),
              }),
            ],
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("useWAWebModelValues").useModelValues(e, ["groupMetadata"]),
        n = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, [
          "membershipApprovalRequests",
        ]),
        a = n == null ? void 0 : n.membershipApprovalRequests,
        i = r("useWAWebEventTargetValue")(
          a,
          ["add", "remove", "reset"],
          function () {
            var e;
            return (e = a == null ? void 0 : a.length) != null ? e : 0;
          },
        );
      return i;
    }
    function _(e) {
      var t = o("useWAWebModelValues").useModelValues(e, [
          "id",
          "groupMetadata",
        ]),
        n = t.id,
        a = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, [
          "participants",
        ]),
        i = !!(a != null && a.participants.iAmAdmin()),
        l = p(t),
        s = o("WAWebNux").getMembershipApprovalRequestsBannerNuxKey(
          n.toString(),
        ),
        u = r("useWAWebNux")(s),
        c = u[0],
        d = u[1],
        m =
          i &&
          l > 0 &&
          c &&
          o("WAWebABProps").getABPropConfigValue(
            "group_join_request_m2_banner_on_conversation",
          );
      return [m, d];
    }
    ((l.MembershipApprovalRequestsBanner = m),
      (l.useMembershipApprovalRequestsBanner = _));
  },
  226,
);
