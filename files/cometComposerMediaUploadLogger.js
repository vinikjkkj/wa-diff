__d(
  "cometComposerMediaUploadLogger",
  [
    "MediaUploadCancelFalcoEvent",
    "MediaUploadFailureFalcoEvent",
    "MediaUploadFlowFatalFalcoEvent",
    "MediaUploadFlowGiveupFalcoEvent",
    "MediaUploadFlowStartFalcoEvent",
    "MediaUploadFlowSuccessFalcoEvent",
    "MediaUploadInitFailureFalcoEvent",
    "MediaUploadInitStartFalcoEvent",
    "MediaUploadInitSuccessFalcoEvent",
    "MediaUploadProcessFailureFalcoEvent",
    "MediaUploadProcessSkippedFalcoEvent",
    "MediaUploadProcessStartFalcoEvent",
    "MediaUploadProcessSuccessFalcoEvent",
    "MediaUploadStartFalcoEvent",
    "MediaUploadSuccessFalcoEvent",
    "MediaUploadTransferCancelFalcoEvent",
    "MediaUploadTransferFailureFalcoEvent",
    "MediaUploadTransferStartFalcoEvent",
    "MediaUploadTransferSuccessFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (e.type) {
        case "MEDIA_RESIZE_START":
          s(e.fields, t);
          break;
        case "MEDIA_RESIZE_SUCCESS":
          u(e.fields, t);
          break;
        case "MEDIA_RESIZE_FAILURE":
          e.fields;
          break;
        case "MEDIA_UPLOAD_START":
          d(e.fields, t);
          break;
        case "MEDIA_UPLOAD_SUCCESS":
          m(e.fields, t);
          break;
        case "MEDIA_UPLOAD_FAILURE":
          p(e.fields, t);
          break;
        case "MEDIA_UPLOAD_CANCEL":
          _(e.fields, t);
          break;
        case "MEDIA_UPLOAD_PROCESS_START":
          f(e.fields, t);
          break;
        case "MEDIA_UPLOAD_PROCESS_FAILURE":
          g(e.fields, t);
          break;
        case "MEDIA_UPLOAD_PROCESS_CANCEL":
          h(e.fields, t);
          break;
        case "MEDIA_UPLOAD_PROCESS_SKIPPED":
          y(e.fields, t);
          break;
        case "MEDIA_UPLOAD_PROCESS_SUCCESS":
          C(e.fields, t);
          break;
        case "MEDIA_UPLOAD_TRANSFER_START":
          b(e.fields, t);
          break;
        case "MEDIA_UPLOAD_TRANSFER_FAILURE":
          v(e.fields, t);
          break;
        case "MEDIA_UPLOAD_TRANSFER_CANCEL":
          S(e.fields, t);
          break;
        case "MEDIA_UPLOAD_TRANSFER_SUCCESS":
          R(e.fields, t);
          break;
        case "MEDIA_UPLOAD_FLOW_START":
          L(e.fields, t);
          break;
        case "MEDIA_UPLOAD_FLOW_SUCCESS":
          E(e.fields, t);
          break;
        case "MEDIA_UPLOAD_FLOW_FATAL":
          k(e.fields, t);
          break;
        case "MEDIA_UPLOAD_FLOW_GIVEUP":
          I(e.fields, t);
          break;
        case "MEDIA_UPLOAD_INIT_START":
          T(e.fields, t);
          break;
        case "MEDIA_UPLOAD_INIT_SUCCESS":
          D(e.fields, t);
          break;
        case "MEDIA_UPLOAD_INIT_FAILURE":
          x(e.fields, t);
          break;
        default:
          break;
      }
    }
    function s(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = {
          creation_session_id: t,
          media_id: e == null ? void 0 : e.media_id,
          media_type: (n = e == null ? void 0 : e.media_type) != null ? n : "",
          source_file_size:
            e == null || (r = e.source_file_size) == null
              ? void 0
              : r.toString(),
          source_height_int:
            e == null || (o = e.source_height_int) == null
              ? void 0
              : o.toString(),
          source_type:
            e == null || (a = e.source_type) == null ? void 0 : a.toString(),
          source_width_int:
            e == null || (i = e.source_width_int) == null
              ? void 0
              : i.toString(),
        };
    }
    function u(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        s,
        u = {
          creation_session_id: t,
          media_id: e == null ? void 0 : e.media_id,
          media_type: (n = e == null ? void 0 : e.media_type) != null ? n : "",
          source_file_size:
            e == null || (r = e.source_file_size) == null
              ? void 0
              : r.toString(),
          source_height_int:
            e == null || (o = e.source_height_int) == null
              ? void 0
              : o.toString(),
          source_type:
            e == null || (a = e.source_type) == null ? void 0 : a.toString(),
          source_width_int:
            e == null || (i = e.source_width_int) == null
              ? void 0
              : i.toString(),
          upload_height_int:
            e == null || (l = e.upload_height_int) == null
              ? void 0
              : l.toString(),
          upload_width_int:
            e == null || (s = e.upload_width_int) == null
              ? void 0
              : s.toString(),
        };
    }
    function c(e, t) {}
    function d(e, t) {
      r("MediaUploadStartFalcoEvent").log(function () {
        return $(e, t);
      });
    }
    function m(e, t) {
      r("MediaUploadSuccessFalcoEvent").log(function () {
        return $(e, t);
      });
    }
    function p(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          error_code: e == null ? void 0 : e.error_code,
          error_description: e == null ? void 0 : e.error_description,
          error_summary: e == null ? void 0 : e.error_summary,
          is_optimistic_upload: e == null ? void 0 : e.is_optimistic_upload,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_id: e == null ? void 0 : e.media_id,
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
          video_edits_applied: e == null ? void 0 : e.video_edits_applied,
        };
      r("MediaUploadFailureFalcoEvent").log(function () {
        return s;
      });
    }
    function _(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          is_optimistic_upload: e == null ? void 0 : e.is_optimistic_upload,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
          video_edits_applied: e == null ? void 0 : e.video_edits_applied,
        };
      r("MediaUploadCancelFalcoEvent").log(function () {
        return s;
      });
    }
    function f(e, t) {
      r("MediaUploadProcessStartFalcoEvent").log(function () {
        return $(e, t);
      });
    }
    function g(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          error_description: e == null ? void 0 : e.error_description,
          is_optimistic_upload: e == null ? void 0 : e.is_optimistic_upload,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
          video_edits_applied: e == null ? void 0 : e.video_edits_applied,
        };
      r("MediaUploadProcessFailureFalcoEvent").log(function () {
        return s;
      });
    }
    function h(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          is_optimistic_upload: e == null ? void 0 : e.is_optimistic_upload,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
          video_edits_applied: e == null ? void 0 : e.video_edits_applied,
        };
      r("MediaUploadProcessFailureFalcoEvent").log(function () {
        return s;
      });
    }
    function y(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          creation_session_id: t,
          media_type: (n = e == null ? void 0 : e.media_type) != null ? n : "",
          original_file_size:
            e == null || (o = e.original_file_size) == null
              ? void 0
              : o.toString(),
          source: e == null ? void 0 : e.source,
          source_bit_rate:
            e == null || (a = e.source_bit_rate) == null
              ? void 0
              : a.toString(),
          source_height:
            e == null || (i = e.source_height) == null ? void 0 : i.toString(),
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width:
            e == null || (s = e.source_width) == null ? void 0 : s.toString(),
        };
      r("MediaUploadProcessSkippedFalcoEvent").log(function () {
        return u;
      });
    }
    function C(e, t) {
      r("MediaUploadProcessSuccessFalcoEvent").log(function () {
        return $(e, t);
      });
    }
    function b(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_id: e == null ? void 0 : e.media_id,
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height:
            e == null || (l = e.source_height) == null ? void 0 : l.toString(),
          source_type:
            e == null || (s = e.source_type) == null ? void 0 : s.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadTransferStartFalcoEvent").log(function () {
        return u;
      });
    }
    function v(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height:
            e == null || (l = e.source_height) == null ? void 0 : l.toString(),
          source_type:
            e == null || (s = e.source_type) == null ? void 0 : s.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadTransferFailureFalcoEvent").log(function () {
        return u;
      });
    }
    function S(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadTransferCancelFalcoEvent").log(function () {
        return s;
      });
    }
    function R(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_id: e == null ? void 0 : e.media_id,
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_session_id: e == null ? void 0 : e.media_session_id,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height:
            e == null || (l = e.source_height) == null ? void 0 : l.toString(),
          source_type:
            e == null || (s = e.source_type) == null ? void 0 : s.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadTransferSuccessFalcoEvent").log(function () {
        return u;
      });
    }
    function L(e, t) {
      var n,
        o = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_id: e == null ? void 0 : e.media_id,
          media_type: e == null ? void 0 : e.media_type,
          original_file_size:
            e == null || (n = e.original_file_size) == null
              ? void 0
              : n.toString(),
          source: e == null ? void 0 : e.source,
          source_type: e == null ? void 0 : e.source_type,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadFlowStartFalcoEvent").log(function () {
        return o;
      });
    }
    function E(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_id: e == null ? void 0 : e.media_id,
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_type: e == null ? void 0 : e.media_type,
          original_file_size:
            e == null || (o = e.original_file_size) == null
              ? void 0
              : o.toString(),
          source: e == null ? void 0 : e.source,
          source_bit_rate:
            e == null || (a = e.source_bit_rate) == null
              ? void 0
              : a.toString(),
          source_height:
            e == null || (i = e.source_height) == null ? void 0 : i.toString(),
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width:
            e == null || (s = e.source_width) == null ? void 0 : s.toString(),
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadFlowSuccessFalcoEvent").log(function () {
        return u;
      });
    }
    function k(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_type: e == null ? void 0 : e.media_type,
          original_file_size:
            e == null || (n = e.original_file_size) == null
              ? void 0
              : n.toString(),
          source: e == null ? void 0 : e.source,
          source_bit_rate:
            e == null || (o = e.source_bit_rate) == null
              ? void 0
              : o.toString(),
          source_file_size:
            e == null || (a = e.source_file_size) == null
              ? void 0
              : a.toString(),
          source_height:
            e == null || (i = e.source_height) == null ? void 0 : i.toString(),
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width:
            e == null || (s = e.source_width) == null ? void 0 : s.toString(),
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadFlowFatalFalcoEvent").log(function () {
        return u;
      });
    }
    function I(e, t) {
      var n = {
        author_is_page: e == null ? void 0 : e.author_is_page,
        creation_session_id: t,
        media_type: e == null ? void 0 : e.media_type,
        source: e == null ? void 0 : e.source,
        source_type: e == null ? void 0 : e.source_type,
        use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
      };
      r("MediaUploadFlowGiveupFalcoEvent").log(function () {
        return n;
      });
    }
    function T(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadInitStartFalcoEvent").log(function () {
        return s;
      });
    }
    function D(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height:
            e == null || (l = e.source_height) == null ? void 0 : l.toString(),
          source_type:
            e == null || (s = e.source_type) == null ? void 0 : s.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadInitSuccessFalcoEvent").log(function () {
        return u;
      });
    }
    function x(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s = {
          author_is_page: e == null ? void 0 : e.author_is_page,
          creation_session_id: t,
          media_data_size:
            e == null || (n = e.media_data_size) == null
              ? void 0
              : n.toString(),
          media_item_fbid: e == null ? void 0 : e.media_item_fbid,
          media_type: (o = e == null ? void 0 : e.media_type) != null ? o : "",
          original_file_size:
            e == null || (a = e.original_file_size) == null
              ? void 0
              : a.toString(),
          share_type: e == null ? void 0 : e.share_type,
          source: e == null ? void 0 : e.source,
          source_bit_rate: e == null ? void 0 : e.source_bit_rate,
          source_file_size:
            e == null || (i = e.source_file_size) == null
              ? void 0
              : i.toString(),
          source_height: e == null ? void 0 : e.source_height,
          source_type:
            e == null || (l = e.source_type) == null ? void 0 : l.toString(),
          source_width: e == null ? void 0 : e.source_width,
          use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        };
      r("MediaUploadInitFailureFalcoEvent").log(function () {
        return s;
      });
    }
    function $(e, t) {
      var n, r, o;
      return {
        author_is_page: e == null ? void 0 : e.author_is_page,
        can_upload_raw: void 0,
        creation_session_id: t,
        creative_tools: void 0,
        debug: void 0,
        error_code: e == null ? void 0 : e.error_code,
        error_description: e == null ? void 0 : e.error_description,
        error_summary: e == null ? void 0 : e.error_summary,
        granted_photo_perm: void 0,
        has_crop: void 0,
        has_doodles: void 0,
        is_hd_on: void 0,
        is_optimistic_upload: e == null ? void 0 : e.is_optimistic_upload,
        is_pad: void 0,
        is_vault: void 0,
        is_video_muted: void 0,
        is_video_trim: void 0,
        media_data_size:
          e == null || (n = e.media_data_size) == null ? void 0 : n.toString(),
        media_id: e == null ? void 0 : e.media_id,
        media_item_fbid: e == null ? void 0 : e.media_item_fbid,
        media_session_id: e == null ? void 0 : e.media_session_id,
        media_source_enabled: void 0,
        media_type: e == null ? void 0 : e.media_type,
        original_file_size:
          e == null || (r = e.original_file_size) == null
            ? void 0
            : r.toString(),
        share_type: e == null ? void 0 : e.share_type,
        source: e == null ? void 0 : e.source,
        source_bit_rate: e == null ? void 0 : e.source_bit_rate,
        source_file_size:
          e == null || (o = e.source_file_size) == null ? void 0 : o.toString(),
        source_height: e == null ? void 0 : e.source_height,
        source_height_int: e == null ? void 0 : e.source_height_int,
        source_type: e == null ? void 0 : e.source_type,
        source_width: e == null ? void 0 : e.source_width,
        source_width_int: e == null ? void 0 : e.source_width_int,
        target_has_audio: void 0,
        upload_height_int: e == null ? void 0 : e.upload_height_int,
        upload_width_int: e == null ? void 0 : e.upload_width_int,
        use_fb_image_picker: e == null ? void 0 : e.use_fb_image_picker,
        video_duration: void 0,
        video_requires_rendering: void 0,
        video_upload_quality: e == null ? void 0 : e.video_upload_quality,
      };
    }
    l.default = e;
  },
  98,
);
