__d(
  "AdsFlexibleFormatCollageTemplateFitUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeReactiveControlOriginalFormatUtils",
    "AdsFlexibleFormatPacCarouselUtils",
    "AdsImageIDUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.16,
      s = [
        [1, 3, !0],
        [1080 / 720, 3, !0],
        [678 / 1205, 3, !0],
        [1080 / 608, 2, !0],
      ],
      u = [
        [1, 3, !0],
        [1080 / 720, 3, !0],
        [720 / 1080, 3, !0],
        [762 / 953, 3, !0],
        [608 / 1080, 2, !0],
        [1080 / 608, 3, !0],
      ],
      c = [
        [540 / 675, 4, !1],
        [450 / 675, 4, !1],
        [360 / 640, 6, !1],
      ],
      d = [
        [1, 4, !1],
        [432 / 540, 4, !1],
      ],
      m = [
        [1, 2, !0],
        [1080 / 720, 2, !0],
        [920 / 1380, 2, !0],
        [1080 / 1350, 2, !0],
        [1080 / 608, 2, !0],
      ],
      p = [
        [1, 6, !1],
        [512 / 640, 6, !1],
        [540 / 960, 4, !1],
        [540 / 810, 4, !1],
      ],
      _ = [].concat(c, [
        [1, 2, !0],
        [1, 3, !0],
        [648 / 972, 2, !0],
        [702 / 1248, 2, !0],
        [860 / 450, 3, !1],
      ]),
      f = [].concat(d, [
        [648 / 810, 2, !0],
        [720 / 1080, 2, !0],
      ]),
      g = [
        [1, 6, !1],
        [512 / 640, 6, !1],
        [540 / 960, 4, !1],
        [540 / 810, 4, !1],
        [1, 2, !0],
        [1e3 / 1250, 2, !0],
        [768 / 1152, 2, !0],
        [1080 / 565, 2, !0],
      ],
      h = [].concat(_, f, g),
      y = [].concat(s, u, m),
      C = [].concat(c, d, p),
      b = { catalog: y, website_highlight: y, carousel: h, multi_photo: s },
      v = { catalog: C, website_highlight: C, carousel: h, multi_photo: s };
    function S(t, n, r, o) {
      var a = t[0],
        i = t[1],
        l = t[2];
      if (
        (!n && l) ||
        (n && r != null && 1 - Math.min(r, a) / Math.max(r, a) > e)
      )
        return !1;
      var s = n && !l ? i - 1 : i;
      return o == null || o >= s;
    }
    function R(e) {
      var t = e.candidateCount,
        n = e.hasHero,
        r = e.heroAspectRatio,
        o = e.useCase,
        a = n ? b[o] : v[o];
      return a.some(function (e) {
        return S(e, n, r, t);
      });
    }
    function L(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function E(e, t) {
      var n = r("AdsAdgroupSemanticFields").childAttachments.get(t, e);
      if (
        ((n == null ||
          n.size === 0 ||
          o("AdsChildAttachmentsUtils").hasOnlyEmptyChildAttachmentsPlaceholder(
            n,
          )) &&
          (n = o(
            "AdsFlexibleFormatPacCarouselUtils",
          ).getPacCarouselChildAttachments(e)),
        n == null)
      )
        return [];
      var a = new Set(),
        i = [];
      return (
        n.forEach(function (e) {
          if (
            !(
              o("AdsChildAttachmentsUtils").isVideoChildAttachment(e) ||
              o("AdsChildAttachmentsUtils").hasPlaceData(e)
            )
          ) {
            var t = L(e.get("image_hash")),
              n = L(e.get("picture")),
              r = t != null ? t : n;
            r == null || a.has(r) || (a.add(r), i.push({ hash: t, url: n }));
          }
        }),
        i
      );
    }
    function k(e, t) {
      return E(e, t).length;
    }
    function I(e, t, n, r) {
      var a = o("AdsImageIDUtils")._getImageID(e, t, n);
      if (a == null) return null;
      var i = r(a);
      if (!i.hasValue()) return null;
      var l = i.getValueEnforcing().getTyped(),
        s = l.height,
        u = l.width;
      return u > 0 && s > 0 ? u / s : null;
    }
    function T(e) {
      var t = e.accountID,
        n = e.adgroup,
        r = e.adgroupSpecPathPlugin,
        a = e.existingPostHeroAspectRatio,
        i = e.getImageFullSize,
        l = e.originalFormat;
      if (l === "epa_multi_medias") return a;
      if (n == null || r == null) return null;
      if (
        o("AdsCreativeReactiveControlOriginalFormatUtils").isSACarouselFamily(l)
      ) {
        var s = E(n, r)[0];
        return s == null ? null : I(t, s.hash, s.url, i);
      }
      if (l === "sa_single_image") {
        if (o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(n))
          return null;
        var u = o("AdsAPIAdgroupRecordUtils").getImageData(n, r),
          c = u.imageHash,
          d = u.imageURL;
        return I(t, c, d, i);
      }
      return null;
    }
    ((l.canComposeCollagePreview = R),
      (l.getSACarouselCollageImageCount = k),
      (l.getCollageHeroAspectRatio = T));
  },
  98,
);
