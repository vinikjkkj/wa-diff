__d(
  "WAWebRecentEmojiCollection",
  [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebRecentEmojiModel",
    "WAWebUserPrefsKeys",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 36,
      u = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this) || this),
            (n.dirty = !1),
            n.listenTo(
              n,
              "change:weight change:length",
              r("lodash").debounce(n._sortTrimScale, e),
            ),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a._sortTrimScale = function () {
            var e = this.length;
            e && (this.sort(), e > s && this.remove(this.slice(s)));
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this), (this.dirty = !1));
          }),
          (a.increment = function (t) {
            var e = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t) || t;
            (this.get(e) || this.add({ id: e, weight: 0 }),
              this.forEach(function (t) {
                t.id === e ? (t.weight += 1) : (t.weight *= 0.9);
              }),
              (this.dirty = !0));
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((u.cachePolicy = {
      id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.RECENT_EMOJI_COLLECTION,
      policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
      delay: 2e3,
    }),
      (u.comparator = function (e, t) {
        return e.weight > t.weight ? -1 : 1;
      }),
      (u.model = r("WAWebRecentEmojiModel")));
    var c = new u();
    l.RecentEmojiCollection = c;
  },
  98,
);
