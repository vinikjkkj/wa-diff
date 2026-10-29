__d(
  "WAWebImagineActionLogger",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.chat,
            r = e.isCancelled,
            a = e.isSent,
            i = e.maxIndex,
            l = e.mediaType,
            s = e.source,
            u = e.target;
          if (V(n))
            try {
              o("WAWebLogImagineAction").logImagineAction({
                action: t,
                source: s,
                target: u,
                mediaType: l,
                maxIndex: i,
                isCancelled: r,
                isSent: a,
                eventContext: yield o(
                  "WAWebGetMetaAiImagineEventContext",
                ).getMetaAiImagineEventContext(n),
              });
            } catch (e) {
              H(e);
            }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_CLICK,
            chat: e,
            source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
              .CAMERA,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .IMAGE,
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_CAPTURE_NEW,
            chat: e,
            source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
              .CAMERA,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .IMAGE,
            maxIndex: 1,
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_SEND_CONFIRM,
            chat: e,
            source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
              .CAMERA,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .IMAGE,
            maxIndex: 1,
            isSent: !0,
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_SEND_CANCEL,
            chat: e,
            source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
              .CAMERA,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .IMAGE,
            maxIndex: t,
            isCancelled: !0,
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_DOCUMENT_CLICK,
            chat: e,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .DOCUMENT,
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
            chat: e,
            mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
              .DOCUMENT,
            maxIndex: t,
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = x(t);
          (yield u({
            action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_CLICK,
            chat: e,
            mediaType: n,
          }),
            yield u({
              action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
                .MEDIA_INPUT_GALLERY_CLICK,
              chat: e,
              mediaType: n,
            }));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (V(e)) {
            var n;
            try {
              n = yield q(t);
            } catch (e) {
              H(e);
              return;
            }
            yield u({
              action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
                .MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
              chat: e,
              mediaType: n,
              maxIndex: t.length,
            });
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return e.length > 0 && e.every(K)
        ? o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE.CAMERA
        : e.length > 0 && e.every(T)
          ? o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE.CHAT_TRAY
          : o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
              .ATTACHMEMT_TRAY;
    }
    function T(e) {
      return (
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .PASTE ||
        e ===
          o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
            .EXTERNAL_DROP
      );
    }
    function D(e) {
      var t,
        n = 0;
      for (var r of e) {
        var a = Q(r);
        a != null &&
          ((n += 1),
          t != null && t !== a
            ? (t = o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED)
            : t == null && (t = a));
      }
      return t == null ? null : { mediaType: t, maxIndex: n };
    }
    function x(e) {
      var t;
      return (t = D(e)) == null ? void 0 : t.mediaType;
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield G(
            o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_SEND_CONFIRM,
            e,
            { isSent: !0 },
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield G(
            o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_SEND_CANCEL,
            e,
            { isCancelled: !0 },
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield G(
            o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_SIZE_EXCEED_LIMIT,
            e,
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield G(
            o("WAWebWamEnumImagineAction").IMAGINE_ACTION
              .MEDIA_INPUT_COPY_PASTE,
            e,
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = D(t);
          n != null &&
            (yield u({
              action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
                .MEDIA_INPUT_FORWARD_SELECTION,
              chat: e,
              source: o("WAWebWamEnumImagineActionSource").IMAGINE_ACTION_SOURCE
                .FORWARD,
              mediaType: n.mediaType,
              maxIndex: n.maxIndex,
            }));
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (s || (s = n("Promise"))).all(e),
            r = t.some(j),
            a = t.some(function (e) {
              return !j(e);
            });
          return r && a
            ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED
            : r
              ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO
              : o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return o("WAWebBotUtils").isMetaAiBot(e.id);
    }
    function H(t) {
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
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.chat,
            o = t.mediaTypes,
            a = t.origins,
            i = D(o);
          i != null &&
            (yield u(
              babelHelpers.extends(
                {
                  action: e,
                  chat: r,
                  source: I(a),
                  mediaType: i.mediaType,
                  maxIndex: i.maxIndex,
                },
                n,
              ),
            ));
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      var t;
      return (
        ((t = e.type) != null
          ? t
          : o("WAWebFileUtils").typeFromMimetype(e.file.type)) ===
        o("WAWebMsgType").MSG_TYPE.VIDEO
      );
    }
    function K(e) {
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
    function Q(e) {
      return e === o("WAWebMsgType").MSG_TYPE.IMAGE
        ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO
          : e === o("WAWebMsgType").MSG_TYPE.DOCUMENT
            ? o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.DOCUMENT
            : void 0;
    }
    ((l.logImagineActionForChat = u),
      (l.logImagineCameraClick = d),
      (l.logImagineCameraCapture = p),
      (l.logImagineCameraSend = f),
      (l.logImagineCameraCancel = h),
      (l.logImagineDocumentClick = C),
      (l.logImagineDocumentSelectionConfirmed = v),
      (l.logImagineGalleryOpen = R),
      (l.logImagineGallerySelectionConfirmed = E),
      (l.resolveImagineActionSource = I),
      (l.isPasteOrDropOrigin = T),
      (l.getImagineMediaSummary = D),
      (l.resolveImagineMediaType = x),
      (l.logImagineMediaSendConfirm = $),
      (l.logImagineMediaSendCancel = N),
      (l.logImagineMediaSizeExceedLimit = w),
      (l.logImagineMediaCopyPaste = F),
      (l.logImagineForwardSelection = B),
      (l.resolveImagineGalleryMediaType = q));
  },
  98,
);
