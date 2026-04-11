__d(
  "WAWebFileUtils",
  [
    "Promise",
    "WAWebBoolFunc",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = Object.freeze({
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "audio",
        DOCUMENT: "document",
        STICKER: "sticker",
        STICKER_PACK: "sticker-pack",
      }),
      u = "NotReadableError",
      c = function (t) {
        var e;
        return (e = t == null ? void 0 : t.message) != null ? e : "";
      };
    function d(t) {
      var a;
      return new (e || (e = n("Promise")))(function (e, n) {
        ((a = new FileReader()),
          (a.onload = e),
          (a.onerror = function () {
            var e;
            n(
              ((e = a.error) == null ? void 0 : e.name) === u
                ? new (o("WAWebMiscErrors").FileNotReadableError)(
                    "blobToArrayBuffer error: " + c(a.error),
                  )
                : r("err")("blobToArrayBuffer error: " + c(a.error)),
            );
          }),
          (a.onabort = function () {
            n(r("err")("blobToArrayBuffer abort: " + c(a.error)));
          }),
          a.readAsArrayBuffer(t));
      }).then(function () {
        return a.result;
      });
    }
    function m(e) {
      var t = e.webkitSlice ? e.webkitSlice(0, 1) : e.slice(0, 1);
      return d(t)
        .then(function (e) {
          return e.byteLength === 1;
        })
        .catch(o("WAWebBoolFunc").returnFalse);
    }
    function p(t) {
      var o, a;
      return new (e || (e = n("Promise")))(function (e, n) {
        ((o = document.createElement("audio")),
          o.addEventListener("loadeddata", e),
          o.addEventListener("error", function () {
            n(r("err")("getAudioDuration: error loading audio"));
          }),
          (o.src = a = URL.createObjectURL(t)));
      })
        .then(function () {
          return ~~o.seekable.end(0);
        })
        .finally(function () {
          a && URL.revokeObjectURL(a);
        });
    }
    function _(e) {
      var t = e.split("/")[0];
      return t === s.IMAGE
        ? s.IMAGE
        : t === s.VIDEO
          ? s.VIDEO
          : t === s.AUDIO
            ? s.AUDIO
            : s.DOCUMENT;
    }
    function f(e) {
      var t = h(e),
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
    function g(e) {
      return e.replace(/\.+$/, "");
    }
    function h(e) {
      var t = g(e.trimRight()),
        n = t.split(".");
      return n.length > 1 ? n[n.length - 1].toLowerCase() : null;
    }
    function y(e, t, n) {
      var r = n || {},
        o = new Blob(e, r),
        a = o;
      return ((a.name = t), a);
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (typeof t.text == "function") return t.text();
          var o = new FileReader();
          if (
            (yield new (e || (e = n("Promise")))(function (e, n) {
              ((o.onload = e),
                (o.onerror = function (e) {
                  n(r("err")("blobToText error: " + String(e)));
                }),
                (o.onabort = function (e) {
                  n(r("err")("blobToText abort: " + String(e)));
                }),
                o.readAsText(t));
            }),
            o.result instanceof ArrayBuffer)
          )
            throw new TypeError(
              "blobToText error: Invalid result type: ArrayBuffer",
            );
          if (o.result == null)
            throw new TypeError("blobToText: Invalid result type: null");
          return o.result;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
    }
    ((l.FILETYPE = s),
      (l.blobToArrayBuffer = d),
      (l.validateBlob = m),
      (l.getAudioDuration = p),
      (l.typeFromMimetype = _),
      (l.getMimeTypeForFilepath = f),
      (l.removeTrailingDots = g),
      (l.getFileExtension = h),
      (l.createFile = y),
      (l.blobToText = C),
      (l.isDocument = v));
  },
  98,
);
