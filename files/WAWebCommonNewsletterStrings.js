__d(
  "WAWebCommonNewsletterStrings",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebL10N",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebUsernameGatingUtils",
    "WAXplatTrim",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e < Math.pow(10, 3) ? e : parseInt((e / 1e3).toFixed(0), 10) * 1e3;
    }
    function d(e, t) {
      return (
        t === void 0 && (t = !1),
        e >= Math.pow(10, 6)
          ? s._(/*BTDS*/ '_j{"*":"{number} followers","_1":"1 follower"}', [
              s._plural(
                t ? e : c(e),
                "number",
                t ? r("WAWebL10N").n(e) : r("WAWebL10N").d(e),
              ),
            ])
          : s._(/*BTDS*/ '_j{"*":"{number} followers","_1":"1 follower"}', [
              s._plural(
                t ? e : c(e),
                "number",
                t ? r("WAWebL10N").n(e) : r("WAWebL10N").d(e),
              ),
            ])
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      switch (e) {
        case o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryFilterType.Recommended:
          return s._(/*BTDS*/ "Explore");
        case o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryFilterType.Trending:
          return s._(/*BTDS*/ "Most active");
        case o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryFilterType.Featured:
          return s._(/*BTDS*/ "Featured");
        case o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryFilterType.New:
          return s._(/*BTDS*/ "New");
        case o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryFilterType.Popular:
          return s._(/*BTDS*/ "Popular");
        case o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryFilterType.Country:
          return s._(/*BTDS*/ "Region");
      }
    }
    function p(e) {
      return s._(/*BTDS*/ "Search in {directory_category_name}", [
        s._param("directory_category_name", e.name),
      ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Find channels");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Find channels to follow");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Discover more");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Explore channels");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Across all categories");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Explore more channels");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Create channel");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "View all");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "You're not visible to followers");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "Search followers");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Search pending invites");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "You can only view your first 5000 followers.");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "You can only search for your first 5000 followers.");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Channel link");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(
        /*BTDS*/ "You can only view individual followers who are contacts.",
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(
        /*BTDS*/ "You can only view individual followers who are contacts or admins.",
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(
        /*BTDS*/ "You can only view individual reactions from contacts.",
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "No contacts have reacted yet");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "Check your internet connection and try again.");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Delete channel");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M(e) {
      var t = e.isLoading,
        n = e.resultCount,
        r = e.searchText;
      return t
        ? n > 0
          ? s._(
              /*BTDS*/ '_j{"*":"Loading, showing {number} channels on the screen.","_1":"Loading, showing 1 channel on the screen."}',
              [s._plural(n, "number")],
            )
          : s._(/*BTDS*/ "Loading channels.")
        : n === 0
          ? s._(/*BTDS*/ "No channels found.")
          : o("WAXplatTrim").trim(r) !== ""
            ? s._(
                /*BTDS*/ '_j{"*":"Search results: {number} channels found. Scroll to load more.","_1":"Search results: 1 channel found. Scroll to load more."}',
                [s._plural(n, "number")],
              )
            : s._(
                /*BTDS*/ '_j{"*":"Find channels list, showing {number} channels on the screen. Scroll to load more.","_1":"Find channels list, showing 1 channel on the screen. Scroll to load more."}',
                [s._plural(n, "number")],
              );
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e, t) {
      return e === "create"
        ? s._(/*BTDS*/ "Create channel")
        : e === "directory"
          ? _()
          : t != null
            ? s._(/*BTDS*/ "View update")
            : s._(/*BTDS*/ "View channel");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "Unfollow channel");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Send link via WhatsApp");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "Copy link");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Share");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "Forward");
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(
        /*BTDS*/ "People with this link can view and follow your channel.",
      );
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U(e) {
      return s._(/*BTDS*/ 'Start growing "{channel_name}"', [
        s._param("channel_name", e),
      ]);
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(
        /*BTDS*/ "Get started by adding an icon, description, and your first update. Invite people by sharing your link.",
      );
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(/*BTDS*/ "Add description");
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(/*BTDS*/ "Share channel link");
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z(e) {
      return s._(/*BTDS*/ 'You created this channel, "{channel_name}"', [
        s._param("channel_name", e),
      ]);
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} invited","_1":"1 invited"}', [
        s._plural(e, "number"),
      ]);
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K() {
      return s._(/*BTDS*/ "Channel admin invite");
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return s._(/*BTDS*/ "Revoke invite");
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return s._(/*BTDS*/ "Invite revoked");
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y() {
      return s._(/*BTDS*/ "You're no longer an admin");
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J() {
      return s._(/*BTDS*/ "You're now an admin");
    }
    J.displayName = J.name + " [from " + i.id + "]";
    function Z(e) {
      return s._(/*BTDS*/ "{contact-name} is no longer an admin.", [
        s._param("contact-name", e),
      ]);
    }
    Z.displayName = Z.name + " [from " + i.id + "]";
    function ee(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return s._(/*BTDS*/ "Admin");
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return s._(/*BTDS*/ "Owner");
        default:
          return null;
      }
    }
    function te(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return "newsletter-admin-marker";
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return "newsletter-owner-marker";
        default:
          return "";
      }
    }
    function ne() {
      return s._(/*BTDS*/ "Followed channels");
    }
    ne.displayName = ne.name + " [from " + i.id + "]";
    function re() {
      return s._(/*BTDS*/ "Other channels");
    }
    re.displayName = re.name + " [from " + i.id + "]";
    function oe() {
      return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
        ? s._(
            /*BTDS*/ "Admins can send updates, change the channel profile and see your phone number or username. {=m2}.",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "Admins can send updates, change the channel profile and see your phone number. {=m2}.",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
    }
    oe.displayName = oe.name + " [from " + i.id + "]";
    function ae() {
      return s._(
        /*BTDS*/ "Only contacts who have you in their address book will receive your invite.",
      );
    }
    ae.displayName = ae.name + " [from " + i.id + "]";
    function ie() {
      return s._(/*BTDS*/ "Transfer ownership");
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    function le() {
      return s._(/*BTDS*/ "Explore more");
    }
    le.displayName = le.name + " [from " + i.id + "]";
    function se(e) {
      return s._(/*BTDS*/ '_j{"*":"Last {number} days","_1":"Last 1 day"}', [
        s._plural(e, "number", e),
      ]);
    }
    se.displayName = se.name + " [from " + i.id + "]";
    function ue(e) {
      return s._(
        /*BTDS*/ '_j{"*":"over last {number} days","_1":"over last 1 day"}',
        [s._plural(e, "number", e)],
      );
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    function ce() {
      return {
        name: s._(/*BTDS*/ "Follows"),
        description: s._(
          /*BTDS*/ "The number of times WhatsApp accounts followed your channel in the last 30 days.",
        ),
        key: "follows",
      };
    }
    function de() {
      return {
        name: s._(/*BTDS*/ "Net follows"),
        description: s._(
          /*BTDS*/ "The number of follows minus the number of unfollows of your channel in the last 30 days, including unfollows resulting from WhatsApp account deletion.",
        ),
        key: "net-follows",
      };
    }
    function me() {
      return {
        name: s._(/*BTDS*/ "Unfollows"),
        description: s._(
          /*BTDS*/ "The number of times WhatsApp accounts unfollowed your channel in the last 30 days, including unfollows resulting from WhatsApp account deletion.",
        ),
        key: "unfollows",
      };
    }
    function pe() {
      return {
        name: s._(/*BTDS*/ "Accounts reached"),
        description: s._(
          /*BTDS*/ "The number of WhatsApp accounts who have viewed any of your updates at least once. This does not include multiple views by the same accounts.",
        ),
        key: "accounts-reached",
      };
    }
    function _e() {
      return {
        name: s._(/*BTDS*/ "Followers"),
        description: s._(
          /*BTDS*/ "The number of followers who have viewed any of your updates at least once.",
        ),
        key: "followers",
      };
    }
    function fe() {
      return {
        name: s._(/*BTDS*/ "Non-followers"),
        description: s._(
          /*BTDS*/ "The number of non-followers who have viewed any of your updates at least once, by opening your channel through links, browsing or searching.",
        ),
        key: "non-followers",
      };
    }
    function ge() {
      return {
        name: s._(/*BTDS*/ "Top regions"),
        description: s._(
          /*BTDS*/ "The regions with the highest concentration of reached WhatsApp accounts with a phone number registered in those regions.",
        ),
        key: "reach-top-regions",
      };
    }
    function he() {
      return {
        name: s._(/*BTDS*/ "Top regions"),
        description: s._(
          /*BTDS*/ "The regions with the highest concentration of your followers with a phone number registered in those regions.",
        ),
        key: "follower-top-regions",
      };
    }
    function ye() {
      return {
        name: s._(/*BTDS*/ "Total followers"),
        description: s._(
          /*BTDS*/ "The total number of WhatsApp accounts following your channel.",
        ),
        key: "total-followers",
      };
    }
    function Ce() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_min_followers",
      );
      return s._(
        /*BTDS*/ '_j{"*":"Insights are available after reaching {number} followers.","_1":"Insights are available after reaching 1 follower."}',
        [s._plural(e, "number", e)],
      );
    }
    Ce.displayName = Ce.name + " [from " + i.id + "]";
    function be() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, accounts reached below 100 are not displayed.",
      );
    }
    be.displayName = be.name + " [from " + i.id + "]";
    function ve() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, follows below 100 are not displayed.",
      );
    }
    ve.displayName = ve.name + " [from " + i.id + "]";
    function Se() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, regions below 100 accounts reached are not displayed.",
      );
    }
    Se.displayName = Se.name + " [from " + i.id + "]";
    function Re() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, regions below 100 followers are not displayed.",
      );
    }
    ((Re.displayName = Re.name + " [from " + i.id + "]"),
      (l.roundToThousands = c),
      (l.getNewsletterFollowersText = d),
      (l.getNewsletterDirectoryFilterLabel = m),
      (l.getNewsletterCategorySearchPlaceholder = p),
      (l.getFindNewslettersText = _),
      (l.getFindChannelsToFollowText = f),
      (l.getDiscoverMoreText = g),
      (l.getExploreNewslettersText = h),
      (l.getAcrossAllCategoriesText = y),
      (l.getExploreMoreNewslettersText = C),
      (l.getCreateChannelText = b),
      (l.getViewAllChannelFollowersText = v),
      (l.getMeContactLabelChannelText = S),
      (l.getSearchForChannelFollowersText = R),
      (l.getSearchForPendingInvitesText = L),
      (l.getFirstFiveThousandChannelFollowersText = E),
      (l.getFirstFiveThousandChannelFollowersSearchingText = k),
      (l.getInviteViaLinkText = I),
      (l.getFollowersOnlyInYourContactsText = T),
      (l.getFollowersOnlyInYourContactsAndAdminsText = D),
      (l.getIndividualReactionsFromContactsText = x),
      (l.getNoContactsHaveReactedYetText = $),
      (l.getNoInternetConnectionText = P),
      (l.getDeleteChannelText = N),
      (l.getNewsletterResultsAnnouncementString = M),
      (l.getNewsletterLinkActionLabel = w),
      (l.getUnfollowNewsletterText = A),
      (l.getSendLinkViaWhatsAppText = F),
      (l.getCopyLinkText = O),
      (l.getShareText = B),
      (l.getForwardNewsletterLinkText = W),
      (l.getChannelLinkInformationText = q),
      (l.startGrowingChannelNameText = U),
      (l.getStartedWithChannelText = V),
      (l.getAddDescriptionButtonText = H),
      (l.getShareChannelLinkButtonText = G),
      (l.getYouCreatedChannelWithNameText = z),
      (l.getAdminInvitesTitleText = j),
      (l.getChannelAdminInviteText = K),
      (l.getRevokeButtonFullText = Q),
      (l.getInviteRevokedText = X),
      (l.getYouAreNoLongerAnAdminText = Y),
      (l.getYouAreNowAnAdminText = J),
      (l.getSomeoneIsNoLongerAnAdminText = Z),
      (l.getNewsletterMembershipRoleTag = ee),
      (l.getNewsletterRoleMarker = te),
      (l.getFollowedChannelsSearchHeader = ne),
      (l.getOtherChannelsSearchHeader = re),
      (l.adminPrivacyNux = oe),
      (l.followerInviteDisclaimer = ae),
      (l.getNewsletterTransferOwnershipText = ie),
      (l.getNewsletterSimilarNewslettersTitle = le),
      (l.getDaysCoveredText = se),
      (l.getOverLastDaysText = ue),
      (l.getFollowsMetricInfo = ce),
      (l.getNetFollowsMetricInfo = de),
      (l.getUnfollowsMetricInfo = me),
      (l.getAccountsReachMetricInfo = pe),
      (l.getReachFollowersMetricInfo = _e),
      (l.getReachNonFollowersMetricInfo = fe),
      (l.getReachTopRegionsMetricInfo = ge),
      (l.getFollowerTopRegionsMetricInfo = he),
      (l.getTotalFollowersMetricInfo = ye),
      (l.getMetricsAvailabilityDisclaimer = Ce),
      (l.getReachMetricsThreshold = be),
      (l.getFollowsMetricsThreshold = ve),
      (l.getReachRegionMetricsThreshold = Se),
      (l.getFollowersRegionMetricsThreshold = Re));
  },
  226,
);
