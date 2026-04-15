__d(
  "WAWebNewsletterPendingInvites.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebFlatListController",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebNewsletterSubscriberList.react",
    "WAWebNewsletterSubscriberListAction",
    "WAWebNewsletterSubscriberListModal.react",
    "WAWebNoop",
    "WAWebSingleSelection",
    "WAWebUISpacing",
    "react",
    "useLazyRef",
    "useWAWebNewsletterPendingInvites",
    "useWAWebNewsletterSubscribersContextMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 68;
    function d(e) {
      var t = e.newsletter,
        n = e.onVerification,
        a = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(
          t,
        ),
        i = a.length,
        l = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        d = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        m = a
          .slice(
            0,
            o("WAWebNewsletterSubscriberListAction")
              .NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT,
          )
          .map(function (e) {
            return {
              itemKey: "pending-" + e.id.toJid(),
              adminProfile: null,
              contact: e,
              height: c,
              role: null,
              isPendingAdmin: !0,
            };
          }),
        p = o(
          "useWAWebNewsletterSubscribersContextMenu",
        ).useNewsletterSubscribersContextMenu({
          chat: t,
          isFullModal: !1,
          onVerification: n,
          followerInformation: new Map(
            m.map(function (e) {
              var t;
              return [
                (t = e.contact) == null ? void 0 : t.id,
                { newsletterRole: null },
              ];
            }),
          ),
          newsletter: t,
        }),
        _ = p[0],
        f = p[1];
      if (i === 0) return null;
      var g = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebNewsletterSubscriberListModal.react")
                .NewsletterSubscriberListModal,
              {
                newsletter: t,
                initialStep: o("WAWebNewsletterSubscriberListModal.react")
                  .FollowersFlowStep.PendingInvites,
                onVerification: n,
              },
            ),
            { transition: "modal-flow" },
          );
        },
        h =
          i >
          o("WAWebNewsletterSubscriberListAction")
            .NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT
            ? u.jsx(r("WAWebChatInfoExpandButton.react"), {
                numMore: i,
                onClick: g,
                fromNewsletter: !0,
                viewAll: !0,
              })
            : null;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(
            o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
            {
              testid: void 0,
              title: o("WAWebCommonNewsletterStrings").getAdminInvitesTitleText(
                i,
              ),
              xstyle: o("WAWebUISpacing").uiMargin.top10,
              children: [
                u.jsx(r("WAWebNavigableFlatList.react"), {
                  ariaLabel: s._(
                    /*BTDS*/ '_j{"*":"Pending Invites List: {pending-invites-list-size}"}',
                    [s._param("pending-invites-list-size", i, [0])],
                  ),
                  flatListController: l.current,
                  listData: m,
                  onRenderItem: function (t) {
                    return u.jsx(
                      o("WAWebNewsletterSubscriberList.react")
                        .NewsletterSubscriber,
                      {
                        subscriberData: t,
                        handleContactClick: r("WAWebNoop"),
                        handleContactContextMenu: f,
                        active: d.current,
                      },
                    );
                  },
                  selection: d.current,
                  rotateList: !0,
                }),
                h,
              ],
            },
          ),
          _,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
