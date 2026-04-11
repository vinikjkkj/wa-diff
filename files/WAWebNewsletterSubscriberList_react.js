__d(
  "WAWebNewsletterSubscriberList.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebChatContact.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInviteAdminButton.react",
    "WAWebNewsletterInviteFollowerButton.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterSubscriberListAction",
    "WAWebNewsletterSubscriberListModal.react",
    "WAWebRoundShape.react",
    "WAWebSearchIcon.react",
    "WAWebSingleSelection",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNewsletter",
    "WAWebWamEnumChannelAdminAction",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebNewsletterSubscribers",
    "useWAWebNewsletterSubscribersContextMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        italic: { fontStyle: "x1k4tb9n", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        copyLink: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          height: "x1vqgdyp",
          width: "x100vrsf",
          backgroundColor: "xfn3atn",
          $$css: !0,
        },
        lastRow: {
          width: "xh8yej3",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "x1y55ic2",
          marginTop: "x98l61r",
          $$css: !0,
        },
        center: { textAlign: "x2b8uid", $$css: !0 },
        start: { textAlign: "x1yc453h", $$css: !0 },
        lastRowLabel: {
          color: "xhslqc4",
          width: "xh8yej3",
          fontSize: "x1f6kntn",
          lineHeight: "xx6cpbe",
          $$css: !0,
        },
        copyIcon: { color: "x1awj2ng", $$css: !0 },
      },
      m = o("WAWebChatContact.react").ContactFactory(),
      p = 68;
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.text,
        r = e.textAlign,
        a = d[r],
        i;
      t[0] !== a
        ? ((i = [o("WAWebUISpacing").uiPadding.vert16, d.lastRow, a]),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [d.lastRowLabel, o("WAWebUISpacing").uiPadding.horiz20]),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] !== n
        ? ((s = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: n,
            titlify: !0,
            xstyle: l,
          })),
          (t[3] = n),
          (t[4] = s))
        : (s = t[4]);
      var c;
      return (
        t[5] !== i || t[6] !== s
          ? ((c = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              xstyle: i,
              children: s,
            })),
            (t[5] = i),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              breakWord: !0,
              direction: "auto",
              text: o(
                "WAWebCommonNewsletterStrings",
              ).getMeContactLabelChannelText(),
              titlify: !0,
              xstyle: d.italic,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onShareLink,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WAWebRoundShape.react"), {
            theme: "group-modal",
            children: u.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: o("WAWebCommonNewsletterStrings").getInviteViaLinkText(),
          })),
          (t[1] = l))
        : (l = t[1]);
      var s;
      return (
        t[2] !== n
          ? ((s = u.jsx(r("WAWebCellV2.react"), {
              detailLeft: i,
              isRefresh: !0,
              onClick: n,
              primary: l,
              size: "medium",
              testid: void 0,
            })),
            (t[2] = n),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    function h(e, t) {
      return !(
        o("WAWebUserPrefsMeUser").isMeAccount(e) &&
        o("WAWebNewsletterMembershipUtil").iAmOwner(t)
      );
    }
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(14),
        r = e.active,
        a = e.handleContactClick,
        i = e.handleContactContextMenu,
        l = e.newsletter,
        s = e.subscriberData,
        c;
      if (
        n[0] !== (l == null ? void 0 : l.newsletterMetadata) ||
        n[1] !== ((t = s.contact) == null ? void 0 : t.id)
      ) {
        var d;
        ((c = function () {
          var e;
          return h(
            (e = s.contact) == null ? void 0 : e.id,
            l == null ? void 0 : l.newsletterMetadata,
          );
        }),
          (n[0] = l == null ? void 0 : l.newsletterMetadata),
          (n[1] = (d = s.contact) == null ? void 0 : d.id),
          (n[2] = c));
      } else c = n[2];
      var p = c;
      if (s.contact == null) return null;
      var _;
      n[3] !== s.contact
        ? ((_ = o("WAWebContactGetters").getIsMe(s.contact)
            ? u.jsx(f, {})
            : null),
          (n[3] = s.contact),
          (n[4] = _))
        : (_ = n[4]);
      var g;
      return (
        n[5] !== r ||
        n[6] !== a ||
        n[7] !== i ||
        n[8] !== p ||
        n[9] !== s.contact ||
        n[10] !== s.isPendingAdmin ||
        n[11] !== s.role ||
        n[12] !== _
          ? ((g = u.jsx(m, {
              active: r,
              contact: s.contact,
              contextEnabled: p,
              contextMenu: !0,
              isPendingParticipant: s.isPendingAdmin,
              newsletterMembershipType: s.role,
              onClick: a,
              onContext: i,
              secondary: _,
              theme: "chat-info",
            })),
            (n[5] = r),
            (n[6] = a),
            (n[7] = i),
            (n[8] = p),
            (n[9] = s.contact),
            (n[10] = s.isPendingAdmin),
            (n[11] = s.role),
            (n[12] = _),
            (n[13] = g))
          : (g = n[13]),
        g
      );
    }
    function C(e) {
      var t = e.adminFunnelLogger,
        n = e.onShareLink,
        a = e.onTransferOwnershipSelection,
        i = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        l = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        c = u.jsx(o("WAWebSearchIcon.react").SearchIcon, {
          iconXstyle: d.secondaryColor,
        }),
        m = e.newsletter.newsletterMetadata,
        f =
          (m == null ? void 0 : m.size) != null
            ? o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
                m.size,
                !0,
              )
            : null,
        h = o("useWAWebNewsletterSubscribers").useNewsletterSubscribers({
          newsletter: e.newsletter,
          count: o("WAWebNewsletterSubscriberListAction")
            .NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT,
          cacheType: o("WAWebUserPrefsNewsletter")
            .ValidCachedNewsletterSubscriberKeys.LIMITED,
          includeMeContact: !0,
        }),
        C = h[0],
        b = h[1],
        v = C.map(function (e) {
          var t = e.contact,
            n = e.role;
          return {
            itemKey: t.id.toString(),
            contact: t,
            height: p,
            role: n,
            isPendingAdmin: !1,
          };
        }),
        S = o(
          "useWAWebNewsletterSubscribersContextMenu",
        ).useNewsletterSubscribersContextMenu({
          chat: e.newsletter,
          isFullModal: !1,
          onVerification: e.onVerification,
          followerInformation: new Map(
            v.map(function (e) {
              var t;
              return [
                (t = e.contact) == null ? void 0 : t.id,
                { newsletterRole: e.role },
              ];
            }),
          ),
          newsletter: e.newsletter,
          onTransferOwnershipSelection: a,
        }),
        R = S[0],
        L = S[1];
      l.current.init(
        C.map(function (e) {
          var t = e.contact;
          return t;
        }),
      );
      var E = function (t) {
          (o("WAWebModalManager").ModalManager.close(), a(t));
        },
        k = function () {
          (t.logEvent(
            o("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION
              .SEARCH_FOLLOWER,
          ),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebNewsletterSubscriberListModal.react")
                  .NewsletterSubscriberListModal,
                {
                  newsletter: e.newsletter,
                  onTransferOwnershipSelection: E,
                  onVerification: e.onVerification,
                },
              ),
              { transition: "modal-flow" },
            ));
        },
        I = b
          ? u.jsx(r("WAWebChatInfoExpandButton.react"), {
              fromNewsletter: !0,
              numMore: C.length,
              onClick: k,
              viewAll: !0,
            })
          : null;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(
            o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
            {
              subtitle: c,
              testid: void 0,
              title: f,
              titleOnClick: k,
              xstyle: o("WAWebUISpacing").uiMargin.top10,
            },
          ),
          u.jsxs(
            o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
            {
              testid: void 0,
              xstyle: o("WAWebUISpacing").uiPadding.horiz0,
              children: [
                u.jsx(r("WAWebNewsletterInviteFollowerButton.react"), {
                  chat: e.newsletter,
                }),
                u.jsx(r("WAWebNewsletterInviteAdminButton.react"), {
                  chat: e.newsletter,
                }),
                u.jsx(g, { onShareLink: n }),
                u.jsx(r("WAWebNavigableFlatList.react"), {
                  ariaLabel: s._(/*BTDS*/ "Follower List: {follower-size}", [
                    s._param("follower-size", f),
                  ]),
                  flatListController: i.current,
                  listData: v,
                  onRenderItem: function (n) {
                    return u.jsx(y, {
                      active: l.current,
                      handleContactClick: function (n, r) {
                        return e.onContactInfo(r);
                      },
                      handleContactContextMenu: L,
                      newsletter: e.newsletter,
                      subscriberData: n,
                    });
                  },
                  rotateList: !0,
                  selection: l.current,
                }),
                I,
                u.jsx(_, {
                  text: o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterCreationEnabled()
                    ? o(
                        "WAWebCommonNewsletterStrings",
                      ).getFollowersOnlyInYourContactsAndAdminsText()
                    : o(
                        "WAWebCommonNewsletterStrings",
                      ).getFollowersOnlyInYourContactsText(),
                  textAlign: "start",
                }),
              ],
            },
          ),
          R,
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.NewsletterSubListLastRow = _),
      (l.YouArentVisibleToYourFollowersLabel = f),
      (l.showContextForCell = h),
      (l.NewsletterSubscriber = y),
      (l.NewsletterSubscriberList = C));
  },
  226,
);
