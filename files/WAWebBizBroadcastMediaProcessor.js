__d(
  "WAWebBizBroadcastMediaProcessor",
  [
    "WAExponentialBackoff",
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
    function y(e, t, n) {
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
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:media] processing recipientCnt=",
                "",
              ])),
            t,
          );
          var i = new AbortController();
          return o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, g, { signal: i.signal }),
            (function () {
              var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n, i) {
                  var l = new (r("WAWebAttachMediaCollection"))({
                      chatParticipantCount: t,
                    }),
                    s = [{ file: e }];
                  yield l.processAttachments(
                    s,
                    o("WAWebWamEnumMediaPickerOriginType")
                      .MEDIA_PICKER_ORIGIN_TYPE.BUSINESS_FLOWS,
                    f,
                    1,
                  );
                  var u = l.getActive();
                  if (u == null) {
                    var c = l.getModelsArray().map(C).join("; "),
                      p = r("err")("Failed to process media for sending: " + c);
                    if (b(l)) throw p;
                    return (
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[broadcast:media] no previewable media, retrying after attempt ",
                            ": ",
                            "",
                          ])),
                        i + 1,
                        c,
                      ),
                      n(p)
                    );
                  }
                  (u.processPromise != null && (yield u.processPromise),
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[broadcast:media] media processed type=",
                          "",
                        ])),
                      u.type,
                    ));
                  var _ = {
                      caption: a != null && a.trim() !== "" ? a.trim() : void 0,
                      type: u.type,
                    },
                    g = yield o("WAWebMediaPrep").getMediaPropsNew(
                      u.mediaPrep,
                      _,
                    );
                  return (
                    (g.isCaptionByUser =
                      _.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                      !!_.caption),
                    { freshMedia: u, mediaProps: g }
                  );
                },
              );
              return function (e, t) {
                return i.apply(this, arguments);
              };
            })(),
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield v(e, t, r),
              i = a.freshMedia,
              l = a.mediaProps,
              s = yield o(
                "WAWebBroadcastMsgDataUtils",
              ).addBroadcastFieldsToMediaMsg(n, l);
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:media] msg data prepared",
                  ])),
              ),
              { freshMedia: { type: i.type }, mediaMsgData: s }
            );
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(t) {
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
    function k(e, t, n, r, o) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = yield v(e, t, r),
              l = i.freshMedia,
              s = i.mediaProps,
              u = yield o(
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
          },
        )),
        I.apply(this, arguments)
      );
    }
    ((l.SUPPORTED_MEDIA_TYPES = f),
      (l.getAttachmentType = y),
      (l.processMediaForBroadcast = R),
      (l.createBroadcastMediaUploadCallback = E),
      (l.processMediaWithCTAForBroadcast = k));
  },
  98,
);
