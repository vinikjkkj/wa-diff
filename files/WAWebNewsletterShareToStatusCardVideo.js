__d(
  "WAWebNewsletterShareToStatusCardVideo",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 6e4,
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebNewsletterStatusCardVideoEncoder",
        )
          .__setRef("WAWebNewsletterShareToStatusCardVideo")
          .load();
      }, "NewsletterStatusCardVideoEncoder"),
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebNewsletterStatusCardAudioEncoder",
        )
          .__setRef("WAWebNewsletterShareToStatusCardVideo")
          .load();
      }, "NewsletterStatusCardAudioEncoder");
    function m(e, t, n) {
      return g(async function () {
        var n = await c();
        return n({ maxDurationMs: f(), scene: e, video: t });
      }, n);
    }
    function p(e, t, n) {
      return g(async function () {
        var n = await d();
        return n({ audio: t, maxDurationMs: Math.min(u, f()), scene: e });
      }, n);
    }
    function _(e) {
      var t,
        n,
        r = parseFloat(
          (t = (n = e.mediaData) == null ? void 0 : n.duration) != null
            ? t
            : "",
        );
      return Number.isFinite(r) && r > 0 && r * s <= f();
    }
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "status_video_max_duration_second",
        ) * s
      );
    }
    async function g(t, n) {
      n.addPoint("card_video_encode_start");
      try {
        var a = await t();
        return (n.addPoint("card_video_encode_end"), a);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not make the channel update into a status card video",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          n.addPoint("card_video_encode_fail"),
          null
        );
      }
    }
    ((l.encodeShareToStatusCardVideo = m),
      (l.encodeShareToStatusCardAudio = p),
      (l.fitsStatusVideo = _));
  },
  98,
);
