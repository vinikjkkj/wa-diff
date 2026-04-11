__d(
  "WAWebStickerPackStickerCollection",
  [
    "Promise",
    "WATimeUtils",
    "WAWebFetchFirstPartyStickersAction",
    "WAWebNoop",
    "WAWebStickerCollection",
    "WAWebStickerConstants",
    "WAWebStickerPackModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a(e, n) {
          var r;
          ((r = t.call(this) || this),
            (r.stickerPackId = e),
            (r.isFirstParty = n),
            (r._firstPartyFetchTimestamp = null));
          var o = a._cache[r.stickerPackId];
          if (o) return o || babelHelpers.assertThisInitialized(r);
          var i,
            l = r;
          return (
            Object.defineProperty(r, "fetchState", {
              get: function () {
                return i;
              },
              set: function (t) {
                i !== t && ((i = t), l.trigger("change:fetchState", t));
              },
            }),
            r
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.fetch = function (a) {
            var t,
              i = this,
              l =
                this.isFirstParty &&
                o("WATimeUtils").unixTime() -
                  ((t = this._firstPartyFetchTimestamp) != null ? t : 0) >=
                  o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT;
            if (
              ((a === !0 || l) &&
                this.fetchState !==
                  o("WAWebStickerCollection").FETCH_STATE.PENDING &&
                delete this._fetchPromise,
              this._fetchPromise)
            )
              return this._fetchPromise;
            if (
              ((this.fetchState = o(
                "WAWebStickerCollection",
              ).FETCH_STATE.PENDING),
              o("WAWebStickerPackModel").StickerPackModel.isPlaceholderId(
                this.stickerPackId,
              ))
            )
              return (
                (this._fetchPromise = new (e || (e = n("Promise")))(
                  r("WAWebNoop"),
                )),
                this._fetchPromise
              );
            var s;
            if (this.isFirstParty)
              ((this._firstPartyFetchTimestamp = o("WATimeUtils").unixTime()),
                (s = o(
                  "WAWebFetchFirstPartyStickersAction",
                ).fetchFirstPartyStickers(this.stickerPackId)));
            else return (e || (e = n("Promise"))).resolve();
            return (
              (this._fetchPromise = s
                .then(function (e) {
                  var t = Math.max(i.length || e.length);
                  (i._resetRange(0, t, e),
                    (i.fetchState = o(
                      "WAWebStickerCollection",
                    ).FETCH_STATE.SUCCESS));
                })
                .catch(function () {
                  i.fetchState = o("WAWebStickerCollection").FETCH_STATE.ERROR;
                })),
              this._fetchPromise
            );
          }),
          (i._resetRange = function (t, n, r) {
            var e = this;
            this._forEachInRange(t, n, function (n, o) {
              var a = r[o - t];
              n
                ? a
                  ? n.id === a.id
                    ? n.set(a)
                    : (e.remove(n), e.add(a))
                  : e.remove(n)
                : a && e.add(a);
            });
          }),
          (i._forEachInRange = function (t, n, r) {
            for (var e = t; e < n; e++) {
              var o = this.at(e);
              r(o, e);
            }
          }),
          a
        );
      })(o("WAWebStickerCollection").StickerCollectionImpl);
    ((s._cache = {}),
      (s.comparator = function (e, t) {
        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
      }),
      (l.default = s));
  },
  98,
);
