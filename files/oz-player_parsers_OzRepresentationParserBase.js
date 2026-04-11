__d(
  "oz-player/parsers/OzRepresentationParserBase",
  [
    "oz-player/manifests/OzRepresentationBase",
    "oz-player/parsers/OzSegmentTemplateParser",
    "oz-player/parsers/OzSidxSegmentsParser",
    "oz-player/parsers/OzVideoContainerType",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzMimeUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, o, a, i, l, s, u, c, d, m, p, _, f) {
        ((this.$9 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$1 = t),
          (this.$2 = n),
          (this.$10 = a),
          (this.$11 = i),
          (this.$13 = o),
          (this.$14 = e),
          (this.$15 = l),
          (this.$3 = s),
          (this.$4 = u),
          (this.$5 = c),
          (this.$6 = d != null ? d : null),
          (this.$7 = m != null ? m : null),
          (this.$8 = p != null ? p : null),
          (this.$16 = _),
          (this.$17 = f));
        try {
          this.$11 = this.$11
            .cloneContext()
            .setRepresentationID(this.parseID());
        } catch (e) {}
      }
      var t = e.prototype;
      return (
        (t.$18 = function () {
          var e = this,
            t = this.$12;
          if (t) return t;
          if (this.$1.SegmentBase) {
            var n = this.$1.SegmentBase[0],
              a = this.$1.BaseURL[0]._;
            if (typeof a != "string")
              throw o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_REPRESENTATION_PARSER",
                description: "Missing representation BaseURL",
                extra: { code: "OZ_RP-9" },
              });
            ((t = new (r("oz-player/parsers/OzSidxSegmentsParser"))(
              this.$14,
              n,
              a,
              o("oz-player/parsers/OzVideoContainerType").parse(
                this.$1.$.mimeType,
              ),
              o("oz-player/utils/OzMimeUtil").getMimeType(this.$1.$.mimeType),
              this.$10,
              this.$11,
            )),
              t.onError(function (t) {
                var n;
                if (!((n = e.$17) != null && n.handleError(e.parseID(), t)))
                  return e.$9.emitError(t);
              }));
          } else if (this.$1.SegmentTemplate)
            t = this.$19(this.$1.SegmentTemplate[0], { isShared: !1 });
          else if (this.$3) t = this.$19(this.$3[0], { isShared: !0 });
          else
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_REPRESENTATION_PARSER",
              description: "Unrecognized representation type",
              extra: { code: "OZ_RP-7" },
            });
          return ((this.$12 = t), t);
        }),
        (t.$19 = function (t, n) {
          var e,
            a = t;
          n.isShared &&
            (a = babelHelpers.extends({}, a, {
              $: babelHelpers.extends({}, a.$, {
                initialization: a.$.initialization.replace(
                  "$RepresentationID$",
                  this.$1.$.id,
                ),
                media: a.$.media.replace("$RepresentationID$", this.$1.$.id),
              }),
            }));
          var i = this.$13.mpdUrl,
            l =
              this.$1.BaseURL && this.$1.BaseURL[0]
                ? this.$1.BaseURL[0]._
                : null,
            s = l != null ? l : i;
          if (s == null)
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_REPRESENTATION_PARSER",
              description: "Missing mpd url for template manifest",
              extra: { code: "OZ_RP-6" },
            });
          var u = this.$13.customSegmentTimelineParser,
            c =
              (e = this.$13.customRepresentationParsers) == null
                ? void 0
                : e.initializationBinary,
            d = c ? c(this.$1) : null;
          return new (r("oz-player/parsers/OzSegmentTemplateParser"))(
            this.$14,
            a,
            {
              baseUrl: s,
              mpdUrl: i,
              isStaticMpd: this.$15.manifestType === "static",
              isTemplatedMpd: this.$15.manifestIsTemplated,
            },
            u,
            d,
          );
        }),
        (t.onError = function (t) {
          return this.$9.onError(t);
        }),
        (t.parseInitSegment = function () {
          return this.$18().parseInitializationSegment();
        }),
        (t.parseBandwidth = function () {
          return Number(this.$1.$.bandwidth);
        }),
        (t.parseMimeType = function () {
          var e, t;
          return (e = (t = this.$1.$.mimeType) != null ? t : this.$4) != null
            ? e
            : "";
        }),
        (t.parseCodecs = function () {
          var e, t;
          return (e = (t = this.$1.$.codecs) != null ? t : this.$5) != null
            ? e
            : "";
        }),
        (t.parseVariantKey = function () {
          return this.$6;
        }),
        (t.parseLang = function () {
          return this.$7;
        }),
        (t.parseRole = function () {
          return this.$8;
        }),
        (t.parseSegmentsContainer = function () {
          return this.$18().parseSegmentsContainer();
        }),
        (t.parseID = function () {
          return "" + this.$1.$.id;
        }),
        (t.parseCustomFieldFirstSegment = function () {
          var e = this.$13.customRepresentationParsers
            ? this.$13.customRepresentationParsers.firstSegmentParser
            : null;
          return e ? e(this.$1) : null;
        }),
        (t.parse = function () {
          return new (r("oz-player/manifests/OzRepresentationBase"))(
            this.$1,
            this.$2,
            this.parseID(),
            this.parseMimeType(),
            this.parseCodecs(),
            this.parseVariantKey(),
            this.parseLang(),
            this.parseRole(),
            this.parseInitSegment(),
            this.parseSegmentsContainer(),
            this.parseBandwidth(),
            this.parseCustomFieldFirstSegment(),
            this.$13.customRepresentationParsers,
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
