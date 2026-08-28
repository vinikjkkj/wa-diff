__d(
  "AdsCustomCarouselTabUtils",
  [
    "AdsAPIObjectives",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupSemanticFields",
    "AdsChildAttachmentsUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "Result",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = 1;
    function u(e, t, n) {
      var a;
      if (!o("AdsChildAttachmentsUtils").isCarouselAd(e)) return !1;
      var i = t.objective;
      if (i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) return !0;
      var l =
          (a = e.creative) == null || (a = a.object_story_spec) == null
            ? void 0
            : a.template_data,
        s = n();
      if (s == null) {
        var u;
        s = (u = e.creative) == null ? void 0 : u.product_set_id;
      }
      return l != null && s != null;
    }
    function c(e) {
      var t = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(e);
      return u(e.adgroup, e.campaignGroup, function () {
        return r("AdsAdgroupSemanticFields").productSetID.get(t, e.adgroup);
      });
    }
    function d(e) {
      var t = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(e);
      if (!c(e))
        return o("AdsChildAttachmentsUtils").getChildAttachmentCount(
          e.adgroup,
          t,
        );
      var n = r("AdsAdgroupSemanticFields").multiShareEndCard.get(t, e.adgroup),
        a = r("AdsAdgroupSemanticFields").childAttachments.get(t, e.adgroup);
      return o("Result").withSuccess((a ? a.size : 1) + (n === !0 ? 1 : 0));
    }
    function m(e) {
      return d(e).map(function (e) {
        return e >= 0;
      });
    }
    function p(t, n) {
      var a = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(t);
      if (!c(t))
        return o("AdsChildAttachmentsUtils").getChildAttachmentTypeFromPath(
          t.adgroup,
          a,
          n,
        );
      var i = r("AdsAdgroupSemanticFields").multiShareEndCard.get(a, t.adgroup),
        l = r("AdsAdgroupSemanticFields").childAttachments.get(a, t.adgroup);
      if (!l) {
        if (n === e)
          return o("Result").withSuccess(
            r("AdsAdgroupChildAttachmentTypes").DYNAMIC,
          );
        if (i === !0 && n === s)
          return o("Result").withSuccess(
            r("AdsAdgroupChildAttachmentTypes").MULTI_SHARE_END,
          );
      }
      return i === !0 && l && n === l.size
        ? o("Result").withSuccess(
            r("AdsAdgroupChildAttachmentTypes").MULTI_SHARE_END,
          )
        : o("AdsChildAttachmentsUtils").getChildAttachmentTypeFromPath(
            t.adgroup,
            a,
            n,
          );
    }
    ((l.shouldUseCustomCarouselTabsRelay = u),
      (l.shouldUseCustomCarouselTabs = c),
      (l.getCarouselTabCount = d),
      (l.getHasCarouselTabs = m),
      (l.getCardType = p));
  },
  98,
);
