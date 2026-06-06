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
            (e.$StickerPackCollection$p_3 = null),
            (e.$StickerPackCollection$p_4 = new Map()),
            (e.$StickerPackCollection$p_5 = null),
            (e.$StickerPackCollection$p_6 = new Map()),
            e.listenTo(r("WAWebL10N"), "locale_change", function () {
              return e.$StickerPackCollection$p_7();
            }),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$StickerPackCollection$p_7 = function () {
            (this.$StickerPackCollection$p_8(), this.reset());
          }),
          (a.$StickerPackCollection$p_8 = function () {
            var e;
            ((e = this.$StickerPackCollection$p_5) == null || e.abort(),
              (this.$StickerPackCollection$p_5 = null),
              this.$StickerPackCollection$p_6.forEach(function (e) {
                return e.abort();
              }),
              this.$StickerPackCollection$p_6.clear(),
              this.$StickerPackCollection$p_9(),
              this.$StickerPackCollection$p_10(),
              (this.$StickerPackCollection$p_1 = null),
              this.$StickerPackCollection$p_2.clear(),
              (this.$StickerPackCollection$p_3 = null),
              this.$StickerPackCollection$p_4.clear());
          }),
          (a.$StickerPackCollection$p_11 = function (t) {
            t !== this.fetchState &&
              ((this.fetchState = t), this.trigger("change:fetchState", t));
          }),
          (a.$StickerPackCollection$p_9 = function () {
            this.$StickerPackCollection$p_11(d.INITIAL);
          }),
          (a.$StickerPackCollection$p_12 = function (t, n) {
            n !== this.packFetchState.get(t) &&
              (this.packFetchState.set(t, n),
              this.trigger("change:packFetchState", t, n));
          }),
          (a.$StickerPackCollection$p_10 = function () {
            (this.packFetchState.clear(),
              this.trigger("change:packFetchState"));
          }),
          (a.$StickerPackCollection$p_13 = function (t, n, r) {
            var e = this;
            (this.$StickerPackCollection$p_14(t, n, function (n, o) {
              var a = r[o - t];
              if (!n) a && e.add(a);
              else if (a)
                n.id === a.id &&
                (n.imageDataHash !== a.imageDataHash || n.index !== a.index)
                  ? (e.remove(n, { silent: !0 }), e.add(a))
                  : (e.remove(n), e.add(a));
              else for (var i = n; i; ) (e.remove(i), (i = e.at(o)));
            }),
              this.$StickerPackCollection$p_10(),
              this.$StickerPackCollection$p_2.clear(),
              this.$StickerPackCollection$p_4.clear());
          }),
          (a.$StickerPackCollection$p_14 = function (t, n, r) {
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
                this.$StickerPackCollection$p_3 === n;
            if (!(this.fetchState === d.PENDING || a)) {
              (this.$StickerPackCollection$p_11(d.PENDING),
                (this.$StickerPackCollection$p_1 = o("WATimeUtils").unixTime()),
                (this.$StickerPackCollection$p_3 = n),
                (this.$StickerPackCollection$p_5 = new AbortController()));
              try {
                var i = await o(
                    "WAWebFetchFirstPartyStickerPacksAction",
                  ).fetchFirstPartyStickerPacks({
                    signal: this.$StickerPackCollection$p_5.signal,
                  }),
                  l = Math.max(this.length, i.length);
                (this.$StickerPackCollection$p_13(0, l, i),
                  this.$StickerPackCollection$p_11(d.SUCCESS));
              } catch (t) {
                var u = r("getErrorSafe")(t);
                if (
                  (this.$StickerPackCollection$p_11(d.ERROR),
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
            if (t && !this.get(t)) {
              var n = r("WAWebAuraGating").isStickersEnabled(),
                a = this.packFetchState.get(t),
                i =
                  (e = this.$StickerPackCollection$p_2.get(t)) != null ? e : 0,
                l =
                  a === d.SUCCESS &&
                  o("WATimeUtils").unixTime() - i <
                    o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT &&
                  this.$StickerPackCollection$p_4.get(t) === n;
              if (!(a === d.PENDING || l)) {
                (this.$StickerPackCollection$p_12(t, d.PENDING),
                  this.$StickerPackCollection$p_2.set(
                    t,
                    o("WATimeUtils").unixTime(),
                  ),
                  this.$StickerPackCollection$p_4.set(t, n));
                var s = new AbortController();
                this.$StickerPackCollection$p_6.set(t, s);
                try {
                  var m = await o(
                    "WAWebFetchFirstPartyStickerPacksAction",
                  ).fetchFirstPartyStickerPack({ id: t, signal: s.signal });
                  (this.$StickerPackCollection$p_12(t, d.SUCCESS), this.add(m));
                } catch (e) {
                  var p = r("getErrorSafe")(e);
                  if (
                    (this.$StickerPackCollection$p_12(t, d.ERROR),
                    p.name === o("WAAbortError").ABORT_ERROR)
                  ) {
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "First party sticker pack request cancelled",
                        ])),
                    );
                    return;
                  }
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "First party sticker pack request failed: error",
                        ])),
                    )
                    .catching(p)
                    .sendLogs("sticker-packs-fetch-request-failed");
                }
              }
            }
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              this.stopListening(),
              this.$StickerPackCollection$p_8());
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
