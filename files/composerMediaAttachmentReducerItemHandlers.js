__d(
  "composerMediaAttachmentReducerItemHandlers",
  [
    "CometComposerAttachmentPluginTypes",
    "CometComposerFooterAttachmentPluginTypes",
    "CpxContentCreationFalcoEvent",
    "FBLogger",
    "Promise",
    "addMediaUploadStatuses",
    "addTagsToWithTagsIDsTracker",
    "getComposerMediaReorderInsertIndex",
    "getIDFromMediaAttachment",
    "processNewMediaAttachments",
    "removeMediaUploadStatuses",
    "removeTagsFromMedia",
    "rotatePhotoAttachmentTags",
    "updateMediaUploadStatuses",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n,
        o,
        a =
          (n =
            (o = e.mediaAttachments) == null
              ? void 0
              : o.some(function (e) {
                  var t;
                  return (
                    e.fileType === "VIDEO" &&
                    ((t = e.videoAttachmentMetadata) == null
                      ? void 0
                      : t.manualCropParams) != null
                  );
                })) != null
            ? n
            : !1;
      if (a) {
        var i = e.isFullScreenComposer === !0;
        r("CpxContentCreationFalcoEvent").log(function () {
          return {
            composer_mode: "create",
            event_name: "manual_crop_clear",
            event_state: "success",
            extra_data: {
              reason: t,
              source: i ? "comet_fullscreen_composer" : "comet_video_editor",
            },
            session_id: e.creationSessionID,
          };
        });
      }
    }
    function u(e, t) {
      var n,
        a = t.aiGenMetadata,
        i = t.allExtraData,
        l = t.files,
        s = o("processNewMediaAttachments").processNewMediaAttachments(l, i),
        u = a
          ? s.map(function (e) {
              if (e.fileType === "PHOTO" && e.state === "NEW") {
                var t,
                  n,
                  r = {
                    ai_animated_memory_metadata: null,
                    campaign_id: null,
                    imagine_platform_surface:
                      (t = a.imagine_platform_surface) != null ? t : null,
                    imagine_product_type:
                      (n = a.imagine_product_type) != null ? n : null,
                    input_media: null,
                    prompt: a.prompt,
                    result_id: null,
                    short_prompt: null,
                  };
                return babelHelpers.extends({}, e, {
                  data: babelHelpers.extends({}, e.data, {
                    ai_gen_metadata: r,
                  }),
                  isGenerated: !0,
                });
              }
              return e;
            })
          : s,
        c = (e.mediaAttachments || []).concat(u),
        d = u.some(function (e) {
          return e.isGenerated === !0;
        }),
        m = d
          ? babelHelpers.extends({}, e.genAISelfDisclosureMetadata, {
              genAIFeatureTracker: new Set(
                (n = e.genAISelfDisclosureMetadata) == null
                  ? void 0
                  : n.genAIFeatureTracker,
              ).add(r("CometComposerAttachmentPluginTypes").MEDIA),
            })
          : e.genAISelfDisclosureMetadata;
      return babelHelpers.extends({}, e, {
        genAISelfDisclosureMetadata: m,
        mediaAttachments: c,
        mediaUploadStatuses: o("addMediaUploadStatuses").addMediaUploadStatuses(
          u,
          babelHelpers.extends({}, e.mediaUploadStatuses),
        ),
      });
    }
    function c(e, t) {
      var n = t.allExtraData,
        r = t.files,
        a = o("processNewMediaAttachments").processNewMediaAttachments(r, n);
      return (
        s(e, "media_replaced"),
        babelHelpers.extends({}, e, {
          isManualCropping: !1,
          mediaAttachments: a,
          mediaUploadStatuses: o(
            "addMediaUploadStatuses",
          ).addMediaUploadStatuses(a, {}),
        })
      );
    }
    function d(e, t) {
      if (!e.mediaAttachments) return babelHelpers.extends({}, e);
      var n = e.mediaAttachments.map(function (e) {
        return t.retryAttachments.has(e) && e.file
          ? o("processNewMediaAttachments").getNewMediaAttachment(e.file)
          : e;
      });
      return babelHelpers.extends({}, e, { mediaAttachments: n });
    }
    function m(t, r) {
      var o,
        a = t.mediaAttachments || [],
        i = r.photo,
        l = {
          data: { id: i.id, message: null, tags: [] },
          entID: i.id,
          fileType: "PHOTO",
          height: i.height,
          state: "PREEXISTING",
          url: i.url,
          useCDNPreview: !0,
          width: i.width,
        },
        s = [].concat(a, [l]),
        u = { attachmentID: i.id, attachmentType: "PHOTO" },
        c = babelHelpers.extends(
          {},
          t.mediaUploadStatuses,
          ((o = {}),
          (o[i.id] = {
            cancelUpload: function (t) {},
            onFileComplete: (e || (e = n("Promise"))).resolve(u),
            onUploadCancel: e.resolve(u),
            resolveFileUpload: function (t) {},
          }),
          o),
        );
      return babelHelpers.extends({}, t, {
        mediaAttachments: s,
        mediaUploadStatuses: c,
      });
    }
    function p(t, r) {
      var o,
        a,
        i = t.mediaAttachments || [],
        l = r.video,
        s = l.thumbnail,
        u = babelHelpers.extends(
          {
            data: { id: l.id, title: l.title },
            entID: l.id,
            fileType: "VIDEO",
            imageURL: (o = s == null ? void 0 : s.url) != null ? o : "",
            state: "PREEXISTING",
            useCDNPreview: !0,
          },
          s != null
            ? { height: s.height, width: s.width }
            : { usePlaceHolderPreview: !0 },
        ),
        c = [].concat(i, [u]),
        d = { attachmentID: l.id, attachmentType: "VIDEO" },
        m = babelHelpers.extends(
          {},
          t.mediaUploadStatuses,
          ((a = {}),
          (a[l.id] = {
            cancelUpload: function (t) {},
            onFileComplete: (e || (e = n("Promise"))).resolve(d),
            onUploadCancel: e.resolve(d),
            resolveFileUpload: function (t) {},
          }),
          a),
        );
      return babelHelpers.extends({}, t, {
        mediaAttachments: c,
        mediaUploadStatuses: m,
      });
    }
    function _(e, t) {
      if (e.mediaAttachments == null) return e;
      var n,
        o = !1,
        a = e.mediaAttachments.filter(function (e) {
          return r("getIDFromMediaAttachment")(t.attachment) ===
            r("getIDFromMediaAttachment")(e)
            ? (e.fileObjectURL != null && URL.revokeObjectURL(e.fileObjectURL),
              !1)
            : (e.isGenerated === !0 && (o = !0), !0);
        }),
        i = r("removeTagsFromMedia")(
          t.attachment,
          new Map(e.withTagIDsTracker),
        ),
        l =
          e == null || (n = e.genAISelfDisclosureMetadata) == null
            ? void 0
            : n.genAIFeatureTracker;
      return (
        !o && l != null && l.delete("MEDIA"),
        s(e, "media_removed"),
        a.length > 0 || e.isMediaAttachmentsRequired === !0
          ? babelHelpers.extends({}, e, {
              genAISelfDisclosureMetadata: babelHelpers.extends(
                {},
                e.genAISelfDisclosureMetadata,
                { genAIFeatureTracker: new Set(l) },
              ),
              isManualCropping: !1,
              mediaAttachments: a,
              mediaUploadStatuses: r("removeMediaUploadStatuses")(
                [t.attachment],
                babelHelpers.extends({}, e.mediaUploadStatuses),
              ),
              withTagIDsTracker: i,
            })
          : babelHelpers.extends({}, e, {
              attachmentArea: void 0,
              genAISelfDisclosureMetadata: babelHelpers.extends(
                {},
                e.genAISelfDisclosureMetadata,
                { genAIFeatureTracker: new Set(l) },
              ),
              isManualCropping: !1,
              mediaAttachments: void 0,
              mediaUploadStatuses: void 0,
              taggedProductIDs: void 0,
              withTagIDsTracker: i,
            })
      );
    }
    function f(e, t) {
      if (
        e.mediaAttachments == null ||
        t.index < 0 ||
        t.index >= e.mediaAttachments.length
      )
        return e;
      var n = [].concat(e.mediaAttachments);
      return (
        (n[t.index] = t.newAttachment),
        s(e, "media_replaced"),
        babelHelpers.extends({}, e, {
          isManualCropping: !1,
          mediaAttachments: n,
        })
      );
    }
    function g(e, t) {
      return (e.mediaAttachments || []).length > 0
        ? h(e, t, !0)
        : babelHelpers.extends({}, e, {
            attachmentArea: babelHelpers.extends({}, e.attachmentArea, {
              activeAttachmentType: void 0,
              previousAttachmentType: r("CometComposerAttachmentPluginTypes")
                .GET_MESSAGES,
            }),
            isGetMessagesPost: null,
          });
    }
    function h(e, t, n) {
      var a, i, l, u, c, d;
      if (
        (n === void 0 && (n = !1),
        (!n &&
          (((a = e.attachmentArea) == null
            ? void 0
            : a.activeAttachmentType) ===
            r("CometComposerAttachmentPluginTypes").GET_MESSAGES ||
            ((i = e.footerAttachmentArea) == null
              ? void 0
              : i.activeFooterAttachmentType) ===
              o("CometComposerFooterAttachmentPluginTypes")
                .CometComposerFooterAttachmentPluginTypes
                .GET_WHATSAPP_MESSAGES ||
            ((l = e.footerAttachmentArea) == null
              ? void 0
              : l.activeFooterAttachmentType) ===
              o("CometComposerFooterAttachmentPluginTypes")
                .CometComposerFooterAttachmentPluginTypes.GET_MESSAGES)) ||
          (!n &&
            ((u = e.attachmentArea) == null
              ? void 0
              : u.previousAttachmentType) ===
              r("CometComposerAttachmentPluginTypes").GET_MESSAGES))
      )
        return e;
      s(e, "all_removed");
      var m = new Map(e.withTagIDsTracker);
      (((c = e.mediaAttachments) != null ? c : []).forEach(function (e) {
        m = r("removeTagsFromMedia")(e, m);
      }),
        (e.mediaAttachments || []).forEach(function (t) {
          if (
            (t.fileObjectURL != null && URL.revokeObjectURL(t.fileObjectURL),
            t.state !== "PREEXISTING" &&
              t.fileType === "VIDEO" &&
              e.mediaUploadStatuses != null)
          ) {
            var n,
              r = (n = t.file.uploadID) != null ? n : "";
            if (r !== "") {
              var o = e.mediaUploadStatuses[r];
              o &&
                o.cancelUpload({ attachmentID: r, attachmentType: t.fileType });
            }
          }
        }));
      var p =
        e == null || (d = e.genAISelfDisclosureMetadata) == null
          ? void 0
          : d.genAIFeatureTracker;
      return (
        p != null && p.delete("MEDIA"),
        babelHelpers.extends({}, e, {
          animatedImageAttachments: void 0,
          genAISelfDisclosureMetadata: babelHelpers.extends(
            {},
            e.genAISelfDisclosureMetadata,
            { genAIFeatureTracker: new Set(p) },
          ),
          isManualCropping: !1,
          mediaAttachments: void 0,
          mediaUploadStatuses: void 0,
          withTagIDsTracker: m,
        })
      );
    }
    function y(e, t) {
      var n, o;
      if (e.mediaAttachments == null) return e;
      var a = new Map(e.withTagIDsTracker),
        i = [],
        l = [],
        s = t.media.data.id;
      ((n = t.media.data.tags) != null ? n : []).forEach(function (e) {
        var n;
        if ((e == null || (n = e.taggee) == null ? void 0 : n.id) != null) {
          var r = e.taggee.id;
          e.taggee.taggee_type === "PRODUCT_ITEM"
            ? i.push(r)
            : t.actorID !== r && l.push(r);
        }
      });
      var u = t.media.originalEntID != null ? t.media.originalEntID : s,
        c = (e.mediaAttachments || []).find(function (e) {
          var t = e.originalEntID != null ? e.originalEntID : e.data.id;
          return t === u;
        });
      if (u == null || c == null)
        throw r("FBLogger")("comet_composer").mustfixThrow(
          "Invalid action taken to save media edits of a media attachment that does not exist",
        );
      ((a = r("removeTagsFromMedia")(c, a)),
        (a = r("addTagsToWithTagsIDsTracker")(u, l, a)));
      var d = a.size > 0;
      return babelHelpers.extends({}, d ? C(e) : b(e), {
        mediaAttachments:
          (o = e.mediaAttachments) == null
            ? void 0
            : o.map(function (e, n) {
                return n !== t.index ? e : t.media;
              }),
        taggedProductIDs: i,
        withTagIDsTracker: a,
      });
    }
    function C(e) {
      var t,
        n,
        r = new Set(
          (t = (n = e.taggerData) == null ? void 0 : n.activeTaggerList) != null
            ? t
            : [],
        );
      return r.has("TAG")
        ? e
        : (r.add("TAG"),
          babelHelpers.extends({}, e, { taggerData: { activeTaggerList: r } }));
    }
    function b(e) {
      var t,
        n,
        r = new Set(
          (t = (n = e.taggerData) == null ? void 0 : n.activeTaggerList) != null
            ? t
            : [],
        );
      return r.has("TAG")
        ? (r.delete("TAG"),
          babelHelpers.extends({}, e, { taggerData: { activeTaggerList: r } }))
        : e;
    }
    function v(e, t) {
      if (e.mediaAttachments != null) {
        var n = [].concat(e.mediaAttachments);
        n.splice(t.targetIndex, 0, n.splice(t.sourceIndex, 1)[0]);
        var o = r("updateMediaUploadStatuses")(n, e.mediaUploadStatuses);
        return babelHelpers.extends({}, e, {
          mediaAttachments: n,
          mediaUploadStatuses: o,
        });
      } else return e;
    }
    function S(e, t) {
      var n = t.sourceIndexes,
        o = t.targetIndex,
        a = e.mediaAttachments;
      if (a == null || n.length === 0) return e;
      var i = new Set(n),
        l = a.filter(function (e, t) {
          return !i.has(t);
        }),
        s = a.filter(function (e, t) {
          return i.has(t);
        });
      return (
        l.splice.apply(
          l,
          [r("getComposerMediaReorderInsertIndex")(n, o), 0].concat(s),
        ),
        babelHelpers.extends({}, e, {
          mediaAttachments: l,
          mediaUploadStatuses: r("updateMediaUploadStatuses")(
            l,
            e.mediaUploadStatuses,
          ),
        })
      );
    }
    function R(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e) {
          if (
            e.data.id === t.entID &&
            e.fileType === "PHOTO" &&
            e.state === "UPLOADED"
          ) {
            var n = babelHelpers.extends({}, e, {
                height: t.height,
                uploadedImageURL: t.imageURI,
                useCDNPreview: !0,
                width: t.width,
              }),
              o = n.data.tags;
            return o != null && o.length > 0
              ? babelHelpers.extends({}, n, {
                  data: babelHelpers.extends({}, n.data, {
                    tags: r("rotatePhotoAttachmentTags")(o, t.direction),
                  }),
                })
              : n;
          }
          return e;
        }),
      });
    }
    function L(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              if (e.state === "UPLOADED")
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      partOfCompleteBatch: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      partOfCompleteBatch: !0,
                    });
                  case "FILE":
                    return babelHelpers.extends({}, e, {
                      partOfCompleteBatch: !0,
                    });
                }
              return e;
            }),
          });
    }
    ((l.addMediaAttachmentItems = u),
      (l.replaceMediaAttachmentItems = c),
      (l.retryMediaAttachmentItems = d),
      (l.addPreexistingPhoto = m),
      (l.addPreexistingVideo = p),
      (l.removeMediaAttachmentItem = _),
      (l.replaceMediaAttachmentItem = f),
      (l.removeGetMessageAllMediaAttachmentItems = g),
      (l.removeAllMediaAttachmentItems = h),
      (l.saveMediaEdits = y),
      (l.reorderMediaAttachmentItem = v),
      (l.reorderMediaAttachmentItems = S),
      (l.rotateMediaAttachmentItem = R),
      (l.markUploadsAsPartOfCompleteBatch = L));
  },
  98,
);
