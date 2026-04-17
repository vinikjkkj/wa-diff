__d(
  "CometActivityLogUtils",
  ["$InternalEnum", "ContentAccessAndControlFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "cr_posts_ayti",
      s = n("$InternalEnum").Mirrored(["ARCHIVE", "TRASH", "LOG", "MANAGE"]);
    function u(e) {
      return !!(
        e.loadingState.isBulkActionInProgress ||
        e.loadingState.isNavigationInProgress
      );
    }
    function c(e) {
      return (
        e === "MANAGEYOURPOSTS" ||
        e === "YOURTIMELINEPOSTS" ||
        e === "YOURTIMELINEPOSTSTAO" ||
        e === "MANAGEPHOTOSANDVIDEOS" ||
        e === "MANAGEPOSTSPHOTOSANDVIDEOS" ||
        e === "MANAGEALBUMS" ||
        e === "YOURAPPSPOSTS"
      );
    }
    function d(e) {
      return !(e !== E() && e !== $());
    }
    function m(e) {
      if (e != null)
        switch (e) {
          case E():
            return !0;
          case $():
            return !0;
          case I():
            return !0;
          case D():
            return !0;
          case T():
            return !0;
          default:
            return !1;
        }
      return !1;
    }
    function p(e, t) {
      return e.some(function (e) {
        return e.filter_key === t;
      });
    }
    function _(e) {
      switch (e) {
        case E():
          return s.ARCHIVE;
        case $():
          return s.TRASH;
        default:
          return s.LOG;
      }
    }
    function f(e, t, n, r) {
      return function () {
        e > 0 &&
        t != null &&
        t.cancel_label != null &&
        t.confirm_label != null &&
        t.title != null
          ? r(
              {
                body: t.description,
                cancel: t.cancel_label,
                confirm: t.confirm_label,
                title: t.title,
              },
              n,
            )
          : n();
      };
    }
    function g() {
      return "CATEGORY";
    }
    function h() {
      return "PERSON";
    }
    function y() {
      return "DATE";
    }
    function C() {
      return "MEDIA_CONTENT";
    }
    function b() {
      return "AUDIENCE";
    }
    function v() {
      return s.ARCHIVE;
    }
    function S() {
      return s.TRASH;
    }
    function R() {
      return s.LOG;
    }
    function L() {
      return s.MANAGE;
    }
    function E() {
      return "ARCHIVED";
    }
    function k() {
      return "ARCHIVEDSTORIES";
    }
    function I() {
      return "MANAGEYOURPOSTS";
    }
    function T() {
      return "MANAGEINTERACTIONS";
    }
    function D() {
      return "MANAGEYOURTAGS";
    }
    function x() {
      return "MANAGETAGSBYOTHERSCLUSTER";
    }
    function $() {
      return "TRASH";
    }
    function P() {
      return "ALL";
    }
    function N() {
      return "review";
    }
    function M() {
      return "tagreview";
    }
    function w() {
      return "facealerts";
    }
    function A() {
      return "HIDDENSTORIES";
    }
    function F() {
      return "TAGSBYOTHERSCLUSTER";
    }
    function O() {
      return "FRIENDS";
    }
    function B() {
      return "FOLLOWCLUSTER";
    }
    function W() {
      return "SEARCH";
    }
    function q() {
      return "timeline";
    }
    function U() {
      return "homepage_stream";
    }
    function V() {
      return "HIDE_FROM_TIMELINE";
    }
    function H() {
      return [E(), $(), I(), D(), T()];
    }
    function G(e, t, n, o) {
      t != null &&
        (t === q() || t === U()) &&
        r("ContentAccessAndControlFalcoEvent").log(function () {
          return {
            control: o,
            event: n,
            is_access: !1,
            is_bulk: !1,
            is_control: !0,
            post_id_str: e,
            surface: z(t),
          };
        });
    }
    function z(e) {
      return e === q()
        ? "post_chevron_menu_timeline"
        : "post_chevron_menu_news_feed";
    }
    function j(e) {
      return e === E();
    }
    function K(e) {
      return e === $();
    }
    function Q(e) {
      switch (e) {
        case "DELETE":
          return "delete";
        case "EDIT_PRIVACY":
          return "edit_privacy";
        case "MOVE_TO_ARCHIVE":
          return "archive";
        case "MOVE_TO_TRASH":
          return "move_to_trash";
        case "UNTAG":
          return "remove_tag";
        case "RESTORE_FROM_ARCHIVE":
          return "restore_from_archive";
        case "RESTORE_FROM_TRASH":
          return "restore_from_trash";
        case "REMOVE_INTERACTION":
          return "delete";
        default:
          return null;
      }
    }
    function X(e) {
      return "category_" + e.toLowerCase();
    }
    function Y(e) {
      return "landing_page_category_" + e.toLowerCase();
    }
    function J(e) {
      return "unimplemented_" + e;
    }
    function Z(e) {
      switch (e) {
        case "UNTAG":
          return "bulk_manage_tags";
        case "REMOVE_INTERACTION":
          return "bulk_manage_interactions";
        default:
          return null;
      }
    }
    function ee(e, t) {
      if (e == null) return null;
      var n = (t != null ? t : 1) - 1;
      return new Date(e, n, 1);
    }
    function te(e, t) {
      if (e == null) return null;
      var n = t != null ? t : 12;
      return new Date(e, n, 0);
    }
    function ne(e) {
      var t = e ? e.getTime() / 1e3 : null;
      return t != null ? t.toString() : null;
    }
    function re(e, t) {
      var n;
      return (n = t.asyncBulkActionInProgressMap.get(e)) != null ? n : !1;
    }
    ((l.AYI_TAXONOMY_POST_CATEGORIES_ORDER = e),
      (l.ActivityLogStoreKey = s),
      (l.isCometActivityLogLoading = u),
      (l.isCategoryEligibleForBulkEditPrivacy = c),
      (l.isCategoryKeyArchiveOrTrash = d),
      (l.isOnManageMode = m),
      (l.shouldShowManageActivityFilter = p),
      (l.getStoreKeyForCategory = _),
      (l.showNumItemsConfirmationDialog = f),
      (l.getFilterKeyForCategory = g),
      (l.getFilterKeyForPerson = h),
      (l.getFilterKeyForDate = y),
      (l.getFilterKeyForMediaContent = C),
      (l.getFilterKeyForAudience = b),
      (l.getStoreKeyForArchive = v),
      (l.getStoreKeyForTrash = S),
      (l.getStoreKeyForLog = R),
      (l.getStoreKeyForManage = L),
      (l.getCategoryKeyForArchive = E),
      (l.getCategoryKeyForStoryArchive = k),
      (l.getCategoryKeyForManage = I),
      (l.getCategoryKeyForManageInteractions = T),
      (l.getCategoryKeyForManageTags = D),
      (l.getCategoryKeyForManageTagsByOthersCluster = x),
      (l.getCategoryKeyForTrash = $),
      (l.getCategoryKeyForAll = P),
      (l.getCategoryKeyForTimelineReview = N),
      (l.getCategoryKeyForTagReview = M),
      (l.getCategoryKeyForPhotoReview = w),
      (l.getCategoryKeyForHiddenFromProfile = A),
      (l.getCategoryKeyForTagsByOthersCluster = F),
      (l.getCategoryKeyForFriends = O),
      (l.getCategoryKeyForFollowCluster = B),
      (l.getCategoryKeyForSearch = W),
      (l.getStoryRenderLocationKeyForTimeline = q),
      (l.getStoryRenderLocationKeyForHomepage = U),
      (l.getActionTypeForHideFromTimeline = V),
      (l.getManageableCategories = H),
      (l.maybeLogControl = G),
      (l.getPrivacyLoggingSourceFromStoryRenderLocation = z),
      (l.onArchivePage = j),
      (l.onTrashPage = K),
      (l.getSingleMenuOptionFromBulkAction = Q),
      (l.getSubCategoryNameForLogging = X),
      (l.getLandingPageCategoryNameForLogging = Y),
      (l.getSourceNameForUnimplementedMenuOption = J),
      (l.getSourceNameForBulkActionKey = Z),
      (l.getStartDate = ee),
      (l.getEndDate = te),
      (l.getTimeFromDate = ne),
      (l.getAsyncBulkActionInProgressForCatgeory = re));
  },
  98,
);
