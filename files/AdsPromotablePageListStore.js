__d(
  "AdsPromotablePageListStore",
  [
    "AdsAccountStore",
    "AdsManagerIGLoginUtils",
    "AdsPromotablePageListDataManager",
    "AdsPromotablePageListStoreSource",
    "CurrentUser",
    "ReverseInteropStoreBase",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "gkx",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPromotablePageListStore.DATA_UPDATED.",
      s = (function (t) {
        function n() {
          var n;
          return (
            (n =
              t.call(this, new (r("AdsPromotablePageListStoreSource"))(), e) ||
              this),
            (n.$AdsPromotablePageListStore$p_2 = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.getFor();
              },
              { name: i.id },
            )),
            (n.getSelector = r("adsCreateSelector")(
              [n.$AdsPromotablePageListStore$p_2],
              function (t) {
                return t;
              },
              {
                equal: function (t, n) {
                  return r("gkx")("13081")
                    ? t.loadState === n.loadState &&
                        r("shallowArrayEqual")(t.list, n.list)
                    : !1;
                },
                name: i.id,
              },
            )),
            (n.source = new (r("AdsPromotablePageListStoreSource"))()),
            (n.userId = o("CurrentUser").getID()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getFor = function () {
            var e = this.getSingleValue(this.userId.toString(), {});
            return this.$AdsPromotablePageListStore$p_1(e);
          }),
          (a.$AdsPromotablePageListStore$p_1 = function (t) {
            if (t.hasError() && t.getError() != null)
              return { loadState: "ERROR", list: [] };
            if (t.isLoading()) return { loadState: "LOADING", list: [] };
            if (t.hasValue()) {
              var e = t.getValue();
              if (Array.isArray(e)) {
                var n = r("AdsAccountStore").getSelectedAccount().getValue(),
                  a = o("AdsManagerIGLoginUtils").getIsIGLogin(n)
                    ? e
                    : r("AdsPromotablePageListDataManager").filterIABPages(e);
                return {
                  loadState: "LOADED",
                  list: a
                    .map(function (e) {
                      return e.id;
                    })
                    .filter(Boolean),
                };
              }
            }
            return { loadState: "NOT_LOADED", list: [] };
          }),
          (a.reloadPromotablePagesData = function (t) {
            this.source.__fetchQuery(t, [], !0);
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    s.__moduleID = i.id;
    var u = new s();
    l.default = u;
  },
  98,
);
