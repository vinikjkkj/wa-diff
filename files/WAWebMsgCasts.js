__d(
  "WAWebMsgCasts",
  ["invariant", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return L(
        e,
        "text, automated greeting or interactive (A2UI fallback text)",
        function (e) {
          return (
            E(e) ||
            e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE ||
            e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
      );
    }
    function u(e) {
      return L(e, "document", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
      });
    }
    function c(e) {
      return L(e, "document or interactive", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        );
      });
    }
    function d(e) {
      return L(e, "sticker", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
      });
    }
    function m(e) {
      return L(e, "sticker, text or music", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
          E(e) ||
          e.type === o("WAWebMsgType").MSG_TYPE.MUSIC
        );
      });
    }
    function p(e) {
      return L(e, "image, product or interactive", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          e.type === o("WAWebMsgType").MSG_TYPE.PRODUCT ||
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        );
      });
    }
    function _(e) {
      return L(e, "product or interactive", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.PRODUCT ||
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        );
      });
    }
    function f(e) {
      return L(e, "GIF", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif === !0;
      });
    }
    function g(e) {
      return L(e, "non-GIF video", k);
    }
    function h(e) {
      return L(e, "non-GIF video or interactive", function (e) {
        return k(e) || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE;
      });
    }
    function y(e) {
      return L(
        e,
        "album media (non-GIF video, image or revoked)",
        function (e) {
          return (
            k(e) ||
            e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            e.type === o("WAWebMsgType").MSG_TYPE.REVOKED
          );
        },
      );
    }
    function C(e) {
      return L(e, "poll result snapshot", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT;
      });
    }
    function b(e) {
      return L(e, "poll creation or poll result snapshot", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
          e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
        );
      });
    }
    function v(e) {
      return L(e, "interactive or native flow", function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
        );
      });
    }
    function S(e) {
      return L(e, "rich response", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE;
      });
    }
    function R(e) {
      return L(e, "PTV", function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.PTV;
      });
    }
    function L(e, t, n) {
      return e;
    }
    function E(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        e.type === o("WAWebMsgType").MSG_TYPE.HSM ||
        e.type === o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY
      );
    }
    function k(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif !== !0;
    }
    ((l.castToTextBodyMsg = e),
      (l.castToDocumentMsg = u),
      (l.castToDocumentOrInteractiveMsg = c),
      (l.castToStickerMsg = d),
      (l.castToStickerLikeMsg = m),
      (l.castToImageProductOrInteractiveMsg = p),
      (l.castToProductOrInteractiveMsg = _),
      (l.castToGifMsg = f),
      (l.castToNonGifVideoMsg = g),
      (l.castToNonGifVideoOrInteractiveMsg = h),
      (l.castToAlbumMediaMsg = y),
      (l.castToPollResultSnapshotMsg = C),
      (l.castToPollMsg = b),
      (l.castToInteractiveOrNativeFlowMsg = v),
      (l.castToRichResponseMsg = S),
      (l.castToPtvMsg = R));
  },
  98,
);
