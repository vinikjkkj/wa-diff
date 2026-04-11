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
    function d(e, t, n, a) {
      return babelHelpers.extends(
        {
          deprecatedMms3Url: t == null ? void 0 : t.deprecatedMms3Url,
          directPath: t == null ? void 0 : t.directPath,
          mediaKey:
            t == null || t.getMediaKey == null ? void 0 : t.getMediaKey(),
          mediaKeyTimestamp:
            t == null || t.getMediaKeyTimestamp == null
              ? void 0
              : t.getMediaKeyTimestamp(),
          filehash: r("nullthrows")(e.mediaObject).filehash,
          encFilehash:
            t == null || t.getEncfilehash == null ? void 0 : t.getEncfilehash(),
          size: r("nullthrows")(e.mediaObject).size,
          streamingSidecar: t == null ? void 0 : t.sidecar,
          firstFrameSidecar: t == null ? void 0 : t.firstFrameSidecar,
          body: n != null ? n : "",
          stickerSentTs: o("WATimeUtils").unixTimeMs(),
          mediaHandle:
            t instanceof o("WAWebMediaEntry").UnencryptedMediaEntry
              ? t.handle
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
              var _ = yield o("WAWebMediaPrep").uploadMediaWithPrep(p, a),
                f = _.body,
                g = _.mediaResult.mediaEntry,
                h = _.mmsThumbnailData;
              if (!g) throw r("err")(s.NO_MEDIA_ENTRY);
              var y = d(p, g, f, h);
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
