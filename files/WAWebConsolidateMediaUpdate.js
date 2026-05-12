__d(
  "WAWebConsolidateMediaUpdate",
  [
    "Promise",
    "WALogger",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMediaObject",
    "WAWebMediaOpaqueData",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = {};
      if (
        (o("WAWebMediaTypes").MAPPED_MSG_PROPS.forEach(function (n) {
          var r = e[n],
            a = o("WAWebMediaTypes").MSG_TO_MEDIA[n];
          t[a] = r;
        }),
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
      ) {
        var n = o("WAWebMediaObject").getInteractiveMsgMediaType(e);
        n && (t.type = n);
      }
      return t;
    }
    function d(t, a) {
      if (t.isUnsentPhoneMsg()) {
        t.mediaObject &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "id: ",
                  " type: ",
                  "",
                ])),
              t.id.toString(),
              t.type,
            )
            .sendLogs("media-fault: consolidateMediaUpdate unsent message");
        var i = c(t);
        if (Object.prototype.hasOwnProperty.call(i, "preview")) {
          var l = i.preview;
          (delete i.preview,
            l &&
              (l instanceof r("WAWebMediaOpaqueData")
                ? (u || (u = n("Promise"))).resolve(l).then(function (e) {
                    t != null &&
                      t.mediaData &&
                      t.isUnsentPhoneMsg() &&
                      (t.mediaData.preview = e);
                  })
                : r("WAWebMediaOpaqueData")
                    .createFromBase64Jpeg(l)
                    .then(function (e) {
                      t != null &&
                        t.mediaData &&
                        t.isUnsentPhoneMsg() &&
                        (t.mediaData.preview = e);
                    })));
        }
        t.mediaData.set(
          babelHelpers.extends({}, i, {
            mediaStage: o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD,
          }),
        );
      } else m(t, t, a);
    }
    function m(e, t, n, a) {
      var i = c(t),
        l = e.mediaObject,
        u = t.filehash,
        d = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
          e,
        );
      if (l)
        u &&
          u !== l.filehash &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "media:msg ",
                " ",
                " filehash",
              ])),
            e.id.toString(),
            l.filehash ? "changed" : "added",
          ),
          o("WAWebMediaStorage").disassociateMediaFromMsg(l, e),
          (l = o("WAWebMediaStorage").getOrCreateMediaObject(u)),
          (e.mediaObject = l),
          o("WAWebMediaStorage").associateMediaWithMsg(l, e));
      else {
        u
          ? (l = o("WAWebMediaStorage").getOrCreateMediaObject(u))
          : (l = new (o("WAWebMediaObject").MediaObject)());
        var m = e.mediaData;
        (m.aspectRatio !== void 0 && (i.aspectRatio = m.aspectRatio),
          (e.mediaObject = l),
          o("WAWebMediaStorage").associateMediaWithMsg(l, e));
      }
      var p = !1,
        _ = t.deprecatedMms3Url,
        f = t.directPath,
        g = t.encFilehash,
        h = t.firstFrameSidecar,
        y = t.mediaKey,
        C = t.mediaKeyTimestamp,
        b = t.scanLengths,
        v = t.scansSidecar,
        S = t.staticUrl,
        R = t.streamingSidecar,
        L = t.type;
      if (_ || g || f || !d) {
        var E;
        try {
          E = o("WAWebMmsMediaTypes").msgToMediaType({
            type: t.type,
            isGif: t.isGif,
            interactiveHeader: t.interactiveHeader,
            isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(t),
          });
        } catch (e) {
          E = ~o("WAWebMmsMediaTypes").MEDIA_TYPE_VALUES.indexOf(L) ? L : null;
        }
        p = d
          ? !l.entries.has({ encFilehash: g, deprecatedMms3Url: _ })
          : !l.entries.hasUnencryptedEntry({ filehash: u, directPath: f });
        var k;
        (p
          ? E != null && (g != null || f != null || !d)
            ? d && y != null
              ? (k = l.entries.addEntry({
                  deprecatedMms3Url: _,
                  mediaKey: y,
                  mediaKeyTimestamp: C,
                  encFilehash: g,
                  type: E,
                  sidecar: R,
                  directPath: f,
                  firstFrameSidecar: h,
                  scansSidecar: v,
                  scanLengths: b,
                  debugHint: "consolidate",
                  staticUrl: S,
                }))
              : !d &&
                f != null &&
                u != null &&
                (k = l.entries.addUnencryptedEntry({
                  debugHint: "consolidate",
                  directPath: f,
                  filehash: u,
                  type: E,
                }))
            : (p = !1)
          : d && y != null && y !== ""
            ? (k = l.entries.updateEntry({
                deprecatedMms3Url: _,
                mediaKey: y,
                mediaKeyTimestamp: C,
                encFilehash: g,
                type: E,
                sidecar: R,
                directPath: f,
                firstFrameSidecar: h,
                scansSidecar: v,
                scanLengths: b,
                staticUrl: S,
              }))
            : !d &&
              u != null &&
              (k = l.entries.updateUnencryptedEntry({
                filehash: u,
                directPath: f,
              })),
          k || (p = !1),
          p &&
            l.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
            (i.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT));
      }
      if (
        (l.consolidate(i) || l.notifyMsgsAsync(),
        p && l.downloadStage === o("WAWebMediaTypes").DownloadStage.NEED_POKE)
      ) {
        var I;
        try {
          I = o("WAWebMmsMediaTypes").getMsgMediaType(e);
        } catch (n) {
          if (!t.type) throw n;
          I = o("WAWebMmsMediaTypes").msgToMediaType({
            type: t.type,
            isGif: e.isGif,
            isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(e),
          });
        }
        o("WAWebMediaMmsV4Download").downloadMedia({
          mimetype: t.mimetype,
          mediaObject: l,
          downloadEvenIfExpensive: !1,
          mediaType: I,
          rmrReason: n,
          downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(e),
          chatWid: a,
        });
      }
    }
    ((l.consolidateMediaUpdate = d), (l.consolidateMediaUpdateWithValues = m));
  },
  98,
);
