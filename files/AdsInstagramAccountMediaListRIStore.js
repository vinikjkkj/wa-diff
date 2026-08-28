__d(
  "AdsInstagramAccountMediaListRIStore",
  [
    "AdsImageIDClasses",
    "AdsInstagramAccountMediaListRIStoreSource",
    "LoadObject",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "immutable",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsInstagramAccountMediaListRIStore.DATA_UPDATED",
      s = { after: null, mediaList: null, query: null },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsInstagramAccountMediaListRIStoreSource"))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (e) {
                return c.get(e);
              });
            })),
            (n.$AdsInstagramAccountMediaListRIStore$p_1 = o),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function (t) {
            return this.getSingleValue(t, s);
          }),
          (a.getMore = function (t) {
            var e,
              n,
              r = this.getSingleValue(t, s),
              o =
                (e = (n = r.getValue()) == null ? void 0 : n.after) != null
                  ? e
                  : "";
            return !r.isDone() || o === ""
              ? r
              : (this.setCachedValue(t, r.updating(), s),
                this.$AdsInstagramAccountMediaListRIStore$p_2(
                  t,
                  o,
                  r.getValue(),
                ),
                r.updating());
          }),
          (a.$AdsInstagramAccountMediaListRIStore$p_2 = function (t, n, r) {
            (this.$AdsInstagramAccountMediaListRIStore$p_1.enablePaginationMode(
              t,
              n,
              r,
            ),
              this.refetchKeys([t]));
          }),
          (a.getImageResponse = function (t) {
            var e,
              n = this.getSingleValue(t, s),
              r = (e = n.getValue()) == null ? void 0 : e.after;
            return this.$AdsInstagramAccountMediaListRIStore$p_3(n, r);
          }),
          (a.getMoreImages = function (t) {
            var e,
              n = this.getMore(t),
              r = (e = n.getValue()) == null ? void 0 : e.after;
            return this.$AdsInstagramAccountMediaListRIStore$p_3(n, r);
          }),
          (a.getAllImageData = function () {
            var e = this.__reverseInteropHandler
                .getLoadedKeysAndFields()
                .keys(),
              t = new Map();
            for (var n of e) {
              var o = this.getCachedSingleValue(n, s);
              if (o.hasValue()) {
                var a = o.getValueEnforcing();
                if (a) {
                  var i = this.$AdsInstagramAccountMediaListRIStore$p_4(a);
                  t.set(a.query, i);
                }
              }
            }
            var l = new Map();
            return (
              t.forEach(function (e, t) {
                e.imageData.forEach(function (e, t) {
                  l.set(t, e);
                });
              }),
              r("immutable").Map(l)
            );
          }),
          (a.$AdsInstagramAccountMediaListRIStore$p_3 = function (t, n) {
            var e,
              a = new Map(),
              l = new Set();
            (e = t.getValue()) == null ||
              e.mediaList.forEach(function (e) {
                var t = o("AdsImageIDClasses").AdsImageID.fromExternalURL(
                  e.display_url,
                  e.id,
                );
                (l.add(t), a.set(t, e));
              });
            var s = {
              after: n,
              imageData: r("immutable").Map(a),
              imageIDs: o("immutable").OrderedSet(l),
            };
            return r("LoadObject").withValue(s, { creatorModuleID: i.id });
          }),
          (a.$AdsInstagramAccountMediaListRIStore$p_4 = function (t) {
            var e = new Map(),
              n = new Set();
            t != null &&
              t.mediaList &&
              t.mediaList.forEach(function (t) {
                var r = o("AdsImageIDClasses").AdsImageID.fromExternalURL(
                  t.display_url,
                  t.id,
                );
                (n.add(r), e.set(r, t));
              });
            var a = {
              after: t.after,
              imageData: r("immutable").Map(e),
              imageIDs: o("immutable").OrderedSet(n),
            };
            return a;
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
