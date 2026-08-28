__d(
  "AdsInstagramAccountMediaListRIStoreSource",
  [
    "AdsInstagramAccountMediaListRIStoreSourceServerLoadedQuery.graphql",
    "AdsInstagramAccountMediaListRIStoreSourceServerQuery.graphql",
    "DateTime",
    "InstagramMediaType",
    "InstagramSlipstreamMediaContentType",
    "LoadObject",
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "promiseDone",
    "readQueryToLoadObject",
    "updateLoadedAdAccountsClientSchema",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "AdsInstagramAccountMediaListRIStoreSourceServerQuery.graphql",
            )),
      c =
        s !== void 0
          ? s
          : (s = n(
              "AdsInstagramAccountMediaListRIStoreSourceServerLoadedQuery.graphql",
            )),
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$AdsInstagramAccountMediaListRIStoreSource$p_1 = new Map()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return c;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getGQLParams = function (t) {
            var e = JSON.stringify(t),
              n = this.$AdsInstagramAccountMediaListRIStoreSource$p_1.get(e),
              r = this.$AdsInstagramAccountMediaListRIStoreSource$p_2(t);
            return n ? babelHelpers.extends({}, r, { after: n.after }) : r;
          }),
          (n.enablePaginationMode = function (t, n, r) {
            var e = JSON.stringify(t);
            this.$AdsInstagramAccountMediaListRIStoreSource$p_1.set(e, {
              after: n,
              existingData: r,
            });
          }),
          (n.disablePaginationMode = function (t) {
            var e = JSON.stringify(t);
            this.$AdsInstagramAccountMediaListRIStoreSource$p_1.delete(e);
          }),
          (n.$AdsInstagramAccountMediaListRIStoreSource$p_2 = function (t) {
            var e,
              n,
              o = this.$AdsInstagramAccountMediaListRIStoreSource$p_3(
                t.contentType,
              ),
              a =
                (e = Object.keys(r("InstagramMediaType")).find(function (e) {
                  return r("InstagramMediaType")[e] === o;
                })) != null
                  ? e
                  : "UNKNOWN";
            return {
              caption_text: t.captionText,
              fbidv2: (n = t.instagram_user_id) != null ? n : t.accountID,
              media_type: [a],
              first: t.limit,
              is_threads: !1,
              is_ad: !1,
              order_by: ["CREATION_TIME_DESC"],
            };
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = t[0],
              i = JSON.stringify(a),
              l = this.$AdsInstagramAccountMediaListRIStoreSource$p_1.get(i),
              s = this.__getGQLParams(a);
            r("updateLoadedAdAccountsClientSchema")(
              this.__environment,
              JSON.stringify(a),
            );
            var c = o("RelayHooks")
              .fetchQuery(this.__environment, u, s)
              .toPromise()
              .then(function (t) {
                var n = e.$AdsInstagramAccountMediaListRIStoreSource$p_4(
                  t == null ? void 0 : t.fetch__InstagramUserV2,
                  a,
                );
                return l && l.existingData
                  ? babelHelpers.extends({}, n, {
                      mediaList: [].concat(
                        l.existingData.mediaList,
                        n.mediaList,
                      ),
                    })
                  : n;
              })
              .then(function (t) {
                if (l) {
                  var n;
                  e.$AdsInstagramAccountMediaListRIStoreSource$p_1.set(i, {
                    after: (n = t.after) != null ? n : "",
                    existingData: t,
                  });
                }
                return t;
              })
              .catch(function (r) {
                e.handleFetchQueryError(t, n, r);
              });
            r("promiseDone")(c, function () {
              e.notifyDataChange();
            });
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (t) {
                var n = JSON.stringify(t),
                  o = e.$AdsInstagramAccountMediaListRIStoreSource$p_1.get(n);
                if (o != null && o.existingData)
                  return {
                    key: t,
                    value: r("LoadObject").withValue(o.existingData, {
                      creatorModuleID: i.id,
                    }),
                  };
                var a = r("readQueryToLoadObject")(
                  e.__environment,
                  u,
                  e.__getGQLParams(t),
                  function (n) {
                    return e.$AdsInstagramAccountMediaListRIStoreSource$p_4(
                      n == null ? void 0 : n.fetch__InstagramUserV2,
                      t,
                    );
                  },
                );
                return { key: t, value: a };
              });
            return o;
          }),
          (n.$AdsInstagramAccountMediaListRIStoreSource$p_4 = function (t, n) {
            var e,
              o,
              a,
              i = this,
              l =
                t == null ||
                (e = t.instagram_media_v2) == null ||
                (e = e.page_info) == null
                  ? void 0
                  : e.end_cursor,
              s =
                (o =
                  t == null || (a = t.instagram_media_v2) == null
                    ? void 0
                    : a.nodes) != null
                  ? o
                  : [],
              u = [];
            return (
              s == null ||
                s.forEach(function (e) {
                  var t, n, o, a, l, s, c, d, m, p, _, f;
                  u.push({
                    id: (t = e == null ? void 0 : e.id) != null ? t : "",
                    content_type:
                      i.$AdsInstagramAccountMediaListRIStoreSource$p_5(
                        e == null ? void 0 : e.instagram_media_type,
                      ),
                    display_url:
                      (n = e == null ? void 0 : e.media_url) != null ? n : "",
                    is_sub_media:
                      (o = e == null ? void 0 : e.is_sub_media) != null
                        ? o
                        : !1,
                    taken_at:
                      (e == null ? void 0 : e.creation_time) != null
                        ? r("DateTime")
                            .create(e == null ? void 0 : e.creation_time, 0)
                            .toISOString()
                        : "",
                    thumbnail_url:
                      (a = e == null ? void 0 : e.thumbnail_url) != null
                        ? a
                        : "",
                    video_url:
                      (l = e == null ? void 0 : e.media_url) != null ? l : "",
                    video_metadata: {
                      duration:
                        (s =
                          e == null || (c = e.video_metadata) == null
                            ? void 0
                            : c.duration) != null
                          ? s
                          : 0,
                      height:
                        (d =
                          e == null || (m = e.video_metadata) == null
                            ? void 0
                            : m.height) != null
                          ? d
                          : 0,
                      width:
                        (p =
                          e == null || (_ = e.video_metadata) == null
                            ? void 0
                            : _.width) != null
                          ? p
                          : 0,
                    },
                    legacy_id:
                      (f = e == null ? void 0 : e.media_v1_id) != null ? f : "",
                  });
                }),
              { after: l, mediaList: u, query: n }
            );
          }),
          (n.$AdsInstagramAccountMediaListRIStoreSource$p_5 = function (t) {
            switch (t) {
              case "IMAGE":
                return 1;
              case "VIDEO":
                return 2;
              case "CAROUSEL_V2":
                return 8;
              default:
                return 0;
            }
          }),
          (n.$AdsInstagramAccountMediaListRIStoreSource$p_3 = function (t) {
            switch (t) {
              case r("InstagramSlipstreamMediaContentType")
                .MEDIA_CONTENT_TYPE_PHOTO:
                return 1;
              case r("InstagramSlipstreamMediaContentType")
                .MEDIA_CONTENT_TYPE_VIDEO:
                return 2;
              default:
                return 0;
            }
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = d;
  },
  98,
);
