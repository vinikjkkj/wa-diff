__d(
  "WAWebBizBroadcastMediaProcessor",
  [
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebBroadcastMsgDataUtils",
    "WAWebMediaPrep",
    "WAWebMsgType",
    "WAWebWamEnumMediaPickerOriginType",
    "asyncToGeneratorRuntime",
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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:media] processing recipientCnt=",
                "",
              ])),
            t,
          );
          var a = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: t,
            }),
            i = [{ file: e }];
          yield a.processAttachments(
            i,
            o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
              .BUSINESS_FLOWS,
            _,
            1,
          );
          var l = a.getActive();
          if (l == null) throw r("err")("Failed to process media for sending");
          (l.processPromise != null && (yield l.processPromise),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:media] media processed type=",
                  "",
                ])),
              l.type,
            ));
          var s = {
              caption: n != null && n.trim() !== "" ? n.trim() : void 0,
              type: l.type,
            },
            u = yield o("WAWebMediaPrep").getMediaPropsNew(l.mediaPrep, s);
          return (
            (u.isCaptionByUser =
              s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && !!s.caption),
            { freshMedia: l, mediaProps: u }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield g(e, t, r),
              i = a.freshMedia,
              l = a.mediaProps,
              s = yield o(
                "WAWebBroadcastMsgDataUtils",
              ).addBroadcastFieldsToMediaMsg(n, l);
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:media] msg data prepared",
                  ])),
              ),
              { freshMedia: { type: i.type }, mediaMsgData: s }
            );
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      return (function () {
        var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
          var a;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:media] uploading msgId=",
                "",
              ])),
            n.id.toString(),
          );
          var i = { isMediaCryptoExpectedForChat: !0, type: t },
            l = yield o("WAWebMediaPrep").uploadMediaWithPrep(n, i),
            c = l.body,
            d = l.mediaResult.mediaEntry;
          if (!d) throw r("err")("Media upload failed: entry was not created");
          var m = n.mediaObject,
            p = m == null ? void 0 : m.entries.getUploadEntry(!0),
            _ =
              (a = d.getEncfilehash()) != null
                ? a
                : p == null
                  ? void 0
                  : p.getEncfilehash();
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:media] encFilehash entry=",
                  " upload=",
                  "",
                ])),
              d.getEncfilehash(),
              p == null ? void 0 : p.getEncfilehash(),
            ),
            n.set({
              body: c,
              deprecatedMms3Url: d.deprecatedMms3Url,
              directPath: d.directPath,
              encFilehash: _,
              filehash: m == null ? void 0 : m.filehash,
              firstFrameSidecar: d.firstFrameSidecar,
              mediaKey: d.getMediaKey(),
              mediaKeyTimestamp: d.getMediaKeyTimestamp(),
              size: m == null ? void 0 : m.size,
              streamingSidecar: d.sidecar,
            }),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:media] uploaded msgId=",
                  " hash=",
                  "",
                ])),
              n.id.toString(),
              _,
            ),
            n
          );
        });
        return function (e) {
          return a.apply(this, arguments);
        };
      })();
    }
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = yield g(e, t, r),
              l = i.freshMedia,
              s = i.mediaProps,
              u = yield o(
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
          },
        )),
        S.apply(this, arguments)
      );
    }
    ((l.SUPPORTED_MEDIA_TYPES = _),
      (l.getAttachmentType = f),
      (l.processMediaForBroadcast = y),
      (l.createBroadcastMediaUploadCallback = b),
      (l.processMediaWithCTAForBroadcast = v));
  },
  98,
);
