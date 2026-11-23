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
    "err",
    "getErrorSafe",
    "react",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useLayoutEffect,
      m = new Set();
    async function p(e, t) {
      var n = await o(
        "WAWebBizBroadcastProCampaignMessageData",
      ).fetchBizBroadcastProCampaignDuplicateData(e);
      t == null || t.throwIfAborted();
      var a = n.attachmentData;
      if (a != null) {
        if (a.previewUrl == null)
          throw r("err")("BB Pro source media is unavailable");
        var i = await window.fetch(a.previewUrl, { signal: t });
        if (!i.ok) throw r("err")("BB Pro source media download failed");
        var l = await i.blob();
        if (l.size === 0) throw r("err")("BB Pro source media is empty");
        var s = o("WAWebFileTypeFromBytes").fileTypeFromBytes(
            new Uint8Array(
              await o("WAWebFileUtils").blobToArrayBuffer(
                l.slice(0, o("WAWebMimeTypes").MIMETYPE_DETERMINING_LENGTH),
              ),
            ),
          ),
          u = s != null ? s : _(l.type, a),
          c = u.ext,
          d = u.mime;
        if (!d.startsWith(a.mediaType + "/"))
          throw r("err")(
            "BB Pro source media format does not match its content type",
          );
        var m = new File([l], "broadcast-media." + c, { type: d }),
          p = await o(
            "WAWebBizBroadcastContextualEntrypointUtils",
          ).getAttachmentDataFromFile(m);
        if (p == null || p.mediaType !== a.mediaType)
          throw (y(p), r("err")("BB Pro source media cannot be edited"));
        ((t == null ? void 0 : t.aborted) === !0 && (y(p), t.throwIfAborted()),
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
    }
    function _(e, t) {
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
    async function f(t, n) {
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
          var l = await p(t);
          if (
            ((a = l),
            !o(
              "WAWebBizBroadcastProDuplicateCapability",
            ).isBizBroadcastProDuplicateEnabled())
          )
            return;
          var s = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "fullscreen",
          );
          if (s == null)
            throw r("err")("BB Pro composer drawer is unavailable");
          var u = await s.openDrawer(
            c.jsx(g, { entryPoint: n, onCommit: i, source: l }),
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
            h());
        } finally {
          var d;
          (y((d = a) == null ? void 0 : d.attachmentData), m.delete(t));
        }
      }
    }
    function g(e) {
      var t = e.entryPoint,
        n = e.onCommit,
        a = e.source;
      return (
        d(n, [n]),
        r("useWAWebOnUnmount")(function () {
          return y(a.attachmentData);
        }),
        c.jsx(r("WAWebBizBroadcastNewBroadcastFlowRouter.react"), {
          entryPoint: t,
          onBack: function () {
            return o(
              "WAWebDrawerManager",
            ).DrawerManager.closeDrawerFullscreen();
          },
          requiresProConnection: !0,
          sourceBroadcastMessageData: a,
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    function y(e) {
      var t = e == null ? void 0 : e.previewUrl;
      t != null && t.startsWith("blob:") && URL.revokeObjectURL(t);
    }
    ((l.prepareProCampaignDuplicate = p),
      (l.openProCampaignDuplicate = f),
      (l.showProDuplicateFailedToast = h));
  },
  226,
);
