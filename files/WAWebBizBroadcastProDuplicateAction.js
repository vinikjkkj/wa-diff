__d(
  "WAWebBizBroadcastProDuplicateAction",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastContextualEntrypointUtils",
    "WAWebBizBroadcastNewBroadcastFlowRouter.react",
    "WAWebBizBroadcastProCampaignMessageData",
    "WAWebBizBroadcastProDuplicateCapability",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebFileTypeFromBytes",
    "WAWebFileUtils",
    "WAWebKeyboardTabUtils",
    "WAWebMimeTypes",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useLayoutEffect,
      m = new Set();
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebBizBroadcastProCampaignMessageData",
          ).fetchBizBroadcastProCampaignDuplicateData(e);
          t == null || t.throwIfAborted();
          var a = n.attachmentData;
          if (a != null) {
            if (a.previewUrl == null)
              throw r("err")("BB Pro source media is unavailable");
            var i = yield window.fetch(a.previewUrl, { signal: t });
            if (!i.ok) throw r("err")("BB Pro source media download failed");
            var l = yield i.blob();
            if (l.size === 0) throw r("err")("BB Pro source media is empty");
            var s = o("WAWebFileTypeFromBytes").fileTypeFromBytes(
                new Uint8Array(
                  yield o("WAWebFileUtils").blobToArrayBuffer(
                    l.slice(0, o("WAWebMimeTypes").MIMETYPE_DETERMINING_LENGTH),
                  ),
                ),
              ),
              u = s != null ? s : f(l.type, a),
              c = u.ext,
              d = u.mime;
            if (!d.startsWith(a.mediaType + "/"))
              throw r("err")(
                "BB Pro source media format does not match its content type",
              );
            var m = new File([l], "broadcast-media." + c, { type: d }),
              p = yield o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getAttachmentDataFromFile(m);
            if (p == null || p.mediaType !== a.mediaType)
              throw (v(p), r("err")("BB Pro source media cannot be edited"));
            ((t == null ? void 0 : t.aborted) === !0 &&
              (v(p), t.throwIfAborted()),
              (a = babelHelpers.extends({}, p, {
                file: m,
                fileExt: c,
                fileName: m.name,
                fileSize: m.size,
                mimetype: d,
              })));
          }
          return babelHelpers.extends(
            {
              attachmentData: a,
              campaignId: e,
              ctaButtonData: n.buttonData,
              isDuplicateBroadcast: !0,
              message: n.message,
            },
            n.maxBid != null ? { proMaxBid: n.maxBid } : {},
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n =
          t.fileExt != null &&
          (o("WAWebMimeTypes").EXT_TO_MIME == null
            ? void 0
            : o("WAWebMimeTypes").EXT_TO_MIME[t.fileExt]) === e
            ? t.fileExt
            : null,
        a =
          o("WAWebMimeTypes").getExtension(e).slice(1) ||
          (n != null
            ? n
            : Object.keys(
                o("WAWebMimeTypes").EXT_TO_MIME != null
                  ? o("WAWebMimeTypes").EXT_TO_MIME
                  : {},
              ).find(function (t) {
                return (
                  (o("WAWebMimeTypes").EXT_TO_MIME == null
                    ? void 0
                    : o("WAWebMimeTypes").EXT_TO_MIME[t]) === e
                );
              }));
      if (a != null && e.startsWith(t.mediaType + "/"))
        return { ext: a, mime: e };
      if (e !== "" && e !== "application/octet-stream")
        throw r("err")("BB Pro source media format is unsupported");
      var i =
        o("WAWebMimeTypes").getExtension(t.mimetype).slice(1) || t.fileExt;
      if (
        t.fileExt != null &&
        (o("WAWebMimeTypes").EXT_TO_MIME == null
          ? void 0
          : o("WAWebMimeTypes").EXT_TO_MIME[t.fileExt]) === t.mimetype &&
        i != null &&
        i !== "" &&
        t.mimetype.startsWith(t.mediaType + "/")
      )
        return { ext: i, mime: t.mimetype };
      throw r("err")("BB Pro source media format is unavailable");
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !(
              !o(
                "WAWebBizBroadcastProDuplicateCapability",
              ).isBizBroadcastProDuplicateEnabled() || m.has(t)
            )
          ) {
            m.add(t);
            var a = null,
              i = function () {
                a = null;
              };
            try {
              var l = yield p(t);
              if (
                ((a = l),
                !o(
                  "WAWebBizBroadcastProDuplicateCapability",
                ).isBizBroadcastProDuplicateEnabled())
              )
                return;
              var s = o(
                "WAWebDrawerManagerGlobalContext",
              ).getGlobalDrawerManager("fullscreen");
              if (s == null)
                throw r("err")("BB Pro composer drawer is unavailable");
              var u = yield s.openDrawer(
                c.jsx(y, { entryPoint: n, onCommit: i, source: l }),
                { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE },
              );
              u && i();
            } catch (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to duplicate BB Pro campaign",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("bb-pro-duplicate-prepare-failed"),
                b());
            } finally {
              var d;
              (v((d = a) == null ? void 0 : d.attachmentData), m.delete(t));
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.entryPoint,
        a = e.onCommit,
        i = e.source,
        l;
      (t[0] !== a ? ((l = [a]), (t[0] = a), (t[1] = l)) : (l = t[1]), d(a, l));
      var s;
      (t[2] !== i.attachmentData
        ? ((s = function () {
            return v(i.attachmentData);
          }),
          (t[2] = i.attachmentData),
          (t[3] = s))
        : (s = t[3]),
        r("useWAWebOnUnmount")(s));
      var u;
      return (
        t[4] !== n || t[5] !== i
          ? ((u = c.jsx(r("WAWebBizBroadcastNewBroadcastFlowRouter.react"), {
              entryPoint: n,
              onBack: C,
              requiresProConnection: !0,
              sourceBroadcastMessageData: i,
            })),
            (t[4] = n),
            (t[5] = i),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    function C() {
      return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function b() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Couldn\u2019t duplicate this broadcast. Its content must be available and supported. Try another broadcast.",
          ),
        }),
      );
    }
    function v(e) {
      var t = e == null ? void 0 : e.previewUrl;
      t != null && t.startsWith("blob:") && URL.revokeObjectURL(t);
    }
    ((l.prepareProCampaignDuplicate = p),
      (l.openProCampaignDuplicate = g),
      (l.showProDuplicateFailedToast = b));
  },
  226,
);
