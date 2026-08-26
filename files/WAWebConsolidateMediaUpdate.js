__d(
  "WAWebConsolidateMediaUpdate",
  [
    "Promise",
    "WALogger",
    "WAWebExperienceIdWamFields",
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
    function d(t, n) {
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
        var r = c(t);
        if (Object.prototype.hasOwnProperty.call(r, "preview")) {
          var a = r.preview;
          (delete r.preview,
            a &&
              p(a).then(function (e) {
                t != null &&
                  t.mediaData &&
                  t.isUnsentPhoneMsg() &&
                  (t.mediaData.preview = e);
              }));
        }
        t.mediaData.set(
          babelHelpers.extends({}, r, {
            mediaStage: o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD,
          }),
        );
      } else m({ msg: t, msgValues: t, rmrReason: n });
    }
    function m(e) {
      var t = e.chatWid,
        n = e.msg,
        a = e.msgValues,
        i = e.rmrReason,
        l = c(a),
        u = n.mediaObject,
        d = a.filehash,
        m = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
          n,
        );
      if (u)
        d &&
          d !== u.filehash &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "media:msg ",
                " ",
                " filehash",
              ])),
            n.id.toString(),
            u.filehash ? "changed" : "added",
          ),
          o("WAWebMediaStorage").disassociateMediaFromMsg(u, n),
          (u = o("WAWebMediaStorage").getOrCreateMediaObject(d)),
          (n.mediaObject = u),
          o("WAWebMediaStorage").associateMediaWithMsg(u, n));
      else {
        d
          ? (u = o("WAWebMediaStorage").getOrCreateMediaObject(d))
          : (u = new (o("WAWebMediaObject").MediaObject)());
        var p = n.mediaData;
        (p.aspectRatio !== void 0 && (l.aspectRatio = p.aspectRatio),
          (n.mediaObject = u),
          o("WAWebMediaStorage").associateMediaWithMsg(u, n));
      }
      var _ = !1,
        f = a.deprecatedMms3Url,
        g = a.directPath,
        h = a.encFilehash,
        y = a.firstFrameSidecar,
        C = a.mediaKey,
        b = a.mediaKeyTimestamp,
        v = a.scanLengths,
        S = a.scansSidecar,
        R = a.staticUrl,
        L = a.streamingSidecar,
        E = a.type;
      if (f || h || g || !m) {
        var k;
        try {
          k = o("WAWebMmsMediaTypes").msgToMediaType({
            type: a.type,
            isGif: a.isGif,
            interactiveHeader: a.interactiveHeader,
            isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(a),
          });
        } catch (e) {
          k = ~o("WAWebMmsMediaTypes").MEDIA_TYPE_VALUES.indexOf(E) ? E : null;
        }
        _ = m
          ? !u.entries.has({ encFilehash: h, deprecatedMms3Url: f })
          : !u.entries.hasUnencryptedEntry({ filehash: d, directPath: g });
        var I;
        (_
          ? k != null &&
            (h != null ||
              (g != null &&
                k === o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT) ||
              !m)
            ? m && C != null
              ? (I = u.entries.addEntry({
                  deprecatedMms3Url: f,
                  mediaKey: C,
                  mediaKeyTimestamp: b,
                  encFilehash: h,
                  type: k,
                  sidecar: L,
                  directPath: g,
                  firstFrameSidecar: y,
                  scansSidecar: S,
                  scanLengths: v,
                  debugHint: "consolidate",
                  staticUrl: R,
                }))
              : !m &&
                g != null &&
                d != null &&
                (I = u.entries.addUnencryptedEntry({
                  debugHint: "consolidate",
                  directPath: g,
                  filehash: d,
                  type: k,
                }))
            : (_ = !1)
          : m && C != null && C !== ""
            ? (I = u.entries.updateEntry({
                deprecatedMms3Url: f,
                mediaKey: C,
                mediaKeyTimestamp: b,
                encFilehash: h,
                type: k,
                sidecar: L,
                directPath: g,
                firstFrameSidecar: y,
                scansSidecar: S,
                scanLengths: v,
                staticUrl: R,
              }))
            : !m &&
              d != null &&
              (I = u.entries.updateUnencryptedEntry({
                filehash: d,
                directPath: g,
              })),
          I || (_ = !1),
          _ &&
            u.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
            (l.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT));
      }
      if (
        (u.consolidate(l) || u.notifyMsgsAsync(),
        _ && u.downloadStage === o("WAWebMediaTypes").DownloadStage.NEED_POKE)
      ) {
        var T;
        try {
          T = o("WAWebMmsMediaTypes").getMsgMediaType(n);
        } catch (e) {
          if (!a.type) throw e;
          T = o("WAWebMmsMediaTypes").msgToMediaType({
            type: a.type,
            isGif: n.isGif,
            isNewsletter: o("WAWebMsgGetters").getIsNewsletterMsg(n),
          });
        }
        o("WAWebMediaMmsV4Download").downloadMedia({
          mimetype: a.mimetype,
          mediaObject: u,
          downloadEvenIfExpensive: !1,
          mediaType: T,
          rmrReason: i,
          downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(n),
          chatWid: t,
          experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(n),
        });
      }
    }
    function p(e) {
      return e instanceof r("WAWebMediaOpaqueData")
        ? (u || (u = n("Promise"))).resolve(e)
        : r("WAWebMediaOpaqueData").createFromBase64Jpeg(e);
    }
    ((l.consolidateMediaUpdate = d), (l.consolidateMediaUpdateWithValues = m));
  },
  98,
);
