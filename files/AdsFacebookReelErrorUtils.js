__d(
  "AdsFacebookReelErrorUtils",
  [
    "AdsInstagramReelErrorUtils",
    "AdsInterfacesLogger",
    "AdsPagePostUtils",
    "BrandedContentAdsUtils",
    "FacebookPartnershipAdsViewerFalcoEvent",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !(
        !o("BrandedContentAdsUtils").isBrandedContentPost(e) ||
        e.has_licensed_fbpa_music !== !0
      );
    }
    function s(t) {
      return r("gkx")("11878") ? e(t) : !1;
    }
    function u(e, t) {
      return (
        t === void 0 && (t = !1),
        e == null ||
        o("AdsPagePostUtils").isIGPost(e) ||
        (!o("AdsPagePostUtils").isPostFBReel(e) &&
          !o("AdsPagePostUtils").isVideoPost(e))
          ? !1
          : r("gkx")("11878") &&
              o("BrandedContentAdsUtils").isBrandedContentPost(e)
            ? s(e)
            : e.has_licensed_fb_reel_music !== !0
              ? !1
              : t
                ? r("qex")._("1573") === !0
                : r("qex")._("1551") === !0
      );
    }
    function c(e, t) {
      return (
        t === void 0 && (t = !1),
        e == null ||
        o("AdsPagePostUtils").isIGPost(e) ||
        (!o("AdsPagePostUtils").isPostFBReel(e) &&
          !o("AdsPagePostUtils").isVideoPost(e)) ||
        e.has_audio_swapped_fb_copy !== !0
          ? !1
          : t
            ? r("qex")._("1573") === !0
            : r("qex")._("1551") === !0
      );
    }
    function d(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "fb_reel_with_copyright_music_select_post",
        data:
          ((t = {}),
          (t.is_object_published = e.has_ad_media),
          (t.is_edit = e.has_fb_copy),
          (t.page_post_id = e.id),
          (t.metadata = JSON.stringify({
            is_audioswapped: e.has_audio_swapped_fb_copy,
          })),
          t),
      });
    }
    function m(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "fb_reel_with_copyright_music_video_upload",
        data:
          ((i = {}),
          (i.page_post_id = e == null ? void 0 : e.id),
          (i.is_edit = e == null ? void 0 : e.has_fb_copy),
          (i.adgroup_id = n),
          (i.metadata = JSON.stringify(
            babelHelpers.extends(
              {
                status: "success",
                new_post_id: o,
                music_selection_mode: a,
                is_reswap:
                  (e == null ? void 0 : e.has_audio_swapped_fb_copy) === !0,
              },
              t,
            ),
          )),
          i),
      });
    }
    function p(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "fb_reel_with_copyright_music_video_upload",
        data:
          ((a = {}),
          (a.page_post_id = e == null ? void 0 : e.id),
          (a.is_edit = e == null ? void 0 : e.has_fb_copy),
          (a.adgroup_id = n),
          (a.metadata = JSON.stringify(
            babelHelpers.extends(
              {
                status: "failure",
                is_reswap:
                  (e == null ? void 0 : e.has_audio_swapped_fb_copy) === !0,
                error_message: o,
              },
              t,
            ),
          )),
          a),
      });
    }
    function _(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "fb_reel_with_copyright_music_video_upload",
        data:
          ((o = {}),
          (o.page_post_id = e == null ? void 0 : e.id),
          (o.is_edit = e == null ? void 0 : e.has_fb_copy),
          (o.adgroup_id = n),
          (o.metadata = JSON.stringify(
            babelHelpers.extends(
              {
                status: "retry",
                is_reswap:
                  (e == null ? void 0 : e.has_audio_swapped_fb_copy) === !0,
              },
              t,
            ),
          )),
          o),
      });
    }
    function f(e, t) {
      var n;
      (t === void 0 && (t = "post_picker"),
        r("AdsInterfacesLogger").log({
          eventName: "fb_reel_with_copyright_music_open_audio_swap_modal",
          data:
            ((n = {}),
            (n.page_post_id = e == null ? void 0 : e.id),
            (n.is_edit = e == null ? void 0 : e.has_audio_swapped_fb_copy),
            (n.metadata = JSON.stringify({ entry_point: t })),
            n),
        }));
    }
    function g(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "fb_reel_with_copyright_music_save_music",
        data:
          ((n = {}),
          (n.page_post_id = e == null ? void 0 : e.id),
          (n.metadata = JSON.stringify({
            music_selection_mode: t,
            is_reswap:
              (e == null ? void 0 : e.has_audio_swapped_fb_copy) === !0,
          })),
          n),
      });
    }
    function h(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "fb_reel_with_copyright_music_visible_in_post_picker",
        data:
          ((t = {}),
          (t.page_post_id = e == null ? void 0 : e.id),
          (t.metadata = JSON.stringify({
            is_audioswapped: e.has_audio_swapped_fb_copy,
          })),
          t),
      });
    }
    function y(e) {
      var t;
      r("AdsInterfacesLogger").logOnce({
        eventName: "fb_reel_with_audio_swapped_copy_visible_in_post_picker",
        data:
          ((t = {}),
          (t.page_post_id = e == null ? void 0 : e.id),
          (t.metadata = JSON.stringify({
            is_audioswapped: e.has_audio_swapped_fb_copy,
          })),
          t),
      });
    }
    function C(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "fb_reel_audio_swap_debug",
        data:
          ((n = {}), (n.page_post_id = e), (n.metadata = JSON.stringify(t)), n),
      });
    }
    function b(e, t) {
      ((e.has_audio_swapped_fb_copy || e.has_licensed_fb_reel_music) &&
        C(e.id, {
          callsite: t,
          has_audio_swapped_fb_copy: e.has_audio_swapped_fb_copy,
          has_licensed_fb_reel_music: e.has_licensed_fb_reel_music,
        }),
        u(e, !0) ? h(e) : c(e, !0) && y(e),
        o("AdsInstagramReelErrorUtils").isReelWithCopyrightMusic(e) &&
          o(
            "AdsInstagramReelErrorUtils",
          ).logIGReelWithCopyrightMusicVisibleInPostPicker(e));
    }
    function v(t, n, a, i, l) {
      var s, u, c, d;
      if (!o("AdsPagePostUtils").isIGPost(l)) {
        var m = e(l),
          p = l == null ? void 0 : l.has_audio_swapped_fb_copy,
          _ = l == null ? void 0 : l.id,
          f = l == null ? void 0 : l.promotable_id,
          g =
            l == null || (s = l.owner) == null || (s = s.assigned_page) == null
              ? void 0
              : s.id,
          h =
            Array.isArray(
              (u = l.partnership_ads_identities) == null
                ? void 0
                : u.secondary_identities,
            ) &&
            l.partnership_ads_identities.secondary_identities.length > 0 &&
            (c =
              (d = l.partnership_ads_identities.secondary_identities[0]) ==
                null || (d = d.fb_page) == null
                ? void 0
                : d.id) != null
              ? c
              : null,
          y = l.object_id,
          C = r("gkx")("11878"),
          b = {
            has_copyright_music: String(m),
            has_audio_swap: String(p),
            isInGK: String(C),
            isPartnershipAdsToggleOn: String(t),
            isMultipleMentionsPostSelected: String(n),
            new_post_id: String(f),
            original_video_id: String(y),
          };
        i.forEach(function (e) {
          r("FacebookPartnershipAdsViewerFalcoEvent").log(function () {
            return {
              event_type: "fb_pa_post_picker_next_clicked",
              ad_id: e,
              post_id: _,
              sponsor_page_id: h,
              owner_page_id: g,
              click_source: a,
              extra_data: b,
            };
          });
        });
      }
    }
    function S(e, t, n, r, o) {
      L("success", e, t, n, r, o);
    }
    function R(e, t, n, r, o) {
      L("failure", e, t, n, r, o);
    }
    function L(t, n, o, a, i, l) {
      var s,
        u,
        c,
        d,
        m = e(n),
        p = n == null ? void 0 : n.has_audio_swapped_fb_copy,
        _ = n == null ? void 0 : n.id,
        f =
          n == null || (s = n.owner) == null || (s = s.assigned_page) == null
            ? void 0
            : s.id,
        g =
          Array.isArray(
            (u = n.partnership_ads_identities) == null
              ? void 0
              : u.secondary_identities,
          ) &&
          n.partnership_ads_identities.secondary_identities.length > 0 &&
          (c =
            (d = n.partnership_ads_identities.secondary_identities[0]) ==
              null || (d = d.fb_page) == null
              ? void 0
              : d.id) != null
            ? c
            : null,
        h = n.object_id,
        y = r("gkx")("11878"),
        C = {
          status: t,
          has_copyright_music: String(m),
          has_audio_swap: String(p),
          isInGK: String(y),
          new_post_id: String(i),
          original_video_id: String(h),
          music_selection_mode: String(l),
          is_reswap: String(
            (n == null ? void 0 : n.has_audio_swapped_fb_copy) === !0,
          ),
          audio_asset: String(o.audio_asset_id),
        };
      r("FacebookPartnershipAdsViewerFalcoEvent").log(function () {
        return {
          event_type: "fb_pa_reel_with_copyright_music_video_upload",
          ad_id: a,
          post_id: _,
          sponsor_page_id: g,
          owner_page_id: f,
          extra_data: C,
        };
      });
    }
    function E(t) {
      var n,
        o,
        a,
        i,
        l = e(t),
        s = t == null ? void 0 : t.has_audio_swapped_fb_copy,
        u = t == null ? void 0 : t.id,
        c =
          t == null || (n = t.owner) == null || (n = n.assigned_page) == null
            ? void 0
            : n.id,
        d =
          Array.isArray(
            (o = t.partnership_ads_identities) == null
              ? void 0
              : o.secondary_identities,
          ) &&
          t.partnership_ads_identities.secondary_identities.length > 0 &&
          (a =
            (i = t.partnership_ads_identities.secondary_identities[0]) ==
              null || (i = i.fb_page) == null
              ? void 0
              : i.id) != null
            ? a
            : null,
        m = t.object_id,
        p = r("gkx")("11878"),
        _ = {
          has_copyright_music: String(l),
          has_audio_swap: String(s),
          isInGK: String(p),
          original_video_id: String(m),
          is_reswap: String(
            (t == null ? void 0 : t.has_audio_swapped_fb_copy) === !0,
          ),
        };
      r("FacebookPartnershipAdsViewerFalcoEvent").log(function () {
        return {
          event_type: "fb_pa_copyright_audio_swap_model_opened",
          post_id: u,
          sponsor_page_id: d,
          owner_page_id: c,
          extra_data: _,
        };
      });
    }
    ((l.isFBReelWithCopyrightMusic = u),
      (l.isFBAudioSwappedCopy = c),
      (l.logFBReelWithCopyrightMusicSelectPost = d),
      (l.logFBReelAudioSwapSuccess = m),
      (l.logFBReelAudioSwapFailure = p),
      (l.logFBReelAudioSwapRetry = _),
      (l.logFBReelWithCopyrightMusicOpenAudioSwapModal = f),
      (l.logFBReelWithCopyrightMusicSaveMusic = g),
      (l.logFBReelAudioSwapDebug = C),
      (l.logReelLicensedMusicExposure = b),
      (l.logFBBrandedContentPostNextClicked = v),
      (l.logFBPartnershipAdsReelAudioSwapSuccess = S),
      (l.logFBPartnershipAdsReelAudioSwapFailure = R),
      (l.logFBPAReelWithCopyrightMusicOpenAudioSwapModal = E));
  },
  98,
);
