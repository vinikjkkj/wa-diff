__d(
  "WAWebAttachMenuFilePicker",
  ["$InternalEnum", "WAWebMimeTypes"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "AUDIO",
      "DOCUMENT",
      "IMAGE",
      "VIDEO",
      "MEDIA",
    ]);
    function s(t, n, r) {
      var a,
        i =
          (a = t.acceptOverride) != null
            ? a
            : t.accept === e.AUDIO
              ? o("WAWebMimeTypes").AUDIO_MIMES
              : t.accept === e.DOCUMENT
                ? o("WAWebMimeTypes").DOC_MIMES
                : t.accept === e.IMAGE
                  ? o("WAWebMimeTypes").IMAGE_MIMES
                  : t.accept === e.VIDEO
                    ? o("WAWebMimeTypes").getVideoMimes()
                    : t.accept === e.MEDIA
                      ? o("WAWebMimeTypes").IMAGE_MIMES +
                        "," +
                        o("WAWebMimeTypes").getVideoMimes()
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              t.accept,
                          );
                        })(),
        l = document.createElement("input");
      ((l.type = "file"),
        (l.accept = i),
        (l.multiple = t.multiple),
        (l.style.display = "none"));
      var s = function () {
        l.remove();
      };
      ((l.onchange = function (e) {
        var o,
          a = e.target;
        if (a instanceof HTMLInputElement) {
          var i = Array.from((o = a.files) != null ? o : []);
          if ((s(), r(), !!i.length)) {
            var l = i.map(t.transformAttachment);
            n(l);
          }
        }
      }),
        (l.oncancel = function () {
          (s(), r());
        }),
        document.body.appendChild(l),
        l.click());
    }
    ((l.FilePickerMimeType = e), (l.createFilePicker = s));
  },
  98,
);
