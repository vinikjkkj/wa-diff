__d(
  "AdsDraftPublishReducerPlugins",
  [
    "AdAsyncRequestStatus",
    "AdDraftPublishStatuses",
    "AdsCreativeFlexPushModelPublishUtils",
    "AdsDraftFragmentStore",
    "AdsDraftFragmentUtils",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishUIProviderActionType",
    "AdsPEFragmentSelectors",
    "AdsPEInstantDeleteActionFlux",
    "Laminar",
    "adsDraftGetFragmentStatusesFromPublishResponse",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["campaignGroupIDs", "campaignIDs"],
      s,
      u = ["campaign", "ad_set", "ad"],
      c = function (t) {
        var e = t.ad_object_id;
        return e;
      };
    function d(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          return (t[e] = o("AdsPEFragmentSelectors").fragmentsByLevel[e]);
        }),
        t
      );
    }
    function m(e, t, n) {
      if (!(t != null && t.size)) return e;
      var o = e.fragments.withMutations(function (e) {
        u.forEach(function (o) {
          var a,
            i = (a = t.get(o)) != null ? a : [];
          i.forEach(function (t) {
            var a,
              i,
              l,
              s,
              u,
              c =
                (a = n[o]) == null || (a = a.get(t)) == null
                  ? void 0
                  : a.getValue();
            e.set(t, {
              action:
                (i = c == null ? void 0 : c.action) != null ? i : "modify",
              ad_object_id: t,
              ad_object_type: o,
              fragment_id:
                (l = c == null ? void 0 : c.fragmentID) != null ? l : "",
              status: r("AdAsyncRequestStatus").INITIAL,
              update_time:
                (s = (u = e.get(t)) == null ? void 0 : u.update_time) != null
                  ? s
                  : 0,
            });
          });
        });
      });
      return e.merge({ fragments: o });
    }
    function p(e, t) {
      var n = e.fragments.withMutations(function (e) {
        t.forEach(function (t) {
          var n = e.get(t.ad_object_id),
            r;
          if (n == null) r = !0;
          else {
            var a,
              i,
              l =
                ((a = n.update_time) != null ? a : 0) <
                ((i = t.update_time) != null ? i : 0),
              s =
                n.fragment_id === t.fragment_id ||
                (n.fragment_id === "" && t.fragment_id !== ""),
              u =
                o("AdsDraftFragmentUtils").PENDING_STATUSES.has(n.status) && s;
            r = l || u;
          }
          r && e.set(t.ad_object_id, t);
        });
      });
      return n === e.fragments ? e : e.merge({ fragments: n });
    }
    function _(e, t, n) {
      var a = r("adsDraftGetFragmentStatusesFromPublishResponse")(t),
        i = p(e, a);
      if (e === i) return i;
      var l = a.map(c),
        s = i.completedAdObjectIDs.union(
          a
            .filter(function (e) {
              return !o("AdsDraftFragmentUtils").PENDING_STATUSES.has(e.status);
            })
            .map(c),
        );
      return i.merge({
        requestedAdObjectIDs: i.requestedAdObjectIDs.subtract(l),
        pendingAdObjectIDs: i.pendingAdObjectIDs.union(l).subtract(s),
        completedAdObjectIDs: s,
        publishID: t.async_request_set_id,
        draftID: n,
      });
    }
    var f = {
        reduce: function (t, n) {
          var e = n.draft,
            o = r("AdsDraftPublishDataProvider")
              .getInitialState()
              .merge({ fragments: t.fragments }),
            a = e.publish_status,
            i = a == null ? void 0 : a.status;
          return i != null && i === r("AdDraftPublishStatuses").IN_PROGRESS
            ? _(o, a, e.id)
            : o;
        },
      },
      g = {
        reduce: (s = o("Laminar")).withFluxSelectors(d(u), function (e, t, n) {
          var r,
            o,
            a = t.selection,
            i = u.flatMap(function (e) {
              var t, n;
              return (t =
                a == null || (n = a.get(e)) == null ? void 0 : n.toArray()) !=
                null
                ? t
                : [];
            }),
            l = (r = e.publishID) != null ? r : t.fakePublishID,
            s = (o = e.draftID) != null ? o : t.draftID;
          return i.length === 0
            ? e.merge({ publishID: l, draftID: s })
            : m(e, a, n).merge({
                requestedAdObjectIDs: e.requestedAdObjectIDs.subtract(i),
                pendingAdObjectIDs: e.pendingAdObjectIDs.union(i),
                completedAdObjectIDs: e.completedAdObjectIDs.subtract(i),
                publishID: l,
                draftID: s,
              });
        }),
      },
      h = {
        reduce: function (t, n) {
          if (!n.asyncRequestSetID || t.pendingAdObjectIDs.size === 0) return t;
          var e = t;
          return (
            (e = e.set(
              "requestMetadata",
              e.requestMetadata.set(n.asyncRequestSetID, {
                object_creation_source: n.object_creation_source,
                immediate: n.immediate,
              }),
            )),
            (t.publishID == null || n.fakePublishID === t.publishID) &&
              (e = e.set("publishID", n.asyncRequestSetID)),
            e
          );
        },
      },
      y = {
        reduce: function (t, n) {
          var e = n.draftID,
            r = n.response;
          return r ? _(t, r, e) : t;
        },
      };
    function C(e) {
      var t = r("immutable").Set(),
        n = function () {
          if (i.ad_object_type !== "ad") return 0;
          var e = r("AdsDraftFragmentStore").getCached(i.fragment_id);
          if (e == null || !e.values) return 0;
          var n = e.values.find(function (e) {
            return e.field === "creative";
          });
          if (!n) return 0;
          var a = o(
            "AdsCreativeFlexPushModelPublishUtils",
          ).getPushMetadataIdsFromJSONString(n.new_value);
          if (a.length === 0) return 0;
          var l = o(
              "AdsCreativeFlexPushModelPublishUtils",
            ).getPushMetadataIdsFromJSONString(n.old_value),
            s = o(
              "AdsCreativeFlexPushModelPublishUtils",
            ).countNetNewPushMetadataIds(a, l);
          if (s > 0) {
            var u = new Set(l),
              c = a.filter(function (e) {
                return !u.has(e);
              });
            t = t.union(r("immutable").Set(c));
          }
        },
        a;
      for (var i of e) a = n();
      return t;
    }
    var b = {
      reduce: function (t, n) {
        var e = n.response;
        if (!e) return t;
        var o = r("adsDraftGetFragmentStatusesFromPublishResponse")(e),
          a = p(t, o),
          i = o.map(c),
          l = a.requestedAdObjectIDs.subtract(i),
          s = a.pendingAdObjectIDs.subtract(i),
          u = C(o);
        return l.size + s.size
          ? a.merge({
              requestedAdObjectIDs: l,
              pendingAdObjectIDs: s,
              completedAdObjectIDs: a.completedAdObjectIDs.union(i),
              publishID: e.async_request_set_id,
              pushMetadataIds: u,
            })
          : r("AdsDraftPublishDataProvider")
              .getInitialState()
              .merge({ fragments: a.fragments, pushMetadataIds: u });
      },
    };
    function v(e, t, n, r) {
      var o = u.flatMap(function (e) {
        var n, r;
        return (n =
          t == null || (r = t.get(e)) == null ? void 0 : r.toArray()) != null
          ? n
          : [];
      });
      return o.length === 0
        ? e
        : m(e, t, n).merge({
            requestedAdObjectIDs: e.requestedAdObjectIDs.union(o),
            lastActionType: r != null ? r : e.lastActionType,
          });
    }
    var S = {
        reduce: s.withFluxSelectors(d(["ad"]), function (e, t, n) {
          var o,
            a = r("immutable").Map(
              ((o = {}), (o.ad = r("immutable").OrderedSet(t.ids)), o),
            );
          return v(e, a, n, r("AdsDraftPublishUIProviderActionType").PUBLISH);
        }),
      },
      R = {
        reduce: s.withFluxSelectors(d(["ad_set"]), function (e, t, n) {
          var o,
            a = t.campaignIDs,
            i = r("immutable").Map(
              ((o = {}), (o.ad_set = r("immutable").OrderedSet(a)), o),
            );
          return v(e, i, n, r("AdsDraftPublishUIProviderActionType").PUBLISH);
        }),
      },
      L = {
        reduce: s.withFluxSelectors(d(["campaign"]), function (e, t, n) {
          var o,
            a = r("immutable").Map(
              ((o = {}),
              (o.campaign = r("immutable").OrderedSet(
                t.ids || t.campaignGroupIDs,
              )),
              o),
            );
          return v(e, a, n, r("AdsDraftPublishUIProviderActionType").PUBLISH);
        }),
      },
      E = {
        reduce: s.withFluxSelectors(
          d(["campaign", "ad_set"]),
          function (t, n, o) {
            var a,
              i = n.campaignGroupIDs,
              l = n.campaignIDs,
              s = babelHelpers.objectWithoutPropertiesLoose(n, e);
            if (s.isInstantPublish === !1) return t;
            var u = r("immutable").Map(
              ((a = {}),
              (a.campaign = r("immutable").OrderedSet(i)),
              (a.ad_set = r("immutable").OrderedSet(l)),
              a),
            );
            return v(t, u, o, r("AdsDraftPublishUIProviderActionType").PUBLISH);
          },
        ),
      },
      k = {
        reduce: s.withFluxSelectors(d(u), function (e, t, n) {
          var o,
            a,
            i = t.actionType,
            l = t.adgroupIDs,
            s = t.campaignGroupIDs,
            u = t.campaignIDs,
            c = (a = r("immutable")).Map(
              ((o = {}),
              (o.campaign = a.OrderedSet(s)),
              (o.ad_set = a.OrderedSet(u)),
              (o.ad = a.OrderedSet(l)),
              o),
            ),
            d =
              i === r("AdsPEInstantDeleteActionFlux").actionType
                ? r("AdsDraftPublishUIProviderActionType").DELETE
                : r("AdsDraftPublishUIProviderActionType").PUBLISH;
          return v(e, c, n, d);
        }),
      };
    ((l.CurrentDraftLoadedReducerPlugin = f),
      (l.PublishRequestedReducerPlugin = g),
      (l.PublishResponseReducerPlugin = h),
      (l.PublishInProgressReducerPlugin = y),
      (l.PublishEndReducerPlugin = b),
      (l.AdgroupInstantPublishReducerPlugin = S),
      (l.CampaignInstantPublishReducerPlugin = R),
      (l.CampaignGroupInstantPublishReducerPlugin = L),
      (l.SplitTestInstantPublishReducerPlugin = E),
      (l.BatchInstantPublishReducerPlugin = k));
  },
  98,
);
