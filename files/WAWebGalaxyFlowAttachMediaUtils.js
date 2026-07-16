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
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            try {
              var l = yield u(n),
                c = o("WAWebMediaPrep")
                  .getMediaPropsNew(n.mediaPrep, a)
                  .then(function (e) {
                    return babelHelpers.extends({}, l, e, { type: e.type });
                  }),
                m = babelHelpers.extends({}, yield c, {
                  id: l.id,
                  from: l.from,
                  author: l.author,
                }),
                p = new (o("WAWebMsgModel").Msg)(m);
              (o(
                "WAWebGalaxyFlowMediaEditorCollection",
              ).GalaxyFlowMediaEditorCollection.addMsg(t, p, i),
                yield p.waitForPrep());
              var _ = yield o(
                  "WAWebMediaUploadMediaWithPrep",
                ).uploadMediaWithPrep(p, a),
                f = _.body,
                g = _.mediaResult.mediaEntry,
                h = _.mmsThumbnailData;
              if (!g) throw r("err")(s.NO_MEDIA_ENTRY);
              var y = d({
                body: f,
                mediaResultEntry: g,
                mmsThumbnailData: h,
                msg: p,
              });
              yield r("WAWebMediaUpdateMsg")(p, y);
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
          },
        )),
        p.apply(this, arguments)
      );
    }
    l.sendGalaxyMediaMsg = m;
  },
  98,
);
