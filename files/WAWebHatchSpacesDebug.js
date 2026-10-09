__d(
  "WAWebHatchSpacesDebug",
  ["WAWebHatchSpacesDecoder", "WAWebHatchSpacesManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 36e5,
      s = "/spaces/cvm/weekly-budget/icon.jpg",
      u = {
        media_transport: "mmg",
        url: "https://mmg.whatsapp.net/v/t62.00000-24/debug_hatch_space_icon.enc",
        direct_path: "/v/t62.00000-24/debug_hatch_space_icon.enc",
        media_key_b64: "ZGVidWctaGF0Y2gtc3BhY2UtaWNvbi1rZXk=",
        file_sha256_b64: "ZGVidWctaGF0Y2gtc3BhY2UtaWNvbi1zaGE=",
        file_enc_sha256_b64: "ZGVidWctaGF0Y2gtc3BhY2UtaWNvbi1lbmM=",
        mime_type: "image/jpeg",
      };
    function c() {
      var e,
        t = Date.now(),
        n = m(t);
      return (p(n, ((e = {}), (e[s] = u), e)), n.length);
    }
    function d() {
      r("WAWebHatchSpacesManager").reset();
    }
    function m(t) {
      return [
        {
          source: "space",
          item_key: "weekly-budget",
          display_name: "Weekly budget",
          icon: s,
          is_favorite: !0,
          favorite_order: 1,
          accessed_at_ms: t - e,
          construction_status: "succeeded",
          sharing: {
            state: "public",
            share_url: "https://muse.ai/s/weekly-budget",
          },
        },
        {
          source: "space",
          item_key: "tunisia-photo-scout",
          display_name: "Tunisia photo scout",
          is_favorite: !1,
          accessed_at_ms: t - 5 * e,
          construction_status: "succeeded",
          sharing: {
            state: "public",
            share_url: "https://muse.ai/s/tunisia-photo-scout",
          },
        },
        {
          source: "space",
          item_key: "recipe-box",
          display_name: "Recipe box",
          is_favorite: !1,
          accessed_at_ms: t - 26 * e,
          construction_status: "succeeded",
        },
        {
          source: "space",
          item_key: "press-kit",
          display_name: "Press kit",
          is_favorite: !1,
          accessed_at_ms: t - 50 * e,
          construction_status: "failed",
        },
        {
          source: "space",
          item_key: "marathon-plan",
          display_name: "Marathon plan",
          is_favorite: !1,
          construction_status: "constructing",
        },
        {
          source: "space",
          item_key: "reading-list",
          display_name: "Reading list",
          is_favorite: !1,
          construction_status: "succeeded",
          sharing: {
            state: "public",
            share_url: "https://muse.ai/s/reading-list",
          },
        },
      ];
    }
    function p(e, t) {
      var n = o("WAWebHatchSpacesDecoder").decodeHatchSpacesEvent(
        o("WAWebHatchSpacesDecoder").HATCH_SPACES_SNAPSHOT_OP_KEY,
        { items: e, secure_media: t },
        0,
      );
      n != null && r("WAWebHatchSpacesManager").applyEvent(n);
    }
    ((l.debugInjectHatchSpaces = c), (l.debugClearHatchSpaces = d));
  },
  98,
);
