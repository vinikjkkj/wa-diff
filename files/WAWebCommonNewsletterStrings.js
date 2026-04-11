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
    function m() {
      return s._(
        /*BTDS*/ "This channel has added privacy for your profile and phone number. Click to learn more.",
      );
    }
    function p(e) {
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
    function _(e) {
      return s._(/*BTDS*/ "Search in {directory_category_name}", [
        s._param("directory_category_name", e.name),
      ]);
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Find channels");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Find channels to follow");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Discover more");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Explore channels");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Across all categories");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Explore more channels");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Create channel");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "View all");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "You're not visible to followers");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Search followers");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Search pending invites");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "You can only view your first 5000 followers.");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "You can only search for your first 5000 followers.");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "Channel link");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(
        /*BTDS*/ "You can only view individual followers who are contacts.",
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(
        /*BTDS*/ "You can only view individual followers who are contacts or admins.",
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(
        /*BTDS*/ "You can only view individual reactions from contacts.",
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "No contacts have reacted yet");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Check your internet connection and try again.");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Delete channel");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
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
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e, t) {
      return e === "create"
        ? s._(/*BTDS*/ "Create channel")
        : e === "directory"
          ? f()
          : t != null
            ? s._(/*BTDS*/ "View update")
            : s._(/*BTDS*/ "View channel");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Unfollow channel");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "Send link via WhatsApp");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Copy link");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "Share");
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "Forward");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(
        /*BTDS*/ "People with this link can view and follow your channel.",
      );
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V(e) {
      return s._(/*BTDS*/ 'Start growing "{channel_name}"', [
        s._param("channel_name", e),
      ]);
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(
        /*BTDS*/ "Get started by adding an icon, description, and your first update. Invite people by sharing your link.",
      );
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(/*BTDS*/ "Add description");
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z() {
      return s._(/*BTDS*/ "Share channel link");
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j(e) {
      return s._(/*BTDS*/ 'You created this channel, "{channel_name}"', [
        s._param("channel_name", e),
      ]);
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} invited","_1":"1 invited"}', [
        s._plural(e, "number"),
      ]);
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return s._(/*BTDS*/ "Channel admin invite");
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return s._(/*BTDS*/ "Revoke invite");
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y() {
      return s._(/*BTDS*/ "Invite revoked");
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J() {
      return s._(/*BTDS*/ "You're no longer an admin");
    }
    J.displayName = J.name + " [from " + i.id + "]";
    function Z() {
      return s._(/*BTDS*/ "You're now an admin");
    }
    Z.displayName = Z.name + " [from " + i.id + "]";
    function ee(e) {
      return s._(/*BTDS*/ "{contact-name} is no longer an admin.", [
        s._param("contact-name", e),
      ]);
    }
    ee.displayName = ee.name + " [from " + i.id + "]";
    function te(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return s._(/*BTDS*/ "Admin");
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return s._(/*BTDS*/ "Owner");
        default:
          return null;
      }
    }
    function ne(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return "newsletter-admin-marker";
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return "newsletter-owner-marker";
        default:
          return "";
      }
    }
    function re() {
      return s._(/*BTDS*/ "Followed channels");
    }
    re.displayName = re.name + " [from " + i.id + "]";
    function oe() {
      return s._(/*BTDS*/ "Other channels");
    }
    oe.displayName = oe.name + " [from " + i.id + "]";
    function ae() {
      return s._(
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
    ae.displayName = ae.name + " [from " + i.id + "]";
    function ie(e) {
      return s._(
        /*BTDS*/ "Only contacts with {my-number} in their address book will receive your invite.",
        [s._param("my-number", e)],
      );
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    function le() {
      return s._(/*BTDS*/ "Transfer ownership");
    }
    le.displayName = le.name + " [from " + i.id + "]";
    function se() {
      return s._(/*BTDS*/ "Explore more");
    }
    se.displayName = se.name + " [from " + i.id + "]";
    function ue(e) {
      return s._(/*BTDS*/ '_j{"*":"Last {number} days","_1":"Last 1 day"}', [
        s._plural(e, "number", e),
      ]);
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    function ce(e) {
      return s._(
        /*BTDS*/ '_j{"*":"over last {number} days","_1":"over last 1 day"}',
        [s._plural(e, "number", e)],
      );
    }
    ce.displayName = ce.name + " [from " + i.id + "]";
    function de() {
      return {
        name: s._(/*BTDS*/ "Follows"),
        description: s._(
          /*BTDS*/ "The number of times WhatsApp accounts followed your channel in the last 30 days.",
        ),
        key: "follows",
      };
    }
    function me() {
      return {
        name: s._(/*BTDS*/ "Net follows"),
        description: s._(
          /*BTDS*/ "The number of follows minus the number of unfollows of your channel in the last 30 days, including unfollows resulting from WhatsApp account deletion.",
        ),
        key: "net-follows",
      };
    }
    function pe() {
      return {
        name: s._(/*BTDS*/ "Unfollows"),
        description: s._(
          /*BTDS*/ "The number of times WhatsApp accounts unfollowed your channel in the last 30 days, including unfollows resulting from WhatsApp account deletion.",
        ),
        key: "unfollows",
      };
    }
    function _e() {
      return {
        name: s._(/*BTDS*/ "Accounts reached"),
        description: s._(
          /*BTDS*/ "The number of WhatsApp accounts who have viewed any of your updates at least once. This does not include multiple views by the same accounts.",
        ),
        key: "accounts-reached",
      };
    }
    function fe() {
      return {
        name: s._(/*BTDS*/ "Followers"),
        description: s._(
          /*BTDS*/ "The number of followers who have viewed any of your updates at least once.",
        ),
        key: "followers",
      };
    }
    function ge() {
      return {
        name: s._(/*BTDS*/ "Non-followers"),
        description: s._(
          /*BTDS*/ "The number of non-followers who have viewed any of your updates at least once, by opening your channel through links, browsing or searching.",
        ),
        key: "non-followers",
      };
    }
    function he() {
      return {
        name: s._(/*BTDS*/ "Top regions"),
        description: s._(
          /*BTDS*/ "The regions with the highest concentration of reached WhatsApp accounts with a phone number registered in those regions.",
        ),
        key: "reach-top-regions",
      };
    }
    function ye() {
      return {
        name: s._(/*BTDS*/ "Top regions"),
        description: s._(
          /*BTDS*/ "The regions with the highest concentration of your followers with a phone number registered in those regions.",
        ),
        key: "follower-top-regions",
      };
    }
    function Ce() {
      return {
        name: s._(/*BTDS*/ "Total followers"),
        description: s._(
          /*BTDS*/ "The total number of WhatsApp accounts following your channel.",
        ),
        key: "total-followers",
      };
    }
    function be() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_min_followers",
      );
      return s._(
        /*BTDS*/ '_j{"*":"Insights are available after reaching {number} followers.","_1":"Insights are available after reaching 1 follower."}',
        [s._plural(e, "number", e)],
      );
    }
    be.displayName = be.name + " [from " + i.id + "]";
    function ve() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, accounts reached below 100 are not displayed.",
      );
    }
    ve.displayName = ve.name + " [from " + i.id + "]";
    function Se() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, follows below 100 are not displayed.",
      );
    }
    Se.displayName = Se.name + " [from " + i.id + "]";
    function Re() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, regions below 100 accounts reached are not displayed.",
      );
    }
    Re.displayName = Re.name + " [from " + i.id + "]";
    function Le() {
      return s._(
        /*BTDS*/ "To protect consumer privacy, regions below 100 followers are not displayed.",
      );
    }
    ((Le.displayName = Le.name + " [from " + i.id + "]"),
      (l.roundToThousands = c),
      (l.getNewsletterFollowersText = d),
      (l.getNewsletterProfilePrivacyText = m),
      (l.getNewsletterDirectoryFilterLabel = p),
      (l.getNewsletterCategorySearchPlaceholder = _),
      (l.getFindNewslettersText = f),
      (l.getFindChannelsToFollowText = g),
      (l.getDiscoverMoreText = h),
      (l.getExploreNewslettersText = y),
      (l.getAcrossAllCategoriesText = C),
      (l.getExploreMoreNewslettersText = b),
      (l.getCreateChannelText = v),
      (l.getViewAllChannelFollowersText = S),
      (l.getMeContactLabelChannelText = R),
      (l.getSearchForChannelFollowersText = L),
      (l.getSearchForPendingInvitesText = E),
      (l.getFirstFiveThousandChannelFollowersText = k),
      (l.getFirstFiveThousandChannelFollowersSearchingText = I),
      (l.getInviteViaLinkText = T),
      (l.getFollowersOnlyInYourContactsText = D),
      (l.getFollowersOnlyInYourContactsAndAdminsText = x),
      (l.getIndividualReactionsFromContactsText = $),
      (l.getNoContactsHaveReactedYetText = P),
      (l.getNoInternetConnectionText = N),
      (l.getDeleteChannelText = M),
      (l.getNewsletterResultsAnnouncementString = w),
      (l.getNewsletterLinkActionLabel = A),
      (l.getUnfollowNewsletterText = F),
      (l.getSendLinkViaWhatsAppText = O),
      (l.getCopyLinkText = B),
      (l.getShareText = W),
      (l.getForwardNewsletterLinkText = q),
      (l.getChannelLinkInformationText = U),
      (l.startGrowingChannelNameText = V),
      (l.getStartedWithChannelText = H),
      (l.getAddDescriptionButtonText = G),
      (l.getShareChannelLinkButtonText = z),
      (l.getYouCreatedChannelWithNameText = j),
      (l.getAdminInvitesTitleText = K),
      (l.getChannelAdminInviteText = Q),
      (l.getRevokeButtonFullText = X),
      (l.getInviteRevokedText = Y),
      (l.getYouAreNoLongerAnAdminText = J),
      (l.getYouAreNowAnAdminText = Z),
      (l.getSomeoneIsNoLongerAnAdminText = ee),
      (l.getNewsletterMembershipRoleTag = te),
      (l.getNewsletterRoleMarker = ne),
      (l.getFollowedChannelsSearchHeader = re),
      (l.getOtherChannelsSearchHeader = oe),
      (l.adminPrivacyNux = ae),
      (l.followerInviteDisclaimer = ie),
      (l.getNewsletterTransferOwnershipText = le),
      (l.getNewsletterSimilarNewslettersTitle = se),
      (l.getDaysCoveredText = ue),
      (l.getOverLastDaysText = ce),
      (l.getFollowsMetricInfo = de),
      (l.getNetFollowsMetricInfo = me),
      (l.getUnfollowsMetricInfo = pe),
      (l.getAccountsReachMetricInfo = _e),
      (l.getReachFollowersMetricInfo = fe),
      (l.getReachNonFollowersMetricInfo = ge),
      (l.getReachTopRegionsMetricInfo = he),
      (l.getFollowerTopRegionsMetricInfo = ye),
      (l.getTotalFollowersMetricInfo = Ce),
      (l.getMetricsAvailabilityDisclaimer = be),
      (l.getReachMetricsThreshold = ve),
      (l.getFollowsMetricsThreshold = Se),
      (l.getReachRegionMetricsThreshold = Re),
      (l.getFollowersRegionMetricsThreshold = Le));
  },
  226,
);
