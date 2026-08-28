__d(
  "ViewModelSerializers",
  ["ThriftTypes", "ViewModelTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return {};
    }
    function u() {
      return {};
    }
    function c() {
      return {};
    }
    function d() {
      return { url: "", title: "", subtitle: "" };
    }
    function m() {
      return { url: "" };
    }
    function p() {
      return {};
    }
    function _() {
      return {};
    }
    function f() {
      return {};
    }
    function g() {
      return {};
    }
    function h() {
      return {};
    }
    function y() {
      return {};
    }
    function C() {
      return {};
    }
    function b() {
      return {};
    }
    function v() {
      return {};
    }
    function S() {
      return {};
    }
    function R() {
      return {};
    }
    function L() {
      return {};
    }
    function E() {
      return {};
    }
    function k() {
      return {};
    }
    function I() {
      return {};
    }
    function T() {
      return { otid: "", timestamp_ms: "" };
    }
    function D() {
      return {};
    }
    function x() {
      return {};
    }
    function $() {
      return {};
    }
    function P() {
      return {};
    }
    function N() {
      return {};
    }
    function M() {
      return {};
    }
    function w() {
      return {};
    }
    function A() {
      return {};
    }
    function F() {
      return {};
    }
    function O() {
      return {};
    }
    function B() {
      return {};
    }
    function W() {
      return {};
    }
    function q() {
      return {};
    }
    function U() {
      return {};
    }
    function V() {
      return {};
    }
    function H() {
      return {};
    }
    function G() {
      return {};
    }
    function z() {
      return {};
    }
    function j() {
      return {};
    }
    function K() {
      return {};
    }
    function Q() {
      return {};
    }
    function X() {
      return {};
    }
    function Y() {
      return {};
    }
    function J(t, n) {
      (n.writeStructBegin("ImagineData"),
        t.media_type != null &&
          (n.writeFieldBegin({
            fname: "media_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.media_type),
          n.writeFieldEnd()),
        t.prompt != null &&
          (n.writeFieldBegin({
            fname: "prompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.prompt),
          n.writeFieldEnd()),
        t.uri != null &&
          (n.writeFieldBegin({
            fname: "uri",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.uri),
          n.writeFieldEnd()),
        t.temporary_handle != null &&
          (n.writeFieldBegin({
            fname: "temporary_handle",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.temporary_handle),
          n.writeFieldEnd()),
        t.request_id != null &&
          (n.writeFieldBegin({
            fname: "request_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.request_id),
          n.writeFieldEnd()),
        t.response_id != null &&
          (n.writeFieldBegin({
            fname: "response_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.response_id),
          n.writeFieldEnd()),
        t.insertion_index != null &&
          (n.writeFieldBegin({
            fname: "insertion_index",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.insertion_index),
          n.writeFieldEnd()),
        t.avatar_motion_type != null &&
          (n.writeFieldBegin({
            fname: "avatar_motion_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.avatar_motion_type),
          n.writeFieldEnd()),
        t.background_motion_type != null &&
          (n.writeFieldBegin({
            fname: "background_motion_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.background_motion_type),
          n.writeFieldEnd()),
        t.serialized_blob != null &&
          (n.writeFieldBegin({
            fname: "serialized_blob",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.serialized_blob),
          n.writeFieldEnd()),
        t.imagine_type != null &&
          (n.writeFieldBegin({
            fname: "imagine_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.imagine_type),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Z(t, n) {
      (n.writeStructBegin("ReelsData"),
        t.reels_url != null &&
          (n.writeFieldBegin({
            fname: "reels_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.reels_url),
          n.writeFieldEnd()),
        t.thumbnail_url != null &&
          (n.writeFieldBegin({
            fname: "thumbnail_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.thumbnail_url),
          n.writeFieldEnd()),
        t.author != null &&
          (n.writeFieldBegin({
            fname: "author",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.author),
          n.writeFieldEnd()),
        t.avatar_url != null &&
          (n.writeFieldBegin({
            fname: "avatar_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.avatar_url),
          n.writeFieldEnd()),
        t.media_id != null &&
          (n.writeFieldBegin({
            fname: "media_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.media_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ee(t, n) {
      if (
        (n.writeStructBegin("GenAIImagineViewModel"),
        t.imagine_raw_data != null)
      ) {
        (n.writeFieldBegin({
          fname: "imagine_raw_data",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.imagine_raw_data.length,
          }));
        for (var o of t.imagine_raw_data) J(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.message != null &&
        (n.writeFieldBegin({
          fname: "message",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 2,
        }),
        n.writeString(t.message),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function te(t, n) {
      if (
        (n.writeStructBegin("SourceItem"),
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
        n.writeFieldBegin({ fname: "subtitle", ftype: e.STRING, fid: 3 }),
        t.subtitle != null)
      )
        n.writeString(t.subtitle);
      else {
        var i = "";
        n.writeString(i);
      }
      (n.writeFieldEnd(),
        t.favicon_url != null &&
          (n.writeFieldBegin({
            fname: "favicon_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.favicon_url),
          n.writeFieldEnd()),
        t.favicon != null &&
          (n.writeFieldBegin({
            fname: "favicon",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          ne(t.favicon, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ne(t, n) {
      if (
        (n.writeStructBegin("MediaItem"),
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
      (n.writeFieldEnd(),
        t.url_fallback != null &&
          (n.writeFieldBegin({
            fname: "url_fallback",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.url_fallback),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function re(t, n) {
      if (
        (n.writeStructBegin("GenAISearchViewModel"),
        t.search_result_uri != null)
      ) {
        (n.writeFieldBegin({
          fname: "search_result_uri",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.search_result_uri.length,
          }));
        for (var o of t.search_result_uri) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.search_engine != null &&
          (n.writeFieldBegin({
            fname: "search_engine",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.search_engine),
          n.writeFieldEnd()),
        t.search_query != null &&
          (n.writeFieldBegin({
            fname: "search_query",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.search_query),
          n.writeFieldEnd()),
        t.attribution_link != null &&
          (n.writeFieldBegin({
            fname: "attribution_link",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.attribution_link),
          n.writeFieldEnd()),
        t.references_title != null)
      ) {
        (n.writeFieldBegin({
          fname: "references_title",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 5,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.references_title.length,
          }));
        for (var a of t.references_title) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (
        (t.search_engine_icon_url != null &&
          (n.writeFieldBegin({
            fname: "search_engine_icon_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.search_engine_icon_url),
          n.writeFieldEnd()),
        t.source_url != null &&
          (n.writeFieldBegin({
            fname: "source_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.source_url),
          n.writeFieldEnd()),
        t.response != null &&
          (n.writeFieldBegin({
            fname: "response",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.response),
          n.writeFieldEnd()),
        t.thumbnail_data != null)
      ) {
        (n.writeFieldBegin({
          fname: "thumbnail_data",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 9,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.thumbnail_data.length }));
        for (var i of t.thumbnail_data) n.writeString(i);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.thumbnail_cdn_url != null) {
        (n.writeFieldBegin({
          fname: "thumbnail_cdn_url",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 10,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.thumbnail_cdn_url.length,
          }));
        for (var l of t.thumbnail_cdn_url) n.writeString(l);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.sources != null) {
        (n.writeFieldBegin({
          fname: "sources",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 11,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.sources.length }));
        for (var s of t.sources) te(s, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.facepile_favicons != null) {
        (n.writeFieldBegin({
          fname: "facepile_favicons",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 12,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.facepile_favicons.length,
          }));
        for (var u of t.facepile_favicons) ne(u, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function oe(t, n) {
      if ((n.writeStructBegin("GenAIReelsViewModel"), t.reels_urls != null)) {
        (n.writeFieldBegin({
          fname: "reels_urls",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.reels_urls.length }));
        for (var o of t.reels_urls) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.reels_data != null) {
        (n.writeFieldBegin({
          fname: "reels_data",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.reels_data.length }));
        for (var a of t.reels_data) Z(a, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function ae(t, n) {
      (n.writeStructBegin("TeamInfo"),
        t.name != null &&
          (n.writeFieldBegin({
            fname: "name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.name),
          n.writeFieldEnd()),
        t.logo != null &&
          (n.writeFieldBegin({
            fname: "logo",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.logo),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ie(t, n) {
      (n.writeStructBegin("GameInfo"),
        t.home_team != null &&
          (n.writeFieldBegin({
            fname: "home_team",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          ae(t.home_team, n),
          n.writeFieldEnd()),
        t.away_team != null &&
          (n.writeFieldBegin({
            fname: "away_team",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          ae(t.away_team, n),
          n.writeFieldEnd()),
        t.home_team_score != null &&
          (n.writeFieldBegin({
            fname: "home_team_score",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.home_team_score),
          n.writeFieldEnd()),
        t.away_team_score != null &&
          (n.writeFieldBegin({
            fname: "away_team_score",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.away_team_score),
          n.writeFieldEnd()),
        t.match_status != null &&
          (n.writeFieldBegin({
            fname: "match_status",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.match_status),
          n.writeFieldEnd()),
        t.datetime != null &&
          (n.writeFieldBegin({
            fname: "datetime",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.datetime),
          n.writeFieldEnd()),
        t.date != null &&
          (n.writeFieldBegin({
            fname: "date",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.date),
          n.writeFieldEnd()),
        t.time != null &&
          (n.writeFieldBegin({
            fname: "time",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.time),
          n.writeFieldEnd()),
        t.tournament_name != null &&
          (n.writeFieldBegin({
            fname: "tournament_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.tournament_name),
          n.writeFieldEnd()),
        t.home_records != null &&
          (n.writeFieldBegin({
            fname: "home_records",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 10,
          }),
          n.writeString(t.home_records),
          n.writeFieldEnd()),
        t.away_records != null &&
          (n.writeFieldBegin({
            fname: "away_records",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 11,
          }),
          n.writeString(t.away_records),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function le(t, n) {
      (n.writeStructBegin("SportsSearchData"),
        t.game_info != null &&
          (n.writeFieldBegin({
            fname: "game_info",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          ie(t.game_info, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function se(t, n) {
      (n.writeStructBegin("GenAISportsViewModel"),
        t.sports_search_data != null &&
          (n.writeFieldBegin({
            fname: "sports_search_data",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          le(t.sports_search_data, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ue(t, n) {
      (n.writeStructBegin("PromptData"),
        t.text != null &&
          (n.writeFieldBegin({
            fname: "text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.text),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ce(t, n) {
      if ((n.writeStructBegin("GenAITextPromptViewModel"), t.prompts != null)) {
        (n.writeFieldBegin({
          fname: "prompts",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.prompts.length }));
        for (var o of t.prompts) ue(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function de(t, n) {
      (n.writeStructBegin("GenAIReminderViewModel"),
        t.reminder_id != null &&
          (n.writeFieldBegin({
            fname: "reminder_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.reminder_id),
          n.writeFieldEnd()),
        t.title != null &&
          (n.writeFieldBegin({
            fname: "title",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.title),
          n.writeFieldEnd()),
        t.trigger_type != null &&
          (n.writeFieldBegin({
            fname: "trigger_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.trigger_type),
          n.writeFieldEnd()),
        t.trigger_time != null &&
          (n.writeFieldBegin({
            fname: "trigger_time",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.trigger_time),
          n.writeFieldEnd()),
        t.create_time != null &&
          (n.writeFieldBegin({
            fname: "create_time",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.create_time),
          n.writeFieldEnd()),
        t.is_deleted != null &&
          (n.writeFieldBegin({
            fname: "is_deleted",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 6,
          }),
          n.writeBool(t.is_deleted),
          n.writeFieldEnd()),
        t.thumbnail_url != null &&
          (n.writeFieldBegin({
            fname: "thumbnail_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 7,
          }),
          n.writeString(t.thumbnail_url),
          n.writeFieldEnd()),
        t.full_size_url != null &&
          (n.writeFieldBegin({
            fname: "full_size_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 8,
          }),
          n.writeString(t.full_size_url),
          n.writeFieldEnd()),
        t.reminder_media_key != null &&
          (n.writeFieldBegin({
            fname: "reminder_media_key",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 9,
          }),
          n.writeString(t.reminder_media_key),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function me(t, n) {
      (n.writeStructBegin("GenAIBasilViewModel"),
        t.rldrive_object_id != null &&
          (n.writeFieldBegin({
            fname: "rldrive_object_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.rldrive_object_id),
          n.writeFieldEnd()),
        t.title != null &&
          (n.writeFieldBegin({
            fname: "title",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.title),
          n.writeFieldEnd()),
        t.subtitle != null &&
          (n.writeFieldBegin({
            fname: "subtitle",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.subtitle),
          n.writeFieldEnd()),
        t.create_time != null &&
          (n.writeFieldBegin({
            fname: "create_time",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.create_time),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function pe(t, n) {
      (n.writeStructBegin("GenAIStudioTransparencyViewModel"),
        t.admin_text != null &&
          (n.writeFieldBegin({
            fname: "admin_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.admin_text),
          n.writeFieldEnd()),
        t.cta_text != null &&
          (n.writeFieldBegin({
            fname: "cta_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.cta_text),
          n.writeFieldEnd()),
        t.cta_url != null &&
          (n.writeFieldBegin({
            fname: "cta_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.cta_url),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function _e(t, n) {
      (n.writeStructBegin("GenAIGemstoneGenAIMatchmakerViewModel"),
        t.candidate_profile_url != null &&
          (n.writeFieldBegin({
            fname: "candidate_profile_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.candidate_profile_url),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function fe(t, n) {
      if (
        (n.writeStructBegin("GenAIMemoryNotificationsViewModel"),
        t.memory_notifications_data != null)
      ) {
        (n.writeFieldBegin({
          fname: "memory_notifications_data",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.memory_notifications_data.length,
          }));
        for (var o of t.memory_notifications_data) ge(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function ge(t, n) {
      (n.writeStructBegin("GenAIMemoryNotificationData"),
        t.admin_text != null &&
          (n.writeFieldBegin({
            fname: "admin_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.admin_text),
          n.writeFieldEnd()),
        t.cta_text != null &&
          (n.writeFieldBegin({
            fname: "cta_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.cta_text),
          n.writeFieldEnd()),
        t.cta_url != null &&
          (n.writeFieldBegin({
            fname: "cta_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.cta_url),
          n.writeFieldEnd()),
        t.identifier != null &&
          (n.writeFieldBegin({
            fname: "identifier",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.identifier),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function he(t, n) {
      if (
        (n.writeStructBegin("GenAIBizAgentViewModel"),
        t.related_product_ids != null)
      ) {
        (n.writeFieldBegin({
          fname: "related_product_ids",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.related_product_ids.length,
          }));
        for (var o of t.related_product_ids) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.app_client_actions != null) {
        (n.writeFieldBegin({
          fname: "app_client_actions",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.app_client_actions.length,
          }));
        for (var a of t.app_client_actions) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.feOmnibotMessage != null &&
        (n.writeFieldBegin({
          fname: "feOmnibotMessage",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 3,
        }),
        n.writeString(t.feOmnibotMessage),
        n.writeFieldEnd()),
        t.fe_message != null &&
          (n.writeFieldBegin({
            fname: "fe_message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.fe_message),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ye(t, n) {
      if (
        (n.writeStructBegin("MessageIdParams"),
        n.writeFieldBegin({
          fname: "otid",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 1,
        }),
        t.otid != null)
      )
        n.writeString(t.otid);
      else {
        var o = "";
        n.writeString(o);
      }
      if (
        (n.writeFieldEnd(),
        n.writeFieldBegin({ fname: "timestamp_ms", ftype: e.STRING, fid: 2 }),
        t.timestamp_ms != null)
      )
        n.writeString(t.timestamp_ms);
      else {
        var a = "";
        n.writeString(a);
      }
      (n.writeFieldEnd(), n.writeFieldStop(), n.writeStructEnd());
    }
    function Ce(t, n) {
      (n.writeStructBegin("StoredMemory"),
        t.memory_id != null &&
          (n.writeFieldBegin({
            fname: "memory_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(BigInt(t.memory_id)),
          n.writeFieldEnd()),
        t.memory_text != null &&
          (n.writeFieldBegin({
            fname: "memory_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.memory_text),
          n.writeFieldEnd()),
        t.message_id_params != null &&
          (n.writeFieldBegin({
            fname: "message_id_params",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          ye(t.message_id_params, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function be(t, n) {
      (n.writeStructBegin("NewMemory"),
        t.memory_id != null &&
          (n.writeFieldBegin({
            fname: "memory_id",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 1,
          }),
          n.writeI64(BigInt(t.memory_id)),
          n.writeFieldEnd()),
        t.memory_text != null &&
          (n.writeFieldBegin({
            fname: "memory_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.memory_text),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ve(t, n) {
      if ((n.writeStructBegin("MemoryUpdate"), t.added_memories != null)) {
        (n.writeFieldBegin({
          fname: "added_memories",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRUCT, size: t.added_memories.length }));
        for (var o of t.added_memories) be(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.removed_memories != null) {
        (n.writeFieldBegin({
          fname: "removed_memories",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.removed_memories.length,
          }));
        for (var a of t.removed_memories) Ce(a, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (t.memory_update_admin_text != null &&
        (n.writeFieldBegin({
          fname: "memory_update_admin_text",
          ftype: (e || (e = r("ThriftTypes"))).STRING,
          fid: 3,
        }),
        n.writeString(t.memory_update_admin_text),
        n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Se(t, n) {
      (n.writeStructBegin("MemoryDisclosure"),
        t.disclosure_text != null &&
          (n.writeFieldBegin({
            fname: "disclosure_text",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.disclosure_text),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Re(t, n) {
      (n.writeStructBegin("GenAIMemoryUpdateViewModel"),
        t.memory_update != null &&
          (n.writeFieldBegin({
            fname: "memory_update",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          ve(t.memory_update, n),
          n.writeFieldEnd()),
        t.memory_disclosure != null &&
          (n.writeFieldBegin({
            fname: "memory_disclosure",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          Se(t.memory_disclosure, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Le(t, n) {
      if (
        (n.writeStructBegin("GenAIStreamingStateViewModel"),
        t.streaming_state != null &&
          (n.writeFieldBegin({
            fname: "streaming_state",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.streaming_state),
          n.writeFieldEnd()),
        t.tool_name != null)
      ) {
        var o;
        (n.writeFieldBegin({
          fname: "tool_name",
          ftype: (e || (e = r("ThriftTypes"))).I32,
          fid: 2,
        }),
          n.writeI32((o = t.tool_name) != null ? o : 0),
          n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Ee(t, n) {
      (n.writeStructBegin("GenAIControlTokenViewModel"),
        t.control_token != null &&
          (n.writeFieldBegin({
            fname: "control_token",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.control_token),
          n.writeFieldEnd()),
        t.token_id != null &&
          (n.writeFieldBegin({
            fname: "token_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.token_id),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function ke(t, n) {
      (n.writeStructBegin("ActionPayloadObject"),
        t.json != null &&
          (n.writeFieldBegin({
            fname: "json",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.json),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ie(t, n) {
      (n.writeStructBegin("DialogStateCacheObject"),
        t.dialog_state_cache_json != null &&
          (n.writeFieldBegin({
            fname: "dialog_state_cache_json",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.dialog_state_cache_json),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Te(t, n) {
      (n.writeStructBegin("StructuredResponseInfoObject"),
        t.structured_response_json != null &&
          (n.writeFieldBegin({
            fname: "structured_response_json",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.structured_response_json),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function De(t, n) {
      if ((n.writeStructBegin("PluginsMetadata"), t.executed_plugins != null)) {
        (n.writeFieldBegin({
          fname: "executed_plugins",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.executed_plugins.length,
          }));
        for (var o of t.executed_plugins) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.plugins_response_metadata_json != null) {
        (n.writeFieldBegin({
          fname: "plugins_response_metadata_json",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({
            etype: e.STRING,
            size: t.plugins_response_metadata_json.length,
          }));
        for (var a of t.plugins_response_metadata_json) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function xe(t, n) {
      (n.writeStructBegin("SGViewModel"),
        t.action_payload_object != null &&
          (n.writeFieldBegin({
            fname: "action_payload_object",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          ke(t.action_payload_object, n),
          n.writeFieldEnd()),
        t.dialog_state_cache_object != null &&
          (n.writeFieldBegin({
            fname: "dialog_state_cache_object",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          Ie(t.dialog_state_cache_object, n),
          n.writeFieldEnd()),
        t.structured_response_info_object != null &&
          (n.writeFieldBegin({
            fname: "structured_response_info_object",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          Te(t.structured_response_info_object, n),
          n.writeFieldEnd()),
        t.plugins_metadata != null &&
          (n.writeFieldBegin({
            fname: "plugins_metadata",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          De(t.plugins_metadata, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function $e(t, n) {
      if (
        (n.writeStructBegin("GenAIPersonasFeedSummaryViewModel"),
        t.owners != null)
      ) {
        (n.writeFieldBegin({
          fname: "owners",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.owners.length }));
        for (var o of t.owners) n.writeString(o);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      if (t.media_urls != null) {
        (n.writeFieldBegin({
          fname: "media_urls",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 2,
        }),
          n.writeListBegin({ etype: e.STRING, size: t.media_urls.length }));
        for (var a of t.media_urls) n.writeString(a);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function Pe(t, n) {
      (n.writeStructBegin("CalendarUpsellViewModel"),
        t.integration_category != null &&
          (n.writeFieldBegin({
            fname: "integration_category",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.integration_category),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ne(t, n) {
      (n.writeStructBegin("GenAIFeedRankingViewModel"),
        t.should_trigger_feed_refresh != null &&
          (n.writeFieldBegin({
            fname: "should_trigger_feed_refresh",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 1,
          }),
          n.writeBool(t.should_trigger_feed_refresh),
          n.writeFieldEnd()),
        t.ranking_prompt != null &&
          (n.writeFieldBegin({
            fname: "ranking_prompt",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.ranking_prompt),
          n.writeFieldEnd()),
        t.search_keywords != null &&
          (n.writeFieldBegin({
            fname: "search_keywords",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.search_keywords),
          n.writeFieldEnd()),
        t.should_trigger_search != null &&
          (n.writeFieldBegin({
            fname: "should_trigger_search",
            ftype: (e || (e = r("ThriftTypes"))).BOOL,
            fid: 4,
          }),
          n.writeBool(t.should_trigger_search),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Me(t, n) {
      (n.writeStructBegin("GenAIFeedVampingViewModel"),
        t.vamping_id != null &&
          (n.writeFieldBegin({
            fname: "vamping_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.vamping_id),
          n.writeFieldEnd()),
        t.quick_response != null &&
          (n.writeFieldBegin({
            fname: "quick_response",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.quick_response),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function we(t, n) {
      (n.writeStructBegin("ContactActionData"),
        t.action_type != null &&
          (n.writeFieldBegin({
            fname: "action_type",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.action_type),
          n.writeFieldEnd()),
        t.contact_name != null &&
          (n.writeFieldBegin({
            fname: "contact_name",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.contact_name),
          n.writeFieldEnd()),
        t.message != null &&
          (n.writeFieldBegin({
            fname: "message",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.message),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ae(t, n) {
      (n.writeStructBegin("GenAICallAndMessageContactViewModel"),
        t.contact_action_data != null &&
          (n.writeFieldBegin({
            fname: "contact_action_data",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          we(t.contact_action_data, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Fe(t, n) {
      (n.writeStructBegin("FBMarketplaceSearchData"),
        t.request_string != null &&
          (n.writeFieldBegin({
            fname: "request_string",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.request_string),
          n.writeFieldEnd()),
        t.min_price != null &&
          (n.writeFieldBegin({
            fname: "min_price",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 2,
          }),
          n.writeI64(BigInt(t.min_price)),
          n.writeFieldEnd()),
        t.max_price != null &&
          (n.writeFieldBegin({
            fname: "max_price",
            ftype: (e || (e = r("ThriftTypes"))).I64,
            fid: 3,
          }),
          n.writeI64(BigInt(t.max_price)),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Oe(t, n) {
      (n.writeStructBegin("GenAIFBMarketplaceSearchViewModel"),
        t.data != null &&
          (n.writeFieldBegin({
            fname: "data",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          Fe(t.data, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Be(t, n) {
      (n.writeStructBegin("TrendMediaDetails"),
        t.example_content != null &&
          (n.writeFieldBegin({
            fname: "example_content",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 1,
          }),
          n.writeString(t.example_content),
          n.writeFieldEnd()),
        t.image_url != null &&
          (n.writeFieldBegin({
            fname: "image_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 2,
          }),
          n.writeString(t.image_url),
          n.writeFieldEnd()),
        t.media_id != null &&
          (n.writeFieldBegin({
            fname: "media_id",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 3,
          }),
          n.writeString(t.media_id),
          n.writeFieldEnd()),
        t.owner != null &&
          (n.writeFieldBegin({
            fname: "owner",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 4,
          }),
          n.writeString(t.owner),
          n.writeFieldEnd()),
        t.playable_url != null &&
          (n.writeFieldBegin({
            fname: "playable_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 5,
          }),
          n.writeString(t.playable_url),
          n.writeFieldEnd()),
        t.profile_image_url != null &&
          (n.writeFieldBegin({
            fname: "profile_image_url",
            ftype: (e || (e = r("ThriftTypes"))).STRING,
            fid: 6,
          }),
          n.writeString(t.profile_image_url),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function We(t, n) {
      if (
        (n.writeStructBegin("GenAITrendsWithMediaViewModel"),
        t.trend_media_details != null)
      ) {
        (n.writeFieldBegin({
          fname: "trend_media_details",
          ftype: (e || (e = r("ThriftTypes"))).LIST,
          fid: 1,
        }),
          n.writeListBegin({
            etype: e.STRUCT,
            size: t.trend_media_details.length,
          }));
        for (var o of t.trend_media_details) Be(o, n);
        (n.writeListEnd(), n.writeFieldEnd());
      }
      (n.writeFieldStop(), n.writeStructEnd());
    }
    function qe(t, n) {
      (n.writeStructBegin("GenAIViewModels"),
        t.imagine_view_model != null &&
          (n.writeFieldBegin({
            fname: "imagine_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 1,
          }),
          ee(t.imagine_view_model, n),
          n.writeFieldEnd()),
        t.search_view_model != null &&
          (n.writeFieldBegin({
            fname: "search_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 2,
          }),
          re(t.search_view_model, n),
          n.writeFieldEnd()),
        t.reels_view_model != null &&
          (n.writeFieldBegin({
            fname: "reels_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 3,
          }),
          oe(t.reels_view_model, n),
          n.writeFieldEnd()),
        t.sports_view_model != null &&
          (n.writeFieldBegin({
            fname: "sports_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 4,
          }),
          se(t.sports_view_model, n),
          n.writeFieldEnd()),
        t.reminder_view_model != null &&
          (n.writeFieldBegin({
            fname: "reminder_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 5,
          }),
          de(t.reminder_view_model, n),
          n.writeFieldEnd()),
        t.studio_transparency_view_model != null &&
          (n.writeFieldBegin({
            fname: "studio_transparency_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 6,
          }),
          pe(t.studio_transparency_view_model, n),
          n.writeFieldEnd()),
        t.memory_notifications_view_model != null &&
          (n.writeFieldBegin({
            fname: "memory_notifications_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 7,
          }),
          fe(t.memory_notifications_view_model, n),
          n.writeFieldEnd()),
        t.memory_update_view_model != null &&
          (n.writeFieldBegin({
            fname: "memory_update_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 8,
          }),
          Re(t.memory_update_view_model, n),
          n.writeFieldEnd()),
        t.streaming_state_view_model != null &&
          (n.writeFieldBegin({
            fname: "streaming_state_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 9,
          }),
          Le(t.streaming_state_view_model, n),
          n.writeFieldEnd()),
        t.control_token_view_model != null &&
          (n.writeFieldBegin({
            fname: "control_token_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 10,
          }),
          Ee(t.control_token_view_model, n),
          n.writeFieldEnd()),
        t.sg_view_model != null &&
          (n.writeFieldBegin({
            fname: "sg_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 11,
          }),
          xe(t.sg_view_model, n),
          n.writeFieldEnd()),
        t.personas_feed_summary_view_model != null &&
          (n.writeFieldBegin({
            fname: "personas_feed_summary_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 12,
          }),
          $e(t.personas_feed_summary_view_model, n),
          n.writeFieldEnd()),
        t.calendar_upsell_view_model != null &&
          (n.writeFieldBegin({
            fname: "calendar_upsell_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 13,
          }),
          Pe(t.calendar_upsell_view_model, n),
          n.writeFieldEnd()),
        t.feed_ranking_view_model != null &&
          (n.writeFieldBegin({
            fname: "feed_ranking_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 14,
          }),
          Ne(t.feed_ranking_view_model, n),
          n.writeFieldEnd()),
        t.feed_vamping_view_model != null &&
          (n.writeFieldBegin({
            fname: "feed_vamping_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 15,
          }),
          Me(t.feed_vamping_view_model, n),
          n.writeFieldEnd()),
        t.call_and_message_contact_view_model != null &&
          (n.writeFieldBegin({
            fname: "call_and_message_contact_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 16,
          }),
          Ae(t.call_and_message_contact_view_model, n),
          n.writeFieldEnd()),
        t.fb_marketplace_search_view_model != null &&
          (n.writeFieldBegin({
            fname: "fb_marketplace_search_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 17,
          }),
          Oe(t.fb_marketplace_search_view_model, n),
          n.writeFieldEnd()),
        t.gemstone_matchmaker_view_model != null &&
          (n.writeFieldBegin({
            fname: "gemstone_matchmaker_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 18,
          }),
          _e(t.gemstone_matchmaker_view_model, n),
          n.writeFieldEnd()),
        t.trends_with_media_view_model != null &&
          (n.writeFieldBegin({
            fname: "trends_with_media_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 19,
          }),
          We(t.trends_with_media_view_model, n),
          n.writeFieldEnd()),
        t.basil_view_model != null &&
          (n.writeFieldBegin({
            fname: "basil_view_model",
            ftype: (e || (e = r("ThriftTypes"))).STRUCT,
            fid: 20,
          }),
          me(t.basil_view_model, n),
          n.writeFieldEnd()),
        n.writeFieldStop(),
        n.writeStructEnd());
    }
    function Ue(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.media_type = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.prompt = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.uri = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.temporary_handle = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.request_id = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.response_id = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.insertion_index = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.avatar_motion_type = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.background_motion_type = t.readString())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.serialized_blob = t.readString())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.imagine_type = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ve(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.reels_url = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.thumbnail_url = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.author = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.avatar_url = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.media_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function He(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.imagine_raw_data = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = Ue(t);
                n.imagine_raw_data.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.message = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ge(t) {
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.subtitle = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.favicon_url = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.favicon = ze(t))
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
        n.title === void 0 && (n.title = ""),
        n.subtitle === void 0 && (n.subtitle = ""),
        n
      );
    }
    function ze(t) {
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
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.url_fallback = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n.url === void 0 && (n.url = ""), n);
    }
    function je(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.search_result_uri = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.search_result_uri.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.search_engine = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.search_query = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.attribution_link = t.readString())
              : t.skip(a);
            break;
          case 5:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.references_title = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.references_title.push(m);
              }
            } else t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.search_engine_icon_url = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.source_url = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.response = t.readString())
              : t.skip(a);
            break;
          case 9:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.thumbnail_data = [];
              for (var p = t.readListBegin(), _ = 0; _ < p.size; _++) {
                var f = t.readString();
                n.thumbnail_data.push(f);
              }
            } else t.skip(a);
            break;
          case 10:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.thumbnail_cdn_url = [];
              for (var g = t.readListBegin(), h = 0; h < g.size; h++) {
                var y = t.readString();
                n.thumbnail_cdn_url.push(y);
              }
            } else t.skip(a);
            break;
          case 11:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.sources = [];
              for (var C = t.readListBegin(), b = 0; b < C.size; b++) {
                var v = Ge(t);
                n.sources.push(v);
              }
            } else t.skip(a);
            break;
          case 12:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.facepile_favicons = [];
              for (var S = t.readListBegin(), R = 0; R < S.size; R++) {
                var L = ze(t);
                n.facepile_favicons.push(L);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ke(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.reels_urls = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.reels_urls.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.reels_data = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = Ve(t);
                n.reels_data.push(m);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Qe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.name = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.logo = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Xe(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.home_team = Qe(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.away_team = Qe(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.home_team_score = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.away_team_score = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.match_status = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.datetime = t.readString())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.date = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.time = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.tournament_name = t.readString())
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.home_records = t.readString())
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.away_records = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ye(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.game_info = Xe(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Je(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sports_search_data = Ye(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ze(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.text = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function et(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.prompts = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = Ze(t);
                n.prompts.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function tt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.reminder_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.trigger_type = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.trigger_time = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.create_time = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.is_deleted = t.readBool())
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.thumbnail_url = t.readString())
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.full_size_url = t.readString())
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.reminder_media_key = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function nt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.rldrive_object_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.title = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.subtitle = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.create_time = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function rt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.admin_text = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cta_text = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cta_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ot(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.candidate_profile_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function at(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.memory_notifications_data = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = it(t);
                n.memory_notifications_data.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function it(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.admin_text = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cta_text = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.cta_url = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.identifier = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function lt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.related_product_ids = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.related_product_ids.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.app_client_actions = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.app_client_actions.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.feOmnibotMessage = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.fe_message = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function st(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.otid = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.timestamp_ms = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (
        t.readStructEnd(),
        n.otid === void 0 && (n.otid = ""),
        n.timestamp_ms === void 0 && (n.timestamp_ms = ""),
        n
      );
    }
    function ut(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.memory_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.memory_text = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.message_id_params = st(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ct(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.memory_id = t.readI64().toString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.memory_text = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function dt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.added_memories = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = ct(t);
                n.added_memories.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.removed_memories = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = ut(t);
                n.removed_memories.push(m);
              }
            } else t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.memory_update_admin_text = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function mt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.disclosure_text = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function pt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.memory_update = dt(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.memory_disclosure = mt(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function _t(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var a = t.readFieldBegin(),
          i = a.ftype,
          l = a.fid;
        if (i === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (l) {
          case 1:
            i === (e || (e = r("ThriftTypes"))).STRING
              ? (n.streaming_state = t.readString())
              : t.skip(i);
            break;
          case 2:
            i === (e || (e = r("ThriftTypes"))).I32
              ? (n.tool_name = o("ViewModelTypes").RTAIClippyToolName.cast(
                  t.readI32(),
                ))
              : t.skip(i);
            break;
          default:
            t.skip(i);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ft(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.control_token = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.token_id = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function gt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.json = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function ht(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.dialog_state_cache_json = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function yt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.structured_response_json = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Ct(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.executed_plugins = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.executed_plugins.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.plugins_response_metadata_json = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.plugins_response_metadata_json.push(m);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function bt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.action_payload_object = gt(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.dialog_state_cache_object = ht(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.structured_response_info_object = yt(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.plugins_metadata = Ct(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function vt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.owners = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = t.readString();
                n.owners.push(u);
              }
            } else t.skip(a);
            break;
          case 2:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.media_urls = [];
              for (var c = t.readListBegin(), d = 0; d < c.size; d++) {
                var m = t.readString();
                n.media_urls.push(m);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function St(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.integration_category = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Rt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.should_trigger_feed_refresh = t.readBool())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.ranking_prompt = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.search_keywords = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).BOOL
              ? (n.should_trigger_search = t.readBool())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Lt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.vamping_id = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.quick_response = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Et(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.action_type = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.contact_name = t.readString())
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
      return (t.readStructEnd(), n);
    }
    function kt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.contact_action_data = Et(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function It(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.request_string = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.min_price = t.readI64().toString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).I64
              ? (n.max_price = t.readI64().toString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Tt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.data = It(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function Dt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.example_content = t.readString())
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.image_url = t.readString())
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.media_id = t.readString())
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.owner = t.readString())
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.playable_url = t.readString())
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRING
              ? (n.profile_image_url = t.readString())
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function xt(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            if (a === (e || (e = r("ThriftTypes"))).LIST) {
              n.trend_media_details = [];
              for (var l = t.readListBegin(), s = 0; s < l.size; s++) {
                var u = Dt(t);
                n.trend_media_details.push(u);
              }
            } else t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    function $t(t) {
      var n = {};
      for (t.readStructBegin(); ; ) {
        var o = t.readFieldBegin(),
          a = o.ftype,
          i = o.fid;
        if (a === (e || (e = r("ThriftTypes"))).STOP) break;
        switch (i) {
          case 1:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.imagine_view_model = He(t))
              : t.skip(a);
            break;
          case 2:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.search_view_model = je(t))
              : t.skip(a);
            break;
          case 3:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.reels_view_model = Ke(t))
              : t.skip(a);
            break;
          case 4:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sports_view_model = Je(t))
              : t.skip(a);
            break;
          case 5:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.reminder_view_model = tt(t))
              : t.skip(a);
            break;
          case 6:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.studio_transparency_view_model = rt(t))
              : t.skip(a);
            break;
          case 7:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.memory_notifications_view_model = at(t))
              : t.skip(a);
            break;
          case 8:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.memory_update_view_model = pt(t))
              : t.skip(a);
            break;
          case 9:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.streaming_state_view_model = _t(t))
              : t.skip(a);
            break;
          case 10:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.control_token_view_model = ft(t))
              : t.skip(a);
            break;
          case 11:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.sg_view_model = bt(t))
              : t.skip(a);
            break;
          case 12:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.personas_feed_summary_view_model = vt(t))
              : t.skip(a);
            break;
          case 13:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.calendar_upsell_view_model = St(t))
              : t.skip(a);
            break;
          case 14:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.feed_ranking_view_model = Rt(t))
              : t.skip(a);
            break;
          case 15:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.feed_vamping_view_model = Lt(t))
              : t.skip(a);
            break;
          case 16:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.call_and_message_contact_view_model = kt(t))
              : t.skip(a);
            break;
          case 17:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.fb_marketplace_search_view_model = Tt(t))
              : t.skip(a);
            break;
          case 18:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.gemstone_matchmaker_view_model = ot(t))
              : t.skip(a);
            break;
          case 19:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.trends_with_media_view_model = xt(t))
              : t.skip(a);
            break;
          case 20:
            a === (e || (e = r("ThriftTypes"))).STRUCT
              ? (n.basil_view_model = nt(t))
              : t.skip(a);
            break;
          default:
            t.skip(a);
        }
        t.readFieldEnd();
      }
      return (t.readStructEnd(), n);
    }
    ((l.ImagineData$DefaultConstructor = s),
      (l.ReelsData$DefaultConstructor = u),
      (l.GenAIImagineViewModel$DefaultConstructor = c),
      (l.SourceItem$DefaultConstructor = d),
      (l.MediaItem$DefaultConstructor = m),
      (l.GenAISearchViewModel$DefaultConstructor = p),
      (l.GenAIReelsViewModel$DefaultConstructor = _),
      (l.TeamInfo$DefaultConstructor = f),
      (l.GameInfo$DefaultConstructor = g),
      (l.SportsSearchData$DefaultConstructor = h),
      (l.GenAISportsViewModel$DefaultConstructor = y),
      (l.PromptData$DefaultConstructor = C),
      (l.GenAITextPromptViewModel$DefaultConstructor = b),
      (l.GenAIReminderViewModel$DefaultConstructor = v),
      (l.GenAIBasilViewModel$DefaultConstructor = S),
      (l.GenAIStudioTransparencyViewModel$DefaultConstructor = R),
      (l.GenAIGemstoneGenAIMatchmakerViewModel$DefaultConstructor = L),
      (l.GenAIMemoryNotificationsViewModel$DefaultConstructor = E),
      (l.GenAIMemoryNotificationData$DefaultConstructor = k),
      (l.GenAIBizAgentViewModel$DefaultConstructor = I),
      (l.MessageIdParams$DefaultConstructor = T),
      (l.StoredMemory$DefaultConstructor = D),
      (l.NewMemory$DefaultConstructor = x),
      (l.MemoryUpdate$DefaultConstructor = $),
      (l.MemoryDisclosure$DefaultConstructor = P),
      (l.GenAIMemoryUpdateViewModel$DefaultConstructor = N),
      (l.GenAIStreamingStateViewModel$DefaultConstructor = M),
      (l.GenAIControlTokenViewModel$DefaultConstructor = w),
      (l.ActionPayloadObject$DefaultConstructor = A),
      (l.DialogStateCacheObject$DefaultConstructor = F),
      (l.StructuredResponseInfoObject$DefaultConstructor = O),
      (l.PluginsMetadata$DefaultConstructor = B),
      (l.SGViewModel$DefaultConstructor = W),
      (l.GenAIPersonasFeedSummaryViewModel$DefaultConstructor = q),
      (l.CalendarUpsellViewModel$DefaultConstructor = U),
      (l.GenAIFeedRankingViewModel$DefaultConstructor = V),
      (l.GenAIFeedVampingViewModel$DefaultConstructor = H),
      (l.ContactActionData$DefaultConstructor = G),
      (l.GenAICallAndMessageContactViewModel$DefaultConstructor = z),
      (l.FBMarketplaceSearchData$DefaultConstructor = j),
      (l.GenAIFBMarketplaceSearchViewModel$DefaultConstructor = K),
      (l.TrendMediaDetails$DefaultConstructor = Q),
      (l.GenAITrendsWithMediaViewModel$DefaultConstructor = X),
      (l.GenAIViewModels$DefaultConstructor = Y),
      (l.serializeImagineData = J),
      (l.serializeReelsData = Z),
      (l.serializeGenAIImagineViewModel = ee),
      (l.serializeSourceItem = te),
      (l.serializeMediaItem = ne),
      (l.serializeGenAISearchViewModel = re),
      (l.serializeGenAIReelsViewModel = oe),
      (l.serializeTeamInfo = ae),
      (l.serializeGameInfo = ie),
      (l.serializeSportsSearchData = le),
      (l.serializeGenAISportsViewModel = se),
      (l.serializePromptData = ue),
      (l.serializeGenAITextPromptViewModel = ce),
      (l.serializeGenAIReminderViewModel = de),
      (l.serializeGenAIBasilViewModel = me),
      (l.serializeGenAIStudioTransparencyViewModel = pe),
      (l.serializeGenAIGemstoneGenAIMatchmakerViewModel = _e),
      (l.serializeGenAIMemoryNotificationsViewModel = fe),
      (l.serializeGenAIMemoryNotificationData = ge),
      (l.serializeGenAIBizAgentViewModel = he),
      (l.serializeMessageIdParams = ye),
      (l.serializeStoredMemory = Ce),
      (l.serializeNewMemory = be),
      (l.serializeMemoryUpdate = ve),
      (l.serializeMemoryDisclosure = Se),
      (l.serializeGenAIMemoryUpdateViewModel = Re),
      (l.serializeGenAIStreamingStateViewModel = Le),
      (l.serializeGenAIControlTokenViewModel = Ee),
      (l.serializeActionPayloadObject = ke),
      (l.serializeDialogStateCacheObject = Ie),
      (l.serializeStructuredResponseInfoObject = Te),
      (l.serializePluginsMetadata = De),
      (l.serializeSGViewModel = xe),
      (l.serializeGenAIPersonasFeedSummaryViewModel = $e),
      (l.serializeCalendarUpsellViewModel = Pe),
      (l.serializeGenAIFeedRankingViewModel = Ne),
      (l.serializeGenAIFeedVampingViewModel = Me),
      (l.serializeContactActionData = we),
      (l.serializeGenAICallAndMessageContactViewModel = Ae),
      (l.serializeFBMarketplaceSearchData = Fe),
      (l.serializeGenAIFBMarketplaceSearchViewModel = Oe),
      (l.serializeTrendMediaDetails = Be),
      (l.serializeGenAITrendsWithMediaViewModel = We),
      (l.serializeGenAIViewModels = qe),
      (l.deserializeImagineData = Ue),
      (l.deserializeReelsData = Ve),
      (l.deserializeGenAIImagineViewModel = He),
      (l.deserializeSourceItem = Ge),
      (l.deserializeMediaItem = ze),
      (l.deserializeGenAISearchViewModel = je),
      (l.deserializeGenAIReelsViewModel = Ke),
      (l.deserializeTeamInfo = Qe),
      (l.deserializeGameInfo = Xe),
      (l.deserializeSportsSearchData = Ye),
      (l.deserializeGenAISportsViewModel = Je),
      (l.deserializePromptData = Ze),
      (l.deserializeGenAITextPromptViewModel = et),
      (l.deserializeGenAIReminderViewModel = tt),
      (l.deserializeGenAIBasilViewModel = nt),
      (l.deserializeGenAIStudioTransparencyViewModel = rt),
      (l.deserializeGenAIGemstoneGenAIMatchmakerViewModel = ot),
      (l.deserializeGenAIMemoryNotificationsViewModel = at),
      (l.deserializeGenAIMemoryNotificationData = it),
      (l.deserializeGenAIBizAgentViewModel = lt),
      (l.deserializeMessageIdParams = st),
      (l.deserializeStoredMemory = ut),
      (l.deserializeNewMemory = ct),
      (l.deserializeMemoryUpdate = dt),
      (l.deserializeMemoryDisclosure = mt),
      (l.deserializeGenAIMemoryUpdateViewModel = pt),
      (l.deserializeGenAIStreamingStateViewModel = _t),
      (l.deserializeGenAIControlTokenViewModel = ft),
      (l.deserializeActionPayloadObject = gt),
      (l.deserializeDialogStateCacheObject = ht),
      (l.deserializeStructuredResponseInfoObject = yt),
      (l.deserializePluginsMetadata = Ct),
      (l.deserializeSGViewModel = bt),
      (l.deserializeGenAIPersonasFeedSummaryViewModel = vt),
      (l.deserializeCalendarUpsellViewModel = St),
      (l.deserializeGenAIFeedRankingViewModel = Rt),
      (l.deserializeGenAIFeedVampingViewModel = Lt),
      (l.deserializeContactActionData = Et),
      (l.deserializeGenAICallAndMessageContactViewModel = kt),
      (l.deserializeFBMarketplaceSearchData = It),
      (l.deserializeGenAIFBMarketplaceSearchViewModel = Tt),
      (l.deserializeTrendMediaDetails = Dt),
      (l.deserializeGenAITrendsWithMediaViewModel = xt),
      (l.deserializeGenAIViewModels = $t));
  },
  98,
);
