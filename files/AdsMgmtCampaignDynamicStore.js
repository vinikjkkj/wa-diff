__d(
  "AdsMgmtCampaignDynamicStore",
  [
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsMgmtCampaignDynamicStoreSource",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPERefreshCampaignRowActionFlux",
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
      s = "AdsMgmtCampaignDynamicStore.DATA_UPDATED",
      u = (function (t) {
        function n() {
          var e,
            n = new (r("AdsMgmtCampaignDynamicStoreSource"))();
          return (
            (e = t.call(this, n, s, { batchSize: 10, eagerLoad: !1 }) || this),
            (e.$AdsMgmtCampaignDynamicStore$p_1 = new Map()),
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
            e: {
              var a = e;
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "type" in a &&
                a.type === r("AdsPERefreshCampaignRowActionFlux").actionType &&
                "campaignIds" in a
              ) {
                var i = a.campaignIds;
                return (this.$AdsMgmtCampaignDynamicStore$p_2(i), {});
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "type" in a &&
                a.type ===
                  o("AdsDraftDraftPublishCompletedDataActionFlux").actionType &&
                "response" in a &&
                "ancestorIDs" in a
              ) {
                var l = a.response,
                  s = a.ancestorIDs,
                  u = r("adsDraftGetIDsToInvalidateAfterPublish")({
                    response: l,
                    ancestorIDs: s,
                  }),
                  c = o("ReverseInteropLoadObjectUtils").filterWrongTypeIds(
                    u,
                    l,
                    "ad_set",
                  );
                return (this.$AdsMgmtCampaignDynamicStore$p_2(c), {});
                break e;
              }
              if (
                ((typeof a == "object" && a !== null) ||
                  typeof a == "function") &&
                "type" in a &&
                a.type === o("AdsPERefreshTableViewActionFlux").actionType &&
                "allLevels" in a &&
                "adLevel" in a
              ) {
                var d = a.allLevels,
                  m = a.adLevel;
                return d === !0 || m === "campaign"
                  ? (this.$AdsMgmtCampaignDynamicStore$p_3(), {})
                  : t;
              }
              return t;
            }
          }),
          (a.getFields = function (t, n, a) {
            var e;
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                t,
                r("AdsObjectTypes").CAMPAIGN,
                "AdsMgmtCampaignDynamicStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not CAMPAIGN in AdsMgmtCampaignDynamicStore",
                  t,
                ),
                { creatorModuleID: i.id },
              );
            if (!this.isValidKey(t, this.__moduleID))
              return r("LoadObject").withError(
                r("err")(
                  "Invalid id: %s on level: Campaign from %s",
                  t,
                  this.__moduleID,
                ),
                { creatorModuleID: i.id },
              );
            var l = this.GetIdsWithFieldsMemoized(Array.from([t]), n, a),
              s = (e = r("first")(l)) == null ? void 0 : e.value;
            return s == null
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : (this.$AdsMgmtCampaignDynamicStore$p_4(t, s), s);
          }),
          (a.getSingleField = function (n, a) {
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                n,
                r("AdsObjectTypes").CAMPAIGN,
                "AdsMgmtCampaignDynamicStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not CAMPAIGN in AdsMgmtCampaignDynamicStore",
                  n,
                ),
                { creatorModuleID: i.id },
              );
            if (!this.isValidKey(n, this.__moduleID))
              return r("LoadObject").withError(
                r("err")(
                  "Invalid id: %s on level: Campaign from %s",
                  n,
                  this.__moduleID,
                ),
                { creatorModuleID: i.id },
              );
            var e = t.prototype.getSingleField.call(this, n, a);
            return (this.$AdsMgmtCampaignDynamicStore$p_4(n, e), e);
          }),
          (a.getCachedSingleField = function (n, a) {
            return o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
              n,
              r("AdsObjectTypes").CAMPAIGN,
              "AdsMgmtCampaignDynamicStore",
            )
              ? r("LoadObject").withError(
                  r("err")(
                    "ID level mismatch: %s is not CAMPAIGN in AdsMgmtCampaignDynamicStore",
                    n,
                  ),
                  { creatorModuleID: i.id },
                )
              : this.isValidKey(n, this.__moduleID)
                ? t.prototype.getCachedSingleField.call(this, n, a)
                : r("LoadObject").withError(
                    r("err")(
                      "Invalid id: %s on level: Campaign from %s",
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
                r("AdsObjectTypes").CAMPAIGN,
                "AdsMgmtCampaignDynamicStore",
              )
                ? a.push([
                    l,
                    r("LoadObject").withError(
                      r("err")(
                        "ID level mismatch: %s is not CAMPAIGN in AdsMgmtCampaignDynamicStore",
                        l,
                      ),
                      { creatorModuleID: i.id },
                    ),
                  ])
                : e.push(l);
            if (a.length > 0) {
              var s = this.$AdsMgmtCampaignDynamicStore$p_5(e, n);
              return (
                this.$AdsMgmtCampaignDynamicStore$p_6(e, s),
                s.merge(r("immutable").Map(a))
              );
            }
            var u = this.$AdsMgmtCampaignDynamicStore$p_5(t, n);
            return (this.$AdsMgmtCampaignDynamicStore$p_6(t, u), u);
          }),
          (a.getState = function () {
            return c;
          }),
          (a.toFluxStore = function () {
            return c;
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_5 = function (t, n) {
            var e = this.$AdsMgmtCampaignDynamicStore$p_7(
                "getAllCachedByFields",
                t,
                n,
              ),
              r = this.$AdsMgmtCampaignDynamicStore$p_8(e);
            if (r != null) return r;
            var o = this.$AdsMgmtCampaignDynamicStore$p_9(t, n);
            return (this.$AdsMgmtCampaignDynamicStore$p_10(e, o), o);
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_9 = function (t, n) {
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
          (a.$AdsMgmtCampaignDynamicStore$p_7 = function (t, n, r) {
            return (
              t + ":" + Array.from(n).join(",") + ":" + Object.keys(r).join(",")
            );
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_8 = function (t) {
            return this.$AdsMgmtCampaignDynamicStore$p_1.get(t);
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_10 = function (t, n) {
            this.$AdsMgmtCampaignDynamicStore$p_1.set(t, n);
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_2 = function (t) {
            this.refetchKeys(t);
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_3 = function () {
            this.refetchAll();
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_6 = function (n, o) {
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
                this.$AdsMgmtCampaignDynamicStore$p_11(Array.from(n), i);
              }
            }
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_4 = function (n, o) {
            if (r("gkx")("8695")) {
              var t = o.hasError();
              if (e && t) {
                var a;
                this.$AdsMgmtCampaignDynamicStore$p_11(
                  [n],
                  (a = o.getError()) == null ? void 0 : a.message,
                );
              }
            }
          }),
          (a.$AdsMgmtCampaignDynamicStore$p_11 = function (t, n) {
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
