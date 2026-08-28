__d(
  "AdsMgmtCampaignGroupDynamicStore",
  [
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsMgmtCampaignGroupDynamicStoreSource",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPERefreshTableViewActionFlux",
    "FBLogger",
    "LoadObject",
    "Random",
    "ReverseInteropLoadObjectUtils",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "err",
    "first",
    "gkx",
    "immutable",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("Random").coinflip(10),
      s = "AdsMgmtCampaignGroupDynamicStore.DATA_UPDATED",
      u = (function (t) {
        function n() {
          var e,
            n = new (r("AdsMgmtCampaignGroupDynamicStoreSource"))();
          return (
            (e = t.call(this, n, s, { batchSize: 10 }) || this),
            (e.$AdsMgmtCampaignGroupDynamicStore$p_1 = new Map()),
            (e.toFluxSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function () {
                return c;
              });
            })),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsDraftDraftPublishCompletedDataActionFlux")
                .actionType: {
                var a = r("adsDraftGetIDsToInvalidateAfterPublish")({
                    response: e.response,
                    ancestorIDs: e.ancestorIDs,
                  }),
                  i = o("ReverseInteropLoadObjectUtils").filterWrongTypeIds(
                    a,
                    e.response,
                    "campaign",
                  );
                return (this.$AdsMgmtCampaignGroupDynamicStore$p_2(i), {});
              }
              case o("AdsPERefreshTableViewActionFlux").actionType:
                return e.allLevels === !0 || e.adLevel === "campaignGroup"
                  ? (this.$AdsMgmtCampaignGroupDynamicStore$p_3(), {})
                  : t;
              default:
                return t;
            }
          }),
          (a.getFields = function (t, n, a) {
            var e;
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                t,
                r("AdsObjectTypes").CAMPAIGN_GROUP,
                "AdsMgmtCampaignGroupDynamicStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not CAMPAIGN_GROUP in AdsMgmtCampaignGroupDynamicStore",
                  t,
                ),
                { creatorModuleID: i.id },
              );
            if (!this.isValidKey(t, this.__moduleID))
              return r("LoadObject").withError(
                r("err")(
                  "Invalid id: %s on level: CampaignGroup from %s",
                  t,
                  this.__moduleID,
                ),
                { creatorModuleID: i.id },
              );
            var l = this.GetIdsWithFieldsMemoized(Array.from([t]), n, a),
              s = (e = r("first")(l)) == null ? void 0 : e.value;
            return s == null
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : (this.$AdsMgmtCampaignGroupDynamicStore$p_4(t, s), s);
          }),
          (a.getSingleField = function (n, a) {
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                n,
                r("AdsObjectTypes").CAMPAIGN_GROUP,
                "AdsMgmtCampaignGroupDynamicStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not CAMPAIGN_GROUP in AdsMgmtCampaignGroupDynamicStore",
                  n,
                ),
                { creatorModuleID: i.id },
              );
            if (!this.isValidKey(n, this.__moduleID))
              return r("LoadObject").withError(
                r("err")(
                  "Invalid id: %s on level: CampaignGroup from %s",
                  n,
                  this.__moduleID,
                ),
                { creatorModuleID: i.id },
              );
            var e = t.prototype.getSingleField.call(this, n, a);
            return (this.$AdsMgmtCampaignGroupDynamicStore$p_4(n, e), e);
          }),
          (a.getCachedSingleField = function (n, a) {
            return o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
              n,
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              "AdsMgmtCampaignGroupDynamicStore",
            )
              ? r("LoadObject").withError(
                  r("err")(
                    "ID level mismatch: %s is not CAMPAIGN_GROUP in AdsMgmtCampaignGroupDynamicStore",
                    n,
                  ),
                  { creatorModuleID: i.id },
                )
              : this.isValidKey(n, this.__moduleID)
                ? t.prototype.getCachedSingleField.call(this, n, a)
                : r("LoadObject").withError(
                    r("err")(
                      "Invalid id: %s on level: CampaignGroup from %s",
                      n,
                      this.__moduleID,
                    ),
                    { creatorModuleID: i.id },
                  );
          }),
          (a.getAllCached = function (t, n) {
            var e = [],
              a = [];
            for (var l of t)
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                l,
                r("AdsObjectTypes").CAMPAIGN_GROUP,
                "AdsMgmtCampaignGroupDynamicStore",
              )
                ? a.push([
                    l,
                    r("LoadObject").withError(
                      r("err")(
                        "ID level mismatch: %s is not CAMPAIGN_GROUP in AdsMgmtCampaignGroupDynamicStore",
                        l,
                      ),
                      { creatorModuleID: i.id },
                    ),
                  ])
                : e.push(l);
            if (a.length > 0) {
              var s = this.$AdsMgmtCampaignGroupDynamicStore$p_5(e, n);
              return (
                this.$AdsMgmtCampaignGroupDynamicStore$p_6(e, s),
                s.merge(r("immutable").Map(a))
              );
            }
            var u = this.$AdsMgmtCampaignGroupDynamicStore$p_5(t, n);
            return (this.$AdsMgmtCampaignGroupDynamicStore$p_6(t, u), u);
          }),
          (a.getState = function () {
            return c;
          }),
          (a.toFluxStore = function () {
            return c;
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_5 = function (t, n) {
            var e = this.$AdsMgmtCampaignGroupDynamicStore$p_7(
                "getAllCachedByFields",
                t,
                n,
              ),
              r = this.$AdsMgmtCampaignGroupDynamicStore$p_8(e);
            if (r != null) return r;
            var o = this.$AdsMgmtCampaignGroupDynamicStore$p_9(t, n);
            return (this.$AdsMgmtCampaignGroupDynamicStore$p_10(e, o), o);
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_9 = function (t, n) {
            var e = Array.from(t),
              o = this.GetCachedIdsWithFieldsMemoized(e, n);
            return r("immutable").Map(
              o.map(function (e) {
                var t = e.key,
                  n = e.value;
                return [
                  t,
                  n != null
                    ? n
                    : r("LoadObject").empty({ creatorModuleID: i.id }),
                ];
              }),
            );
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_7 = function (t, n, r) {
            return (
              t + ":" + Array.from(n).join(",") + ":" + Object.keys(r).join(",")
            );
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_8 = function (t) {
            return this.$AdsMgmtCampaignGroupDynamicStore$p_1.get(t);
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_10 = function (t, n) {
            this.$AdsMgmtCampaignGroupDynamicStore$p_1.set(t, n);
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_2 = function (t) {
            this.refetchKeys(t);
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_3 = function () {
            this.refetchAll();
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_6 = function (n, o) {
            if (r("gkx")("8695")) {
              var t = o.some(function (e) {
                return e.hasError();
              });
              if (e && t) {
                var a = o
                    .filter(function (e) {
                      return e.hasError();
                    })
                    .map(function (e) {
                      return e.getError();
                    }),
                  i = a
                    .map(function (e) {
                      return e == null ? void 0 : e.message;
                    })
                    .join(",");
                this.$AdsMgmtCampaignGroupDynamicStore$p_11(Array.from(n), i);
              }
            }
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_4 = function (n, o) {
            if (r("gkx")("8695")) {
              var t = o.hasError();
              if (e && t) {
                var a;
                this.$AdsMgmtCampaignGroupDynamicStore$p_11(
                  [n],
                  (a = o.getError()) == null ? void 0 : a.message,
                );
              }
            }
          }),
          (a.$AdsMgmtCampaignGroupDynamicStore$p_11 = function (t, n) {
            r("FBLogger")("ads").warn(
              "Live AdObject Store %s returns error %s for ids %s",
              i.id,
              n,
              t.join(","),
            );
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
