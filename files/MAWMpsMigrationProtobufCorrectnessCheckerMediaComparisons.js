__d(
  "MAWMpsMigrationProtobufCorrectnessCheckerMediaComparisons",
  ["MAWMpsMigrationProtobufCorrectnessCheckerUtils", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return ((e == null ? void 0 : e.objectId) || "").localeCompare(
        (t == null ? void 0 : t.objectId) || "",
      );
    }
    function s(e, t) {
      return o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
        e == null ? void 0 : e.fileEncSha256,
        t == null ? void 0 : t.fileEncSha256,
      )
        ? o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
            e == null ? void 0 : e.fileSha256,
            t == null ? void 0 : t.fileSha256,
          )
          ? (e == null ? void 0 : e.directPath) !==
            (t == null ? void 0 : t.directPath)
            ? o("WAResultOrError").makeError("direct_path_mismatch")
            : o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
                  e == null ? void 0 : e.mediaKey,
                  t == null ? void 0 : t.mediaKey,
                )
              ? (e == null ? void 0 : e.mediaKeyTimestamp) !==
                (t == null ? void 0 : t.mediaKeyTimestamp)
                ? o("WAResultOrError").makeError("media_key_timestamp_mismatch")
                : (e == null ? void 0 : e.objectId) !==
                    (t == null ? void 0 : t.objectId)
                  ? o("WAResultOrError").makeError("object_id_mismatch")
                  : o("WAResultOrError").makeResult()
              : o("WAResultOrError").makeError("media_key_mismatch")
          : o("WAResultOrError").makeError("file_sha256_mismatch")
        : o("WAResultOrError").makeError("file_enc_sha256_mismatch");
    }
    function u(e, t) {
      var n, r, a, i;
      if (
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").softCompareLongInt(
          e == null || (n = e.ancillary) == null ? void 0 : n.fileLength,
          t == null || (r = t.ancillary) == null ? void 0 : r.fileLength,
        )
      )
        return o("WAResultOrError").makeError(
          "wa_media_transport_file_length_mismatch",
        );
      var l = s(
        babelHelpers.extends({}, e == null ? void 0 : e.integral, {
          objectId:
            e == null || (a = e.ancillary) == null ? void 0 : a.objectId,
        }),
        babelHelpers.extends({}, t == null ? void 0 : t.integral, {
          objectId:
            t == null || (i = t.ancillary) == null ? void 0 : i.objectId,
        }),
      );
      return l.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("wa_media_transport_" + l.error);
    }
    function c(t, n) {
      var r, a, i, l, c, d, m, p;
      if (
        ((r = t.payload.ancillary) == null ? void 0 : r.seconds) !==
        ((a = n.payload.ancillary) == null ? void 0 : a.seconds)
      )
        return o("WAResultOrError").makeError(
          "audio_ancillary_seconds_mismatch",
        );
      if (
        ((i = t.payload.ancillary) == null || (i = i.avatarAudio) == null
          ? void 0
          : i.poseId) !==
        ((l = n.payload.ancillary) == null || (l = l.avatarAudio) == null
          ? void 0
          : l.poseId)
      )
        return o("WAResultOrError").makeError(
          "audio_ancillary_avatar_pose_id_mismatch",
        );
      var _ = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        (c = t.payload.ancillary) == null || (c = c.avatarAudio) == null
          ? void 0
          : c.avatarAnimations,
        (d = n.payload.ancillary) == null || (d = d.avatarAudio) == null
          ? void 0
          : d.avatarAnimations,
        function (t, n) {
          return e(t, n);
        },
        function (e, t) {
          return s(e, t);
        },
      );
      if (!_.success)
        return o("WAResultOrError").makeError(
          "audio_ancillary_avatarAnimations_" + _.error,
        );
      var f = u(
        (m = t.payload.integral) == null ? void 0 : m.transport,
        (p = n.payload.integral) == null ? void 0 : p.transport,
      );
      return f.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("audio_" + f.error);
    }
    function d(e, t) {
      var n, r, a, i;
      if (e.fileName !== t.fileName)
        return o("WAResultOrError").makeError("document_file_name_mismatch");
      if (
        ((n = e.payload.ancillary) == null ? void 0 : n.pageCount) !==
        ((r = t.payload.ancillary) == null ? void 0 : r.pageCount)
      )
        return o("WAResultOrError").makeError("document_page_count_mismatch");
      var l = u(
        (a = e.payload.integral) == null ? void 0 : a.transport,
        (i = t.payload.integral) == null ? void 0 : i.transport,
      );
      return l.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("document_" + l.error);
    }
    function m(e, t) {
      var n, r;
      return (
        ((n = e.integral) == null ||
        (n = n.transport) == null ||
        (n = n.ancillary) == null
          ? void 0
          : n.objectId) || ""
      ).localeCompare(
        ((r = t.integral) == null ||
        (r = r.transport) == null ||
        (r = r.ancillary) == null
          ? void 0
          : r.objectId) || "",
      );
    }
    function p(e, t) {
      var n, r, a, i, l, s, c, d, m, p, _, f, g, h, y, C;
      if (
        ((n = e.ancillary) == null ? void 0 : n.height) !==
        ((r = t.ancillary) == null ? void 0 : r.height)
      )
        return o("WAResultOrError").makeError(
          "image_ancillary_height_mismatch",
        );
      if (
        ((a = e.ancillary) == null ? void 0 : a.width) !==
        ((i = t.ancillary) == null ? void 0 : i.width)
      )
        return o("WAResultOrError").makeError("image_ancillary_width_mismatch");
      if (
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
          (l = e.ancillary) == null ? void 0 : l.scansSidecar,
          (s = t.ancillary) == null ? void 0 : s.scansSidecar,
        )
      )
        return o("WAResultOrError").makeError(
          "image_ancillary_scans_sidecar_mismatch",
        );
      var b = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        (c = e.ancillary) == null ? void 0 : c.scanLengths,
        (d = t.ancillary) == null ? void 0 : d.scanLengths,
        function (e, t) {
          return e - t;
        },
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils")
          .directComparsionFunction,
      );
      if (!b.success)
        return o("WAResultOrError").makeError(
          "image_ancillary_scan_lengths_" + b.error,
        );
      if (
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
          (m = e.ancillary) == null ? void 0 : m.midQualityFileSha256,
          (p = t.ancillary) == null ? void 0 : p.midQualityFileSha256,
        )
      )
        return o("WAResultOrError").makeError(
          "image_ancillary_mid_quality_file_sha256_mismatch",
        );
      var v = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        (_ = e.ancillary) == null ? void 0 : _.memoriesConceptScores,
        (f = t.ancillary) == null ? void 0 : f.memoriesConceptScores,
        function (e, t) {
          return e - t;
        },
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils")
          .directComparsionFunction,
      );
      if (!v.success)
        return o("WAResultOrError").makeError(
          "image_ancillary_memories_concept_scores_" + v.error,
        );
      var S = o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareArray(
        (g = e.ancillary) == null ? void 0 : g.memoriesConceptIds,
        (h = t.ancillary) == null ? void 0 : h.memoriesConceptIds,
        function (e, t) {
          return e - t;
        },
        o("MAWMpsMigrationProtobufCorrectnessCheckerUtils")
          .directComparsionFunction,
      );
      if (!S.success)
        return o("WAResultOrError").makeError(
          "image_ancillary_memories_concept_ids_" + S.error,
        );
      var R = u(
        (y = e.integral) == null ? void 0 : y.transport,
        (C = t.integral) == null ? void 0 : C.transport,
      );
      return R.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("image_" + R.error);
    }
    function _(e, t) {
      var n, r, a, i, l, s, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
      if (
        ((n = e.ancillary) == null ? void 0 : n.seconds) !==
        ((r = t.ancillary) == null ? void 0 : r.seconds)
      )
        return o("WAResultOrError").makeError(
          "video_ancillary_seconds_mismatch",
        );
      var L = o(
        "MAWMpsMigrationProtobufCorrectnessCheckerUtils",
      ).compareMessageText(
        (a = e.ancillary) == null ? void 0 : a.caption,
        (i = t.ancillary) == null ? void 0 : i.caption,
      );
      if (!L.success)
        return o("WAResultOrError").makeError(
          "video_ancillary_caption_" + L.error,
        );
      if (
        ((l = e.ancillary) == null ? void 0 : l.gifPlayback) !==
        ((s = t.ancillary) == null ? void 0 : s.gifPlayback)
      )
        return o("WAResultOrError").makeError(
          "video_ancillary_gif_playback_mismatch",
        );
      if (
        ((c = e.ancillary) == null ? void 0 : c.height) !==
        ((d = t.ancillary) == null ? void 0 : d.height)
      )
        return o("WAResultOrError").makeError(
          "video_ancillary_height_mismatch",
        );
      if (
        ((m = e.ancillary) == null ? void 0 : m.width) !==
        ((p = t.ancillary) == null ? void 0 : p.width)
      )
        return o("WAResultOrError").makeError("video_ancillary_width_mismatch");
      if (
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
          (_ = e.ancillary) == null ? void 0 : _.sidecar,
          (f = t.ancillary) == null ? void 0 : f.sidecar,
        )
      )
        return o("WAResultOrError").makeError(
          "video_ancillary_scans_sidecar_mismatch",
        );
      if (
        ((g = e.ancillary) == null ? void 0 : g.gifAttribution) !==
        ((h = t.ancillary) == null ? void 0 : h.gifAttribution)
      )
        return o("WAResultOrError").makeError(
          "video_ancillary_gif_attribution_mismatch",
        );
      if (
        ((y = e.ancillary) == null ? void 0 : y.accessibilityLabel) !==
        ((C = t.ancillary) == null ? void 0 : C.accessibilityLabel)
      )
        return o("WAResultOrError").makeError(
          "video_ancillary_accessibility_label_mismatch",
        );
      if (
        ((b = e.ancillary) == null ? void 0 : b.isHd) !==
        ((v = t.ancillary) == null ? void 0 : v.isHd)
      )
        return o("WAResultOrError").makeError("video_ancillary_is_hd_mismatch");
      var E = u(
        (S = e.integral) == null ? void 0 : S.transport,
        (R = t.integral) == null ? void 0 : R.transport,
      );
      return E.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("video_" + E.error);
    }
    function f(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I;
      if (
        ((n = e.payload.ancillary) == null ? void 0 : n.pageCount) !==
        ((r = t.payload.ancillary) == null ? void 0 : r.pageCount)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_page_count_mismatch",
        );
      if (
        ((a = e.payload.ancillary) == null ? void 0 : a.height) !==
        ((i = t.payload.ancillary) == null ? void 0 : i.height)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_height_mismatch",
        );
      if (
        ((l = e.payload.ancillary) == null ? void 0 : l.width) !==
        ((s = t.payload.ancillary) == null ? void 0 : s.width)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_width_mismatch",
        );
      if (
        ((c = e.payload.ancillary) == null ? void 0 : c.firstFrameLength) !==
        ((d = t.payload.ancillary) == null ? void 0 : d.firstFrameLength)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_first_frame_length_mismatch",
        );
      if (
        !o("MAWMpsMigrationProtobufCorrectnessCheckerUtils").compareBinary(
          (m = e.payload.ancillary) == null ? void 0 : m.firstFrameSidecar,
          (p = t.payload.ancillary) == null ? void 0 : p.firstFrameSidecar,
        )
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_first_frame_sidecar_mismatch",
        );
      if (
        ((_ = e.payload.ancillary) == null ? void 0 : _.mustacheText) !==
        ((f = t.payload.ancillary) == null ? void 0 : f.mustacheText)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_mustache_text_mismatch",
        );
      if (
        ((g = e.payload.ancillary) == null ? void 0 : g.isThirdParty) !==
        ((h = t.payload.ancillary) == null ? void 0 : h.isThirdParty)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_is_third_party_mismatch",
        );
      if (
        ((y = e.payload.ancillary) == null ? void 0 : y.receiverFetchId) !==
        ((C = t.payload.ancillary) == null ? void 0 : C.receiverFetchId)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_receiver_fetch_id_mismatch",
        );
      if (
        ((b = e.payload.ancillary) == null ? void 0 : b.accessibilityLabel) !==
        ((v = t.payload.ancillary) == null ? void 0 : v.accessibilityLabel)
      )
        return o("WAResultOrError").makeError(
          "sticker_ancillary_accessibility_label_mismatch",
        );
      if (
        ((S = e.payload.integral) == null ? void 0 : S.isAnimated) !==
        ((R = t.payload.integral) == null ? void 0 : R.isAnimated)
      )
        return o("WAResultOrError").makeError(
          "sticker_integral_is_animated_mismatch",
        );
      if (
        ((L = e.payload.integral) == null ? void 0 : L.receiverFetchId) !==
        ((E = t.payload.integral) == null ? void 0 : E.receiverFetchId)
      )
        return o("WAResultOrError").makeError(
          "sticker_integral_receiver_fetch_id_mismatch",
        );
      var T = u(
        (k = e.payload.integral) == null ? void 0 : k.transport,
        (I = t.payload.integral) == null ? void 0 : I.transport,
      );
      return T.success
        ? o("WAResultOrError").makeResult()
        : o("WAResultOrError").makeError("sticker_" + T.error);
    }
    ((l.compareAudioMessage = c),
      (l.compareDocumentMessage = d),
      (l.sortImageTransport = m),
      (l.compareImageTransport = p),
      (l.compareVideoTransport = _),
      (l.compareStickerMessage = f));
  },
  98,
);
