__d(
  "MediaSyncStateMediaSyncStateSerializers",
  ["MediaSyncStateMediaSyncStateTypes", "ThriftTypes", "jsbi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {
        action: o("MediaSyncStateMediaSyncStateTypes").Action.cast(0),
        action_metadata: m(),
        content_id: "",
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        admin_message_type: o(
          "MediaSyncStateMediaSyncStateTypes",
        ).AdminMessageType.cast(0),
      };
    }
    function u() {
      return {
        action: o("MediaSyncStateMediaSyncStateTypes").Action.cast(0),
        action_metadata: m(),
        actor: d(),
        content: p(),
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        content_id: "",
        admin_message_type: o(
          "MediaSyncStateMediaSyncStateTypes",
        ).AdminMessageType.cast(0),
      };
    }
    function c() {
      return {
        latest_input: s(),
        latest_actor_id: "",
        latest_new_content_start_time_ms: "0",
        history: [],
      };
    }
    function d() {
      return { user_id: "", username: "", avatar_url: "" };
    }
    function m() {
      return { media_position_ms: "0", action_time_ms: "0" };
    }
    function p() {
      return {};
    }
    function _() {
      return {
        content_id: "",
        owner: f(),
        media_type: o(
          "MediaSyncStateMediaSyncStateTypes",
        ).InstagramMediaType.cast(0),
        thumbnail_url: "",
        product_type: o(
          "MediaSyncStateMediaSyncStateTypes",
        ).InstagramProductType.cast(0),
      };
    }
    function f() {
      return { user_id: "", username: "", avatar_url: "" };
    }
    function g() {
      return {
        content_id: "",
        video: C(),
        is_live_streaming: !1,
        is_reportable: !1,
        available_caption_locales: [],
        is_non_interactable: !1,
      };
    }
    function h() {
      return { content_id: "", title: "", message: "" };
    }
    function y() {
      return { content_id: "", cover_image_url: "" };
    }
    function C() {
      return { duration_ms: "0", aspect_ratio: 0 };
    }
    function b() {
      return {};
    }
    function v() {
      return { url: "", height: 0, width: 0 };
    }
    function S() {
      return { locale: "", localized_language: "", captions_url: "" };
    }
    function R() {
      return { artist_name: "", song_title: "" };
    }
    function L() {
      return {};
    }
    function E() {
      return {
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        content_id: "",
      };
    }
    function k() {
      return {
        action: o("MediaSyncStateMediaSyncStateTypes").Action.cast(0),
        action_metadata: m(),
        admin_message_type: o(
          "MediaSyncStateMediaSyncStateTypes",
        ).AdminMessageType.cast(0),
        content_id: "",
        content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(0),
        actor_id: "",
      };
    }
    function I() {
      return {
        last_content_source: o("MediaSyncStateMediaSyncStateTypes").Source.cast(
          0,
        ),
        count: 0,
      };
    }
    function T() {
      return {
        product_id: "",
        product_name: "",
        product_position_x: "",
        product_position_y: "",
      };
    }
    function D(t, n) {
      if (
        (n.writeStructBegin("MediaSyncInputState"),
        n.writeFieldBegin({
          fname: "action",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.action != null)
      ) {
        var a;
        n.writeI32((a = t.action) != null ? a : 0);
      } else {
        var i = o("MediaSyncStateMediaSyncStateTypes").Action.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_metadata",
          ftype: e.STRUCT,
          fid: 2,
        }),
        t.action_metadata != null)
      )
        N(t.action_metadata, n);
      else {
        var l = m();
        N(l, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 3 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var s = "";
        n.writeString(s);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_source", ftype: e.I32, fid: 4 }),
        t.content_source != null)
      ) {
        var u;
        n.writeI32((u = t.content_source) != null ? u : 0);
      } else {
        var c = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(c != null ? c : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "admin_message_type",
          ftype: e.I32,
          fid: 5,
        }),
        t.admin_message_type != null)
      ) {
        var d;
        n.writeI32((d = t.admin_message_type) != null ? d : 0);
      } else {
        var p = o("MediaSyncStateMediaSyncStateTypes").AdminMessageType.cast(0);
        n.writeI32(p != null ? p : 0);
      }
      (n.writeFieldEnd(),
        t.skip_autoplay_candidate_generation != null &&
          (n.writeFieldBegin({
            fname: "skip_autoplay_candidate_generation",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 6,
          }),
          n.writeBool(t.skip_autoplay_candidate_generation),
          n.writeFieldEnd()),
        t.seed_content_id != null &&
          (n.writeFieldBegin({
            fname: "seed_content_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.seed_content_id),
          n.writeFieldEnd()),
        t.initiator_id != null &&
          (n.writeFieldBegin({
            fname: "initiator_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.initiator_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function x(t, n) {
      if (
        (n.writeStructBegin("MediaSyncOutputState"),
        n.writeFieldBegin({
          fname: "action",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.action != null)
      ) {
        var a;
        n.writeI32((a = t.action) != null ? a : 0);
      } else {
        var i = o("MediaSyncStateMediaSyncStateTypes").Action.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_metadata",
          ftype: e.STRUCT,
          fid: 2,
        }),
        t.action_metadata != null)
      )
        N(t.action_metadata, n);
      else {
        var l = m();
        N(l, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "actor", ftype: e.STRUCT, fid: 3 }),
        t.actor != null)
      )
        P(t.actor, n);
      else {
        var s = d();
        P(s, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content", ftype: e.STRUCT, fid: 4 }),
        t.content != null)
      )
        M(t.content, n);
      else {
        var u = p();
        M(u, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_source", ftype: e.I32, fid: 5 }),
        t.content_source != null)
      ) {
        var c;
        n.writeI32((c = t.content_source) != null ? c : 0);
      } else {
        var _ = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(_ != null ? _ : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 6 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var f = "";
        n.writeString(f);
      }
      if (
        (n.writeFieldEnd(),
        t.admin_message != null &&
          (n.writeFieldBegin({
            fname: "admin_message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.admin_message),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "admin_message_type",
          ftype: e.I32,
          fid: 8,
        }),
        t.admin_message_type != null)
      ) {
        var g;
        n.writeI32((g = t.admin_message_type) != null ? g : 0);
      } else {
        var h = o("MediaSyncStateMediaSyncStateTypes").AdminMessageType.cast(0);
        n.writeI32(h != null ? h : 0);
      }
      (n.writeFieldEnd(),
        t.seed_content_id != null &&
          (n.writeFieldBegin({
            fname: "seed_content_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.seed_content_id),
          n.writeFieldEnd()),
        t.initiator_id != null &&
          (n.writeFieldBegin({
            fname: "initiator_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.initiator_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $(t, n) {
      if (
        (n.writeStructBegin("MediaSyncConferenceOutputState"),
        n.writeFieldBegin({
          fname: "latest_input",
          ftype: (e || (e = r("ThriftTypes"))).STRUCT,
          fid: 1,
        }),
        t.latest_input != null)
      )
        D(t.latest_input, n);
      else {
        var o = s();
        D(o, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "latest_actor_id",
          ftype: e.STRING,
          fid: 2,
        }),
        t.latest_actor_id != null)
      )
        n.writeString(t.latest_actor_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "latest_new_content_start_time_ms",
          ftype: e.I64,
          fid: 3,
        }),
        t.latest_new_content_start_time_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.latest_new_content_start_time_ms));
      else {
        var i = "0";
        n.writeI64(r("jsbi").BigInt(i));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "history", ftype: e.LIST, fid: 4 }),
        t.history != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.history.length,
        });
        for (var l of t.history) z(l, n);
        n.writeListEnd();
      } else {
        var u = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: u.length,
        });
        for (var c of u) z(c, n);
        n.writeListEnd();
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function P(t, n) {
      if (
        (n.writeStructBegin("Actor"),
        n.writeFieldBegin({
          fname: "user_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.user_id != null)
      )
        n.writeString(t.user_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "username", ftype: e.STRING, fid: 2 }),
        t.username != null)
      )
        n.writeString(t.username);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "avatar_url", ftype: e.STRING, fid: 3 }),
        t.avatar_url != null)
      )
        n.writeString(t.avatar_url);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function N(t, n) {
      if (
        (n.writeStructBegin("ActionMetadata"),
        n.writeFieldBegin({
          fname: "media_position_ms",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 1,
        }),
        t.media_position_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.media_position_ms));
      else {
        var o = "0";
        n.writeI64(r("jsbi").BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "action_time_ms", ftype: e.I64, fid: 2 }),
        t.action_time_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.action_time_ms));
      else {
        var a = "0";
        n.writeI64(r("jsbi").BigInt(a));
      }
      if (
        (n.writeFieldEnd(),
        t.autoplay_action_id != null &&
          (n.writeFieldBegin({
            fname: "autoplay_action_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.autoplay_action_id),
          n.writeFieldEnd()),
        t.tab_source != null &&
          (n.writeFieldBegin({
            fname: "tab_source",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.tab_source),
          n.writeFieldEnd()),
        t.skip_double_write != null &&
          (n.writeFieldBegin({
            fname: "skip_double_write",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 5,
          }),
          n.writeBool(t.skip_double_write),
          n.writeFieldEnd()),
        t.ads_metadata != null &&
          (n.writeFieldBegin({
            fname: "ads_metadata",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          G(t.ads_metadata, n),
          n.writeFieldEnd()),
        t.carousel_item_index != null &&
          (n.writeFieldBegin({
            fname: "carousel_item_index",
            ftype: (e || (e = r("ThriftTypes"))).I32,
            fid: 7,
          }),
          n.writeI32(t.carousel_item_index),
          n.writeFieldEnd()),
        t.play_media_swipe_direction != null)
      ) {
        var i;
        (n.writeFieldBegin({
          fname: "play_media_swipe_direction",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 8,
        }),
          n.writeI32((i = t.play_media_swipe_direction) != null ? i : 0),
          n.writeFieldEnd());
      }
      (t.suggested_index != null &&
        (n.writeFieldBegin({
          fname: "suggested_index",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 9,
        }),
        n.writeI32(t.suggested_index),
        n.writeFieldEnd()),
        t.cursor != null &&
          (n.writeFieldBegin({
            fname: "cursor",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.cursor),
          n.writeFieldEnd()),
        t.suggested_context != null &&
          (n.writeFieldBegin({
            fname: "suggested_context",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.suggested_context),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function M(t, n) {
      (n.writeStructBegin("Content"),
        t.placeholder != null &&
          (n.writeFieldBegin({
            fname: "placeholder",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          O(t.placeholder, n),
          n.writeFieldEnd()),
        t.fallback != null &&
          (n.writeFieldBegin({
            fname: "fallback",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          B(t.fallback, n),
          n.writeFieldEnd()),
        t.ig_content != null &&
          (n.writeFieldBegin({
            fname: "ig_content",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          w(t.ig_content, n),
          n.writeFieldEnd()),
        t.fb_video != null &&
          (n.writeFieldBegin({
            fname: "fb_video",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          F(t.fb_video, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function w(t, n) {
      if (
        (n.writeStructBegin("InstagramContent"),
        n.writeFieldBegin({
          fname: "content_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "owner", ftype: e.STRUCT, fid: 2 }),
        t.owner != null)
      )
        A(t.owner, n);
      else {
        var i = f();
        A(i, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "media_type", ftype: e.I32, fid: 3 }),
        t.media_type != null)
      ) {
        var l;
        n.writeI32((l = t.media_type) != null ? l : 0);
      } else {
        var s = o("MediaSyncStateMediaSyncStateTypes").InstagramMediaType.cast(
          0,
        );
        n.writeI32(s != null ? s : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "thumbnail_url", ftype: e.STRING, fid: 4 }),
        t.thumbnail_url != null)
      )
        n.writeString(t.thumbnail_url);
      else {
        var u = "";
        n.writeString(u);
      }
      if ((n.writeFieldEnd(), t.images != null)) {
        (n.writeFieldBegin({
          fname: "images",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 5,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.images.length }));
        for (var c of t.images) U(c, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.video != null &&
          (n.writeFieldBegin({
            fname: "video",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          W(t.video, n),
          n.writeFieldEnd()),
        t.carousel != null)
      ) {
        (n.writeFieldBegin({
          fname: "carousel",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 7,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.carousel.length }));
        for (var d of t.carousel) w(d, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.audio_attribution != null &&
          (n.writeFieldBegin({
            fname: "audio_attribution",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          H(t.audio_attribution, n),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "product_type", ftype: e.I32, fid: 9 }),
        t.product_type != null)
      ) {
        var m;
        n.writeI32((m = t.product_type) != null ? m : 0);
      } else {
        var p = o(
          "MediaSyncStateMediaSyncStateTypes",
        ).InstagramProductType.cast(0);
        n.writeI32(p != null ? p : 0);
      }
      if (
        (n.writeFieldEnd(),
        t.tracking_token != null &&
          (n.writeFieldBegin({
            fname: "tracking_token",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.tracking_token),
          n.writeFieldEnd()),
        t.shopping_product_tags != null)
      ) {
        (n.writeFieldBegin({
          fname: "shopping_product_tags",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 11,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.shopping_product_tags.length,
          }));
        for (var _ of t.shopping_product_tags) Q(_, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function A(t, n) {
      if (
        (n.writeStructBegin("InstagramContentOwner"),
        n.writeFieldBegin({
          fname: "user_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.user_id != null)
      )
        n.writeString(t.user_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "username", ftype: e.STRING, fid: 2 }),
        t.username != null)
      )
        n.writeString(t.username);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "avatar_url", ftype: e.STRING, fid: 3 }),
        t.avatar_url != null)
      )
        n.writeString(t.avatar_url);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function F(t, n) {
      if (
        (n.writeStructBegin("FacebookVideo"),
        n.writeFieldBegin({
          fname: "content_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "video", ftype: e.STRUCT, fid: 2 }),
        t.video != null)
      )
        W(t.video, n);
      else {
        var a = C();
        W(a, n);
      }
      if (
        (n.writeFieldEnd(),
        t.thumbnail != null &&
          (n.writeFieldBegin({
            fname: "thumbnail",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          U(t.thumbnail, n),
          n.writeFieldEnd()),
        t.title != null &&
          (n.writeFieldBegin({
            fname: "title",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.title),
          n.writeFieldEnd()),
        t.subtitle != null &&
          (n.writeFieldBegin({
            fname: "subtitle",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.subtitle),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "is_live_streaming",
          ftype: e.BOOL,
          fid: 6,
        }),
        t.is_live_streaming != null)
      )
        n.writeBool(t.is_live_streaming);
      else {
        var i = !1;
        n.writeBool(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "is_reportable", ftype: e.BOOL, fid: 7 }),
        t.is_reportable != null)
      )
        n.writeBool(t.is_reportable);
      else {
        var l = !1;
        n.writeBool(l);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "available_caption_locales",
          ftype: e.LIST,
          fid: 8,
        }),
        t.available_caption_locales != null)
      ) {
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: t.available_caption_locales.length,
        });
        for (var s of t.available_caption_locales) V(s, n);
        n.writeListEnd();
      } else {
        var u = [];
        n.writeListBegin({
          etype: (e || (e = r("ThriftTypes"))).STRUCT,
          size: u.length,
        });
        for (var c of u) V(c, n);
        n.writeListEnd();
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "is_non_interactable",
          ftype: e.BOOL,
          fid: 9,
        }),
        t.is_non_interactable != null)
      )
        n.writeBool(t.is_non_interactable);
      else {
        var d = !1;
        n.writeBool(d);
      }
      if (
        (n.writeFieldEnd(),
        t.content_rating != null &&
          (n.writeFieldBegin({
            fname: "content_rating",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.content_rating),
          n.writeFieldEnd()),
        t.tracking != null &&
          (n.writeFieldBegin({
            fname: "tracking",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.tracking),
          n.writeFieldEnd()),
        t.saved_state != null)
      ) {
        var m;
        (n.writeFieldBegin({
          fname: "saved_state",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 12,
        }),
          n.writeI32((m = t.saved_state) != null ? m : 0),
          n.writeFieldEnd());
      }
      (t.is_reels != null &&
        (n.writeFieldBegin({
          fname: "is_reels",
          ftype: (e || (e = r("ThriftTypes"))).BOOL,
          fid: 13,
        }),
        n.writeBool(t.is_reels),
        n.writeFieldEnd()),
        t.reels_metadata != null &&
          (n.writeFieldBegin({
            fname: "reels_metadata",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          q(t.reels_metadata, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function O(t, n) {
      if (
        (n.writeStructBegin("Placeholder"),
        n.writeFieldBegin({
          fname: "content_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "title", ftype: e.STRING, fid: 2 }),
        t.title != null)
      )
        n.writeString(t.title);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "message", ftype: e.STRING, fid: 3 }),
        t.message != null)
      )
        n.writeString(t.message);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function B(t, n) {
      if (
        (n.writeStructBegin("Fallback"),
        n.writeFieldBegin({
          fname: "content_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "cover_image_url",
          ftype: e.STRING,
          fid: 2,
        }),
        t.cover_image_url != null)
      )
        n.writeString(t.cover_image_url);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(),
        t.message != null &&
          (n.writeFieldBegin({
            fname: "message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.message),
          n.writeFieldEnd()),
        t.video != null &&
          (n.writeFieldBegin({
            fname: "video",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          W(t.video, n),
          n.writeFieldEnd()),
        t.attribution_image_url != null &&
          (n.writeFieldBegin({
            fname: "attribution_image_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.attribution_image_url),
          n.writeFieldEnd()),
        t.attribution != null &&
          (n.writeFieldBegin({
            fname: "attribution",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.attribution),
          n.writeFieldEnd()),
        t.aspect_ratio != null &&
          (n.writeFieldBegin({
            fname: "aspect_ratio",
            ftype: (e || (e = r("ThriftTypes"))).FLOAT,
            fid: 7,
          }),
          n.writeFloat(t.aspect_ratio),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function W(t, n) {
      if (
        (n.writeStructBegin("Video"),
        t.dash_manifest != null &&
          (n.writeFieldBegin({
            fname: "dash_manifest",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.dash_manifest),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "duration_ms",
          ftype: (e || (e = r("ThriftTypes"))).I64,
          fid: 3,
        }),
        t.duration_ms != null)
      )
        n.writeI64(r("jsbi").BigInt(t.duration_ms));
      else {
        var o = "0";
        n.writeI64(r("jsbi").BigInt(o));
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "aspect_ratio", ftype: e.FLOAT, fid: 4 }),
        t.aspect_ratio != null)
      )
        n.writeFloat(t.aspect_ratio);
      else {
        var a = 0;
        n.writeFloat(a);
      }
      (n.writeFieldEnd(),
        t.url != null &&
          (n.writeFieldBegin({
            fname: "url",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          U(t.url, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function q(t, n) {
      (n.writeStructBegin("ReelsMetadata"),
        t.reels_media_source != null &&
          (n.writeFieldBegin({
            fname: "reels_media_source",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.reels_media_source),
          n.writeFieldEnd()),
        t.user_name != null &&
          (n.writeFieldBegin({
            fname: "user_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.user_name),
          n.writeFieldEnd()),
        t.avatar_url != null &&
          (n.writeFieldBegin({
            fname: "avatar_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.avatar_url),
          n.writeFieldEnd()),
        t.music_title != null &&
          (n.writeFieldBegin({
            fname: "music_title",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.music_title),
          n.writeFieldEnd()),
        t.effects_title != null &&
          (n.writeFieldBegin({
            fname: "effects_title",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.effects_title),
          n.writeFieldEnd()),
        t.like_count != null &&
          (n.writeFieldBegin({
            fname: "like_count",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.like_count),
          n.writeFieldEnd()),
        t.comment_count != null &&
          (n.writeFieldBegin({
            fname: "comment_count",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.comment_count),
          n.writeFieldEnd()),
        t.share_count != null &&
          (n.writeFieldBegin({
            fname: "share_count",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.share_count),
          n.writeFieldEnd()),
        t.is_viewer_liked != null &&
          (n.writeFieldBegin({
            fname: "is_viewer_liked",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 9,
          }),
          n.writeBool(t.is_viewer_liked),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function U(t, n) {
      if (
        (n.writeStructBegin("SizedUrl"),
        n.writeFieldBegin({
          fname: "url",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.url != null)
      )
        n.writeString(t.url);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "height", ftype: e.I32, fid: 2 }),
        t.height != null)
      )
        n.writeI32(t.height);
      else {
        var a = 0;
        n.writeI32(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "width", ftype: e.I32, fid: 3 }),
        t.width != null)
      )
        n.writeI32(t.width);
      else {
        var i = 0;
        n.writeI32(i);
      }
      (n.writeFieldEnd(),
        t.type != null &&
          (n.writeFieldBegin({
            fname: "type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.type),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function V(t, n) {
      if (
        (n.writeStructBegin("CaptionLocales"),
        n.writeFieldBegin({
          fname: "locale",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.locale != null)
      )
        n.writeString(t.locale);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "localized_language",
          ftype: e.STRING,
          fid: 2,
        }),
        t.localized_language != null)
      )
        n.writeString(t.localized_language);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        t.localized_country != null &&
          (n.writeFieldBegin({
            fname: "localized_country",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.localized_country),
          n.writeFieldEnd()),
        t.localized_creation_method != null &&
          (n.writeFieldBegin({
            fname: "localized_creation_method",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.localized_creation_method),
          n.writeFieldEnd()),
        n.writeFieldBegin({ fname: "captions_url", ftype: e.STRING, fid: 5 }),
        t.captions_url != null)
      )
        n.writeString(t.captions_url);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function H(t, n) {
      if (
        (n.writeStructBegin("AudioAttribution"),
        n.writeFieldBegin({
          fname: "artist_name",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.artist_name != null)
      )
        n.writeString(t.artist_name);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "song_title", ftype: e.STRING, fid: 2 }),
        t.song_title != null)
      )
        n.writeString(t.song_title);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function G(t, n) {
      (n.writeStructBegin("AdsMetadata"),
        t.ad_break_start_time_ms != null &&
          (n.writeFieldBegin({
            fname: "ad_break_start_time_ms",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(r("jsbi").BigInt(t.ad_break_start_time_ms)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function z(t, n) {
      if (
        (n.writeStructBegin("HistoryRecord"),
        n.writeFieldBegin({
          fname: "content_source",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.content_source != null)
      ) {
        var a;
        n.writeI32((a = t.content_source) != null ? a : 0);
      } else {
        var i = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 2 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function j(t, n) {
      if (
        (n.writeStructBegin("E2EEMediaSyncPayload"),
        n.writeFieldBegin({
          fname: "action",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 1,
        }),
        t.action != null)
      ) {
        var a;
        n.writeI32((a = t.action) != null ? a : 0);
      } else {
        var i = o("MediaSyncStateMediaSyncStateTypes").Action.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "action_metadata",
          ftype: e.STRUCT,
          fid: 2,
        }),
        t.action_metadata != null)
      )
        N(t.action_metadata, n);
      else {
        var l = m();
        N(l, n);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "admin_message_type",
          ftype: e.I32,
          fid: 3,
        }),
        t.admin_message_type != null)
      ) {
        var s;
        n.writeI32((s = t.admin_message_type) != null ? s : 0);
      } else {
        var u = o("MediaSyncStateMediaSyncStateTypes").AdminMessageType.cast(0);
        n.writeI32(u != null ? u : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_id", ftype: e.STRING, fid: 4 }),
        t.content_id != null)
      )
        n.writeString(t.content_id);
      else {
        var c = "";
        n.writeString(c);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "content_source", ftype: e.I32, fid: 5 }),
        t.content_source != null)
      ) {
        var d;
        n.writeI32((d = t.content_source) != null ? d : 0);
      } else {
        var p = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(p != null ? p : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "actor_id", ftype: e.STRING, fid: 6 }),
        t.actor_id != null)
      )
        n.writeString(t.actor_id);
      else {
        var _ = "";
        n.writeString(_);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function K(t, n) {
      if (
        (n.writeStructBegin("E2EEPMVAdBumperCount"),
        t.last_content_id != null &&
          (n.writeFieldBegin({
            fname: "last_content_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.last_content_id),
          n.writeFieldEnd()),
        n.writeFieldBegin({
          fname: "last_content_source",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
        t.last_content_source != null)
      ) {
        var a;
        n.writeI32((a = t.last_content_source) != null ? a : 0);
      } else {
        var i = o("MediaSyncStateMediaSyncStateTypes").Source.cast(0);
        n.writeI32(i != null ? i : 0);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "count", ftype: e.I32, fid: 3 }),
        t.count != null)
      )
        n.writeI32(t.count);
      else {
        var l = 0;
        n.writeI32(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Q(t, n) {
      if (
        (n.writeStructBegin("ShoppingProductTag"),
        n.writeFieldBegin({
          fname: "product_id",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.product_id != null)
      )
        n.writeString(t.product_id);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "product_name", ftype: e.STRING, fid: 2 }),
        t.product_name != null)
      )
        n.writeString(t.product_name);
      else {
        var a = "";
        n.writeString(a);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "product_position_x",
          ftype: e.STRING,
          fid: 3,
        }),
        t.product_position_x != null)
      )
        n.writeString(t.product_position_x);
      else {
        var i = "";
        n.writeString(i);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({
          fname: "product_position_y",
          ftype: e.STRING,
          fid: 4,
        }),
        t.product_position_y != null)
      )
        n.writeString(t.product_position_y);
      else {
        var l = "";
        n.writeString(l);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function X(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.action = o("MediaSyncStateMediaSyncStateTypes").Action.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.action_metadata = ee(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.admin_message_type = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).AdminMessageType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.skip_autoplay_candidate_generation = t.readBool())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.seed_content_id = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.initiator_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action === void 0 &&
          (n.action = o("MediaSyncStateMediaSyncStateTypes").Action.cast(0)),
        n.action_metadata === void 0 && (n.action_metadata = m()),
        n.content_id === void 0 && (n.content_id = ""),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.admin_message_type === void 0 &&
          (n.admin_message_type = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).AdminMessageType.cast(0)),
        n
      );
    }
    function Y(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.action = o("MediaSyncStateMediaSyncStateTypes").Action.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.action_metadata = ee(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.actor = Z(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.content = te(t))
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.admin_message = t.readString())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.admin_message_type = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).AdminMessageType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.seed_content_id = t.readString())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.initiator_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action === void 0 &&
          (n.action = o("MediaSyncStateMediaSyncStateTypes").Action.cast(0)),
        n.action_metadata === void 0 && (n.action_metadata = m()),
        n.actor === void 0 && (n.actor = d()),
        n.content === void 0 && (n.content = p()),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.content_id === void 0 && (n.content_id = ""),
        n.admin_message_type === void 0 &&
          (n.admin_message_type = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).AdminMessageType.cast(0)),
        n
      );
    }
    function J(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.latest_input = X(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.latest_actor_id = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.latest_new_content_start_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.history = [];
              for (var l = t.readListBegin(), u = 0; u < l.size; u++) {
                var c = pe(t);
                n.history.push(c);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.latest_input === void 0 && (n.latest_input = s()),
        n.latest_actor_id === void 0 && (n.latest_actor_id = ""),
        n.latest_new_content_start_time_ms === void 0 &&
          (n.latest_new_content_start_time_ms = "0"),
        n.history === void 0 && (n.history = []),
        n
      );
    }
    function Z(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.user_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.username = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.avatar_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.user_id === void 0 && (n.user_id = ""),
        n.username === void 0 && (n.username = ""),
        n.avatar_url === void 0 && (n.avatar_url = ""),
        n
      );
    }
    function ee(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.media_position_ms = t.readI64().toString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I64
              ? (n.action_time_ms = t.readI64().toString())
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.autoplay_action_id = t.readString())
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tab_source = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.skip_double_write = t.readBool())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.ads_metadata = me(t))
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.carousel_item_index = t.readI32())
              : t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.play_media_swipe_direction = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).PlayMediaSwipeDirection.cast(t.readI32()))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.suggested_index = t.readI32())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cursor = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.suggested_context = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.media_position_ms === void 0 && (n.media_position_ms = "0"),
        n.action_time_ms === void 0 && (n.action_time_ms = "0"),
        n
      );
    }
    function te(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.placeholder = ae(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.fallback = ie(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.ig_content = ne(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.fb_video = oe(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ne(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.owner = re(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.media_type = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).InstagramMediaType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.thumbnail_url = t.readString())
              : t.skip(i);
            break;
          case 5:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.images = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = ue(t);
                n.images.push(c);
              }
            } else t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.video = le(t))
              : t.skip(i);
            break;
          case 7:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.carousel = [];
              for (var d = t.readListBegin(), m = 0; m < d.size; m++) {
                var p = ne(t);
                n.carousel.push(p);
              }
            } else t.skip(i);
            break;
          case 8:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.audio_attribution = de(t))
              : t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.product_type = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).InstagramProductType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tracking_token = t.readString())
              : t.skip(i);
            break;
          case 11:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.shopping_product_tags = [];
              for (var _ = t.readListBegin(), g = 0; g < _.size; g++) {
                var h = ge(t);
                n.shopping_product_tags.push(h);
              }
            } else t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.content_id === void 0 && (n.content_id = ""),
        n.owner === void 0 && (n.owner = f()),
        n.media_type === void 0 &&
          (n.media_type = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).InstagramMediaType.cast(0)),
        n.thumbnail_url === void 0 && (n.thumbnail_url = ""),
        n.product_type === void 0 &&
          (n.product_type = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).InstagramProductType.cast(0)),
        n
      );
    }
    function re(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.user_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.username = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.avatar_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.user_id === void 0 && (n.user_id = ""),
        n.username === void 0 && (n.username = ""),
        n.avatar_url === void 0 && (n.avatar_url = ""),
        n
      );
    }
    function oe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.video = le(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.thumbnail = ue(t))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.subtitle = t.readString())
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_live_streaming = t.readBool())
              : t.skip(i);
            break;
          case 7:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_reportable = t.readBool())
              : t.skip(i);
            break;
          case 8:
            if (i === (e || (e = r("ThriftTypes"))).LIST) {
              n.available_caption_locales = [];
              for (var s = t.readListBegin(), u = 0; u < s.size; u++) {
                var c = ce(t);
                n.available_caption_locales.push(c);
              }
            } else t.skip(i);
            break;
          case 9:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_non_interactable = t.readBool())
              : t.skip(i);
            break;
          case 10:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_rating = t.readString())
              : t.skip(i);
            break;
          case 11:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tracking = t.readString())
              : t.skip(i);
            break;
          case 12:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.saved_state = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).SavedState.cast(t.readI32()))
              : t.skip(i);
            break;
          case 13:
            i === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_reels = t.readBool())
              : t.skip(i);
            break;
          case 14:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.reels_metadata = se(t))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.content_id === void 0 && (n.content_id = ""),
        n.video === void 0 && (n.video = C()),
        n.is_live_streaming === void 0 && (n.is_live_streaming = !1),
        n.is_reportable === void 0 && (n.is_reportable = !1),
        n.available_caption_locales === void 0 &&
          (n.available_caption_locales = []),
        n.is_non_interactable === void 0 && (n.is_non_interactable = !1),
        n
      );
    }
    function ae(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.content_id === void 0 && (n.content_id = ""),
        n.title === void 0 && (n.title = ""),
        n.message === void 0 && (n.message = ""),
        n
      );
    }
    function ie(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cover_image_url = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.video = le(t))
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.attribution_image_url = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.attribution = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.aspect_ratio = t.readFloat())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.content_id === void 0 && (n.content_id = ""),
        n.cover_image_url === void 0 && (n.cover_image_url = ""),
        n
      );
    }
    function le(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.dash_manifest = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.duration_ms = t.readI64().toString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).FLOAT
              ? (n.aspect_ratio = t.readFloat())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.url = ue(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.duration_ms === void 0 && (n.duration_ms = "0"),
        n.aspect_ratio === void 0 && (n.aspect_ratio = 0),
        n
      );
    }
    function se(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.reels_media_source = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.user_name = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.avatar_url = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.music_title = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.effects_title = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.like_count = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.comment_count = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.share_count = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_viewer_liked = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ue(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.url = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.height = t.readI32())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I32
              ? (n.width = t.readI32())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.type = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.url === void 0 && (n.url = ""),
        n.height === void 0 && (n.height = 0),
        n.width === void 0 && (n.width = 0),
        n
      );
    }
    function ce(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.locale = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.localized_language = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.localized_country = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.localized_creation_method = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.captions_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.locale === void 0 && (n.locale = ""),
        n.localized_language === void 0 && (n.localized_language = ""),
        n.captions_url === void 0 && (n.captions_url = ""),
        n
      );
    }
    function de(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.artist_name = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.song_title = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.artist_name === void 0 && (n.artist_name = ""),
        n.song_title === void 0 && (n.song_title = ""),
        n
      );
    }
    function me(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.ad_break_start_time_ms = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function pe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.content_id === void 0 && (n.content_id = ""),
        n
      );
    }
    function _e(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.action = o("MediaSyncStateMediaSyncStateTypes").Action.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.action_metadata = ee(t))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.admin_message_type = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).AdminMessageType.cast(t.readI32()))
              : t.skip(i);
            break;
          case 4:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.content_id = t.readString())
              : t.skip(i);
            break;
          case 5:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 6:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.actor_id = t.readString())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.action === void 0 &&
          (n.action = o("MediaSyncStateMediaSyncStateTypes").Action.cast(0)),
        n.action_metadata === void 0 && (n.action_metadata = m()),
        n.admin_message_type === void 0 &&
          (n.admin_message_type = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).AdminMessageType.cast(0)),
        n.content_id === void 0 && (n.content_id = ""),
        n.content_source === void 0 &&
          (n.content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.actor_id === void 0 && (n.actor_id = ""),
        n
      );
    }
    function fe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.last_content_id = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.last_content_source = o(
                  "MediaSyncStateMediaSyncStateTypes",
                ).Source.cast(t.readI32()))
              : t.skip(i);
            break;
          case 3:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.count = t.readI32())
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.last_content_source === void 0 &&
          (n.last_content_source = o(
            "MediaSyncStateMediaSyncStateTypes",
          ).Source.cast(0)),
        n.count === void 0 && (n.count = 0),
        n
      );
    }
    function ge(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.product_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.product_name = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.product_position_x = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.product_position_y = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.product_id === void 0 && (n.product_id = ""),
        n.product_name === void 0 && (n.product_name = ""),
        n.product_position_x === void 0 && (n.product_position_x = ""),
        n.product_position_y === void 0 && (n.product_position_y = ""),
        n
      );
    }
    ((l.MediaSyncInputState$DefaultConstructor = s),
      (l.MediaSyncOutputState$DefaultConstructor = u),
      (l.MediaSyncConferenceOutputState$DefaultConstructor = c),
      (l.Actor$DefaultConstructor = d),
      (l.ActionMetadata$DefaultConstructor = m),
      (l.Content$DefaultConstructor = p),
      (l.InstagramContent$DefaultConstructor = _),
      (l.InstagramContentOwner$DefaultConstructor = f),
      (l.FacebookVideo$DefaultConstructor = g),
      (l.Placeholder$DefaultConstructor = h),
      (l.Fallback$DefaultConstructor = y),
      (l.Video$DefaultConstructor = C),
      (l.ReelsMetadata$DefaultConstructor = b),
      (l.SizedUrl$DefaultConstructor = v),
      (l.CaptionLocales$DefaultConstructor = S),
      (l.AudioAttribution$DefaultConstructor = R),
      (l.AdsMetadata$DefaultConstructor = L),
      (l.HistoryRecord$DefaultConstructor = E),
      (l.E2EEMediaSyncPayload$DefaultConstructor = k),
      (l.E2EEPMVAdBumperCount$DefaultConstructor = I),
      (l.ShoppingProductTag$DefaultConstructor = T),
      (l.serializeMediaSyncInputState = D),
      (l.serializeMediaSyncOutputState = x),
      (l.serializeMediaSyncConferenceOutputState = $),
      (l.serializeActor = P),
      (l.serializeActionMetadata = N),
      (l.serializeContent = M),
      (l.serializeInstagramContent = w),
      (l.serializeInstagramContentOwner = A),
      (l.serializeFacebookVideo = F),
      (l.serializePlaceholder = O),
      (l.serializeFallback = B),
      (l.serializeVideo = W),
      (l.serializeReelsMetadata = q),
      (l.serializeSizedUrl = U),
      (l.serializeCaptionLocales = V),
      (l.serializeAudioAttribution = H),
      (l.serializeAdsMetadata = G),
      (l.serializeHistoryRecord = z),
      (l.serializeE2EEMediaSyncPayload = j),
      (l.serializeE2EEPMVAdBumperCount = K),
      (l.serializeShoppingProductTag = Q),
      (l.deserializeMediaSyncInputState = X),
      (l.deserializeMediaSyncOutputState = Y),
      (l.deserializeMediaSyncConferenceOutputState = J),
      (l.deserializeActor = Z),
      (l.deserializeActionMetadata = ee),
      (l.deserializeContent = te),
      (l.deserializeInstagramContent = ne),
      (l.deserializeInstagramContentOwner = re),
      (l.deserializeFacebookVideo = oe),
      (l.deserializePlaceholder = ae),
      (l.deserializeFallback = ie),
      (l.deserializeVideo = le),
      (l.deserializeReelsMetadata = se),
      (l.deserializeSizedUrl = ue),
      (l.deserializeCaptionLocales = ce),
      (l.deserializeAudioAttribution = de),
      (l.deserializeAdsMetadata = me),
      (l.deserializeHistoryRecord = pe),
      (l.deserializeE2EEMediaSyncPayload = _e),
      (l.deserializeE2EEPMVAdBumperCount = fe),
      (l.deserializeShoppingProductTag = ge));
  },
  98,
);
