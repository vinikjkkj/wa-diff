__d(
  "composerMediaAttachmentReducerMediaPropertyHandlers",
  ["getIDFromMediaAttachment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.mediaAttachments;
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            mediaAttachments: n.map(function (e) {
              return (e.entID === t.attachmentId ||
                e.data.id === t.attachmentId) &&
                e.fileType === "VIDEO" &&
                e.state === "UPLOADED"
                ? babelHelpers.extends({}, e, {
                    data: babelHelpers.extends({}, e.data, {
                      closed_caption_settings: babelHelpers.extends(
                        {},
                        e.data.closed_caption_settings,
                        {
                          autogenerate_captions_on_upload:
                            t.autoGenerateCaptionOnUpload,
                          should_review_all_captions: t.shouldReviewAllCaptions,
                        },
                      ),
                    }),
                  })
                : e;
            }),
          });
    }
    function s(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e) {
          if (e === t.attachment) {
            switch (e.state) {
              case "NEW":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "PHOTO",
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "VIDEO",
                    });
                  default:
                    return e;
                }
              case "QUEUED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "PHOTO",
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "VIDEO",
                    });
                  default:
                    return e;
                }
              case "UPLOADING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "PHOTO",
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "VIDEO",
                    });
                  default:
                    return e;
                }
              case "UPLOADED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "PHOTO",
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "VIDEO",
                    });
                  default:
                    return e;
                }
              case "PREEXISTING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "PHOTO",
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "VIDEO",
                    });
                  case "UNKNOWN":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "UNKNOWN",
                    });
                }
                return e;
              case "FAILED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "PHOTO",
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, {
                        message: { text: t.caption },
                      }),
                      fileType: "VIDEO",
                    });
                  default:
                    return e;
                }
            }
            return e;
          } else return e;
        }),
      });
    }
    function u(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e) {
          if (
            r("getIDFromMediaAttachment")(e) ===
            r("getIDFromMediaAttachment")(t.attachment)
          ) {
            switch (e.state) {
              case "NEW":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return e;
                }
              case "QUEUED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return e;
                }
              case "UPLOADING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return e;
                }
              case "UPLOADED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return e;
                }
              case "FAILED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return e;
                }
              case "CLIENT_PROCESSING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return e;
                }
              case "PREEXISTING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      useCDNPreview: !0,
                    });
                  case "VIDEO":
                    return babelHelpers.extends({}, e, {
                      fileType: "VIDEO",
                      useCDNPreview: !0,
                    });
                  default:
                    return babelHelpers.extends({}, e, {
                      fileType: "UNKNOWN",
                      useCDNPreview: !0,
                    });
                }
            }
            return e;
          } else return e;
        }),
      });
    }
    function c(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e) {
          if (e.data.id === t.entID && e.state === "UPLOADED")
            switch (e.fileType) {
              case "PHOTO":
                return babelHelpers.extends({}, e, {
                  fileType: "PHOTO",
                  height: t.height,
                  width: t.width,
                });
              case "VIDEO":
                return babelHelpers.extends({}, e, {
                  fileType: "VIDEO",
                  height: t.height,
                  width: t.width,
                });
              default:
                return e;
            }
          else return e;
        }),
      });
    }
    function d(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e) {
          return r("getIDFromMediaAttachment")(e) ===
            r("getIDFromMediaAttachment")(t.attachment)
            ? p(t.height, t.width, e)
            : e;
        }),
      });
    }
    function m(e, t) {
      return babelHelpers.extends({}, e, {
        mediaAttachments: (e.mediaAttachments || []).map(function (e) {
          if (e.file && e.file.uploadID === t.uploadID)
            switch (e.state) {
              case "NEW":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      sphericalEncoding: t.sphericalEncoding,
                    });
                  default:
                    return e;
                }
              case "QUEUED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      sphericalEncoding: t.sphericalEncoding,
                    });
                  default:
                    return e;
                }
              case "UPLOADING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      sphericalEncoding: t.sphericalEncoding,
                    });
                  default:
                    return e;
                }
              case "UPLOADED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      sphericalEncoding: t.sphericalEncoding,
                    });
                  default:
                    return e;
                }
              case "FAILED":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      sphericalEncoding: t.sphericalEncoding,
                    });
                  default:
                    return e;
                }
              case "CLIENT_PROCESSING":
                switch (e.fileType) {
                  case "PHOTO":
                    return babelHelpers.extends({}, e, {
                      fileType: "PHOTO",
                      sphericalEncoding: t.sphericalEncoding,
                    });
                  default:
                    return e;
                }
              default:
                return e;
            }
          else return e;
        }),
      });
    }
    function p(e, t, n) {
      switch (n.fileType) {
        case "PHOTO":
          switch (n.state) {
            case "NEW":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "CLIENT_PROCESSING":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "CLIENT_PROCESSING_COMPLETE":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "QUEUED":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "UPLOADING":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "UPLOADED":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "FAILED":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            case "PREEXISTING":
              return babelHelpers.extends({}, n, {
                fileType: "PHOTO",
                height: e,
                width: t,
              });
            default:
              return n;
          }
        case "VIDEO":
          switch (n.state) {
            case "NEW":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "CLIENT_PROCESSING":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "CLIENT_PROCESSING_COMPLETE":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "QUEUED":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "UPLOADING":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "UPLOADED":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "FAILED":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            case "PREEXISTING":
              return babelHelpers.extends({}, n, {
                fileType: "VIDEO",
                height: e,
                width: t,
              });
            default:
              return n;
          }
        default:
          return n;
      }
    }
    ((l.setVideoAttachmentItemClosedCaptions = e),
      (l.setMediaAttachmentCaption = s),
      (l.setMediaAttachmentItemUseCDNPreview = u),
      (l.setMediaAttachmentItemCDNDimensions = c),
      (l.setMediaAttachmentItemDimensions = d),
      (l.setMediaAttachmentItemSphericalEncoding = m));
  },
  98,
);
