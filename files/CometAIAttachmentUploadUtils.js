__d(
  "CometAIAttachmentUploadUtils",
  [
    "$InternalEnum",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "useCometAIFileUploadService",
    "useCometAIMultiFileUploadService",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useCallback,
      u = 40 * 1024 * 1024,
      c = 4;
    function d(e) {
      return e.type.startsWith("image/");
    }
    function m(e) {
      return e.type.startsWith("video/");
    }
    var p = n("$InternalEnum").Mirrored([
        "UNSUPPORTED_FILE_TYPE",
        "FILE_TOO_LARGE",
        "TOO_MANY_FILES",
        "HTTP_TRANSPORT_ERROR",
        "INVALID_FILE_DURATION",
        "MEDIA_CONVERSION_ERROR",
      ]),
      _ = function (t) {
        return t.size > u;
      },
      f = function (t, n) {
        return n.some(function (e) {
          return (
            t.type.match(e) !== null ||
            t.name.toLowerCase().endsWith(e.toLowerCase())
          );
        });
      };
    function g() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useCometAIMultiFileUploadService")(),
        n;
      e[0] !== t
        ? ((n = function (n, o, a) {
            var e = n.map(function (e) {
              var t = f(e, a);
              return t
                ? _(e)
                  ? {
                      file: e,
                      uploadedFileID: null,
                      uploadFailureReason: p.FILE_TOO_LARGE,
                      uploading: !1,
                    }
                  : {
                      file: e,
                      uploadedFileID: null,
                      uploadFailureReason: null,
                      uploading: !0,
                    }
                : {
                    file: e,
                    uploadedFileID: null,
                    uploadFailureReason: p.UNSUPPORTED_FILE_TYPE,
                    uploading: !1,
                  };
            });
            o(function (t) {
              return [].concat(t, e);
            });
            var i = e.filter(b).map(C);
            i.length !== 0 &&
              r("promiseDone")(
                t(i).then(function (e) {
                  o(function (t) {
                    return t.map(function (t) {
                      var n = e.find(function (e) {
                        return e.file === t.file;
                      });
                      return n == null
                        ? t
                        : babelHelpers.extends({}, t, {
                            uploadedFileID: n.file_id,
                            uploading: !1,
                          });
                    });
                  });
                }),
                null,
                function (e) {
                  o(h);
                },
              );
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i;
      return (
        e[2] !== a
          ? ((i = { processMultiFileUpload: a }), (e[2] = a), (e[3] = i))
          : (i = e[3]),
        i
      );
    }
    function h(e) {
      return e.map(y);
    }
    function y(e) {
      return babelHelpers.extends({}, e, {
        uploadFailureReason: p.HTTP_TRANSPORT_ERROR,
        uploading: !1,
      });
    }
    function C(e) {
      return e.file;
    }
    function b(e) {
      return e.uploadFailureReason == null;
    }
    function v() {
      var e = o("react-compiler-runtime").c(4),
        t = r("useCometAIFileUploadService")(),
        n;
      e[0] !== t
        ? ((n = function (n, o, a) {
            var e = f(n, a);
            if (!e) {
              o(function (e) {
                return [].concat(e, [
                  {
                    file: n,
                    uploadedFileID: null,
                    uploadFailureReason: p.UNSUPPORTED_FILE_TYPE,
                    uploading: !1,
                  },
                ]);
              });
              return;
            }
            if (_(n)) {
              o(function (e) {
                return [].concat(e, [
                  {
                    file: n,
                    uploadedFileID: null,
                    uploadFailureReason: p.FILE_TOO_LARGE,
                    uploading: !1,
                  },
                ]);
              });
              return;
            }
            (o(function (e) {
              return [].concat(e, [
                {
                  file: n,
                  uploadedFileID: null,
                  uploadFailureReason: null,
                  uploading: !0,
                },
              ]);
            }),
              r("promiseDone")(
                t([n]).then(function (e) {
                  var t = e.length > 0 ? e[0] : null;
                  o(function (e) {
                    return e.map(function (e) {
                      return e.file === n
                        ? {
                            file: e.file,
                            uploadedFileID: t,
                            uploadFailureReason:
                              t == null ? p.HTTP_TRANSPORT_ERROR : null,
                            uploading: !1,
                          }
                        : e;
                    });
                  });
                }),
                null,
                function (e) {
                  o(function (e) {
                    return e.map(function (e) {
                      return e.file === n
                        ? {
                            file: e.file,
                            uploadedFileID: null,
                            uploadFailureReason: p.HTTP_TRANSPORT_ERROR,
                            uploading: !1,
                          }
                        : e;
                    });
                  });
                },
              ));
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i;
      return (
        e[2] !== a
          ? ((i = { processSingleFileUpload: a }), (e[2] = a), (e[3] = i))
          : (i = e[3]),
        i
      );
    }
    ((l.MAX_FILE_ATTACHMENTS = c),
      (l.isImageAttachment = d),
      (l.isVideoAttachment = m),
      (l.UploadFailureReason = p),
      (l.isFileTooLarge = _),
      (l.useProcessMultiFileUpload = g),
      (l.useProcessSingleFileUpload = v));
  },
  98,
);
