__d(
  "MessengerAttachmentTransformer.bs",
  [
    "fbt",
    "MessageSharedMediaIDStore.bs",
    "MessengerStoryAttachmentTransformer.bs",
    "bs_caml",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      if (e.is_malicious) {
        var t = s._(/*BTDS*/ "This attachment has been marked as malicious.");
        return {
          app_attribution: null,
          attach_type: "error",
          error_msg: t,
          icon_type: "attach:unknown",
          message_file_fbid: null,
          metadata: null,
          mime_type: null,
          name: null,
          preview: null,
          preview_height: null,
          preview_url: null,
          preview_width: null,
          rel: null,
          share: null,
          thumbnail_url: null,
          url: null,
          url_shimhash: null,
          url_skipshim: null,
        };
      }
      var n = e.attribution_app,
        r;
      if (n == null) r = null;
      else {
        var o = n.square_logo;
        r = {
          icon_url: o == null ? null : o.uri,
          id: n.id,
          metadata: e.attribution_metadata,
          name: n.name,
        };
      }
      var a = e.url;
      return {
        app_attribution: r,
        attach_type: "file",
        error_msg: void 0,
        icon_type: e.content_type,
        message_file_fbid: e.message_file_fbid,
        metadata: null,
        mime_type: e.mimetype,
        name: e.filename,
        preview: e.preview,
        preview_height: null,
        preview_url: e.preview_url,
        preview_width: null,
        rel: "ignore",
        share: null,
        thumbnail_url: null,
        url: a == null ? null : a,
        url_shimhash: e.url_shimhash,
        url_skipshim: e.url_skipshim,
      };
    }
    function c(e, t, n) {
      var r = e.chat_image,
        o = r == null ? [null, null, null] : [r.uri, r.width, r.height],
        a = o[0],
        i = e.chat_image,
        l = i == null ? null : { height: i.height, width: i.width },
        s = e.large_image,
        u =
          s == null
            ? [null, null]
            : [s.uri, { height: s.height, width: s.width }],
        c = e.inbox_image,
        d =
          c == null
            ? [null, null]
            : [c.uri, { height: c.height, width: c.width }],
        m = e.attribution_app,
        p;
      if (m == null) p = null;
      else {
        var _ = m.square_logo;
        p = {
          icon_url: _ == null ? null : _.uri,
          id: m.id,
          metadata: e.attribution_metadata,
          name: m.name,
        };
      }
      return {
        app_attribution: p,
        attach_type: "video",
        icon_type: "attach:video",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          chat_preview: a,
          chat_size: l,
          dimensions: {
            height: e.original_dimensions.y,
            width: e.original_dimensions.x,
          },
          duration: e.playable_duration_in_ms,
          fbid: e.legacy_attachment_id,
          inbox_preview: d[0],
          inbox_size: d[1],
          large_preview: u[0],
          large_size: u[1],
          pageid: n ? t : void 0,
          render_as_sticker: e.video_type === "SPEAKING_STICKER",
        },
        name: e.filename,
        preview_height: o[2],
        preview_url: a,
        preview_width: o[1],
        rel: "async",
        share: null,
        thumbnail_url: a,
        url: e.playable_url,
      };
    }
    function d(e) {
      var t = e.attribution_app,
        n;
      if (t == null) n = null;
      else {
        var r = t.square_logo;
        n = {
          icon_url: r == null ? null : r.uri,
          id: t.id,
          metadata: e.attribution_metadata,
          name: t.name,
        };
      }
      return {
        app_attribution: n,
        attach_type: "file",
        icon_type: "attach:music",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          duration: e.playable_duration_in_ms,
          isVoicemail: e.is_voicemail ? "1" : "0",
          type:
            e.audio_type === "VOICE_MESSAGE"
              ? "fb_voice_message"
              : e.audio_type === "VOICE_MESSAGE_WITH_TRANSCRIPT"
                ? "fb_voice_message_with_transcript"
                : "file_attachment",
        },
        name: e.filename,
        preview_height: null,
        preview_url: null,
        preview_width: null,
        rel: "ignore",
        share: null,
        thumbnail_url: null,
        url: e.playable_url,
        url_shimhash: e.url_shimhash,
        url_skipshim: e.url_skipshim,
      };
    }
    function m(e, t, n) {
      var r = e.preview_image,
        o = r == null ? [null, null, null] : [r.uri, r.width, r.height],
        a = e.animated_image,
        i = a == null ? null : a.uri,
        l = e.attribution_app,
        s;
      if (l == null) s = null;
      else {
        var u = l.square_logo;
        s = {
          icon_url: u == null ? null : u.uri,
          id: l.id,
          metadata: e.attribution_metadata,
          name: l.name,
        };
      }
      return {
        app_attribution: s,
        attach_type: "animated_image",
        icon_type: "attach:image",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          dimensions:
            String(e.original_dimensions.x) +
            ("," + String(e.original_dimensions.y)),
          fbid: e.legacy_attachment_id,
          image: i,
          pageid: n ? t : void 0,
        },
        name: e.filename,
        preview_height: o[2],
        preview_url: o[0],
        preview_width: o[1],
        rel: "async",
        share: null,
        thumbnail_url: i,
        title: e.title,
        url: i,
      };
    }
    function p(e) {
      var t =
          e.original_extension === "gif"
            ? "animated_image"
            : e.render_as_sticker
              ? "third_party_sticker"
              : "photo",
        n = e.preview,
        r = n == null ? [null, null, null] : [n.uri, n.width, n.height],
        o;
      if (t === "photo") {
        var a = e.large_preview;
        o = a == null ? [null, null, null] : [a.uri, a.width, a.height];
      } else o = [null, null, null];
      var i = e.attribution_app,
        l;
      if (i == null) l = null;
      else {
        var s = i.square_logo;
        l = {
          icon_url: s == null ? null : s.uri,
          id: i.id,
          metadata: e.attribution_metadata,
          name: i.name,
        };
      }
      var u = e.thumbnail;
      return {
        app_attribution: l,
        attach_type: t,
        blurred_image_uri: e.blurred_image_uri,
        icon_type: "attach:image",
        large_preview_height: o[2],
        large_preview_url: o[0],
        large_preview_width: o[1],
        metadata: {
          dimensions:
            String(e.original_dimensions.x) +
            ("," + String(e.original_dimensions.y)),
          fbid: e.legacy_attachment_id,
        },
        name: e.filename,
        photo_encodings: e.photo_encodings,
        preview_height: r[2],
        preview_url: r[0],
        preview_width: r[1],
        rel: "async",
        share: null,
        thumbnail_url: u == null ? null : u.uri,
        url: null,
      };
    }
    function _(t, n) {
      var o = t,
        a = n;
      if (t >= n) {
        var i = (e || (e = r("bs_caml"))).caml_float_min(120, o / 2),
          l = i / (o / 2);
        return [i | 0, ((a / 2) * l) | 0];
      }
      var s = (e || (e = r("bs_caml"))).caml_float_min(120, a / 2),
        u = s / (a / 2);
      return [((o / 2) * u) | 0, s | 0];
    }
    function f(e) {
      var t = _(e.width, e.height),
        n = e.pack,
        r = e.padded_sprite_image,
        o = e.padded_sprite_image_2x,
        a = e.sprite_image,
        i = e.sprite_image_2x;
      return {
        app_attribution: null,
        attach_type: "sticker",
        icon_type: "attach:unknown",
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: {
          accessibilityLabel: e.label,
          frameCount: e.frame_count,
          frameRate: e.frame_rate,
          framesPerCol: e.frame_count > 1 ? e.frames_per_column : 1,
          framesPerRow: e.frame_count > 1 ? e.frames_per_row : 1,
          height: t[1],
          packID: n == null ? null : n.id,
          paddedSpriteURI: r == null ? null : r.uri,
          paddedSpriteURI2x: o == null ? null : o.uri,
          share: null,
          spriteURI: a == null ? null : a.uri,
          spriteURI2x: i == null ? null : i.uri,
          stickerID: e.id,
          thumbnail_url: null,
          width: t[0],
        },
        name: null,
        preview_height: null,
        preview_url: null,
        preview_width: null,
        rel: null,
        url: e.url,
      };
    }
    function g(e, t) {
      if (t != null)
        return o("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(
          e,
          t,
        );
    }
    function h(e, t, n, r) {
      var a = [],
        i = {
          frame_count: 0,
          frame_rate: 0,
          frames_per_column: 0,
          frames_per_row: 0,
          height: 0,
          id: "",
          label: "",
          pack: null,
          padded_sprite_image: null,
          padded_sprite_image_2x: null,
          sprite_image: null,
          sprite_image_2x: null,
          url: null,
          width: 0,
        },
        l = t.extensible_attachment,
        s;
      if (l == null) s = i;
      else {
        var _ = l.story_attachment;
        if (_ == null) s = i;
        else {
          var h = _.media;
          if (h == null) s = i;
          else {
            var y = h.__typename;
            s =
              y === "Sticker"
                ? {
                    frame_count: h.frame_count,
                    frame_rate: h.frame_rate,
                    frames_per_column: h.frames_per_column,
                    frames_per_row: h.frames_per_row,
                    height: h.height,
                    id: h.id,
                    label: h.label,
                    pack: h.pack,
                    padded_sprite_image: h.padded_sprite_image,
                    padded_sprite_image_2x: h.padded_sprite_image_2x,
                    sprite_image: h.sprite_image,
                    sprite_image_2x: h.sprite_image_2x,
                    url: h.url,
                    width: h.width,
                  }
                : i;
          }
        }
      }
      var C = s.id;
      C != null && C !== "" && a.push(f(s));
      var b = t.extensible_attachment;
      b != null &&
        a.push(
          o(
            "MessengerStoryAttachmentTransformer.bs",
          ).getExtensibleAttachmentPayload(e, b),
        );
      var v = t.sticker;
      v != null && a.push(f(v));
      var S = t.blob_attachments;
      return (
        S != null &&
          S.forEach(function (t) {
            switch (t.TAG) {
              case 0:
                var o = t._0;
                (g(o.legacy_attachment_id, n), a.push(p(o)));
                return;
              case 1:
                var i = t._0;
                (g(i.legacy_attachment_id, n), a.push(m(i, e, r)));
                return;
              case 2:
                a.push(d(t._0));
                return;
              case 3:
                var l = t._0;
                (g(l.legacy_attachment_id, n), a.push(c(l, e, r)));
                return;
              case 4:
                a.push(u(t._0));
                return;
            }
          }),
        a
      );
    }
    l.transformAttachment = h;
  },
  226,
);
