__d(
  "WAWebFileUtils",
  [
    "WAWebBoolFunc",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMsgType",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "audio",
        DOCUMENT: "document",
        STICKER: "sticker",
        STICKER_PACK: "sticker-pack",
      }),
      s = "NotReadableError",
      u = function (t) {
        var e;
        return (e = t == null ? void 0 : t.message) != null ? e : "";
      };
    function c(e) {
      var t;
      return new Promise(function (n, a) {
        ((t = new FileReader()),
          (t.onload = n),
          (t.onerror = function () {
            var e;
            a(
              ((e = t.error) == null ? void 0 : e.name) === s
                ? new (o("WAWebMiscErrors").FileNotReadableError)(
                    "blobToArrayBuffer error: " + u(t.error),
                  )
                : r("err")("blobToArrayBuffer error: " + u(t.error)),
            );
          }),
          (t.onabort = function () {
            a(r("err")("blobToArrayBuffer abort: " + u(t.error)));
          }),
          t.readAsArrayBuffer(e));
      }).then(function () {
        return t.result;
      });
    }
    function d(e) {
      var t = e.webkitSlice ? e.webkitSlice(0, 1) : e.slice(0, 1);
      return c(t)
        .then(function (e) {
          return e.byteLength === 1;
        })
        .catch(o("WAWebBoolFunc").returnFalse);
    }
    function m(e) {
      var t, n;
      return new Promise(function (o, a) {
        ((t = document.createElement("audio")),
          t.addEventListener("loadeddata", o),
          t.addEventListener("error", function () {
            a(r("err")("getAudioDuration: error loading audio"));
          }),
          (t.src = n = URL.createObjectURL(e)));
      })
        .then(function () {
          return ~~t.seekable.end(0);
        })
        .finally(function () {
          n && URL.revokeObjectURL(n);
        });
    }
    function p(t) {
      var n = t.split("/")[0];
      return n === e.IMAGE
        ? e.IMAGE
        : n === e.VIDEO
          ? e.VIDEO
          : n === e.AUDIO
            ? e.AUDIO
            : e.DOCUMENT;
    }
    function _(e) {
      var t = g(e),
        n = o("WAWebMimeTypes").isAllowedDocumentMimetype(
          r("isStringNullOrEmpty")(t)
            ? null
            : o("WAWebMimeTypes").EXT_TO_MIME &&
                o("WAWebMimeTypes").EXT_TO_MIME[t],
          e,
          !1,
        );
      return n;
    }
    function f(e) {
      return e.replace(/\.+$/, "");
    }
    function g(e) {
      var t = f(e.trimRight()),
        n = t.split(".");
      return n.length > 1 ? n[n.length - 1].toLowerCase() : null;
    }
    function h(e, t, n) {
      var r = n || {},
        o = new Blob(e, r),
        a = o;
      return ((a.name = t), a);
    }
    async function y(e) {
      if (typeof e.text == "function") return e.text();
      var t = new FileReader();
      if (
        (await new Promise(function (n, o) {
          ((t.onload = n),
            (t.onerror = function (e) {
              o(r("err")("blobToText error: " + String(e)));
            }),
            (t.onabort = function (e) {
              o(r("err")("blobToText abort: " + String(e)));
            }),
            t.readAsText(e));
        }),
        t.result instanceof ArrayBuffer)
      ) {
        var n = new TypeError(
          "blobToText error: Invalid result type: ArrayBuffer",
        );
        throw (n.stack, n);
      }
      if (t.result == null) {
        var o = new TypeError("blobToText: Invalid result type: null");
        throw (o.stack, o);
      }
      return t.result;
    }
    function C(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
    }
    ((l.FILETYPE = e),
      (l.blobToArrayBuffer = c),
      (l.validateBlob = d),
      (l.getAudioDuration = m),
      (l.typeFromMimetype = p),
      (l.getMimeTypeForFilepath = _),
      (l.removeTrailingDots = f),
      (l.getFileExtension = g),
      (l.createFile = h),
      (l.blobToText = y),
      (l.isDocument = C));
  },
  98,
);
