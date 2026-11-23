__d(
  "WAWebGalaxyFlowAttachMediaUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendRuntime",
    "WAWebGalaxyFlowMediaEditorCollection",
    "WAWebMediaEntry",
    "WAWebMediaPrepMediaProps",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMediaUploadService",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebUserUtils",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        NO_MEDIA_ENTRY:
          "sendGalaxyMediaMsg:upload failed: media entry was not created",
      };
    async function u(e) {
      var t = o("WAWebUserUtils").getMeLidUserOrThrow(),
        n = new (r("WAWebMsgKey"))({
          from: t,
          to: t,
          id: await r("WAWebMsgKey").newId(),
          selfDir: "out",
        });
      return {
        author: t,
        id: n,
        from: t,
        to: t,
        t: o("WATimeUtils").unixTime(),
        local: !0,
        type: e.type,
      };
    }
    function c(e) {
      var t = e.body,
        n = e.mediaResultEntry,
        a = e.mmsThumbnailData,
        i = e.msg;
      return babelHelpers.extends(
        {
          deprecatedMms3Url: n == null ? void 0 : n.deprecatedMms3Url,
          directPath: n == null ? void 0 : n.directPath,
          mediaKey:
            n == null || n.getMediaKey == null ? void 0 : n.getMediaKey(),
          mediaKeyTimestamp:
            n == null || n.getMediaKeyTimestamp == null
              ? void 0
              : n.getMediaKeyTimestamp(),
          filehash: r("nullthrows")(i.mediaObject).filehash,
          encFilehash:
            n == null || n.getEncfilehash == null ? void 0 : n.getEncfilehash(),
          size: r("nullthrows")(i.mediaObject).size,
          streamingSidecar: n == null ? void 0 : n.sidecar,
          firstFrameSidecar: n == null ? void 0 : n.firstFrameSidecar,
          body: t != null ? t : "",
          stickerSentTs: o("WATimeUtils").unixTimeMs(),
          mediaHandle:
            n instanceof o("WAWebMediaEntry").UnencryptedMediaEntry
              ? n.handle
              : null,
        },
        a,
      );
    }
    async function d(t) {
      var n = t.collectionId,
        a = t.maxFileSizeBytes,
        i = t.media,
        l = t.options;
      try {
        var d = await u(i),
          m = r("WAWebMediaPrepMediaProps")(i.mediaPrep, l).then(function (e) {
            return babelHelpers.extends({}, d, e, { type: e.type });
          }),
          p = babelHelpers.extends({}, await m, {
            id: d.id,
            from: d.from,
            author: d.author,
          }),
          _ = new (o("WAWebMsgModel").Msg)(p);
        (o(
          "WAWebGalaxyFlowMediaEditorCollection",
        ).GalaxyFlowMediaEditorCollection.addMsg(n, _, a),
          await _.waitForPrep());
        var f = await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMediaUploadService").MediaUploadService,
                ).uploadMediaWithPrep
              : o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep
          )(_, l),
          g = f.body,
          h = f.mediaResult.mediaEntry,
          y = f.mmsThumbnailData;
        if (!h) throw r("err")(s.NO_MEDIA_ENTRY);
        var C = c({
          body: g,
          mediaResultEntry: h,
          mmsThumbnailData: y,
          msg: _,
        });
        await r("WAWebMediaUpdateMsg")(_, C);
      } catch (t) {
        throw (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendGalaxyMediaMsg: error while sending message: ",
                "",
              ])),
            t,
          ),
          t
        );
      }
    }
    l.sendGalaxyMediaMsg = d;
  },
  98,
);
