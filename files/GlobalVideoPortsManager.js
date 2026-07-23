__d(
  "GlobalVideoPortsManager",
  ["addToMap", "emptyFunction", "gkx", "removeFromMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.get(t);
      return (
        n != null && (n.portablePlaceContainer = null),
        r("removeFromMap")(e, t)
      );
    }
    var s = r("emptyFunction");
    function u(e) {
      return e.unlinkedAtTimestampMs !== null;
    }
    var c = 1e4,
      d = (function () {
        function t(e) {
          var t = this;
          this.$1 = function (n) {
            var r = function (r) {
              return n(t.$2(r));
            };
            e(r);
          };
        }
        var n = t.prototype;
        return (
          (n.addOrUpdatePlace = function (n) {
            var t = this,
              o = n.coreVideoPlayerMetaData,
              a = n.fullscreenController,
              i = n.implementations,
              l = n.injectCoreVideoStatesRef,
              s = n.isFullscreen,
              c = n.portablePlaceContainer,
              d = n.portablePlaceID,
              m = n.portablePlaceMetaData,
              p = n.portableVideoID,
              _ = n.renderComponents,
              f = n.renderPlaceholder,
              g = n.trackingDataEncrypted,
              h = n.trackingNodes,
              y = n.viewportMarginsForViewability;
            this.$1(function (n) {
              var C,
                b = t.getPortableVideoState(n, p),
                v = (C = n.places.get(d)) != null ? C : null,
                S =
                  v != null && !u(v)
                    ? v.sequenceNumber
                    : n.placesSequenceNumberNext,
                R =
                  S === n.placesSequenceNumberNext
                    ? n.placesSequenceNumberNext + 1
                    : n.placesSequenceNumberNext,
                L = m || {},
                E = n.places;
              if (p != null) {
                var k = t.getPlacesBorrowingThisVideo(E, p);
                k.forEach(function (t) {
                  u(t) &&
                    t.portablePlaceID !==
                      (v == null ? void 0 : v.portablePlaceID) &&
                    (E = e(E, t.portablePlaceID));
                });
              }
              E = r("addToMap")(
                E,
                d,
                babelHelpers.extends({}, v, {
                  coreVideoPlayerMetaData: o,
                  currentVideoID: p,
                  fullscreenController: a,
                  implementations: i,
                  injectCoreVideoStatesRef: l,
                  isFullscreen: s,
                  portablePlaceContainer: c,
                  portablePlaceID: d,
                  portablePlaceMetaData: L,
                  renderComponents: _,
                  renderPlaceholder: f != null ? f : null,
                  sequenceNumber: S,
                  trackingDataEncrypted: g,
                  trackingNodes: h,
                  unlinkedAtTimestampMs: null,
                  viewportMarginsForViewability: y,
                }),
              );
              var I = v !== null && p === null ? v.currentVideoID : null,
                T = n.videos;
              if (I !== null) {
                var D = t.getPlacesBorrowingThisVideo(E, I),
                  x = D.length === 0;
                x && (T = r("removeFromMap")(n.videos, I));
              }
              if (p !== null) {
                var $ = t.updatePreviousPlaceMetaDataInfoForVideo({
                    existingVideoState: b,
                    places: n.places,
                    setPreferredPlaceForVideo: !1,
                    updatedPlaces: E,
                    videoID: p,
                  }),
                  P = $.nextPreviousPlaceMetaData;
                T = r("addToMap")(
                  T,
                  p,
                  b
                    ? babelHelpers.extends({}, b, {
                        portableVideoID: p,
                        previousPlaceMetaData: P,
                      })
                    : {
                        portableVideoID: p,
                        preferredPlaceID: null,
                        previousPlaceMetaData: P,
                      },
                );
              }
              return E === n.places &&
                R === n.placesSequenceNumberNext &&
                T === n.videos
                ? n
                : babelHelpers.extends({}, n, {
                    places: E,
                    placesSequenceNumberNext: R,
                    videos: T,
                  });
            });
          }),
          (n.removePlace = function (n) {
            var t = this,
              o = n.portablePlaceID,
              a = Date.now();
            this.$1(function (n) {
              var i,
                l = (i = n.places.get(o)) != null ? i : null,
                s = l !== null ? l.currentVideoID : null;
              if (l === null) return n;
              var u = n.places,
                c =
                  s !== null
                    ? t
                        .skipUnlinkedPlaces(t.getPlacesBorrowingThisVideo(u, s))
                        .filter(function (e) {
                          return e.portablePlaceID !== o;
                        })
                    : [];
              s !== null && c.length === 0
                ? (u = r("addToMap")(
                    u,
                    o,
                    babelHelpers.extends({}, l, { unlinkedAtTimestampMs: a }),
                  ))
                : (u = e(u, o));
              var d = n.videos;
              if (s !== null) {
                var m = t.getPlacesBorrowingThisVideo(u, s),
                  p = m.length === 0;
                if (p) d = r("removeFromMap")(d, s);
                else {
                  var _ = t.getPortableVideoState(n, s),
                    f = t.updatePreviousPlaceMetaDataInfoForVideo({
                      existingVideoState: _,
                      places: n.places,
                      setPreferredPlaceForVideo: !1,
                      updatedPlaces: u,
                      videoID: s,
                    }),
                    g = f.nextPreviousPlaceMetaData,
                    h = f.shouldUpdatePreviousPlaceMetaDataForVideo;
                  _ != null &&
                    h &&
                    (d = r("addToMap")(
                      d,
                      s,
                      babelHelpers.extends({}, _, {
                        portableVideoID: s,
                        previousPlaceMetaData: g,
                      }),
                    ));
                }
              }
              return u === n.places && d === n.videos
                ? n
                : babelHelpers.extends({}, n, { places: u, videos: d });
            });
          }),
          (n.setPreferredPlaceForVideo = function (t) {
            var e = this,
              n = t.portablePlaceID,
              o = t.portableVideoID;
            this.$1(function (t) {
              var a = e.getPortableVideoState(t, o),
                i = n != null ? t.places.get(n) : null,
                l = e.updatePreviousPlaceMetaDataInfoForVideo({
                  existingPlaceStateForSetPreferredPlaceForVideo: i,
                  existingVideoState: a,
                  places: t.places,
                  preferredPlaceID: n,
                  setPreferredPlaceForVideo: !0,
                  updatedPlaces: t.places,
                  videoID: o,
                }),
                s = l.nextPreviousPlaceMetaData,
                u =
                  a != null
                    ? r("addToMap")(
                        t.videos,
                        o,
                        babelHelpers.extends({}, a, {
                          preferredPlaceID: i != null && n != null ? n : null,
                          previousPlaceMetaData: s,
                        }),
                      )
                    : t.videos;
              return u === t.videos
                ? t
                : babelHelpers.extends({}, t, { videos: u });
            });
          }),
          (n.getPlacesBorrowingThisVideo = function (t, n) {
            var e = [];
            return (
              t.forEach(function (t) {
                t.currentVideoID === n && e.push(t);
              }),
              e
            );
          }),
          (n.skipUnlinkedPlaces = function (t) {
            return t.filter(function (e) {
              return !u(e);
            });
          }),
          (n.selectCurrentPlaceFromThesePlaces = function (t, n) {
            var e,
              r,
              o = t.slice().sort(function (e, t) {
                return e.sequenceNumber - t.sequenceNumber;
              }),
              a =
                (e = o.find(function (e) {
                  return e.portablePlaceID === n;
                })) != null
                  ? e
                  : null,
              i = o.length > 0 ? o[o.length - 1] : null;
            return (r = a != null ? a : i) != null ? r : null;
          }),
          (n.getCurrentPlaceStateForVideo = function (t, n) {
            var e = this.getPortableVideoState(t, n);
            if (e != null && n != null) {
              var r = this.selectCurrentPlaceFromThesePlaces(
                this.skipUnlinkedPlaces(
                  this.getPlacesBorrowingThisVideo(t.places, n),
                ),
                e.preferredPlaceID,
              );
              return r != null ? r : null;
            } else return null;
          }),
          (n.getPortableVideoState = function (t, n) {
            if (n != null) {
              var e = t.videos.get(n);
              return e != null ? e : null;
            }
            return null;
          }),
          (n.updatePreviousPlaceMetaDataInfoForVideo = function (t) {
            var e = this,
              n,
              r,
              o = t.existingPlaceStateForSetPreferredPlaceForVideo,
              a = t.existingVideoState,
              i = t.places,
              l = t.preferredPlaceID,
              s = t.setPreferredPlaceForVideo,
              u = t.updatedPlaces,
              c = t.videoID,
              d = function (n, r) {
                return e.selectCurrentPlaceFromThesePlaces(
                  e.skipUnlinkedPlaces(e.getPlacesBorrowingThisVideo(n, c)),
                  r != null ? r : null,
                );
              },
              m = d(i, a == null ? void 0 : a.preferredPlaceID),
              p = null;
            s
              ? (p = o != null ? d(i, l) : null)
              : (p = d(u, a == null ? void 0 : a.preferredPlaceID));
            var _ =
              m != null &&
              (m == null ? void 0 : m.portablePlaceID) !==
                ((n = p) == null ? void 0 : n.portablePlaceID);
            return {
              nextPreviousPlaceMetaData:
                _ && m != null
                  ? m.portablePlaceMetaData
                  : (r = a == null ? void 0 : a.previousPlaceMetaData) != null
                    ? r
                    : null,
              shouldUpdatePreviousPlaceMetaDataForVideo: _,
            };
          }),
          (n.collectGarbage = function () {
            this.$1(function (e) {
              return e;
            });
          }),
          (n.$2 = function (n) {
            var t = Date.now(),
              o = new Set(),
              a = n.places;
            n.places.forEach(function (n) {
              n.unlinkedAtTimestampMs !== null &&
              t - n.unlinkedAtTimestampMs >= c
                ? (a = e(a, n.portablePlaceID))
                : n.currentVideoID !== null && o.add(n.currentVideoID);
            });
            var i = n.videos;
            return (
              n.videos.forEach(function (e) {
                o.has(e.portableVideoID) ||
                  (i = r("removeFromMap")(i, e.portableVideoID));
              }),
              a === n.places && i === n.videos
                ? n
                : babelHelpers.extends({}, n, { places: a, videos: i })
            );
          }),
          t
        );
      })();
    ((l.isUnlinkedGlobalVideoPortsPlace = u),
      (l.UNLINKED_PLACE_TIMEOUT_MS = c),
      (l.GlobalVideoPortsManager = d));
  },
  98,
);
