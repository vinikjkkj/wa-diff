__d(
  "WAWebGroupMembershipApprovalRequestsDrawer.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebClock",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupGatingUtils",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMembershipApprovalRequest.react",
    "WAWebGroupMembershipApprovalRequestsDrawerMenu.react",
    "WAWebMembershipApprovalRequestsBanner.react",
    "WAWebMembershipApprovalRequestsOrder",
    "WAWebName.react",
    "WAWebRequestMethodType",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebGroupParticipantStatus",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        disclaimer: { marginBottom: "x1ty9z65", $$css: !0 },
        disclaimerText: {
          textAlign: "x2b8uid",
          lineHeight: "x16h55sf",
          $$css: !0,
        },
        emptyStateTitle: {
          textAlign: "x2b8uid",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        button: { color: "x1v5yvga", $$css: !0 },
        empty: { height: "x5yr21d", $$css: !0 },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = a.onGroupSettings,
        u = a.onRequestClick,
        p = a.onSortBySource,
        h = a.onSortByTime,
        y = a.orderBy,
        C = o("useWAWebModelValues").useModelValues(a.chat, [
          "id",
          "groupMetadata",
        ]),
        b = o("useWAWebModelValues").useModelValues(
          r("WANullthrows")(C.groupMetadata),
          [
            "membershipApprovalRequests",
            "membershipApprovalMode",
            "participants",
          ],
        ),
        v = r("useWAWebGroupParticipantStatus")(b),
        S = v[0],
        R = v[1],
        L = b.participants.iAmAdmin(),
        E = r("useLazyRef")(function () {
          return b.membershipApprovalRequests.toArray();
        }),
        k = E.current,
        I;
      k.length > 0 &&
        (I = c.jsx(r("WAWebGroupMembershipApprovalRequestsDrawerMenu.react"), {
          orderBy: y,
          onSortBySource: p,
          onSortByTime: h,
        }));
      var T = o(
          "WAWebMembershipApprovalRequestsBanner.react",
        ).useMembershipApprovalRequestsBanner(C),
        D = T[0],
        x = T[1];
      d(function () {
        (D &&
          !o(
            "WAWebGroupGatingUtils",
          ).isPersistentPendingJoinRequestsBannerEnabled() &&
          x(),
          o("WAWebGroupJoinRequestMetricUtils").logViewPendingParticipant(
            C.id,
          ));
      }, []);
      var $;
      if (k.length > 0) {
        var P = [];
        switch (
          (R &&
            (k = k.filter(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.addedByContact.id);
            })),
          y)
        ) {
          case o("WAWebMembershipApprovalRequestsOrder")
            .MembershipApprovalRequestsOrder.Source: {
            var N,
              M =
                (N = C.groupMetadata) == null ? void 0 : N.getParentGroupChat(),
              w = f(k, M == null ? void 0 : M.id),
              A = w.addedByOthers,
              F = w.contacts,
              O = w.fromCommunity,
              B = w.fromInviteLink,
              W = w.fromOtherCommunities;
            (P.push(
              { title: s._(/*BTDS*/ "Contacts"), requests: F, key: "contacts" },
              {
                title: s._(/*BTDS*/ "Added by others"),
                requests: A,
                key: "added-by-others",
              },
            ),
              M != null &&
                P.push({
                  title: s._(/*BTDS*/ "From {community_name}", [
                    s._param(
                      "community_name",
                      c.jsx(o("WAWebName.react").Name, { chat: M }),
                    ),
                  ]),
                  requests: O,
                  key: "from-community",
                }),
              P.push(
                {
                  title: s._(/*BTDS*/ "From invite link"),
                  requests: B,
                  key: "from-invite-link",
                },
                {
                  title: s._(/*BTDS*/ "From other communities"),
                  requests: W,
                  key: "from-other-communities",
                },
              ));
            break;
          }
          case o("WAWebMembershipApprovalRequestsOrder")
            .MembershipApprovalRequestsOrder.Time: {
            P.push.apply(
              P,
              g(k).map(function (e) {
                return { title: e.date, requests: e.requests, key: e.key };
              }),
            );
            break;
          }
        }
        var q = P.filter(function (e) {
          return e.requests.length > 0;
        }).map(function (e) {
          return c.jsx(
            _,
            {
              title: e.title,
              children: e.requests.map(function (e) {
                return c.jsx(
                  r("WAWebGroupMembershipApprovalRequest.react"),
                  { chat: C, request: e, onRequestClick: u, onBack: i },
                  e.id.toString(),
                );
              }),
            },
            e.key,
          );
        });
        $ = c.jsxs(c.Fragment, {
          children: [
            c.jsx(r("WAWebDrawerSection.react"), {
              xstyle: [
                m.disclaimer,
                o("WAWebUISpacing").uiPadding.horiz24,
                o("WAWebUISpacing").uiPadding.top24,
                o("WAWebUISpacing").uiPadding.bottom15,
              ],
              animation: !1,
              children: c.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                  size: "14",
                  color: "secondary",
                  xstyle: m.disclaimerText,
                  children: L
                    ? s._(
                        /*BTDS*/ "New members need admin approval to join this group. Change in {=m2}",
                        [
                          s._implicitParam(
                            "=m2",
                            c.jsx(r("WAWebUnstyledButton.react"), {
                              onClick: l,
                              xstyle: m.button,
                              children: s._(/*BTDS*/ "group settings"),
                            }),
                          ),
                        ],
                      )
                    : s._(
                        /*BTDS*/ "New members need admin approval to join this group.",
                      ),
                }),
              }),
            }),
            q,
          ],
        });
      } else {
        var U = s._(/*BTDS*/ "No members to review"),
          V = b.membershipApprovalMode
            ? s._(
                /*BTDS*/ "People who requested to join this group and are waiting to be approved will appear here.",
              )
            : s._(
                /*BTDS*/ "People who requested to join this group and are waiting to be approved will appear here. Turn on admin approval in {=m2}.",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(r("WAWebUnstyledButton.react"), {
                      onClick: l,
                      xstyle: m.button,
                      children: s._(/*BTDS*/ "group settings"),
                    }),
                  ),
                ],
              );
        $ = c.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: [m.empty, o("WAWebUISpacing").uiPadding.horiz24],
          justify: "center",
          align: "center",
          children: [
            c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "secondary",
              xstyle: [
                m.emptyStateTitle,
                o("WAWebUISpacing").uiPadding.bottom14,
              ],
              children: U,
            }),
            c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "14",
              color: "secondary",
              xstyle: m.disclaimerText,
              children: V,
            }),
          ],
        });
      }
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "invite",
        tsNavigationData: {
          surface: "unknown",
          viewName: "group-membership-approval",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Pending requests"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            onBack: i,
            menu: I,
          }),
          c.jsx(r("WAWebDrawerBody.react"), { children: $ }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a = e.title,
        i;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l;
        ((i = [
          (l = o("WAWebUISpacing")).uiMargin.bottom0,
          l.uiPadding.horiz16,
          l.uiPadding.top24,
          l.uiPadding.bottom12,
        ]),
          (t[0] = i));
      } else i = t[0];
      var s;
      return (
        t[1] !== n || t[2] !== a
          ? ((s = c.jsx(r("WAWebDrawerSection.react"), {
              title: a,
              animation: !1,
              xstyle: o("WAWebUISpacing").uiMargin.bottom0,
              titleXStyle: i,
              children: n,
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    function f(e, t) {
      return e.reduce(
        function (e, n) {
          if (o("WAWebFrontendContactGetters").getIsMyContact(n.contact))
            e.contacts.push(n);
          else
            switch (n.requestMethod) {
              case o("WAWebRequestMethodType").RequestMethod.NonAdminAdd:
                e.addedByOthers.push(n);
                break;
              case o("WAWebRequestMethodType").RequestMethod.InviteLink:
                e.fromInviteLink.push(n);
                break;
              case o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin:
                n.parentGroupId == null || n.parentGroupId.equals(t)
                  ? e.fromCommunity.push(n)
                  : e.fromOtherCommunities.push(n);
                break;
            }
          return e;
        },
        {
          contacts: [],
          addedByOthers: [],
          fromInviteLink: [],
          fromCommunity: [],
          fromOtherCommunities: [],
        },
      );
    }
    function g(e) {
      var t = [],
        n;
      return (
        e.forEach(function (e) {
          var r,
            a = o("WAWebClock").Clock.membershipApprovalRequestSectionDate(e.t),
            i = a.date,
            l = a.key;
          (i !== ((r = n) == null ? void 0 : r.date) &&
            ((n = { date: i, requests: [], key: l }), t.push(n)),
            n.requests.push(e));
        }),
        t
      );
    }
    l.default = p;
  },
  226,
);
