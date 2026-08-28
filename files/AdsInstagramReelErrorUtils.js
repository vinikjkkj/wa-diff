__d(
  "AdsInstagramReelErrorUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        (e == null ? void 0 : e.boost_eligibility) ===
        "IS_CLIPS_WITH_COPYRIGHTED_LICENSED_MUSIC"
      );
    }
    function s(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "reel_with_copyright_music_select_post",
        data:
          ((t = {}),
          (t.is_object_published = e.has_ad_media),
          (t.is_edit = e.has_fb_copy),
          (t.page_post_id = e.id),
          t),
      });
    }
    function u(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "reel_with_copyright_music_save_music",
        data:
          ((n = {}),
          (n.page_post_id = e == null ? void 0 : e.id),
          (n.metadata = JSON.stringify({
            music_selection_mode: t,
            is_reswap: (e == null ? void 0 : e.has_fb_copy) === !0,
          })),
          n),
      });
    }
    function c(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "reel_with_copyright_music_video_upload",
        data:
          ((a = {}),
          (a.page_post_id = e == null ? void 0 : e.id),
          (a.is_edit = e == null ? void 0 : e.has_fb_copy),
          (a.metadata = JSON.stringify(
            babelHelpers.extends(
              {
                music_selection_mode: o,
                is_reswap: (e == null ? void 0 : e.has_fb_copy) === !0,
              },
              t,
            ),
          )),
          (a.adgroup_id = n),
          a),
      });
    }
    function d(e, t) {
      var n, o;
      r("AdsInterfacesLogger").log({
        eventName: "reel_with_copyright_music_set_ad_spec",
        data:
          ((o = {}),
          (o.metadata = (n = JSON.stringify(t)) != null ? n : null),
          (o.adgroup_id = e),
          o),
      });
    }
    function m(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "reel_with_copyright_music_open_audio_swap_modal",
        data:
          ((n = {}),
          (n.page_post_id = e == null ? void 0 : e.id),
          (n.is_edit = e == null ? void 0 : e.has_fb_copy),
          (n.metadata = JSON.stringify({ entry_point: t })),
          n),
      });
    }
    function p(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ig_reel_with_copyright_music_visible_in_post_picker",
        data:
          ((t = {}),
          (t.page_post_id = e == null ? void 0 : e.id),
          (t.metadata = JSON.stringify({
            is_audioswapped: e.has_audio_swapped_fb_copy,
          })),
          t),
      });
    }
    ((l.isReelWithCopyrightMusic = e),
      (l.logReelWithCopyrightMusicSelectPost = s),
      (l.logReelWithCopyrightMusicSaveMusic = u),
      (l.logReelWithCopyrightMusicUploadVideo = c),
      (l.logReelWithCopyrightMusicSetAdSpec = d),
      (l.logIGReelWithCopyrightMusicOpenAudioSwapModal = m),
      (l.logIGReelWithCopyrightMusicVisibleInPostPicker = p));
  },
  98,
);
