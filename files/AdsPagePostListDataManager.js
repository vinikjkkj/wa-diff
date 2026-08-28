__d(
  "AdsPagePostListDataManager",
  [
    "fbt",
    "AdsBaseListDataManager",
    "AdsGraphAPI",
    "AdsPagePostBatchLoadedDataAction",
    "AdsPagePostListLoadErrorDataAction",
    "AdsPagePostListLoadedDataAction",
    "AdsPagePostListPartialLoadDataAction",
    "AdsPostFields",
    "GraphAPIPaging",
    "adsPagePostResponseShaper",
    "promiseDone",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "U",
      u = 150,
      c = 15,
      d = ["created_time", "id"],
      m = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.loadFor = function (t, n) {
            this.$AdsPagePostListDataManagerClass$p_1(t, null, null, n);
          }),
          (a.loadForWithStopFn = function (t, n) {
            this.$AdsPagePostListDataManagerClass$p_1(t, n);
          }),
          (a.loadForWithOptions = function (t, n) {
            this.$AdsPagePostListDataManagerClass$p_1(t, null, n);
          }),
          (a.$AdsPagePostListDataManagerClass$p_1 = function (n, a, l, s) {
            var t = this,
              d = {
                fields: o("AdsPostFields").getFieldsWithAdAccountId(),
                primary_fb_page_id: n,
                primary_ig_user_id: s,
                limit: c,
                date_format: e,
              },
              m = babelHelpers.extends({}, d, l != null ? l : {});
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .object("page", n)
                .edge("feed")
                .batched()
                .get(m)
                .then(
                  o("GraphAPIPaging").eachPage(
                    function (e) {
                      return t.$AdsPagePostListDataManagerClass$p_2(n, e.data);
                    },
                    u,
                    a,
                  ),
                ),
              this.__handleSuccess.bind(this, ["load"], n, null),
              this.__handleError.bind(this, ["load"], n, null),
            );
          }),
          (a.getStopFn = function (t) {
            return function (e) {
              var n = e.data;
              return n && n.length > 0 ? +n[n.length - 1].created_time < t : !1;
            };
          }),
          (a.$AdsPagePostListDataManagerClass$p_3 = function (t) {
            var e = new Map();
            (t
              .filter(function (e) {
                return e.promotion_status !== "ineligible";
              })
              .forEach(function (t) {
                ((t.id = t.promotable_id),
                  e.set(t.id, r("adsPagePostResponseShaper")(t)));
              }),
              r("AdsPagePostBatchLoadedDataAction").dispatch(
                { posts: e, versions: null },
                {
                  line: "124",
                  module: "AdsPagePostListDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.$AdsPagePostListDataManagerClass$p_2 = function (t, n) {
            (this.$AdsPagePostListDataManagerClass$p_3(n),
              r("AdsPagePostListPartialLoadDataAction").dispatch(
                { pageID: t, pagePosts: n },
                {
                  line: "133",
                  module: "AdsPagePostListDataManager.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.__onBatchLoaded = function (t) {
            var e = this;
            t.forEach(function (t, n) {
              e.$AdsPagePostListDataManagerClass$p_3(t.data);
              var o = t.data.map(function (e) {
                return r("whitelistObjectKeys")(e, d);
              });
              r("AdsPagePostListLoadedDataAction").dispatch(
                { pageID: n, pagePosts: o },
                {
                  line: "148",
                  module: "AdsPagePostListDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          (a.__onBatchLoadError = function (t) {
            t.forEach(function (e, t) {
              return r("AdsPagePostListLoadErrorDataAction").dispatch(
                { pageID: t },
                {
                  line: "158",
                  module: "AdsPagePostListDataManager.js",
                  moduleID: i.id,
                },
              );
            });
          }),
          (a.__getObjectTypeLabel = function () {
            return s._(/*BTDS*/ "Page");
          }),
          n
        );
      })(r("AdsBaseListDataManager")),
      p = new m(),
      _ = p;
    l.default = _;
  },
  226,
);
