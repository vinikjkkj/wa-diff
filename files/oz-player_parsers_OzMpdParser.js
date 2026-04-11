__d(
  "oz-player/parsers/OzMpdParser",
  [
    "oz-player/manifests/Mpd",
    "oz-player/parsers/OzApplicationRepresentationParser",
    "oz-player/parsers/OzAudioRepresentationParser",
    "oz-player/parsers/OzVideoRepresentationParser",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzIbrUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.blockedRepresentationsManager,
          n = e.config,
          o = e.drmManager,
          a = e.enableAlternativeAudioTracks,
          i = e.initialRepresentationIDs,
          l = e.networkManager,
          s = e.ozParserContext,
          u = e.perfLoggerProvider,
          c = e.useManagedMediaSource;
        ((this.$2 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$5 = n),
          (this.$1 = l),
          (this.$3 = u),
          (this.$4 = s),
          (this.$6 = o),
          (this.$7 = i != null ? i : []),
          (this.$8 = t != null ? t : null),
          (this.$9 = a),
          (this.$10 = c != null ? c : !1),
          (this.$11 = !0));
      }
      var t = e.prototype;
      return (
        (t.onError = function (t) {
          return this.$2.onError(t);
        }),
        (t.parse = function (t) {
          var e = this,
            n = [],
            a = t,
            i = this.$4.createXmlParser().parse(a),
            l = i.MPD && i.MPD.length > 0 ? i.MPD[0] : null;
          if (!l) {
            var s = 2e3;
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_MPD_PARSER",
              description:
                "parsed manifest XML missing MPD node; truncated xml (" +
                Math.min(s, a.length) +
                "/" +
                a.length +
                "): " +
                a.substring(0, s),
            });
          }
          var u = l.Period && l.Period.length > 0 ? l.Period[0] : null;
          if (!u) {
            var c = 2e3;
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_MPD_PARSER",
              description:
                "parsed manifest XML missing Period node; truncated xml (" +
                Math.min(c, a.length) +
                "/" +
                a.length +
                "): " +
                a.substring(0, c),
            });
          }
          var d = u.AdaptationSet || [],
            m = this.$12(l);
          this.$11 = m === "static";
          var p = this.$13(l),
            _ = this.$14(
              this.$15(d, "video"),
              { manifestType: m, manifestIsTemplated: p },
              n,
            ),
            f;
          this.$9
            ? (f = this.$16(
                this.$15(d, "audio"),
                { manifestType: m, manifestIsTemplated: p },
                n,
              ).sort(function (e, t) {
                return e.getBandwidth() - t.getBandwidth();
              }))
            : (f = this.$17(
                this.$18(d, "audio"),
                r("oz-player/parsers/OzAudioRepresentationParser"),
                { manifestType: m, manifestIsTemplated: p },
                n,
              ).sort(function (e, t) {
                return e.getBandwidth() - t.getBandwidth();
              }));
          var g = [];
          if (this.$5.getBool("vtt_caption_representation")) {
            var h = this.$15(d, "application");
            g = this.$17(
              h[0],
              r("oz-player/parsers/OzApplicationRepresentationParser"),
              { manifestType: m, manifestIsTemplated: p },
              n,
            );
          }
          var y = this.$4.mpdUrl,
            C = new (r("oz-player/manifests/Mpd"))(
              l,
              _,
              f,
              g,
              y,
              this.$19(l),
              this.$4.customParsers || new Map(),
              this.$11,
            );
          if (this.$6) {
            var b = this.$6;
            b.startEME(_, f);
          }
          return (
            n.forEach(function (t) {
              t.onError(e.$2.emitError);
            }),
            C
          );
        }),
        (t.$19 = function (t) {
          var e = t.$.minimumUpdatePeriod || "",
            n = /\d+/g.exec(e);
          if (n && n.length) {
            var r = n[0];
            return r ? Number.parseInt(r, 10) : null;
          }
          return null;
        }),
        (t.$12 = function (t) {
          return t.$.type || "static";
        }),
        (t.$13 = function (t) {
          var e,
            n =
              (e = this.$4.customParsers) == null
                ? void 0
                : e.get("isLiveTemplated");
          if (!n) return !1;
          var r = n(t);
          return typeof r == "boolean" && r;
        }),
        (t.$18 = function (t, n) {
          return t.find(this.$20(n));
        }),
        (t.$15 = function (t, n) {
          return t.filter(this.$20(n));
        }),
        (t.$20 = function (t) {
          return function (e) {
            if (e.$.mimeType != null) return e.$.mimeType.indexOf(t) !== -1;
            var n = e.Representation;
            return n && n.length > 0 && n[0].$.mimeType.indexOf(t) !== -1;
          };
        }),
        (t.$17 = function (t, n, r, o) {
          var e = this;
          if (!t) return [];
          var a = t.Role,
            i = a != null ? a : [],
            l = i[0],
            s = l ? l.$.value : null,
            u = t.$.lang,
            c = u === "und" ? null : u,
            d = t.$.FBVariantKey,
            m = d === "und" ? null : d != null ? d : null;
          return t.Representation.map(function (a) {
            var i,
              l = new n(
                e.$5,
                a,
                (i = a.ContentProtection) != null ? i : t.ContentProtection,
                e.$4,
                e.$1,
                e.$3,
                r,
                t.SegmentTemplate,
                t.$.mimeType,
                t.$.codecs,
                m,
                c,
                s,
                e.$7,
                e.$8,
              ),
              u = l.parse();
            return (o.push(l), u);
          });
        }),
        (t.$21 = function (t) {
          return this.$10
            ? ManagedMediaSource.isTypeSupported(t)
            : MediaSource.isTypeSupported(t);
        }),
        (t.$14 = function (t, n, o) {
          var e = this,
            a = [],
            i = new Set();
          return (
            t.filter(Boolean).forEach(function (t, l, s) {
              var u = l === s.length - 1;
              for (var c of t.Representation) {
                var d, m;
                if (
                  !(
                    (d = c.$.FBAbrPolicyTags) != null &&
                    d.includes("avoid_on_abr") &&
                    !u
                  )
                ) {
                  var p = t.Role,
                    _ = p != null ? p : [],
                    f = _[0],
                    g = f ? f.$.value : null,
                    h = t.$.lang,
                    y = h === "und" ? null : h,
                    C = t.$.FBVariantKey,
                    b = C === "und" ? null : C != null ? C : null,
                    v = new (r(
                      "oz-player/parsers/OzVideoRepresentationParser",
                    ))(
                      e.$5,
                      c,
                      (m = c.ContentProtection) != null
                        ? m
                        : t.ContentProtection,
                      e.$4,
                      e.$1,
                      e.$3,
                      n,
                      t.SegmentTemplate,
                      t.$.mimeType,
                      t.$.codecs,
                      b,
                      y,
                      g,
                      e.$7,
                      e.$8,
                    ),
                    S = v.parse();
                  if ((o.push(v), !e.$21(S.getMimeCodecs()))) {
                    i.add(S.getMimeCodecs());
                    continue;
                  }
                  a.push(S);
                }
              }
            }),
            a.filter(Boolean)
          );
        }),
        (t.$16 = function (t, n, a) {
          var e = this,
            i = [],
            l = new Set(),
            s = t.filter(Boolean).map(function (t) {
              var o = t.Role,
                i = o != null ? o : [],
                s = i[0],
                u = s ? s.$.value : null,
                c = t.$.lang,
                d = c === "und" ? null : c,
                m = t.$.FBVariantKey,
                p = m === "und" ? null : m != null ? m : null,
                _ = [];
              for (var f of t.Representation) {
                var g,
                  h = new (r("oz-player/parsers/OzAudioRepresentationParser"))(
                    e.$5,
                    f,
                    (g = f.ContentProtection) != null ? g : t.ContentProtection,
                    e.$4,
                    e.$1,
                    e.$3,
                    n,
                    t.SegmentTemplate,
                    t.$.mimeType,
                    t.$.codecs,
                    p,
                    d,
                    u,
                    e.$7,
                  ),
                  y = h.parse();
                if ((a.push(h), !e.$21(y.getMimeCodecs()))) {
                  l.add(y.getMimeCodecs());
                  continue;
                }
                _.push(y);
              }
              return _;
            });
          return (
            s.forEach(function (t) {
              if (t.length > 1) {
                var n = o(
                  "oz-player/utils/OzIbrUtils",
                ).getInitialAudioRepresentation(t, e.$5, e.$3);
                i.push(n != null ? n : t[0]);
              } else i.push.apply(i, t);
            }),
            i.filter(Boolean)
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
