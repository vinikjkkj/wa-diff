__d(
  "WAWebStickerPackCollectionMd",
  [
    "$InternalEnum",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebAuraGating",
    "WAWebBaseCollection",
    "WAWebFetchFirstPartyStickerPacksAction",
    "WAWebL10N",
    "WAWebStickerConstants",
    "WAWebStickerPackModelMd",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored([
        "INITIAL",
        "PENDING",
        "SUCCESS",
        "ERROR",
      ]),
      m = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.fetchState = d.INITIAL),
            (e.packFetchState = new Map()),
            (e.$StickerPackCollection$p_1 = null),
            (e.$StickerPackCollection$p_2 = new Map()),
            (e.$StickerPackCollection$p_3 = new Set()),
            (e.$StickerPackCollection$p_4 = null),
            (e.$StickerPackCollection$p_5 = new Map()),
            (e.$StickerPackCollection$p_6 = null),
            (e.$StickerPackCollection$p_7 = new Map()),
            e.listenTo(r("WAWebL10N"), "locale_change", function () {
              return e.$StickerPackCollection$p_8();
            }),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.add = function (n, r) {
            var e = this;
            try {
              return t.prototype.add.call(this, n, r);
            } finally {
              this.$StickerPackCollection$p_3.forEach(function (t) {
                e.get(t) != null && e.$StickerPackCollection$p_3.delete(t);
              });
            }
          }),
          (a.$StickerPackCollection$p_8 = function () {
            (this.$StickerPackCollection$p_9(), this.reset());
          }),
          (a.$StickerPackCollection$p_9 = function () {
            var e;
            ((e = this.$StickerPackCollection$p_6) == null || e.abort(),
              (this.$StickerPackCollection$p_6 = null),
              this.$StickerPackCollection$p_7.forEach(function (e) {
                return e.abort();
              }),
              this.$StickerPackCollection$p_7.clear(),
              this.$StickerPackCollection$p_10(),
              this.$StickerPackCollection$p_11(),
              (this.$StickerPackCollection$p_1 = null),
              this.$StickerPackCollection$p_2.clear(),
              (this.$StickerPackCollection$p_4 = null),
              this.$StickerPackCollection$p_5.clear());
          }),
          (a.$StickerPackCollection$p_12 = function (t) {
            t !== this.fetchState &&
              ((this.fetchState = t), this.trigger("change:fetchState", t));
          }),
          (a.$StickerPackCollection$p_10 = function () {
            this.$StickerPackCollection$p_12(d.INITIAL);
          }),
          (a.$StickerPackCollection$p_13 = function (t, n) {
            n !== this.packFetchState.get(t) &&
              (this.packFetchState.set(t, n),
              this.trigger("change:packFetchState", t, n));
          }),
          (a.$StickerPackCollection$p_11 = function () {
            (this.packFetchState.clear(),
              this.$StickerPackCollection$p_3.clear(),
              this.trigger("change:packFetchState"));
          }),
          (a.$StickerPackCollection$p_14 = function (t, n, r) {
            var e = this;
            (this.$StickerPackCollection$p_15(t, n, function (n, o) {
              var a = r[o - t];
              if (!n) a && e.add(a);
              else if (a)
                n.id === a.id &&
                (n.imageDataHash !== a.imageDataHash || n.index !== a.index)
                  ? (e.remove(n, { silent: !0 }), e.add(a))
                  : (e.remove(n), e.add(a));
              else for (var i = n; i; ) (e.remove(i), (i = e.at(o)));
            }),
              this.$StickerPackCollection$p_11(),
              this.$StickerPackCollection$p_2.clear(),
              this.$StickerPackCollection$p_5.clear());
          }),
          (a.$StickerPackCollection$p_15 = function (t, n, r) {
            for (var e = t; e < n; e++) {
              var o = this.at(e);
              r(o, e);
            }
          }),
          (a.fetch = async function () {
            var t,
              n = r("WAWebAuraGating").isStickersEnabled(),
              a =
                this.fetchState === d.SUCCESS &&
                o("WATimeUtils").unixTime() -
                  ((t = this.$StickerPackCollection$p_1) != null ? t : 0) <
                  o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT &&
                this.$StickerPackCollection$p_4 === n;
            if (!(this.fetchState === d.PENDING || a)) {
              (this.$StickerPackCollection$p_12(d.PENDING),
                (this.$StickerPackCollection$p_1 = o("WATimeUtils").unixTime()),
                (this.$StickerPackCollection$p_4 = n),
                (this.$StickerPackCollection$p_6 = new AbortController()));
              try {
                var i = await o(
                    "WAWebFetchFirstPartyStickerPacksAction",
                  ).fetchFirstPartyStickerPacks({
                    signal: this.$StickerPackCollection$p_6.signal,
                  }),
                  l = Math.max(this.length, i.length);
                (this.$StickerPackCollection$p_14(0, l, i),
                  this.$StickerPackCollection$p_12(d.SUCCESS));
              } catch (t) {
                var u = r("getErrorSafe")(t);
                if (
                  (this.$StickerPackCollection$p_12(d.ERROR),
                  u.name === o("WAAbortError").ABORT_ERROR)
                ) {
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "First party sticker packs request cancelled",
                      ])),
                  );
                  return;
                }
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "First party sticker packs request failed: error",
                      ])),
                  )
                  .catching(u)
                  .sendLogs("sticker-packs-fetch-request-failed");
              }
            }
          }),
          (a.fetchStickerPack = async function (t) {
            var e;
            if (t) {
              if (this.get(t)) {
                this.$StickerPackCollection$p_3.delete(t);
                return;
              }
              var n = r("WAWebAuraGating").isStickersEnabled(),
                a = this.packFetchState.get(t),
                i =
                  (e = this.$StickerPackCollection$p_2.get(t)) != null ? e : 0,
                l =
                  a === d.SUCCESS &&
                  o("WATimeUtils").unixTime() - i <
                    o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT &&
                  this.$StickerPackCollection$p_5.get(t) === n;
              if (!(a === d.PENDING || l)) {
                (this.$StickerPackCollection$p_2.set(
                  t,
                  o("WATimeUtils").unixTime(),
                ),
                  this.$StickerPackCollection$p_5.set(t, n));
                var s = new AbortController();
                (this.$StickerPackCollection$p_7.set(t, s),
                  await this.$StickerPackCollection$p_16(t, s));
              }
            }
          }),
          (a.$StickerPackCollection$p_16 = async function (t, n) {
            try {
              this.$StickerPackCollection$p_13(t, d.PENDING);
              var e = await o(
                "WAWebFetchFirstPartyStickerPacksAction",
              ).fetchFirstPartyStickerPack({ id: t, signal: n.signal });
              if (this.$StickerPackCollection$p_7.get(t) !== n) return;
              (this.$StickerPackCollection$p_3.delete(t),
                this.$StickerPackCollection$p_13(t, d.SUCCESS),
                this.add(e));
            } catch (e) {
              var a = r("getErrorSafe")(e);
              if (this.$StickerPackCollection$p_7.get(t) !== n) return;
              if (a.name === o("WAAbortError").ABORT_ERROR) {
                (this.$StickerPackCollection$p_3.delete(t),
                  this.$StickerPackCollection$p_13(t, d.INITIAL),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "First party sticker pack request cancelled",
                      ])),
                  ));
                return;
              }
              (this.$StickerPackCollection$p_13(t, d.ERROR),
                this.logFetchFailure(t, a));
            }
          }),
          (a.logFetchFailure = function (t, n) {
            t == null ||
              this.get(t) != null ||
              this.$StickerPackCollection$p_3.has(t) ||
              (this.$StickerPackCollection$p_3.add(t),
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "First party sticker pack request failed: error",
                    ])),
                )
                .catching(n)
                .sendLogs("sticker-packs-fetch-request-failed"));
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              this.stopListening(),
              this.$StickerPackCollection$p_9());
          }),
          n
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((m.model = o("WAWebStickerPackModelMd").StickerPackModel),
      (m.comparator = function (e, t) {
        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
      }));
    var p = new m();
    ((l.FetchState = d),
      (l.StickerPackCollection = m),
      (l.StickerPackCollectionMd = p));
  },
  98,
);
