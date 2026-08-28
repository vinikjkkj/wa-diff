__d(
  "ReelComposerVoiceTranslationsPublishUtils",
  ["getMentionsTextForContentState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (e != null ? e : []).map(function (e) {
        var o,
          a,
          i,
          l = e.description,
          s =
            l != null
              ? r("getMentionsTextForContentState")(l.getCurrentContent())
              : null;
        return {
          audio_handle: (o = e.handle) != null ? o : "",
          description: n === !0 && s !== t ? s : null,
          enabled: !0,
          handle_type: "UPLOAD_SERVICE_HANDLE",
          lang_code:
            (a = (i = e.langCode) == null ? void 0 : i.valueOf()) != null
              ? a
              : "",
        };
      });
    }
    function s(e) {
      return (e == null ? void 0 : e.translateVoiceWithMetaAi) !== !0
        ? []
        : e.targetLanguages.map(function (t) {
            return {
              audio_handle: "",
              enabled: !0,
              is_lipsync_enabled: e.enableLipSyncing,
              lang_code: t,
              require_review: e.reviewBeforePublishing,
              source_lang_code: e.sourceLanguage,
            };
          });
    }
    function u(t) {
      var n = t.alternateAudioTracks,
        r = t.autoDubbingSettings,
        o = t.shouldDisplayManualDescriptionsSectioninBYOA,
        a = t.shouldUnify,
        i = t.videoDescription,
        l = e(n, i, o),
        u = s(r);
      if (!a)
        return l.length > 0
          ? l
          : (r == null ? void 0 : r.translateVoiceWithMetaAi) === !0
            ? u
            : null;
      var c = new Set(
          l
            .map(function (e) {
              return e.lang_code;
            })
            .filter(function (e) {
              return e !== "";
            }),
        ),
        d = [].concat(
          l,
          u.filter(function (e) {
            return !c.has(e.lang_code);
          }),
        );
      return d.length > 0 ? d : null;
    }
    l.getTranslatedAudioMetadata = u;
  },
  98,
);
