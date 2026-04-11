__d(
  "WAWebStickerPackCollectionMd",
  [
    "$InternalEnum",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebFetchFirstPartyStickerPacksAction",
    "WAWebL10N",
    "WAWebStickerConstants",
    "WAWebStickerPackModelMd",
    "asyncToGeneratorRuntime",
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
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e.fetchState = d.INITIAL),
            (e.packFetchState = new Map()),
            (e.$StickerPackCollection$p_1 = null),
            (e.$StickerPackCollection$p_2 = new Map()),
            (e.$StickerPackCollection$p_3 = null),
            (e.$StickerPackCollection$p_4 = new Map()),
            e.listenTo(r("WAWebL10N"), "locale_change", function () {
              return e.$StickerPackCollection$p_5();
            }),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$StickerPackCollection$p_5 = function () {
            (this.$StickerPackCollection$p_6(), this.reset());
          }),
          (i.$StickerPackCollection$p_6 = function () {
            var e;
            ((e = this.$StickerPackCollection$p_3) == null || e.abort(),
              (this.$StickerPackCollection$p_3 = null),
              this.$StickerPackCollection$p_4.forEach(function (e) {
                return e.abort();
              }),
              this.$StickerPackCollection$p_4.clear(),
              this.$StickerPackCollection$p_7(),
              this.$StickerPackCollection$p_8(),
              (this.$StickerPackCollection$p_1 = null),
              this.$StickerPackCollection$p_2.clear());
          }),
          (i.$StickerPackCollection$p_9 = function (t) {
            t !== this.fetchState &&
              ((this.fetchState = t), this.trigger("change:fetchState", t));
          }),
          (i.$StickerPackCollection$p_7 = function () {
            this.$StickerPackCollection$p_9(d.INITIAL);
          }),
          (i.$StickerPackCollection$p_10 = function (t, n) {
            n !== this.packFetchState.get(t) &&
              (this.packFetchState.set(t, n),
              this.trigger("change:packFetchState", t, n));
          }),
          (i.$StickerPackCollection$p_8 = function () {
            (this.packFetchState.clear(),
              this.trigger("change:packFetchState"));
          }),
          (i.$StickerPackCollection$p_11 = function (t, n, r) {
            var e = this;
            (this.$StickerPackCollection$p_12(t, n, function (n, o) {
              var a = r[o - t];
              if (!n) a && e.add(a);
              else if (a)
                n.id === a.id &&
                (n.imageDataHash !== a.imageDataHash || n.index !== a.index)
                  ? (e.remove(n, { silent: !0 }), e.add(a))
                  : (e.remove(n), e.add(a));
              else for (var i = n; i; ) (e.remove(i), (i = e.at(o)));
            }),
              this.$StickerPackCollection$p_8(),
              this.$StickerPackCollection$p_2.clear());
          }),
          (i.$StickerPackCollection$p_12 = function (t, n, r) {
            for (var e = t; e < n; e++) {
              var o = this.at(e);
              r(o, e);
            }
          }),
          (i.fetch = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t;
              if (
                !(
                  this.fetchState === d.PENDING ||
                  (this.fetchState === d.SUCCESS &&
                    o("WATimeUtils").unixTime() -
                      ((t = this.$StickerPackCollection$p_1) != null ? t : 0) <
                      o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT)
                )
              ) {
                (this.$StickerPackCollection$p_9(d.PENDING),
                  (this.$StickerPackCollection$p_1 =
                    o("WATimeUtils").unixTime()),
                  (this.$StickerPackCollection$p_3 = new AbortController()));
                try {
                  var n = yield o(
                      "WAWebFetchFirstPartyStickerPacksAction",
                    ).fetchFirstPartyStickerPacks({
                      signal: this.$StickerPackCollection$p_3.signal,
                    }),
                    r = Math.max(this.length, n.length);
                  (this.$StickerPackCollection$p_11(0, r, n),
                    this.$StickerPackCollection$p_9(d.SUCCESS));
                } catch (t) {
                  if (
                    (this.$StickerPackCollection$p_9(d.ERROR),
                    t.name === o("WAAbortError").ABORT_ERROR)
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
                          "First party sticker packs request failed: error: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("sticker-packs-fetch-request-failed");
                }
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.fetchStickerPack = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (e && !this.get(e)) {
                  var n = this.packFetchState.get(e),
                    r =
                      (t = this.$StickerPackCollection$p_2.get(e)) != null
                        ? t
                        : 0;
                  if (
                    !(
                      n === d.PENDING ||
                      (n === d.SUCCESS &&
                        o("WATimeUtils").unixTime() - r <
                          o("WAWebStickerConstants").STICKER_PACK_FETCH_TIMEOUT)
                    )
                  ) {
                    (this.$StickerPackCollection$p_10(e, d.PENDING),
                      this.$StickerPackCollection$p_2.set(
                        e,
                        o("WATimeUtils").unixTime(),
                      ));
                    var a = new AbortController();
                    this.$StickerPackCollection$p_4.set(e, a);
                    try {
                      var i = yield o(
                        "WAWebFetchFirstPartyStickerPacksAction",
                      ).fetchFirstPartyStickerPack({ id: e, signal: a.signal });
                      (this.$StickerPackCollection$p_10(e, d.SUCCESS),
                        this.add(i));
                    } catch (t) {
                      if (
                        (this.$StickerPackCollection$p_10(e, d.ERROR),
                        t.name === o("WAAbortError").ABORT_ERROR)
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
                              "First party sticker pack request failed: error: ",
                              "",
                            ])),
                          t,
                        )
                        .sendLogs("sticker-packs-fetch-request-failed");
                    }
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.delete = function () {
            (t.prototype.delete.call(this),
              this.stopListening(),
              this.$StickerPackCollection$p_6());
          }),
          a
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
