__d(
  "WAFlowsWebPreviewNativeComponentsHandler",
  [
    "Random",
    "WAFlowsDocumentPickerAllowedMIMEType",
    "WAFlowsMediaPicker.react",
    "WAFlowsNativeMediaEventTypes",
    "WAFlowsWebPreviewNativeComponentsMockData",
    "guid",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = [".pdf", ".docx", ".xlsx", ".pptx"],
      m = [".pdf", ".docx", ".xlsx", ".pptx", ".jpeg", ".png", ".zip"];
    function p() {
      var e = c([]),
        t = function (n) {
          var t = g(n);
          o("WAFlowsMediaPicker.react").dispatchMediaAdd(t);
          var r = h(t),
            a = 2e3,
            i = 3;
          (e.current.forEach(function (e) {
            return window.clearTimeout(e);
          }),
            (e.current = []));
          for (
            var l = function (n) {
                e.current.push(
                  window.setTimeout(function () {
                    (r.forEach(function (e) {
                      e.upload_state = { progress: 0.5 + n * 0.1 };
                    }),
                      o("WAFlowsMediaPicker.react").dispatchMediaState(r));
                  }, a * n),
                );
              },
              s = 1;
            s <= i;
            ++s
          )
            l(s);
          var u = y(t);
          e.current.push(
            window.setTimeout(
              function () {
                o("WAFlowsMediaPicker.react").dispatchMediaState(u);
              },
              a * i + 2e3,
            ),
          );
        };
      return (
        u(function () {
          return function () {
            return e.current.forEach(function (e) {
              return window.clearTimeout(e);
            });
          };
        }, []),
        t
      );
    }
    var _ = function (t) {
        var e = t.allowedMimeTypes,
          n = t.collectionId,
          a = t.maxFileSizeBytes,
          i = t.maxItems,
          l = [],
          s = r("Random").intBetween(1, i),
          u = (e != null ? e : []).map(function (e) {
            var t = Object.keys(r("WAFlowsDocumentPickerAllowedMIMEType")).find(
              function (t) {
                return r("WAFlowsDocumentPickerAllowedMIMEType")[t] === e;
              },
            );
            return (
              "." + (t != null ? t : "UNKNOWN").split("_")[0].toLowerCase()
            );
          }),
          c = (u == null ? void 0 : u.length) > 0 ? u : m;
        if (n != null)
          for (var p = 0; p < s; p++) {
            var _ = r("guid")(),
              f = r("Random").intBetween(1, a),
              g = c[r("Random").intBetween(0, c.length - 1)],
              h = _.substring(0, 4),
              y = "Doc file " + h + g,
              C = d.includes(g) ? r("Random").intBetween(1, 100) : 0,
              b = o(
                "WAFlowsWebPreviewNativeComponentsMockData",
              ).createMockDataForDocumentUpload(_, n, y, f, C);
            l.push(b);
          }
        return l;
      },
      f = function (t) {
        var e = t.collectionId,
          n = t.maxFileSizeBytes,
          a = t.maxItems,
          i = [],
          l = r("Random").intBetween(1, a);
        if (e != null)
          for (var s = 0; s < l; s++) {
            var u = r("guid")(),
              c = r("Random").intBetween(1, n),
              d = o("WAFlowsWebPreviewNativeComponentsMockData")
                .UploadedMediaThumbnailPreviewData[
                r("Random").intBetween(
                  0,
                  o("WAFlowsWebPreviewNativeComponentsMockData")
                    .UploadedMediaThumbnailPreviewData.length - 1,
                )
              ],
              m = [".jpg", ".png"],
              p = u.substring(0, 4),
              _ = "Media file " + p + m[r("Random").intBetween(0, 1)],
              f = o(
                "WAFlowsWebPreviewNativeComponentsMockData",
              ).createMockDataForPhotoUpload(u, e, _, c, d);
            i.push(f);
          }
        return i;
      },
      g = function (t) {
        return t.inputType ===
          o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.DOCUMENT
          ? _(t)
          : f(t);
      },
      h = function (t) {
        return t.map(function (e) {
          return {
            collection_id: e.collection_id,
            failed_state: null,
            media_id: e.media_id,
            success_state: null,
            upload_state: { progress: 0 },
          };
        });
      },
      y = function (t) {
        return t.map(function (e) {
          return o(
            "WAFlowsWebPreviewNativeComponentsMockData",
          ).createMockedDataUploadSuccessState(
            e.collection_id,
            e.media_id,
            e.media_metadata.file_size_bytes,
          );
        });
      };
    l.useHandleMediaSelect = p;
  },
  98,
);
