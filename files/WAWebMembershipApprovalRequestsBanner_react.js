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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(15),
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
        u = l.chat,
        m = l.onClose,
        _ = r("useWAWebUIM")(),
        f;
      n[3] !== u || n[4] !== m || n[5] !== _
        ? ((f = function () {
            (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "group_membership_approval_requests",
                    chat: u,
                  }
                : c.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
                    chat: u,
                    onBack: o("WAWebDrawerManager").closeDrawerRight,
                  }),
              {
                transition: "slide-left",
                uim: _,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ),
              o(
                "WAWebGroupGatingUtils",
              ).isPersistentPendingJoinRequestsBannerEnabled() || m());
          }),
          (n[3] = u),
          (n[4] = m),
          (n[5] = _),
          (n[6] = f))
        : (f = n[6]);
      var g = f,
        h = p(u),
        y;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = c.jsx(r("WAWebFlexItem.react"), {
            xstyle: d.paddingEnd20,
            children: c.jsx(
              o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon,
              { xstyle: d.icon, width: 20, height: 20 },
            ),
          })),
          (n[7] = y))
        : (y = n[7]);
      var C;
      if (n[8] !== h) {
        var b;
        ((C = c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            y,
            c.jsx(r("WAWebFlexItem.react"), {
              children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                as: "span",
                children:
                  ((b = s._plural(h, "pendingRequests")),
                  s._(
                    /*BTDS*/ '_j{"*":"{=m0} {pendingRequests} requests to join","_1":"{=m0} 1 request to join"}',
                    [
                      b,
                      s._implicitParam(
                        "=m0",
                        c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          color: "accent",
                          weight: "semibold",
                          children: s._(/*BTDS*/ '_j{"*":"Review"}', [b]),
                        }),
                      ),
                    ],
                  )),
              }),
            }),
          ],
        })),
          (n[8] = h),
          (n[9] = C));
      } else C = n[9];
      var v;
      return (
        n[10] !== g || n[11] !== m || n[12] !== i || n[13] !== C
          ? ((v = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MembershipApprovalRequestsBanner",
              escapable: !0,
              children: c.jsx(r("WAWebConversationBanner.react"), {
                ref: i,
                xstyle: d.banner,
                onClick: g,
                onClose: m,
                children: C,
              }),
            })),
            (n[10] = g),
            (n[11] = m),
            (n[12] = i),
            (n[13] = C),
            (n[14] = v))
          : (v = n[14]),
        v
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["groupMetadata"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e, n),
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["membershipApprovalRequests"]), (t[1] = i))
        : (i = t[1]);
      var l = o("useWAWebModelValues").useOptionalModelValues(
          a.groupMetadata,
          i,
        ),
        s = l == null ? void 0 : l.membershipApprovalRequests,
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["add", "remove", "reset"]), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== (s == null ? void 0 : s.length)
        ? ((c = function () {
            var e;
            return (e = s == null ? void 0 : s.length) != null ? e : 0;
          }),
          (t[3] = s == null ? void 0 : s.length),
          (t[4] = c))
        : (c = t[4]);
      var d = r("useWAWebEventTargetValue")(s, u, c);
      return d;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["id", "groupMetadata"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e, n),
        i = a.id,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["participants"]), (t[1] = l))
        : (l = t[1]);
      var s = o("useWAWebModelValues").useOptionalModelValues(
          a.groupMetadata,
          l,
        ),
        u;
      t[2] !== (s == null ? void 0 : s.participants)
        ? ((u = s == null ? void 0 : s.participants.iAmAdmin()),
          (t[2] = s == null ? void 0 : s.participants),
          (t[3] = u))
        : (u = t[3]);
      var c = !!u,
        d = p(a),
        m;
      t[4] !== i
        ? ((m = o("WAWebNux").getMembershipApprovalRequestsBannerNuxKey(
            i.toString(),
          )),
          (t[4] = i),
          (t[5] = m))
        : (m = t[5]);
      var _ = m,
        f = r("useWAWebNux")(_),
        g = f[0],
        h = f[1],
        y;
      t[6] !== c || t[7] !== g || t[8] !== d
        ? ((y =
            c &&
            d > 0 &&
            g &&
            o("WAWebABProps").getABPropConfigValue(
              "group_join_request_m2_banner_on_conversation",
            )),
          (t[6] = c),
          (t[7] = g),
          (t[8] = d),
          (t[9] = y))
        : (y = t[9]);
      var C = y,
        b;
      return (
        t[10] !== C || t[11] !== h
          ? ((b = [C, h]), (t[10] = C), (t[11] = h), (t[12] = b))
          : (b = t[12]),
        b
      );
    }
    ((l.MembershipApprovalRequestsBanner = m),
      (l.useMembershipApprovalRequestsBanner = _));
  },
  226,
);
