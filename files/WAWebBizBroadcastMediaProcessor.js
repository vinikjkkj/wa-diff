__d(
  "WAWebBizBroadcastMediaProcessor",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebBackendRuntime",
    "WAWebBroadcastMsgDataUtils",
    "WAWebMediaPrepMediaProps",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMediaUploadService",
    "WAWebMsgType",
    "WAWebWamEnumMediaPickerOriginType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new Set([
        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
      ]),
      g = { minTimeout: 1e3, retries: 2 },
      h = new Set([
        "InvalidImageFileType",
        "InvalidMediaFileType",
        "MediaFileEmpty",
        "MediaFileTooLarge",
      ]);
    function y(e) {
      var t = e.catalogWid,
        n = e.mediaType,
        r = e.productId;
      return t != null
        ? r != null
          ? "product"
          : "catalog"
        : n === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? "image"
          : n === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? "video"
            : n === o("WAWebMsgType").MSG_TYPE.DOCUMENT
              ? "document"
              : null;
    }
    function C(e) {
      var t = e.exception,
        n = "none";
      return (
        t != null &&
          (n = t.message !== "" ? t.name + ": " + t.message : t.name),
        "state=" +
          e.state +
          " type=" +
          e.type +
          " mime=" +
          e.mimetype +
          " err=" +
          n
      );
    }
    function b(e) {
      return e.getModelsArray().some(function (e) {
        return e.exception != null && h.has(e.exception.name);
      });
    }
    async function v(t, n, a) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:media] processing recipientCnt=",
            "",
          ])),
        n,
      );
      var i = new AbortController();
      return o("WAExponentialBackoff").exponentialBackoff(
        babelHelpers.extends({}, g, { signal: i.signal }),
        async function (e, i) {
          var l = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: n,
            }),
            c = [{ file: t }];
          await l.processAttachments(
            c,
            o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
              .BUSINESS_FLOWS,
            f,
            1,
          );
          var d = l.getActive();
          if (d == null) {
            var m = l.getModelsArray().map(C).join("; "),
              p = r("err")("Failed to process media for sending: " + m);
            if (b(l)) throw p;
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:media] no previewable media, retrying after attempt ",
                    ": ",
                    "",
                  ])),
                i + 1,
                m,
              ),
              e(p)
            );
          }
          (d.processPromise != null && (await d.processPromise),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:media] media processed type=",
                  "",
                ])),
              d.type,
            ));
          var _ = {
              caption: a != null && a.trim() !== "" ? a.trim() : void 0,
              type: d.type,
            },
            g = await r("WAWebMediaPrepMediaProps")(d.mediaPrep, _);
          return (
            (g.isCaptionByUser =
              _.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && !!_.caption),
            { freshMedia: d, mediaProps: g }
          );
        },
      );
    }
    async function S(e, t, n, r) {
      var a = await v(e, t, r),
        i = a.freshMedia,
        l = a.mediaProps,
        s = await o("WAWebBroadcastMsgDataUtils").addBroadcastFieldsToMediaMsg(
          n,
          l,
        );
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] msg data prepared",
            ])),
        ),
        { freshMedia: { type: i.type }, mediaMsgData: s }
      );
    }
    function R(e) {
      return async function (t) {
        var n;
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] uploading msgId=",
              "",
            ])),
          t.id.toString(),
        );
        var a = { isMediaCryptoExpectedForChat: !0, type: e },
          i = await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMediaUploadService").MediaUploadService,
                ).uploadMediaWithPrep
              : o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep
          )(t, a),
          l = i.body,
          s = i.mediaResult.mediaEntry;
        if (!s) throw r("err")("Media upload failed: entry was not created");
        var u = t.mediaObject,
          c = u == null ? void 0 : u.entries.getUploadEntry(!0),
          _ =
            (n = s.getEncfilehash()) != null
              ? n
              : c == null
                ? void 0
                : c.getEncfilehash();
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:media] encFilehash entry=",
                " upload=",
                "",
              ])),
            s.getEncfilehash(),
            c == null ? void 0 : c.getEncfilehash(),
          ),
          t.set({
            body: l,
            deprecatedMms3Url: s.deprecatedMms3Url,
            directPath: s.directPath,
            encFilehash: _,
            filehash: u == null ? void 0 : u.filehash,
            firstFrameSidecar: s.firstFrameSidecar,
            mediaKey: s.getMediaKey(),
            mediaKeyTimestamp: s.getMediaKeyTimestamp(),
            size: u == null ? void 0 : u.size,
            streamingSidecar: s.sidecar,
          }),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:media] uploaded msgId=",
                " hash=",
                "",
              ])),
            t.id.toString(),
            _,
          ),
          t
        );
      };
    }
    async function L(e, t, n, r, a) {
      var i = await v(e, t, r),
        l = i.freshMedia,
        s = i.mediaProps,
        u = await o(
          "WAWebBroadcastMsgDataUtils",
        ).addBroadcastInteractiveFieldsToMediaMsg(n, s, a);
      return (
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] interactive msg data prepared +CTA",
            ])),
        ),
        { freshMedia: { type: l.type }, mediaMsgData: u }
      );
    }
    ((l.SUPPORTED_MEDIA_TYPES = f),
      (l.getAttachmentType = y),
      (l.processMediaForBroadcast = S),
      (l.createBroadcastMediaUploadCallback = R),
      (l.processMediaWithCTAForBroadcast = L));
  },
  98,
);
