__d(
  "WAWebImagineActionLogger",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebFileUtils",
    "WAWebGetMetaAiImagineEventContext",
    "WAWebLogImagineAction",
    "WAWebMsgType",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineActionSource",
    "WAWebWamEnumImagineMediaType",
    "WAWebWamEnumMediaPickerOriginType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(e) {
      var t = e.action,
        n = e.chat,
        r = e.isCancelled,
        a = e.isSent,
        i = e.maxIndex,
        l = e.mediaType,
        s = e.source,
        u = e.target;
      if (I(n))
        try {
          o("WAWebLogImagineAction").logImagineAction({
            action: t,
            source: s,
            target: u,
            mediaType: l,
            maxIndex: i,
            isCancelled: r,
            isSent: a,
            eventContext: await o(
              "WAWebGetMetaAiImagineEventContext",
            ).getMetaAiImagineEventContext(n),
          });
        } catch (e) {
          T(e);
        }
    }
    async function u(e) {
      await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_CLICK,
        chat: e,
        source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
          .CAMERA,
        mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
      });
    }
    async function c(e) {
      await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
          .MEDIA_INPUT_CAPTURE_NEW,
        chat: e,
        source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
          .CAMERA,
        mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
        maxIndex: 1,
      });
    }
    async function d(e) {
      await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
          .MEDIA_INPUT_SEND_CONFIRM,
        chat: e,
        source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
          .CAMERA,
        mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
        maxIndex: 1,
        isSent: !0,
      });
    }
    async function m(e, t) {
      await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
          .MEDIA_INPUT_SEND_CANCEL,
        chat: e,
        source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
          .CAMERA,
        mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE,
        maxIndex: t,
        isCancelled: !0,
      });
    }
    async function p(e) {
      await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
          .MEDIA_INPUT_DOCUMENT_CLICK,
        chat: e,
        mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
          .DOCUMENT,
      });
    }
    async function _(e, t) {
      await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
          .MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
        chat: e,
        mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
          .DOCUMENT,
        maxIndex: t,
      });
    }
    async function f(e, t) {
      var n = b(t);
      (await s({
        action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_CLICK,
        chat: e,
        mediaType: n,
      }),
        await s({
          action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
            .MEDIA_INPUT_GALLERY_CLICK,
          chat: e,
          mediaType: n,
        }));
    }
    async function g(e, t) {
      if (I(e)) {
        var n;
        try {
          n = await k(t);
        } catch (e) {
          T(e);
          return;
        }
        await s({
          action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
            .MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
          chat: e,
          mediaType: n,
          maxIndex: t.length,
        });
      }
    }
    function h(e) {
      return e.length > 0 && e.every($)
        ? o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE.CAMERA
        : e.length > 0 && e.every(y)
          ? o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE.CHAT_TRAY
          : o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
              .ATTACHMEMT_TRAY;
    }
    function y(e) {
      return (
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .PASTE ||
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .EXTERNAL_DROP
      );
    }
    function C(e) {
      var t,
        n = 0;
      for (var r of e) {
        var a = P(r);
        a != null &&
          ((n += 1),
          t != null && t !== a
            ? (t = o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED)
            : t == null && (t = a));
      }
      return t == null ? null : { mediaType: t, maxIndex: n };
    }
    function b(e) {
      var t;
      return (t = C(e)) == null ? void 0 : t.mediaType;
    }
    async function v(e) {
      await D(
        o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CONFIRM,
        e,
        { isSent: !0 },
      );
    }
    async function S(e) {
      await D(
        o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_SEND_CANCEL,
        e,
        { isCancelled: !0 },
      );
    }
    async function R(e) {
      await D(
        o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_SIZE_EXCEED_LIMIT,
        e,
      );
    }
    async function L(e) {
      await D(
        o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_COPY_PASTE,
        e,
      );
    }
    async function E(e, t) {
      var n = C(t);
      n != null &&
        (await s({
          action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
            .MEDIA_INPUT_FORWARD_SELECTION,
          chat: e,
          source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
            .FORWARD,
          mediaType: n.mediaType,
          maxIndex: n.maxIndex,
        }));
    }
    async function k(e) {
      var t = await Promise.all(e),
        n = t.some(x),
        r = t.some(function (e) {
          return !x(e);
        });
      return n && r
        ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED
        : n
          ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO
          : o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE;
    }
    function I(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.id);
    }
    function T(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "imagine_actions media event was not logged",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("imagine-action-log-failed");
    }
    async function D(e, t, n) {
      var r = t.chat,
        o = t.mediaTypes,
        a = t.origins,
        i = C(o);
      i != null &&
        (await s(
          babelHelpers.extends(
            {
              action: e,
              chat: r,
              source: h(a),
              mediaType: i.mediaType,
              maxIndex: i.maxIndex,
            },
            n,
          ),
        ));
    }
    function x(e) {
      var t;
      return (
        ((t = e.type) != null
          ? t
          : o("WAWebFileUtils").typeFromMimetype(e.file.type)) ===
        o("WAWebMsgType").MSG_TYPE.VIDEO
      );
    }
    function $(e) {
      return (
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .MENU_CAMERA_CAPTURE ||
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .CAMERA_TAB_CAPTURE ||
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .EXTERNAL_CAMERA
      );
    }
    function P(e) {
      return e === o("WAWebMsgType").MSG_TYPE.IMAGE
        ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO
          : e === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.DOCUMENT
            : void 0;
    }
    ((l.logImagineActionForChat = s),
      (l.logImagineCameraClick = u),
      (l.logImagineCameraCapture = c),
      (l.logImagineCameraSend = d),
      (l.logImagineCameraCancel = m),
      (l.logImagineDocumentClick = p),
      (l.logImagineDocumentSelectionConfirmed = _),
      (l.logImagineGalleryOpen = f),
      (l.logImagineGallerySelectionConfirmed = g),
      (l.resolveImagineActionSource = h),
      (l.isPasteOrDropOrigin = y),
      (l.getImagineMediaSummary = C),
      (l.resolveImagineMediaType = b),
      (l.logImagineMediaSendConfirm = v),
      (l.logImagineMediaSendCancel = S),
      (l.logImagineMediaSizeExceedLimit = R),
      (l.logImagineMediaCopyPaste = L),
      (l.logImagineForwardSelection = E),
      (l.resolveImagineGalleryMediaType = k));
  },
  98,
);
