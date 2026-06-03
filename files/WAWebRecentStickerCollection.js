__d(
  "WAWebRecentStickerCollection",
  [
    "WALogger",
    "WANullthrows",
    "WAWebBaseCollection",
    "WAWebConnModel",
    "WAWebMobilePlatforms",
    "WAWebStickerModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 32,
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e._comparator = function (t, n) {
              return o("WAWebConnModel").Conn.platform ===
                o("WAWebMobilePlatforms").PLATFORMS.ANDROID
                ? e._getWeight(n) - e._getWeight(t)
                : t.index > n.index
                  ? 1
                  : -1;
            }),
            (e._syncStatus = "NONE"),
            (e._weightMap = new Map()),
            (e._sortTrimScale = function () {
              var t = e.length;
              if (t) {
                if ((e.sort(), t > s)) {
                  for (var n = s; n < t; n++)
                    e._weightMap.delete(r("WANullthrows")(e.at(n)).id);
                  e.remove(e.slice(s));
                }
                var o = e.head(),
                  a = e.last();
                (o && a && e._getWeight(o) < 10 && e._getWeight(a) > 0.01) ||
                  e.forEach(function (n, r) {
                    e._weightMap.set(n.id, 1 + 3 * ((t - r) / t));
                  });
              }
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i._getWeight = function (t) {
            return r("WANullthrows")(this._weightMap.get(t.id));
          }),
          (i.enqueue = function (t) {
            t.length !== 0 &&
              (o("WAWebConnModel").Conn.platform ===
              o("WAWebMobilePlatforms").PLATFORMS.ANDROID
                ? this._enqueueAndroid(t)
                : this._enqueueiOS(t));
          }),
          (i.addStickerWithMediaData = function (t) {
            var e = new (o("WAWebStickerModel").StickerModel)(t);
            (e.id || (e.id = e.filehash), this.enqueue([e]));
          }),
          (i._enqueueAndroid = function (t) {
            var e = this;
            (t.forEach(function (t) {
              (e.get(t.id) || (e._weightMap.set(t.id, 0), e.add(t)),
                e.forEach(function (n) {
                  var r = e._getWeight(n);
                  (n.id === t.id ? (r += 1) : (r *= 0.9),
                    e._weightMap.set(n.id, Math.round(1e3 * r) / 1e3));
                }));
            }),
              this._sortTrimScale());
          }),
          (i._enqueueiOS = function (t) {
            var e = this;
            this.forEach(function (e, t) {
              e.index = s + t;
            });
            var n = new Set(
                t.map(function (e) {
                  return e.id;
                }),
              ),
              r = t
                .reduce(function (e, t) {
                  return n.has(t.id) ? (n.delete(t.id), [t].concat(e)) : e;
                }, [])
                .slice(0, s);
            (r.forEach(function (t, n) {
              var r = e.get(t.id);
              r
                ? (r.index = n)
                : e.add({
                    id: t.id,
                    deprecatedMms3Url: t.deprecatedMms3Url,
                    directPath: t.directPath,
                    filehash: t.filehash,
                    encFilehash: t.encFilehash,
                    mediaKey: t.mediaKey,
                    mediaKeyTimestamp: t.mediaKeyTimestamp,
                    width: t.width,
                    height: t.height,
                    size: t.size,
                    mimetype: t.mimetype,
                    type: t.type,
                    index: n,
                  });
            }),
              this.sort(),
              this.remove(this.slice(s)));
          }),
          (i.sync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield this._sync();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i._sync = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this._syncStatus !== "INPROGRESS") {
                this._syncStatus = "INPROGRESS";
                try {
                  (yield this.findQuery({}, { set: !0 }),
                    this.sort(),
                    (this._syncStatus = "SUCCESS"));
                } catch (t) {
                  (o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "collection:recent_sticker:_sync error ",
                      ])),
                  ),
                    (this._syncStatus = "FAILURE"));
                }
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.isSynced = function () {
            return (
              this._syncStatus === "SUCCESS" || this._syncStatus === "FAILURE"
            );
          }),
          (i.reset = function () {
            return (
              (this._syncStatus = "NONE"),
              this._weightMap.clear(),
              t.prototype.reset.call(this)
            );
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = o("WAWebStickerModel").StickerModel;
    var c = new u();
    l.RecentStickerCollection = c;
  },
  98,
);
