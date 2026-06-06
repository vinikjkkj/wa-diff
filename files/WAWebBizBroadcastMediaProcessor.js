__d(
  "WAWebBizBroadcastMediaProcessor",
  [
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebBroadcastMsgDataUtils",
    "WAWebMediaPrep",
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
      _ = new Set([
        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO,
      ]);
    function f(e, t, n) {
      return e != null
        ? t != null
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
    async function g(t, n, a) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:media] processing recipientCnt=",
            "",
          ])),
        n,
      );
      var i = new (r("WAWebAttachMediaCollection"))({
          chatParticipantCount: n,
        }),
        l = [{ file: t }];
      await i.processAttachments(
        l,
        o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
          .BUSINESS_FLOWS,
        _,
        1,
      );
      var u = i.getActive();
      if (u == null) throw r("err")("Failed to process media for sending");
      (u.processPromise != null && (await u.processPromise),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] media processed type=",
              "",
            ])),
          u.type,
        ));
      var c = {
          caption: a != null && a.trim() !== "" ? a.trim() : void 0,
          type: u.type,
        },
        d = await o("WAWebMediaPrep").getMediaPropsNew(u.mediaPrep, c);
      return (
        (d.isCaptionByUser =
          c.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && !!c.caption),
        { freshMedia: u, mediaProps: d }
      );
    }
    async function h(e, t, n, r) {
      var a = await g(e, t, r),
        i = a.freshMedia,
        l = a.mediaProps,
        s = await o("WAWebBroadcastMsgDataUtils").addBroadcastFieldsToMediaMsg(
          n,
          l,
        );
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] msg data prepared",
            ])),
        ),
        { freshMedia: { type: i.type }, mediaMsgData: s }
      );
    }
    function y(e) {
      return async function (t) {
        var n;
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] uploading msgId=",
              "",
            ])),
          t.id.toString(),
        );
        var a = { isMediaCryptoExpectedForChat: !0, type: e },
          i = await o("WAWebMediaPrep").uploadMediaWithPrep(t, a),
          l = i.body,
          s = i.mediaResult.mediaEntry;
        if (!s) throw r("err")("Media upload failed: entry was not created");
        var u = t.mediaObject,
          p = u == null ? void 0 : u.entries.getUploadEntry(!0),
          _ =
            (n = s.getEncfilehash()) != null
              ? n
              : p == null
                ? void 0
                : p.getEncfilehash();
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:media] encFilehash entry=",
                " upload=",
                "",
              ])),
            s.getEncfilehash(),
            p == null ? void 0 : p.getEncfilehash(),
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
    async function C(e, t, n, r, a) {
      var i = await g(e, t, r),
        l = i.freshMedia,
        s = i.mediaProps,
        u = await o(
          "WAWebBroadcastMsgDataUtils",
        ).addBroadcastInteractiveFieldsToMediaMsg(n, s, a);
      return (
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[broadcast:media] interactive msg data prepared +CTA",
            ])),
        ),
        { freshMedia: { type: l.type }, mediaMsgData: u }
      );
    }
    ((l.SUPPORTED_MEDIA_TYPES = _),
      (l.getAttachmentType = f),
      (l.processMediaForBroadcast = h),
      (l.createBroadcastMediaUploadCallback = y),
      (l.processMediaWithCTAForBroadcast = C));
  },
  98,
);
