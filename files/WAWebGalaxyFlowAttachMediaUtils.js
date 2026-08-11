__d(
  "WAWebGalaxyFlowAttachMediaUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGalaxyFlowMediaEditorCollection",
    "WAWebLidStatusMigrationUtils",
    "WAWebMediaEntry",
    "WAWebMediaPrep",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        NO_MEDIA_ENTRY:
          "sendGalaxyMediaMsg:upload failed: media entry was not created",
      };
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            ),
            n = new (r("WAWebMsgKey"))({
              from: t,
              to: t,
              id: yield r("WAWebMsgKey").newId(),
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.collectionId,
            a = t.maxFileSizeBytes,
            i = t.media,
            l = t.options;
          try {
            var c = yield u(i),
              m = o("WAWebMediaPrep")
                .getMediaPropsNew(i.mediaPrep, l)
                .then(function (e) {
                  return babelHelpers.extends({}, c, e, { type: e.type });
                }),
              p = babelHelpers.extends({}, yield m, {
                id: c.id,
                from: c.from,
                author: c.author,
              }),
              _ = new (o("WAWebMsgModel").Msg)(p);
            (o(
              "WAWebGalaxyFlowMediaEditorCollection",
            ).GalaxyFlowMediaEditorCollection.addMsg(n, _, a),
              yield _.waitForPrep());
            var f = yield o(
                "WAWebMediaUploadMediaWithPrep",
              ).uploadMediaWithPrep(_, l),
              g = f.body,
              h = f.mediaResult.mediaEntry,
              y = f.mmsThumbnailData;
            if (!h) throw r("err")(s.NO_MEDIA_ENTRY);
            var C = d({
              body: g,
              mediaResultEntry: h,
              mmsThumbnailData: y,
              msg: _,
            });
            yield r("WAWebMediaUpdateMsg")(_, C);
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
        })),
        p.apply(this, arguments)
      );
    }
    l.sendGalaxyMediaMsg = m;
  },
  98,
);
